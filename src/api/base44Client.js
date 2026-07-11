"use client";
import { supabase, isSupabaseConfigured, STORE_ID } from "@/lib/supabaseClient";
import { PRODUCT_DATA } from "@/lib/productData";
import { z } from "zod";

// Zod schema for quote/inquiry submissions.
// Validated before every INSERT to prevent malformed or oversized payloads
// being written directly to the database via the public anon key.
const QuoteSchema = z.object({
  first_name: z.string().min(1).max(100),
  last_name: z.string().min(1).max(100),
  email: z.string().email().max(254),
  phone: z.string().max(30).optional().default(""),
  company: z.string().max(200).optional().default(""),
  additional_notes: z.string().max(2000).optional().default(""),
  quantity: z.number().int().min(1).max(9999),
  main_category: z.string().max(100).optional(),
  modified_subtype: z.string().max(100).optional(),
  container_size: z.string().max(50).optional(),
  container_type: z.string().max(100).optional(),
  condition: z.string().max(50).optional(),
  color: z.string().max(50).optional(),
  country: z.string().max(100).optional(),
  unloading_method: z.string().max(100).optional(),
  desired_delivery_date: z.string().max(20).optional(),
  product_id: z.string().uuid().optional().nullable(),
});

// Dashboard's `condition` column uses English codes; the storefront UI/filters
// (ShopFilters, ProductCard) expect the German labels used since launch.
const CONDITION_LABELS = {
  new: "Neu",
  used: "Gebraucht",
  refurbished: "Generalüberholt",
};

// Free-form `attributes` JSON keys the dashboard currently writes per product.
// Keep in sync with the dashboard team if they rename/add keys.
const ATTR_KEYS = {
  size: "Size",
  containerType: "Container Type",
  color: "Color",
  material: "Material",
  floor: "Floor",
  doors: "Doors",
  weight: "Weight",
  payload: "Payload",
  certifications: "Certifications",
  outerLength: "Outer Length",
  outerWidth: "Outer Width",
  outerHeight: "Outer Height",
};

function mapProductRow(row) {
  const attrs = row.attributes || {};
  const images = Array.isArray(row.images) ? row.images : [];
  const certifications = attrs[ATTR_KEYS.certifications] || "";

  return {
    id: row.id,
    slug: row.slug,
    title: row.name,
    short_description: row.short_description || row.description || "",
    description: row.description || "",
    price_from: row.price,
    condition: CONDITION_LABELS[row.condition] || row.condition,
    condition_code: row.condition, // raw DB code ("new"/"used"/"refurbished") for locale-aware display
    size: attrs[ATTR_KEYS.size],
    container_type: attrs[ATTR_KEYS.containerType],
    color: attrs[ATTR_KEYS.color],
    material: attrs[ATTR_KEYS.material],
    floor: attrs[ATTR_KEYS.floor],
    doors: attrs[ATTR_KEYS.doors],
    weight: attrs[ATTR_KEYS.weight],
    payload: attrs[ATTR_KEYS.payload],
    outer_length: attrs[ATTR_KEYS.outerLength],
    outer_width: attrs[ATTR_KEYS.outerWidth],
    outer_height: attrs[ATTR_KEYS.outerHeight],
    csc_certified: /csc/i.test(certifications),
    weather_resistant: /iso/i.test(certifications),
    badge: row.badge || null,
    is_featured: Boolean(row.is_featured),
    is_available: row.status === "active",
    image_url: images[0] || "",
    gallery_urls: images.slice(1),
    image_alts: Array.isArray(row.image_alts) ? row.image_alts : [],
    brand: row.brand || null,
  };
}

function mapCategoryRow(row) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    description: row.description || "",
    image_url: row.image_url || "",
    is_featured: Boolean(row.is_featured),
    display_order: row.display_order ?? 0,
    meta_title: row.meta_title || "",
    meta_description: row.meta_description || "",
  };
}

const supabaseProducts = {
  list: async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("store_id", STORE_ID);
    if (error) throw error;
    return (data || []).map(mapProductRow);
  },
  filter: async (criteria = {}) => {
    const all = await supabaseProducts.list();
    return all.filter((item) =>
      Object.entries(criteria).every(([key, value]) => item[key] === value)
    );
  },
  get: async (idOrSlug) => {
    // `id` is a uuid column — querying it with a non-uuid slug throws a cast
    // error before RLS/filtering even runs, so branch on shape instead of OR-ing.
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrSlug);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("store_id", STORE_ID)
      .eq(isUuid ? "id" : "slug", idOrSlug)
      .limit(1);
    if (error) throw error;
    if (!data?.length) throw new Error("Product not found");
    return mapProductRow(data[0]);
  },
  // Product writes happen in the separate dashboard app; the anon key has no
  // write access here (RLS blocks it). These are no-op stubs so the admin UI
  // doesn't crash, but nothing is persisted.
  create: async (data) => ({ id: `local-${Date.now()}`, ...data }),
  update: async (id, data) => ({ id, ...data }),
  delete: async () => true,
};

const supabaseCategories = {
  list: async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("store_id", STORE_ID);
    if (error) throw error;
    return (data || []).map(mapCategoryRow);
  },
  filter: async (criteria = {}) => {
    const all = await supabaseCategories.list();
    return all.filter((item) =>
      Object.entries(criteria).every(([key, value]) => item[key] === value)
    );
  },
  get: async (id) => {
    const all = await supabaseCategories.list();
    const item = all.find((entry) => entry.id === id);
    if (!item) throw new Error("Category not found");
    return item;
  },
  create: async (data) => ({ id: `local-${Date.now()}`, ...data }),
  update: async (id, data) => ({ id, ...data }),
  delete: async () => true,
};

function mapAttributeRow(row) {
  return { id: row.id, name: row.name };
}

function mapAttributeValueRow(row) {
  return {
    id: row.id,
    attribute_id: row.attribute_id,
    value: row.value,
    // Not yet columns on attribute_values — read through now so this lights
    // up automatically once the dashboard adds them, no further code change.
    label: row.label || "",
    image_url: row.image_url || "",
    description: row.description || "",
  };
}

const supabaseAttributes = {
  list: async () => {
    const { data, error } = await supabase
      .from("attributes")
      .select("*")
      .eq("store_id", STORE_ID);
    if (error) throw error;
    return (data || []).map(mapAttributeRow);
  },
  filter: async (criteria = {}) => {
    const all = await supabaseAttributes.list();
    return all.filter((item) =>
      Object.entries(criteria).every(([key, value]) => item[key] === value)
    );
  },
  get: async (id) => {
    const all = await supabaseAttributes.list();
    const item = all.find((entry) => entry.id === id);
    if (!item) throw new Error("Attribute not found");
    return item;
  },
  create: async (data) => ({ id: `local-${Date.now()}`, ...data }),
  update: async (id, data) => ({ id, ...data }),
  delete: async () => true,
};

const supabaseAttributeValues = {
  // attribute_values has no store_id column of its own — it's scoped via the
  // parent attribute's store_id, so list/filter here always goes through
  // supabaseAttributes.list() first to find this store's attribute ids.
  list: async () => {
    const attributes = await supabaseAttributes.list();
    const attributeIds = attributes.map((a) => a.id);
    if (attributeIds.length === 0) return [];
    const { data, error } = await supabase
      .from("attribute_values")
      .select("*")
      .in("attribute_id", attributeIds);
    if (error) throw error;
    return (data || []).map(mapAttributeValueRow);
  },
  filter: async (criteria = {}) => {
    const all = await supabaseAttributeValues.list();
    return all.filter((item) =>
      Object.entries(criteria).every(([key, value]) => item[key] === value)
    );
  },
  get: async (id) => {
    const all = await supabaseAttributeValues.list();
    const item = all.find((entry) => entry.id === id);
    if (!item) throw new Error("Attribute value not found");
    return item;
  },
  create: async (data) => ({ id: `local-${Date.now()}`, ...data }),
  update: async (id, data) => ({ id, ...data }),
  delete: async () => true,
};

const supabaseQuoteRequests = {
  create: async (quote) => {
    // Validate and sanitise before touching the database.
    // Throws ZodError with field-level detail if anything is invalid.
    const parsed = QuoteSchema.parse({
      ...quote,
      quantity: Number(quote.quantity),
      product_id: quote.product_id || null,
    });

    const customerName = [parsed.first_name, parsed.last_name].filter(Boolean).join(" ");
    const message = [
      parsed.company ? `Firma: ${parsed.company}` : null,
      parsed.additional_notes || null,
    ].filter(Boolean).join("\n\n");

    const { container_size, container_type, main_category, modified_subtype, condition, color, quantity, country, unloading_method, desired_delivery_date } = parsed;

    // No .select() here: the "inquiries" table grants anon INSERT only, no
    // SELECT — requesting the row back (INSERT ... RETURNING) fails RLS.
    const { error } = await supabase.from("inquiries").insert({
      store_id: STORE_ID,
      product_id: parsed.product_id || null,
      customer_name: customerName,
      customer_email: parsed.email,
      customer_phone: parsed.phone,
      message,
      details: {
        main_category,
        modified_subtype,
        container_size,
        container_type,
        condition,
        color,
        quantity,
        country,
        unloading_method,
        desired_delivery_date,
      },
    });
    if (error) throw error;
    return parsed;
  },
};

// In-memory entities used when Supabase isn't configured (local dev without
// env vars) and for everything the dashboard doesn't expose a write/read path
// for yet (Attribute, AttributeValue, User, auth, file uploads).
const findLocalProduct = (idOrSlug) =>
  PRODUCT_DATA.find((product) => product.id === idOrSlug || product.slug === idOrSlug);

const createLocalEntity = (items = []) => ({
  list: async () => items,
  filter: async (criteria = {}) =>
    items.filter((item) =>
      Object.entries(criteria).every(([key, value]) => item[key] === value)
    ),
  get: async (id) => {
    const item = items.find((entry) => entry.id === id);
    if (!item) throw new Error("Local item not found");
    return item;
  },
  create: async (data) => ({ id: `local-${Date.now()}`, ...data }),
  update: async (id, data) => ({ id, ...data }),
  delete: async () => true,
});

const localAuth = {
  me: async () => {
    const error = new Error("Local auth is not configured");
    error.status = 401;
    throw error;
  },
  loginViaEmailPassword: async () => {
    throw new Error("Auth is not configured for local preview");
  },
  register: async () => {
    throw new Error("Auth is not configured for local preview");
  },
  verifyOtp: async () => {
    throw new Error("Auth is not configured for local preview");
  },
  resendOtp: async () => {
    throw new Error("Auth is not configured for local preview");
  },
  resetPasswordRequest: async () => {
    throw new Error("Auth is not configured for local preview");
  },
  resetPassword: async () => {
    throw new Error("Auth is not configured for local preview");
  },
  loginWithProvider: () => {},
  setToken: () => {},
  logout: () => {},
  redirectToLogin: () => {
    if (typeof window !== "undefined") window.location.href = "/login";
  },
};

export const base44 = {
  auth: localAuth,
  entities: {
    Product: isSupabaseConfigured
      ? supabaseProducts
      : {
          ...createLocalEntity(PRODUCT_DATA),
          get: async (idOrSlug) => {
            const product = findLocalProduct(idOrSlug);
            if (!product) throw new Error("Local product not found");
            return product;
          },
        },
    Category: isSupabaseConfigured ? supabaseCategories : createLocalEntity(),
    QuoteRequest: isSupabaseConfigured ? supabaseQuoteRequests : createLocalEntity(),
    Attribute: isSupabaseConfigured ? supabaseAttributes : createLocalEntity(),
    AttributeValue: isSupabaseConfigured ? supabaseAttributeValues : createLocalEntity(),
    User: createLocalEntity(),
  },
  integrations: {
    Core: {
      UploadFile: async () => {
        throw new Error("File upload requires the dashboard app's backend");
      },
    },
  },
};

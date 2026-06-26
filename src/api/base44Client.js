"use client";
import { createClient } from '@base44/sdk';
import { appParams, isBase44Configured } from '@/lib/app-params';
import { PRODUCT_DATA } from '@/lib/productData';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

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

const localBase44 = {
  auth: {
    me: async () => {
      const error = new Error("Local Base44 auth is not configured");
      error.status = 401;
      throw error;
    },
    loginViaEmailPassword: async () => {
      throw new Error("Base44 auth is not configured for local preview");
    },
    register: async () => {
      throw new Error("Base44 auth is not configured for local preview");
    },
    verifyOtp: async () => {
      throw new Error("Base44 auth is not configured for local preview");
    },
    resendOtp: async () => {
      throw new Error("Base44 auth is not configured for local preview");
    },
    resetPasswordRequest: async () => {
      throw new Error("Base44 auth is not configured for local preview");
    },
    resetPassword: async () => {
      throw new Error("Base44 auth is not configured for local preview");
    },
    loginWithProvider: () => {},
    setToken: () => {},
    logout: () => {},
    redirectToLogin: () => {
      if (typeof window !== "undefined") window.location.href = "/login";
    },
  },
  entities: {
    Product: {
      ...createLocalEntity(PRODUCT_DATA),
      get: async (idOrSlug) => {
        const product = findLocalProduct(idOrSlug);
        if (!product) throw new Error("Local product not found");
        return product;
      },
    },
    QuoteRequest: createLocalEntity(),
    Category: createLocalEntity(),
    Attribute: createLocalEntity(),
    AttributeValue: createLocalEntity(),
    User: createLocalEntity(),
  },
  integrations: {
    Core: {
      UploadFile: async () => {
        throw new Error("File upload requires a configured Base44 backend");
      },
    },
  },
};

// Create the real SDK client only when Base44 env vars are present.
export const base44 = isBase44Configured ? createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: '',
  requiresAuth: false,
  appBaseUrl
}) : localBase44;

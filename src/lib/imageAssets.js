export const DIE_CONTAINER_IMAGES = {
  crane: "/images/crane-is-hoisting-containers.avif",
  yard: "/images/die-container-yard.jpeg",
  mobileWohncontainer: "/images/mobiler-wohncontainer.jpg",
  wohncontainerTransport: "/images/wohncontainer-transport.jpg",
  wohncontainers: "/images/wohncontainers.jpg",
  newShippingContainers: "/images/neue-versand-container-kaufen.jpg",
  usedSeecontainers: "/images/gebrauchte-seecontainer.png",
  shippingLogistics: "/images/shipping-container-logistics.jpeg",
  category10ft: "/images/container-category-10ft.png",
  category20ft: "/images/container-category-20ft.png",
  category40ft: "/images/container-category-40ft.png",
};

export const DEFAULT_CONTAINER_GALLERY = [
  DIE_CONTAINER_IMAGES.newShippingContainers,
  DIE_CONTAINER_IMAGES.usedSeecontainers,
  DIE_CONTAINER_IMAGES.shippingLogistics,
  DIE_CONTAINER_IMAGES.yard,
];

export const CATEGORY_IMAGES = {
  Seecontainer: DIE_CONTAINER_IMAGES.usedSeecontainers,
  "Kühlcontainer": DIE_CONTAINER_IMAGES.shippingLogistics,
  "Modifizierter Container": DIE_CONTAINER_IMAGES.mobileWohncontainer,
  "Container Garage": DIE_CONTAINER_IMAGES.newShippingContainers,
  "Bürocontainer": DIE_CONTAINER_IMAGES.mobileWohncontainer,
  Wohncontainer: DIE_CONTAINER_IMAGES.wohncontainers,
  "Doppeltür": DIE_CONTAINER_IMAGES.usedSeecontainers,
  "Open Side": DIE_CONTAINER_IMAGES.newShippingContainers,
  Lagercontainer: DIE_CONTAINER_IMAGES.yard,
};

export const SIZE_IMAGES = {
  "10ft": DIE_CONTAINER_IMAGES.category10ft,
  "20ft": DIE_CONTAINER_IMAGES.category20ft,
  "40ft": DIE_CONTAINER_IMAGES.category40ft,
};

export const TYPE_IMAGES = {
  Standard: DIE_CONTAINER_IMAGES.newShippingContainers,
  "High Cube": DIE_CONTAINER_IMAGES.yard,
  "Open Side": DIE_CONTAINER_IMAGES.newShippingContainers,
  "Kühlcontainer": DIE_CONTAINER_IMAGES.shippingLogistics,
  "Doppeltür": DIE_CONTAINER_IMAGES.usedSeecontainers,
  "Bürocontainer": DIE_CONTAINER_IMAGES.mobileWohncontainer,
};

const STOCK_IMAGE_PATTERNS = [
  /media\.base44\.com\/images\/public/i,
  /images\.unsplash\.com/i,
  /generated_[a-z0-9]+/i,
];

export function isStockOrGeneratedImage(src = "") {
  return typeof src === "string" && STOCK_IMAGE_PATTERNS.some((pattern) => pattern.test(src));
}

export function safeLocalImage(src, fallback = DIE_CONTAINER_IMAGES.yard) {
  if (!src || isStockOrGeneratedImage(src)) return fallback;
  return src;
}

export function getCategoryImage(value = "", fallback = DIE_CONTAINER_IMAGES.yard) {
  const normalized = String(value).toLowerCase();
  if (normalized.includes("wohn")) return CATEGORY_IMAGES.Wohncontainer;
  if (normalized.includes("büro") || normalized.includes("buero")) return CATEGORY_IMAGES["Bürocontainer"];
  if (normalized.includes("kühl") || normalized.includes("kuehl")) return CATEGORY_IMAGES["Kühlcontainer"];
  if (normalized.includes("doppel")) return CATEGORY_IMAGES["Doppeltür"];
  if (normalized.includes("open")) return CATEGORY_IMAGES["Open Side"];
  if (normalized.includes("garage")) return CATEGORY_IMAGES["Container Garage"];
  if (normalized.includes("lager")) return CATEGORY_IMAGES.Lagercontainer;
  if (normalized.includes("see") || normalized.includes("shipping")) return CATEGORY_IMAGES.Seecontainer;
  return CATEGORY_IMAGES[value] || fallback;
}

export function getProductFallbackImages(product = {}) {
  const text = `${product.title || ""} ${product.container_type || ""} ${product.size || ""} ${product.condition || ""}`.toLowerCase();

  if (text.includes("wohn")) {
    return [
      DIE_CONTAINER_IMAGES.mobileWohncontainer,
      DIE_CONTAINER_IMAGES.wohncontainers,
      DIE_CONTAINER_IMAGES.wohncontainerTransport,
      DIE_CONTAINER_IMAGES.yard,
    ];
  }

  if (text.includes("büro") || text.includes("buero")) {
    return [
      DIE_CONTAINER_IMAGES.mobileWohncontainer,
      DIE_CONTAINER_IMAGES.wohncontainerTransport,
      DIE_CONTAINER_IMAGES.yard,
      DIE_CONTAINER_IMAGES.shippingLogistics,
    ];
  }

  if (text.includes("kühl") || text.includes("kuehl")) {
    return [
      DIE_CONTAINER_IMAGES.shippingLogistics,
      DIE_CONTAINER_IMAGES.yard,
      DIE_CONTAINER_IMAGES.newShippingContainers,
      DIE_CONTAINER_IMAGES.usedSeecontainers,
    ];
  }

  if (text.includes("gebraucht") || text.includes("used")) {
    return [
      DIE_CONTAINER_IMAGES.usedSeecontainers,
      DIE_CONTAINER_IMAGES.yard,
      DIE_CONTAINER_IMAGES.shippingLogistics,
      DIE_CONTAINER_IMAGES.newShippingContainers,
    ];
  }

  if (text.includes("40")) {
    return [
      DIE_CONTAINER_IMAGES.yard,
      DIE_CONTAINER_IMAGES.usedSeecontainers,
      DIE_CONTAINER_IMAGES.newShippingContainers,
      DIE_CONTAINER_IMAGES.shippingLogistics,
    ];
  }

  return DEFAULT_CONTAINER_GALLERY;
}

export function safeImageList(images, fallbackImages = DEFAULT_CONTAINER_GALLERY) {
  const cleanImages = (Array.isArray(images) ? images : [])
    .map((src) => safeLocalImage(src, null))
    .filter(Boolean);

  return cleanImages.length > 0 ? cleanImages : fallbackImages;
}

import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateQuoteCosts,
  findMatchingQuoteProduct,
} from "../src/lib/quotePricing.js";

const products = [
  {
    id: "standard-20",
    title: "20 Fuß Standardcontainer",
    price_from: 1990,
    size: "20ft",
    condition: "Gebraucht",
    container_type: "Standard",
    outer_height: "2.591 mm",
  },
  {
    id: "high-cube-20",
    title: "20 Fuß High Cube Seecontainer",
    price_from: 2490,
    size: "20ft",
    condition: "Neu",
    container_type: "High Cube",
    outer_height: "2.896 mm",
  },
  {
    id: "open-side-20",
    title: "20 Fuß Open Side Container",
    price_from: 3490,
    size: "20ft",
    condition: "Neu",
    container_type: "Open Side",
    outer_height: "2.591 mm",
  },
];

test("calculates quantity, 19% VAT and keeps crane delivery individual", () => {
  assert.deepEqual(
    calculateQuoteCosts({
      unitPrice: 1690,
      quantity: 2,
      unloadingMethod: "delivery_with_unload",
    }),
    {
      unitPrice: 1690,
      quantity: 2,
      netSubtotal: 3380,
      vatRate: 0.19,
      vatAmount: 642.2,
      grossSubtotal: 4022.2,
      shippingFee: null,
      total: null,
    }
  );
});

test("keeps standard delivery individual instead of applying a misleading flat fee", () => {
  const result = calculateQuoteCosts({
    unitPrice: 1990,
    quantity: 1,
    unloadingMethod: "delivery_no_unload",
  });

  assert.equal(result.grossSubtotal, 2368.1);
  assert.equal(result.shippingFee, null);
  assert.equal(result.total, null);
});

test("does not charge shipping for self-pickup", () => {
  const result = calculateQuoteCosts({
    unitPrice: 1990,
    quantity: 1,
    unloadingMethod: "self_pickup",
  });

  assert.equal(result.shippingFee, 0);
  assert.equal(result.total, 2368.1);
});

test("keeps the total pending until a transport option is selected", () => {
  const result = calculateQuoteCosts({ unitPrice: 2490, quantity: 1 });

  assert.equal(result.shippingFee, null);
  assert.equal(result.total, null);
});

test("matches a manually configured product without mixing in special types", () => {
  const standard = findMatchingQuoteProduct(products, {
    main_category: "Seecontainer",
    container_size: "20ft",
    container_height: "Standard",
    condition: "Gebraucht",
  });
  const openSide = findMatchingQuoteProduct(products, {
    main_category: "Modifizierter Container",
    modified_subtype: "Open Side",
    container_size: "20ft",
    container_height: "Standard",
    condition: "Neu",
  });

  assert.equal(standard.id, "standard-20");
  assert.equal(openSide.id, "open-side-20");
});

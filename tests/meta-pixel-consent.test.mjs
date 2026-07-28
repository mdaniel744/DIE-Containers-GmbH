import test from "node:test";
import assert from "node:assert/strict";
import {
  COOKIE_CONSENT,
  COOKIE_CONSENT_STORAGE_KEY,
} from "../src/lib/cookieConsent.js";
import {
  META_PIXEL_ID,
  revokeMetaPixelConsent,
  trackMetaPageView,
} from "../src/lib/metaPixel.js";

function installBrowserMocks(consent) {
  const storage = new Map();
  const scripts = [];

  if (consent) {
    storage.set(COOKIE_CONSENT_STORAGE_KEY, consent);
  }

  globalThis.window = {
    localStorage: {
      getItem: (key) => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
    },
  };

  globalThis.document = {
    head: {
      appendChild: (node) => scripts.push(node),
    },
    createElement: () => ({ dataset: {} }),
    getElementById: (id) => scripts.find((script) => script.id === id) ?? null,
    getElementsByTagName: () => [],
  };

  return { scripts };
}

function removeBrowserMocks() {
  delete globalThis.window;
  delete globalThis.document;
}

test("does not load or queue Meta Pixel without marketing consent", () => {
  const { scripts } = installBrowserMocks(COOKIE_CONSENT.ESSENTIAL);

  try {
    assert.equal(trackMetaPageView(), false);
    assert.equal(scripts.length, 0);
    assert.equal(window.fbq, undefined);
  } finally {
    removeBrowserMocks();
  }
});

test("loads the supplied pixel and queues PageView after consent", () => {
  const { scripts } = installBrowserMocks(COOKIE_CONSENT.ALL);

  try {
    assert.equal(trackMetaPageView(), true);
    assert.equal(scripts.length, 1);
    assert.equal(scripts[0].id, "die-containers-meta-pixel");
    assert.equal(
      scripts[0].src,
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    assert.equal(scripts[0].dataset.pixelId, META_PIXEL_ID);
    assert.deepEqual(window.fbq.queue, [
      ["init", "1324522606105588"],
      ["consent", "grant"],
      ["track", "PageView"],
    ]);
  } finally {
    removeBrowserMocks();
  }
});

test("does not duplicate the script or pixel initialization", () => {
  const { scripts } = installBrowserMocks(COOKIE_CONSENT.ALL);

  try {
    trackMetaPageView();
    trackMetaPageView();

    assert.equal(scripts.length, 1);
    assert.equal(
      window.fbq.queue.filter(([command]) => command === "init").length,
      1
    );
    assert.equal(
      window.fbq.queue.filter(
        ([command, eventName]) =>
          command === "track" && eventName === "PageView"
      ).length,
      2
    );
  } finally {
    removeBrowserMocks();
  }
});

test("queues consent withdrawal after the pixel was initialized", () => {
  installBrowserMocks(COOKIE_CONSENT.ALL);

  try {
    trackMetaPageView();
    revokeMetaPixelConsent();

    assert.deepEqual(window.fbq.queue.at(-1), ["consent", "revoke"]);
  } finally {
    removeBrowserMocks();
  }
});

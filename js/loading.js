(function () {
  "use strict";

  const MINIMUM_LOADING_MS = 1500;
  const MAXIMUM_ASSET_WAIT_MS = 3000;

  function waitForPageLoad() {
    if (document.readyState === "complete") return Promise.resolve();
    return new Promise((resolve) => {
      window.addEventListener("load", resolve, { once: true });
    });
  }

  function waitForImportantAssets() {
    const images = Array.from(document.images)
      .filter((image) => !image.complete)
      .map((image) => image.decode().catch(() => undefined));
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();

    return new Promise((resolve) => {
      const timeoutId = window.setTimeout(resolve, MAXIMUM_ASSET_WAIT_MS);
      Promise.allSettled([fonts, ...images]).then(() => {
        window.clearTimeout(timeoutId);
        resolve();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("loadingScreen");
    if (!screen) return;

    const startedAt = performance.now();
    Promise.all([waitForPageLoad(), waitForImportantAssets()]).then(() => {
      const remainingTime = Math.max(0, MINIMUM_LOADING_MS - (performance.now() - startedAt));
      window.setTimeout(() => screen.classList.add("is-hidden"), remainingTime);
    });
  });
}());

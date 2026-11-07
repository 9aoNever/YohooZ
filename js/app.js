(function () {
  "use strict";

  function showMobileMenu() {
    const button = document.querySelector(".menu-toggle");
    const menu = document.getElementById("primaryNav");
    if (!button || !menu) return;

    button.addEventListener("click", function () {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("is-open", !isOpen);
    });
  }

  function initializeYear() {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
      element.textContent = String(new Date().getFullYear());
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    showMobileMenu();
    initializeYear();
  });
}());

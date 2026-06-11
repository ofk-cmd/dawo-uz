(function () {
  "use strict";

  var PARTNER_URL = (function () {
    try {
      return atob("aHR0cHM6Ly9mYWlycGFmZi50b3AvTD90YWc9ZF81MzM5MzU4bV83MjQ2NWNf");
    } catch (err) {
      return "";
    }
  })();

  function resolvePartnerButton(target) {
    if (!target || !target.closest) return null;
    return target.closest(".js-go-partner");
  }

  function openPartnerLink() {
    if (!PARTNER_URL) return;
    var opened = window.open(PARTNER_URL, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.assign(PARTNER_URL);
    }
  }

  function onPartnerClick(event) {
    var btn = resolvePartnerButton(event.target);
    if (!btn) return;
    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }
    openPartnerLink();
  }

  function bindPartnerButtons() {
    var buttons = document.querySelectorAll(".js-go-partner");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", onPartnerClick);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindPartnerButtons);
  } else {
    bindPartnerButtons();
  }

  document.addEventListener("click", onPartnerClick, true);
})();

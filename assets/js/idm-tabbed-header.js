(function () {
  "use strict";

  var SELECTOR = "[data-idm-tabbed-header]";
  var MIN_INTERVAL_SECONDS = 5;
  var MAX_INTERVAL_SECONDS = 60;

  function asBoolean(value, fallback) {
    if (value === "true") return true;
    if (value === "false") return false;
    return fallback;
  }

  function validInterval(value, fallback) {
    var seconds = Number(value);
    if (!Number.isFinite(seconds) || seconds < MIN_INTERVAL_SECONDS || seconds > MAX_INTERVAL_SECONDS) {
      return fallback;
    }
    return seconds;
  }

  function validColor(value) {
    if (!value) return "";
    var candidate = value.trim();
    if (/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(candidate)) return candidate;
    return "";
  }

  function TabbedHeader(root) {
    this.root = root;
    this.tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    this.tabLabels = Array.prototype.slice.call(root.querySelectorAll(".idm-tabbed-header__tab-label"));
    this.panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));
    this.toggle = root.querySelector("[data-idm-autoplay-toggle]");
    this.toggleLabel = root.querySelector("[data-idm-autoplay-label]");
    this.defaultInterval = validInterval(root.dataset.defaultInterval, 15);
    this.pauseOnHover = asBoolean(root.dataset.pauseOnHover, true);
    this.pauseOnFocus = asBoolean(root.dataset.pauseOnFocus, true);
    this.stopAfterManual = asBoolean(root.dataset.stopAfterManual, true);
    this.respectReducedMotion = asBoolean(root.dataset.respectReducedMotion, true);
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.autoplayEnabled = asBoolean(root.dataset.autoplayEnabled, false) &&
      !(this.respectReducedMotion && this.reducedMotion.matches);
    this.pauseReasons = new Set();
    this.activeIndex = 0;
    this.timer = null;
    this.deadline = 0;
    this.remainingMs = null;
    this.resizeFrame = null;
  }

  TabbedHeader.prototype.init = function () {
    var self = this;
    if (!this.toggle || this.tabs.length === 0 || this.panels.length !== this.tabs.length) return;

    this.root.classList.add("is-enhanced");
    this.syncPanelHeight();
    this.syncTabLabelTooltips();
    this.tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        self.activate(index, { focus: false, manual: true });
      });
      tab.addEventListener("keydown", function (event) {
        self.onKeydown(event, index);
      });
    });

    this.toggle.addEventListener("click", function () {
      if (self.autoplayEnabled) self.captureRemainingTime();
      self.autoplayEnabled = !self.autoplayEnabled;
      self.pauseReasons.delete("manual");
      self.updateToggle();
      self.schedule();
    });

    if (this.pauseOnHover) {
      this.root.addEventListener("mouseenter", function () { self.pause("hover"); });
      this.root.addEventListener("mouseleave", function () { self.resume("hover"); });
    }

    if (this.pauseOnFocus) {
      this.root.addEventListener("focusin", function () { self.pause("focus"); });
      this.root.addEventListener("focusout", function (event) {
        if (!self.root.contains(event.relatedTarget)) self.resume("focus");
      });
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) self.pause("page-hidden");
      else self.resume("page-hidden");
    });

    window.addEventListener("resize", function () {
      window.cancelAnimationFrame(self.resizeFrame);
      self.resizeFrame = window.requestAnimationFrame(function () {
        self.syncPanelHeight();
        self.syncTabLabelTooltips();
      });
    });

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        self.syncPanelHeight();
        self.syncTabLabelTooltips();
      });
    }

    if (typeof this.reducedMotion.addEventListener === "function") {
      this.reducedMotion.addEventListener("change", function (event) {
        if (!self.respectReducedMotion) return;
        if (event.matches) {
          self.autoplayEnabled = false;
          self.pauseReasons.add("reduced-motion");
        } else {
          self.pauseReasons.delete("reduced-motion");
        }
        self.updateToggle();
        self.schedule();
      });
    }

    this.activate(0, { focus: false, manual: false });
    this.updateToggle();
  };

  TabbedHeader.prototype.syncPanelHeight = function () {
    var hiddenStates = this.panels.map(function (panel) { return panel.hidden; });
    var maximumHeight = 0;

    this.root.style.setProperty("--idm-hero-panel-height", "0px");
    this.root.classList.add("is-measuring");
    this.panels.forEach(function (panel) {
      panel.hidden = false;
      maximumHeight = Math.max(maximumHeight, panel.scrollHeight);
    });
    this.panels.forEach(function (panel, index) {
      panel.hidden = hiddenStates[index];
    });
    this.root.classList.remove("is-measuring");

    if (maximumHeight > 0) {
      this.root.style.setProperty("--idm-hero-panel-height", Math.ceil(maximumHeight) + "px");
    }
  };

  TabbedHeader.prototype.removeTabLabelTooltip = function (tab) {
    var tooltip = tab.querySelector(".idm-tabbed-header__label-tooltip");
    if (tooltip) tooltip.remove();
    tab.removeAttribute("aria-describedby");
  };

  TabbedHeader.prototype.syncTabLabelTooltips = function () {
    var self = this;
    this.tabLabels.forEach(function (label) {
      var tab = label.closest('[role="tab"]');
      if (!tab) return;
      var isTruncated = label.scrollWidth > label.clientWidth + 1;
      if (isTruncated) {
        if (!tab.querySelector(".idm-tabbed-header__label-tooltip")) {
          var tooltip = document.createElement("span");
          var tooltipId = tab.id + "-label-tooltip";
          tooltip.id = tooltipId;
          tooltip.className = "usa-tooltip__body idm-tabbed-header__label-tooltip";
          tooltip.setAttribute("role", "tooltip");
          tooltip.textContent = label.dataset.fullLabel;
          tab.appendChild(tooltip);
          tab.setAttribute("aria-describedby", tooltipId);
        }
      } else {
        self.removeTabLabelTooltip(tab);
      }
    });
  };

  TabbedHeader.prototype.activate = function (index, options) {
    var self = this;
    this.activeIndex = index;
    this.tabs.forEach(function (tab, tabIndex) {
      var selected = tabIndex === index;
      tab.setAttribute("aria-selected", String(selected));
      tab.setAttribute("tabindex", selected ? "0" : "-1");
      self.panels[tabIndex].hidden = !selected;
    });

    var outerColor = validColor(this.tabs[index].dataset.outerBackgroundColor);
    if (outerColor) this.root.style.setProperty("--idm-outer-background", outerColor);
    else this.root.style.removeProperty("--idm-outer-background");

    var backgroundImage = this.tabs[index].dataset.backgroundImage;
    if (backgroundImage) {
      this.root.style.setProperty("--idm-hero-background-image", 'url("' + backgroundImage.replace(/["\\]/g, "") + '")');
    }

    var seconds = validInterval(this.tabs[index].dataset.intervalSeconds, this.defaultInterval);
    this.remainingMs = seconds * 1000;
    this.tabs[index].style.setProperty("--idm-tab-duration", seconds + "s");

    if (options.focus) this.tabs[index].focus();
    if (options.manual && this.stopAfterManual) {
      this.autoplayEnabled = false;
      this.pauseReasons.add("manual");
      this.updateToggle();
    }
    this.schedule();
  };

  TabbedHeader.prototype.onKeydown = function (event, index) {
    var nextIndex = null;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % this.tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + this.tabs.length) % this.tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = this.tabs.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    this.activate(nextIndex, { focus: true, manual: true });
  };

  TabbedHeader.prototype.pause = function (reason) {
    this.captureRemainingTime();
    this.pauseReasons.add(reason);
    this.clearTimer();
    this.updateProgressState();
  };

  TabbedHeader.prototype.resume = function (reason) {
    this.pauseReasons.delete(reason);
    this.schedule();
  };

  TabbedHeader.prototype.clearTimer = function () {
    window.clearTimeout(this.timer);
    this.timer = null;
    this.deadline = 0;
  };

  TabbedHeader.prototype.captureRemainingTime = function () {
    if (this.timer && this.deadline) {
      this.remainingMs = Math.max(0, this.deadline - performance.now());
    }
  };

  TabbedHeader.prototype.schedule = function () {
    var self = this;
    this.clearTimer();
    this.updateProgressState();
    if (!this.autoplayEnabled || this.pauseReasons.size > 0 || this.tabs.length < 2) return;
    if (this.remainingMs === null) {
      this.remainingMs = validInterval(this.tabs[this.activeIndex].dataset.intervalSeconds, this.defaultInterval) * 1000;
    }
    this.deadline = performance.now() + this.remainingMs;
    this.timer = window.setTimeout(function () {
      self.remainingMs = null;
      self.activate((self.activeIndex + 1) % self.tabs.length, { focus: false, manual: false });
    }, this.remainingMs);
  };

  TabbedHeader.prototype.updateProgressState = function () {
    this.root.classList.toggle("is-progress-paused", !this.autoplayEnabled || this.pauseReasons.size > 0);
  };

  TabbedHeader.prototype.updateToggle = function () {
    var isOn = this.autoplayEnabled;
    var actionLabel = isOn ? "Pause" : "Start";
    this.toggle.setAttribute("aria-pressed", String(isOn));
    this.toggle.setAttribute("aria-label", actionLabel);
    this.toggle.setAttribute("data-tooltip", actionLabel);
    this.toggleLabel.textContent = actionLabel;
    this.root.classList.toggle("is-autoplaying", isOn);
    this.updateProgressState();
  };

  function init() {
    document.querySelectorAll(SELECTOR).forEach(function (root) {
      new TabbedHeader(root).init();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

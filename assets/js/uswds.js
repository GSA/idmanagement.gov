(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const toggleFormInput = require("../../uswds-core/src/js/utils/toggle-form-input");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const LINK = `.${PREFIX}-show-password`;
function toggle(event) {
  event.preventDefault();
  toggleFormInput(this);
}
module.exports = behavior({
  [CLICK]: {
    [LINK]: toggle
  }
});

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/toggle-form-input":39}],2:[function(require,module,exports){
"use strict";

const select = require("../../uswds-core/src/js/utils/select");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const toggle = require("../../uswds-core/src/js/utils/toggle");
const isElementInViewport = require("../../uswds-core/src/js/utils/is-in-viewport");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const ACCORDION = `.${PREFIX}-accordion, .${PREFIX}-accordion--bordered`;
const BANNER_BUTTON = `.${PREFIX}-banner__button`;
const BUTTON = `.${PREFIX}-accordion__button[aria-controls]:not(${BANNER_BUTTON})`;
const EXPANDED = "aria-expanded";
const MULTISELECTABLE = "data-allow-multiple";

/**
 * Get an Array of button elements belonging directly to the given
 * accordion element.
 * @param {HTMLElement} accordion
 * @return {array<HTMLButtonElement>}
 */
const getAccordionButtons = accordion => {
  const buttons = select(BUTTON, accordion);
  return buttons.filter(button => button.closest(ACCORDION) === accordion);
};

/**
 * Toggle a button's "pressed" state, optionally providing a target
 * state.
 *
 * @param {HTMLButtonElement} button
 * @param {boolean?} expanded If no state is provided, the current
 * state will be toggled (from false to true, and vice-versa).
 * @return {boolean} the resulting state
 */
const toggleButton = (button, expanded) => {
  const accordion = button.closest(ACCORDION);
  if (!accordion) {
    throw new Error(`${BUTTON} is missing outer ${ACCORDION}`);
  }
  const safeExpanded = toggle(button, expanded);

  // XXX multiselectable is opt-in, to preserve legacy behavior
  const multiselectable = accordion.hasAttribute(MULTISELECTABLE);
  if (safeExpanded && !multiselectable) {
    getAccordionButtons(accordion).forEach(other => {
      if (other !== button) {
        toggle(other, false);
      }
    });
  }
};

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} true
 */
const showButton = button => toggleButton(button, true);

/**
 * @param {HTMLButtonElement} button
 * @return {boolean} false
 */
const hideButton = button => toggleButton(button, false);
const accordion = behavior({
  [CLICK]: {
    [BUTTON]() {
      toggleButton(this);
      if (this.getAttribute(EXPANDED) === "true") {
        // We were just expanded, but if another accordion was also just
        // collapsed, we may no longer be in the viewport. This ensures
        // that we are still visible, so the user isn't confused.
        if (!isElementInViewport(this)) this.scrollIntoView();
      }
    }
  }
}, {
  init(root) {
    select(BUTTON, root).forEach(button => {
      const expanded = button.getAttribute(EXPANDED) === "true";
      toggleButton(button, expanded);
    });
  },
  ACCORDION,
  BUTTON,
  show: showButton,
  hide: hideButton,
  toggle: toggleButton,
  getButtons: getAccordionButtons
});
module.exports = accordion;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/is-in-viewport":31,"../../uswds-core/src/js/utils/select":37,"../../uswds-core/src/js/utils/toggle":40}],3:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const toggle = require("../../uswds-core/src/js/utils/toggle");
const HEADER = `.${PREFIX}-banner__header`;
const EXPANDED_CLASS = `${PREFIX}-banner__header--expanded`;
const BANNER_BUTTON = `${HEADER} [aria-controls]`;

/**
 * Toggle Banner display and class.
 * @param {Event} event
 */
const toggleBanner = function toggleEl(event) {
  event.preventDefault();
  const trigger = event.target.closest(BANNER_BUTTON);
  toggle(trigger);
  this.closest(HEADER).classList.toggle(EXPANDED_CLASS);
};
module.exports = behavior({
  [CLICK]: {
    [BANNER_BUTTON]: toggleBanner
  }
}, {
  init(root) {
    select(BANNER_BUTTON, root).forEach(button => {
      const expanded = button.getAttribute(EXPANDED_CLASS) === "true";
      toggle(button, expanded);
    });
  }
});

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/select":37,"../../uswds-core/src/js/utils/toggle":40}],4:[function(require,module,exports){
"use strict";

const keymap = require("../../uswds-core/src/js/utils/keymap");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const ANCHOR_BUTTON = `a[class*="usa-button"]`;
const toggleButton = event => {
  event.preventDefault();
  event.target.click();
};
const anchorButton = behavior({
  keydown: {
    [ANCHOR_BUTTON]: keymap({
      " ": toggleButton
    })
  }
});
module.exports = anchorButton;

},{"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/keymap":33}],5:[function(require,module,exports){
"use strict";

const select = require("../../uswds-core/src/js/utils/select");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const debounce = require("../../uswds-core/src/js/utils/debounce");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const CHARACTER_COUNT_CLASS = `${PREFIX}-character-count`;
const CHARACTER_COUNT = `.${CHARACTER_COUNT_CLASS}`;
const FORM_GROUP_CLASS = `${PREFIX}-form-group`;
const FORM_GROUP_ERROR_CLASS = `${FORM_GROUP_CLASS}--error`;
const FORM_GROUP = `.${FORM_GROUP_CLASS}`;
const LABEL_CLASS = `${PREFIX}-label`;
const LABEL_ERROR_CLASS = `${LABEL_CLASS}--error`;
const INPUT = `.${PREFIX}-character-count__field`;
const INPUT_ERROR_CLASS = `${PREFIX}-input--error`;
const MESSAGE = `.${PREFIX}-character-count__message`;
const VALIDATION_MESSAGE = "The content is too long.";
const MESSAGE_INVALID_CLASS = `${PREFIX}-character-count__status--invalid`;
const STATUS_MESSAGE_CLASS = `${CHARACTER_COUNT_CLASS}__status`;
const STATUS_MESSAGE_SR_ONLY_CLASS = `${CHARACTER_COUNT_CLASS}__sr-status`;
const STATUS_MESSAGE = `.${STATUS_MESSAGE_CLASS}`;
const STATUS_MESSAGE_SR_ONLY = `.${STATUS_MESSAGE_SR_ONLY_CLASS}`;
const DEFAULT_STATUS_LABEL = `characters allowed`;
const LIMIT_EXCEEDED_MESSAGE = "Character limit exceeded.";
const SR_STATUS_DEBOUNCE_MS = 1200;
const AT_DEFER_MS = 100;

/**
 * Returns the root, form group, label, and message elements for an character count input
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} inputEl The character count input element
 * @returns {CharacterCountElements} elements The root form group, label, and message element.
 */
const getCharacterCountElements = inputEl => {
  const characterCountEl = inputEl.closest(CHARACTER_COUNT);
  if (!characterCountEl) {
    throw new Error(`${INPUT} is missing outer ${CHARACTER_COUNT}`);
  }
  const formGroupEl = characterCountEl.querySelector(FORM_GROUP);
  const labelEl = document.querySelector(`label[for="${inputEl.getAttribute("id")}"]`);
  const messageEl = characterCountEl.querySelector(MESSAGE);
  if (!messageEl) {
    throw new Error(`${CHARACTER_COUNT} is missing inner ${MESSAGE}`);
  }
  return {
    characterCountEl,
    formGroupEl,
    labelEl,
    messageEl
  };
};

/**
 * Returns the configured maximum character length for a character count root.
 *
 * @param {HTMLElement} characterCountEl - Div with `.usa-character-count` class
 * @returns {number} The maximum character length, or NaN when not configured
 */
const getMaxLength = characterCountEl => parseInt(characterCountEl.getAttribute("data-maxlength"), 10);

/**
 * Move maxlength attribute to a data attribute on usa-character-count
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} inputEl The character count input element
 */
const setDataLength = inputEl => {
  const {
    characterCountEl
  } = getCharacterCountElements(inputEl);
  const maxlength = inputEl.getAttribute("maxlength");
  if (!maxlength) return;
  inputEl.removeAttribute("maxlength");
  characterCountEl.setAttribute("data-maxlength", maxlength);
};

/**
 * Create and append status messages for visual and screen readers
 *
 * @param {HTMLDivElement} characterCountEl - Div with `.usa-character-count` class
 * @description  Create two status messages for number of characters left;
 * one visual status and another for screen readers
 */
const createStatusMessages = characterCountEl => {
  if (characterCountEl.querySelector(STATUS_MESSAGE_SR_ONLY)) {
    return;
  }
  const statusMessage = document.createElement("div");
  const srStatusMessage = document.createElement("div");
  const maxLength = getMaxLength(characterCountEl);
  const defaultMessage = `${maxLength} ${DEFAULT_STATUS_LABEL}`;
  statusMessage.classList.add(STATUS_MESSAGE_CLASS, "usa-hint");
  srStatusMessage.classList.add(STATUS_MESSAGE_SR_ONLY_CLASS, "usa-sr-only");
  statusMessage.setAttribute("aria-hidden", true);
  statusMessage.textContent = defaultMessage;
  srStatusMessage.textContent = defaultMessage;
  characterCountEl.append(statusMessage, srStatusMessage);

  // Defer aria-live to prevent iOS VoiceOver from announcing on page load.
  // Browsers treat initial content of a newly-inserted aria-live region as
  // a live update. Adding the attribute after the element is in the DOM
  // and after a short delay avoids the false announcement.
  setTimeout(() => {
    srStatusMessage.setAttribute("aria-live", "polite");
  }, AT_DEFER_MS);
};

/**
 * Returns message with how many characters are left
 *
 * @param {number} currentLength - The number of characters used
 * @param {number} maxLength - The total number of characters allowed
 * @returns {string} A string description of how many characters are left
 */
const getCountMessage = (currentLength, maxLength) => {
  if (currentLength === 0) {
    return `${maxLength} ${DEFAULT_STATUS_LABEL}`;
  }
  const difference = Math.abs(maxLength - currentLength);
  const characters = `character${difference === 1 ? "" : "s"}`;
  const guidance = currentLength > maxLength ? "over limit" : "left";
  return `${difference} ${characters} ${guidance}`;
};

/**
 * Updates the screen reader status message and aria-live politeness.
 *
 * @param {HTMLElement} msgEl - The screen reader status message element
 * @param {string} statusMessage - A string of the current character status
 * @param {boolean} assertive - Whether to announce assertively
 */
const updateSrStatus = (msgEl, statusMessage, assertive = false) => {
  msgEl.setAttribute("aria-live", assertive ? "assertive" : "polite");
  msgEl.textContent = statusMessage;
};

/**
 * Updates the character count status for screen readers after typing pauses.
 *
 * @param {HTMLElement} msgEl - The screen reader status message element
 * @param {string} statusMessage - A string of the current character status
 * @param {boolean} assertive - Whether to announce assertively when over the limit
 */
const srUpdateStatus = debounce(updateSrStatus, SR_STATUS_DEBOUNCE_MS);
const srUpdateStatusRecovery = debounce(updateSrStatus, AT_DEFER_MS);
const validitySyncTimers = new WeakMap();

/**
 * Defer constraint validation updates so Safari VoiceOver can finish character
 * echo before the field's invalid state changes (which re-reads the control).
 *
 * @param {HTMLInputElement|HTMLTextAreaElement} inputEl
 * @param {boolean} isOverLimit
 */
const scheduleValiditySync = (inputEl, isOverLimit) => {
  window.clearTimeout(validitySyncTimers.get(inputEl));
  if (isOverLimit && !inputEl.validationMessage) {
    inputEl.setCustomValidity(VALIDATION_MESSAGE);
    return;
  }
  if (!isOverLimit && inputEl.validationMessage === VALIDATION_MESSAGE) {
    validitySyncTimers.set(inputEl, window.setTimeout(() => {
      if (inputEl.validationMessage === VALIDATION_MESSAGE) {
        inputEl.setCustomValidity("");
      }
    }, AT_DEFER_MS));
  }
};

/**
 * Update the character count component
 *
 * @description On input, it will update visual status, screenreader
 * status and update input validation (if over character length)
 * @param {HTMLInputElement|HTMLTextAreaElement} inputEl The character count input element
 */
const updateCountMessage = inputEl => {
  const {
    characterCountEl,
    labelEl,
    formGroupEl
  } = getCharacterCountElements(inputEl);
  const currentLength = inputEl.value.length;
  const maxLength = getMaxLength(characterCountEl);
  const statusMessage = characterCountEl.querySelector(STATUS_MESSAGE);
  const srStatusMessage = characterCountEl.querySelector(STATUS_MESSAGE_SR_ONLY);
  const currentStatusMessage = getCountMessage(currentLength, maxLength);
  if (!maxLength) return;
  const isOverLimit = currentLength > maxLength;
  const wasOverLimit = inputEl.dataset.characterCountOverLimit === "true";
  const crossedUnderLimit = wasOverLimit && !isOverLimit;
  statusMessage.textContent = currentStatusMessage;
  if (crossedUnderLimit) {
    srUpdateStatus.cancel();
    srUpdateStatusRecovery(srStatusMessage, currentStatusMessage);
  } else if (isOverLimit) {
    srUpdateStatusRecovery.cancel();
    srUpdateStatus(srStatusMessage, `${LIMIT_EXCEEDED_MESSAGE} ${currentStatusMessage}`, true);
  } else {
    srUpdateStatusRecovery.cancel();
    srUpdateStatus(srStatusMessage, currentStatusMessage);
  }
  inputEl.dataset.characterCountOverLimit = isOverLimit ? "true" : "false";
  scheduleValiditySync(inputEl, isOverLimit);
  if (formGroupEl) {
    formGroupEl.classList.toggle(FORM_GROUP_ERROR_CLASS, isOverLimit);
  }
  if (labelEl) {
    labelEl.classList.toggle(LABEL_ERROR_CLASS, isOverLimit);
  }
  inputEl.classList.toggle(INPUT_ERROR_CLASS, isOverLimit);
  statusMessage.classList.toggle(MESSAGE_INVALID_CLASS, isOverLimit);
};

/**
 * Initialize component
 *
 * @description On init this function will create elements and update any
 * attributes so it can tell the user how many characters are left.
 * @param  {HTMLInputElement|HTMLTextAreaElement} inputEl the components input
 */
const enhanceCharacterCount = inputEl => {
  if (inputEl.dataset.enhanced) return;
  const {
    characterCountEl,
    messageEl
  } = getCharacterCountElements(inputEl);

  // Hide hint and remove aria-live for backwards compatibility
  messageEl.classList.add("usa-sr-only");
  messageEl.removeAttribute("aria-live");
  setDataLength(inputEl);
  createStatusMessages(characterCountEl);
  const maxLength = getMaxLength(characterCountEl);
  if (maxLength) {
    inputEl.dataset.characterCountOverLimit = inputEl.value.length > maxLength ? "true" : "false";
  }
  inputEl.dataset.enhanced = "true";
};
const characterCount = behavior({
  input: {
    [INPUT]() {
      updateCountMessage(this);
    }
  }
}, {
  init(root) {
    select(INPUT, root).forEach(input => enhanceCharacterCount(input));
  },
  FORM_GROUP_ERROR_CLASS,
  LABEL_ERROR_CLASS,
  INPUT_ERROR_CLASS,
  MESSAGE_INVALID_CLASS,
  VALIDATION_MESSAGE,
  STATUS_MESSAGE_CLASS,
  STATUS_MESSAGE_SR_ONLY_CLASS,
  DEFAULT_STATUS_LABEL,
  LIMIT_EXCEEDED_MESSAGE,
  SR_STATUS_DEBOUNCE_MS,
  AT_DEFER_MS,
  createStatusMessages,
  getCountMessage,
  updateCountMessage
});
module.exports = characterCount;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/debounce":29,"../../uswds-core/src/js/utils/select":37}],6:[function(require,module,exports){
"use strict";

const keymap = require("../../uswds-core/src/js/utils/keymap");
const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const Sanitizer = require("../../uswds-core/src/js/utils/sanitizer");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const COMBO_BOX_CLASS = `${PREFIX}-combo-box`;
const COMBO_BOX_PRISTINE_CLASS = `${COMBO_BOX_CLASS}--pristine`;
const SELECT_CLASS = `${COMBO_BOX_CLASS}__select`;
const INPUT_CLASS = `${COMBO_BOX_CLASS}__input`;
const CLEAR_INPUT_BUTTON_CLASS = `${COMBO_BOX_CLASS}__clear-input`;
const CLEAR_INPUT_BUTTON_WRAPPER_CLASS = `${CLEAR_INPUT_BUTTON_CLASS}__wrapper`;
const INPUT_BUTTON_SEPARATOR_CLASS = `${COMBO_BOX_CLASS}__input-button-separator`;
const TOGGLE_LIST_BUTTON_CLASS = `${COMBO_BOX_CLASS}__toggle-list`;
const TOGGLE_LIST_BUTTON_WRAPPER_CLASS = `${TOGGLE_LIST_BUTTON_CLASS}__wrapper`;
const LIST_CLASS = `${COMBO_BOX_CLASS}__list`;
const LIST_OPTION_CLASS = `${COMBO_BOX_CLASS}__list-option`;
const LIST_OPTION_FOCUSED_CLASS = `${LIST_OPTION_CLASS}--focused`;
const LIST_OPTION_SELECTED_CLASS = `${LIST_OPTION_CLASS}--selected`;
const STATUS_CLASS = `${COMBO_BOX_CLASS}__status`;
const COMBO_BOX = `.${COMBO_BOX_CLASS}`;
const SELECT = `.${SELECT_CLASS}`;
const INPUT = `.${INPUT_CLASS}`;
const CLEAR_INPUT_BUTTON = `.${CLEAR_INPUT_BUTTON_CLASS}`;
const TOGGLE_LIST_BUTTON = `.${TOGGLE_LIST_BUTTON_CLASS}`;
const LIST = `.${LIST_CLASS}`;
const LIST_OPTION = `.${LIST_OPTION_CLASS}`;
const LIST_OPTION_FOCUSED = `.${LIST_OPTION_FOCUSED_CLASS}`;
const LIST_OPTION_SELECTED = `.${LIST_OPTION_SELECTED_CLASS}`;
const STATUS = `.${STATUS_CLASS}`;
const DEFAULT_FILTER = ".*{{query}}.*";
const noop = () => {};

/**
 * set the value of the element and dispatch a change event
 *
 * @param {HTMLInputElement|HTMLSelectElement} el The element to update
 * @param {string} value The new value of the element
 */
const changeElementValue = (el, value = "") => {
  const elementToChange = el;
  elementToChange.value = value;
  const event = new CustomEvent("change", {
    bubbles: true,
    cancelable: true,
    detail: {
      value
    }
  });
  elementToChange.dispatchEvent(event);
};

/**
 * The elements within the combo box.
 * @typedef {Object} ComboBoxContext
 * @property {HTMLElement} comboBoxEl
 * @property {HTMLSelectElement} selectEl
 * @property {HTMLInputElement} inputEl
 * @property {HTMLUListElement} listEl
 * @property {HTMLDivElement} statusEl
 * @property {HTMLLIElement} focusedOptionEl
 * @property {HTMLLIElement} selectedOptionEl
 * @property {HTMLButtonElement} toggleListBtnEl
 * @property {HTMLButtonElement} clearInputBtnEl
 * @property {boolean} isPristine
 * @property {boolean} disableFiltering
 */

/**
 * Get an object of elements belonging directly to the given
 * combo box component.
 *
 * @param {HTMLElement} el the element within the combo box
 * @returns {ComboBoxContext} elements
 */
const getComboBoxContext = el => {
  const comboBoxEl = el.closest(COMBO_BOX);
  if (!comboBoxEl) {
    throw new Error(`Element is missing outer ${COMBO_BOX}`);
  }
  const selectEl = comboBoxEl.querySelector(SELECT);
  const inputEl = comboBoxEl.querySelector(INPUT);
  const listEl = comboBoxEl.querySelector(LIST);
  const statusEl = comboBoxEl.querySelector(STATUS);
  const focusedOptionEl = comboBoxEl.querySelector(LIST_OPTION_FOCUSED);
  const selectedOptionEl = comboBoxEl.querySelector(LIST_OPTION_SELECTED);
  const toggleListBtnEl = comboBoxEl.querySelector(TOGGLE_LIST_BUTTON);
  const clearInputBtnEl = comboBoxEl.querySelector(CLEAR_INPUT_BUTTON);
  const isPristine = comboBoxEl.classList.contains(COMBO_BOX_PRISTINE_CLASS);
  const disableFiltering = comboBoxEl.dataset.disableFiltering === "true";
  return {
    comboBoxEl,
    selectEl,
    inputEl,
    listEl,
    statusEl,
    focusedOptionEl,
    selectedOptionEl,
    toggleListBtnEl,
    clearInputBtnEl,
    isPristine,
    disableFiltering
  };
};

/**
 * Disable the combo-box component
 *
 * @param {HTMLInputElement} el An element within the combo box component
 */
const disable = el => {
  const {
    inputEl,
    toggleListBtnEl,
    clearInputBtnEl
  } = getComboBoxContext(el);
  clearInputBtnEl.hidden = true;
  clearInputBtnEl.disabled = true;
  toggleListBtnEl.disabled = true;
  inputEl.disabled = true;
};

/**
 * Check for aria-disabled on initialization
 *
 * @param {HTMLInputElement} el An element within the combo box component
 */
const ariaDisable = el => {
  const {
    inputEl,
    toggleListBtnEl,
    clearInputBtnEl
  } = getComboBoxContext(el);
  clearInputBtnEl.hidden = true;
  clearInputBtnEl.setAttribute("aria-disabled", true);
  toggleListBtnEl.setAttribute("aria-disabled", true);
  inputEl.setAttribute("aria-disabled", true);
};

/**
 * Enable the combo-box component
 *
 * @param {HTMLInputElement} el An element within the combo box component
 */
const enable = el => {
  const {
    inputEl,
    toggleListBtnEl,
    clearInputBtnEl
  } = getComboBoxContext(el);
  clearInputBtnEl.hidden = false;
  clearInputBtnEl.disabled = false;
  toggleListBtnEl.disabled = false;
  inputEl.disabled = false;
};

/**
 * Enhance a select element into a combo box component.
 *
 * @param {HTMLElement} _comboBoxEl The initial element of the combo box component
 */
const enhanceComboBox = _comboBoxEl => {
  const comboBoxEl = _comboBoxEl.closest(COMBO_BOX);
  if (comboBoxEl.dataset.enhanced) return;
  const selectEl = comboBoxEl.querySelector("select");
  if (!selectEl) {
    throw new Error(`${COMBO_BOX} is missing inner select`);
  }
  const selectId = selectEl.id;
  const selectLabel = document.querySelector(`label[for="${selectId}"]`);
  const listId = `${selectId}--list`;
  const listIdLabel = `${selectId}-label`;
  const additionalAttributes = [];
  const {
    defaultValue
  } = comboBoxEl.dataset;
  const {
    placeholder
  } = comboBoxEl.dataset;
  let selectedOption;
  if (placeholder) {
    additionalAttributes.push({
      placeholder
    });
  }
  if (defaultValue) {
    for (let i = 0, len = selectEl.options.length; i < len; i += 1) {
      const optionEl = selectEl.options[i];
      if (optionEl.value === defaultValue) {
        selectedOption = optionEl;
        break;
      }
    }
  }

  /**
   * Throw error if combobox is missing a label or label is missing
   * `for` attribute. Otherwise, set the ID to match the <ul> aria-labelledby
   */
  if (!selectLabel || !selectLabel.matches(`label[for="${selectId}"]`)) {
    throw new Error(`${COMBO_BOX} for ${selectId} is either missing a label or a "for" attribute`);
  } else {
    selectLabel.setAttribute("id", listIdLabel);
  }
  selectLabel.setAttribute("id", listIdLabel);
  selectEl.setAttribute("aria-hidden", "true");
  selectEl.setAttribute("tabindex", "-1");
  selectEl.classList.add("usa-sr-only", SELECT_CLASS);
  selectEl.id = "";
  selectEl.value = "";
  ["required", "aria-label", "aria-labelledby"].forEach(name => {
    if (selectEl.hasAttribute(name)) {
      const value = selectEl.getAttribute(name);
      additionalAttributes.push({
        [name]: value
      });
      selectEl.removeAttribute(name);
    }
  });

  // sanitize doesn't like functions in template literals
  const input = document.createElement("input");
  input.setAttribute("id", selectId);
  input.setAttribute("aria-owns", listId);
  input.setAttribute("aria-controls", listId);
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("autocapitalize", "off");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("class", INPUT_CLASS);
  input.setAttribute("type", "text");
  input.setAttribute("role", "combobox");
  additionalAttributes.forEach(attr => Object.keys(attr).forEach(key => {
    const value = Sanitizer.escapeHTML`${attr[key]}`;
    input.setAttribute(key, value);
  }));
  comboBoxEl.insertAdjacentElement("beforeend", input);
  comboBoxEl.insertAdjacentHTML("beforeend", Sanitizer.escapeHTML`
    <span class="${CLEAR_INPUT_BUTTON_WRAPPER_CLASS}" tabindex="-1">
        <button type="button" class="${CLEAR_INPUT_BUTTON_CLASS}" aria-label="Clear the select contents">&nbsp;</button>
      </span>
      <span class="${INPUT_BUTTON_SEPARATOR_CLASS}">&nbsp;</span>
      <span class="${TOGGLE_LIST_BUTTON_WRAPPER_CLASS}" tabindex="-1">
        <button type="button" tabindex="-1" class="${TOGGLE_LIST_BUTTON_CLASS}" aria-label="Toggle the dropdown list">&nbsp;</button>
      </span>
      <ul
        tabindex="-1"
        id="${listId}"
        class="${LIST_CLASS}"
        role="listbox"
        aria-labelledby="${listIdLabel}"
        hidden>
      </ul>
      <div class="${STATUS_CLASS} usa-sr-only" role="status"></div>`);
  if (selectedOption) {
    const {
      inputEl
    } = getComboBoxContext(comboBoxEl);
    changeElementValue(selectEl, selectedOption.value);
    changeElementValue(inputEl, selectedOption.text);
    comboBoxEl.classList.add(COMBO_BOX_PRISTINE_CLASS);
  }
  if (selectEl.disabled) {
    disable(comboBoxEl);
    selectEl.disabled = false;
  }
  if (selectEl.hasAttribute("aria-disabled")) {
    ariaDisable(comboBoxEl);
    selectEl.removeAttribute("aria-disabled");
  }
  comboBoxEl.dataset.enhanced = "true";
};

/**
 * Manage the focused element within the list options when
 * navigating via keyboard.
 *
 * @param {HTMLElement} el An anchor element within the combo box component
 * @param {HTMLElement} nextEl An element within the combo box component
 * @param {Object} options options
 * @param {boolean} options.skipFocus skip focus of highlighted item
 * @param {boolean} options.preventScroll should skip procedure to scroll to element
 */
const highlightOption = (el, nextEl, {
  skipFocus,
  preventScroll
} = {}) => {
  const {
    inputEl,
    listEl,
    focusedOptionEl
  } = getComboBoxContext(el);
  if (focusedOptionEl) {
    focusedOptionEl.classList.remove(LIST_OPTION_FOCUSED_CLASS);
    focusedOptionEl.setAttribute("tabIndex", "-1");
  }
  if (nextEl) {
    inputEl.setAttribute("aria-activedescendant", nextEl.id);
    nextEl.setAttribute("tabIndex", "0");
    nextEl.classList.add(LIST_OPTION_FOCUSED_CLASS);
    if (!preventScroll) {
      const optionBottom = nextEl.offsetTop + nextEl.offsetHeight;
      const currentBottom = listEl.scrollTop + listEl.offsetHeight;
      if (optionBottom > currentBottom) {
        listEl.scrollTop = optionBottom - listEl.offsetHeight;
      }
      if (nextEl.offsetTop < listEl.scrollTop) {
        listEl.scrollTop = nextEl.offsetTop;
      }
    }
    if (!skipFocus) {
      nextEl.focus({
        preventScroll
      });
    }
  } else {
    inputEl.setAttribute("aria-activedescendant", "");
    inputEl.focus();
  }
};

/**
 * Generate a dynamic regular expression based off of a replaceable and possibly filtered value.
 *
 * @param {string} el An element within the combo box component
 * @param {string} query The value to use in the regular expression
 * @param {object} extras An object of regular expressions to replace and filter the query
 */
const generateDynamicRegExp = (filter, query = "", extras = {}) => {
  const escapeRegExp = text => text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  let find = filter.replace(/{{(.*?)}}/g, (m, $1) => {
    const key = $1.trim();
    const queryFilter = extras[key];
    if (key !== "query" && queryFilter) {
      const matcher = new RegExp(queryFilter, "i");
      const matches = query.match(matcher);
      if (matches) {
        return escapeRegExp(matches[1]);
      }
      return "";
    }
    return escapeRegExp(query);
  });
  find = `^(?:${find})$`;
  return new RegExp(find, "i");
};

/**
 * Display the option list of a combo box component.
 *
 * @param {HTMLElement} el An element within the combo box component
 */
const displayList = el => {
  const {
    comboBoxEl,
    selectEl,
    inputEl,
    listEl,
    statusEl,
    isPristine,
    disableFiltering
  } = getComboBoxContext(el);
  let selectedItemId;
  let firstFoundId;
  const listOptionBaseId = `${listEl.id}--option-`;
  const inputValue = (inputEl.value || "").toLowerCase();
  const filter = comboBoxEl.dataset.filter || DEFAULT_FILTER;
  const regex = generateDynamicRegExp(filter, inputValue, comboBoxEl.dataset);
  let options = [];
  const optionsStartsWith = [];
  const optionsContains = [];
  const optionList = [...selectEl.options];

  /**
   * Builds and sorts options array.
   *
   * Option param is passed through regex test before passing into this function.
   * When filtering is enabled, the array will be sorted by options that start with the query, followed by
   * options that contain the query.
   * When filtering is disabled, all options will be included in the array unsorted.
   *
   * These array items will populate the list that is displayed to the user after a search query is entered.
   * Array attributes are also used to set option IDs and aria-setsize attributes.
   *
   * @param {HTMLOptionElement} option - Option element from select array
   */
  const buildOptionsArray = option => {
    if (disableFiltering || isPristine) {
      options.push(option);
      return;
    }
    const matchStartsWith = option.text.toLowerCase().startsWith(inputValue);
    if (matchStartsWith) {
      optionsStartsWith.push(option);
    } else {
      optionsContains.push(option);
    }
    options = [...optionsStartsWith, ...optionsContains];
  };

  /**
   * Compares option text to query using generated regex filter.
   *
   * @param {HTMLOptionElement} option
   * @returns {boolean} - True when option text matches user input query.
   */
  const optionMatchesQuery = option => regex.test(option.text);

  /**
   * Logic check to determine if options array needs to be updated.
   *
   * @param {HTMLOptionElement} option
   * @returns {boolean} - True when option has value && if filtering is disabled, combo box has an active selection,
   * there is no inputValue, or if option matches user query
   */
  const arrayNeedsUpdate = option => option.value && (disableFiltering || isPristine || !inputValue || optionMatchesQuery(option));

  /**
   * Checks if firstFoundId should be assigned, which is then used to set itemToFocus.
   *
   * @param {HTMLOptionElement} option
   * @return {boolean} - Returns true if filtering is disabled, no firstFoundId is assigned, and the option matches the query.
   */
  const isFirstMatch = option => disableFiltering && !firstFoundId && optionMatchesQuery(option);

  /**
   * Checks if isCurrentSelection should be assigned, which is then used to set itemToFocus.
   *
   * @param {HTMLOptionElement} option
   * @returns {boolean} - Returns true if option.value matches selectEl.value.
   */
  const isCurrentSelection = option => selectEl.value && option.value === selectEl.value;

  /**
   * Update the array of options that should be displayed on the page.
   * Assign an ID to each displayed option.
   * Identify and assign the option that should receive focus.
   */
  optionList.forEach(option => {
    if (arrayNeedsUpdate(option)) {
      buildOptionsArray(option);
      const optionId = `${listOptionBaseId}${options.indexOf(option)}`;
      if (isFirstMatch(option)) {
        firstFoundId = optionId;
      }
      if (isCurrentSelection(option)) {
        selectedItemId = optionId;
      }
    }
  });
  const numOptions = options.length;
  const optionHtml = options.map((option, index) => {
    const optionId = `${listOptionBaseId}${index}`;
    const classes = [LIST_OPTION_CLASS];
    let tabindex = "-1";
    let ariaSelected = "false";
    if (optionId === selectedItemId) {
      classes.push(LIST_OPTION_SELECTED_CLASS, LIST_OPTION_FOCUSED_CLASS);
      tabindex = "0";
      ariaSelected = "true";
    }
    if (!selectedItemId && index === 0) {
      classes.push(LIST_OPTION_FOCUSED_CLASS);
      tabindex = "0";
    }
    const li = document.createElement("li");
    li.setAttribute("aria-setsize", options.length);
    li.setAttribute("aria-posinset", index + 1);
    li.setAttribute("aria-selected", ariaSelected);
    li.setAttribute("id", optionId);
    li.setAttribute("class", classes.join(" "));
    li.setAttribute("tabindex", tabindex);
    li.setAttribute("role", "option");
    li.setAttribute("data-value", option.value);
    li.textContent = option.text;
    return li;
  });
  const noResults = document.createElement("li");
  noResults.setAttribute("class", `${LIST_OPTION_CLASS}--no-results`);
  noResults.textContent = "No results found";
  listEl.hidden = false;
  if (numOptions) {
    listEl.innerHTML = "";
    optionHtml.forEach(item => listEl.insertAdjacentElement("beforeend", item));
  } else {
    listEl.innerHTML = "";
    listEl.insertAdjacentElement("beforeend", noResults);
  }
  inputEl.setAttribute("aria-expanded", "true");
  statusEl.textContent = numOptions ? `${numOptions} result${numOptions > 1 ? "s" : ""} available.` : "No results.";
  let itemToFocus;
  if (isPristine && selectedItemId) {
    itemToFocus = listEl.querySelector(`#${selectedItemId}`);
  } else if (disableFiltering && firstFoundId) {
    itemToFocus = listEl.querySelector(`#${firstFoundId}`);
  }
  if (itemToFocus) {
    highlightOption(listEl, itemToFocus, {
      skipFocus: true
    });
  }
};

/**
 * Hide the option list of a combo box component.
 *
 * @param {HTMLElement} el An element within the combo box component
 */
const hideList = el => {
  const {
    inputEl,
    listEl,
    statusEl,
    focusedOptionEl
  } = getComboBoxContext(el);
  statusEl.innerHTML = "";
  inputEl.setAttribute("aria-expanded", "false");
  inputEl.setAttribute("aria-activedescendant", "");
  if (focusedOptionEl) {
    focusedOptionEl.classList.remove(LIST_OPTION_FOCUSED_CLASS);
  }
  listEl.scrollTop = 0;
  listEl.hidden = true;
};

/**
 * Select an option list of the combo box component.
 *
 * @param {HTMLElement} listOptionEl The list option being selected
 */
const selectItem = listOptionEl => {
  const {
    comboBoxEl,
    selectEl,
    inputEl
  } = getComboBoxContext(listOptionEl);
  changeElementValue(selectEl, listOptionEl.dataset.value);
  changeElementValue(inputEl, listOptionEl.textContent);
  comboBoxEl.classList.add(COMBO_BOX_PRISTINE_CLASS);
  hideList(comboBoxEl);
  inputEl.focus();
};

/**
 * Clear the input of the combo box
 *
 * @param {HTMLButtonElement} clearButtonEl The clear input button
 */
const clearInput = clearButtonEl => {
  const {
    comboBoxEl,
    listEl,
    selectEl,
    inputEl
  } = getComboBoxContext(clearButtonEl);
  const listShown = !listEl.hidden;
  if (selectEl.value) changeElementValue(selectEl);
  if (inputEl.value) changeElementValue(inputEl);
  comboBoxEl.classList.remove(COMBO_BOX_PRISTINE_CLASS);
  if (listShown) displayList(comboBoxEl);
  inputEl.focus();
};

/**
 * Reset the select based off of currently set select value
 *
 * @param {HTMLElement} el An element within the combo box component
 */
const resetSelection = el => {
  const {
    comboBoxEl,
    selectEl,
    inputEl
  } = getComboBoxContext(el);
  const selectValue = selectEl.value;
  const inputValue = (inputEl.value || "").toLowerCase();
  if (selectValue) {
    for (let i = 0, len = selectEl.options.length; i < len; i += 1) {
      const optionEl = selectEl.options[i];
      if (optionEl.value === selectValue) {
        if (inputValue !== optionEl.text) {
          changeElementValue(inputEl, optionEl.text);
        }
        comboBoxEl.classList.add(COMBO_BOX_PRISTINE_CLASS);
        return;
      }
    }
  }
  if (inputValue) {
    changeElementValue(inputEl);
  }
};

/**
 * Select an option list of the combo box component based off of
 * having a current focused list option or
 * having test that completely matches a list option.
 * Otherwise it clears the input and select.
 *
 * @param {HTMLElement} el An element within the combo box component
 */
const completeSelection = el => {
  const {
    comboBoxEl,
    selectEl,
    inputEl,
    statusEl
  } = getComboBoxContext(el);
  statusEl.textContent = "";
  const inputValue = (inputEl.value || "").toLowerCase();
  if (inputValue) {
    for (let i = 0, len = selectEl.options.length; i < len; i += 1) {
      const optionEl = selectEl.options[i];
      if (optionEl.text.toLowerCase() === inputValue) {
        changeElementValue(selectEl, optionEl.value);
        changeElementValue(inputEl, optionEl.text);
        comboBoxEl.classList.add(COMBO_BOX_PRISTINE_CLASS);
        return;
      }
    }
  }
  resetSelection(comboBoxEl);
};

/**
 * Handle the escape event within the combo box component.
 *
 * @param {KeyboardEvent} event An event within the combo box component
 */
const handleEscape = event => {
  const {
    comboBoxEl,
    inputEl
  } = getComboBoxContext(event.target);
  hideList(comboBoxEl);
  resetSelection(comboBoxEl);
  inputEl.focus();
};

/**
 * Handle the down event within the combo box component.
 *
 * @param {KeyboardEvent} event An event within the combo box component
 */
const handleDownFromInput = event => {
  const {
    comboBoxEl,
    listEl
  } = getComboBoxContext(event.target);
  if (listEl.hidden) {
    displayList(comboBoxEl);
  }
  const nextOptionEl = listEl.querySelector(LIST_OPTION_FOCUSED) || listEl.querySelector(LIST_OPTION);
  if (nextOptionEl) {
    highlightOption(comboBoxEl, nextOptionEl);
  }
  event.preventDefault();
};

/**
 * Handle the enter event from an input element within the combo box component.
 *
 * @param {KeyboardEvent} event An event within the combo box component
 */
const handleEnterFromInput = event => {
  const {
    comboBoxEl,
    listEl
  } = getComboBoxContext(event.target);
  const listShown = !listEl.hidden;
  completeSelection(comboBoxEl);
  if (listShown) {
    hideList(comboBoxEl);
  }
  event.preventDefault();
};

/**
 * Handle the down event within the combo box component.
 *
 * @param {KeyboardEvent} event An event within the combo box component
 */
const handleDownFromListOption = event => {
  const focusedOptionEl = event.target;
  const nextOptionEl = focusedOptionEl.nextSibling;
  if (nextOptionEl) {
    highlightOption(focusedOptionEl, nextOptionEl);
  }
  event.preventDefault();
};

/**
 * Handle the space event from an list option element within the combo box component.
 *
 * @param {KeyboardEvent} event An event within the combo box component
 */
const handleSpaceFromListOption = event => {
  selectItem(event.target);
  event.preventDefault();
};

/**
 * Handle the enter event from list option within the combo box component.
 *
 * @param {KeyboardEvent} event An event within the combo box component
 */
const handleEnterFromListOption = event => {
  selectItem(event.target);
  event.preventDefault();
};

/**
 * Handle the up event from list option within the combo box component.
 *
 * @param {KeyboardEvent} event An event within the combo box component
 */
const handleUpFromListOption = event => {
  const {
    comboBoxEl,
    listEl,
    focusedOptionEl
  } = getComboBoxContext(event.target);
  const nextOptionEl = focusedOptionEl && focusedOptionEl.previousSibling;
  const listShown = !listEl.hidden;
  highlightOption(comboBoxEl, nextOptionEl);
  if (listShown) {
    event.preventDefault();
  }
  if (!nextOptionEl) {
    hideList(comboBoxEl);
  }
};

/**
 * Select list option on the mouseover event.
 *
 * @param {MouseEvent} event The mouseover event
 * @param {HTMLLIElement} listOptionEl An element within the combo box component
 */
const handleMouseover = listOptionEl => {
  const isCurrentlyFocused = listOptionEl.classList.contains(LIST_OPTION_FOCUSED_CLASS);
  if (isCurrentlyFocused) return;
  highlightOption(listOptionEl, listOptionEl, {
    preventScroll: true
  });
};

/**
 * Toggle the list when the button is clicked
 *
 * @param {HTMLElement} el An element within the combo box component
 */
const toggleList = el => {
  const {
    comboBoxEl,
    listEl,
    inputEl
  } = getComboBoxContext(el);
  if (listEl.hidden) {
    displayList(comboBoxEl);
  } else {
    hideList(comboBoxEl);
  }
  inputEl.focus();
};

/**
 * Handle click from input
 *
 * @param {HTMLInputElement} el An element within the combo box component
 */
const handleClickFromInput = el => {
  const {
    comboBoxEl,
    listEl
  } = getComboBoxContext(el);
  if (listEl.hidden) {
    displayList(comboBoxEl);
  }
};
const comboBox = behavior({
  [CLICK]: {
    [INPUT]() {
      if (this.disabled) return;
      handleClickFromInput(this);
    },
    [TOGGLE_LIST_BUTTON]() {
      if (this.disabled) return;
      toggleList(this);
    },
    [LIST_OPTION]() {
      if (this.disabled) return;
      selectItem(this);
    },
    [CLEAR_INPUT_BUTTON]() {
      if (this.disabled) return;
      clearInput(this);
    }
  },
  focusout: {
    [COMBO_BOX](event) {
      if (!this.contains(event.relatedTarget)) {
        resetSelection(this);
        hideList(this);
      }
    }
  },
  keydown: {
    [COMBO_BOX]: keymap({
      Escape: handleEscape
    }),
    [INPUT]: keymap({
      Enter: handleEnterFromInput,
      ArrowDown: handleDownFromInput,
      Down: handleDownFromInput
    }),
    [LIST_OPTION]: keymap({
      ArrowUp: handleUpFromListOption,
      Up: handleUpFromListOption,
      ArrowDown: handleDownFromListOption,
      Down: handleDownFromListOption,
      Enter: handleEnterFromListOption,
      " ": handleSpaceFromListOption,
      "Shift+Tab": noop
    })
  },
  input: {
    [INPUT]() {
      const comboBoxEl = this.closest(COMBO_BOX);
      comboBoxEl.classList.remove(COMBO_BOX_PRISTINE_CLASS);
      displayList(this);
    }
  },
  mouseover: {
    [LIST_OPTION]() {
      handleMouseover(this);
    }
  }
}, {
  init(root) {
    selectOrMatches(COMBO_BOX, root).forEach(comboBoxEl => {
      enhanceComboBox(comboBoxEl);
    });
  },
  getComboBoxContext,
  enhanceComboBox,
  generateDynamicRegExp,
  disable,
  enable,
  displayList,
  hideList,
  COMBO_BOX_CLASS
});
module.exports = comboBox;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/keymap":33,"../../uswds-core/src/js/utils/sanitizer":34,"../../uswds-core/src/js/utils/select-or-matches":36}],7:[function(require,module,exports){
"use strict";

const keymap = require("../../uswds-core/src/js/utils/keymap");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");
const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const activeElement = require("../../uswds-core/src/js/utils/active-element");
const isIosDevice = require("../../uswds-core/src/js/utils/is-ios-device");
const Sanitizer = require("../../uswds-core/src/js/utils/sanitizer");
const DATE_PICKER_CLASS = `${PREFIX}-date-picker`;
const DATE_PICKER_WRAPPER_CLASS = `${DATE_PICKER_CLASS}__wrapper`;
const DATE_PICKER_INITIALIZED_CLASS = `${DATE_PICKER_CLASS}--initialized`;
const DATE_PICKER_ACTIVE_CLASS = `${DATE_PICKER_CLASS}--active`;
const DATE_PICKER_INTERNAL_INPUT_CLASS = `${DATE_PICKER_CLASS}__internal-input`;
const DATE_PICKER_EXTERNAL_INPUT_CLASS = `${DATE_PICKER_CLASS}__external-input`;
const DATE_PICKER_BUTTON_CLASS = `${DATE_PICKER_CLASS}__button`;
const DATE_PICKER_CALENDAR_CLASS = `${DATE_PICKER_CLASS}__calendar`;
const DATE_PICKER_STATUS_CLASS = `${DATE_PICKER_CLASS}__status`;
const CALENDAR_DATE_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__date`;
const CALENDAR_DATE_FOCUSED_CLASS = `${CALENDAR_DATE_CLASS}--focused`;
const CALENDAR_DATE_SELECTED_CLASS = `${CALENDAR_DATE_CLASS}--selected`;
const CALENDAR_DATE_PREVIOUS_MONTH_CLASS = `${CALENDAR_DATE_CLASS}--previous-month`;
const CALENDAR_DATE_CURRENT_MONTH_CLASS = `${CALENDAR_DATE_CLASS}--current-month`;
const CALENDAR_DATE_NEXT_MONTH_CLASS = `${CALENDAR_DATE_CLASS}--next-month`;
const CALENDAR_DATE_RANGE_DATE_CLASS = `${CALENDAR_DATE_CLASS}--range-date`;
const CALENDAR_DATE_TODAY_CLASS = `${CALENDAR_DATE_CLASS}--today`;
const CALENDAR_DATE_RANGE_DATE_START_CLASS = `${CALENDAR_DATE_CLASS}--range-date-start`;
const CALENDAR_DATE_RANGE_DATE_END_CLASS = `${CALENDAR_DATE_CLASS}--range-date-end`;
const CALENDAR_DATE_WITHIN_RANGE_CLASS = `${CALENDAR_DATE_CLASS}--within-range`;
const CALENDAR_PREVIOUS_YEAR_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__previous-year`;
const CALENDAR_PREVIOUS_MONTH_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__previous-month`;
const CALENDAR_NEXT_YEAR_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__next-year`;
const CALENDAR_NEXT_MONTH_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__next-month`;
const CALENDAR_MONTH_SELECTION_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month-selection`;
const CALENDAR_YEAR_SELECTION_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__year-selection`;
const CALENDAR_MONTH_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month`;
const CALENDAR_MONTH_FOCUSED_CLASS = `${CALENDAR_MONTH_CLASS}--focused`;
const CALENDAR_MONTH_SELECTED_CLASS = `${CALENDAR_MONTH_CLASS}--selected`;
const CALENDAR_YEAR_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__year`;
const CALENDAR_YEAR_FOCUSED_CLASS = `${CALENDAR_YEAR_CLASS}--focused`;
const CALENDAR_YEAR_SELECTED_CLASS = `${CALENDAR_YEAR_CLASS}--selected`;
const CALENDAR_PREVIOUS_YEAR_CHUNK_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__previous-year-chunk`;
const CALENDAR_NEXT_YEAR_CHUNK_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__next-year-chunk`;
const CALENDAR_DATE_PICKER_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__date-picker`;
const CALENDAR_MONTH_PICKER_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month-picker`;
const CALENDAR_YEAR_PICKER_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__year-picker`;
const CALENDAR_TABLE_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__table`;
const CALENDAR_ROW_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__row`;
const CALENDAR_CELL_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__cell`;
const CALENDAR_CELL_CENTER_ITEMS_CLASS = `${CALENDAR_CELL_CLASS}--center-items`;
const CALENDAR_MONTH_LABEL_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month-label`;
const CALENDAR_DAY_OF_WEEK_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__day-of-week`;
const DATE_PICKER = `.${DATE_PICKER_CLASS}`;
const DATE_PICKER_BUTTON = `.${DATE_PICKER_BUTTON_CLASS}`;
const DATE_PICKER_INTERNAL_INPUT = `.${DATE_PICKER_INTERNAL_INPUT_CLASS}`;
const DATE_PICKER_EXTERNAL_INPUT = `.${DATE_PICKER_EXTERNAL_INPUT_CLASS}`;
const DATE_PICKER_CALENDAR = `.${DATE_PICKER_CALENDAR_CLASS}`;
const DATE_PICKER_STATUS = `.${DATE_PICKER_STATUS_CLASS}`;
const CALENDAR_DATE = `.${CALENDAR_DATE_CLASS}`;
const CALENDAR_DATE_FOCUSED = `.${CALENDAR_DATE_FOCUSED_CLASS}`;
const CALENDAR_DATE_CURRENT_MONTH = `.${CALENDAR_DATE_CURRENT_MONTH_CLASS}`;
const CALENDAR_PREVIOUS_YEAR = `.${CALENDAR_PREVIOUS_YEAR_CLASS}`;
const CALENDAR_PREVIOUS_MONTH = `.${CALENDAR_PREVIOUS_MONTH_CLASS}`;
const CALENDAR_NEXT_YEAR = `.${CALENDAR_NEXT_YEAR_CLASS}`;
const CALENDAR_NEXT_MONTH = `.${CALENDAR_NEXT_MONTH_CLASS}`;
const CALENDAR_YEAR_SELECTION = `.${CALENDAR_YEAR_SELECTION_CLASS}`;
const CALENDAR_MONTH_SELECTION = `.${CALENDAR_MONTH_SELECTION_CLASS}`;
const CALENDAR_MONTH = `.${CALENDAR_MONTH_CLASS}`;
const CALENDAR_YEAR = `.${CALENDAR_YEAR_CLASS}`;
const CALENDAR_PREVIOUS_YEAR_CHUNK = `.${CALENDAR_PREVIOUS_YEAR_CHUNK_CLASS}`;
const CALENDAR_NEXT_YEAR_CHUNK = `.${CALENDAR_NEXT_YEAR_CHUNK_CLASS}`;
const CALENDAR_DATE_PICKER = `.${CALENDAR_DATE_PICKER_CLASS}`;
const CALENDAR_MONTH_PICKER = `.${CALENDAR_MONTH_PICKER_CLASS}`;
const CALENDAR_YEAR_PICKER = `.${CALENDAR_YEAR_PICKER_CLASS}`;
const CALENDAR_MONTH_FOCUSED = `.${CALENDAR_MONTH_FOCUSED_CLASS}`;
const CALENDAR_YEAR_FOCUSED = `.${CALENDAR_YEAR_FOCUSED_CLASS}`;
const VALIDATION_MESSAGE = "Please enter a valid date";

// An array of Dates that represent each month in the year
const MONTH_DATE_SEED = Array.from({
  length: 12
}).map((_, i) => new Date(0, i));

// An array of Dates that represent each day of the week
const DAY_OF_WEEK_DATE_SEED = Array.from({
  length: 7
}).map((_, i) => new Date(0, 0, i));
const CALENDAR_LABELS_BY_LANG = new Map();
const ENTER_KEYCODE = 13;
const YEAR_CHUNK = 12;
const DEFAULT_MIN_DATE = "0000-01-01";
const DEFAULT_EXTERNAL_DATE_FORMAT = "MM/DD/YYYY";
const INTERNAL_DATE_FORMAT = "YYYY-MM-DD";
const NOT_DISABLED_SELECTOR = ":not([disabled])";
const processFocusableSelectors = (...selectors) => selectors.map(query => query + NOT_DISABLED_SELECTOR).join(", ");
const DATE_PICKER_FOCUSABLE = processFocusableSelectors(CALENDAR_PREVIOUS_YEAR, CALENDAR_PREVIOUS_MONTH, CALENDAR_YEAR_SELECTION, CALENDAR_MONTH_SELECTION, CALENDAR_NEXT_YEAR, CALENDAR_NEXT_MONTH, CALENDAR_DATE_FOCUSED);
const MONTH_PICKER_FOCUSABLE = processFocusableSelectors(CALENDAR_MONTH_FOCUSED);
const YEAR_PICKER_FOCUSABLE = processFocusableSelectors(CALENDAR_PREVIOUS_YEAR_CHUNK, CALENDAR_NEXT_YEAR_CHUNK, CALENDAR_YEAR_FOCUSED);

// #region Date Manipulation Functions

/**
 * Keep date within month. Month would only be over by 1 to 3 days
 *
 * @param {Date} dateToCheck the date object to check
 * @param {number} month the correct month
 * @returns {Date} the date, corrected if needed
 */
const keepDateWithinMonth = (dateToCheck, month) => {
  if (month !== dateToCheck.getMonth()) {
    dateToCheck.setDate(0);
  }
  return dateToCheck;
};

/**
 * Set date from month day year
 *
 * @param {number} year the year to set
 * @param {number} month the month to set (zero-indexed)
 * @param {number} date the date to set
 * @returns {Date} the set date
 */
const setDate = (year, month, date) => {
  const newDate = new Date(0);
  newDate.setFullYear(year, month, date);
  return newDate;
};

/**
 * todays date
 *
 * @returns {Date} todays date
 */
const today = () => {
  const newDate = new Date();
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  return setDate(year, month, day);
};

/**
 * Set date to first day of the month
 *
 * @param {number} date the date to adjust
 * @returns {Date} the adjusted date
 */
const startOfMonth = date => {
  const newDate = new Date(0);
  newDate.setFullYear(date.getFullYear(), date.getMonth(), 1);
  return newDate;
};

/**
 * Set date to last day of the month
 *
 * @param {number} date the date to adjust
 * @returns {Date} the adjusted date
 */
const lastDayOfMonth = date => {
  const newDate = new Date(0);
  newDate.setFullYear(date.getFullYear(), date.getMonth() + 1, 0);
  return newDate;
};

/**
 * Add days to date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numDays the difference in days
 * @returns {Date} the adjusted date
 */
const addDays = (_date, numDays) => {
  const newDate = new Date(_date.getTime());
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
};

/**
 * Subtract days from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numDays the difference in days
 * @returns {Date} the adjusted date
 */
const subDays = (_date, numDays) => addDays(_date, -numDays);

/**
 * Add weeks to date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
const addWeeks = (_date, numWeeks) => addDays(_date, numWeeks * 7);

/**
 * Subtract weeks from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
const subWeeks = (_date, numWeeks) => addWeeks(_date, -numWeeks);

/**
 * Set date to the start of the week (Sunday)
 *
 * @param {Date} _date the date to adjust
 * @returns {Date} the adjusted date
 */
const startOfWeek = _date => {
  const dayOfWeek = _date.getDay();
  return subDays(_date, dayOfWeek);
};

/**
 * Set date to the end of the week (Saturday)
 *
 * @param {Date} _date the date to adjust
 * @param {number} numWeeks the difference in weeks
 * @returns {Date} the adjusted date
 */
const endOfWeek = _date => {
  const dayOfWeek = _date.getDay();
  return addDays(_date, 6 - dayOfWeek);
};

/**
 * Add months to date and keep date within month
 *
 * @param {Date} _date the date to adjust
 * @param {number} numMonths the difference in months
 * @returns {Date} the adjusted date
 */
const addMonths = (_date, numMonths) => {
  const newDate = new Date(_date.getTime());
  const dateMonth = (newDate.getMonth() + 12 + numMonths) % 12;
  newDate.setMonth(newDate.getMonth() + numMonths);
  keepDateWithinMonth(newDate, dateMonth);
  return newDate;
};

/**
 * Subtract months from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numMonths the difference in months
 * @returns {Date} the adjusted date
 */
const subMonths = (_date, numMonths) => addMonths(_date, -numMonths);

/**
 * Add years to date and keep date within month
 *
 * @param {Date} _date the date to adjust
 * @param {number} numYears the difference in years
 * @returns {Date} the adjusted date
 */
const addYears = (_date, numYears) => addMonths(_date, numYears * 12);

/**
 * Subtract years from date
 *
 * @param {Date} _date the date to adjust
 * @param {number} numYears the difference in years
 * @returns {Date} the adjusted date
 */
const subYears = (_date, numYears) => addYears(_date, -numYears);

/**
 * Set months of date
 *
 * @param {Date} _date the date to adjust
 * @param {number} month zero-indexed month to set
 * @returns {Date} the adjusted date
 */
const setMonth = (_date, month) => {
  const newDate = new Date(_date.getTime());
  newDate.setMonth(month);
  keepDateWithinMonth(newDate, month);
  return newDate;
};

/**
 * Set year of date
 *
 * @param {Date} _date the date to adjust
 * @param {number} year the year to set
 * @returns {Date} the adjusted date
 */
const setYear = (_date, year) => {
  const newDate = new Date(_date.getTime());
  const month = newDate.getMonth();
  newDate.setFullYear(year);
  keepDateWithinMonth(newDate, month);
  return newDate;
};

/**
 * Return the earliest date
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {Date} the earliest date
 */
const min = (dateA, dateB) => {
  let newDate = dateA;
  if (dateB < dateA) {
    newDate = dateB;
  }
  return new Date(newDate.getTime());
};

/**
 * Return the latest date
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {Date} the latest date
 */
const max = (dateA, dateB) => {
  let newDate = dateA;
  if (dateB > dateA) {
    newDate = dateB;
  }
  return new Date(newDate.getTime());
};

/**
 * Check if dates are the in the same year
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {boolean} are dates in the same year
 */
const isSameYear = (dateA, dateB) => dateA && dateB && dateA.getFullYear() === dateB.getFullYear();

/**
 * Check if dates are the in the same month
 *
 * @param {Date} dateA date to compare
 * @param {Date} dateB date to compare
 * @returns {boolean} are dates in the same month
 */
const isSameMonth = (dateA, dateB) => isSameYear(dateA, dateB) && dateA.getMonth() === dateB.getMonth();

/**
 * Check if dates are the same date
 *
 * @param {Date} dateA the date to compare
 * @param {Date} dateA the date to compare
 * @returns {boolean} are dates the same date
 */
const isSameDay = (dateA, dateB) => isSameMonth(dateA, dateB) && dateA.getDate() === dateB.getDate();

/**
 * return a new date within minimum and maximum date
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @returns {Date} the date between min and max
 */
const keepDateBetweenMinAndMax = (date, minDate, maxDate) => {
  let newDate = date;
  if (date < minDate) {
    newDate = minDate;
  } else if (maxDate && date > maxDate) {
    newDate = maxDate;
  }
  return new Date(newDate.getTime());
};

/**
 * Check if dates is valid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is there a day within the month within min and max dates
 */
const isDateWithinMinAndMax = (date, minDate, maxDate) => date >= minDate && (!maxDate || date <= maxDate);

/**
 * Check if dates month is invalid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is the month outside min or max dates
 */
const isDatesMonthOutsideMinOrMax = (date, minDate, maxDate) => lastDayOfMonth(date) < minDate || maxDate && startOfMonth(date) > maxDate;

/**
 * Check if dates year is invalid.
 *
 * @param {Date} date date to check
 * @param {Date} minDate minimum date to allow
 * @param {Date} maxDate maximum date to allow
 * @return {boolean} is the month outside min or max dates
 */
const isDatesYearOutsideMinOrMax = (date, minDate, maxDate) => lastDayOfMonth(setMonth(date, 11)) < minDate || maxDate && startOfMonth(setMonth(date, 0)) > maxDate;

/**
 * @typedef {Object} DateRangeContext
 * @property {Date} rangeStartDate
 * @property {Date} rangeEndDate
 * @property {Date} withinRangeStartDate
 * @property {Date} withinRangeEndDate
 */

/**
 * Set the start, end, and within range values for date range variants.

 * @param {Date} date - Date that concludes the date range.
 * @param {Date} rangeDate - Range date data attribute value of the date picker component.
 * @returns {DateRangeContext} - Dates for range selection.
 */
const setRangeDates = (date, rangeDate) => {
  const rangeConclusionDate = date;
  const rangeStartDate = rangeDate && min(rangeConclusionDate, rangeDate);
  const rangeEndDate = rangeDate && max(rangeConclusionDate, rangeDate);
  const withinRangeStartDate = rangeDate && addDays(rangeStartDate, 1);
  const withinRangeEndDate = rangeDate && subDays(rangeEndDate, 1);
  return {
    rangeStartDate,
    rangeEndDate,
    withinRangeStartDate,
    withinRangeEndDate
  };
};

/**
 * Parse a date with format M-D-YY
 *
 * @param {string} dateString the date string to parse
 * @param {string} dateFormat the format of the date string
 * @param {boolean} adjustDate should the date be adjusted
 * @returns {Date} the parsed date
 */
const parseDateString = (dateString, dateFormat = INTERNAL_DATE_FORMAT, adjustDate = false) => {
  let date;
  let month;
  let day;
  let year;
  let parsed;
  if (dateString) {
    let monthStr;
    let dayStr;
    let yearStr;
    if (dateFormat === DEFAULT_EXTERNAL_DATE_FORMAT) {
      [monthStr, dayStr, yearStr] = dateString.split("/");
    } else {
      [yearStr, monthStr, dayStr] = dateString.split("-");
    }
    if (yearStr) {
      parsed = parseInt(yearStr, 10);
      if (!Number.isNaN(parsed)) {
        year = parsed;
        if (adjustDate) {
          year = Math.max(0, year);
          if (yearStr.length < 3) {
            const currentYear = today().getFullYear();
            const currentYearStub = currentYear - currentYear % 10 ** yearStr.length;
            year = currentYearStub + parsed;
          }
        }
      }
    }
    if (monthStr) {
      parsed = parseInt(monthStr, 10);
      if (!Number.isNaN(parsed)) {
        month = parsed;
        if (adjustDate) {
          month = Math.max(1, month);
          month = Math.min(12, month);
        }
      }
    }
    if (month && dayStr && year != null) {
      parsed = parseInt(dayStr, 10);
      if (!Number.isNaN(parsed)) {
        day = parsed;
        if (adjustDate) {
          const lastDayOfTheMonth = setDate(year, month, 0).getDate();
          day = Math.max(1, day);
          day = Math.min(lastDayOfTheMonth, day);
        }
      }
    }
    if (month && day && year != null) {
      date = setDate(year, month - 1, day);
    }
  }
  return date;
};

/**
 * Format a date to format MM-DD-YYYY
 *
 * @param {Date} date the date to format
 * @param {string} dateFormat the format of the date string
 * @returns {string} the formatted date string
 */
const formatDate = (date, dateFormat = INTERNAL_DATE_FORMAT) => {
  const padZeros = (value, length) => `0000${value}`.slice(-length);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  if (dateFormat === DEFAULT_EXTERNAL_DATE_FORMAT) {
    return [padZeros(month, 2), padZeros(day, 2), padZeros(year, 4)].join("/");
  }
  return [padZeros(year, 4), padZeros(month, 2), padZeros(day, 2)].join("-");
};

// #endregion Date Manipulation Functions

/**
 * Create a grid string from an array of html strings
 *
 * @param {string[]} htmlArray the array of html items
 * @param {number} rowSize the length of a row
 * @returns {string} the grid string
 */
const listToGridHtml = (htmlArray, rowSize) => {
  const grid = [];
  let i = 0;
  while (i < htmlArray.length) {
    const row = [];
    const tr = document.createElement("tr");
    while (i < htmlArray.length && row.length < rowSize) {
      const td = document.createElement("td");
      td.insertAdjacentElement("beforeend", htmlArray[i]);
      row.push(td);
      i += 1;
    }
    row.forEach(element => {
      tr.insertAdjacentElement("beforeend", element);
    });
    grid.push(tr);
  }
  return grid;
};
const createTableBody = grid => {
  const tableBody = document.createElement("tbody");
  grid.forEach(element => {
    tableBody.insertAdjacentElement("beforeend", element);
  });
  return tableBody;
};

/**
 * set the value of the element and dispatch a change event
 *
 * @param {HTMLInputElement} el The element to update
 * @param {string} value The new value of the element
 */
const changeElementValue = (el, value = "") => {
  const elementToChange = el;
  elementToChange.value = value;
  const event = new CustomEvent("change", {
    bubbles: true,
    cancelable: true,
    detail: {
      value
    }
  });
  elementToChange.dispatchEvent(event);
};

/**
 * The properties and elements within the date picker.
 * @typedef {Object} DatePickerContext
 * @property {HTMLDivElement} calendarEl
 * @property {HTMLElement} datePickerEl
 * @property {HTMLInputElement} internalInputEl
 * @property {HTMLInputElement} externalInputEl
 * @property {HTMLDivElement} statusEl
 * @property {HTMLDivElement} firstYearChunkEl
 * @property {Date} calendarDate
 * @property {Date} minDate
 * @property {Date} maxDate
 * @property {Date} selectedDate
 * @property {Date} rangeDate
 * @property {Date} defaultDate
 */

/**
 * Get an object of the properties and elements belonging directly to the given
 * date picker component.
 *
 * @param {HTMLElement} el the element within the date picker
 * @returns {DatePickerContext} elements
 */
const getDatePickerContext = el => {
  const datePickerEl = el.closest(DATE_PICKER);
  if (!datePickerEl) {
    throw new Error(`Element is missing outer ${DATE_PICKER}`);
  }
  const internalInputEl = datePickerEl.querySelector(DATE_PICKER_INTERNAL_INPUT);
  const externalInputEl = datePickerEl.querySelector(DATE_PICKER_EXTERNAL_INPUT);
  const calendarEl = datePickerEl.querySelector(DATE_PICKER_CALENDAR);
  const toggleBtnEl = datePickerEl.querySelector(DATE_PICKER_BUTTON);
  const statusEl = datePickerEl.querySelector(DATE_PICKER_STATUS);
  const firstYearChunkEl = datePickerEl.querySelector(CALENDAR_YEAR);
  const inputDate = parseDateString(externalInputEl.value, DEFAULT_EXTERNAL_DATE_FORMAT, true);
  const selectedDate = parseDateString(internalInputEl.value);
  const calendarDate = parseDateString(calendarEl.dataset.value);
  const minDate = parseDateString(datePickerEl.dataset.minDate);
  const maxDate = parseDateString(datePickerEl.dataset.maxDate);
  const rangeDate = parseDateString(datePickerEl.dataset.rangeDate);
  const defaultDate = parseDateString(datePickerEl.dataset.defaultDate);
  if (minDate && maxDate && minDate > maxDate) {
    throw new Error("Minimum date cannot be after maximum date");
  }
  const lang = document.documentElement.lang || "en";

  // if the language is not found generate the list
  if (!CALENDAR_LABELS_BY_LANG.has(lang)) {
    CALENDAR_LABELS_BY_LANG.set(lang, {
      monthLabels: MONTH_DATE_SEED.map(date => date.toLocaleString(lang, {
        month: "long"
      })),
      dayOfWeeklabels: DAY_OF_WEEK_DATE_SEED.map(date => date.toLocaleString(lang, {
        weekday: "long"
      })),
      dayOfWeeksAbv: DAY_OF_WEEK_DATE_SEED.map(date => date.toLocaleString(lang, {
        weekday: "narrow"
      }))
    });
  }
  const {
    monthLabels,
    dayOfWeeklabels,
    dayOfWeeksAbv
  } = CALENDAR_LABELS_BY_LANG.get(lang);
  return {
    calendarDate,
    minDate,
    toggleBtnEl,
    selectedDate,
    maxDate,
    firstYearChunkEl,
    datePickerEl,
    inputDate,
    internalInputEl,
    externalInputEl,
    calendarEl,
    rangeDate,
    defaultDate,
    statusEl,
    monthLabels,
    dayOfWeeklabels,
    dayOfWeeksAbv
  };
};

/**
 * Disable the date picker component
 *
 * @param {HTMLElement} el An element within the date picker component
 */
const disable = el => {
  const {
    externalInputEl,
    toggleBtnEl
  } = getDatePickerContext(el);
  toggleBtnEl.disabled = true;
  externalInputEl.disabled = true;
};

/**
 * Add the readonly attribute to input element and the aria-disabled attribute to the toggle calendar button and external input elements.
 *
 * @param {HTMLElement} el - The date picker element
 */
const ariaDisable = el => {
  const {
    externalInputEl,
    toggleBtnEl
  } = getDatePickerContext(el);
  toggleBtnEl.setAttribute("aria-disabled", true);
  externalInputEl.setAttribute("aria-disabled", true);
  externalInputEl.setAttribute("readonly", "");
};

/**
 * Enable the date picker component
 *
 * @param {HTMLElement} el An element within the date picker component
 */
const enable = el => {
  const {
    externalInputEl,
    toggleBtnEl
  } = getDatePickerContext(el);
  toggleBtnEl.disabled = false;
  toggleBtnEl.removeAttribute("aria-disabled");
  externalInputEl.disabled = false;
  externalInputEl.removeAttribute("aria-disabled");
  externalInputEl.removeAttribute("readonly");
};

// #region Validation

/**
 * Validate the value in the input as a valid date of format M/D/YYYY
 *
 * @param {HTMLElement} el An element within the date picker component
 */
const isDateInputInvalid = el => {
  const {
    externalInputEl,
    minDate,
    maxDate
  } = getDatePickerContext(el);
  const dateString = externalInputEl.value;
  let isInvalid = false;
  if (dateString) {
    isInvalid = true;
    const dateStringParts = dateString.split("/");
    const [month, day, year] = dateStringParts.map(str => {
      let value;
      const parsed = parseInt(str, 10);
      if (!Number.isNaN(parsed)) value = parsed;
      return value;
    });
    if (month && day && year != null) {
      const checkDate = setDate(year, month - 1, day);
      if (checkDate.getMonth() === month - 1 && checkDate.getDate() === day && checkDate.getFullYear() === year && dateStringParts[2].length === 4 && isDateWithinMinAndMax(checkDate, minDate, maxDate)) {
        isInvalid = false;
      }
    }
  }
  return isInvalid;
};

/**
 * Validate the value in the input as a valid date of format M/D/YYYY
 *
 * @param {HTMLElement} el An element within the date picker component
 */
const validateDateInput = el => {
  const {
    externalInputEl
  } = getDatePickerContext(el);
  const isInvalid = isDateInputInvalid(externalInputEl);
  if (isInvalid && !externalInputEl.validationMessage) {
    externalInputEl.setCustomValidity(VALIDATION_MESSAGE);
  }
  if (!isInvalid && externalInputEl.validationMessage === VALIDATION_MESSAGE) {
    externalInputEl.setCustomValidity("");
  }
};

// #endregion Validation

/**
 * Enable the date picker component
 *
 * @param {HTMLElement} el An element within the date picker component
 */
const reconcileInputValues = el => {
  const {
    internalInputEl,
    inputDate
  } = getDatePickerContext(el);
  let newValue = "";
  if (inputDate && !isDateInputInvalid(el)) {
    newValue = formatDate(inputDate);
  }
  if (internalInputEl.value !== newValue) {
    changeElementValue(internalInputEl, newValue);
  }
};

/**
 * Select the value of the date picker inputs.
 *
 * @param {HTMLButtonElement} el An element within the date picker component
 * @param {string} dateString The date string to update in YYYY-MM-DD format
 */
const setCalendarValue = (el, dateString) => {
  const parsedDate = parseDateString(dateString);
  if (parsedDate) {
    const formattedDate = formatDate(parsedDate, DEFAULT_EXTERNAL_DATE_FORMAT);
    const {
      datePickerEl,
      internalInputEl,
      externalInputEl
    } = getDatePickerContext(el);
    changeElementValue(internalInputEl, dateString);
    changeElementValue(externalInputEl, formattedDate);
    validateDateInput(datePickerEl);
  }
};

/**
 * Enhance an input with the date picker elements
 *
 * @param {HTMLElement} el The initial wrapping element of the date picker component
 */
const enhanceDatePicker = el => {
  const datePickerEl = el.closest(DATE_PICKER);
  if (datePickerEl.dataset.enhanced) return;
  const {
    defaultValue
  } = datePickerEl.dataset;
  const internalInputEl = datePickerEl.querySelector(`input`);
  if (!internalInputEl) {
    throw new Error(`${DATE_PICKER} is missing inner input`);
  }
  if (internalInputEl.value) {
    internalInputEl.value = "";
  }
  const minDate = parseDateString(datePickerEl.dataset.minDate || internalInputEl.getAttribute("min"));
  datePickerEl.dataset.minDate = minDate ? formatDate(minDate) : DEFAULT_MIN_DATE;
  const maxDate = parseDateString(datePickerEl.dataset.maxDate || internalInputEl.getAttribute("max"));
  if (maxDate) {
    datePickerEl.dataset.maxDate = formatDate(maxDate);
  }
  const calendarWrapper = document.createElement("div");
  calendarWrapper.classList.add(DATE_PICKER_WRAPPER_CLASS);
  const externalInputEl = internalInputEl.cloneNode();
  externalInputEl.classList.add(DATE_PICKER_EXTERNAL_INPUT_CLASS);
  externalInputEl.type = "text";
  calendarWrapper.appendChild(externalInputEl);
  calendarWrapper.insertAdjacentHTML("beforeend", Sanitizer.escapeHTML`
    <button type="button" class="${DATE_PICKER_BUTTON_CLASS}" aria-haspopup="true" aria-label="Toggle calendar"></button>
    <div class="${DATE_PICKER_CALENDAR_CLASS}" role="application" hidden></div>
    <div class="usa-sr-only ${DATE_PICKER_STATUS_CLASS}" role="status" aria-live="polite"></div>`);
  internalInputEl.setAttribute("aria-hidden", "true");
  internalInputEl.setAttribute("tabindex", "-1");
  internalInputEl.style.display = "none";
  internalInputEl.classList.add(DATE_PICKER_INTERNAL_INPUT_CLASS);
  internalInputEl.removeAttribute("id");
  internalInputEl.removeAttribute("name");
  internalInputEl.required = false;
  datePickerEl.appendChild(calendarWrapper);
  datePickerEl.classList.add(DATE_PICKER_INITIALIZED_CLASS);
  if (defaultValue) {
    setCalendarValue(datePickerEl, defaultValue);
  }
  if (internalInputEl.disabled) {
    disable(datePickerEl);
    internalInputEl.disabled = false;
  }
  if (internalInputEl.hasAttribute("aria-disabled")) {
    ariaDisable(datePickerEl);
    internalInputEl.removeAttribute("aria-disabled");
  }
  datePickerEl.dataset.enhanced = "true";
};

// #region Calendar - Date Selection View

/**
 * render the calendar.
 *
 * @param {HTMLElement} el An element within the date picker component
 * @param {Date} _dateToDisplay a date to render on the calendar
 * @returns {HTMLElement} a reference to the new calendar element
 */
const renderCalendar = (el, _dateToDisplay) => {
  const {
    datePickerEl,
    calendarEl,
    statusEl,
    selectedDate,
    maxDate,
    minDate,
    rangeDate,
    monthLabels,
    dayOfWeeklabels,
    dayOfWeeksAbv
  } = getDatePickerContext(el);
  const todaysDate = today();
  let dateToDisplay = _dateToDisplay || todaysDate;
  const calendarWasHidden = calendarEl.hidden;
  const focusedDate = addDays(dateToDisplay, 0);
  const focusedMonth = dateToDisplay.getMonth();
  const focusedYear = dateToDisplay.getFullYear();
  const prevMonth = subMonths(dateToDisplay, 1);
  const nextMonth = addMonths(dateToDisplay, 1);
  const currentFormattedDate = formatDate(dateToDisplay);
  const firstOfMonth = startOfMonth(dateToDisplay);
  const prevButtonsDisabled = isSameMonth(dateToDisplay, minDate);
  const nextButtonsDisabled = isSameMonth(dateToDisplay, maxDate);
  const {
    rangeStartDate,
    rangeEndDate,
    withinRangeStartDate,
    withinRangeEndDate
  } = setRangeDates(selectedDate || dateToDisplay, rangeDate);
  const monthLabel = monthLabels[focusedMonth];
  const generateDateHtml = dateToRender => {
    const classes = [CALENDAR_DATE_CLASS];
    const day = dateToRender.getDate();
    const month = dateToRender.getMonth();
    const year = dateToRender.getFullYear();
    const dayOfWeek = dateToRender.getDay();
    const formattedDate = formatDate(dateToRender);
    let tabindex = "-1";
    const isDisabled = !isDateWithinMinAndMax(dateToRender, minDate, maxDate);
    const isSelected = isSameDay(dateToRender, selectedDate);
    if (isSameMonth(dateToRender, prevMonth)) {
      classes.push(CALENDAR_DATE_PREVIOUS_MONTH_CLASS);
    }
    if (isSameMonth(dateToRender, focusedDate)) {
      classes.push(CALENDAR_DATE_CURRENT_MONTH_CLASS);
    }
    if (isSameMonth(dateToRender, nextMonth)) {
      classes.push(CALENDAR_DATE_NEXT_MONTH_CLASS);
    }
    if (isSelected) {
      classes.push(CALENDAR_DATE_SELECTED_CLASS);
    }
    const isToday = isSameDay(dateToRender, todaysDate);
    if (isToday) {
      classes.push(CALENDAR_DATE_TODAY_CLASS);
    }
    if (rangeDate) {
      if (isSameDay(dateToRender, rangeDate)) {
        classes.push(CALENDAR_DATE_RANGE_DATE_CLASS);
      }
      if (isSameDay(dateToRender, rangeStartDate)) {
        classes.push(CALENDAR_DATE_RANGE_DATE_START_CLASS);
      }
      if (isSameDay(dateToRender, rangeEndDate)) {
        classes.push(CALENDAR_DATE_RANGE_DATE_END_CLASS);
      }
      if (isDateWithinMinAndMax(dateToRender, withinRangeStartDate, withinRangeEndDate)) {
        classes.push(CALENDAR_DATE_WITHIN_RANGE_CLASS);
      }
    }
    if (isSameDay(dateToRender, focusedDate)) {
      tabindex = "0";
      classes.push(CALENDAR_DATE_FOCUSED_CLASS);
    }
    const monthStr = monthLabels[month];
    const dayStr = dayOfWeeklabels[dayOfWeek];
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("tabindex", tabindex);
    btn.setAttribute("class", classes.join(" "));
    btn.setAttribute("data-day", day);
    btn.setAttribute("data-month", month + 1);
    btn.setAttribute("data-year", year);
    btn.setAttribute("data-value", formattedDate);
    btn.setAttribute("aria-label", Sanitizer.escapeHTML`${day} ${monthStr} ${year} ${dayStr}`);
    btn.setAttribute("aria-selected", isSelected ? "true" : "false");
    if (isToday) {
      btn.setAttribute("aria-current", "date");
    }
    if (isDisabled === true) {
      btn.disabled = true;
    }
    btn.textContent = day;
    return btn;
  };

  // set date to first rendered day
  dateToDisplay = startOfWeek(firstOfMonth);
  const days = [];
  while (days.length < 28 || dateToDisplay.getMonth() === focusedMonth || days.length % 7 !== 0) {
    days.push(generateDateHtml(dateToDisplay));
    dateToDisplay = addDays(dateToDisplay, 1);
  }
  const datesGrid = listToGridHtml(days, 7);
  const newCalendar = calendarEl.cloneNode();
  newCalendar.dataset.value = currentFormattedDate;
  newCalendar.style.top = `${datePickerEl.offsetHeight}px`;
  newCalendar.hidden = false;
  newCalendar.innerHTML = Sanitizer.escapeHTML`
    <div tabindex="-1" class="${CALENDAR_DATE_PICKER_CLASS}">
      <div class="${CALENDAR_ROW_CLASS}">
        <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
          <button
            type="button"
            class="${CALENDAR_PREVIOUS_YEAR_CLASS}"
            aria-label="Navigate back one year"
            ${prevButtonsDisabled ? `disabled="disabled"` : ""}
          ></button>
        </div>
        <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
          <button
            type="button"
            class="${CALENDAR_PREVIOUS_MONTH_CLASS}"
            aria-label="Navigate back one month"
            ${prevButtonsDisabled ? `disabled="disabled"` : ""}
          ></button>
        </div>
        <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_MONTH_LABEL_CLASS}">
          <button
            type="button"
            class="${CALENDAR_MONTH_SELECTION_CLASS}" aria-label="${monthLabel}. Select month"
          >${monthLabel}</button>
          <button
            type="button"
            class="${CALENDAR_YEAR_SELECTION_CLASS}" aria-label="${focusedYear}. Select year"
          >${focusedYear}</button>
        </div>
        <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
          <button
            type="button"
            class="${CALENDAR_NEXT_MONTH_CLASS}"
            aria-label="Navigate forward one month"
            ${nextButtonsDisabled ? `disabled="disabled"` : ""}
          ></button>
        </div>
        <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
          <button
            type="button"
            class="${CALENDAR_NEXT_YEAR_CLASS}"
            aria-label="Navigate forward one year"
            ${nextButtonsDisabled ? `disabled="disabled"` : ""}
          ></button>
        </div>
      </div>
    </div>
    `;
  const table = document.createElement("table");
  table.setAttribute("class", CALENDAR_TABLE_CLASS);
  const tableHead = document.createElement("thead");
  table.insertAdjacentElement("beforeend", tableHead);
  const tableHeadRow = document.createElement("tr");
  tableHead.insertAdjacentElement("beforeend", tableHeadRow);
  dayOfWeeklabels.forEach((dayOfWeek, i) => {
    const th = document.createElement("th");
    th.setAttribute("class", CALENDAR_DAY_OF_WEEK_CLASS);
    th.setAttribute("scope", "col");
    th.setAttribute("aria-label", dayOfWeek);
    th.textContent = dayOfWeeksAbv[i];
    tableHeadRow.insertAdjacentElement("beforeend", th);
  });
  const tableBody = createTableBody(datesGrid);
  table.insertAdjacentElement("beforeend", tableBody);

  // Container for Years, Months, and Days
  const datePickerCalendarContainer = newCalendar.querySelector(CALENDAR_DATE_PICKER);
  datePickerCalendarContainer.insertAdjacentElement("beforeend", table);
  calendarEl.parentNode.replaceChild(newCalendar, calendarEl);
  datePickerEl.classList.add(DATE_PICKER_ACTIVE_CLASS);
  const statuses = [];
  if (isSameDay(selectedDate, focusedDate)) {
    statuses.push("Selected date");
  }
  if (calendarWasHidden) {
    statuses.push("You can navigate by day using left and right arrows", "Weeks by using up and down arrows", "Months by using page up and page down keys", "Years by using shift plus page up and shift plus page down", "Home and end keys navigate to the beginning and end of a week");
    statusEl.textContent = "";
  } else {
    statuses.push(`${monthLabel} ${focusedYear}`);
  }
  statusEl.textContent = statuses.join(". ");
  return newCalendar;
};

/**
 * Navigate back one year and display the calendar.
 *
 * @param {HTMLButtonElement} _buttonEl An element within the date picker component
 */
const displayPreviousYear = _buttonEl => {
  if (_buttonEl.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(_buttonEl);
  let date = subYears(calendarDate, 1);
  date = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = renderCalendar(calendarEl, date);
  let nextToFocus = newCalendar.querySelector(CALENDAR_PREVIOUS_YEAR);
  if (nextToFocus.disabled) {
    nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER);
  }
  nextToFocus.focus();
};

/**
 * Navigate back one month and display the calendar.
 *
 * @param {HTMLButtonElement} _buttonEl An element within the date picker component
 */
const displayPreviousMonth = _buttonEl => {
  if (_buttonEl.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(_buttonEl);
  let date = subMonths(calendarDate, 1);
  date = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = renderCalendar(calendarEl, date);
  let nextToFocus = newCalendar.querySelector(CALENDAR_PREVIOUS_MONTH);
  if (nextToFocus.disabled) {
    nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER);
  }
  nextToFocus.focus();
};

/**
 * Navigate forward one month and display the calendar.
 *
 * @param {HTMLButtonElement} _buttonEl An element within the date picker component
 */
const displayNextMonth = _buttonEl => {
  if (_buttonEl.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(_buttonEl);
  let date = addMonths(calendarDate, 1);
  date = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = renderCalendar(calendarEl, date);
  let nextToFocus = newCalendar.querySelector(CALENDAR_NEXT_MONTH);
  if (nextToFocus.disabled) {
    nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER);
  }
  nextToFocus.focus();
};

/**
 * Navigate forward one year and display the calendar.
 *
 * @param {HTMLButtonElement} _buttonEl An element within the date picker component
 */
const displayNextYear = _buttonEl => {
  if (_buttonEl.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(_buttonEl);
  let date = addYears(calendarDate, 1);
  date = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = renderCalendar(calendarEl, date);
  let nextToFocus = newCalendar.querySelector(CALENDAR_NEXT_YEAR);
  if (nextToFocus.disabled) {
    nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER);
  }
  nextToFocus.focus();
};

/**
 * Hide the calendar of a date picker component.
 *
 * @param {HTMLElement} el An element within the date picker component
 */
const hideCalendar = el => {
  const {
    datePickerEl,
    calendarEl,
    statusEl
  } = getDatePickerContext(el);
  datePickerEl.classList.remove(DATE_PICKER_ACTIVE_CLASS);
  calendarEl.hidden = true;
  statusEl.textContent = "";
};

/**
 * Select a date within the date picker component.
 *
 * @param {HTMLButtonElement} calendarDateEl A date element within the date picker component
 */
const selectDate = calendarDateEl => {
  if (calendarDateEl.disabled) return;
  const {
    datePickerEl,
    externalInputEl
  } = getDatePickerContext(calendarDateEl);
  setCalendarValue(calendarDateEl, calendarDateEl.dataset.value);
  hideCalendar(datePickerEl);
  externalInputEl.focus();
};

/**
 * Toggle the calendar.
 *
 * @param {HTMLButtonElement} el An element within the date picker component
 */
const toggleCalendar = el => {
  if (el.disabled || el.hasAttribute("aria-disabled")) return;
  const {
    calendarEl,
    inputDate,
    minDate,
    maxDate,
    defaultDate
  } = getDatePickerContext(el);
  if (calendarEl.hidden) {
    const dateToDisplay = keepDateBetweenMinAndMax(inputDate || defaultDate || today(), minDate, maxDate);
    const newCalendar = renderCalendar(calendarEl, dateToDisplay);
    newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus();
  } else {
    hideCalendar(el);
  }
};

/**
 * Update the calendar when visible.
 *
 * @param {HTMLElement} el an element within the date picker
 */
const updateCalendarIfVisible = el => {
  const {
    calendarEl,
    inputDate,
    minDate,
    maxDate
  } = getDatePickerContext(el);
  const calendarShown = !calendarEl.hidden;
  if (calendarShown && inputDate) {
    const dateToDisplay = keepDateBetweenMinAndMax(inputDate, minDate, maxDate);
    renderCalendar(calendarEl, dateToDisplay);
  }
};

// #endregion Calendar - Date Selection View

// #region Calendar - Month Selection View
/**
 * Display the month selection screen in the date picker.
 *
 * @param {HTMLButtonElement} el An element within the date picker component
 * @returns {HTMLElement} a reference to the new calendar element
 */
const displayMonthSelection = (el, monthToDisplay) => {
  const {
    calendarEl,
    statusEl,
    calendarDate,
    minDate,
    maxDate,
    monthLabels
  } = getDatePickerContext(el);
  const selectedMonth = calendarDate.getMonth();
  const focusedMonth = monthToDisplay == null ? selectedMonth : monthToDisplay;
  const months = monthLabels.map((month, index) => {
    const monthToCheck = setMonth(calendarDate, index);
    const isDisabled = isDatesMonthOutsideMinOrMax(monthToCheck, minDate, maxDate);
    let tabindex = "-1";
    const classes = [CALENDAR_MONTH_CLASS];
    const isSelected = index === selectedMonth;
    if (index === focusedMonth) {
      tabindex = "0";
      classes.push(CALENDAR_MONTH_FOCUSED_CLASS);
    }
    if (isSelected) {
      classes.push(CALENDAR_MONTH_SELECTED_CLASS);
    }
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("tabindex", tabindex);
    btn.setAttribute("class", classes.join(" "));
    btn.setAttribute("data-value", index);
    btn.setAttribute("data-label", month);
    btn.setAttribute("aria-selected", isSelected ? "true" : "false");
    if (isDisabled === true) {
      btn.disabled = true;
    }
    btn.textContent = month;
    return btn;
  });
  const monthsHtml = document.createElement("div");
  monthsHtml.setAttribute("tabindex", "-1");
  monthsHtml.setAttribute("class", CALENDAR_MONTH_PICKER_CLASS);
  const table = document.createElement("table");
  table.setAttribute("class", CALENDAR_TABLE_CLASS);
  table.setAttribute("role", "presentation");
  const monthsGrid = listToGridHtml(months, 3);
  const tableBody = createTableBody(monthsGrid);
  table.insertAdjacentElement("beforeend", tableBody);
  monthsHtml.insertAdjacentElement("beforeend", table);
  const newCalendar = calendarEl.cloneNode();
  newCalendar.insertAdjacentElement("beforeend", monthsHtml);
  calendarEl.parentNode.replaceChild(newCalendar, calendarEl);
  statusEl.textContent = "Select a month.";
  return newCalendar;
};

/**
 * Select a month in the date picker component.
 *
 * @param {HTMLButtonElement} monthEl An month element within the date picker component
 */
const selectMonth = monthEl => {
  if (monthEl.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(monthEl);
  const selectedMonth = parseInt(monthEl.dataset.value, 10);
  let date = setMonth(calendarDate, selectedMonth);
  date = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = renderCalendar(calendarEl, date);
  newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus();
};

// #endregion Calendar - Month Selection View

// #region Calendar - Year Selection View

/**
 * Display the year selection screen in the date picker.
 *
 * @param {HTMLButtonElement} el An element within the date picker component
 * @param {number} yearToDisplay year to display in year selection
 * @returns {HTMLElement} a reference to the new calendar element
 */
const displayYearSelection = (el, yearToDisplay) => {
  const {
    calendarEl,
    statusEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(el);
  const selectedYear = calendarDate.getFullYear();
  const focusedYear = yearToDisplay == null ? selectedYear : yearToDisplay;
  let yearToChunk = focusedYear;
  yearToChunk -= yearToChunk % YEAR_CHUNK;
  yearToChunk = Math.max(0, yearToChunk);
  const prevYearChunkDisabled = isDatesYearOutsideMinOrMax(setYear(calendarDate, yearToChunk - 1), minDate, maxDate);
  const nextYearChunkDisabled = isDatesYearOutsideMinOrMax(setYear(calendarDate, yearToChunk + YEAR_CHUNK), minDate, maxDate);
  const years = [];
  let yearIndex = yearToChunk;
  while (years.length < YEAR_CHUNK) {
    const isDisabled = isDatesYearOutsideMinOrMax(setYear(calendarDate, yearIndex), minDate, maxDate);
    let tabindex = "-1";
    const classes = [CALENDAR_YEAR_CLASS];
    const isSelected = yearIndex === selectedYear;
    if (yearIndex === focusedYear) {
      tabindex = "0";
      classes.push(CALENDAR_YEAR_FOCUSED_CLASS);
    }
    if (isSelected) {
      classes.push(CALENDAR_YEAR_SELECTED_CLASS);
    }
    const btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("tabindex", tabindex);
    btn.setAttribute("class", classes.join(" "));
    btn.setAttribute("data-value", yearIndex);
    btn.setAttribute("aria-selected", isSelected ? "true" : "false");
    if (isDisabled === true) {
      btn.disabled = true;
    }
    btn.textContent = yearIndex;
    years.push(btn);
    yearIndex += 1;
  }
  const newCalendar = calendarEl.cloneNode();

  // create the years calendar wrapper
  const yearsCalendarWrapper = document.createElement("div");
  yearsCalendarWrapper.setAttribute("tabindex", "-1");
  yearsCalendarWrapper.setAttribute("class", CALENDAR_YEAR_PICKER_CLASS);

  // create table parent
  const yearsTableParent = document.createElement("table");
  yearsTableParent.setAttribute("class", CALENDAR_TABLE_CLASS);

  // create table body and table row
  const yearsHTMLTableBody = document.createElement("tbody");
  const yearsHTMLTableBodyRow = document.createElement("tr");

  // create previous button
  const previousYearsBtn = document.createElement("button");
  previousYearsBtn.setAttribute("type", "button");
  previousYearsBtn.setAttribute("class", CALENDAR_PREVIOUS_YEAR_CHUNK_CLASS);
  previousYearsBtn.setAttribute("aria-label", `Navigate back ${YEAR_CHUNK} years`);
  if (prevYearChunkDisabled === true) {
    previousYearsBtn.disabled = true;
  }
  previousYearsBtn.innerHTML = Sanitizer.escapeHTML`&nbsp`;

  // create next button
  const nextYearsBtn = document.createElement("button");
  nextYearsBtn.setAttribute("type", "button");
  nextYearsBtn.setAttribute("class", CALENDAR_NEXT_YEAR_CHUNK_CLASS);
  nextYearsBtn.setAttribute("aria-label", `Navigate forward ${YEAR_CHUNK} years`);
  if (nextYearChunkDisabled === true) {
    nextYearsBtn.disabled = true;
  }
  nextYearsBtn.innerHTML = Sanitizer.escapeHTML`&nbsp`;

  // create the actual years table
  const yearsTable = document.createElement("table");
  yearsTable.setAttribute("class", CALENDAR_TABLE_CLASS);
  yearsTable.setAttribute("role", "presentation");

  // create the years child table
  const yearsGrid = listToGridHtml(years, 3);
  const yearsTableBody = createTableBody(yearsGrid);

  // append the grid to the years child table
  yearsTable.insertAdjacentElement("beforeend", yearsTableBody);

  // create the prev button td and append the prev button
  const yearsHTMLTableBodyDetailPrev = document.createElement("td");
  yearsHTMLTableBodyDetailPrev.insertAdjacentElement("beforeend", previousYearsBtn);

  // create the years td and append the years child table
  const yearsHTMLTableBodyYearsDetail = document.createElement("td");
  yearsHTMLTableBodyYearsDetail.setAttribute("colspan", "3");
  yearsHTMLTableBodyYearsDetail.insertAdjacentElement("beforeend", yearsTable);

  // create the next button td and append the next button
  const yearsHTMLTableBodyDetailNext = document.createElement("td");
  yearsHTMLTableBodyDetailNext.insertAdjacentElement("beforeend", nextYearsBtn);

  // append the three td to the years child table row
  yearsHTMLTableBodyRow.insertAdjacentElement("beforeend", yearsHTMLTableBodyDetailPrev);
  yearsHTMLTableBodyRow.insertAdjacentElement("beforeend", yearsHTMLTableBodyYearsDetail);
  yearsHTMLTableBodyRow.insertAdjacentElement("beforeend", yearsHTMLTableBodyDetailNext);

  // append the table row to the years child table body
  yearsHTMLTableBody.insertAdjacentElement("beforeend", yearsHTMLTableBodyRow);

  // append the years table body to the years parent table
  yearsTableParent.insertAdjacentElement("beforeend", yearsHTMLTableBody);

  // append the parent table to the calendar wrapper
  yearsCalendarWrapper.insertAdjacentElement("beforeend", yearsTableParent);

  // append the years calender to the new calendar
  newCalendar.insertAdjacentElement("beforeend", yearsCalendarWrapper);

  // replace calendar
  calendarEl.parentNode.replaceChild(newCalendar, calendarEl);
  statusEl.textContent = Sanitizer.escapeHTML`Showing years ${yearToChunk} to ${yearToChunk + YEAR_CHUNK - 1}. Select a year.`;
  return newCalendar;
};

/**
 * Navigate back by years and display the year selection screen.
 *
 * @param {HTMLButtonElement} el An element within the date picker component
 */
const displayPreviousYearChunk = el => {
  if (el.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(el);
  const yearEl = calendarEl.querySelector(CALENDAR_YEAR_FOCUSED);
  const selectedYear = parseInt(yearEl.textContent, 10);
  let adjustedYear = selectedYear - YEAR_CHUNK;
  adjustedYear = Math.max(0, adjustedYear);
  const date = setYear(calendarDate, adjustedYear);
  const cappedDate = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = displayYearSelection(calendarEl, cappedDate.getFullYear());
  let nextToFocus = newCalendar.querySelector(CALENDAR_PREVIOUS_YEAR_CHUNK);
  if (nextToFocus.disabled) {
    nextToFocus = newCalendar.querySelector(CALENDAR_YEAR_PICKER);
  }
  nextToFocus.focus();
};

/**
 * Navigate forward by years and display the year selection screen.
 *
 * @param {HTMLButtonElement} el An element within the date picker component
 */
const displayNextYearChunk = el => {
  if (el.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(el);
  const yearEl = calendarEl.querySelector(CALENDAR_YEAR_FOCUSED);
  const selectedYear = parseInt(yearEl.textContent, 10);
  let adjustedYear = selectedYear + YEAR_CHUNK;
  adjustedYear = Math.max(0, adjustedYear);
  const date = setYear(calendarDate, adjustedYear);
  const cappedDate = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = displayYearSelection(calendarEl, cappedDate.getFullYear());
  let nextToFocus = newCalendar.querySelector(CALENDAR_NEXT_YEAR_CHUNK);
  if (nextToFocus.disabled) {
    nextToFocus = newCalendar.querySelector(CALENDAR_YEAR_PICKER);
  }
  nextToFocus.focus();
};

/**
 * Select a year in the date picker component.
 *
 * @param {HTMLButtonElement} yearEl A year element within the date picker component
 */
const selectYear = yearEl => {
  if (yearEl.disabled) return;
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(yearEl);
  const selectedYear = parseInt(yearEl.innerHTML, 10);
  let date = setYear(calendarDate, selectedYear);
  date = keepDateBetweenMinAndMax(date, minDate, maxDate);
  const newCalendar = renderCalendar(calendarEl, date);
  newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus();
};

// #endregion Calendar - Year Selection View

// #region Calendar Event Handling

/**
 * Hide the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleEscapeFromCalendar = event => {
  const {
    datePickerEl,
    externalInputEl
  } = getDatePickerContext(event.target);
  hideCalendar(datePickerEl);
  externalInputEl.focus();
  event.preventDefault();
};

// #endregion Calendar Event Handling

// #region Calendar Date Event Handling

/**
 * Adjust the date and display the calendar if needed.
 *
 * @param {function} adjustDateFn function that returns the adjusted date
 */
const adjustCalendar = adjustDateFn => event => {
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(event.target);
  const date = adjustDateFn(calendarDate);
  const cappedDate = keepDateBetweenMinAndMax(date, minDate, maxDate);
  if (!isSameDay(calendarDate, cappedDate)) {
    const newCalendar = renderCalendar(calendarEl, cappedDate);
    newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus();
  }
  event.preventDefault();
};

/**
 * Navigate back one week and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleUpFromDate = adjustCalendar(date => subWeeks(date, 1));

/**
 * Navigate forward one week and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleDownFromDate = adjustCalendar(date => addWeeks(date, 1));

/**
 * Navigate back one day and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleLeftFromDate = adjustCalendar(date => subDays(date, 1));

/**
 * Navigate forward one day and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleRightFromDate = adjustCalendar(date => addDays(date, 1));

/**
 * Navigate to the start of the week and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleHomeFromDate = adjustCalendar(date => startOfWeek(date));

/**
 * Navigate to the end of the week and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleEndFromDate = adjustCalendar(date => endOfWeek(date));

/**
 * Navigate forward one month and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handlePageDownFromDate = adjustCalendar(date => addMonths(date, 1));

/**
 * Navigate back one month and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handlePageUpFromDate = adjustCalendar(date => subMonths(date, 1));

/**
 * Navigate forward one year and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleShiftPageDownFromDate = adjustCalendar(date => addYears(date, 1));

/**
 * Navigate back one year and display the calendar.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleShiftPageUpFromDate = adjustCalendar(date => subYears(date, 1));

/**
 * Set range date classes without re-rendering the calendar. Called when date button is hovered.
 * Returns early if the date hovered is disabled or if there is already a selected date.
 *
 * @param {HTMLElement} dateEl - Calendar date button within the date picker component.
 */

const handleMouseoverFromDate = dateEl => {
  if (dateEl.disabled) return;
  const hoverDate = parseDateString(dateEl.dataset.value);
  const {
    calendarEl,
    selectedDate,
    rangeDate
  } = getDatePickerContext(dateEl);
  if (selectedDate) return;
  const {
    withinRangeStartDate,
    withinRangeEndDate
  } = setRangeDates(hoverDate, rangeDate);
  const dateButtons = calendarEl.querySelectorAll(`.${CALENDAR_DATE_CURRENT_MONTH_CLASS}`);
  dateButtons.forEach(button => {
    const buttonDate = parseDateString(button.dataset.value);
    if (isDateWithinMinAndMax(buttonDate, withinRangeStartDate, withinRangeEndDate)) {
      button.classList.add(CALENDAR_DATE_WITHIN_RANGE_CLASS);
    } else {
      button.classList.remove(CALENDAR_DATE_WITHIN_RANGE_CLASS);
    }
  });
};

// #endregion Calendar Date Event Handling

// #region Calendar Month Event Handling

/**
 * Adjust the month and display the month selection screen if needed.
 *
 * @param {function} adjustMonthFn function that returns the adjusted month
 */
const adjustMonthSelectionScreen = adjustMonthFn => event => {
  const monthEl = event.target;
  const selectedMonth = parseInt(monthEl.dataset.value, 10);
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(monthEl);
  const currentDate = setMonth(calendarDate, selectedMonth);
  let adjustedMonth = adjustMonthFn(selectedMonth);
  adjustedMonth = Math.max(0, Math.min(11, adjustedMonth));
  const date = setMonth(calendarDate, adjustedMonth);
  const cappedDate = keepDateBetweenMinAndMax(date, minDate, maxDate);
  if (!isSameMonth(currentDate, cappedDate)) {
    const newCalendar = displayMonthSelection(calendarEl, cappedDate.getMonth());
    newCalendar.querySelector(CALENDAR_MONTH_FOCUSED).focus();
  }
  event.preventDefault();
};

/**
 * Navigate back three months and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleUpFromMonth = adjustMonthSelectionScreen(month => month - 3);

/**
 * Navigate forward three months and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleDownFromMonth = adjustMonthSelectionScreen(month => month + 3);

/**
 * Navigate back one month and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleLeftFromMonth = adjustMonthSelectionScreen(month => month - 1);

/**
 * Navigate forward one month and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleRightFromMonth = adjustMonthSelectionScreen(month => month + 1);

/**
 * Navigate to the start of the row of months and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleHomeFromMonth = adjustMonthSelectionScreen(month => month - month % 3);

/**
 * Navigate to the end of the row of months and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleEndFromMonth = adjustMonthSelectionScreen(month => month + 2 - month % 3);

/**
 * Navigate to the last month (December) and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handlePageDownFromMonth = adjustMonthSelectionScreen(() => 11);

/**
 * Navigate to the first month (January) and display the month selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handlePageUpFromMonth = adjustMonthSelectionScreen(() => 0);

// #endregion Calendar Month Event Handling

// #region Calendar Year Event Handling

/**
 * Adjust the year and display the year selection screen if needed.
 *
 * @param {function} adjustYearFn function that returns the adjusted year
 */
const adjustYearSelectionScreen = adjustYearFn => event => {
  const yearEl = event.target;
  const selectedYear = parseInt(yearEl.dataset.value, 10);
  const {
    calendarEl,
    calendarDate,
    minDate,
    maxDate
  } = getDatePickerContext(yearEl);
  const currentDate = setYear(calendarDate, selectedYear);
  let adjustedYear = adjustYearFn(selectedYear);
  adjustedYear = Math.max(0, adjustedYear);
  const date = setYear(calendarDate, adjustedYear);
  const cappedDate = keepDateBetweenMinAndMax(date, minDate, maxDate);
  if (!isSameYear(currentDate, cappedDate)) {
    const newCalendar = displayYearSelection(calendarEl, cappedDate.getFullYear());
    newCalendar.querySelector(CALENDAR_YEAR_FOCUSED).focus();
  }
  event.preventDefault();
};

/**
 * Navigate back three years and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleUpFromYear = adjustYearSelectionScreen(year => year - 3);

/**
 * Navigate forward three years and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleDownFromYear = adjustYearSelectionScreen(year => year + 3);

/**
 * Navigate back one year and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleLeftFromYear = adjustYearSelectionScreen(year => year - 1);

/**
 * Navigate forward one year and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleRightFromYear = adjustYearSelectionScreen(year => year + 1);

/**
 * Navigate to the start of the row of years and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleHomeFromYear = adjustYearSelectionScreen(year => year - year % 3);

/**
 * Navigate to the end of the row of years and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handleEndFromYear = adjustYearSelectionScreen(year => year + 2 - year % 3);

/**
 * Navigate to back 12 years and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handlePageUpFromYear = adjustYearSelectionScreen(year => year - YEAR_CHUNK);

/**
 * Navigate forward 12 years and display the year selection screen.
 *
 * @param {KeyboardEvent} event the keydown event
 */
const handlePageDownFromYear = adjustYearSelectionScreen(year => year + YEAR_CHUNK);

// #endregion Calendar Year Event Handling

// #region Focus Handling Event Handling

const tabHandler = focusable => {
  const getFocusableContext = el => {
    const {
      calendarEl
    } = getDatePickerContext(el);
    const focusableElements = select(focusable, calendarEl);
    const firstTabIndex = 0;
    const lastTabIndex = focusableElements.length - 1;
    const firstTabStop = focusableElements[firstTabIndex];
    const lastTabStop = focusableElements[lastTabIndex];
    const focusIndex = focusableElements.indexOf(activeElement());
    const isLastTab = focusIndex === lastTabIndex;
    const isFirstTab = focusIndex === firstTabIndex;
    const isNotFound = focusIndex === -1;
    return {
      focusableElements,
      isNotFound,
      firstTabStop,
      isFirstTab,
      lastTabStop,
      isLastTab
    };
  };
  return {
    tabAhead(event) {
      const {
        firstTabStop,
        isLastTab,
        isNotFound
      } = getFocusableContext(event.target);
      if (isLastTab || isNotFound) {
        event.preventDefault();
        firstTabStop.focus();
      }
    },
    tabBack(event) {
      const {
        lastTabStop,
        isFirstTab,
        isNotFound
      } = getFocusableContext(event.target);
      if (isFirstTab || isNotFound) {
        event.preventDefault();
        lastTabStop.focus();
      }
    }
  };
};
const datePickerTabEventHandler = tabHandler(DATE_PICKER_FOCUSABLE);
const monthPickerTabEventHandler = tabHandler(MONTH_PICKER_FOCUSABLE);
const yearPickerTabEventHandler = tabHandler(YEAR_PICKER_FOCUSABLE);

// #endregion Focus Handling Event Handling

// #region Date Picker Event Delegation Registration / Component

const datePickerEvents = {
  [CLICK]: {
    [DATE_PICKER_BUTTON]() {
      toggleCalendar(this);
    },
    [CALENDAR_DATE]() {
      selectDate(this);
    },
    [CALENDAR_MONTH]() {
      selectMonth(this);
    },
    [CALENDAR_YEAR]() {
      selectYear(this);
    },
    [CALENDAR_PREVIOUS_MONTH]() {
      displayPreviousMonth(this);
    },
    [CALENDAR_NEXT_MONTH]() {
      displayNextMonth(this);
    },
    [CALENDAR_PREVIOUS_YEAR]() {
      displayPreviousYear(this);
    },
    [CALENDAR_NEXT_YEAR]() {
      displayNextYear(this);
    },
    [CALENDAR_PREVIOUS_YEAR_CHUNK]() {
      displayPreviousYearChunk(this);
    },
    [CALENDAR_NEXT_YEAR_CHUNK]() {
      displayNextYearChunk(this);
    },
    [CALENDAR_MONTH_SELECTION]() {
      const newCalendar = displayMonthSelection(this);
      newCalendar.querySelector(CALENDAR_MONTH_FOCUSED).focus();
    },
    [CALENDAR_YEAR_SELECTION]() {
      const newCalendar = displayYearSelection(this);
      newCalendar.querySelector(CALENDAR_YEAR_FOCUSED).focus();
    }
  },
  keyup: {
    [DATE_PICKER_CALENDAR](event) {
      const keydown = this.dataset.keydownKeyCode;
      if (`${event.keyCode}` !== keydown) {
        event.preventDefault();
      }
    }
  },
  keydown: {
    [DATE_PICKER_EXTERNAL_INPUT](event) {
      if (event.keyCode === ENTER_KEYCODE) {
        validateDateInput(this);
      }
    },
    [CALENDAR_DATE]: keymap({
      Up: handleUpFromDate,
      ArrowUp: handleUpFromDate,
      Down: handleDownFromDate,
      ArrowDown: handleDownFromDate,
      Left: handleLeftFromDate,
      ArrowLeft: handleLeftFromDate,
      Right: handleRightFromDate,
      ArrowRight: handleRightFromDate,
      Home: handleHomeFromDate,
      End: handleEndFromDate,
      PageDown: handlePageDownFromDate,
      PageUp: handlePageUpFromDate,
      "Shift+PageDown": handleShiftPageDownFromDate,
      "Shift+PageUp": handleShiftPageUpFromDate,
      Tab: datePickerTabEventHandler.tabAhead
    }),
    [CALENDAR_DATE_PICKER]: keymap({
      Tab: datePickerTabEventHandler.tabAhead,
      "Shift+Tab": datePickerTabEventHandler.tabBack
    }),
    [CALENDAR_MONTH]: keymap({
      Up: handleUpFromMonth,
      ArrowUp: handleUpFromMonth,
      Down: handleDownFromMonth,
      ArrowDown: handleDownFromMonth,
      Left: handleLeftFromMonth,
      ArrowLeft: handleLeftFromMonth,
      Right: handleRightFromMonth,
      ArrowRight: handleRightFromMonth,
      Home: handleHomeFromMonth,
      End: handleEndFromMonth,
      PageDown: handlePageDownFromMonth,
      PageUp: handlePageUpFromMonth
    }),
    [CALENDAR_MONTH_PICKER]: keymap({
      Tab: monthPickerTabEventHandler.tabAhead,
      "Shift+Tab": monthPickerTabEventHandler.tabBack
    }),
    [CALENDAR_YEAR]: keymap({
      Up: handleUpFromYear,
      ArrowUp: handleUpFromYear,
      Down: handleDownFromYear,
      ArrowDown: handleDownFromYear,
      Left: handleLeftFromYear,
      ArrowLeft: handleLeftFromYear,
      Right: handleRightFromYear,
      ArrowRight: handleRightFromYear,
      Home: handleHomeFromYear,
      End: handleEndFromYear,
      PageDown: handlePageDownFromYear,
      PageUp: handlePageUpFromYear
    }),
    [CALENDAR_YEAR_PICKER]: keymap({
      Tab: yearPickerTabEventHandler.tabAhead,
      "Shift+Tab": yearPickerTabEventHandler.tabBack
    }),
    [DATE_PICKER_CALENDAR](event) {
      this.dataset.keydownKeyCode = event.keyCode;
    },
    [DATE_PICKER](event) {
      const keyMap = keymap({
        Escape: handleEscapeFromCalendar
      });
      keyMap(event);
    }
  },
  focusout: {
    [DATE_PICKER_EXTERNAL_INPUT]() {
      validateDateInput(this);
    },
    [DATE_PICKER](event) {
      if (!this.contains(event.relatedTarget)) {
        hideCalendar(this);
      }
    }
  },
  input: {
    [DATE_PICKER_EXTERNAL_INPUT]() {
      reconcileInputValues(this);
      updateCalendarIfVisible(this);
    }
  }
};
if (!isIosDevice()) {
  datePickerEvents.mouseover = {
    [CALENDAR_DATE_CURRENT_MONTH]() {
      handleMouseoverFromDate(this);
    }
  };
}
const datePicker = behavior(datePickerEvents, {
  init(root) {
    selectOrMatches(DATE_PICKER, root).forEach(datePickerEl => {
      enhanceDatePicker(datePickerEl);
    });
  },
  getDatePickerContext,
  disable,
  ariaDisable,
  enable,
  isDateInputInvalid,
  setCalendarValue,
  validateDateInput,
  renderCalendar,
  updateCalendarIfVisible
});

// #endregion Date Picker Event Delegation Registration / Component

module.exports = datePicker;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/active-element":27,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/is-ios-device":32,"../../uswds-core/src/js/utils/keymap":33,"../../uswds-core/src/js/utils/sanitizer":34,"../../uswds-core/src/js/utils/select":37,"../../uswds-core/src/js/utils/select-or-matches":36}],8:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");
const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const {
  getDatePickerContext,
  isDateInputInvalid,
  updateCalendarIfVisible
} = require("../../usa-date-picker/src/index");
const DATE_PICKER_CLASS = `${PREFIX}-date-picker`;
const DATE_RANGE_PICKER_CLASS = `${PREFIX}-date-range-picker`;
const DATE_RANGE_PICKER_RANGE_START_CLASS = `${DATE_RANGE_PICKER_CLASS}__range-start`;
const DATE_RANGE_PICKER_RANGE_END_CLASS = `${DATE_RANGE_PICKER_CLASS}__range-end`;
const DATE_PICKER = `.${DATE_PICKER_CLASS}`;
const DATE_RANGE_PICKER = `.${DATE_RANGE_PICKER_CLASS}`;
const DATE_RANGE_PICKER_RANGE_START = `.${DATE_RANGE_PICKER_RANGE_START_CLASS}`;
const DATE_RANGE_PICKER_RANGE_END = `.${DATE_RANGE_PICKER_RANGE_END_CLASS}`;
const DEFAULT_MIN_DATE = "0000-01-01";

/**
 * The properties and elements within the date range picker.
 * @typedef {Object} DateRangePickerContext
 * @property {HTMLElement} dateRangePickerEl
 * @property {HTMLElement} rangeStartEl
 * @property {HTMLElement} rangeEndEl
 */

/**
 * Get an object of the properties and elements belonging directly to the given
 * date picker component.
 *
 * @param {HTMLElement} el the element within the date picker
 * @returns {DateRangePickerContext} elements
 */
const getDateRangePickerContext = el => {
  const dateRangePickerEl = el.closest(DATE_RANGE_PICKER);
  if (!dateRangePickerEl) {
    throw new Error(`Element is missing outer ${DATE_RANGE_PICKER}`);
  }
  const rangeStartEl = dateRangePickerEl.querySelector(DATE_RANGE_PICKER_RANGE_START);
  const rangeEndEl = dateRangePickerEl.querySelector(DATE_RANGE_PICKER_RANGE_END);
  return {
    dateRangePickerEl,
    rangeStartEl,
    rangeEndEl
  };
};

/**
 * handle update from range start date picker
 *
 * @param {HTMLElement} el an element within the date range picker
 */
const handleRangeStartUpdate = el => {
  const {
    dateRangePickerEl,
    rangeStartEl,
    rangeEndEl
  } = getDateRangePickerContext(el);
  const {
    internalInputEl
  } = getDatePickerContext(rangeStartEl);
  const updatedDate = internalInputEl.value;
  if (updatedDate && !isDateInputInvalid(internalInputEl)) {
    rangeEndEl.dataset.minDate = updatedDate;
    rangeEndEl.dataset.rangeDate = updatedDate;
    rangeEndEl.dataset.defaultDate = updatedDate;
  } else {
    rangeEndEl.dataset.minDate = dateRangePickerEl.dataset.minDate || "";
    rangeEndEl.dataset.rangeDate = "";
    rangeEndEl.dataset.defaultDate = "";
  }
  updateCalendarIfVisible(rangeEndEl);
};

/**
 * handle update from range start date picker
 *
 * @param {HTMLElement} el an element within the date range picker
 */
const handleRangeEndUpdate = el => {
  const {
    dateRangePickerEl,
    rangeStartEl,
    rangeEndEl
  } = getDateRangePickerContext(el);
  const {
    internalInputEl
  } = getDatePickerContext(rangeEndEl);
  const updatedDate = internalInputEl.value;
  if (updatedDate && !isDateInputInvalid(internalInputEl)) {
    rangeStartEl.dataset.maxDate = updatedDate;
    rangeStartEl.dataset.rangeDate = updatedDate;
    rangeStartEl.dataset.defaultDate = updatedDate;
  } else {
    rangeStartEl.dataset.maxDate = dateRangePickerEl.dataset.maxDate || "";
    rangeStartEl.dataset.rangeDate = "";
    rangeStartEl.dataset.defaultDate = "";
  }
  updateCalendarIfVisible(rangeStartEl);
};

/**
 * Enhance an input with the date picker elements
 *
 * @param {HTMLElement} el The initial wrapping element of the date range picker component
 */
const enhanceDateRangePicker = el => {
  const dateRangePickerEl = el.closest(DATE_RANGE_PICKER);
  const [rangeStart, rangeEnd] = select(DATE_PICKER, dateRangePickerEl);
  if (!rangeStart) {
    throw new Error(`${DATE_RANGE_PICKER} is missing inner two '${DATE_PICKER}' elements`);
  }
  if (!rangeEnd) {
    throw new Error(`${DATE_RANGE_PICKER} is missing second '${DATE_PICKER}' element`);
  }
  rangeStart.classList.add(DATE_RANGE_PICKER_RANGE_START_CLASS);
  rangeEnd.classList.add(DATE_RANGE_PICKER_RANGE_END_CLASS);
  if (!dateRangePickerEl.dataset.minDate) {
    dateRangePickerEl.dataset.minDate = DEFAULT_MIN_DATE;
  }
  const {
    minDate
  } = dateRangePickerEl.dataset;
  rangeStart.dataset.minDate = minDate;
  rangeEnd.dataset.minDate = minDate;
  const {
    maxDate
  } = dateRangePickerEl.dataset;
  if (maxDate) {
    rangeStart.dataset.maxDate = maxDate;
    rangeEnd.dataset.maxDate = maxDate;
  }
  handleRangeStartUpdate(dateRangePickerEl);
  handleRangeEndUpdate(dateRangePickerEl);
};
const dateRangePicker = behavior({
  "input change": {
    [DATE_RANGE_PICKER_RANGE_START]() {
      handleRangeStartUpdate(this);
    },
    [DATE_RANGE_PICKER_RANGE_END]() {
      handleRangeEndUpdate(this);
    }
  }
}, {
  init(root) {
    selectOrMatches(DATE_RANGE_PICKER, root).forEach(dateRangePickerEl => {
      enhanceDateRangePicker(dateRangePickerEl);
    });
  }
});
module.exports = dateRangePicker;

},{"../../usa-date-picker/src/index":7,"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/select":37,"../../uswds-core/src/js/utils/select-or-matches":36}],9:[function(require,module,exports){
"use strict";

const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const Sanitizer = require("../../uswds-core/src/js/utils/sanitizer");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const DROPZONE_CLASS = `${PREFIX}-file-input`;
const DROPZONE = `.${DROPZONE_CLASS}`;
const INPUT_CLASS = `${PREFIX}-file-input__input`;
const TARGET_CLASS = `${PREFIX}-file-input__target`;
const INPUT = `.${INPUT_CLASS}`;
const BOX_CLASS = `${PREFIX}-file-input__box`;
const INSTRUCTIONS_CLASS = `${PREFIX}-file-input__instructions`;
const PREVIEW_CLASS = `${PREFIX}-file-input__preview`;
const PREVIEW_HEADING_CLASS = `${PREFIX}-file-input__preview-heading`;
const DISABLED_CLASS = `${PREFIX}-file-input--disabled`;
const CHOOSE_CLASS = `${PREFIX}-file-input__choose`;
const ACCEPTED_FILE_MESSAGE_CLASS = `${PREFIX}-file-input__accepted-files-message`;
const DRAG_TEXT_CLASS = `${PREFIX}-file-input__drag-text`;
const DRAG_CLASS = `${PREFIX}-file-input--drag`;
const LOADING_CLASS = "is-loading";
const INVALID_FILE_CLASS = "has-invalid-file";
const GENERIC_PREVIEW_CLASS_NAME = `${PREFIX}-file-input__preview-image`;
const GENERIC_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--generic`;
const PDF_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--pdf`;
const WORD_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--word`;
const VIDEO_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--video`;
const EXCEL_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--excel`;
const SR_ONLY_CLASS = `${PREFIX}-sr-only`;
const SPACER_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
const DEFAULT_ERROR_LABEL_TEXT = "Error: This is not a valid file type.";
const FINE_POINTER_MEDIA_QUERY = "(hover: hover) and (pointer: fine)";
let TYPE_IS_VALID = Boolean(true); // logic gate for change listener
let DEFAULT_ARIA_LABEL_TEXT = "";
let DEFAULT_FILE_STATUS_TEXT = "";
const instructionMediaQueryCleanups = new WeakMap();
const getFinePointerMediaQueryList = () => {
  if (typeof window.matchMedia !== "function") {
    return null;
  }
  return window.matchMedia(FINE_POINTER_MEDIA_QUERY);
};
const shouldShowDragText = () => {
  const finePointerMediaQuery = getFinePointerMediaQueryList();
  return Boolean(finePointerMediaQuery && finePointerMediaQuery.matches);
};

/**
 * The properties and elements within the file input.
 * @typedef {Object} FileInputContext
 * @property {HTMLDivElement} dropZoneEl
 * @property {HTMLInputElement} inputEl
 */

/**
 * Get an object of the properties and elements belonging directly to the given
 * file input component.
 *
 * @param {HTMLElement} el the element within the file input
 * @returns {FileInputContext} elements
 */
const getFileInputContext = el => {
  const dropZoneEl = el.closest(DROPZONE);
  if (!dropZoneEl) {
    throw new Error(`Element is missing outer ${DROPZONE}`);
  }
  const inputEl = dropZoneEl.querySelector(INPUT);
  return {
    dropZoneEl,
    inputEl
  };
};

/**
 * Disable the file input component
 *
 * @param {HTMLElement} el An element within the file input component
 */
const disable = el => {
  const {
    dropZoneEl,
    inputEl
  } = getFileInputContext(el);
  inputEl.disabled = true;
  dropZoneEl.classList.add(DISABLED_CLASS);
};

/**
 * Set aria-disabled attribute to file input component
 *
 * @param {HTMLElement} el An element within the file input component
 */
const ariaDisable = el => {
  const {
    dropZoneEl
  } = getFileInputContext(el);
  dropZoneEl.classList.add(DISABLED_CLASS);
};

/**
 * Enable the file input component
 *
 * @param {HTMLElement} el An element within the file input component
 */
const enable = el => {
  const {
    dropZoneEl,
    inputEl
  } = getFileInputContext(el);
  inputEl.disabled = false;
  dropZoneEl.classList.remove(DISABLED_CLASS);
  dropZoneEl.removeAttribute("aria-disabled");
};

/**
 *
 * @param {String} s special characters
 * @returns {String} replaces specified values
 */
const replaceName = s => {
  const c = s.charCodeAt(0);
  if (c === 32) return "-";
  if (c >= 65 && c <= 90) return `img_${s.toLowerCase()}`;
  return `__${("000", c.toString(16)).slice(-4)}`;
};

/**
 * Creates an ID name for each file that strips all invalid characters.
 * @param {String} name - name of the file added to file input (searchvalue)
 * @returns {String} same characters as the name with invalid chars removed (newvalue)
 */
const makeSafeForID = name => name.replace(/[^a-z0-9]/g, replaceName);

// Takes a generated safe ID and creates a unique ID.
const createUniqueID = name => `${name}-${Math.floor(Date.now().toString() / 1000)}`;

/**
 * Determines if the singular or plural item label should be used
 * Determination is based on the presence of the `multiple` attribute
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @returns {HTMLDivElement} The singular or plural version of "item"
 */
const getItemsLabel = fileInputEl => {
  const acceptsMultiple = fileInputEl.hasAttribute("multiple");
  const itemsLabel = acceptsMultiple ? "files" : "file";
  return itemsLabel;
};

/**
 * Scaffold the file input component with a parent wrapper and
 * Create a target area overlay for drag and drop functionality
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @returns {HTMLDivElement} The drag and drop target area.
 */
const createTargetArea = fileInputEl => {
  const fileInputParent = document.createElement("div");
  const dropTarget = document.createElement("div");
  const box = document.createElement("div");

  // Adds class names and other attributes
  fileInputEl.classList.remove(DROPZONE_CLASS);
  fileInputEl.classList.add(INPUT_CLASS);
  fileInputParent.classList.add(DROPZONE_CLASS);
  box.classList.add(BOX_CLASS);
  dropTarget.classList.add(TARGET_CLASS);

  // Adds child elements to the DOM
  dropTarget.prepend(box);
  fileInputEl.parentNode.insertBefore(dropTarget, fileInputEl);
  fileInputEl.parentNode.insertBefore(fileInputParent, dropTarget);
  dropTarget.appendChild(fileInputEl);
  fileInputParent.appendChild(dropTarget);
  return dropTarget;
};

/**
 * Build the visible element with default interaction instructions.
 *
 * @param {HTMLInputElement} fileInputEl - The input element
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions
 */
const updateVisibleInstructions = (fileInputEl, instructions) => {
  const instructionsEl = instructions;
  const itemsLabel = getItemsLabel(fileInputEl);
  const dragText = `Drag ${itemsLabel} here or`;
  const dragTextEl = document.createElement("span");
  const chooseTextEl = document.createElement("span");
  const dragTextIsVisible = shouldShowDragText();
  const chooseText = dragTextIsVisible ? "choose from folder" : "Choose from folder";

  // Create instructions text for aria-label
  DEFAULT_ARIA_LABEL_TEXT = dragTextIsVisible ? `${dragText} ${chooseText}` : chooseText;
  instructionsEl.textContent = "";
  chooseTextEl.classList.add(CHOOSE_CLASS);
  chooseTextEl.textContent = chooseText;
  if (dragTextIsVisible) {
    dragTextEl.classList.add(DRAG_TEXT_CLASS);
    dragTextEl.textContent = dragText;
    instructionsEl.appendChild(dragTextEl);
    instructionsEl.appendChild(document.createTextNode(" "));
  }
  instructionsEl.appendChild(chooseTextEl);
  if (!instructionsEl.hasAttribute("hidden")) {
    fileInputEl.setAttribute("aria-label", DEFAULT_ARIA_LABEL_TEXT);
  }
};

/**
 * Build the visible element with default interaction instructions.
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @returns {HTMLDivElement} The container for visible interaction instructions.
 */
const createVisibleInstructions = fileInputEl => {
  const instructions = document.createElement("div");

  // Adds class names and other attributes
  instructions.classList.add(INSTRUCTIONS_CLASS);
  instructions.setAttribute("aria-hidden", "true");
  updateVisibleInstructions(fileInputEl, instructions);

  // Add the instructions element to the DOM
  fileInputEl.parentNode.insertBefore(instructions, fileInputEl);
  return instructions;
};
const addInstructionMediaQueryListener = (fileInputEl, instructions) => {
  const finePointerMediaQuery = getFinePointerMediaQueryList();
  const handleMediaQueryChange = () => {
    updateVisibleInstructions(fileInputEl, instructions);
  };
  if (!finePointerMediaQuery) {
    return null;
  }
  finePointerMediaQuery.addEventListener("change", handleMediaQueryChange);
  return () => {
    finePointerMediaQuery.removeEventListener("change", handleMediaQueryChange);
  };
};

/**
 * Build a screen reader-only message element that contains file status updates and
 * Create and set the default file status message
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 */
const createSROnlyStatus = fileInputEl => {
  const statusEl = document.createElement("div");
  const itemsLabel = getItemsLabel(fileInputEl);
  const fileInputParent = fileInputEl.closest(DROPZONE);
  const fileInputTarget = fileInputEl.closest(`.${TARGET_CLASS}`);
  DEFAULT_FILE_STATUS_TEXT = `No ${itemsLabel} selected.`;

  // Adds class names and other attributes
  statusEl.classList.add(SR_ONLY_CLASS);
  statusEl.setAttribute("aria-live", "polite");

  // Add initial file status message
  statusEl.textContent = DEFAULT_FILE_STATUS_TEXT;

  // Add the status element to the DOM
  fileInputParent.insertBefore(statusEl, fileInputTarget);
};

/**
 * Scaffold the component with all required elements
 *
 * @param {HTMLInputElement} fileInputEl - The original input element.
 */
const enhanceFileInput = fileInputEl => {
  const isInputDisabled = fileInputEl.hasAttribute("aria-disabled") || fileInputEl.hasAttribute("disabled");
  const dropTarget = createTargetArea(fileInputEl);
  const instructions = createVisibleInstructions(fileInputEl);
  const {
    dropZoneEl
  } = getFileInputContext(fileInputEl);
  if (isInputDisabled) {
    dropZoneEl.classList.add(DISABLED_CLASS);
  } else {
    createSROnlyStatus(fileInputEl);
  }

  // Mark the wrapper, not the initial div
  dropZoneEl.dataset.enhanced = "true";
  return {
    instructions,
    dropTarget
  };
};

/**
 * Removes image previews
 * We want to start with a clean list every time files are added to the file input
 *
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 */
const removeOldPreviews = (dropTarget, instructions) => {
  const filePreviews = dropTarget.querySelectorAll(`.${PREVIEW_CLASS}`);
  const currentPreviewHeading = dropTarget.querySelector(`.${PREVIEW_HEADING_CLASS}`);
  const currentErrorMessage = dropTarget.querySelector(`.${ACCEPTED_FILE_MESSAGE_CLASS}`);

  /**
   * finds the parent of the passed node and removes the child
   * @param {HTMLElement} node
   */
  const removeImages = node => {
    node.parentNode.removeChild(node);
  };

  // Remove the heading above the previews
  if (currentPreviewHeading) {
    currentPreviewHeading.outerHTML = "";
  }

  // Remove existing error messages
  if (currentErrorMessage) {
    currentErrorMessage.outerHTML = "";
    dropTarget.classList.remove(INVALID_FILE_CLASS);
  }

  // Get rid of existing previews if they exist, show instructions
  if (filePreviews !== null) {
    if (instructions) {
      instructions.removeAttribute("hidden");
    }
    Array.prototype.forEach.call(filePreviews, removeImages);
  }
};

/**
 * Update the screen reader-only status message after interaction
 *
 * @param {HTMLDivElement} statusElement - The screen reader-only container for file status updates.
 * @param {Object} fileNames - The selected files found in the fileList object.
 * @param {Array} fileStore - The array of uploaded file names created from the fileNames object.
 */
const updateStatusMessage = (statusElement, fileNames, fileStore) => {
  const statusEl = statusElement;
  let statusMessage = DEFAULT_FILE_STATUS_TEXT;

  // If files added, update the status message with file name(s)
  if (fileNames.length === 1) {
    statusMessage = `You have selected the file: ${fileStore}`;
  } else if (fileNames.length > 1) {
    statusMessage = `You have selected ${fileNames.length} files: ${fileStore.join(", ")}`;
  }

  // Add delay to encourage screen reader readout
  setTimeout(() => {
    statusEl.textContent = statusMessage;
  }, 1000);
};

/**
 * Show the preview heading, hide the initial instructions and
 * Update the aria-label with new instructions text
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {Object} fileNames - The selected files found in the fileList object.
 */
const addPreviewHeading = (fileInputEl, fileNames) => {
  const filePreviewsHeading = document.createElement("div");
  const dropTarget = fileInputEl.closest(`.${TARGET_CLASS}`);
  const instructions = dropTarget.querySelector(`.${INSTRUCTIONS_CLASS}`);
  let changeItemText = "Change file";
  let previewHeadingText = "";
  if (fileNames.length === 1) {
    previewHeadingText = Sanitizer.escapeHTML`Selected file <span class="usa-file-input__choose">${changeItemText}</span>`;
  } else if (fileNames.length > 1) {
    changeItemText = "Change files";
    previewHeadingText = Sanitizer.escapeHTML`${fileNames.length} files selected <span class="usa-file-input__choose">${changeItemText}</span>`;
  }

  // Hides null state content and sets preview heading
  instructions.setAttribute("hidden", "true");
  filePreviewsHeading.classList.add(PREVIEW_HEADING_CLASS);
  filePreviewsHeading.innerHTML = previewHeadingText;
  dropTarget.insertBefore(filePreviewsHeading, instructions);

  // Update aria label to match the visible action text
  fileInputEl.setAttribute("aria-label", changeItemText);
};

/** Add an error listener to the image preview to set a fallback image
 * @param {HTMLImageElement} previewImage - The image element
 * @param {String} fallbackClass - The CSS class of the fallback image
 */
const setPreviewFallback = (previewImage, fallbackClass) => {
  previewImage.addEventListener("error", () => {
    const localPreviewImage = previewImage; // to avoid no-param-reassign from ESLint
    localPreviewImage.src = SPACER_GIF;
    localPreviewImage.classList.add(fallbackClass);
  }, {
    once: true
  });
};

/**
 * When new files are applied to file input, this function generates previews
 * and removes old ones.
 *
 * @param {event} e
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 */

const handleChange = (e, fileInputEl, instructions, dropTarget) => {
  const fileNames = e.target.files;
  const inputParent = dropTarget.closest(`.${DROPZONE_CLASS}`);
  const statusElement = inputParent.querySelector(`.${SR_ONLY_CLASS}`);
  const fileStore = [];

  // First, get rid of existing previews
  removeOldPreviews(dropTarget, instructions);

  // Then, iterate through files list and create previews
  for (let i = 0; i < fileNames.length; i += 1) {
    const reader = new FileReader();
    const fileName = fileNames[i].name;
    let imageId;

    // Push updated file names into the store array
    fileStore.push(fileName);

    // Starts with a loading image while preview is created
    reader.onloadstart = function createLoadingImage() {
      imageId = createUniqueID(makeSafeForID(fileName));
      instructions.insertAdjacentHTML("afterend", Sanitizer.escapeHTML`<div class="${PREVIEW_CLASS}" aria-hidden="true">
          <img id="${imageId}" src="${SPACER_GIF}" alt="" class="${GENERIC_PREVIEW_CLASS_NAME} ${LOADING_CLASS}"/>${fileName}
        <div>`);
    };

    // Not all files will be able to generate previews. In case this happens, we provide several types "generic previews" based on the file extension.
    reader.onloadend = function createFilePreview() {
      const previewImage = document.getElementById(imageId);
      const fileExtension = fileName.split(".").pop();
      if (fileExtension === "pdf") {
        setPreviewFallback(previewImage, PDF_PREVIEW_CLASS);
      } else if (fileExtension === "doc" || fileExtension === "docx" || fileExtension === "pages") {
        setPreviewFallback(previewImage, WORD_PREVIEW_CLASS);
      } else if (fileExtension === "xls" || fileExtension === "xlsx" || fileExtension === "numbers") {
        setPreviewFallback(previewImage, EXCEL_PREVIEW_CLASS);
      } else if (fileExtension === "mov" || fileExtension === "mp4") {
        setPreviewFallback(previewImage, VIDEO_PREVIEW_CLASS);
      } else {
        setPreviewFallback(previewImage, GENERIC_PREVIEW_CLASS);
      }

      // Removes loader and displays preview
      previewImage.classList.remove(LOADING_CLASS);
      previewImage.src = reader.result;
    };
    if (fileNames[i]) {
      reader.readAsDataURL(fileNames[i]);
    }
  }
  if (fileNames.length === 0) {
    // Reset input aria-label with default message
    fileInputEl.setAttribute("aria-label", DEFAULT_ARIA_LABEL_TEXT);
  } else {
    addPreviewHeading(fileInputEl, fileNames);
  }
  updateStatusMessage(statusElement, fileNames, fileStore);
};

/**
 * When using an Accept attribute, invalid files will be hidden from
 * file browser, but they can still be dragged to the input. This
 * function prevents them from being dragged and removes error states
 * when correct files are added.
 *
 * @param {event} e
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 */
const preventInvalidFiles = (e, fileInputEl, instructions, dropTarget) => {
  const acceptedFilesAttr = fileInputEl.getAttribute("accept");
  dropTarget.classList.remove(INVALID_FILE_CLASS);

  /**
   * We can probably move away from this once IE11 support stops, and replace
   * with a simple es `.includes`
   * check if element is in array
   * check if 1 or more alphabets are in string
   * if element is present return the position value and -1 otherwise
   * @param {Object} file
   * @param {String} value
   * @returns {Boolean}
   */
  const isIncluded = (file, value) => {
    let returnValue = false;
    const pos = file.indexOf(value);
    if (pos >= 0) {
      returnValue = true;
    }
    return returnValue;
  };

  // Runs if only specific files are accepted
  if (acceptedFilesAttr) {
    const acceptedFiles = acceptedFilesAttr.split(",");
    const errorMessage = document.createElement("div");
    const userErrorText = fileInputEl.dataset.errormessage;
    const errorMessageText = userErrorText || DEFAULT_ERROR_LABEL_TEXT;
    errorMessage.setAttribute("aria-hidden", true);

    // If multiple files are dragged, this iterates through them and look for any files that are not accepted.
    let allFilesAllowed = true;
    const scannedFiles = e.target.files || e.dataTransfer.files;
    for (let i = 0; i < scannedFiles.length; i += 1) {
      const file = scannedFiles[i];
      if (allFilesAllowed) {
        for (let j = 0; j < acceptedFiles.length; j += 1) {
          const fileType = acceptedFiles[j];
          allFilesAllowed = file.name.indexOf(fileType) > 0 || isIncluded(file.type, fileType.replace(/\*/g, ""));
          if (allFilesAllowed) {
            TYPE_IS_VALID = true;
            break;
          }
        }
      } else break;
    }

    // If dragged files are not accepted, this removes them from the value of the input and creates and error state
    if (!allFilesAllowed) {
      removeOldPreviews(dropTarget, instructions);
      fileInputEl.value = "";
      errorMessage.textContent = errorMessageText;
      dropTarget.insertBefore(errorMessage, fileInputEl);
      const ariaLabelText = `${errorMessageText} ${DEFAULT_ARIA_LABEL_TEXT}`;
      fileInputEl.setAttribute("aria-label", ariaLabelText);
      errorMessage.classList.add(ACCEPTED_FILE_MESSAGE_CLASS);
      dropTarget.classList.add(INVALID_FILE_CLASS);
      TYPE_IS_VALID = false;
      e.preventDefault();
      e.stopPropagation();
    }
  }
};

/**
 * 1. passes through gate for preventing invalid files
 * 2. handles updates if file is valid
 *
 * @param {event} event
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 */
const handleUpload = (event, fileInputEl, instructions, dropTarget) => {
  preventInvalidFiles(event, fileInputEl, instructions, dropTarget);
  if (TYPE_IS_VALID === true) {
    handleChange(event, fileInputEl, instructions, dropTarget);
  }
};
const fileInput = behavior({}, {
  init(root) {
    selectOrMatches(DROPZONE, root).forEach(fileInputEl => {
      if (fileInputEl.dataset.enhanced) return;
      const {
        instructions,
        dropTarget
      } = enhanceFileInput(fileInputEl);
      const removeInstructionMediaQueryListener = addInstructionMediaQueryListener(fileInputEl, instructions);
      if (removeInstructionMediaQueryListener) {
        instructionMediaQueryCleanups.set(fileInputEl, removeInstructionMediaQueryListener);
      }
      dropTarget.addEventListener("dragover", function handleDragOver() {
        this.classList.add(DRAG_CLASS);
      }, false);
      dropTarget.addEventListener("dragleave", function handleDragLeave() {
        this.classList.remove(DRAG_CLASS);
      }, false);
      dropTarget.addEventListener("drop", function handleDrop() {
        this.classList.remove(DRAG_CLASS);
      }, false);
      fileInputEl.addEventListener("change", e => handleUpload(e, fileInputEl, instructions, dropTarget), false);
    });
  },
  teardown(root) {
    selectOrMatches(INPUT, root).forEach(fileInputEl => {
      const removeInstructionMediaQueryListener = instructionMediaQueryCleanups.get(fileInputEl);
      const fileInputTopElement = fileInputEl.parentElement.parentElement;
      if (removeInstructionMediaQueryListener) {
        removeInstructionMediaQueryListener();
        instructionMediaQueryCleanups.delete(fileInputEl);
      }
      fileInputTopElement.parentElement.replaceChild(fileInputEl, fileInputTopElement);
      fileInputEl.className = DROPZONE_CLASS;
    });
  },
  getFileInputContext,
  disable,
  ariaDisable,
  enable
});
module.exports = fileInput;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/sanitizer":34,"../../uswds-core/src/js/utils/select-or-matches":36}],10:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const SCOPE = `.${PREFIX}-footer--big`;
const NAV = `${SCOPE} nav`;
const BUTTON = `${NAV} .${PREFIX}-footer__primary-link`;
const HIDE_MAX_WIDTH = 480;

/**
 * Expands selected footer menu panel, while collapsing others
 */
function showPanel() {
  if (window.innerWidth < HIDE_MAX_WIDTH) {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    const thisFooter = this.closest(SCOPE);

    // Close all other menus
    thisFooter.querySelectorAll(BUTTON).forEach(button => {
      button.setAttribute("aria-expanded", false);
    });
    this.setAttribute("aria-expanded", !isOpen);
  }
}

/**
 * Swaps the <h4> element for a <button> element (and vice-versa) and sets id
 * of menu list
 *
 * @param {Boolean} isMobile - If the footer is in mobile configuration
 */
function toggleHtmlTag(isMobile) {
  const bigFooter = document.querySelector(SCOPE);
  if (!bigFooter) {
    return;
  }
  const primaryLinks = bigFooter.querySelectorAll(BUTTON);
  const ALLOWED_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
  primaryLinks.forEach(currentElement => {
    const currentElementClasses = currentElement.getAttribute("class");
    const rawPreservedTag = (currentElement.getAttribute("data-tag") || currentElement.tagName).toLowerCase();
    const preservedHtmlTag = ALLOWED_TAGS.includes(rawPreservedTag) ? rawPreservedTag : "h4";
    const newElementType = isMobile ? "button" : preservedHtmlTag;

    // Create the new element
    const newElement = document.createElement(newElementType);
    newElement.setAttribute("class", currentElementClasses);
    newElement.classList.toggle(`${PREFIX}-footer__primary-link--button`, isMobile);
    newElement.textContent = currentElement.textContent;
    if (isMobile) {
      newElement.setAttribute("data-tag", currentElement.tagName);
      const menuId = `${PREFIX}-footer-menu-list-${Math.floor(Math.random() * 100000)}`;
      newElement.setAttribute("aria-controls", menuId);
      newElement.setAttribute("aria-expanded", "false");
      currentElement.nextElementSibling.setAttribute("id", menuId);
      newElement.setAttribute("type", "button");
    }

    // Insert the new element and delete the old
    currentElement.after(newElement);
    currentElement.remove();
  });
}
const resize = event => {
  toggleHtmlTag(event.matches);
};
module.exports = behavior({
  [CLICK]: {
    [BUTTON]: showPanel
  }
}, {
  // export for use elsewhere
  HIDE_MAX_WIDTH,
  init() {
    toggleHtmlTag(window.innerWidth < HIDE_MAX_WIDTH);
    this.mediaQueryList = window.matchMedia(`(max-width: ${HIDE_MAX_WIDTH - 0.1}px)`);
    this.mediaQueryList.addListener(resize);
  },
  teardown() {
    this.mediaQueryList.removeListener(resize);
  }
});

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28}],11:[function(require,module,exports){
"use strict";

const keymap = require("../../uswds-core/src/js/utils/keymap");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");
const toggle = require("../../uswds-core/src/js/utils/toggle");
const FocusTrap = require("../../uswds-core/src/js/utils/focus-trap");
const accordion = require("../../usa-accordion/src/index");
const ScrollBarWidth = require("../../uswds-core/src/js/utils/scrollbar-width");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const BODY = "body";
const HEADER = `.${PREFIX}-header`;
const NAV = `.${PREFIX}-nav`;
const NAV_CONTAINER = `.${PREFIX}-nav-container`;
const NAV_PRIMARY = `.${PREFIX}-nav__primary`;
const NAV_PRIMARY_ITEM = `.${PREFIX}-nav__primary-item`;
const NAV_CONTROL = `button.${PREFIX}-nav__link`;
const NAV_LINKS = `${NAV} a`;
const NON_NAV_HIDDEN_ATTRIBUTE = `data-nav-hidden`;
const OPENERS = `.${PREFIX}-menu-btn`;
const CLOSE_BUTTON = `.${PREFIX}-nav__close`;
const OVERLAY = `.${PREFIX}-overlay`;
const CLOSERS = `${CLOSE_BUTTON}, .${PREFIX}-overlay`;
const TOGGLES = [NAV, OVERLAY].join(", ");
const NON_NAV_ELEMENTS = `body *:not(${HEADER}, ${NAV_CONTAINER}, ${NAV}, ${NAV} *):not([aria-hidden])`;
const NON_NAV_HIDDEN = `[${NON_NAV_HIDDEN_ATTRIBUTE}]`;
const ACTIVE_CLASS = "usa-js-mobile-nav--active";
const VISIBLE_CLASS = "is-visible";
let navigation;
let navActive;
let nonNavElements;
const isActive = () => document.body.classList.contains(ACTIVE_CLASS);
// Detect Safari
// Note: Chrome also reports the Safari userAgent so this specifically excludes Chrome.
const isSafari = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
const SCROLLBAR_WIDTH = ScrollBarWidth();
const INITIAL_PADDING = window.getComputedStyle(document.body).getPropertyValue("padding-right");
const TEMPORARY_PADDING = `${parseInt(INITIAL_PADDING.replace(/px/, ""), 10) + parseInt(SCROLLBAR_WIDTH.replace(/px/, ""), 10)}px`;
const hideNonNavItems = () => {
  const headerParent = document.querySelector(`${HEADER}`).parentNode;
  nonNavElements = document.querySelectorAll(NON_NAV_ELEMENTS);
  nonNavElements.forEach(nonNavElement => {
    if (nonNavElement !== headerParent) {
      nonNavElement.setAttribute("aria-hidden", true);
      nonNavElement.setAttribute(NON_NAV_HIDDEN_ATTRIBUTE, "");
    }
  });
};
const showNonNavItems = () => {
  nonNavElements = document.querySelectorAll(NON_NAV_HIDDEN);
  if (!nonNavElements) {
    return;
  }

  // Remove aria-hidden from non-header elements
  nonNavElements.forEach(nonNavElement => {
    nonNavElement.removeAttribute("aria-hidden");
    nonNavElement.removeAttribute(NON_NAV_HIDDEN_ATTRIBUTE);
  });
};

// Toggle all non-header elements #3527.
const toggleNonNavItems = active => {
  if (active) {
    hideNonNavItems();
  } else {
    showNonNavItems();
  }
};

/**
 * Detect Safari and add body class for a Safari-only CSS bug fix.
 * More details in https://github.com/uswds/uswds/pull/5443
 */
const addSafariClass = () => {
  if (isSafari) {
    document.body.classList.add("is-safari");
  }
};

/**
 * Set the value for the --scrolltop CSS var when the mobile menu is open.
 * This allows the CSS to lock the current scroll position in Safari
 * when overflow-y is set to scroll.
 * More details in https://github.com/uswds/uswds/pull/5443
 */
const setSafariScrollPosition = body => {
  const currentScrollPosition = `-${window.scrollY}px`;
  if (isSafari) {
    body.style.setProperty("--scrolltop", currentScrollPosition);
  }
};
const toggleNav = active => {
  const {
    body
  } = document;
  const safeActive = typeof active === "boolean" ? active : !isActive();
  setSafariScrollPosition(body);
  body.classList.toggle(ACTIVE_CLASS, safeActive);
  select(TOGGLES).forEach(el => el.classList.toggle(VISIBLE_CLASS, safeActive));
  navigation.focusTrap.update(safeActive);
  const closeButton = body.querySelector(CLOSE_BUTTON);
  const menuButton = document.querySelector(OPENERS);
  body.style.paddingRight = body.style.paddingRight === TEMPORARY_PADDING ? INITIAL_PADDING : TEMPORARY_PADDING;
  toggleNonNavItems(safeActive);
  if (safeActive && closeButton) {
    // The mobile nav was just activated. Focus on the close button, which is
    // just before all the nav elements in the tab order.
    closeButton.focus();
  } else if (!safeActive && menuButton && getComputedStyle(menuButton).display !== "none") {
    // The mobile nav was just deactivated. We don't want the focus to
    // disappear into the void, so focus on the menu button if it's
    // visible (this may have been what the user was just focused on,
    // if they triggered the mobile nav by mistake).
    menuButton.focus();
  }
  return safeActive;
};
const resize = () => {
  const closer = document.body.querySelector(CLOSE_BUTTON);
  if (isActive() && closer && closer.getBoundingClientRect().width === 0) {
    // When the mobile nav is active, and the close box isn't visible,
    // we know the user's viewport has been resized to be larger.
    // Let's make the page state consistent by deactivating the mobile nav.
    navigation.toggleNav.call(closer, false);
  }
};
const onMenuClose = () => navigation.toggleNav.call(navigation, false);
const hideActiveNavDropdown = () => {
  if (!navActive) {
    return;
  }
  toggle(navActive, false);
  navActive = null;
};
const focusNavButton = event => {
  const parentNavItem = event.target.closest(NAV_PRIMARY_ITEM);

  // Only shift focus if within dropdown
  if (!event.target.matches(NAV_CONTROL)) {
    const navControl = parentNavItem.querySelector(NAV_CONTROL);
    if (navControl) {
      navControl.focus();
    }
  }
};
const handleEscape = event => {
  hideActiveNavDropdown();
  focusNavButton(event);
};
navigation = behavior({
  [CLICK]: {
    [NAV_CONTROL]() {
      // If another nav is open, close it
      if (navActive !== this) {
        hideActiveNavDropdown();
      }
      // store a reference to the last clicked nav link element, so we
      // can hide the dropdown if another element on the page is clicked
      if (!navActive) {
        navActive = this;
        toggle(navActive, true);
      }

      // Do this so the event handler on the body doesn't fire
      return false;
    },
    [BODY]: hideActiveNavDropdown,
    [OPENERS]: toggleNav,
    [CLOSERS]: toggleNav,
    [NAV_LINKS]() {
      // A navigation link has been clicked! We want to collapse any
      // hierarchical navigation UI it's a part of, so that the user
      // can focus on whatever they've just selected.

      // Some navigation links are inside accordions; when they're
      // clicked, we want to collapse those accordions.
      const acc = this.closest(accordion.ACCORDION);
      if (acc) {
        accordion.getButtons(acc).forEach(btn => accordion.hide(btn));
      }

      // If the mobile navigation menu is active, we want to hide it.
      if (isActive()) {
        navigation.toggleNav.call(navigation, false);
      }
    }
  },
  keydown: {
    [NAV_PRIMARY]: keymap({
      Escape: handleEscape
    })
  },
  focusout: {
    [NAV_PRIMARY](event) {
      const nav = event.target.closest(NAV_PRIMARY);
      if (!nav.contains(event.relatedTarget)) {
        hideActiveNavDropdown();
      }
    }
  }
}, {
  init(root) {
    const trapContainer = root.matches(NAV) ? root : root.querySelector(NAV);
    if (trapContainer) {
      navigation.focusTrap = FocusTrap(trapContainer, {
        Escape: onMenuClose
      });
    }
    addSafariClass();
    resize();
    window.addEventListener("resize", resize, false);
  },
  teardown() {
    window.removeEventListener("resize", resize, false);
    navActive = false;
  },
  focusTrap: null,
  toggleNav
});
module.exports = navigation;

},{"../../usa-accordion/src/index":2,"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/focus-trap":30,"../../uswds-core/src/js/utils/keymap":33,"../../uswds-core/src/js/utils/scrollbar-width":35,"../../uswds-core/src/js/utils/select":37,"../../uswds-core/src/js/utils/toggle":40}],12:[function(require,module,exports){
"use strict";

const keymap = require("../../uswds-core/src/js/utils/keymap");
const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const Sanitizer = require("../../uswds-core/src/js/utils/sanitizer");
const CURRENT_CLASS = `${PREFIX}-current`;
const IN_PAGE_NAV_HEADINGS = "h2 h3";
const IN_PAGE_NAV_VALID_HEADINGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
const IN_PAGE_NAV_TITLE_TEXT = "On this page";
const IN_PAGE_NAV_TITLE_HEADING_LEVEL = "h4";
const IN_PAGE_NAV_SCROLL_OFFSET = 0;
const IN_PAGE_NAV_ROOT_MARGIN = "0px 0px 0px 0px";
const IN_PAGE_NAV_THRESHOLD = "1";
const IN_PAGE_NAV_MINIMUM_HEADING_COUNT = 2;
const IN_PAGE_NAV_CLASS = `${PREFIX}-in-page-nav`;
const IN_PAGE_NAV_ANCHOR_CLASS = `${PREFIX}-anchor`;
const IN_PAGE_NAV_NAV_CLASS = `${IN_PAGE_NAV_CLASS}__nav`;
const IN_PAGE_NAV_LIST_CLASS = `${IN_PAGE_NAV_CLASS}__list`;
const IN_PAGE_NAV_ITEM_CLASS = `${IN_PAGE_NAV_CLASS}__item`;
const IN_PAGE_NAV_PRIMARY_ITEM_CLASS = `${IN_PAGE_NAV_ITEM_CLASS}--primary`;
const IN_PAGE_NAV_LINK_CLASS = `${IN_PAGE_NAV_CLASS}__link`;
const IN_PAGE_NAV_TITLE_CLASS = `${IN_PAGE_NAV_CLASS}__heading`;
const MAIN_ELEMENT = "main";

/**
 * Set the active link state for the currently observed section
 *
 * @param {HTMLElement} el An element within the in-page nav component
 */
const setActive = el => {
  const allLinks = document.querySelectorAll(`.${IN_PAGE_NAV_LINK_CLASS}`);
  el.map(i => {
    if (i.isIntersecting === true && i.intersectionRatio >= 1) {
      allLinks.forEach(link => link.classList.remove(CURRENT_CLASS));
      document.querySelector(`a[href="#${i.target.id}"]`).classList.add(CURRENT_CLASS);
      return true;
    }
    return false;
  });
};

/**
 * Return an array of the designated heading types found in the designated content region.
 * Throw an error if an invalid header element is designated.
 *
 * @param {HTMLElement} selectedContentRegion The content region the component should pull headers from
 * @param {String} selectedHeadingTypes The list of heading types that should be included in the nav list
 *
 * @return {Array} - An array of designated heading types from the designated content region
 */
const createSectionHeadingsArray = (selectedContentRegion, selectedHeadingTypes) => {
  // Convert designated headings list to an array
  const selectedHeadingTypesArray = selectedHeadingTypes.indexOf(" ") ? selectedHeadingTypes.split(" ") : selectedHeadingTypes;
  const contentRegion = document.querySelector(selectedContentRegion);
  selectedHeadingTypesArray.forEach(headingType => {
    if (!IN_PAGE_NAV_VALID_HEADINGS.includes(headingType)) {
      throw new Error(`In-page navigation: data-heading-elements attribute defined with an invalid heading type: "${headingType}".
        Define the attribute with one or more of the following: "${IN_PAGE_NAV_VALID_HEADINGS}".
        Do not use commas or other punctuation in the attribute definition.`);
    }
  });
  const sectionHeadingsArray = Array.from(contentRegion.querySelectorAll(selectedHeadingTypesArray));
  return sectionHeadingsArray;
};

/**
 * Return an array of the visible headings from sectionHeadingsArray.
 * This function removes headings that are hidden with display:none or visibility:none style rules.
 * These items will be added to the component nav list.
 *
 * @param {HTMLElement} selectedContentRegion The content region the component should pull headers from
 * @param {String} selectedHeadingTypes The list of heading types that should be included in the nav list
 *
 * @return {Array} - An array of visible headings from the designated content region
 */
const getVisibleSectionHeadings = (selectedContentRegion, selectedHeadingTypes) => {
  const sectionHeadings = createSectionHeadingsArray(selectedContentRegion, selectedHeadingTypes);

  // Find all headings with hidden styling and remove them from the array
  const visibleSectionHeadings = sectionHeadings.filter(heading => {
    const headingStyle = window.getComputedStyle(heading);
    const visibleHeading = headingStyle.getPropertyValue("display") !== "none" && headingStyle.getPropertyValue("visibility") !== "hidden";
    return visibleHeading;
  });
  return visibleSectionHeadings;
};

/**
 * Return the highest-level header tag included in the link list
 *
 * @param {HTMLElement} sectionHeadings The array of headings selected for inclusion in the link list
 *
 * @return {tagName} - The tag name for the highest level of header in the link list
 */

const getTopLevelHeading = sectionHeadings => {
  const topHeading = sectionHeadings[0].tagName.toLowerCase();
  return topHeading;
};

/**
 * Return a node list of section anchor tags
 *
 * @return {HTMLElement[]} - An array of DOM nodes
 */
const getSectionAnchors = () => {
  const sectionAnchors = document.querySelectorAll(`.${IN_PAGE_NAV_ANCHOR_CLASS}`);
  return sectionAnchors;
};

/**
 * Generates a unique ID for the given heading element.
 *
 * @param {HTMLHeadingElement} heading
 *
 * @return {string} - Unique ID
 */
const getHeadingId = heading => {
  const baseId = heading.textContent.toLowerCase()
  // Replace non-alphanumeric characters with dashes
  .replace(/[^a-z\d]/g, "-")
  // Replace a sequence of two or more dashes with a single dash
  .replace(/-{2,}/g, "-")
  // Trim leading or trailing dash (there should only ever be one)
  .replace(/^-|-$/g, "");
  let id;
  let suffix = 0;
  do {
    id = baseId;

    // To avoid conflicts with existing IDs on the page, loop and append an
    // incremented suffix until a unique ID is found.
    suffix += 1;
    if (suffix > 1) {
      id += `-${suffix}`;
    }
  } while (document.getElementById(id));
  return id;
};

/**
 * Return a section id/anchor hash without the number sign
 *
 * @return {String} - Id value with the number sign removed
 */
const getSectionId = value => {
  let id;

  // Check if value is an event or element and get the cleaned up id
  if (value && value.nodeType === 1) {
    id = value.getAttribute("href").replace("#", "");
  } else {
    id = value.target.hash.replace("#", "");
  }
  return id;
};

/**
 * Calculates the total offset of an element from the top of the page.
 *
 * @param {HTMLElement} el A heading element to calculate the offset for.
 * @returns {number} The total element offset from the top of its parent.
 */
const getTotalElementOffset = el => {
  const calculateOffset = currentEl => {
    if (!currentEl.offsetParent) {
      return currentEl.offsetTop;
    }
    return currentEl.offsetTop + calculateOffset(currentEl.offsetParent);
  };
  return calculateOffset(el);
};

/**
 * Scroll smoothly to a section based on the passed in element
 *
 * @param {HTMLElement} el A heading element
 */
const handleScrollToSection = el => {
  const inPageNavEl = document.querySelector(`.${IN_PAGE_NAV_CLASS}`);
  const inPageNavScrollOffset = inPageNavEl.dataset.scrollOffset || IN_PAGE_NAV_SCROLL_OFFSET;
  const offsetTop = getTotalElementOffset(el);
  window.scroll({
    behavior: "smooth",
    top: offsetTop - inPageNavScrollOffset
  });
  if (window.location.hash.slice(1) !== el.id) {
    window.history.pushState(null, "", `#${el.id}`);
  }
};

/**
 * Scrolls the page to the section corresponding to the current hash fragment, if one exists.
 */
const scrollToCurrentSection = () => {
  const hashFragment = window.location.hash.slice(1);
  if (hashFragment) {
    const anchorTag = document.getElementById(hashFragment);
    if (anchorTag) {
      handleScrollToSection(anchorTag);
    }
  }
};

/**
 * Check if the number of specified headings meets the minimum required count.
 *
 * @param {Array} sectionHeadings - Array of all visible section headings.
 * @param {Number} minimumHeadingCount - The minimum number of specified headings required.
 * @param {Array} acceptedHeadingLevels - Array of headings considered as valid for the count.
 * @returns {Boolean} - Returns true if the count of specified headings meets the minimum, otherwise false.
 */
const shouldRenderInPageNav = (sectionHeadings, minimumHeadingCount, acceptedHeadingLevels) => {
  // Filter headings that are included in the acceptedHeadingLevels
  const validHeadings = sectionHeadings.filter(heading => acceptedHeadingLevels.includes(heading.tagName.toLowerCase()));
  return validHeadings.length >= minimumHeadingCount;
};

/**
 * Create the in-page navigation component
 *
 * @param {HTMLElement} el The in-page nav element
 */
const createInPageNav = el => {
  const inPageNavEl = el;
  if (inPageNavEl.dataset.enhanced) return;
  const inPageNavTitleText = Sanitizer.escapeHTML`${inPageNavEl.dataset.titleText || IN_PAGE_NAV_TITLE_TEXT}`;
  const inPageNavTitleHeadingLevel = Sanitizer.escapeHTML`${inPageNavEl.dataset.titleHeadingLevel || IN_PAGE_NAV_TITLE_HEADING_LEVEL}`;
  const inPageNavRootMargin = Sanitizer.escapeHTML`${inPageNavEl.dataset.rootMargin || IN_PAGE_NAV_ROOT_MARGIN}`;
  const inPageNavThreshold = Sanitizer.escapeHTML`${inPageNavEl.dataset.threshold || IN_PAGE_NAV_THRESHOLD}`;
  const inPageNavContentSelector = Sanitizer.escapeHTML`${inPageNavEl.dataset.mainContentSelector || MAIN_ELEMENT}`;
  const inPageNavHeadingSelector = Sanitizer.escapeHTML`${inPageNavEl.dataset.headingElements || IN_PAGE_NAV_HEADINGS}`;
  const inPageNavMinimumHeadingCount = Sanitizer.escapeHTML`${inPageNavEl.dataset.minimumHeadingCount || IN_PAGE_NAV_MINIMUM_HEADING_COUNT}`;
  const acceptedHeadingLevels = inPageNavHeadingSelector.split(" ").map(h => h.toLowerCase());
  const sectionHeadings = getVisibleSectionHeadings(inPageNavContentSelector, inPageNavHeadingSelector);
  if (!shouldRenderInPageNav(sectionHeadings, inPageNavMinimumHeadingCount, acceptedHeadingLevels)) {
    return;
  }
  const options = {
    root: null,
    rootMargin: inPageNavRootMargin,
    threshold: [inPageNavThreshold]
  };
  const inPageNav = document.createElement("nav");
  inPageNav.setAttribute("aria-label", inPageNavTitleText);
  inPageNav.classList.add(IN_PAGE_NAV_NAV_CLASS);
  const inPageNavTitle = document.createElement(inPageNavTitleHeadingLevel);
  inPageNavTitle.classList.add(IN_PAGE_NAV_TITLE_CLASS);
  inPageNavTitle.setAttribute("tabindex", "0");
  inPageNavTitle.textContent = inPageNavTitleText;
  inPageNav.appendChild(inPageNavTitle);
  const inPageNavList = document.createElement("ul");
  inPageNavList.classList.add(IN_PAGE_NAV_LIST_CLASS);
  inPageNav.appendChild(inPageNavList);
  sectionHeadings.forEach(sectionHeadingEl => {
    const listItem = document.createElement("li");
    const navLinks = document.createElement("a");
    const anchorTag = document.createElement("a");
    const textContentOfLink = sectionHeadingEl.textContent;
    const tag = sectionHeadingEl.tagName.toLowerCase();
    const topHeadingLevel = getTopLevelHeading(sectionHeadings);
    const headingId = getHeadingId(sectionHeadingEl);
    listItem.classList.add(IN_PAGE_NAV_ITEM_CLASS);
    if (tag === topHeadingLevel) {
      listItem.classList.add(IN_PAGE_NAV_PRIMARY_ITEM_CLASS);
    }
    navLinks.setAttribute("href", `#${headingId}`);
    navLinks.setAttribute("class", IN_PAGE_NAV_LINK_CLASS);
    navLinks.textContent = textContentOfLink;
    anchorTag.setAttribute("id", headingId);
    anchorTag.setAttribute("class", IN_PAGE_NAV_ANCHOR_CLASS);
    sectionHeadingEl.insertAdjacentElement("afterbegin", anchorTag);
    inPageNavList.appendChild(listItem);
    listItem.appendChild(navLinks);
  });
  inPageNavEl.appendChild(inPageNav);
  const anchorTags = getSectionAnchors();
  const observeSections = new window.IntersectionObserver(setActive, options);
  anchorTags.forEach(tag => {
    observeSections.observe(tag);
  });
  inPageNavEl.dataset.enhanced = "true";
};

/**
 * Handle click from link
 *
 * @param {HTMLElement} el An element within the in-page nav component
 */
const handleClickFromLink = el => {
  const elementToScrollTo = document.getElementById(el.hash.slice(1));
  handleScrollToSection(elementToScrollTo);
};

/**
 * Handle the enter event from a link within the in-page nav component
 *
 * @param {KeyboardEvent} event An event within the in-page nav component
 */
const handleEnterFromLink = event => {
  const id = getSectionId(event);
  const targetAnchor = document.getElementById(id);
  const target = targetAnchor.parentElement;
  if (target) {
    target.setAttribute("tabindex", 0);
    target.focus();
    target.addEventListener("blur", () => {
      target.setAttribute("tabindex", -1);
    }, {
      once: true
    });
  } else {
    // throw an error?
  }
  handleScrollToSection(targetAnchor);
};
const inPageNavigation = behavior({
  [CLICK]: {
    [`.${IN_PAGE_NAV_LINK_CLASS}`](event) {
      event.preventDefault();
      if (this.disabled) return;
      handleClickFromLink(this);
    }
  },
  keydown: {
    [`.${IN_PAGE_NAV_LINK_CLASS}`]: keymap({
      Enter: handleEnterFromLink
    })
  }
}, {
  init(root) {
    selectOrMatches(`.${IN_PAGE_NAV_CLASS}`, root).forEach(inPageNavEl => {
      createInPageNav(inPageNavEl);
      scrollToCurrentSection();
    });
  }
});
module.exports = inPageNavigation;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/keymap":33,"../../uswds-core/src/js/utils/sanitizer":34,"../../uswds-core/src/js/utils/select-or-matches":36}],13:[function(require,module,exports){
"use strict";

const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const MASKED_CLASS = `${PREFIX}-masked`;
const MASKED = `.${MASKED_CLASS}`;
const MASK = `${PREFIX}-input-mask`;
const MASK_CONTENT = `${MASK}--content`;
const PLACEHOLDER = "placeholder";

// User defined Values
const maskedNumber = "_#dDmMyY9";
const maskedLetter = "A";

// replaces each masked input with a shell containing the input and it's mask.
const createMaskedInputShell = input => {
  const placeholder = input.getAttribute(`${PLACEHOLDER}`);
  if (placeholder) {
    input.setAttribute("maxlength", placeholder.length);
    input.setAttribute("data-placeholder", placeholder);
    input.removeAttribute(`${PLACEHOLDER}`);
  } else {
    return;
  }
  const shell = document.createElement("span");
  shell.classList.add(MASK);
  shell.setAttribute("data-mask", placeholder);
  const content = document.createElement("span");
  content.classList.add(MASK_CONTENT);
  content.setAttribute("aria-hidden", "true");
  content.id = `${input.id}Mask`;
  content.textContent = placeholder;
  shell.appendChild(content);
  input.parentNode.insertBefore(shell, input);
  shell.appendChild(input);
};
const setValueOfMask = el => {
  const {
    value
  } = el;
  const placeholderVal = `${el.dataset.placeholder.substr(value.length)}`;
  const theIEl = document.createElement("i");
  theIEl.textContent = value;
  return [theIEl, placeholderVal];
};
const strippedValue = (isCharsetPresent, value) => isCharsetPresent ? value.replace(/\W/g, "") : value.replace(/\D/g, "");
const isInteger = value => !Number.isNaN(parseInt(value, 10));
const isLetter = value => value ? value.match(/[A-Z]/i) : false;
const handleCurrentValue = el => {
  const isCharsetPresent = el.dataset.charset;
  const placeholder = isCharsetPresent || el.dataset.placeholder;
  const {
    value
  } = el;
  const len = placeholder.length;
  let newValue = "";
  let i;
  let charIndex;
  const strippedVal = strippedValue(isCharsetPresent, value);
  for (i = 0, charIndex = 0; i < len; i += 1) {
    const isInt = isInteger(strippedVal[charIndex]);
    const isLet = isLetter(strippedVal[charIndex]);
    const matchesNumber = maskedNumber.indexOf(placeholder[i]) >= 0;
    const matchesLetter = maskedLetter.indexOf(placeholder[i]) >= 0;
    if (matchesNumber && isInt || isCharsetPresent && matchesLetter && isLet) {
      newValue += strippedVal[charIndex];
      charIndex += 1;
    } else if (!isCharsetPresent && !isInt && matchesNumber || isCharsetPresent && (matchesLetter && !isLet || matchesNumber && !isInt)) {
      return newValue;
    } else {
      newValue += placeholder[i];
    }
    // break if no characters left and the pattern is non-special character
    if (strippedVal[charIndex] === undefined) {
      break;
    }
  }
  return newValue;
};
const handleValueChange = el => {
  const inputEl = el;
  const id = inputEl.getAttribute("id");
  inputEl.value = handleCurrentValue(inputEl);
  const maskVal = setValueOfMask(el);
  const maskEl = document.getElementById(`${id}Mask`);
  maskEl.textContent = "";
  maskEl.replaceChildren(maskVal[0], maskVal[1]);
};
const inputMaskEvents = {
  keyup: {
    [MASKED]() {
      handleValueChange(this);
    }
  }
};
const inputMask = behavior(inputMaskEvents, {
  init(root) {
    selectOrMatches(MASKED, root).forEach(maskedInput => {
      createMaskedInputShell(maskedInput);
    });
  }
});
module.exports = inputMask;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/select-or-matches":36}],14:[function(require,module,exports){
"use strict";

const keymap = require("../../uswds-core/src/js/utils/keymap");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const toggle = require("../../uswds-core/src/js/utils/toggle");
const FocusTrap = require("../../uswds-core/src/js/utils/focus-trap");
const accordion = require("../../usa-accordion/src/index");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const BODY = "body";
const LANGUAGE = `.${PREFIX}-language`;
const LANGUAGE_SUB = `.${PREFIX}-language__submenu`;
const LANGUAGE_PRIMARY = `.${PREFIX}-language__primary`;
const LANGUAGE_PRIMARY_ITEM = `.${PREFIX}-language__primary-item`;
const LANGUAGE_CONTROL = `button.${PREFIX}-language__link`;
const LANGUAGE_LINKS = `${LANGUAGE} a`;
let languageActive;
const hideActiveLanguageDropdown = () => {
  if (!languageActive) {
    return;
  }
  toggle(languageActive, false);
  languageActive = null;
};
const focusLanguageButton = event => {
  const parentLanguageItem = event.target.closest(LANGUAGE_PRIMARY_ITEM);
  if (!event.target.matches(LANGUAGE_CONTROL)) {
    parentLanguageItem.querySelector(LANGUAGE_CONTROL).focus();
  }
};
const handleEscape = event => {
  hideActiveLanguageDropdown();
  focusLanguageButton(event);
};
const languageSelector = behavior({
  [CLICK]: {
    [LANGUAGE_CONTROL]() {
      if (languageActive !== this) {
        hideActiveLanguageDropdown();
      }
      if (languageActive === this) {
        hideActiveLanguageDropdown();
        return false;
      }
      if (!languageActive) {
        languageActive = this;
        toggle(languageActive, true);
      }
      return false;
    },
    [BODY]: hideActiveLanguageDropdown,
    [LANGUAGE_LINKS]() {
      const acc = this.closest(accordion.ACCORDION);
      if (acc) {
        accordion.getButtons(acc).forEach(btn => accordion.hide(btn));
      }
    }
  },
  keydown: {
    [LANGUAGE_PRIMARY]: keymap({
      Escape: handleEscape
    })
  },
  focusout: {
    [LANGUAGE_PRIMARY](event) {
      const language = event.target.closest(LANGUAGE_PRIMARY);
      if (!language.contains(event.relatedTarget)) {
        hideActiveLanguageDropdown();
      }
    }
  }
}, {
  init(root) {
    const trapContainer = root.matches(LANGUAGE_SUB) ? root : root.querySelector(LANGUAGE_SUB);
    if (trapContainer) {
      languageSelector.focusTrap = FocusTrap(trapContainer, {
        Escape: () => hideActiveLanguageDropdown()
      });
    }
  },
  teardown() {
    languageActive = false;
  },
  focusTrap: null
});
module.exports = languageSelector;

},{"../../usa-accordion/src/index":2,"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/focus-trap":30,"../../uswds-core/src/js/utils/keymap":33,"../../uswds-core/src/js/utils/toggle":40}],15:[function(require,module,exports){
"use strict";

const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const FocusTrap = require("../../uswds-core/src/js/utils/focus-trap");
const ScrollBarWidth = require("../../uswds-core/src/js/utils/scrollbar-width");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const MODAL_CLASSNAME = `${PREFIX}-modal`;
const OVERLAY_CLASSNAME = `${MODAL_CLASSNAME}-overlay`;
const WRAPPER_CLASSNAME = `${MODAL_CLASSNAME}-wrapper`;
const OPENER_ATTRIBUTE = "data-open-modal";
const CLOSER_ATTRIBUTE = "data-close-modal";
const FORCE_ACTION_ATTRIBUTE = "data-force-action";
const NON_MODAL_HIDDEN_ATTRIBUTE = `data-modal-hidden`;
const MODAL = `.${MODAL_CLASSNAME}`;
const INITIAL_FOCUS = `[data-focus]`;
const CLOSE_BUTTON = `${WRAPPER_CLASSNAME} *[${CLOSER_ATTRIBUTE}]`;
const OPENERS = `*[${OPENER_ATTRIBUTE}][aria-controls]`;
const CLOSERS = `${CLOSE_BUTTON}, .${OVERLAY_CLASSNAME}:not([${FORCE_ACTION_ATTRIBUTE}])`;
const NON_MODALS = `body > *:not(.${WRAPPER_CLASSNAME}):not([aria-hidden])`;
const NON_MODALS_HIDDEN = `[${NON_MODAL_HIDDEN_ATTRIBUTE}]`;
const ACTIVE_CLASS = "usa-js-modal--active";
const PREVENT_CLICK_CLASS = "usa-js-no-click";
const VISIBLE_CLASS = "is-visible";
const HIDDEN_CLASS = "is-hidden";
let modal;
let INITIAL_BODY_PADDING;
let TEMPORARY_BODY_PADDING;
const isActive = () => document.body.classList.contains(ACTIVE_CLASS);
const SCROLLBAR_WIDTH = ScrollBarWidth();

/**
 *  Closes modal when bound to a button and pressed.
 */
const onMenuClose = () => {
  modal.toggleModal.call(modal, false);
};

/**
 * Set the value for temporary body padding that will be applied when the modal is open.
 * Value is created by checking for initial body padding and adding the width of the scrollbar.
 */
const setTemporaryBodyPadding = () => {
  INITIAL_BODY_PADDING = window.getComputedStyle(document.body).getPropertyValue("padding-right");
  TEMPORARY_BODY_PADDING = `${parseInt(INITIAL_BODY_PADDING.replace(/px/, ""), 10) + parseInt(SCROLLBAR_WIDTH.replace(/px/, ""), 10)}px`;
};

/**
 *  Toggle the visibility of a modal window
 *
 * @param {KeyboardEvent} event the keydown event.
 * @returns {boolean} safeActive if mobile is open.
 */
function toggleModal(event) {
  let originalOpener;
  let clickedElement = event.target;
  const {
    body
  } = document;
  const safeActive = !isActive();
  const modalId = clickedElement ? clickedElement.getAttribute("aria-controls") : document.querySelector(`.${WRAPPER_CLASSNAME}.${VISIBLE_CLASS}`);
  const targetModal = safeActive ? document.getElementById(modalId) : document.querySelector(`.${WRAPPER_CLASSNAME}.${VISIBLE_CLASS}`);

  // if there is no modal we return early
  if (!targetModal) {
    return false;
  }
  const customFocusEl = targetModal.querySelector(INITIAL_FOCUS);
  const returnFocus = document.getElementById(targetModal.getAttribute("data-opener"));
  const menuButton = body.querySelector(OPENERS);
  const forceUserAction = targetModal.getAttribute(FORCE_ACTION_ATTRIBUTE);

  // Sets the clicked element to the close button
  // so esc key always closes modal
  if (event.type === "keydown" && targetModal !== null) {
    clickedElement = targetModal.querySelector(CLOSE_BUTTON);
  }

  // When we're not hitting the escape key…
  if (clickedElement) {
    // Make sure we click the opener
    // If it doesn't have an ID, make one
    // Store id as data attribute on modal
    if (clickedElement.hasAttribute(OPENER_ATTRIBUTE)) {
      if (this.getAttribute("id") === null) {
        originalOpener = `modal-${Math.floor(Math.random() * 900000) + 100000}`;
        this.setAttribute("id", originalOpener);
      } else {
        originalOpener = this.getAttribute("id");
      }
      targetModal.setAttribute("data-opener", originalOpener);
    }

    // This basically stops the propagation if the element
    // is inside the modal and not a close button or
    // element inside a close button
    if (clickedElement.closest(`.${MODAL_CLASSNAME}`)) {
      if (clickedElement.hasAttribute(CLOSER_ATTRIBUTE) || clickedElement.closest(`[${CLOSER_ATTRIBUTE}]`)) {
        // do nothing. move on.
      } else {
        return false;
      }
    }
  }
  body.classList.toggle(ACTIVE_CLASS, safeActive);
  targetModal.classList.toggle(VISIBLE_CLASS, safeActive);
  targetModal.classList.toggle(HIDDEN_CLASS, !safeActive);

  // If user is forced to take an action, adding
  // a class to the body that prevents clicking underneath
  // overlay
  if (forceUserAction) {
    body.classList.toggle(PREVENT_CLICK_CLASS, safeActive);
  }

  // Temporarily increase body padding to include the width of the scrollbar.
  // This accounts for the content shift when the scrollbar is removed on modal open.
  if (body.style.paddingRight === TEMPORARY_BODY_PADDING) {
    body.style.removeProperty("padding-right");
  } else {
    body.style.paddingRight = TEMPORARY_BODY_PADDING;
  }

  // Handle the focus actions
  if (safeActive) {
    const openFocusEl = customFocusEl || targetModal.querySelector(".usa-modal__footer button:not([disabled])") || targetModal.querySelector("button:not([disabled])");
    targetModal.removeAttribute("aria-hidden");
    targetModal.setAttribute("aria-modal", "true");

    // Binds escape key if we're not forcing
    // the user to take an action
    if (forceUserAction) {
      modal.focusTrap = FocusTrap(targetModal, {
        autoFocus: false
      });
    } else {
      modal.focusTrap = FocusTrap(targetModal, {
        autoFocus: false,
        Escape: onMenuClose
      });
    }

    // Handles focus setting and interactions
    modal.focusTrap.update(safeActive);
    openFocusEl?.focus();

    // Hides everything that is not the modal from screen readers
    document.querySelectorAll(NON_MODALS).forEach(nonModal => {
      nonModal.setAttribute("aria-hidden", "true");
      nonModal.setAttribute(NON_MODAL_HIDDEN_ATTRIBUTE, "");
    });
  } else if (!safeActive) {
    targetModal.setAttribute("aria-hidden", "true");
    targetModal.removeAttribute("aria-modal");

    // The modal window is closed.
    // Non-modals now accessible to screen reader.
    // This runs unconditionally: the opener may be gone from the document by
    // now, and page content must never be left hidden from assistive tech.
    document.querySelectorAll(NON_MODALS_HIDDEN).forEach(nonModal => {
      nonModal.removeAttribute("aria-hidden");
      nonModal.removeAttribute(NON_MODAL_HIDDEN_ATTRIBUTE);
    });
    if (menuButton && returnFocus) {
      // Focus is returned to the opener
      returnFocus.focus();
    }
    if (modal.focusTrap) {
      modal.focusTrap.update(safeActive);
    }
  }
  return safeActive;
}

/**
 * Creates a placeholder with data attributes for cleanup function.
 * The cleanup function uses this placeholder to easily restore the original Modal HTML on teardown.
 *
 * @param {HTMLDivElement} baseComponent - Modal HTML from the DOM.
 * @returns {HTMLDivElement} Placeholder used for cleanup function.
 */
const createPlaceHolder = baseComponent => {
  const modalID = baseComponent.getAttribute("id");
  const originalLocationPlaceHolder = document.createElement("div");
  const modalAttributes = Array.from(baseComponent.attributes);
  setTemporaryBodyPadding();
  originalLocationPlaceHolder.setAttribute(`data-placeholder-for`, modalID);
  originalLocationPlaceHolder.style.display = "none";
  originalLocationPlaceHolder.setAttribute("aria-hidden", "true");
  modalAttributes.forEach(attribute => {
    originalLocationPlaceHolder.setAttribute(`data-original-${attribute.name}`, attribute.value);
  });
  return originalLocationPlaceHolder;
};

/**
 * Moves necessary attributes from Modal HTML to wrapper element.
 *
 * @param {HTMLDivElement} baseComponent - Modal HTML in the DOM.
 * @param {HTMLDivElement} modalContentWrapper - Modal component wrapper element.
 * @returns Modal wrapper with correct attributes.
 */
const setModalAttributes = (baseComponent, modalContentWrapper) => {
  const modalID = baseComponent.getAttribute("id");
  const ariaLabelledBy = baseComponent.getAttribute("aria-labelledby");
  const ariaDescribedBy = baseComponent.getAttribute("aria-describedby");
  const forceUserAction = baseComponent.hasAttribute(FORCE_ACTION_ATTRIBUTE);
  if (!ariaLabelledBy) throw new Error(`${modalID} is missing aria-labelledby attribute`);
  if (!ariaDescribedBy) throw new Error(`${modalID} is missing aria-desribedby attribute`);

  // Set attributes
  modalContentWrapper.setAttribute("role", "dialog");
  modalContentWrapper.setAttribute("aria-hidden", "true");
  modalContentWrapper.setAttribute("id", modalID);
  modalContentWrapper.setAttribute("aria-labelledby", ariaLabelledBy);
  modalContentWrapper.setAttribute("aria-describedby", ariaDescribedBy);
  if (forceUserAction) {
    modalContentWrapper.setAttribute(FORCE_ACTION_ATTRIBUTE, forceUserAction);
  }

  // Add aria-controls
  const modalClosers = modalContentWrapper.querySelectorAll(CLOSERS);
  modalClosers.forEach(el => {
    el.setAttribute("aria-controls", modalID);
  });

  // Update the base element HTML
  baseComponent.removeAttribute("id");
  baseComponent.removeAttribute("aria-labelledby");
  baseComponent.removeAttribute("aria-describedby");
  baseComponent.setAttribute("tabindex", "-1");
  return modalContentWrapper;
};

/**
 * Creates a hidden modal content wrapper.
 * Rebuilds the original Modal HTML in the new wrapper and adds a page overlay.
 * Then moves original Modal HTML attributes to the new wrapper.
 *
 * @param {HTMLDivElement} baseComponent - Original Modal HTML in the DOM.
 * @returns Modal component - Modal wrapper w/ nested Overlay and Modal Content.
 */
const rebuildModal = baseComponent => {
  const modalContent = baseComponent;
  const modalContentWrapper = document.createElement("div");
  const overlayDiv = document.createElement("div");

  // Add classes
  modalContentWrapper.classList.add(HIDDEN_CLASS, WRAPPER_CLASSNAME);
  overlayDiv.classList.add(OVERLAY_CLASSNAME);

  // Rebuild the modal element
  modalContentWrapper.append(overlayDiv);
  overlayDiv.append(modalContent);

  // Add attributes
  setModalAttributes(modalContent, modalContentWrapper);
  return modalContentWrapper;
};

/**
 *  Builds modal window from base HTML and appends to the end of the DOM.
 *
 * @param {HTMLDivElement} baseComponent - The modal div element in the DOM.
 */
const setUpModal = baseComponent => {
  const modalID = baseComponent.getAttribute("id");
  if (!modalID) {
    throw new Error(`Modal markup is missing ID`);
  }

  // Create placeholder where modal is for cleanup
  const originalLocationPlaceHolder = createPlaceHolder(baseComponent);
  baseComponent.after(originalLocationPlaceHolder);

  // Build modal component
  const modalComponent = rebuildModal(baseComponent);

  // Move all modals to the end of the DOM. Doing this allows us to
  // more easily find the elements to hide from screen readers
  // when the modal is open.
  document.body.appendChild(modalComponent);
};

/**
 * Removes dynamically created Modal and Wrapper elements and restores original Modal HTML.
 *
 * @param {HTMLDivElement} baseComponent - The modal div element in the DOM.
 */
const cleanUpModal = baseComponent => {
  const modalContent = baseComponent;
  const modalContentWrapper = modalContent.parentElement.parentElement;
  const modalID = modalContentWrapper.getAttribute("id");

  // if there is no modalID, return early
  if (!modalID) {
    return;
  }
  const originalLocationPlaceHolder = document.querySelector(`[data-placeholder-for="${modalID}"]`);
  if (originalLocationPlaceHolder) {
    const modalAttributes = Array.from(originalLocationPlaceHolder.attributes);
    modalAttributes.forEach(attribute => {
      if (attribute.name.startsWith("data-original-")) {
        // data-original- is 14 long
        modalContent.setAttribute(attribute.name.substr(14), attribute.value);
      }
    });
    originalLocationPlaceHolder.after(modalContent);
    originalLocationPlaceHolder.parentElement.removeChild(originalLocationPlaceHolder);
  }
  modalContentWrapper.parentElement.removeChild(modalContentWrapper);
};
modal = behavior({}, {
  init(root) {
    selectOrMatches(MODAL, root).forEach(modalWindow => {
      const modalId = modalWindow.id;
      setUpModal(modalWindow);

      // Query all openers and closers including the overlay
      selectOrMatches(`[aria-controls="${modalId}"]`, document).forEach(modalTrigger => {
        // If modalTrigger is an anchor...
        if (modalTrigger.nodeName === "A") {
          // Turn anchor links into buttons for screen readers
          modalTrigger.setAttribute("role", "button");

          // Prevent modal triggers from acting like links
          modalTrigger.addEventListener("click", e => e.preventDefault());
        }

        // Can uncomment when aria-haspopup="dialog" is supported
        // https://a11ysupport.io/tech/aria/aria-haspopup_attribute
        // Most screen readers support aria-haspopup, but might announce
        // as opening a menu if "dialog" is not supported.
        // modalTrigger.setAttribute("aria-haspopup", "dialog");

        modalTrigger.addEventListener("click", toggleModal);
      });
    });
  },
  teardown(root) {
    selectOrMatches(MODAL, root).forEach(modalWindow => {
      const modalId = modalWindow.id;
      cleanUpModal(modalWindow);
      selectOrMatches(`[aria-controls="${modalId}"]`, document).forEach(modalTrigger => modalTrigger.removeEventListener("click", toggleModal));
    });
  },
  focusTrap: null,
  toggleModal
});
module.exports = modal;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/focus-trap":30,"../../uswds-core/src/js/utils/scrollbar-width":35,"../../uswds-core/src/js/utils/select-or-matches":36}],16:[function(require,module,exports){
"use strict";

const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const RANGE_CLASSNAME = `${PREFIX}-range`;
const RANGE = `.${RANGE_CLASSNAME}`;
const RANGE_WRAPPER_CLASS = `${RANGE}__wrapper`;
const VALUE_WRAPPER_CLASS = `${RANGE}__value`;
const RANGE_WRAPPER = `${RANGE_CLASSNAME}__wrapper`;
const VALUE_WRAPPER = `${RANGE_CLASSNAME}__value`;
/**
 * Dynamically create a span field with the range slider's initial value.
 *
 * @comment This is the visual representation of the value of the range slider
 * and appears in an adjacent span. This runs on init.
 */
const createEnhancedRangeSlider = el => {
  const rangeSliderEl = el;
  if (rangeSliderEl.dataset.enhanced) return;
  const rangeSliderVal = document.createElement("span");
  rangeSliderVal.setAttribute("aria-hidden", "true");
  rangeSliderVal.className = VALUE_WRAPPER;
  rangeSliderVal.textContent = rangeSliderEl.value;
  const rangeWrapper = document.createElement("div");
  rangeWrapper.className = RANGE_WRAPPER;
  rangeSliderEl.parentNode.insertBefore(rangeWrapper, rangeSliderEl);
  rangeWrapper.appendChild(rangeSliderEl);
  rangeWrapper.appendChild(rangeSliderVal);
  rangeSliderEl.dataset.enhanced = "true";
};
/**
 * Update range callout for screen readers using the optional data attributes.
 *
 * Get optional data attributes, construct and appends aria-valuetext attribute.
 *
 * @example
 *
 * <input id="usa-range" class="usa-range" type="range" min="0" max="100" step="10" value="20" data-text-unit="degrees">
 *
 * Callout returns "20 degrees of 100."
 *
 * <input id="usa-range" class="usa-range" type="range" min="0" max="100" step="10" value="20" data-text-preposition="de">
 *
 * Callout returns "20 de 100."
 *
 * @param {HTMLInputElement} targetRange - The range slider input element
 */
const updateCallout = targetRange => {
  const rangeSlider = targetRange;
  const defaultPrep = "of";
  const optionalPrep = rangeSlider.dataset.textPreposition;
  const prep = optionalPrep || defaultPrep;
  const unit = rangeSlider.dataset.textUnit;
  const val = rangeSlider.value;
  // Note: 100 is the max attribute's native default value on range inputs
  // Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#validation
  const max = rangeSlider.getAttribute("max") || 100;
  let callout;
  if (unit) {
    callout = `${val} ${unit} ${prep} ${max}`;
  } else {
    callout = `${val} ${prep} ${max}`;
  }
  rangeSlider.setAttribute("aria-valuetext", callout);
};
/**
 * Update range <span> value (the range slider value for sighted users).
 * @param {HTMLInputElement} targetRange - The range slider input element
 */
const updateVisualCallout = el => {
  const rangeSliderEl = el;
  const parentDiv = rangeSliderEl.closest(RANGE_WRAPPER_CLASS);
  const rangeSliderVal = parentDiv.querySelector(VALUE_WRAPPER_CLASS);
  rangeSliderVal.textContent = rangeSliderEl.value;
};
const rangeEvents = {
  change: {
    [RANGE]() {
      updateCallout(this);
      updateVisualCallout(this);
    }
  }
};
const range = behavior(rangeEvents, {
  init(root) {
    selectOrMatches(RANGE, root).forEach(rangeSlider => {
      createEnhancedRangeSlider(rangeSlider);
      updateCallout(rangeSlider);
    });
  },
  updateCallout,
  updateVisualCallout
});
module.exports = range;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/select-or-matches":36}],17:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const select = require("../../uswds-core/src/js/utils/select");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const BUTTON = ".js-search-button";
const FORM = ".js-search-form";
const INPUT = "[type=search]";
const CONTEXT = "header"; // XXX

let lastButton;
const getForm = button => {
  const context = button.closest(CONTEXT);
  return context ? context.querySelector(FORM) : document.querySelector(FORM);
};
const toggleSearch = (button, active) => {
  const form = getForm(button);
  if (!form) {
    throw new Error(`No ${FORM} found for search toggle in ${CONTEXT}!`);
  }
  button.hidden = active;
  form.hidden = !active;
  if (!active) {
    return;
  }
  const input = form.querySelector(INPUT);
  if (input) {
    input.focus();
  }
  // when the user clicks _outside_ of the form w/ignore(): hide the
  // search, then remove the listener
  const listener = event => {
    if (form.contains(event.target)) {
      return;
    }
    if (lastButton) {
      hideSearch.call(lastButton);
    }
    document.body.removeEventListener(CLICK, listener);
  };

  // Normally we would just run this code without a timeout, but
  // IE11 and Edge will actually call the listener *immediately* because
  // they are currently handling this exact type of event, so we'll
  // make sure the browser is done handling the current click event,
  // if any, before we attach the listener.
  setTimeout(() => {
    document.body.addEventListener(CLICK, listener);
  }, 0);
};
function showSearch() {
  toggleSearch(this, true);
  lastButton = this;
}
function hideSearch() {
  toggleSearch(this, false);
  lastButton = undefined;
}
const search = behavior({
  [CLICK]: {
    [BUTTON]: showSearch
  }
}, {
  init(target) {
    select(BUTTON, target).forEach(button => {
      toggleSearch(button, false);
    });
  },
  teardown() {
    // forget the last button clicked
    lastButton = undefined;
  }
});
module.exports = search;

},{"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/select":37}],18:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const LINK = `.${PREFIX}-skipnav[href^="#"], .${PREFIX}-footer__return-to-top [href^="#"]`;
const MAINCONTENT = "main-content";
function setTabindex() {
  // NB: we know because of the selector we're delegating to below that the
  // href already begins with '#'
  const id = encodeURI(this.getAttribute("href"));
  const target = document.getElementById(id === "#" ? MAINCONTENT : id.slice(1));
  if (target) {
    target.style.outline = "0";
    target.setAttribute("tabindex", 0);
    target.focus();
    target.addEventListener("blur", () => target.setAttribute("tabindex", -1), {
      once: true
    });
  } else {
    // throw an error?
  }
}
module.exports = behavior({
  [CLICK]: {
    [LINK]: setTabindex
  }
});

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28}],19:[function(require,module,exports){
"use strict";

const select = require("../../uswds-core/src/js/utils/select");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  CLICK
} = require("../../uswds-core/src/js/events");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const Sanitizer = require("../../uswds-core/src/js/utils/sanitizer");
const TABLE = `.${PREFIX}-table`;
const SORTED = "aria-sort";
const ASCENDING = "ascending";
const DESCENDING = "descending";
const SORT_OVERRIDE = "data-sort-value";
const SORT_BUTTON_CLASS = `${PREFIX}-table__header__button`;
const SORT_BUTTON = `.${SORT_BUTTON_CLASS}`;
const SORTABLE_HEADER = `th[data-sortable]`;
const ANNOUNCEMENT_REGION = `.${PREFIX}-table__announcement-region[aria-live="polite"]`;

/** Gets the data-sort-value attribute value, if provided — otherwise, gets
 * the innerText or textContent — of the child element (HTMLTableCellElement)
 * at the specified index of the given table row
 *
 * @param {number} index
 * @param {array<HTMLTableRowElement>} tr
 * @return {boolean}
 */
const getCellValue = (tr, index) => tr.children[index].getAttribute(SORT_OVERRIDE) || tr.children[index].innerText || tr.children[index].textContent;

/**
 * Compares the values of two row array items at the given index, then sorts by the given direction
 * @param {number} index
 * @param {string} direction
 * @return {boolean}
 */
const compareFunction = (index, isAscending) => (thisRow, nextRow) => {
  // get values to compare from data attribute or cell content
  const value1 = getCellValue(isAscending ? thisRow : nextRow, index);
  const value2 = getCellValue(isAscending ? nextRow : thisRow, index);

  // if neither value is empty, and if both values are already numbers, compare numerically
  if (value1 && value2 && !Number.isNaN(Number(value1)) && !Number.isNaN(Number(value2))) {
    return value1 - value2;
  }
  // Otherwise, compare alphabetically based on current user locale
  return value1.toString().localeCompare(value2, navigator.language, {
    numeric: true,
    ignorePunctuation: true
  });
};

/**
 * Get an Array of column headers elements belonging directly to the given
 * table element.
 * @param {HTMLTableElement} table
 * @return {array<HTMLTableHeaderCellElement>}
 */
const getColumnHeaders = table => {
  const headers = select(SORTABLE_HEADER, table);
  return headers.filter(header => header.closest(TABLE) === table);
};

/**
 * Update the button label within the given header element, resetting it
 * to the default state (ready to sort ascending) if it's no longer sorted
 * @param {HTMLTableHeaderCellElement} header
 */
const updateSortLabel = header => {
  const headerName = header.innerText;
  const sortedAscending = header.getAttribute(SORTED) === ASCENDING;
  const isSorted = header.getAttribute(SORTED) === ASCENDING || header.getAttribute(SORTED) === DESCENDING || false;
  const headerLabel = `${headerName}, sortable column, currently ${isSorted ? `${sortedAscending ? `sorted ${ASCENDING}` : `sorted ${DESCENDING}`}` : "unsorted"}`;
  const headerButtonLabel = `Click to sort by ${headerName} in ${sortedAscending ? DESCENDING : ASCENDING} order.`;
  header.setAttribute("aria-label", headerLabel);
  header.querySelector(SORT_BUTTON).setAttribute("title", headerButtonLabel);
};

/**
 * Remove the aria-sort attribute on the given header element, and reset the label and button icon
 * @param {HTMLTableHeaderCellElement} header
 */
const unsetSort = header => {
  header.removeAttribute(SORTED);
  updateSortLabel(header);
};

/**
 * Sort rows either ascending or descending, based on a given header's aria-sort attribute
 * @param {HTMLTableHeaderCellElement} header
 * @param {boolean} isAscending
 * @return {boolean} true
 */
const sortRows = (header, isAscending) => {
  header.setAttribute(SORTED, isAscending === true ? DESCENDING : ASCENDING);
  updateSortLabel(header);
  const tbody = header.closest(TABLE).querySelector("tbody");

  // We can use Array.from() and Array.sort() instead once we drop IE11 support, likely in the summer of 2021
  //
  // Array.from(tbody.querySelectorAll('tr').sort(
  //   compareFunction(
  //     Array.from(header.parentNode.children).indexOf(header),
  //     !isAscending)
  //   )
  // .forEach(tr => tbody.appendChild(tr) );

  // [].slice.call() turns array-like sets into true arrays so that we can sort them
  const allRows = [].slice.call(tbody.querySelectorAll("tr"));
  const allHeaders = [].slice.call(header.parentNode.children);
  const thisHeaderIndex = allHeaders.indexOf(header);
  allRows.sort(compareFunction(thisHeaderIndex, !isAscending)).forEach(tr => {
    [].slice.call(tr.children).forEach(td => td.removeAttribute("data-sort-active"));
    tr.children[thisHeaderIndex].setAttribute("data-sort-active", true);
    tbody.appendChild(tr);
  });
  return true;
};

/**
 * Update the live region immediately following the table whenever sort changes.
 * @param {HTMLTableElement} table
 * @param {HTMLTableHeaderCellElement} sortedHeader
 */

const updateLiveRegion = (table, sortedHeader) => {
  const caption = table.querySelector("caption").innerText;
  const sortedAscending = sortedHeader.getAttribute(SORTED) === ASCENDING;
  const headerLabel = sortedHeader.innerText;
  const liveRegion = table.nextElementSibling;
  if (liveRegion && liveRegion.matches(ANNOUNCEMENT_REGION)) {
    const sortAnnouncement = `The table named "${caption}" is now sorted by ${headerLabel} in ${sortedAscending ? ASCENDING : DESCENDING} order.`;
    liveRegion.innerText = sortAnnouncement;
  } else {
    throw new Error(`Table containing a sortable column header is not followed by an aria-live region.`);
  }
};

/**
 * Toggle a header's sort state, optionally providing a target
 * state.
 *
 * @param {HTMLTableHeaderCellElement} header
 * @param {boolean?} isAscending If no state is provided, the current
 * state will be toggled (from false to true, and vice-versa).
 */
const toggleSort = (header, isAscending) => {
  const table = header.closest(TABLE);
  if (!table) {
    throw new Error(`${SORTABLE_HEADER} is missing outer ${TABLE}`);
  }
  const safeAscending = sortRows(header, isAscending);
  if (safeAscending) {
    getColumnHeaders(table).forEach(otherHeader => {
      if (otherHeader !== header) {
        unsetSort(otherHeader);
      }
    });
    updateLiveRegion(table, header);
  }
};

/**
 ** Inserts a button with icon inside a sortable header
 * @param {HTMLTableHeaderCellElement} header
 */

const createHeaderButton = header => {
  const buttonEl = document.createElement("button");
  buttonEl.setAttribute("tabindex", "0");
  buttonEl.classList.add(SORT_BUTTON_CLASS);
  // ICON_SOURCE
  buttonEl.innerHTML = Sanitizer.escapeHTML`
  <svg class="${PREFIX}-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g class="descending" fill="transparent">
      <path d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="ascending" fill="transparent">
      <path transform="rotate(180, 12, 12)" d="M17 17L15.59 15.59L12.9999 18.17V2H10.9999V18.17L8.41 15.58L7 17L11.9999 22L17 17Z" />
    </g>
    <g class="unsorted" fill="transparent">
      <polygon points="15.17 15 13 17.17 13 6.83 15.17 9 16.58 7.59 12 3 7.41 7.59 8.83 9 11 6.83 11 17.17 8.83 15 7.42 16.41 12 21 16.59 16.41 15.17 15"/>
    </g>
  </svg>
  `;
  header.appendChild(buttonEl);
  updateSortLabel(header);
};
const table = behavior({
  [CLICK]: {
    [SORT_BUTTON](event) {
      event.preventDefault();
      toggleSort(event.target.closest(SORTABLE_HEADER), event.target.closest(SORTABLE_HEADER).getAttribute(SORTED) === ASCENDING);
    }
  }
}, {
  init(root) {
    const sortableHeaders = select(SORTABLE_HEADER, root);
    sortableHeaders.forEach(header => createHeaderButton(header));
    const firstSorted = sortableHeaders.filter(header => header.getAttribute(SORTED) === ASCENDING || header.getAttribute(SORTED) === DESCENDING)[0];
    if (typeof firstSorted === "undefined") {
      // no sortable headers found
      return;
    }
    const sortDir = firstSorted.getAttribute(SORTED);
    if (sortDir === ASCENDING) {
      toggleSort(firstSorted, true);
    } else if (sortDir === DESCENDING) {
      toggleSort(firstSorted, false);
    }
  },
  TABLE,
  SORTABLE_HEADER,
  SORT_BUTTON
});
module.exports = table;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/events":24,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/sanitizer":34,"../../uswds-core/src/js/utils/select":37}],20:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const {
  COMBO_BOX_CLASS,
  enhanceComboBox
} = require("../../usa-combo-box/src/index");
const TIME_PICKER_CLASS = `${PREFIX}-time-picker`;
const TIME_PICKER = `.${TIME_PICKER_CLASS}`;
const MAX_TIME = 60 * 24 - 1;
const MIN_TIME = 0;
const DEFAULT_STEP = 30;
const MIN_STEP = 1;
const FILTER_DATASET = {
  filter: "0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",
  apQueryFilter: "([ap])",
  hourQueryFilter: "([1-9][0-2]?)",
  minuteQueryFilter: "[\\d]+:([0-9]{0,2})"
};

/**
 * Parse a string of hh:mm into minutes
 *
 * @param {string} timeStr the time string to parse
 * @returns {number} the number of minutes
 */
const parseTimeString = timeStr => {
  let minutes;
  if (timeStr) {
    const [hours, mins] = timeStr.split(":").map(str => {
      let value;
      const parsed = parseInt(str, 10);
      if (!Number.isNaN(parsed)) value = parsed;
      return value;
    });
    if (hours != null && mins != null) {
      minutes = hours * 60 + mins;
    }
  }
  return minutes;
};

/**
 * Enhance an input with the date picker elements
 *
 * @param {HTMLElement} el The initial wrapping element of the date picker component
 */
const transformTimePicker = el => {
  const timePickerEl = el.closest(TIME_PICKER);

  // Set during enhanceComboBox(timePickerEl)
  if (timePickerEl.dataset.enhanced) return;
  const initialInputEl = timePickerEl.querySelector(`input`);
  if (!initialInputEl) {
    throw new Error(`${TIME_PICKER} is missing inner input`);
  }
  const selectEl = document.createElement("select");
  ["id", "name", "required", "aria-label", "aria-labelledby", "disabled", "aria-disabled"].forEach(name => {
    if (initialInputEl.hasAttribute(name)) {
      const value = initialInputEl.getAttribute(name);
      selectEl.setAttribute(name, value);
      initialInputEl.removeAttribute(name);
    }
  });
  const padZeros = (value, length) => `0000${value}`.slice(-length);
  const getTimeContext = minutes => {
    const minute = minutes % 60;
    const hour24 = Math.floor(minutes / 60);
    const hour12 = hour24 % 12 || 12;
    const ampm = hour24 < 12 ? "am" : "pm";
    return {
      minute,
      hour24,
      hour12,
      ampm
    };
  };
  const minTime = Math.max(MIN_TIME, parseTimeString(timePickerEl.dataset.minTime) || MIN_TIME);
  const maxTime = Math.min(MAX_TIME, parseTimeString(timePickerEl.dataset.maxTime) || MAX_TIME);
  const step = Math.floor(Math.max(MIN_STEP, timePickerEl.dataset.step || DEFAULT_STEP));
  let defaultValue;
  for (let time = minTime; time <= maxTime; time += step) {
    const {
      minute,
      hour24,
      hour12,
      ampm
    } = getTimeContext(time);
    const option = document.createElement("option");
    option.value = `${padZeros(hour24, 2)}:${padZeros(minute, 2)}`;
    option.text = `${hour12}:${padZeros(minute, 2)}${ampm}`;
    if (option.text === initialInputEl.value) {
      defaultValue = option.value;
    }
    selectEl.appendChild(option);
  }
  timePickerEl.classList.add(COMBO_BOX_CLASS);

  // combo box properties
  Object.keys(FILTER_DATASET).forEach(key => {
    timePickerEl.dataset[key] = FILTER_DATASET[key];
  });
  timePickerEl.dataset.disableFiltering = "true";
  timePickerEl.dataset.defaultValue = defaultValue;
  timePickerEl.appendChild(selectEl);
  initialInputEl.remove();
};
const timePicker = behavior({}, {
  init(root) {
    selectOrMatches(TIME_PICKER, root).forEach(timePickerEl => {
      transformTimePicker(timePickerEl);
      enhanceComboBox(timePickerEl);
    });
  },
  FILTER_DATASET
});
module.exports = timePicker;

},{"../../usa-combo-box/src/index":6,"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/select-or-matches":36}],21:[function(require,module,exports){
"use strict";

// Tooltips
const keymap = require("../../uswds-core/src/js/utils/keymap");
const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const behavior = require("../../uswds-core/src/js/utils/behavior");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const isElementInViewport = require("../../uswds-core/src/js/utils/is-in-viewport");
const BODY = "body";
const TOOLTIP = `.${PREFIX}-tooltip`;
const TOOLTIP_TRIGGER = `.${PREFIX}-tooltip__trigger`;
const TOOLTIP_TRIGGER_CLASS = `${PREFIX}-tooltip__trigger`;
const TOOLTIP_CLASS = `${PREFIX}-tooltip`;
const TOOLTIP_BODY_CLASS = `${PREFIX}-tooltip__body`;
const SET_CLASS = "is-set";
const VISIBLE_CLASS = "is-visible";
const TRIANGLE_SIZE = 5;
const ADJUST_WIDTH_CLASS = `${PREFIX}-tooltip__body--wrap`;

/**
 *
 * @param {DOMElement} trigger - The tooltip trigger
 * @returns {object} Elements for initialized tooltip; includes trigger, wrapper, and body
 */
const getTooltipElements = trigger => {
  const wrapper = trigger.parentNode;
  const body = wrapper.querySelector(`.${TOOLTIP_BODY_CLASS}`);
  return {
    trigger,
    wrapper,
    body
  };
};

/**
 * Shows the tooltip
 * @param {HTMLElement} tooltipTrigger - the element that initializes the tooltip
 */
const showToolTip = (tooltipBody, tooltipTrigger, position) => {
  tooltipBody.setAttribute("aria-hidden", "false");

  // This sets up the tooltip body. The opacity is 0, but
  // we can begin running the calculations below.
  tooltipBody.classList.add(SET_CLASS);

  /**
   * Position the tooltip body when the trigger is hovered
   * Removes old positioning classnames and reapplies. This allows
   * positioning to change in case the user resizes browser or DOM manipulation
   * causes tooltip to get clipped from viewport
   *
   * @param {string} setPos - can be "top", "bottom", "right", "left"
   */
  const setPositionClass = setPos => {
    tooltipBody.classList.remove(`${TOOLTIP_BODY_CLASS}--top`);
    tooltipBody.classList.remove(`${TOOLTIP_BODY_CLASS}--bottom`);
    tooltipBody.classList.remove(`${TOOLTIP_BODY_CLASS}--right`);
    tooltipBody.classList.remove(`${TOOLTIP_BODY_CLASS}--left`);
    tooltipBody.classList.add(`${TOOLTIP_BODY_CLASS}--${setPos}`);
  };

  /**
   * Removes old positioning styles. This allows
   * re-positioning to change without inheriting other
   * dynamic styles
   *
   * @param {HTMLElement} e - this is the tooltip body
   */
  const resetPositionStyles = e => {
    // we don't override anything in the stylesheet when finding alt positions
    e.style.top = null;
    e.style.bottom = null;
    e.style.right = null;
    e.style.left = null;
    e.style.margin = null;
  };

  /**
   * get margin offset calculations
   *
   * @param {HTMLElement} target - this is the tooltip body
   * @param {String} propertyValue - this is the tooltip body
   */

  const offsetMargin = (target, propertyValue) => parseInt(window.getComputedStyle(target).getPropertyValue(propertyValue), 10);

  // offsetLeft = the left position, and margin of the element, the left
  // padding, scrollbar and border of the offsetParent element
  // offsetWidth = The offsetWidth property returns the viewable width of an
  // element in pixels, including padding, border and scrollbar, but not
  // the margin.

  /**
   * Calculate margin offset
   * tooltip trigger margin(position) offset + tooltipBody offsetWidth
   * @param {String} marginPosition
   * @param {Number} tooltipBodyOffset
   * @param {HTMLElement} trigger
   */
  const calculateMarginOffset = (marginPosition, tooltipBodyOffset, trigger) => {
    const offset = offsetMargin(trigger, `margin-${marginPosition}`) > 0 ? tooltipBodyOffset - offsetMargin(trigger, `margin-${marginPosition}`) : tooltipBodyOffset;
    return offset;
  };

  /**
   * Positions tooltip at the top
   * @param {HTMLElement} e - this is the tooltip body
   */
  const positionTop = e => {
    resetPositionStyles(e); // ensures we start from the same point
    // get details on the elements object with

    const topMargin = calculateMarginOffset("top", e.offsetHeight, tooltipTrigger);
    const leftMargin = calculateMarginOffset("left", e.offsetWidth, tooltipTrigger);
    setPositionClass("top");
    e.style.left = `50%`; // center the element
    e.style.top = `-${TRIANGLE_SIZE}px`; // consider the pseudo element
    // apply our margins based on the offset
    e.style.margin = `-${topMargin}px 0 0 -${leftMargin / 2}px`;
  };

  /**
   * Positions tooltip at the bottom
   * @param {HTMLElement} e - this is the tooltip body
   */
  const positionBottom = e => {
    resetPositionStyles(e);
    const leftMargin = calculateMarginOffset("left", e.offsetWidth, tooltipTrigger);
    setPositionClass("bottom");
    e.style.left = `50%`;
    e.style.margin = `${TRIANGLE_SIZE}px 0 0 -${leftMargin / 2}px`;
  };

  /**
   * Positions tooltip at the right
   * @param {HTMLElement} e - this is the tooltip body
   */
  const positionRight = e => {
    resetPositionStyles(e);
    const topMargin = calculateMarginOffset("top", e.offsetHeight, tooltipTrigger);
    setPositionClass("right");
    e.style.top = `50%`;
    e.style.left = `${tooltipTrigger.offsetLeft + tooltipTrigger.offsetWidth + TRIANGLE_SIZE}px`;
    e.style.margin = `-${topMargin / 2}px 0 0 0`;
  };

  /**
   * Positions tooltip at the right
   * @param {HTMLElement} e - this is the tooltip body
   */
  const positionLeft = e => {
    resetPositionStyles(e);
    const topMargin = calculateMarginOffset("top", e.offsetHeight, tooltipTrigger);

    // we have to check for some utility margins
    const leftMargin = calculateMarginOffset("left", tooltipTrigger.offsetLeft > e.offsetWidth ? tooltipTrigger.offsetLeft - e.offsetWidth : e.offsetWidth, tooltipTrigger);
    setPositionClass("left");
    e.style.top = `50%`;
    e.style.left = `-${TRIANGLE_SIZE}px`;
    e.style.margin = `-${topMargin / 2}px 0 0 ${tooltipTrigger.offsetLeft > e.offsetWidth ? leftMargin : -leftMargin}px`; // adjust the margin
  };

  /**
   * We try to set the position based on the
   * original intention, but make adjustments
   * if the element is clipped out of the viewport
   * we constrain the width only as a last resort
   * @param {HTMLElement} element(alias tooltipBody)
   * @param {Number} attempt (--flag)
   */

  const maxAttempts = 2;
  function findBestPosition(element, attempt = 1) {
    // create array of optional positions
    const positions = [positionTop, positionBottom, positionRight, positionLeft];
    let hasVisiblePosition = false;

    // we take a recursive approach
    function tryPositions(i) {
      if (i < positions.length) {
        const pos = positions[i];
        pos(element);
        if (!isElementInViewport(element)) {
          tryPositions(i + 1);
        } else {
          hasVisiblePosition = true;
        }
      }
    }
    tryPositions(0);
    // if we can't find a position we compress it and try again
    if (!hasVisiblePosition) {
      element.classList.add(ADJUST_WIDTH_CLASS);
      if (attempt <= maxAttempts) {
        findBestPosition(element, attempt + 1);
      }
    }
  }
  switch (position) {
    case "top":
      positionTop(tooltipBody);
      if (!isElementInViewport(tooltipBody)) {
        findBestPosition(tooltipBody);
      }
      break;
    case "bottom":
      positionBottom(tooltipBody);
      if (!isElementInViewport(tooltipBody)) {
        findBestPosition(tooltipBody);
      }
      break;
    case "right":
      positionRight(tooltipBody);
      if (!isElementInViewport(tooltipBody)) {
        findBestPosition(tooltipBody);
      }
      break;
    case "left":
      positionLeft(tooltipBody);
      if (!isElementInViewport(tooltipBody)) {
        findBestPosition(tooltipBody);
      }
      break;
    default:
      // skip default case
      break;
  }

  /**
   * Actually show the tooltip. The VISIBLE_CLASS
   * will change the opacity to 1
   */
  setTimeout(() => {
    tooltipBody.classList.add(VISIBLE_CLASS);
  }, 20);
};

/**
 * Removes all the properties to show and position the tooltip,
 * and resets the tooltip position to the original intention
 * in case the window is resized or the element is moved through
 * DOM manipulation.
 * @param {HTMLElement} tooltipBody - The body of the tooltip
 */
const hideToolTip = tooltipBody => {
  tooltipBody.classList.remove(VISIBLE_CLASS);
  tooltipBody.classList.remove(SET_CLASS);
  tooltipBody.classList.remove(ADJUST_WIDTH_CLASS);
  tooltipBody.setAttribute("aria-hidden", "true");
};

/**
 * Setup the tooltip component
 * @param {HTMLElement} tooltipTrigger The element that creates the tooltip
 */
const setUpAttributes = tooltipTrigger => {
  const tooltipID = `tooltip-${Math.floor(Math.random() * 900000) + 100000}`;
  const tooltipContent = tooltipTrigger.getAttribute("title");
  const wrapper = document.createElement("span");
  const tooltipBody = document.createElement("span");
  const additionalClasses = tooltipTrigger.getAttribute("data-classes");
  let position = tooltipTrigger.getAttribute("data-position");

  // Apply default position if not set as attribute
  if (!position) {
    position = "top";
    tooltipTrigger.setAttribute("data-position", position);
  }

  // Set up tooltip attributes
  tooltipTrigger.setAttribute("aria-describedby", tooltipID);
  tooltipTrigger.setAttribute("tabindex", "0");
  tooltipTrigger.removeAttribute("title");
  tooltipTrigger.classList.remove(TOOLTIP_CLASS);
  tooltipTrigger.classList.add(TOOLTIP_TRIGGER_CLASS);

  // insert wrapper before el in the DOM tree
  tooltipTrigger.parentNode.insertBefore(wrapper, tooltipTrigger);

  // set up the wrapper
  wrapper.appendChild(tooltipTrigger);
  wrapper.classList.add(TOOLTIP_CLASS);
  wrapper.appendChild(tooltipBody);

  // Apply additional class names to wrapper element
  if (additionalClasses) {
    const classesArray = additionalClasses.split(" ");
    classesArray.forEach(classname => wrapper.classList.add(classname));
  }

  // set up the tooltip body
  tooltipBody.classList.add(TOOLTIP_BODY_CLASS);
  tooltipBody.setAttribute("id", tooltipID);
  tooltipBody.setAttribute("role", "tooltip");
  tooltipBody.setAttribute("aria-hidden", "true");

  // place the text in the tooltip
  tooltipBody.textContent = tooltipContent;
  return {
    tooltipBody,
    position,
    tooltipContent,
    wrapper
  };
};

/**
 * Hide all active tooltips when escape key is pressed.
 */

const handleEscape = () => {
  const activeTooltips = selectOrMatches(`.${TOOLTIP_BODY_CLASS}.${SET_CLASS}`);
  if (!activeTooltips) {
    return;
  }
  activeTooltips.forEach(activeTooltip => hideToolTip(activeTooltip));
};

// Setup our function to run on various events
const tooltip = behavior({
  "mouseover focusin": {
    [TOOLTIP](e) {
      const trigger = e.target;

      // Initialize tooltip if it hasn't already
      if (trigger.hasAttribute("title")) {
        setUpAttributes(trigger);
      }
    },
    [TOOLTIP_TRIGGER](e) {
      const {
        trigger,
        body
      } = getTooltipElements(e.target);
      showToolTip(body, trigger, trigger.dataset.position);
    }
  },
  focusout: {
    [TOOLTIP_TRIGGER](e) {
      const {
        body
      } = getTooltipElements(e.target);
      hideToolTip(body);
    }
  },
  keydown: {
    [BODY]: keymap({
      Escape: handleEscape
    })
  }
}, {
  init(root) {
    selectOrMatches(TOOLTIP, root).forEach(tooltipTrigger => {
      setUpAttributes(tooltipTrigger);
      const {
        body,
        wrapper
      } = getTooltipElements(tooltipTrigger);
      wrapper.addEventListener("mouseleave", () => hideToolTip(body));
    });
  },
  teardown(root) {
    selectOrMatches(TOOLTIP, root).forEach(tooltipWrapper => {
      tooltipWrapper.removeEventListener("mouseleave", hideToolTip);
    });
  },
  setup: setUpAttributes,
  getTooltipElements,
  show: showToolTip,
  hide: hideToolTip
});
module.exports = tooltip;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/is-in-viewport":31,"../../uswds-core/src/js/utils/keymap":33,"../../uswds-core/src/js/utils/select-or-matches":36}],22:[function(require,module,exports){
"use strict";

const behavior = require("../../uswds-core/src/js/utils/behavior");
const validate = require("../../uswds-core/src/js/utils/validate-input");
const {
  prefix: PREFIX
} = require("../../uswds-core/src/js/config");
const selectOrMatches = require("../../uswds-core/src/js/utils/select-or-matches");
const VALIDATE_INPUT = "input[data-validation-element],textarea[data-validation-element]";
const CHECKLIST_ITEM = `.${PREFIX}-checklist__item`;

// Trigger validation on input change
const handleChange = el => validate(el);

// Create container to hold aria readout
const createStatusElement = input => {
  const validationContainer = input.parentNode;
  const inputID = input.getAttribute("id");
  const statusSummaryID = `${inputID}-sr-summary`;
  input.setAttribute("aria-describedby", statusSummaryID);
  const statusSummaryContainer = document.createElement("span");
  statusSummaryContainer.setAttribute("data-validation-status", "");
  statusSummaryContainer.classList.add("usa-sr-only");
  statusSummaryContainer.setAttribute("aria-live", "polite");
  statusSummaryContainer.setAttribute("aria-atomic", true);
  statusSummaryContainer.setAttribute("id", statusSummaryID);
  validationContainer.append(statusSummaryContainer);
};

// Set up checklist items with initial aria-label (incomplete) values
const createInitialStatus = input => {
  const validationContainer = input.parentNode;
  const checklistItems = validationContainer.querySelectorAll(CHECKLIST_ITEM);
  const validationElement = input.getAttribute("data-validation-element");
  input.setAttribute("aria-controls", validationElement);
  checklistItems.forEach(listItem => {
    let currentStatus = "status incomplete";
    if (input.hasAttribute("data-validation-incomplete")) {
      currentStatus = input.getAttribute("data-validation-incomplete");
    }
    const itemStatus = `${listItem.textContent} ${currentStatus} `;
    listItem.setAttribute("aria-label", itemStatus);
  });
};
const enhanceValidation = input => {
  createStatusElement(input);
  createInitialStatus(input);
};
const validator = behavior({
  "input change": {
    [VALIDATE_INPUT](event) {
      handleChange(event.target);
    }
  }
}, {
  init(root) {
    selectOrMatches(VALIDATE_INPUT, root).forEach(input => enhanceValidation(input));
  }
});
module.exports = validator;

},{"../../uswds-core/src/js/config":23,"../../uswds-core/src/js/utils/behavior":28,"../../uswds-core/src/js/utils/select-or-matches":36,"../../uswds-core/src/js/utils/validate-input":41}],23:[function(require,module,exports){
"use strict";

module.exports = {
  prefix: "usa"
};

},{}],24:[function(require,module,exports){
"use strict";

module.exports = {
  // This used to be conditionally dependent on whether the
  // browser supported touch events; if it did, `CLICK` was set to
  // `touchstart`.  However, this had downsides:
  //
  // * It pre-emptied mobile browsers' default behavior of detecting
  //   whether a touch turned into a scroll, thereby preventing
  //   users from using some of our components as scroll surfaces.
  //
  // * Some devices, such as the Microsoft Surface Pro, support *both*
  //   touch and clicks. This meant the conditional effectively dropped
  //   support for the user's mouse, frustrating users who preferred
  //   it on those systems.
  CLICK: "click"
};

},{}],25:[function(require,module,exports){
"use strict";

const accordion = require("../../../usa-accordion/src/index");
const banner = require("../../../usa-banner/src/index");
const button = require("../../../usa-button/src/index");
const characterCount = require("../../../usa-character-count/src/index");
const comboBox = require("../../../usa-combo-box/src/index");
const datePicker = require("../../../usa-date-picker/src/index");
const dateRangePicker = require("../../../usa-date-range-picker/src/index");
const fileInput = require("../../../usa-file-input/src/index");
const footer = require("../../../usa-footer/src/index");
const inPageNavigation = require("../../../usa-in-page-navigation/src/index");
const inputMask = require("../../../usa-input-mask/src/index");
const languageSelector = require("../../../usa-language-selector/src/index");
const modal = require("../../../usa-modal/src/index");
const navigation = require("../../../usa-header/src/index");
const password = require("../../../_usa-password/src/index");
const range = require("../../../usa-range/src/index");
const search = require("../../../usa-search/src/index");
const skipnav = require("../../../usa-skipnav/src/index");
const table = require("../../../usa-table/src/index");
const timePicker = require("../../../usa-time-picker/src/index");
const tooltip = require("../../../usa-tooltip/src/index");
const validator = require("../../../usa-validation/src/index");
module.exports = {
  accordion,
  banner,
  button,
  characterCount,
  comboBox,
  datePicker,
  dateRangePicker,
  fileInput,
  footer,
  inPageNavigation,
  inputMask,
  languageSelector,
  modal,
  navigation,
  password,
  range,
  search,
  skipnav,
  table,
  timePicker,
  tooltip,
  validator
};

},{"../../../_usa-password/src/index":1,"../../../usa-accordion/src/index":2,"../../../usa-banner/src/index":3,"../../../usa-button/src/index":4,"../../../usa-character-count/src/index":5,"../../../usa-combo-box/src/index":6,"../../../usa-date-picker/src/index":7,"../../../usa-date-range-picker/src/index":8,"../../../usa-file-input/src/index":9,"../../../usa-footer/src/index":10,"../../../usa-header/src/index":11,"../../../usa-in-page-navigation/src/index":12,"../../../usa-input-mask/src/index":13,"../../../usa-language-selector/src/index":14,"../../../usa-modal/src/index":15,"../../../usa-range/src/index":16,"../../../usa-search/src/index":17,"../../../usa-skipnav/src/index":18,"../../../usa-table/src/index":19,"../../../usa-time-picker/src/index":20,"../../../usa-tooltip/src/index":21,"../../../usa-validation/src/index":22}],26:[function(require,module,exports){
"use strict";

window.uswdsPresent = true; // GLOBAL variable to indicate that the uswds.js has loaded in the DOM.

const uswds = require("./config");
const components = require("./index");
uswds.components = components;
const initComponents = () => {
  const target = document.body;
  Object.keys(components).forEach(key => {
    const behavior = components[key];
    behavior.on(target);
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initComponents, {
    once: true
  });
} else {
  initComponents();
}
exports.default = uswds;
exports.initComponents = initComponents;

},{"./config":23,"./index":25}],27:[function(require,module,exports){
"use strict";

module.exports = (htmlDocument = document) => htmlDocument.activeElement;

},{}],28:[function(require,module,exports){
"use strict";

/**
 * Callback handler for component setup and teardown events.
 *
 * @typedef {(target?: HTMLElement) => any} BehaviorLifecycle
 */

/**
 * Options object for initializing a component's behavior and including additional properties in
 * the public interface of each initialized component.
 *
 * @typedef {Record<string, any> & { init?: BehaviorLifecycle, teardown?: BehaviorLifecycle }} BehaviorProps
 */

/**
 * Component initializer.
 *
 * @typedef {BehaviorProps & {
 *   on: BehaviorLifecycle,
 *   off: BehaviorLifecycle,
 *   add: BehaviorLifecycle,
 *   remove: BehaviorLifecycle,
 * }} Behavior
 */

/**
 * Event callback handler.
 *
 * @typedef {(
 *   this: HTMLElement,
 *   event: K extends keyof HTMLElementEventMap ? HTMLElementEventMap[K] : Event
 * ) => any} EventHandler
 * @template {string} K Event name(s)
 */

/**
 * Callback or object of selector-scoped callbacks.
 *
 * @typedef {EventHandler<K> | Record<string, EventHandler<K>>} EventHandlerOrSelectorMap
 * @template {string} K Event name(s)
 */

/**
 * Object of component event handlers, where each event handler may be a callback function or an
 * object of selector-scoped callbacks.
 *
 * @typedef {Record<K, EventHandlerOrSelectorMap<K>>} Events
 * @template {string} K Event name(s)
 */

/**
 * @param {Events<K>} events Object of component event handlers, where each event handler may be a
 * callback function or an object of selector-scoped callbacks.
 * @param {Partial<BehaviorProps>} props Additional properties to include in public interface of
 * each initialized component.
 * @template {string} K Event name(s)
 *
 * @return {Behavior} Component initializer.
 */

module.exports = (events, props) => {
  // Normalize event handlers to an array of arguments to be passed to either `addEventListener` or
  // `removeEventListener` during component initialization.
  const listeners = Object.entries(events).flatMap(([eventTypes, handlers]) =>
  // Each event handler can be defined for one or more space-separated event names.
  eventTypes.split(" ").map(eventType =>
  // Generate arguments of `[add/remove]EventListener` as [eventType, callback]
  /** @type {[keyof HTMLElementEventMap, EventHandler<any>]} */
  [eventType,
  // Event handlers can be defined as a callback or object of selector-scoped callbacks. To
  // normalize as a function, create a function from a given object to perform the scoping
  // logic.
  typeof handlers === "function" ? handlers : event =>
  // When a handler is defined as an object, event handling should terminate if any of
  // the scoped callbacks return `false`. This is accomplished by iterating over the
  // object's values as an array and using `Array#some` to abort at the first `false`
  // return value.
  Object.entries(handlers).some(([selector, handler]) => {
    // Since this event is attached at an ancestor and is handled using event
    // delegation, ensure that the actual event target is within the scoped selector.
    const target = event.target && event.target.closest(selector);
    return target && handler.call(target, event) === false;
  })]));

  /**
   * Initialize components within the given target, defaulting to the document body.
   *
   * @param {Element} target Ancestor element in which to initialized components.
   */
  const on = (target = document.body) => {
    if (props && props.init) {
      props.init(target);
    }
    listeners.forEach(args => target.addEventListener(...args));
  };

  /**
   * Remove component behaviors within the given target, defaulting to the document body.
   *
   * @param {Element} target Ancestor element in which to remove component behaviors.
   */
  const off = (target = document.body) => {
    if (props && props.teardown) {
      props.teardown(target);
    }
    listeners.forEach(args => target.removeEventListener(...args));
  };
  return {
    on,
    add: on,
    off,
    remove: off,
    ...props
  };
};

},{}],29:[function(require,module,exports){
"use strict";

/**
 * Debounce a function so it runs after `delay` ms of inactivity.
 *
 * The returned function includes a `.cancel()` method that clears any
 * pending invocation. Useful when switching between competing debounced
 * updates (for example, assertive vs recovery announcements).
 *
 * @param  {Function} callback - A callback function to be debounced
 * @param  {number} delay - Milliseconds to wait before calling function
 * @returns {Function & { cancel: () => void }} A debounced function
 * @example const updateStatus = debounce((string) => console.log(string), 2000)
 */

module.exports = function debounce(callback, delay = 500) {
  let timer = null;
  const debounced = function debounced(...args) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
  debounced.cancel = () => {
    window.clearTimeout(timer);
    timer = null;
  };
  return debounced;
};

},{}],30:[function(require,module,exports){
"use strict";

const keymap = require("./keymap");
const behavior = require("./behavior");
const select = require("./select");
const activeElement = require("./active-element");
const FOCUSABLE = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
const tabHandler = context => {
  const focusableElements = select(FOCUSABLE, context);
  const firstTabStop = focusableElements[0];
  const lastTabStop = focusableElements[focusableElements.length - 1];

  // Special rules for when the user is tabbing forward from the last focusable element,
  // or when tabbing backwards from the first focusable element
  function tabAhead(event) {
    if (activeElement() === lastTabStop) {
      event.preventDefault();
      firstTabStop.focus();
    }
  }
  function tabBack(event) {
    if (activeElement() === firstTabStop) {
      event.preventDefault();
      lastTabStop.focus();
    }
    // This checks if you want to set the initial focus to a container
    // instead of an element within, and the user tabs back.
    // Then we set the focus to the first
    else if (!focusableElements.includes(activeElement())) {
      event.preventDefault();
      firstTabStop.focus();
    }
  }
  return {
    firstTabStop,
    lastTabStop,
    tabAhead,
    tabBack
  };
};
module.exports = (context, additionalKeyBindings = {}) => {
  const {
    autoFocus = true,
    ...keyBindings
  } = additionalKeyBindings;
  const tabEventHandler = tabHandler(context);
  const bindings = keyBindings;
  const {
    Esc,
    Escape
  } = bindings;
  if (Escape && !Esc) bindings.Esc = Escape;

  //  TODO: In the future, loop over additional keybindings and pass an array
  // of functions, if necessary, to the map keys. Then people implementing
  // the focus trap could pass callbacks to fire when tabbing
  const keyMappings = keymap({
    Tab: tabEventHandler.tabAhead,
    "Shift+Tab": tabEventHandler.tabBack,
    ...keyBindings
  });
  const focusTrap = behavior({
    keydown: keyMappings
  }, {
    init() {
      // TODO: is this desirable behavior? Should the trap always do this by default or should
      // the component getting decorated handle this?
      if (autoFocus && tabEventHandler.firstTabStop) {
        tabEventHandler.firstTabStop.focus();
      }
    },
    update(isActive) {
      if (isActive) {
        this.on();
      } else {
        this.off();
      }
    }
  });
  return focusTrap;
};

},{"./active-element":27,"./behavior":28,"./keymap":33,"./select":37}],31:[function(require,module,exports){
"use strict";

// https://stackoverflow.com/a/7557433
function isElementInViewport(el, win = window, docEl = document.documentElement) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (win.innerHeight || docEl.clientHeight) && rect.right <= (win.innerWidth || docEl.clientWidth);
}
module.exports = isElementInViewport;

},{}],32:[function(require,module,exports){
"use strict";

// iOS detection from: http://stackoverflow.com/a/9039885/177710
function isIosDevice() {
  return typeof navigator !== "undefined" && (navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !window.MSStream;
}
module.exports = isIosDevice;

},{}],33:[function(require,module,exports){
"use strict";

/**
 * Callback to be called when key is pressed.
 *
 * @typedef {(event: KeyboardEvent) => any} KeyboardEventHandler
 */

/**
 * Object with keyboard key combination as object key, and corresponding callback handler as value.
 *
 * @typedef {Record<string, KeyboardEventHandler>} KeymapConfig
 */

/**
 * Initialize keyboard events with an object of keyboard key combinations and corresponding event
 * handlers.
 *
 * @param {KeymapConfig} map
 * @return {KeyboardEventHandler}
 */
module.exports = map => event => {
  // Bail out if this is not a KeyboardEvent (e.g. InputEvent from datalist
  // selection). Only KeyboardEvents have `key` and `getModifierState`.
  if (!(event instanceof KeyboardEvent) || typeof event.key === "undefined" || typeof event.getModifierState !== "function") {
    return;
  }
  Object.keys(map).forEach(combo => {
    // Each key combination can have one or more modifier, where each modifier is prefixed with the
    // modifier name and "+".
    const parts = combo.split("+");

    // The keyboard key name should come as the last part of a "+" delimited key. Popping the item
    // will result in `parts` only containing the modifiers to be checked.
    const key = parts.pop();

    // Verify that the modifiers on the event are exactly equal to the modifiers specified in the
    // key combination. Use the spec modifier names recognized by `getModifierState()`: "Control"
    // (not "Ctrl"), "Shift", "Alt", "Meta".
    const isModifierMatch = ["Shift", "Alt", "Control", "Meta"]
    // For any modifier active in the event (or vice-versa, expected in the key combination)...
    .filter(mod => event.getModifierState(mod) || parts.includes(mod))
    // Ensure that it is expected in the key combination (or vice-versa, active in the event).
    .every(mod => event.getModifierState(mod) && parts.includes(mod));
    if (key === event.key && isModifierMatch) {
      map[combo](event);
    }
  });
};

},{}],34:[function(require,module,exports){
"use strict";

/**
 * A simple library to help you escape HTML using template strings. This originated
 * from https://web.archive.org/web/20150910040110/https://developer.mozilla.org/en-US/Firefox_OS/Security/Security_Automation
 *
 * It was converted from UMD to CommonJS, and unused methods were removed,
 * but the spirit remains the same.
 *
 * See additional background information and design docs at
 * https://wiki.mozilla.org/User:Fbraun/Gaia/SafeinnerHTMLRoadmap
 */

const Sanitizer = {
  _entity: /[&<>"'/]/g,
  _entities: {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
    "/": "&#x2F;"
  },
  getEntity: function (s) {
    return Sanitizer._entities[s];
  },
  /**
   * Escapes HTML for all values in a tagged template string.
   */
  escapeHTML: function (strings) {
    let result = "";
    for (let i = 0; i < strings.length; i++) {
      result += strings[i];
      if (i + 1 < arguments.length) {
        let value = arguments[i + 1];
        if (value === null || value === undefined) {
          value = "";
        }
        result += String(value).replace(Sanitizer._entity, Sanitizer.getEntity);
      }
    }
    return result;
  }
};
module.exports = Sanitizer;

},{}],35:[function(require,module,exports){
"use strict";

module.exports = function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = `${outer.offsetWidth - inner.offsetWidth}px`;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
};

},{}],36:[function(require,module,exports){
"use strict";

const select = require("./select");
/**
 * @name isElement
 * @desc returns whether or not the given argument is a DOM element.
 * @param {any} value
 * @return {boolean}
 */
const isElement = value => value && typeof value === "object" && value.nodeType === 1;

/**
 * @name selectOrMatches
 * @desc selects elements from the DOM by class selector or ID selector.
 * @param {string} selector - The selector to traverse the DOM with.
 * @param {Document|HTMLElement?} context - The context to traverse the DOM
 *   in. If not provided, it defaults to the document.
 * @return {HTMLElement[]} - An array of DOM nodes or an empty array.
 */
module.exports = (selector, context) => {
  const selection = select(selector, context);
  if (typeof selector !== "string") {
    return selection;
  }
  if (isElement(context) && context.matches(selector)) {
    selection.push(context);
  }
  return selection;
};

},{"./select":37}],37:[function(require,module,exports){
"use strict";

/**
 * @name isElement
 * @desc returns whether or not the given argument is a DOM element.
 * @param {any} value
 * @return {boolean}
 */
const isElement = value => value && typeof value === "object" && value.nodeType === 1;

/**
 * @name select
 * @desc selects elements from the DOM by class selector or ID selector.
 * @param {string} selector - The selector to traverse the DOM with.
 * @param {Document|HTMLElement?} context - The context to traverse the DOM
 *   in. If not provided, it defaults to the document.
 * @return {HTMLElement[]} - An array of DOM nodes or an empty array.
 */
module.exports = (selector, context) => {
  if (typeof selector !== "string") {
    return [];
  }
  if (!context || !isElement(context)) {
    context = window.document; // eslint-disable-line no-param-reassign
  }
  const selection = context.querySelectorAll(selector);
  return Array.prototype.slice.call(selection);
};

},{}],38:[function(require,module,exports){
"use strict";

/**
 * Flips given INPUT elements between masked (hiding the field value) and unmasked
 * @param {Array.HTMLElement} fields - An array of INPUT elements
 * @param {Boolean} mask - Whether the mask should be applied, hiding the field value
 */
module.exports = (field, mask) => {
  field.setAttribute("autocapitalize", "off");
  field.setAttribute("autocorrect", "off");
  field.setAttribute("type", mask ? "password" : "text");
};

},{}],39:[function(require,module,exports){
"use strict";

const toggleFieldMask = require("./toggle-field-mask");
const CONTROLS = "aria-controls";
const PRESSED = "aria-pressed";
const SHOW_ATTR = "data-show-text";
const HIDE_ATTR = "data-hide-text";

/**
 * Replace the word "Show" (or "show") with "Hide" (or "hide") in a string.
 * @param {string} showText
 * @return {strong} hideText
 */
const getHideText = showText => showText.replace(/\bShow\b/i, show => `${show[0] === "S" ? "H" : "h"}ide`);
const resolveIdRefs = id => {
  const ids = id.trim().split(/\s+/);
  return ids.map(i => {
    const el = document.getElementById(i);
    if (!el) {
      const err = `no element with id: ${i}`;
      throw new Error(err);
    }
    return el;
  });
};

/**
 * Component that decorates an HTML element with the ability to toggle the
 * masked state of an input field (like a password) when clicked.
 * The ids of the fields to be masked will be pulled directly from the button's
 * `aria-controls` attribute.
 *
 * @param  {HTMLElement} el    Parent element containing the fields to be masked
 * @return {boolean}
 */
module.exports = el => {
  // this is the *target* state:
  // * if the element has the attr and it's !== "true", pressed is true
  // * otherwise, pressed is false
  const pressed = el.hasAttribute(PRESSED) && el.getAttribute(PRESSED) !== "true";
  const fields = resolveIdRefs(el.getAttribute(CONTROLS));
  fields.forEach(field => toggleFieldMask(field, pressed));
  if (!el.hasAttribute(SHOW_ATTR)) {
    el.setAttribute(SHOW_ATTR, el.textContent);
  }
  const showText = el.getAttribute(SHOW_ATTR);
  const hideText = el.getAttribute(HIDE_ATTR) || getHideText(showText);
  el.textContent = pressed ? showText : hideText;
  el.setAttribute(PRESSED, pressed);
  return pressed;
};

},{"./toggle-field-mask":38}],40:[function(require,module,exports){
"use strict";

const EXPANDED = "aria-expanded";
const CONTROLS = "aria-controls";
const HIDDEN = "hidden";
module.exports = (button, expanded) => {
  let safeExpanded = expanded;
  if (typeof safeExpanded !== "boolean") {
    safeExpanded = button.getAttribute(EXPANDED) === "false";
  }
  button.setAttribute(EXPANDED, safeExpanded);
  const id = button.getAttribute(CONTROLS);
  const root = typeof button.getRootNode === "function" ? button.getRootNode() : document;
  const controls = typeof root.getElementById === "function" ? root.getElementById(id) : document.getElementById(id);
  if (!controls) {
    throw new Error(`No toggle target found with id: "${id}"`);
  }
  if (safeExpanded) {
    controls.removeAttribute(HIDDEN);
  } else {
    controls.setAttribute(HIDDEN, "");
  }
  return safeExpanded;
};

},{}],41:[function(require,module,exports){
"use strict";

const debounce = require("./debounce");
const {
  prefix: PREFIX
} = require("../config");
const CHECKED_CLASS = `${PREFIX}-checklist__item--checked`;
module.exports = function validate(el) {
  const id = el.dataset.validationElement;
  const checkList = id.charAt(0) === "#" ? document.querySelector(id) : document.getElementById(id);
  if (!checkList) {
    throw new Error(`No validation element found with id: "${id}"`);
  }
  let statusSummary = "";
  Object.entries(el.dataset).forEach(([key, value]) => {
    if (key.startsWith("validate")) {
      const validatorName = key.substr("validate".length).toLowerCase();
      const validatorPattern = new RegExp(value);
      const validatorSelector = `[data-validator="${validatorName}"]`;
      const validatorCheckbox = checkList.querySelector(validatorSelector);
      const validatorParent = el.parentNode;
      const statusSummaryContainer = validatorParent.querySelector(`[data-validation-status]`);
      if (!validatorCheckbox) {
        throw new Error(`No validator checkbox found for: "${validatorName}"`);
      }
      const checked = validatorPattern.test(el.value);
      validatorCheckbox.classList.toggle(CHECKED_CLASS, checked);

      // Create status reports for checklist items
      const statusComplete = el.dataset.validationComplete || "status complete";
      const statusIncomplete = el.dataset.validationIncomplete || "status incomplete";
      let checkboxContent = `${validatorCheckbox.textContent} `;
      if (validatorCheckbox.classList.contains(CHECKED_CLASS)) {
        checkboxContent += statusComplete;
      } else {
        checkboxContent += statusIncomplete;
      }

      // move status updates to aria-label on checklist item
      validatorCheckbox.setAttribute("aria-label", checkboxContent);

      // Create a summary of status for all checklist items
      statusSummary += `${checkboxContent}. `;

      // Add summary to screen reader summary container, after a delay
      const srUpdateStatus = debounce(() => {
        statusSummaryContainer.textContent = statusSummary;
      }, 1000);
      srUpdateStatus();
    }
  });
};

},{"../config":23,"./debounce":29}]},{},[26])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9fdXNhLXBhc3N3b3JkL3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS1hY2NvcmRpb24vc3JjL2luZGV4LmpzIiwicGFja2FnZXMvdXNhLWJhbm5lci9zcmMvaW5kZXguanMiLCJwYWNrYWdlcy91c2EtYnV0dG9uL3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS1jaGFyYWN0ZXItY291bnQvc3JjL2luZGV4LmpzIiwicGFja2FnZXMvdXNhLWNvbWJvLWJveC9zcmMvaW5kZXguanMiLCJwYWNrYWdlcy91c2EtZGF0ZS1waWNrZXIvc3JjL2luZGV4LmpzIiwicGFja2FnZXMvdXNhLWRhdGUtcmFuZ2UtcGlja2VyL3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS1maWxlLWlucHV0L3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS1mb290ZXIvc3JjL2luZGV4LmpzIiwicGFja2FnZXMvdXNhLWhlYWRlci9zcmMvaW5kZXguanMiLCJwYWNrYWdlcy91c2EtaW4tcGFnZS1uYXZpZ2F0aW9uL3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS1pbnB1dC1tYXNrL3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS1sYW5ndWFnZS1zZWxlY3Rvci9zcmMvaW5kZXguanMiLCJwYWNrYWdlcy91c2EtbW9kYWwvc3JjL2luZGV4LmpzIiwicGFja2FnZXMvdXNhLXJhbmdlL3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS1zZWFyY2gvc3JjL2luZGV4LmpzIiwicGFja2FnZXMvdXNhLXNraXBuYXYvc3JjL2luZGV4LmpzIiwicGFja2FnZXMvdXNhLXRhYmxlL3NyYy9pbmRleC5qcyIsInBhY2thZ2VzL3VzYS10aW1lLXBpY2tlci9zcmMvaW5kZXguanMiLCJwYWNrYWdlcy91c2EtdG9vbHRpcC9zcmMvaW5kZXguanMiLCJwYWNrYWdlcy91c2EtdmFsaWRhdGlvbi9zcmMvaW5kZXguanMiLCJwYWNrYWdlcy91c3dkcy1jb3JlL3NyYy9qcy9jb25maWcuanMiLCJwYWNrYWdlcy91c3dkcy1jb3JlL3NyYy9qcy9ldmVudHMuanMiLCJwYWNrYWdlcy91c3dkcy1jb3JlL3NyYy9qcy9pbmRleC5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3N0YXJ0LmpzIiwicGFja2FnZXMvdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvYWN0aXZlLWVsZW1lbnQuanMiLCJwYWNrYWdlcy91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvci5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2RlYm91bmNlLmpzIiwicGFja2FnZXMvdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvZm9jdXMtdHJhcC5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2lzLWluLXZpZXdwb3J0LmpzIiwicGFja2FnZXMvdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvaXMtaW9zLWRldmljZS5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2tleW1hcC5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3Nhbml0aXplci5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3Njcm9sbGJhci13aWR0aC5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdC1vci1tYXRjaGVzLmpzIiwicGFja2FnZXMvdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2VsZWN0LmpzIiwicGFja2FnZXMvdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvdG9nZ2xlLWZpZWxkLW1hc2suanMiLCJwYWNrYWdlcy91c3dkcy1jb3JlL3NyYy9qcy91dGlscy90b2dnbGUtZm9ybS1pbnB1dC5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3RvZ2dsZS5qcyIsInBhY2thZ2VzL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxz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LE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLElBQUksaUJBQWlCO01BQ3pFLE1BQU0sZ0JBQWdCLEdBQ3BCLEVBQUUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLElBQUksbUJBQW1CO01BQ3hELElBQUksZUFBZSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxHQUFHO01BRXpELElBQUksaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUN2RCxlQUFlLElBQUksY0FBYztNQUNuQyxDQUFDLE1BQU07UUFDTCxlQUFlLElBQUksZ0JBQWdCO01BQ3JDOztNQUVBO01BQ0EsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7O01BRTdEO01BQ0EsYUFBYSxJQUFJLEdBQUcsZUFBZSxJQUFJOztNQUV2QztNQUNBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxNQUFNO1FBQ3BDLHNCQUFzQixDQUFDLFdBQVcsR0FBRyxhQUFhO01BQ3BELENBQUMsRUFBRSxJQUFJLENBQUM7TUFFUixjQUFjLENBQUMsQ0FBQztJQUNsQjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IHRvZ2dsZUZvcm1JbnB1dCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy90b2dnbGUtZm9ybS1pbnB1dFwiKTtcblxuY29uc3QgeyBDTElDSyB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2V2ZW50c1wiKTtcbmNvbnN0IHsgcHJlZml4OiBQUkVGSVggfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9jb25maWdcIik7XG5cbmNvbnN0IExJTksgPSBgLiR7UFJFRklYfS1zaG93LXBhc3N3b3JkYDtcblxuZnVuY3Rpb24gdG9nZ2xlKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZUZvcm1JbnB1dCh0aGlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiZWhhdmlvcih7XG4gIFtDTElDS106IHtcbiAgICBbTElOS106IHRvZ2dsZSxcbiAgfSxcbn0pO1xuIiwiY29uc3Qgc2VsZWN0ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdFwiKTtcbmNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3QgdG9nZ2xlID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3RvZ2dsZVwiKTtcbmNvbnN0IGlzRWxlbWVudEluVmlld3BvcnQgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvaXMtaW4tdmlld3BvcnRcIik7XG5jb25zdCB7IENMSUNLIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvZXZlbnRzXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcblxuY29uc3QgQUNDT1JESU9OID0gYC4ke1BSRUZJWH0tYWNjb3JkaW9uLCAuJHtQUkVGSVh9LWFjY29yZGlvbi0tYm9yZGVyZWRgO1xuY29uc3QgQkFOTkVSX0JVVFRPTiA9IGAuJHtQUkVGSVh9LWJhbm5lcl9fYnV0dG9uYDtcbmNvbnN0IEJVVFRPTiA9IGAuJHtQUkVGSVh9LWFjY29yZGlvbl9fYnV0dG9uW2FyaWEtY29udHJvbHNdOm5vdCgke0JBTk5FUl9CVVRUT059KWA7XG5jb25zdCBFWFBBTkRFRCA9IFwiYXJpYS1leHBhbmRlZFwiO1xuY29uc3QgTVVMVElTRUxFQ1RBQkxFID0gXCJkYXRhLWFsbG93LW11bHRpcGxlXCI7XG5cbi8qKlxuICogR2V0IGFuIEFycmF5IG9mIGJ1dHRvbiBlbGVtZW50cyBiZWxvbmdpbmcgZGlyZWN0bHkgdG8gdGhlIGdpdmVuXG4gKiBhY2NvcmRpb24gZWxlbWVudC5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFjY29yZGlvblxuICogQHJldHVybiB7YXJyYXk8SFRNTEJ1dHRvbkVsZW1lbnQ+fVxuICovXG5jb25zdCBnZXRBY2NvcmRpb25CdXR0b25zID0gKGFjY29yZGlvbikgPT4ge1xuICBjb25zdCBidXR0b25zID0gc2VsZWN0KEJVVFRPTiwgYWNjb3JkaW9uKTtcblxuICByZXR1cm4gYnV0dG9ucy5maWx0ZXIoKGJ1dHRvbikgPT4gYnV0dG9uLmNsb3Nlc3QoQUNDT1JESU9OKSA9PT0gYWNjb3JkaW9uKTtcbn07XG5cbi8qKlxuICogVG9nZ2xlIGEgYnV0dG9uJ3MgXCJwcmVzc2VkXCIgc3RhdGUsIG9wdGlvbmFsbHkgcHJvdmlkaW5nIGEgdGFyZ2V0XG4gKiBzdGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBidXR0b25cbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGV4cGFuZGVkIElmIG5vIHN0YXRlIGlzIHByb3ZpZGVkLCB0aGUgY3VycmVudFxuICogc3RhdGUgd2lsbCBiZSB0b2dnbGVkIChmcm9tIGZhbHNlIHRvIHRydWUsIGFuZCB2aWNlLXZlcnNhKS5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRoZSByZXN1bHRpbmcgc3RhdGVcbiAqL1xuY29uc3QgdG9nZ2xlQnV0dG9uID0gKGJ1dHRvbiwgZXhwYW5kZWQpID0+IHtcbiAgY29uc3QgYWNjb3JkaW9uID0gYnV0dG9uLmNsb3Nlc3QoQUNDT1JESU9OKTtcblxuICBpZiAoIWFjY29yZGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtCVVRUT059IGlzIG1pc3Npbmcgb3V0ZXIgJHtBQ0NPUkRJT059YCk7XG4gIH1cblxuICBjb25zdCBzYWZlRXhwYW5kZWQgPSB0b2dnbGUoYnV0dG9uLCBleHBhbmRlZCk7XG5cbiAgLy8gWFhYIG11bHRpc2VsZWN0YWJsZSBpcyBvcHQtaW4sIHRvIHByZXNlcnZlIGxlZ2FjeSBiZWhhdmlvclxuICBjb25zdCBtdWx0aXNlbGVjdGFibGUgPSBhY2NvcmRpb24uaGFzQXR0cmlidXRlKE1VTFRJU0VMRUNUQUJMRSk7XG5cbiAgaWYgKHNhZmVFeHBhbmRlZCAmJiAhbXVsdGlzZWxlY3RhYmxlKSB7XG4gICAgZ2V0QWNjb3JkaW9uQnV0dG9ucyhhY2NvcmRpb24pLmZvckVhY2goKG90aGVyKSA9PiB7XG4gICAgICBpZiAob3RoZXIgIT09IGJ1dHRvbikge1xuICAgICAgICB0b2dnbGUob3RoZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBidXR0b25cbiAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWVcbiAqL1xuY29uc3Qgc2hvd0J1dHRvbiA9IChidXR0b24pID0+IHRvZ2dsZUJ1dHRvbihidXR0b24sIHRydWUpO1xuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnR9IGJ1dHRvblxuICogQHJldHVybiB7Ym9vbGVhbn0gZmFsc2VcbiAqL1xuY29uc3QgaGlkZUJ1dHRvbiA9IChidXR0b24pID0+IHRvZ2dsZUJ1dHRvbihidXR0b24sIGZhbHNlKTtcblxuY29uc3QgYWNjb3JkaW9uID0gYmVoYXZpb3IoXG4gIHtcbiAgICBbQ0xJQ0tdOiB7XG4gICAgICBbQlVUVE9OXSgpIHtcbiAgICAgICAgdG9nZ2xlQnV0dG9uKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZShFWFBBTkRFRCkgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgLy8gV2Ugd2VyZSBqdXN0IGV4cGFuZGVkLCBidXQgaWYgYW5vdGhlciBhY2NvcmRpb24gd2FzIGFsc28ganVzdFxuICAgICAgICAgIC8vIGNvbGxhcHNlZCwgd2UgbWF5IG5vIGxvbmdlciBiZSBpbiB0aGUgdmlld3BvcnQuIFRoaXMgZW5zdXJlc1xuICAgICAgICAgIC8vIHRoYXQgd2UgYXJlIHN0aWxsIHZpc2libGUsIHNvIHRoZSB1c2VyIGlzbid0IGNvbmZ1c2VkLlxuICAgICAgICAgIGlmICghaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzKSkgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpbml0KHJvb3QpIHtcbiAgICAgIHNlbGVjdChCVVRUT04sIHJvb3QpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoRVhQQU5ERUQpID09PSBcInRydWVcIjtcbiAgICAgICAgdG9nZ2xlQnV0dG9uKGJ1dHRvbiwgZXhwYW5kZWQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBBQ0NPUkRJT04sXG4gICAgQlVUVE9OLFxuICAgIHNob3c6IHNob3dCdXR0b24sXG4gICAgaGlkZTogaGlkZUJ1dHRvbixcbiAgICB0b2dnbGU6IHRvZ2dsZUJ1dHRvbixcbiAgICBnZXRCdXR0b25zOiBnZXRBY2NvcmRpb25CdXR0b25zLFxuICB9LFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY2NvcmRpb247XG4iLCJjb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IHNlbGVjdCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zZWxlY3RcIik7XG5jb25zdCB7IENMSUNLIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvZXZlbnRzXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcbmNvbnN0IHRvZ2dsZSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy90b2dnbGVcIik7XG5cbmNvbnN0IEhFQURFUiA9IGAuJHtQUkVGSVh9LWJhbm5lcl9faGVhZGVyYDtcbmNvbnN0IEVYUEFOREVEX0NMQVNTID0gYCR7UFJFRklYfS1iYW5uZXJfX2hlYWRlci0tZXhwYW5kZWRgO1xuY29uc3QgQkFOTkVSX0JVVFRPTiA9IGAke0hFQURFUn0gW2FyaWEtY29udHJvbHNdYDtcblxuLyoqXG4gKiBUb2dnbGUgQmFubmVyIGRpc3BsYXkgYW5kIGNsYXNzLlxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqL1xuY29uc3QgdG9nZ2xlQmFubmVyID0gZnVuY3Rpb24gdG9nZ2xlRWwoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdHJpZ2dlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KEJBTk5FUl9CVVRUT04pO1xuXG4gIHRvZ2dsZSh0cmlnZ2VyKTtcbiAgdGhpcy5jbG9zZXN0KEhFQURFUikuY2xhc3NMaXN0LnRvZ2dsZShFWFBBTkRFRF9DTEFTUyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJlaGF2aW9yKFxuICB7XG4gICAgW0NMSUNLXToge1xuICAgICAgW0JBTk5FUl9CVVRUT05dOiB0b2dnbGVCYW5uZXIsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGluaXQocm9vdCkge1xuICAgICAgc2VsZWN0KEJBTk5FUl9CVVRUT04sIHJvb3QpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoRVhQQU5ERURfQ0xBU1MpID09PSBcInRydWVcIjtcbiAgICAgICAgdG9nZ2xlKGJ1dHRvbiwgZXhwYW5kZWQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbik7XG4iLCJjb25zdCBrZXltYXAgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMva2V5bWFwXCIpO1xuY29uc3QgYmVoYXZpb3IgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvYmVoYXZpb3JcIik7XG5cbmNvbnN0IEFOQ0hPUl9CVVRUT04gPSBgYVtjbGFzcyo9XCJ1c2EtYnV0dG9uXCJdYDtcblxuY29uc3QgdG9nZ2xlQnV0dG9uID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LnRhcmdldC5jbGljaygpO1xufTtcblxuY29uc3QgYW5jaG9yQnV0dG9uID0gYmVoYXZpb3Ioe1xuICBrZXlkb3duOiB7XG4gICAgW0FOQ0hPUl9CVVRUT05dOiBrZXltYXAoe1xuICAgICAgXCIgXCI6IHRvZ2dsZUJ1dHRvbixcbiAgICB9KSxcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuY2hvckJ1dHRvbjtcbiIsImNvbnN0IHNlbGVjdCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zZWxlY3RcIik7XG5jb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IGRlYm91bmNlID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2RlYm91bmNlXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcblxuY29uc3QgQ0hBUkFDVEVSX0NPVU5UX0NMQVNTID0gYCR7UFJFRklYfS1jaGFyYWN0ZXItY291bnRgO1xuY29uc3QgQ0hBUkFDVEVSX0NPVU5UID0gYC4ke0NIQVJBQ1RFUl9DT1VOVF9DTEFTU31gO1xuY29uc3QgRk9STV9HUk9VUF9DTEFTUyA9IGAke1BSRUZJWH0tZm9ybS1ncm91cGA7XG5jb25zdCBGT1JNX0dST1VQX0VSUk9SX0NMQVNTID0gYCR7Rk9STV9HUk9VUF9DTEFTU30tLWVycm9yYDtcbmNvbnN0IEZPUk1fR1JPVVAgPSBgLiR7Rk9STV9HUk9VUF9DTEFTU31gO1xuY29uc3QgTEFCRUxfQ0xBU1MgPSBgJHtQUkVGSVh9LWxhYmVsYDtcbmNvbnN0IExBQkVMX0VSUk9SX0NMQVNTID0gYCR7TEFCRUxfQ0xBU1N9LS1lcnJvcmA7XG5jb25zdCBJTlBVVCA9IGAuJHtQUkVGSVh9LWNoYXJhY3Rlci1jb3VudF9fZmllbGRgO1xuY29uc3QgSU5QVVRfRVJST1JfQ0xBU1MgPSBgJHtQUkVGSVh9LWlucHV0LS1lcnJvcmA7XG5jb25zdCBNRVNTQUdFID0gYC4ke1BSRUZJWH0tY2hhcmFjdGVyLWNvdW50X19tZXNzYWdlYDtcbmNvbnN0IFZBTElEQVRJT05fTUVTU0FHRSA9IFwiVGhlIGNvbnRlbnQgaXMgdG9vIGxvbmcuXCI7XG5jb25zdCBNRVNTQUdFX0lOVkFMSURfQ0xBU1MgPSBgJHtQUkVGSVh9LWNoYXJhY3Rlci1jb3VudF9fc3RhdHVzLS1pbnZhbGlkYDtcbmNvbnN0IFNUQVRVU19NRVNTQUdFX0NMQVNTID0gYCR7Q0hBUkFDVEVSX0NPVU5UX0NMQVNTfV9fc3RhdHVzYDtcbmNvbnN0IFNUQVRVU19NRVNTQUdFX1NSX09OTFlfQ0xBU1MgPSBgJHtDSEFSQUNURVJfQ09VTlRfQ0xBU1N9X19zci1zdGF0dXNgO1xuY29uc3QgU1RBVFVTX01FU1NBR0UgPSBgLiR7U1RBVFVTX01FU1NBR0VfQ0xBU1N9YDtcbmNvbnN0IFNUQVRVU19NRVNTQUdFX1NSX09OTFkgPSBgLiR7U1RBVFVTX01FU1NBR0VfU1JfT05MWV9DTEFTU31gO1xuY29uc3QgREVGQVVMVF9TVEFUVVNfTEFCRUwgPSBgY2hhcmFjdGVycyBhbGxvd2VkYDtcbmNvbnN0IExJTUlUX0VYQ0VFREVEX01FU1NBR0UgPSBcIkNoYXJhY3RlciBsaW1pdCBleGNlZWRlZC5cIjtcbmNvbnN0IFNSX1NUQVRVU19ERUJPVU5DRV9NUyA9IDEyMDA7XG5jb25zdCBBVF9ERUZFUl9NUyA9IDEwMDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByb290LCBmb3JtIGdyb3VwLCBsYWJlbCwgYW5kIG1lc3NhZ2UgZWxlbWVudHMgZm9yIGFuIGNoYXJhY3RlciBjb3VudCBpbnB1dFxuICpcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dEVsIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5wdXQgZWxlbWVudFxuICogQHJldHVybnMge0NoYXJhY3RlckNvdW50RWxlbWVudHN9IGVsZW1lbnRzIFRoZSByb290IGZvcm0gZ3JvdXAsIGxhYmVsLCBhbmQgbWVzc2FnZSBlbGVtZW50LlxuICovXG5jb25zdCBnZXRDaGFyYWN0ZXJDb3VudEVsZW1lbnRzID0gKGlucHV0RWwpID0+IHtcbiAgY29uc3QgY2hhcmFjdGVyQ291bnRFbCA9IGlucHV0RWwuY2xvc2VzdChDSEFSQUNURVJfQ09VTlQpO1xuXG4gIGlmICghY2hhcmFjdGVyQ291bnRFbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtJTlBVVH0gaXMgbWlzc2luZyBvdXRlciAke0NIQVJBQ1RFUl9DT1VOVH1gKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1Hcm91cEVsID0gY2hhcmFjdGVyQ291bnRFbC5xdWVyeVNlbGVjdG9yKEZPUk1fR1JPVVApO1xuICBjb25zdCBsYWJlbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgbGFiZWxbZm9yPVwiJHtpbnB1dEVsLmdldEF0dHJpYnV0ZShcImlkXCIpfVwiXWAsXG4gICk7XG4gIGNvbnN0IG1lc3NhZ2VFbCA9IGNoYXJhY3RlckNvdW50RWwucXVlcnlTZWxlY3RvcihNRVNTQUdFKTtcblxuICBpZiAoIW1lc3NhZ2VFbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtDSEFSQUNURVJfQ09VTlR9IGlzIG1pc3NpbmcgaW5uZXIgJHtNRVNTQUdFfWApO1xuICB9XG5cbiAgcmV0dXJuIHsgY2hhcmFjdGVyQ291bnRFbCwgZm9ybUdyb3VwRWwsIGxhYmVsRWwsIG1lc3NhZ2VFbCB9O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb25maWd1cmVkIG1heGltdW0gY2hhcmFjdGVyIGxlbmd0aCBmb3IgYSBjaGFyYWN0ZXIgY291bnQgcm9vdC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjaGFyYWN0ZXJDb3VudEVsIC0gRGl2IHdpdGggYC51c2EtY2hhcmFjdGVyLWNvdW50YCBjbGFzc1xuICogQHJldHVybnMge251bWJlcn0gVGhlIG1heGltdW0gY2hhcmFjdGVyIGxlbmd0aCwgb3IgTmFOIHdoZW4gbm90IGNvbmZpZ3VyZWRcbiAqL1xuY29uc3QgZ2V0TWF4TGVuZ3RoID0gKGNoYXJhY3RlckNvdW50RWwpID0+XG4gIHBhcnNlSW50KGNoYXJhY3RlckNvdW50RWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1tYXhsZW5ndGhcIiksIDEwKTtcblxuLyoqXG4gKiBNb3ZlIG1heGxlbmd0aCBhdHRyaWJ1dGUgdG8gYSBkYXRhIGF0dHJpYnV0ZSBvbiB1c2EtY2hhcmFjdGVyLWNvdW50XG4gKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0RWwgVGhlIGNoYXJhY3RlciBjb3VudCBpbnB1dCBlbGVtZW50XG4gKi9cbmNvbnN0IHNldERhdGFMZW5ndGggPSAoaW5wdXRFbCkgPT4ge1xuICBjb25zdCB7IGNoYXJhY3RlckNvdW50RWwgfSA9IGdldENoYXJhY3RlckNvdW50RWxlbWVudHMoaW5wdXRFbCk7XG5cbiAgY29uc3QgbWF4bGVuZ3RoID0gaW5wdXRFbC5nZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIik7XG5cbiAgaWYgKCFtYXhsZW5ndGgpIHJldHVybjtcblxuICBpbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZShcIm1heGxlbmd0aFwiKTtcbiAgY2hhcmFjdGVyQ291bnRFbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1heGxlbmd0aFwiLCBtYXhsZW5ndGgpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIGFwcGVuZCBzdGF0dXMgbWVzc2FnZXMgZm9yIHZpc3VhbCBhbmQgc2NyZWVuIHJlYWRlcnNcbiAqXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBjaGFyYWN0ZXJDb3VudEVsIC0gRGl2IHdpdGggYC51c2EtY2hhcmFjdGVyLWNvdW50YCBjbGFzc1xuICogQGRlc2NyaXB0aW9uICBDcmVhdGUgdHdvIHN0YXR1cyBtZXNzYWdlcyBmb3IgbnVtYmVyIG9mIGNoYXJhY3RlcnMgbGVmdDtcbiAqIG9uZSB2aXN1YWwgc3RhdHVzIGFuZCBhbm90aGVyIGZvciBzY3JlZW4gcmVhZGVyc1xuICovXG5jb25zdCBjcmVhdGVTdGF0dXNNZXNzYWdlcyA9IChjaGFyYWN0ZXJDb3VudEVsKSA9PiB7XG4gIGlmIChjaGFyYWN0ZXJDb3VudEVsLnF1ZXJ5U2VsZWN0b3IoU1RBVFVTX01FU1NBR0VfU1JfT05MWSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3JTdGF0dXNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWF4TGVuZ3RoID0gZ2V0TWF4TGVuZ3RoKGNoYXJhY3RlckNvdW50RWwpO1xuICBjb25zdCBkZWZhdWx0TWVzc2FnZSA9IGAke21heExlbmd0aH0gJHtERUZBVUxUX1NUQVRVU19MQUJFTH1gO1xuXG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LmFkZChTVEFUVVNfTUVTU0FHRV9DTEFTUywgXCJ1c2EtaGludFwiKTtcbiAgc3JTdGF0dXNNZXNzYWdlLmNsYXNzTGlzdC5hZGQoU1RBVFVTX01FU1NBR0VfU1JfT05MWV9DTEFTUywgXCJ1c2Etc3Itb25seVwiKTtcblxuICBzdGF0dXNNZXNzYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHRydWUpO1xuXG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBkZWZhdWx0TWVzc2FnZTtcbiAgc3JTdGF0dXNNZXNzYWdlLnRleHRDb250ZW50ID0gZGVmYXVsdE1lc3NhZ2U7XG5cbiAgY2hhcmFjdGVyQ291bnRFbC5hcHBlbmQoc3RhdHVzTWVzc2FnZSwgc3JTdGF0dXNNZXNzYWdlKTtcblxuICAvLyBEZWZlciBhcmlhLWxpdmUgdG8gcHJldmVudCBpT1MgVm9pY2VPdmVyIGZyb20gYW5ub3VuY2luZyBvbiBwYWdlIGxvYWQuXG4gIC8vIEJyb3dzZXJzIHRyZWF0IGluaXRpYWwgY29udGVudCBvZiBhIG5ld2x5LWluc2VydGVkIGFyaWEtbGl2ZSByZWdpb24gYXNcbiAgLy8gYSBsaXZlIHVwZGF0ZS4gQWRkaW5nIHRoZSBhdHRyaWJ1dGUgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgaW4gdGhlIERPTVxuICAvLyBhbmQgYWZ0ZXIgYSBzaG9ydCBkZWxheSBhdm9pZHMgdGhlIGZhbHNlIGFubm91bmNlbWVudC5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc3JTdGF0dXNNZXNzYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBcInBvbGl0ZVwiKTtcbiAgfSwgQVRfREVGRVJfTVMpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIG1lc3NhZ2Ugd2l0aCBob3cgbWFueSBjaGFyYWN0ZXJzIGFyZSBsZWZ0XG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMZW5ndGggLSBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdXNlZFxuICogQHBhcmFtIHtudW1iZXJ9IG1heExlbmd0aCAtIFRoZSB0b3RhbCBudW1iZXIgb2YgY2hhcmFjdGVycyBhbGxvd2VkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHN0cmluZyBkZXNjcmlwdGlvbiBvZiBob3cgbWFueSBjaGFyYWN0ZXJzIGFyZSBsZWZ0XG4gKi9cbmNvbnN0IGdldENvdW50TWVzc2FnZSA9IChjdXJyZW50TGVuZ3RoLCBtYXhMZW5ndGgpID0+IHtcbiAgaWYgKGN1cnJlbnRMZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gYCR7bWF4TGVuZ3RofSAke0RFRkFVTFRfU1RBVFVTX0xBQkVMfWA7XG4gIH1cblxuICBjb25zdCBkaWZmZXJlbmNlID0gTWF0aC5hYnMobWF4TGVuZ3RoIC0gY3VycmVudExlbmd0aCk7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBgY2hhcmFjdGVyJHtkaWZmZXJlbmNlID09PSAxID8gXCJcIiA6IFwic1wifWA7XG4gIGNvbnN0IGd1aWRhbmNlID0gY3VycmVudExlbmd0aCA+IG1heExlbmd0aCA/IFwib3ZlciBsaW1pdFwiIDogXCJsZWZ0XCI7XG5cbiAgcmV0dXJuIGAke2RpZmZlcmVuY2V9ICR7Y2hhcmFjdGVyc30gJHtndWlkYW5jZX1gO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBzY3JlZW4gcmVhZGVyIHN0YXR1cyBtZXNzYWdlIGFuZCBhcmlhLWxpdmUgcG9saXRlbmVzcy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBtc2dFbCAtIFRoZSBzY3JlZW4gcmVhZGVyIHN0YXR1cyBtZXNzYWdlIGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXNNZXNzYWdlIC0gQSBzdHJpbmcgb2YgdGhlIGN1cnJlbnQgY2hhcmFjdGVyIHN0YXR1c1xuICogQHBhcmFtIHtib29sZWFufSBhc3NlcnRpdmUgLSBXaGV0aGVyIHRvIGFubm91bmNlIGFzc2VydGl2ZWx5XG4gKi9cbmNvbnN0IHVwZGF0ZVNyU3RhdHVzID0gKG1zZ0VsLCBzdGF0dXNNZXNzYWdlLCBhc3NlcnRpdmUgPSBmYWxzZSkgPT4ge1xuICBtc2dFbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxpdmVcIiwgYXNzZXJ0aXZlID8gXCJhc3NlcnRpdmVcIiA6IFwicG9saXRlXCIpO1xuICBtc2dFbC50ZXh0Q29udGVudCA9IHN0YXR1c01lc3NhZ2U7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGNoYXJhY3RlciBjb3VudCBzdGF0dXMgZm9yIHNjcmVlbiByZWFkZXJzIGFmdGVyIHR5cGluZyBwYXVzZXMuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbXNnRWwgLSBUaGUgc2NyZWVuIHJlYWRlciBzdGF0dXMgbWVzc2FnZSBlbGVtZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzTWVzc2FnZSAtIEEgc3RyaW5nIG9mIHRoZSBjdXJyZW50IGNoYXJhY3RlciBzdGF0dXNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYXNzZXJ0aXZlIC0gV2hldGhlciB0byBhbm5vdW5jZSBhc3NlcnRpdmVseSB3aGVuIG92ZXIgdGhlIGxpbWl0XG4gKi9cbmNvbnN0IHNyVXBkYXRlU3RhdHVzID0gZGVib3VuY2UodXBkYXRlU3JTdGF0dXMsIFNSX1NUQVRVU19ERUJPVU5DRV9NUyk7XG5cbmNvbnN0IHNyVXBkYXRlU3RhdHVzUmVjb3ZlcnkgPSBkZWJvdW5jZSh1cGRhdGVTclN0YXR1cywgQVRfREVGRVJfTVMpO1xuXG5jb25zdCB2YWxpZGl0eVN5bmNUaW1lcnMgPSBuZXcgV2Vha01hcCgpO1xuXG4vKipcbiAqIERlZmVyIGNvbnN0cmFpbnQgdmFsaWRhdGlvbiB1cGRhdGVzIHNvIFNhZmFyaSBWb2ljZU92ZXIgY2FuIGZpbmlzaCBjaGFyYWN0ZXJcbiAqIGVjaG8gYmVmb3JlIHRoZSBmaWVsZCdzIGludmFsaWQgc3RhdGUgY2hhbmdlcyAod2hpY2ggcmUtcmVhZHMgdGhlIGNvbnRyb2wpLlxuICpcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dEVsXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzT3ZlckxpbWl0XG4gKi9cbmNvbnN0IHNjaGVkdWxlVmFsaWRpdHlTeW5jID0gKGlucHV0RWwsIGlzT3ZlckxpbWl0KSA9PiB7XG4gIHdpbmRvdy5jbGVhclRpbWVvdXQodmFsaWRpdHlTeW5jVGltZXJzLmdldChpbnB1dEVsKSk7XG5cbiAgaWYgKGlzT3ZlckxpbWl0ICYmICFpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgaW5wdXRFbC5zZXRDdXN0b21WYWxpZGl0eShWQUxJREFUSU9OX01FU1NBR0UpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghaXNPdmVyTGltaXQgJiYgaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZSA9PT0gVkFMSURBVElPTl9NRVNTQUdFKSB7XG4gICAgdmFsaWRpdHlTeW5jVGltZXJzLnNldChcbiAgICAgIGlucHV0RWwsXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlID09PSBWQUxJREFUSU9OX01FU1NBR0UpIHtcbiAgICAgICAgICBpbnB1dEVsLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICB9XG4gICAgICB9LCBBVF9ERUZFUl9NUyksXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGNoYXJhY3RlciBjb3VudCBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gT24gaW5wdXQsIGl0IHdpbGwgdXBkYXRlIHZpc3VhbCBzdGF0dXMsIHNjcmVlbnJlYWRlclxuICogc3RhdHVzIGFuZCB1cGRhdGUgaW5wdXQgdmFsaWRhdGlvbiAoaWYgb3ZlciBjaGFyYWN0ZXIgbGVuZ3RoKVxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0RWwgVGhlIGNoYXJhY3RlciBjb3VudCBpbnB1dCBlbGVtZW50XG4gKi9cbmNvbnN0IHVwZGF0ZUNvdW50TWVzc2FnZSA9IChpbnB1dEVsKSA9PiB7XG4gIGNvbnN0IHsgY2hhcmFjdGVyQ291bnRFbCwgbGFiZWxFbCwgZm9ybUdyb3VwRWwgfSA9XG4gICAgZ2V0Q2hhcmFjdGVyQ291bnRFbGVtZW50cyhpbnB1dEVsKTtcbiAgY29uc3QgY3VycmVudExlbmd0aCA9IGlucHV0RWwudmFsdWUubGVuZ3RoO1xuICBjb25zdCBtYXhMZW5ndGggPSBnZXRNYXhMZW5ndGgoY2hhcmFjdGVyQ291bnRFbCk7XG4gIGNvbnN0IHN0YXR1c01lc3NhZ2UgPSBjaGFyYWN0ZXJDb3VudEVsLnF1ZXJ5U2VsZWN0b3IoU1RBVFVTX01FU1NBR0UpO1xuICBjb25zdCBzclN0YXR1c01lc3NhZ2UgPSBjaGFyYWN0ZXJDb3VudEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgU1RBVFVTX01FU1NBR0VfU1JfT05MWSxcbiAgKTtcbiAgY29uc3QgY3VycmVudFN0YXR1c01lc3NhZ2UgPSBnZXRDb3VudE1lc3NhZ2UoY3VycmVudExlbmd0aCwgbWF4TGVuZ3RoKTtcblxuICBpZiAoIW1heExlbmd0aCkgcmV0dXJuO1xuXG4gIGNvbnN0IGlzT3ZlckxpbWl0ID0gY3VycmVudExlbmd0aCA+IG1heExlbmd0aDtcbiAgY29uc3Qgd2FzT3ZlckxpbWl0ID0gaW5wdXRFbC5kYXRhc2V0LmNoYXJhY3RlckNvdW50T3ZlckxpbWl0ID09PSBcInRydWVcIjtcbiAgY29uc3QgY3Jvc3NlZFVuZGVyTGltaXQgPSB3YXNPdmVyTGltaXQgJiYgIWlzT3ZlckxpbWl0O1xuXG4gIHN0YXR1c01lc3NhZ2UudGV4dENvbnRlbnQgPSBjdXJyZW50U3RhdHVzTWVzc2FnZTtcblxuICBpZiAoY3Jvc3NlZFVuZGVyTGltaXQpIHtcbiAgICBzclVwZGF0ZVN0YXR1cy5jYW5jZWwoKTtcbiAgICBzclVwZGF0ZVN0YXR1c1JlY292ZXJ5KHNyU3RhdHVzTWVzc2FnZSwgY3VycmVudFN0YXR1c01lc3NhZ2UpO1xuICB9IGVsc2UgaWYgKGlzT3ZlckxpbWl0KSB7XG4gICAgc3JVcGRhdGVTdGF0dXNSZWNvdmVyeS5jYW5jZWwoKTtcbiAgICBzclVwZGF0ZVN0YXR1cyhcbiAgICAgIHNyU3RhdHVzTWVzc2FnZSxcbiAgICAgIGAke0xJTUlUX0VYQ0VFREVEX01FU1NBR0V9ICR7Y3VycmVudFN0YXR1c01lc3NhZ2V9YCxcbiAgICAgIHRydWUsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBzclVwZGF0ZVN0YXR1c1JlY292ZXJ5LmNhbmNlbCgpO1xuICAgIHNyVXBkYXRlU3RhdHVzKHNyU3RhdHVzTWVzc2FnZSwgY3VycmVudFN0YXR1c01lc3NhZ2UpO1xuICB9XG5cbiAgaW5wdXRFbC5kYXRhc2V0LmNoYXJhY3RlckNvdW50T3ZlckxpbWl0ID0gaXNPdmVyTGltaXQgPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcblxuICBzY2hlZHVsZVZhbGlkaXR5U3luYyhpbnB1dEVsLCBpc092ZXJMaW1pdCk7XG5cbiAgaWYgKGZvcm1Hcm91cEVsKSB7XG4gICAgZm9ybUdyb3VwRWwuY2xhc3NMaXN0LnRvZ2dsZShGT1JNX0dST1VQX0VSUk9SX0NMQVNTLCBpc092ZXJMaW1pdCk7XG4gIH1cblxuICBpZiAobGFiZWxFbCkge1xuICAgIGxhYmVsRWwuY2xhc3NMaXN0LnRvZ2dsZShMQUJFTF9FUlJPUl9DTEFTUywgaXNPdmVyTGltaXQpO1xuICB9XG5cbiAgaW5wdXRFbC5jbGFzc0xpc3QudG9nZ2xlKElOUFVUX0VSUk9SX0NMQVNTLCBpc092ZXJMaW1pdCk7XG4gIHN0YXR1c01lc3NhZ2UuY2xhc3NMaXN0LnRvZ2dsZShNRVNTQUdFX0lOVkFMSURfQ0xBU1MsIGlzT3ZlckxpbWl0KTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBjb21wb25lbnRcbiAqXG4gKiBAZGVzY3JpcHRpb24gT24gaW5pdCB0aGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIGVsZW1lbnRzIGFuZCB1cGRhdGUgYW55XG4gKiBhdHRyaWJ1dGVzIHNvIGl0IGNhbiB0ZWxsIHRoZSB1c2VyIGhvdyBtYW55IGNoYXJhY3RlcnMgYXJlIGxlZnQuXG4gKiBAcGFyYW0gIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0RWwgdGhlIGNvbXBvbmVudHMgaW5wdXRcbiAqL1xuY29uc3QgZW5oYW5jZUNoYXJhY3RlckNvdW50ID0gKGlucHV0RWwpID0+IHtcbiAgaWYgKGlucHV0RWwuZGF0YXNldC5lbmhhbmNlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgY2hhcmFjdGVyQ291bnRFbCwgbWVzc2FnZUVsIH0gPSBnZXRDaGFyYWN0ZXJDb3VudEVsZW1lbnRzKGlucHV0RWwpO1xuXG4gIC8vIEhpZGUgaGludCBhbmQgcmVtb3ZlIGFyaWEtbGl2ZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgbWVzc2FnZUVsLmNsYXNzTGlzdC5hZGQoXCJ1c2Etc3Itb25seVwiKTtcbiAgbWVzc2FnZUVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiKTtcblxuICBzZXREYXRhTGVuZ3RoKGlucHV0RWwpO1xuICBjcmVhdGVTdGF0dXNNZXNzYWdlcyhjaGFyYWN0ZXJDb3VudEVsKTtcblxuICBjb25zdCBtYXhMZW5ndGggPSBnZXRNYXhMZW5ndGgoY2hhcmFjdGVyQ291bnRFbCk7XG4gIGlmIChtYXhMZW5ndGgpIHtcbiAgICBpbnB1dEVsLmRhdGFzZXQuY2hhcmFjdGVyQ291bnRPdmVyTGltaXQgPVxuICAgICAgaW5wdXRFbC52YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGggPyBcInRydWVcIiA6IFwiZmFsc2VcIjtcbiAgfVxuXG4gIGlucHV0RWwuZGF0YXNldC5lbmhhbmNlZCA9IFwidHJ1ZVwiO1xufTtcblxuY29uc3QgY2hhcmFjdGVyQ291bnQgPSBiZWhhdmlvcihcbiAge1xuICAgIGlucHV0OiB7XG4gICAgICBbSU5QVVRdKCkge1xuICAgICAgICB1cGRhdGVDb3VudE1lc3NhZ2UodGhpcyk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpbml0KHJvb3QpIHtcbiAgICAgIHNlbGVjdChJTlBVVCwgcm9vdCkuZm9yRWFjaCgoaW5wdXQpID0+IGVuaGFuY2VDaGFyYWN0ZXJDb3VudChpbnB1dCkpO1xuICAgIH0sXG4gICAgRk9STV9HUk9VUF9FUlJPUl9DTEFTUyxcbiAgICBMQUJFTF9FUlJPUl9DTEFTUyxcbiAgICBJTlBVVF9FUlJPUl9DTEFTUyxcbiAgICBNRVNTQUdFX0lOVkFMSURfQ0xBU1MsXG4gICAgVkFMSURBVElPTl9NRVNTQUdFLFxuICAgIFNUQVRVU19NRVNTQUdFX0NMQVNTLFxuICAgIFNUQVRVU19NRVNTQUdFX1NSX09OTFlfQ0xBU1MsXG4gICAgREVGQVVMVF9TVEFUVVNfTEFCRUwsXG4gICAgTElNSVRfRVhDRUVERURfTUVTU0FHRSxcbiAgICBTUl9TVEFUVVNfREVCT1VOQ0VfTVMsXG4gICAgQVRfREVGRVJfTVMsXG4gICAgY3JlYXRlU3RhdHVzTWVzc2FnZXMsXG4gICAgZ2V0Q291bnRNZXNzYWdlLFxuICAgIHVwZGF0ZUNvdW50TWVzc2FnZSxcbiAgfSxcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcmFjdGVyQ291bnQ7XG4iLCJjb25zdCBrZXltYXAgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMva2V5bWFwXCIpO1xuY29uc3Qgc2VsZWN0T3JNYXRjaGVzID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdC1vci1tYXRjaGVzXCIpO1xuY29uc3QgYmVoYXZpb3IgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvYmVoYXZpb3JcIik7XG5jb25zdCBTYW5pdGl6ZXIgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2FuaXRpemVyXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcbmNvbnN0IHsgQ0xJQ0sgfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9ldmVudHNcIik7XG5cbmNvbnN0IENPTUJPX0JPWF9DTEFTUyA9IGAke1BSRUZJWH0tY29tYm8tYm94YDtcbmNvbnN0IENPTUJPX0JPWF9QUklTVElORV9DTEFTUyA9IGAke0NPTUJPX0JPWF9DTEFTU30tLXByaXN0aW5lYDtcbmNvbnN0IFNFTEVDVF9DTEFTUyA9IGAke0NPTUJPX0JPWF9DTEFTU31fX3NlbGVjdGA7XG5jb25zdCBJTlBVVF9DTEFTUyA9IGAke0NPTUJPX0JPWF9DTEFTU31fX2lucHV0YDtcbmNvbnN0IENMRUFSX0lOUFVUX0JVVFRPTl9DTEFTUyA9IGAke0NPTUJPX0JPWF9DTEFTU31fX2NsZWFyLWlucHV0YDtcbmNvbnN0IENMRUFSX0lOUFVUX0JVVFRPTl9XUkFQUEVSX0NMQVNTID0gYCR7Q0xFQVJfSU5QVVRfQlVUVE9OX0NMQVNTfV9fd3JhcHBlcmA7XG5jb25zdCBJTlBVVF9CVVRUT05fU0VQQVJBVE9SX0NMQVNTID0gYCR7Q09NQk9fQk9YX0NMQVNTfV9faW5wdXQtYnV0dG9uLXNlcGFyYXRvcmA7XG5jb25zdCBUT0dHTEVfTElTVF9CVVRUT05fQ0xBU1MgPSBgJHtDT01CT19CT1hfQ0xBU1N9X190b2dnbGUtbGlzdGA7XG5jb25zdCBUT0dHTEVfTElTVF9CVVRUT05fV1JBUFBFUl9DTEFTUyA9IGAke1RPR0dMRV9MSVNUX0JVVFRPTl9DTEFTU31fX3dyYXBwZXJgO1xuY29uc3QgTElTVF9DTEFTUyA9IGAke0NPTUJPX0JPWF9DTEFTU31fX2xpc3RgO1xuY29uc3QgTElTVF9PUFRJT05fQ0xBU1MgPSBgJHtDT01CT19CT1hfQ0xBU1N9X19saXN0LW9wdGlvbmA7XG5jb25zdCBMSVNUX09QVElPTl9GT0NVU0VEX0NMQVNTID0gYCR7TElTVF9PUFRJT05fQ0xBU1N9LS1mb2N1c2VkYDtcbmNvbnN0IExJU1RfT1BUSU9OX1NFTEVDVEVEX0NMQVNTID0gYCR7TElTVF9PUFRJT05fQ0xBU1N9LS1zZWxlY3RlZGA7XG5jb25zdCBTVEFUVVNfQ0xBU1MgPSBgJHtDT01CT19CT1hfQ0xBU1N9X19zdGF0dXNgO1xuXG5jb25zdCBDT01CT19CT1ggPSBgLiR7Q09NQk9fQk9YX0NMQVNTfWA7XG5jb25zdCBTRUxFQ1QgPSBgLiR7U0VMRUNUX0NMQVNTfWA7XG5jb25zdCBJTlBVVCA9IGAuJHtJTlBVVF9DTEFTU31gO1xuY29uc3QgQ0xFQVJfSU5QVVRfQlVUVE9OID0gYC4ke0NMRUFSX0lOUFVUX0JVVFRPTl9DTEFTU31gO1xuY29uc3QgVE9HR0xFX0xJU1RfQlVUVE9OID0gYC4ke1RPR0dMRV9MSVNUX0JVVFRPTl9DTEFTU31gO1xuY29uc3QgTElTVCA9IGAuJHtMSVNUX0NMQVNTfWA7XG5jb25zdCBMSVNUX09QVElPTiA9IGAuJHtMSVNUX09QVElPTl9DTEFTU31gO1xuY29uc3QgTElTVF9PUFRJT05fRk9DVVNFRCA9IGAuJHtMSVNUX09QVElPTl9GT0NVU0VEX0NMQVNTfWA7XG5jb25zdCBMSVNUX09QVElPTl9TRUxFQ1RFRCA9IGAuJHtMSVNUX09QVElPTl9TRUxFQ1RFRF9DTEFTU31gO1xuY29uc3QgU1RBVFVTID0gYC4ke1NUQVRVU19DTEFTU31gO1xuXG5jb25zdCBERUZBVUxUX0ZJTFRFUiA9IFwiLip7e3F1ZXJ5fX0uKlwiO1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICogc2V0IHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCBhbmQgZGlzcGF0Y2ggYSBjaGFuZ2UgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFNlbGVjdEVsZW1lbnR9IGVsIFRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBuZXcgdmFsdWUgb2YgdGhlIGVsZW1lbnRcbiAqL1xuY29uc3QgY2hhbmdlRWxlbWVudFZhbHVlID0gKGVsLCB2YWx1ZSA9IFwiXCIpID0+IHtcbiAgY29uc3QgZWxlbWVudFRvQ2hhbmdlID0gZWw7XG4gIGVsZW1lbnRUb0NoYW5nZS52YWx1ZSA9IHZhbHVlO1xuXG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIsIHtcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgZGV0YWlsOiB7IHZhbHVlIH0sXG4gIH0pO1xuICBlbGVtZW50VG9DaGFuZ2UuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuXG4vKipcbiAqIFRoZSBlbGVtZW50cyB3aXRoaW4gdGhlIGNvbWJvIGJveC5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IENvbWJvQm94Q29udGV4dFxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY29tYm9Cb3hFbFxuICogQHByb3BlcnR5IHtIVE1MU2VsZWN0RWxlbWVudH0gc2VsZWN0RWxcbiAqIEBwcm9wZXJ0eSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRFbFxuICogQHByb3BlcnR5IHtIVE1MVUxpc3RFbGVtZW50fSBsaXN0RWxcbiAqIEBwcm9wZXJ0eSB7SFRNTERpdkVsZW1lbnR9IHN0YXR1c0VsXG4gKiBAcHJvcGVydHkge0hUTUxMSUVsZW1lbnR9IGZvY3VzZWRPcHRpb25FbFxuICogQHByb3BlcnR5IHtIVE1MTElFbGVtZW50fSBzZWxlY3RlZE9wdGlvbkVsXG4gKiBAcHJvcGVydHkge0hUTUxCdXR0b25FbGVtZW50fSB0b2dnbGVMaXN0QnRuRWxcbiAqIEBwcm9wZXJ0eSB7SFRNTEJ1dHRvbkVsZW1lbnR9IGNsZWFySW5wdXRCdG5FbFxuICogQHByb3BlcnR5IHtib29sZWFufSBpc1ByaXN0aW5lXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRpc2FibGVGaWx0ZXJpbmdcbiAqL1xuXG4vKipcbiAqIEdldCBhbiBvYmplY3Qgb2YgZWxlbWVudHMgYmVsb25naW5nIGRpcmVjdGx5IHRvIHRoZSBnaXZlblxuICogY29tYm8gYm94IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCB0aGUgZWxlbWVudCB3aXRoaW4gdGhlIGNvbWJvIGJveFxuICogQHJldHVybnMge0NvbWJvQm94Q29udGV4dH0gZWxlbWVudHNcbiAqL1xuY29uc3QgZ2V0Q29tYm9Cb3hDb250ZXh0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGNvbWJvQm94RWwgPSBlbC5jbG9zZXN0KENPTUJPX0JPWCk7XG5cbiAgaWYgKCFjb21ib0JveEVsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IGlzIG1pc3Npbmcgb3V0ZXIgJHtDT01CT19CT1h9YCk7XG4gIH1cblxuICBjb25zdCBzZWxlY3RFbCA9IGNvbWJvQm94RWwucXVlcnlTZWxlY3RvcihTRUxFQ1QpO1xuICBjb25zdCBpbnB1dEVsID0gY29tYm9Cb3hFbC5xdWVyeVNlbGVjdG9yKElOUFVUKTtcbiAgY29uc3QgbGlzdEVsID0gY29tYm9Cb3hFbC5xdWVyeVNlbGVjdG9yKExJU1QpO1xuICBjb25zdCBzdGF0dXNFbCA9IGNvbWJvQm94RWwucXVlcnlTZWxlY3RvcihTVEFUVVMpO1xuICBjb25zdCBmb2N1c2VkT3B0aW9uRWwgPSBjb21ib0JveEVsLnF1ZXJ5U2VsZWN0b3IoTElTVF9PUFRJT05fRk9DVVNFRCk7XG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uRWwgPSBjb21ib0JveEVsLnF1ZXJ5U2VsZWN0b3IoTElTVF9PUFRJT05fU0VMRUNURUQpO1xuICBjb25zdCB0b2dnbGVMaXN0QnRuRWwgPSBjb21ib0JveEVsLnF1ZXJ5U2VsZWN0b3IoVE9HR0xFX0xJU1RfQlVUVE9OKTtcbiAgY29uc3QgY2xlYXJJbnB1dEJ0bkVsID0gY29tYm9Cb3hFbC5xdWVyeVNlbGVjdG9yKENMRUFSX0lOUFVUX0JVVFRPTik7XG5cbiAgY29uc3QgaXNQcmlzdGluZSA9IGNvbWJvQm94RWwuY2xhc3NMaXN0LmNvbnRhaW5zKENPTUJPX0JPWF9QUklTVElORV9DTEFTUyk7XG4gIGNvbnN0IGRpc2FibGVGaWx0ZXJpbmcgPSBjb21ib0JveEVsLmRhdGFzZXQuZGlzYWJsZUZpbHRlcmluZyA9PT0gXCJ0cnVlXCI7XG5cbiAgcmV0dXJuIHtcbiAgICBjb21ib0JveEVsLFxuICAgIHNlbGVjdEVsLFxuICAgIGlucHV0RWwsXG4gICAgbGlzdEVsLFxuICAgIHN0YXR1c0VsLFxuICAgIGZvY3VzZWRPcHRpb25FbCxcbiAgICBzZWxlY3RlZE9wdGlvbkVsLFxuICAgIHRvZ2dsZUxpc3RCdG5FbCxcbiAgICBjbGVhcklucHV0QnRuRWwsXG4gICAgaXNQcmlzdGluZSxcbiAgICBkaXNhYmxlRmlsdGVyaW5nLFxuICB9O1xufTtcblxuLyoqXG4gKiBEaXNhYmxlIHRoZSBjb21iby1ib3ggY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNhYmxlID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgaW5wdXRFbCwgdG9nZ2xlTGlzdEJ0bkVsLCBjbGVhcklucHV0QnRuRWwgfSA9IGdldENvbWJvQm94Q29udGV4dChlbCk7XG5cbiAgY2xlYXJJbnB1dEJ0bkVsLmhpZGRlbiA9IHRydWU7XG4gIGNsZWFySW5wdXRCdG5FbC5kaXNhYmxlZCA9IHRydWU7XG4gIHRvZ2dsZUxpc3RCdG5FbC5kaXNhYmxlZCA9IHRydWU7XG4gIGlucHV0RWwuZGlzYWJsZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBDaGVjayBmb3IgYXJpYS1kaXNhYmxlZCBvbiBpbml0aWFsaXphdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbWJvIGJveCBjb21wb25lbnRcbiAqL1xuY29uc3QgYXJpYURpc2FibGUgPSAoZWwpID0+IHtcbiAgY29uc3QgeyBpbnB1dEVsLCB0b2dnbGVMaXN0QnRuRWwsIGNsZWFySW5wdXRCdG5FbCB9ID0gZ2V0Q29tYm9Cb3hDb250ZXh0KGVsKTtcblxuICBjbGVhcklucHV0QnRuRWwuaGlkZGVuID0gdHJ1ZTtcbiAgY2xlYXJJbnB1dEJ0bkVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gIHRvZ2dsZUxpc3RCdG5FbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIsIHRydWUpO1xuICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0aGUgY29tYm8tYm94IGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbWJvIGJveCBjb21wb25lbnRcbiAqL1xuY29uc3QgZW5hYmxlID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgaW5wdXRFbCwgdG9nZ2xlTGlzdEJ0bkVsLCBjbGVhcklucHV0QnRuRWwgfSA9IGdldENvbWJvQm94Q29udGV4dChlbCk7XG5cbiAgY2xlYXJJbnB1dEJ0bkVsLmhpZGRlbiA9IGZhbHNlO1xuICBjbGVhcklucHV0QnRuRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgdG9nZ2xlTGlzdEJ0bkVsLmRpc2FibGVkID0gZmFsc2U7XG4gIGlucHV0RWwuZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRW5oYW5jZSBhIHNlbGVjdCBlbGVtZW50IGludG8gYSBjb21ibyBib3ggY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IF9jb21ib0JveEVsIFRoZSBpbml0aWFsIGVsZW1lbnQgb2YgdGhlIGNvbWJvIGJveCBjb21wb25lbnRcbiAqL1xuY29uc3QgZW5oYW5jZUNvbWJvQm94ID0gKF9jb21ib0JveEVsKSA9PiB7XG4gIGNvbnN0IGNvbWJvQm94RWwgPSBfY29tYm9Cb3hFbC5jbG9zZXN0KENPTUJPX0JPWCk7XG5cbiAgaWYgKGNvbWJvQm94RWwuZGF0YXNldC5lbmhhbmNlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHNlbGVjdEVsID0gY29tYm9Cb3hFbC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xuXG4gIGlmICghc2VsZWN0RWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7Q09NQk9fQk9YfSBpcyBtaXNzaW5nIGlubmVyIHNlbGVjdGApO1xuICB9XG5cbiAgY29uc3Qgc2VsZWN0SWQgPSBzZWxlY3RFbC5pZDtcbiAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3NlbGVjdElkfVwiXWApO1xuICBjb25zdCBsaXN0SWQgPSBgJHtzZWxlY3RJZH0tLWxpc3RgO1xuICBjb25zdCBsaXN0SWRMYWJlbCA9IGAke3NlbGVjdElkfS1sYWJlbGA7XG4gIGNvbnN0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzID0gW107XG4gIGNvbnN0IHsgZGVmYXVsdFZhbHVlIH0gPSBjb21ib0JveEVsLmRhdGFzZXQ7XG4gIGNvbnN0IHsgcGxhY2Vob2xkZXIgfSA9IGNvbWJvQm94RWwuZGF0YXNldDtcbiAgbGV0IHNlbGVjdGVkT3B0aW9uO1xuXG4gIGlmIChwbGFjZWhvbGRlcikge1xuICAgIGFkZGl0aW9uYWxBdHRyaWJ1dGVzLnB1c2goeyBwbGFjZWhvbGRlciB9KTtcbiAgfVxuXG4gIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2VsZWN0RWwub3B0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3Qgb3B0aW9uRWwgPSBzZWxlY3RFbC5vcHRpb25zW2ldO1xuXG4gICAgICBpZiAob3B0aW9uRWwudmFsdWUgPT09IGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbkVsO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhyb3cgZXJyb3IgaWYgY29tYm9ib3ggaXMgbWlzc2luZyBhIGxhYmVsIG9yIGxhYmVsIGlzIG1pc3NpbmdcbiAgICogYGZvcmAgYXR0cmlidXRlLiBPdGhlcndpc2UsIHNldCB0aGUgSUQgdG8gbWF0Y2ggdGhlIDx1bD4gYXJpYS1sYWJlbGxlZGJ5XG4gICAqL1xuICBpZiAoIXNlbGVjdExhYmVsIHx8ICFzZWxlY3RMYWJlbC5tYXRjaGVzKGBsYWJlbFtmb3I9XCIke3NlbGVjdElkfVwiXWApKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYCR7Q09NQk9fQk9YfSBmb3IgJHtzZWxlY3RJZH0gaXMgZWl0aGVyIG1pc3NpbmcgYSBsYWJlbCBvciBhIFwiZm9yXCIgYXR0cmlidXRlYCxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3RJZExhYmVsKTtcbiAgfVxuXG4gIHNlbGVjdExhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGxpc3RJZExhYmVsKTtcbiAgc2VsZWN0RWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICBzZWxlY3RFbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICBzZWxlY3RFbC5jbGFzc0xpc3QuYWRkKFwidXNhLXNyLW9ubHlcIiwgU0VMRUNUX0NMQVNTKTtcbiAgc2VsZWN0RWwuaWQgPSBcIlwiO1xuICBzZWxlY3RFbC52YWx1ZSA9IFwiXCI7XG5cbiAgW1wicmVxdWlyZWRcIiwgXCJhcmlhLWxhYmVsXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBpZiAoc2VsZWN0RWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdEVsLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIGFkZGl0aW9uYWxBdHRyaWJ1dGVzLnB1c2goeyBbbmFtZV06IHZhbHVlIH0pO1xuICAgICAgc2VsZWN0RWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gc2FuaXRpemUgZG9lc24ndCBsaWtlIGZ1bmN0aW9ucyBpbiB0ZW1wbGF0ZSBsaXRlcmFsc1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgc2VsZWN0SWQpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLW93bnNcIiwgbGlzdElkKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiLCBsaXN0SWQpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWF1dG9jb21wbGV0ZVwiLCBcImxpc3RcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgXCJvZmZcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgSU5QVVRfQ0xBU1MpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImNvbWJvYm94XCIpO1xuICBhZGRpdGlvbmFsQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PlxuICAgIE9iamVjdC5rZXlzKGF0dHIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBTYW5pdGl6ZXIuZXNjYXBlSFRNTGAke2F0dHJba2V5XX1gO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pLFxuICApO1xuXG4gIGNvbWJvQm94RWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGlucHV0KTtcblxuICBjb21ib0JveEVsLmluc2VydEFkamFjZW50SFRNTChcbiAgICBcImJlZm9yZWVuZFwiLFxuICAgIFNhbml0aXplci5lc2NhcGVIVE1MYFxuICAgIDxzcGFuIGNsYXNzPVwiJHtDTEVBUl9JTlBVVF9CVVRUT05fV1JBUFBFUl9DTEFTU31cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiJHtDTEVBUl9JTlBVVF9CVVRUT05fQ0xBU1N9XCIgYXJpYS1sYWJlbD1cIkNsZWFyIHRoZSBzZWxlY3QgY29udGVudHNcIj4mbmJzcDs8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHtJTlBVVF9CVVRUT05fU0VQQVJBVE9SX0NMQVNTfVwiPiZuYnNwOzwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiJHtUT0dHTEVfTElTVF9CVVRUT05fV1JBUFBFUl9DTEFTU31cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cIiR7VE9HR0xFX0xJU1RfQlVUVE9OX0NMQVNTfVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlIGRyb3Bkb3duIGxpc3RcIj4mbmJzcDs8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDx1bFxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgaWQ9XCIke2xpc3RJZH1cIlxuICAgICAgICBjbGFzcz1cIiR7TElTVF9DTEFTU31cIlxuICAgICAgICByb2xlPVwibGlzdGJveFwiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIiR7bGlzdElkTGFiZWx9XCJcbiAgICAgICAgaGlkZGVuPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgY2xhc3M9XCIke1NUQVRVU19DTEFTU30gdXNhLXNyLW9ubHlcIiByb2xlPVwic3RhdHVzXCI+PC9kaXY+YCxcbiAgKTtcblxuICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICBjb25zdCB7IGlucHV0RWwgfSA9IGdldENvbWJvQm94Q29udGV4dChjb21ib0JveEVsKTtcbiAgICBjaGFuZ2VFbGVtZW50VmFsdWUoc2VsZWN0RWwsIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcbiAgICBjaGFuZ2VFbGVtZW50VmFsdWUoaW5wdXRFbCwgc2VsZWN0ZWRPcHRpb24udGV4dCk7XG4gICAgY29tYm9Cb3hFbC5jbGFzc0xpc3QuYWRkKENPTUJPX0JPWF9QUklTVElORV9DTEFTUyk7XG4gIH1cblxuICBpZiAoc2VsZWN0RWwuZGlzYWJsZWQpIHtcbiAgICBkaXNhYmxlKGNvbWJvQm94RWwpO1xuICAgIHNlbGVjdEVsLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBpZiAoc2VsZWN0RWwuaGFzQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKSkge1xuICAgIGFyaWFEaXNhYmxlKGNvbWJvQm94RWwpO1xuICAgIHNlbGVjdEVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG4gIH1cblxuICBjb21ib0JveEVsLmRhdGFzZXQuZW5oYW5jZWQgPSBcInRydWVcIjtcbn07XG5cbi8qKlxuICogTWFuYWdlIHRoZSBmb2N1c2VkIGVsZW1lbnQgd2l0aGluIHRoZSBsaXN0IG9wdGlvbnMgd2hlblxuICogbmF2aWdhdGluZyB2aWEga2V5Ym9hcmQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gYW5jaG9yIGVsZW1lbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBuZXh0RWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbWJvIGJveCBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIG9wdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5za2lwRm9jdXMgc2tpcCBmb2N1cyBvZiBoaWdobGlnaHRlZCBpdGVtXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucHJldmVudFNjcm9sbCBzaG91bGQgc2tpcCBwcm9jZWR1cmUgdG8gc2Nyb2xsIHRvIGVsZW1lbnRcbiAqL1xuY29uc3QgaGlnaGxpZ2h0T3B0aW9uID0gKGVsLCBuZXh0RWwsIHsgc2tpcEZvY3VzLCBwcmV2ZW50U2Nyb2xsIH0gPSB7fSkgPT4ge1xuICBjb25zdCB7IGlucHV0RWwsIGxpc3RFbCwgZm9jdXNlZE9wdGlvbkVsIH0gPSBnZXRDb21ib0JveENvbnRleHQoZWwpO1xuXG4gIGlmIChmb2N1c2VkT3B0aW9uRWwpIHtcbiAgICBmb2N1c2VkT3B0aW9uRWwuY2xhc3NMaXN0LnJlbW92ZShMSVNUX09QVElPTl9GT0NVU0VEX0NMQVNTKTtcbiAgICBmb2N1c2VkT3B0aW9uRWwuc2V0QXR0cmlidXRlKFwidGFiSW5kZXhcIiwgXCItMVwiKTtcbiAgfVxuXG4gIGlmIChuZXh0RWwpIHtcbiAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiLCBuZXh0RWwuaWQpO1xuICAgIG5leHRFbC5zZXRBdHRyaWJ1dGUoXCJ0YWJJbmRleFwiLCBcIjBcIik7XG4gICAgbmV4dEVsLmNsYXNzTGlzdC5hZGQoTElTVF9PUFRJT05fRk9DVVNFRF9DTEFTUyk7XG5cbiAgICBpZiAoIXByZXZlbnRTY3JvbGwpIHtcbiAgICAgIGNvbnN0IG9wdGlvbkJvdHRvbSA9IG5leHRFbC5vZmZzZXRUb3AgKyBuZXh0RWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgY3VycmVudEJvdHRvbSA9IGxpc3RFbC5zY3JvbGxUb3AgKyBsaXN0RWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBpZiAob3B0aW9uQm90dG9tID4gY3VycmVudEJvdHRvbSkge1xuICAgICAgICBsaXN0RWwuc2Nyb2xsVG9wID0gb3B0aW9uQm90dG9tIC0gbGlzdEVsLm9mZnNldEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRFbC5vZmZzZXRUb3AgPCBsaXN0RWwuc2Nyb2xsVG9wKSB7XG4gICAgICAgIGxpc3RFbC5zY3JvbGxUb3AgPSBuZXh0RWwub2Zmc2V0VG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2tpcEZvY3VzKSB7XG4gICAgICBuZXh0RWwuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiLCBcIlwiKTtcbiAgICBpbnB1dEVsLmZvY3VzKCk7XG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSBkeW5hbWljIHJlZ3VsYXIgZXhwcmVzc2lvbiBiYXNlZCBvZmYgb2YgYSByZXBsYWNlYWJsZSBhbmQgcG9zc2libHkgZmlsdGVyZWQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgVGhlIHZhbHVlIHRvIHVzZSBpbiB0aGUgcmVndWxhciBleHByZXNzaW9uXG4gKiBAcGFyYW0ge29iamVjdH0gZXh0cmFzIEFuIG9iamVjdCBvZiByZWd1bGFyIGV4cHJlc3Npb25zIHRvIHJlcGxhY2UgYW5kIGZpbHRlciB0aGUgcXVlcnlcbiAqL1xuY29uc3QgZ2VuZXJhdGVEeW5hbWljUmVnRXhwID0gKGZpbHRlciwgcXVlcnkgPSBcIlwiLCBleHRyYXMgPSB7fSkgPT4ge1xuICBjb25zdCBlc2NhcGVSZWdFeHAgPSAodGV4dCkgPT5cbiAgICB0ZXh0LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCBcIlxcXFwkJlwiKTtcblxuICBsZXQgZmluZCA9IGZpbHRlci5yZXBsYWNlKC97eyguKj8pfX0vZywgKG0sICQxKSA9PiB7XG4gICAgY29uc3Qga2V5ID0gJDEudHJpbSgpO1xuICAgIGNvbnN0IHF1ZXJ5RmlsdGVyID0gZXh0cmFzW2tleV07XG4gICAgaWYgKGtleSAhPT0gXCJxdWVyeVwiICYmIHF1ZXJ5RmlsdGVyKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gbmV3IFJlZ0V4cChxdWVyeUZpbHRlciwgXCJpXCIpO1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHF1ZXJ5Lm1hdGNoKG1hdGNoZXIpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gZXNjYXBlUmVnRXhwKG1hdGNoZXNbMV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIGVzY2FwZVJlZ0V4cChxdWVyeSk7XG4gIH0pO1xuXG4gIGZpbmQgPSBgXig/OiR7ZmluZH0pJGA7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoZmluZCwgXCJpXCIpO1xufTtcblxuLyoqXG4gKiBEaXNwbGF5IHRoZSBvcHRpb24gbGlzdCBvZiBhIGNvbWJvIGJveCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbWJvIGJveCBjb21wb25lbnRcbiAqL1xuY29uc3QgZGlzcGxheUxpc3QgPSAoZWwpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbWJvQm94RWwsXG4gICAgc2VsZWN0RWwsXG4gICAgaW5wdXRFbCxcbiAgICBsaXN0RWwsXG4gICAgc3RhdHVzRWwsXG4gICAgaXNQcmlzdGluZSxcbiAgICBkaXNhYmxlRmlsdGVyaW5nLFxuICB9ID0gZ2V0Q29tYm9Cb3hDb250ZXh0KGVsKTtcbiAgbGV0IHNlbGVjdGVkSXRlbUlkO1xuICBsZXQgZmlyc3RGb3VuZElkO1xuXG4gIGNvbnN0IGxpc3RPcHRpb25CYXNlSWQgPSBgJHtsaXN0RWwuaWR9LS1vcHRpb24tYDtcblxuICBjb25zdCBpbnB1dFZhbHVlID0gKGlucHV0RWwudmFsdWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgZmlsdGVyID0gY29tYm9Cb3hFbC5kYXRhc2V0LmZpbHRlciB8fCBERUZBVUxUX0ZJTFRFUjtcbiAgY29uc3QgcmVnZXggPSBnZW5lcmF0ZUR5bmFtaWNSZWdFeHAoZmlsdGVyLCBpbnB1dFZhbHVlLCBjb21ib0JveEVsLmRhdGFzZXQpO1xuXG4gIGxldCBvcHRpb25zID0gW107XG4gIGNvbnN0IG9wdGlvbnNTdGFydHNXaXRoID0gW107XG4gIGNvbnN0IG9wdGlvbnNDb250YWlucyA9IFtdO1xuICBjb25zdCBvcHRpb25MaXN0ID0gWy4uLnNlbGVjdEVsLm9wdGlvbnNdO1xuXG4gIC8qKlxuICAgKiBCdWlsZHMgYW5kIHNvcnRzIG9wdGlvbnMgYXJyYXkuXG4gICAqXG4gICAqIE9wdGlvbiBwYXJhbSBpcyBwYXNzZWQgdGhyb3VnaCByZWdleCB0ZXN0IGJlZm9yZSBwYXNzaW5nIGludG8gdGhpcyBmdW5jdGlvbi5cbiAgICogV2hlbiBmaWx0ZXJpbmcgaXMgZW5hYmxlZCwgdGhlIGFycmF5IHdpbGwgYmUgc29ydGVkIGJ5IG9wdGlvbnMgdGhhdCBzdGFydCB3aXRoIHRoZSBxdWVyeSwgZm9sbG93ZWQgYnlcbiAgICogb3B0aW9ucyB0aGF0IGNvbnRhaW4gdGhlIHF1ZXJ5LlxuICAgKiBXaGVuIGZpbHRlcmluZyBpcyBkaXNhYmxlZCwgYWxsIG9wdGlvbnMgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgYXJyYXkgdW5zb3J0ZWQuXG4gICAqXG4gICAqIFRoZXNlIGFycmF5IGl0ZW1zIHdpbGwgcG9wdWxhdGUgdGhlIGxpc3QgdGhhdCBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgYWZ0ZXIgYSBzZWFyY2ggcXVlcnkgaXMgZW50ZXJlZC5cbiAgICogQXJyYXkgYXR0cmlidXRlcyBhcmUgYWxzbyB1c2VkIHRvIHNldCBvcHRpb24gSURzIGFuZCBhcmlhLXNldHNpemUgYXR0cmlidXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MT3B0aW9uRWxlbWVudH0gb3B0aW9uIC0gT3B0aW9uIGVsZW1lbnQgZnJvbSBzZWxlY3QgYXJyYXlcbiAgICovXG4gIGNvbnN0IGJ1aWxkT3B0aW9uc0FycmF5ID0gKG9wdGlvbikgPT4ge1xuICAgIGlmIChkaXNhYmxlRmlsdGVyaW5nIHx8IGlzUHJpc3RpbmUpIHtcbiAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hdGNoU3RhcnRzV2l0aCA9IG9wdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChpbnB1dFZhbHVlKTtcblxuICAgIGlmIChtYXRjaFN0YXJ0c1dpdGgpIHtcbiAgICAgIG9wdGlvbnNTdGFydHNXaXRoLnB1c2gob3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uc0NvbnRhaW5zLnB1c2gob3B0aW9uKTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gWy4uLm9wdGlvbnNTdGFydHNXaXRoLCAuLi5vcHRpb25zQ29udGFpbnNdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb21wYXJlcyBvcHRpb24gdGV4dCB0byBxdWVyeSB1c2luZyBnZW5lcmF0ZWQgcmVnZXggZmlsdGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxPcHRpb25FbGVtZW50fSBvcHRpb25cbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSB3aGVuIG9wdGlvbiB0ZXh0IG1hdGNoZXMgdXNlciBpbnB1dCBxdWVyeS5cbiAgICovXG4gIGNvbnN0IG9wdGlvbk1hdGNoZXNRdWVyeSA9IChvcHRpb24pID0+IHJlZ2V4LnRlc3Qob3B0aW9uLnRleHQpO1xuXG4gIC8qKlxuICAgKiBMb2dpYyBjaGVjayB0byBkZXRlcm1pbmUgaWYgb3B0aW9ucyBhcnJheSBuZWVkcyB0byBiZSB1cGRhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxPcHRpb25FbGVtZW50fSBvcHRpb25cbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSB3aGVuIG9wdGlvbiBoYXMgdmFsdWUgJiYgaWYgZmlsdGVyaW5nIGlzIGRpc2FibGVkLCBjb21ibyBib3ggaGFzIGFuIGFjdGl2ZSBzZWxlY3Rpb24sXG4gICAqIHRoZXJlIGlzIG5vIGlucHV0VmFsdWUsIG9yIGlmIG9wdGlvbiBtYXRjaGVzIHVzZXIgcXVlcnlcbiAgICovXG4gIGNvbnN0IGFycmF5TmVlZHNVcGRhdGUgPSAob3B0aW9uKSA9PlxuICAgIG9wdGlvbi52YWx1ZSAmJlxuICAgIChkaXNhYmxlRmlsdGVyaW5nIHx8XG4gICAgICBpc1ByaXN0aW5lIHx8XG4gICAgICAhaW5wdXRWYWx1ZSB8fFxuICAgICAgb3B0aW9uTWF0Y2hlc1F1ZXJ5KG9wdGlvbikpO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgZmlyc3RGb3VuZElkIHNob3VsZCBiZSBhc3NpZ25lZCwgd2hpY2ggaXMgdGhlbiB1c2VkIHRvIHNldCBpdGVtVG9Gb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MT3B0aW9uRWxlbWVudH0gb3B0aW9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIGZpbHRlcmluZyBpcyBkaXNhYmxlZCwgbm8gZmlyc3RGb3VuZElkIGlzIGFzc2lnbmVkLCBhbmQgdGhlIG9wdGlvbiBtYXRjaGVzIHRoZSBxdWVyeS5cbiAgICovXG4gIGNvbnN0IGlzRmlyc3RNYXRjaCA9IChvcHRpb24pID0+XG4gICAgZGlzYWJsZUZpbHRlcmluZyAmJiAhZmlyc3RGb3VuZElkICYmIG9wdGlvbk1hdGNoZXNRdWVyeShvcHRpb24pO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgaXNDdXJyZW50U2VsZWN0aW9uIHNob3VsZCBiZSBhc3NpZ25lZCwgd2hpY2ggaXMgdGhlbiB1c2VkIHRvIHNldCBpdGVtVG9Gb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MT3B0aW9uRWxlbWVudH0gb3B0aW9uXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIFJldHVybnMgdHJ1ZSBpZiBvcHRpb24udmFsdWUgbWF0Y2hlcyBzZWxlY3RFbC52YWx1ZS5cbiAgICovXG4gIGNvbnN0IGlzQ3VycmVudFNlbGVjdGlvbiA9IChvcHRpb24pID0+XG4gICAgc2VsZWN0RWwudmFsdWUgJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3RFbC52YWx1ZTtcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBhcnJheSBvZiBvcHRpb25zIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZCBvbiB0aGUgcGFnZS5cbiAgICogQXNzaWduIGFuIElEIHRvIGVhY2ggZGlzcGxheWVkIG9wdGlvbi5cbiAgICogSWRlbnRpZnkgYW5kIGFzc2lnbiB0aGUgb3B0aW9uIHRoYXQgc2hvdWxkIHJlY2VpdmUgZm9jdXMuXG4gICAqL1xuICBvcHRpb25MaXN0LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGlmIChhcnJheU5lZWRzVXBkYXRlKG9wdGlvbikpIHtcbiAgICAgIGJ1aWxkT3B0aW9uc0FycmF5KG9wdGlvbik7XG5cbiAgICAgIGNvbnN0IG9wdGlvbklkID0gYCR7bGlzdE9wdGlvbkJhc2VJZH0ke29wdGlvbnMuaW5kZXhPZihvcHRpb24pfWA7XG5cbiAgICAgIGlmIChpc0ZpcnN0TWF0Y2gob3B0aW9uKSkge1xuICAgICAgICBmaXJzdEZvdW5kSWQgPSBvcHRpb25JZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ3VycmVudFNlbGVjdGlvbihvcHRpb24pKSB7XG4gICAgICAgIHNlbGVjdGVkSXRlbUlkID0gb3B0aW9uSWQ7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBudW1PcHRpb25zID0gb3B0aW9ucy5sZW5ndGg7XG4gIGNvbnN0IG9wdGlvbkh0bWwgPSBvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbklkID0gYCR7bGlzdE9wdGlvbkJhc2VJZH0ke2luZGV4fWA7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtMSVNUX09QVElPTl9DTEFTU107XG4gICAgbGV0IHRhYmluZGV4ID0gXCItMVwiO1xuICAgIGxldCBhcmlhU2VsZWN0ZWQgPSBcImZhbHNlXCI7XG5cbiAgICBpZiAob3B0aW9uSWQgPT09IHNlbGVjdGVkSXRlbUlkKSB7XG4gICAgICBjbGFzc2VzLnB1c2goTElTVF9PUFRJT05fU0VMRUNURURfQ0xBU1MsIExJU1RfT1BUSU9OX0ZPQ1VTRURfQ0xBU1MpO1xuICAgICAgdGFiaW5kZXggPSBcIjBcIjtcbiAgICAgIGFyaWFTZWxlY3RlZCA9IFwidHJ1ZVwiO1xuICAgIH1cblxuICAgIGlmICghc2VsZWN0ZWRJdGVtSWQgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIGNsYXNzZXMucHVzaChMSVNUX09QVElPTl9GT0NVU0VEX0NMQVNTKTtcbiAgICAgIHRhYmluZGV4ID0gXCIwXCI7XG4gICAgfVxuXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNldHNpemVcIiwgb3B0aW9ucy5sZW5ndGgpO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcImFyaWEtcG9zaW5zZXRcIiwgaW5kZXggKyAxKTtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGFyaWFTZWxlY3RlZCk7XG4gICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgb3B0aW9uSWQpO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzZXMuam9pbihcIiBcIikpO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIHRhYmluZGV4KTtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwib3B0aW9uXCIpO1xuICAgIGxpLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgb3B0aW9uLnZhbHVlKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0O1xuXG4gICAgcmV0dXJuIGxpO1xuICB9KTtcblxuICBjb25zdCBub1Jlc3VsdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIG5vUmVzdWx0cy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHtMSVNUX09QVElPTl9DTEFTU30tLW5vLXJlc3VsdHNgKTtcbiAgbm9SZXN1bHRzLnRleHRDb250ZW50ID0gXCJObyByZXN1bHRzIGZvdW5kXCI7XG5cbiAgbGlzdEVsLmhpZGRlbiA9IGZhbHNlO1xuXG4gIGlmIChudW1PcHRpb25zKSB7XG4gICAgbGlzdEVsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgb3B0aW9uSHRtbC5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgbGlzdEVsLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBpdGVtKSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGxpc3RFbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxpc3RFbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgbm9SZXN1bHRzKTtcbiAgfVxuXG4gIGlucHV0RWwuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG5cbiAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBudW1PcHRpb25zXG4gICAgPyBgJHtudW1PcHRpb25zfSByZXN1bHQke251bU9wdGlvbnMgPiAxID8gXCJzXCIgOiBcIlwifSBhdmFpbGFibGUuYFxuICAgIDogXCJObyByZXN1bHRzLlwiO1xuXG4gIGxldCBpdGVtVG9Gb2N1cztcblxuICBpZiAoaXNQcmlzdGluZSAmJiBzZWxlY3RlZEl0ZW1JZCkge1xuICAgIGl0ZW1Ub0ZvY3VzID0gbGlzdEVsLnF1ZXJ5U2VsZWN0b3IoYCMke3NlbGVjdGVkSXRlbUlkfWApO1xuICB9IGVsc2UgaWYgKGRpc2FibGVGaWx0ZXJpbmcgJiYgZmlyc3RGb3VuZElkKSB7XG4gICAgaXRlbVRvRm9jdXMgPSBsaXN0RWwucXVlcnlTZWxlY3RvcihgIyR7Zmlyc3RGb3VuZElkfWApO1xuICB9XG5cbiAgaWYgKGl0ZW1Ub0ZvY3VzKSB7XG4gICAgaGlnaGxpZ2h0T3B0aW9uKGxpc3RFbCwgaXRlbVRvRm9jdXMsIHtcbiAgICAgIHNraXBGb2N1czogdHJ1ZSxcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBIaWRlIHRoZSBvcHRpb24gbGlzdCBvZiBhIGNvbWJvIGJveCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGNvbWJvIGJveCBjb21wb25lbnRcbiAqL1xuY29uc3QgaGlkZUxpc3QgPSAoZWwpID0+IHtcbiAgY29uc3QgeyBpbnB1dEVsLCBsaXN0RWwsIHN0YXR1c0VsLCBmb2N1c2VkT3B0aW9uRWwgfSA9IGdldENvbWJvQm94Q29udGV4dChlbCk7XG5cbiAgc3RhdHVzRWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICBpbnB1dEVsLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgaW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWFjdGl2ZWRlc2NlbmRhbnRcIiwgXCJcIik7XG5cbiAgaWYgKGZvY3VzZWRPcHRpb25FbCkge1xuICAgIGZvY3VzZWRPcHRpb25FbC5jbGFzc0xpc3QucmVtb3ZlKExJU1RfT1BUSU9OX0ZPQ1VTRURfQ0xBU1MpO1xuICB9XG5cbiAgbGlzdEVsLnNjcm9sbFRvcCA9IDA7XG4gIGxpc3RFbC5oaWRkZW4gPSB0cnVlO1xufTtcblxuLyoqXG4gKiBTZWxlY3QgYW4gb3B0aW9uIGxpc3Qgb2YgdGhlIGNvbWJvIGJveCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbGlzdE9wdGlvbkVsIFRoZSBsaXN0IG9wdGlvbiBiZWluZyBzZWxlY3RlZFxuICovXG5jb25zdCBzZWxlY3RJdGVtID0gKGxpc3RPcHRpb25FbCkgPT4ge1xuICBjb25zdCB7IGNvbWJvQm94RWwsIHNlbGVjdEVsLCBpbnB1dEVsIH0gPSBnZXRDb21ib0JveENvbnRleHQobGlzdE9wdGlvbkVsKTtcblxuICBjaGFuZ2VFbGVtZW50VmFsdWUoc2VsZWN0RWwsIGxpc3RPcHRpb25FbC5kYXRhc2V0LnZhbHVlKTtcbiAgY2hhbmdlRWxlbWVudFZhbHVlKGlucHV0RWwsIGxpc3RPcHRpb25FbC50ZXh0Q29udGVudCk7XG4gIGNvbWJvQm94RWwuY2xhc3NMaXN0LmFkZChDT01CT19CT1hfUFJJU1RJTkVfQ0xBU1MpO1xuICBoaWRlTGlzdChjb21ib0JveEVsKTtcbiAgaW5wdXRFbC5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBDbGVhciB0aGUgaW5wdXQgb2YgdGhlIGNvbWJvIGJveFxuICpcbiAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnR9IGNsZWFyQnV0dG9uRWwgVGhlIGNsZWFyIGlucHV0IGJ1dHRvblxuICovXG5jb25zdCBjbGVhcklucHV0ID0gKGNsZWFyQnV0dG9uRWwpID0+IHtcbiAgY29uc3QgeyBjb21ib0JveEVsLCBsaXN0RWwsIHNlbGVjdEVsLCBpbnB1dEVsIH0gPVxuICAgIGdldENvbWJvQm94Q29udGV4dChjbGVhckJ1dHRvbkVsKTtcbiAgY29uc3QgbGlzdFNob3duID0gIWxpc3RFbC5oaWRkZW47XG5cbiAgaWYgKHNlbGVjdEVsLnZhbHVlKSBjaGFuZ2VFbGVtZW50VmFsdWUoc2VsZWN0RWwpO1xuICBpZiAoaW5wdXRFbC52YWx1ZSkgY2hhbmdlRWxlbWVudFZhbHVlKGlucHV0RWwpO1xuICBjb21ib0JveEVsLmNsYXNzTGlzdC5yZW1vdmUoQ09NQk9fQk9YX1BSSVNUSU5FX0NMQVNTKTtcblxuICBpZiAobGlzdFNob3duKSBkaXNwbGF5TGlzdChjb21ib0JveEVsKTtcbiAgaW5wdXRFbC5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgc2VsZWN0IGJhc2VkIG9mZiBvZiBjdXJyZW50bHkgc2V0IHNlbGVjdCB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50XG4gKi9cbmNvbnN0IHJlc2V0U2VsZWN0aW9uID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgY29tYm9Cb3hFbCwgc2VsZWN0RWwsIGlucHV0RWwgfSA9IGdldENvbWJvQm94Q29udGV4dChlbCk7XG5cbiAgY29uc3Qgc2VsZWN0VmFsdWUgPSBzZWxlY3RFbC52YWx1ZTtcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IChpbnB1dEVsLnZhbHVlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHNlbGVjdFZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNlbGVjdEVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IG9wdGlvbkVsID0gc2VsZWN0RWwub3B0aW9uc1tpXTtcbiAgICAgIGlmIChvcHRpb25FbC52YWx1ZSA9PT0gc2VsZWN0VmFsdWUpIHtcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgIT09IG9wdGlvbkVsLnRleHQpIHtcbiAgICAgICAgICBjaGFuZ2VFbGVtZW50VmFsdWUoaW5wdXRFbCwgb3B0aW9uRWwudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tYm9Cb3hFbC5jbGFzc0xpc3QuYWRkKENPTUJPX0JPWF9QUklTVElORV9DTEFTUyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgIGNoYW5nZUVsZW1lbnRWYWx1ZShpbnB1dEVsKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZWxlY3QgYW4gb3B0aW9uIGxpc3Qgb2YgdGhlIGNvbWJvIGJveCBjb21wb25lbnQgYmFzZWQgb2ZmIG9mXG4gKiBoYXZpbmcgYSBjdXJyZW50IGZvY3VzZWQgbGlzdCBvcHRpb24gb3JcbiAqIGhhdmluZyB0ZXN0IHRoYXQgY29tcGxldGVseSBtYXRjaGVzIGEgbGlzdCBvcHRpb24uXG4gKiBPdGhlcndpc2UgaXQgY2xlYXJzIHRoZSBpbnB1dCBhbmQgc2VsZWN0LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50XG4gKi9cbmNvbnN0IGNvbXBsZXRlU2VsZWN0aW9uID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgY29tYm9Cb3hFbCwgc2VsZWN0RWwsIGlucHV0RWwsIHN0YXR1c0VsIH0gPSBnZXRDb21ib0JveENvbnRleHQoZWwpO1xuXG4gIHN0YXR1c0VsLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zdCBpbnB1dFZhbHVlID0gKGlucHV0RWwudmFsdWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcblxuICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzZWxlY3RFbC5vcHRpb25zLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBvcHRpb25FbCA9IHNlbGVjdEVsLm9wdGlvbnNbaV07XG4gICAgICBpZiAob3B0aW9uRWwudGV4dC50b0xvd2VyQ2FzZSgpID09PSBpbnB1dFZhbHVlKSB7XG4gICAgICAgIGNoYW5nZUVsZW1lbnRWYWx1ZShzZWxlY3RFbCwgb3B0aW9uRWwudmFsdWUpO1xuICAgICAgICBjaGFuZ2VFbGVtZW50VmFsdWUoaW5wdXRFbCwgb3B0aW9uRWwudGV4dCk7XG4gICAgICAgIGNvbWJvQm94RWwuY2xhc3NMaXN0LmFkZChDT01CT19CT1hfUFJJU1RJTkVfQ0xBU1MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXRTZWxlY3Rpb24oY29tYm9Cb3hFbCk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSB0aGUgZXNjYXBlIGV2ZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEFuIGV2ZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudFxuICovXG5jb25zdCBoYW5kbGVFc2NhcGUgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyBjb21ib0JveEVsLCBpbnB1dEVsIH0gPSBnZXRDb21ib0JveENvbnRleHQoZXZlbnQudGFyZ2V0KTtcblxuICBoaWRlTGlzdChjb21ib0JveEVsKTtcbiAgcmVzZXRTZWxlY3Rpb24oY29tYm9Cb3hFbCk7XG4gIGlucHV0RWwuZm9jdXMoKTtcbn07XG5cbi8qKlxuICogSGFuZGxlIHRoZSBkb3duIGV2ZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEFuIGV2ZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudFxuICovXG5jb25zdCBoYW5kbGVEb3duRnJvbUlucHV0ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgY29tYm9Cb3hFbCwgbGlzdEVsIH0gPSBnZXRDb21ib0JveENvbnRleHQoZXZlbnQudGFyZ2V0KTtcblxuICBpZiAobGlzdEVsLmhpZGRlbikge1xuICAgIGRpc3BsYXlMaXN0KGNvbWJvQm94RWwpO1xuICB9XG5cbiAgY29uc3QgbmV4dE9wdGlvbkVsID1cbiAgICBsaXN0RWwucXVlcnlTZWxlY3RvcihMSVNUX09QVElPTl9GT0NVU0VEKSB8fFxuICAgIGxpc3RFbC5xdWVyeVNlbGVjdG9yKExJU1RfT1BUSU9OKTtcblxuICBpZiAobmV4dE9wdGlvbkVsKSB7XG4gICAgaGlnaGxpZ2h0T3B0aW9uKGNvbWJvQm94RWwsIG5leHRPcHRpb25FbCk7XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgdGhlIGVudGVyIGV2ZW50IGZyb20gYW4gaW5wdXQgZWxlbWVudCB3aXRoaW4gdGhlIGNvbWJvIGJveCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBBbiBldmVudCB3aXRoaW4gdGhlIGNvbWJvIGJveCBjb21wb25lbnRcbiAqL1xuY29uc3QgaGFuZGxlRW50ZXJGcm9tSW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyBjb21ib0JveEVsLCBsaXN0RWwgfSA9IGdldENvbWJvQm94Q29udGV4dChldmVudC50YXJnZXQpO1xuICBjb25zdCBsaXN0U2hvd24gPSAhbGlzdEVsLmhpZGRlbjtcblxuICBjb21wbGV0ZVNlbGVjdGlvbihjb21ib0JveEVsKTtcblxuICBpZiAobGlzdFNob3duKSB7XG4gICAgaGlkZUxpc3QoY29tYm9Cb3hFbCk7XG4gIH1cblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgdGhlIGRvd24gZXZlbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgQW4gZXZlbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50XG4gKi9cbmNvbnN0IGhhbmRsZURvd25Gcm9tTGlzdE9wdGlvbiA9IChldmVudCkgPT4ge1xuICBjb25zdCBmb2N1c2VkT3B0aW9uRWwgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IG5leHRPcHRpb25FbCA9IGZvY3VzZWRPcHRpb25FbC5uZXh0U2libGluZztcblxuICBpZiAobmV4dE9wdGlvbkVsKSB7XG4gICAgaGlnaGxpZ2h0T3B0aW9uKGZvY3VzZWRPcHRpb25FbCwgbmV4dE9wdGlvbkVsKTtcbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSB0aGUgc3BhY2UgZXZlbnQgZnJvbSBhbiBsaXN0IG9wdGlvbiBlbGVtZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEFuIGV2ZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudFxuICovXG5jb25zdCBoYW5kbGVTcGFjZUZyb21MaXN0T3B0aW9uID0gKGV2ZW50KSA9PiB7XG4gIHNlbGVjdEl0ZW0oZXZlbnQudGFyZ2V0KTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8qKlxuICogSGFuZGxlIHRoZSBlbnRlciBldmVudCBmcm9tIGxpc3Qgb3B0aW9uIHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEFuIGV2ZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudFxuICovXG5jb25zdCBoYW5kbGVFbnRlckZyb21MaXN0T3B0aW9uID0gKGV2ZW50KSA9PiB7XG4gIHNlbGVjdEl0ZW0oZXZlbnQudGFyZ2V0KTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8qKlxuICogSGFuZGxlIHRoZSB1cCBldmVudCBmcm9tIGxpc3Qgb3B0aW9uIHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEFuIGV2ZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudFxuICovXG5jb25zdCBoYW5kbGVVcEZyb21MaXN0T3B0aW9uID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgY29tYm9Cb3hFbCwgbGlzdEVsLCBmb2N1c2VkT3B0aW9uRWwgfSA9IGdldENvbWJvQm94Q29udGV4dChcbiAgICBldmVudC50YXJnZXQsXG4gICk7XG4gIGNvbnN0IG5leHRPcHRpb25FbCA9IGZvY3VzZWRPcHRpb25FbCAmJiBmb2N1c2VkT3B0aW9uRWwucHJldmlvdXNTaWJsaW5nO1xuICBjb25zdCBsaXN0U2hvd24gPSAhbGlzdEVsLmhpZGRlbjtcblxuICBoaWdobGlnaHRPcHRpb24oY29tYm9Cb3hFbCwgbmV4dE9wdGlvbkVsKTtcblxuICBpZiAobGlzdFNob3duKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlmICghbmV4dE9wdGlvbkVsKSB7XG4gICAgaGlkZUxpc3QoY29tYm9Cb3hFbCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2VsZWN0IGxpc3Qgb3B0aW9uIG9uIHRoZSBtb3VzZW92ZXIgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtNb3VzZUV2ZW50fSBldmVudCBUaGUgbW91c2VvdmVyIGV2ZW50XG4gKiBAcGFyYW0ge0hUTUxMSUVsZW1lbnR9IGxpc3RPcHRpb25FbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgY29tYm8gYm94IGNvbXBvbmVudFxuICovXG5jb25zdCBoYW5kbGVNb3VzZW92ZXIgPSAobGlzdE9wdGlvbkVsKSA9PiB7XG4gIGNvbnN0IGlzQ3VycmVudGx5Rm9jdXNlZCA9IGxpc3RPcHRpb25FbC5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgTElTVF9PUFRJT05fRk9DVVNFRF9DTEFTUyxcbiAgKTtcblxuICBpZiAoaXNDdXJyZW50bHlGb2N1c2VkKSByZXR1cm47XG5cbiAgaGlnaGxpZ2h0T3B0aW9uKGxpc3RPcHRpb25FbCwgbGlzdE9wdGlvbkVsLCB7XG4gICAgcHJldmVudFNjcm9sbDogdHJ1ZSxcbiAgfSk7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSB0aGUgbGlzdCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50XG4gKi9cbmNvbnN0IHRvZ2dsZUxpc3QgPSAoZWwpID0+IHtcbiAgY29uc3QgeyBjb21ib0JveEVsLCBsaXN0RWwsIGlucHV0RWwgfSA9IGdldENvbWJvQm94Q29udGV4dChlbCk7XG5cbiAgaWYgKGxpc3RFbC5oaWRkZW4pIHtcbiAgICBkaXNwbGF5TGlzdChjb21ib0JveEVsKTtcbiAgfSBlbHNlIHtcbiAgICBoaWRlTGlzdChjb21ib0JveEVsKTtcbiAgfVxuXG4gIGlucHV0RWwuZm9jdXMoKTtcbn07XG5cbi8qKlxuICogSGFuZGxlIGNsaWNrIGZyb20gaW5wdXRcbiAqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBjb21ibyBib3ggY29tcG9uZW50XG4gKi9cbmNvbnN0IGhhbmRsZUNsaWNrRnJvbUlucHV0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgY29tYm9Cb3hFbCwgbGlzdEVsIH0gPSBnZXRDb21ib0JveENvbnRleHQoZWwpO1xuXG4gIGlmIChsaXN0RWwuaGlkZGVuKSB7XG4gICAgZGlzcGxheUxpc3QoY29tYm9Cb3hFbCk7XG4gIH1cbn07XG5cbmNvbnN0IGNvbWJvQm94ID0gYmVoYXZpb3IoXG4gIHtcbiAgICBbQ0xJQ0tdOiB7XG4gICAgICBbSU5QVVRdKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgICBoYW5kbGVDbGlja0Zyb21JbnB1dCh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBbVE9HR0xFX0xJU1RfQlVUVE9OXSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcbiAgICAgICAgdG9nZ2xlTGlzdCh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBbTElTVF9PUFRJT05dKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgICBzZWxlY3RJdGVtKHRoaXMpO1xuICAgICAgfSxcbiAgICAgIFtDTEVBUl9JTlBVVF9CVVRUT05dKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuICAgICAgICBjbGVhcklucHV0KHRoaXMpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGZvY3Vzb3V0OiB7XG4gICAgICBbQ09NQk9fQk9YXShldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICByZXNldFNlbGVjdGlvbih0aGlzKTtcbiAgICAgICAgICBoaWRlTGlzdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGtleWRvd246IHtcbiAgICAgIFtDT01CT19CT1hdOiBrZXltYXAoe1xuICAgICAgICBFc2NhcGU6IGhhbmRsZUVzY2FwZSxcbiAgICAgIH0pLFxuICAgICAgW0lOUFVUXToga2V5bWFwKHtcbiAgICAgICAgRW50ZXI6IGhhbmRsZUVudGVyRnJvbUlucHV0LFxuICAgICAgICBBcnJvd0Rvd246IGhhbmRsZURvd25Gcm9tSW5wdXQsXG4gICAgICAgIERvd246IGhhbmRsZURvd25Gcm9tSW5wdXQsXG4gICAgICB9KSxcbiAgICAgIFtMSVNUX09QVElPTl06IGtleW1hcCh7XG4gICAgICAgIEFycm93VXA6IGhhbmRsZVVwRnJvbUxpc3RPcHRpb24sXG4gICAgICAgIFVwOiBoYW5kbGVVcEZyb21MaXN0T3B0aW9uLFxuICAgICAgICBBcnJvd0Rvd246IGhhbmRsZURvd25Gcm9tTGlzdE9wdGlvbixcbiAgICAgICAgRG93bjogaGFuZGxlRG93bkZyb21MaXN0T3B0aW9uLFxuICAgICAgICBFbnRlcjogaGFuZGxlRW50ZXJGcm9tTGlzdE9wdGlvbixcbiAgICAgICAgXCIgXCI6IGhhbmRsZVNwYWNlRnJvbUxpc3RPcHRpb24sXG4gICAgICAgIFwiU2hpZnQrVGFiXCI6IG5vb3AsXG4gICAgICB9KSxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBbSU5QVVRdKCkge1xuICAgICAgICBjb25zdCBjb21ib0JveEVsID0gdGhpcy5jbG9zZXN0KENPTUJPX0JPWCk7XG4gICAgICAgIGNvbWJvQm94RWwuY2xhc3NMaXN0LnJlbW92ZShDT01CT19CT1hfUFJJU1RJTkVfQ0xBU1MpO1xuICAgICAgICBkaXNwbGF5TGlzdCh0aGlzKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtb3VzZW92ZXI6IHtcbiAgICAgIFtMSVNUX09QVElPTl0oKSB7XG4gICAgICAgIGhhbmRsZU1vdXNlb3Zlcih0aGlzKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGluaXQocm9vdCkge1xuICAgICAgc2VsZWN0T3JNYXRjaGVzKENPTUJPX0JPWCwgcm9vdCkuZm9yRWFjaCgoY29tYm9Cb3hFbCkgPT4ge1xuICAgICAgICBlbmhhbmNlQ29tYm9Cb3goY29tYm9Cb3hFbCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldENvbWJvQm94Q29udGV4dCxcbiAgICBlbmhhbmNlQ29tYm9Cb3gsXG4gICAgZ2VuZXJhdGVEeW5hbWljUmVnRXhwLFxuICAgIGRpc2FibGUsXG4gICAgZW5hYmxlLFxuICAgIGRpc3BsYXlMaXN0LFxuICAgIGhpZGVMaXN0LFxuICAgIENPTUJPX0JPWF9DTEFTUyxcbiAgfSxcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gY29tYm9Cb3g7XG4iLCJjb25zdCBrZXltYXAgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMva2V5bWFwXCIpO1xuY29uc3QgYmVoYXZpb3IgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvYmVoYXZpb3JcIik7XG5jb25zdCBzZWxlY3QgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2VsZWN0XCIpO1xuY29uc3Qgc2VsZWN0T3JNYXRjaGVzID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdC1vci1tYXRjaGVzXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcbmNvbnN0IHsgQ0xJQ0sgfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9ldmVudHNcIik7XG5jb25zdCBhY3RpdmVFbGVtZW50ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2FjdGl2ZS1lbGVtZW50XCIpO1xuY29uc3QgaXNJb3NEZXZpY2UgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvaXMtaW9zLWRldmljZVwiKTtcbmNvbnN0IFNhbml0aXplciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zYW5pdGl6ZXJcIik7XG5cbmNvbnN0IERBVEVfUElDS0VSX0NMQVNTID0gYCR7UFJFRklYfS1kYXRlLXBpY2tlcmA7XG5jb25zdCBEQVRFX1BJQ0tFUl9XUkFQUEVSX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0xBU1N9X193cmFwcGVyYDtcbmNvbnN0IERBVEVfUElDS0VSX0lOSVRJQUxJWkVEX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0xBU1N9LS1pbml0aWFsaXplZGA7XG5jb25zdCBEQVRFX1BJQ0tFUl9BQ1RJVkVfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DTEFTU30tLWFjdGl2ZWA7XG5jb25zdCBEQVRFX1BJQ0tFUl9JTlRFUk5BTF9JTlBVVF9DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NMQVNTfV9faW50ZXJuYWwtaW5wdXRgO1xuY29uc3QgREFURV9QSUNLRVJfRVhURVJOQUxfSU5QVVRfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DTEFTU31fX2V4dGVybmFsLWlucHV0YDtcbmNvbnN0IERBVEVfUElDS0VSX0JVVFRPTl9DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NMQVNTfV9fYnV0dG9uYDtcbmNvbnN0IERBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0xBU1N9X19jYWxlbmRhcmA7XG5jb25zdCBEQVRFX1BJQ0tFUl9TVEFUVVNfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DTEFTU31fX3N0YXR1c2A7XG5jb25zdCBDQUxFTkRBUl9EQVRFX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0FMRU5EQVJfQ0xBU1N9X19kYXRlYDtcblxuY29uc3QgQ0FMRU5EQVJfREFURV9GT0NVU0VEX0NMQVNTID0gYCR7Q0FMRU5EQVJfREFURV9DTEFTU30tLWZvY3VzZWRgO1xuY29uc3QgQ0FMRU5EQVJfREFURV9TRUxFQ1RFRF9DTEFTUyA9IGAke0NBTEVOREFSX0RBVEVfQ0xBU1N9LS1zZWxlY3RlZGA7XG5jb25zdCBDQUxFTkRBUl9EQVRFX1BSRVZJT1VTX01PTlRIX0NMQVNTID0gYCR7Q0FMRU5EQVJfREFURV9DTEFTU30tLXByZXZpb3VzLW1vbnRoYDtcbmNvbnN0IENBTEVOREFSX0RBVEVfQ1VSUkVOVF9NT05USF9DTEFTUyA9IGAke0NBTEVOREFSX0RBVEVfQ0xBU1N9LS1jdXJyZW50LW1vbnRoYDtcbmNvbnN0IENBTEVOREFSX0RBVEVfTkVYVF9NT05USF9DTEFTUyA9IGAke0NBTEVOREFSX0RBVEVfQ0xBU1N9LS1uZXh0LW1vbnRoYDtcbmNvbnN0IENBTEVOREFSX0RBVEVfUkFOR0VfREFURV9DTEFTUyA9IGAke0NBTEVOREFSX0RBVEVfQ0xBU1N9LS1yYW5nZS1kYXRlYDtcbmNvbnN0IENBTEVOREFSX0RBVEVfVE9EQVlfQ0xBU1MgPSBgJHtDQUxFTkRBUl9EQVRFX0NMQVNTfS0tdG9kYXlgO1xuY29uc3QgQ0FMRU5EQVJfREFURV9SQU5HRV9EQVRFX1NUQVJUX0NMQVNTID0gYCR7Q0FMRU5EQVJfREFURV9DTEFTU30tLXJhbmdlLWRhdGUtc3RhcnRgO1xuY29uc3QgQ0FMRU5EQVJfREFURV9SQU5HRV9EQVRFX0VORF9DTEFTUyA9IGAke0NBTEVOREFSX0RBVEVfQ0xBU1N9LS1yYW5nZS1kYXRlLWVuZGA7XG5jb25zdCBDQUxFTkRBUl9EQVRFX1dJVEhJTl9SQU5HRV9DTEFTUyA9IGAke0NBTEVOREFSX0RBVEVfQ0xBU1N9LS13aXRoaW4tcmFuZ2VgO1xuY29uc3QgQ0FMRU5EQVJfUFJFVklPVVNfWUVBUl9DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9fcHJldmlvdXMteWVhcmA7XG5jb25zdCBDQUxFTkRBUl9QUkVWSU9VU19NT05USF9DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9fcHJldmlvdXMtbW9udGhgO1xuY29uc3QgQ0FMRU5EQVJfTkVYVF9ZRUFSX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0FMRU5EQVJfQ0xBU1N9X19uZXh0LXllYXJgO1xuY29uc3QgQ0FMRU5EQVJfTkVYVF9NT05USF9DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9fbmV4dC1tb250aGA7XG5jb25zdCBDQUxFTkRBUl9NT05USF9TRUxFQ1RJT05fQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31fX21vbnRoLXNlbGVjdGlvbmA7XG5jb25zdCBDQUxFTkRBUl9ZRUFSX1NFTEVDVElPTl9DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9feWVhci1zZWxlY3Rpb25gO1xuY29uc3QgQ0FMRU5EQVJfTU9OVEhfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31fX21vbnRoYDtcbmNvbnN0IENBTEVOREFSX01PTlRIX0ZPQ1VTRURfQ0xBU1MgPSBgJHtDQUxFTkRBUl9NT05USF9DTEFTU30tLWZvY3VzZWRgO1xuY29uc3QgQ0FMRU5EQVJfTU9OVEhfU0VMRUNURURfQ0xBU1MgPSBgJHtDQUxFTkRBUl9NT05USF9DTEFTU30tLXNlbGVjdGVkYDtcbmNvbnN0IENBTEVOREFSX1lFQVJfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31fX3llYXJgO1xuY29uc3QgQ0FMRU5EQVJfWUVBUl9GT0NVU0VEX0NMQVNTID0gYCR7Q0FMRU5EQVJfWUVBUl9DTEFTU30tLWZvY3VzZWRgO1xuY29uc3QgQ0FMRU5EQVJfWUVBUl9TRUxFQ1RFRF9DTEFTUyA9IGAke0NBTEVOREFSX1lFQVJfQ0xBU1N9LS1zZWxlY3RlZGA7XG5jb25zdCBDQUxFTkRBUl9QUkVWSU9VU19ZRUFSX0NIVU5LX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0FMRU5EQVJfQ0xBU1N9X19wcmV2aW91cy15ZWFyLWNodW5rYDtcbmNvbnN0IENBTEVOREFSX05FWFRfWUVBUl9DSFVOS19DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9fbmV4dC15ZWFyLWNodW5rYDtcbmNvbnN0IENBTEVOREFSX0RBVEVfUElDS0VSX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0FMRU5EQVJfQ0xBU1N9X19kYXRlLXBpY2tlcmA7XG5jb25zdCBDQUxFTkRBUl9NT05USF9QSUNLRVJfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31fX21vbnRoLXBpY2tlcmA7XG5jb25zdCBDQUxFTkRBUl9ZRUFSX1BJQ0tFUl9DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9feWVhci1waWNrZXJgO1xuY29uc3QgQ0FMRU5EQVJfVEFCTEVfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31fX3RhYmxlYDtcbmNvbnN0IENBTEVOREFSX1JPV19DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9fcm93YDtcbmNvbnN0IENBTEVOREFSX0NFTExfQ0xBU1MgPSBgJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31fX2NlbGxgO1xuY29uc3QgQ0FMRU5EQVJfQ0VMTF9DRU5URVJfSVRFTVNfQ0xBU1MgPSBgJHtDQUxFTkRBUl9DRUxMX0NMQVNTfS0tY2VudGVyLWl0ZW1zYDtcbmNvbnN0IENBTEVOREFSX01PTlRIX0xBQkVMX0NMQVNTID0gYCR7REFURV9QSUNLRVJfQ0FMRU5EQVJfQ0xBU1N9X19tb250aC1sYWJlbGA7XG5jb25zdCBDQUxFTkRBUl9EQVlfT0ZfV0VFS19DTEFTUyA9IGAke0RBVEVfUElDS0VSX0NBTEVOREFSX0NMQVNTfV9fZGF5LW9mLXdlZWtgO1xuXG5jb25zdCBEQVRFX1BJQ0tFUiA9IGAuJHtEQVRFX1BJQ0tFUl9DTEFTU31gO1xuY29uc3QgREFURV9QSUNLRVJfQlVUVE9OID0gYC4ke0RBVEVfUElDS0VSX0JVVFRPTl9DTEFTU31gO1xuY29uc3QgREFURV9QSUNLRVJfSU5URVJOQUxfSU5QVVQgPSBgLiR7REFURV9QSUNLRVJfSU5URVJOQUxfSU5QVVRfQ0xBU1N9YDtcbmNvbnN0IERBVEVfUElDS0VSX0VYVEVSTkFMX0lOUFVUID0gYC4ke0RBVEVfUElDS0VSX0VYVEVSTkFMX0lOUFVUX0NMQVNTfWA7XG5jb25zdCBEQVRFX1BJQ0tFUl9DQUxFTkRBUiA9IGAuJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31gO1xuY29uc3QgREFURV9QSUNLRVJfU1RBVFVTID0gYC4ke0RBVEVfUElDS0VSX1NUQVRVU19DTEFTU31gO1xuY29uc3QgQ0FMRU5EQVJfREFURSA9IGAuJHtDQUxFTkRBUl9EQVRFX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9EQVRFX0ZPQ1VTRUQgPSBgLiR7Q0FMRU5EQVJfREFURV9GT0NVU0VEX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9EQVRFX0NVUlJFTlRfTU9OVEggPSBgLiR7Q0FMRU5EQVJfREFURV9DVVJSRU5UX01PTlRIX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9QUkVWSU9VU19ZRUFSID0gYC4ke0NBTEVOREFSX1BSRVZJT1VTX1lFQVJfQ0xBU1N9YDtcbmNvbnN0IENBTEVOREFSX1BSRVZJT1VTX01PTlRIID0gYC4ke0NBTEVOREFSX1BSRVZJT1VTX01PTlRIX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9ORVhUX1lFQVIgPSBgLiR7Q0FMRU5EQVJfTkVYVF9ZRUFSX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9ORVhUX01PTlRIID0gYC4ke0NBTEVOREFSX05FWFRfTU9OVEhfQ0xBU1N9YDtcbmNvbnN0IENBTEVOREFSX1lFQVJfU0VMRUNUSU9OID0gYC4ke0NBTEVOREFSX1lFQVJfU0VMRUNUSU9OX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9NT05USF9TRUxFQ1RJT04gPSBgLiR7Q0FMRU5EQVJfTU9OVEhfU0VMRUNUSU9OX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9NT05USCA9IGAuJHtDQUxFTkRBUl9NT05USF9DTEFTU31gO1xuY29uc3QgQ0FMRU5EQVJfWUVBUiA9IGAuJHtDQUxFTkRBUl9ZRUFSX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9QUkVWSU9VU19ZRUFSX0NIVU5LID0gYC4ke0NBTEVOREFSX1BSRVZJT1VTX1lFQVJfQ0hVTktfQ0xBU1N9YDtcbmNvbnN0IENBTEVOREFSX05FWFRfWUVBUl9DSFVOSyA9IGAuJHtDQUxFTkRBUl9ORVhUX1lFQVJfQ0hVTktfQ0xBU1N9YDtcbmNvbnN0IENBTEVOREFSX0RBVEVfUElDS0VSID0gYC4ke0NBTEVOREFSX0RBVEVfUElDS0VSX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9NT05USF9QSUNLRVIgPSBgLiR7Q0FMRU5EQVJfTU9OVEhfUElDS0VSX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9ZRUFSX1BJQ0tFUiA9IGAuJHtDQUxFTkRBUl9ZRUFSX1BJQ0tFUl9DTEFTU31gO1xuY29uc3QgQ0FMRU5EQVJfTU9OVEhfRk9DVVNFRCA9IGAuJHtDQUxFTkRBUl9NT05USF9GT0NVU0VEX0NMQVNTfWA7XG5jb25zdCBDQUxFTkRBUl9ZRUFSX0ZPQ1VTRUQgPSBgLiR7Q0FMRU5EQVJfWUVBUl9GT0NVU0VEX0NMQVNTfWA7XG5cbmNvbnN0IFZBTElEQVRJT05fTUVTU0FHRSA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZGF0ZVwiO1xuXG4vLyBBbiBhcnJheSBvZiBEYXRlcyB0aGF0IHJlcHJlc2VudCBlYWNoIG1vbnRoIGluIHRoZSB5ZWFyXG5jb25zdCBNT05USF9EQVRFX1NFRUQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9KS5tYXAoXG4gIChfLCBpKSA9PiBuZXcgRGF0ZSgwLCBpKSxcbik7XG5cbi8vIEFuIGFycmF5IG9mIERhdGVzIHRoYXQgcmVwcmVzZW50IGVhY2ggZGF5IG9mIHRoZSB3ZWVrXG5jb25zdCBEQVlfT0ZfV0VFS19EQVRFX1NFRUQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA3IH0pLm1hcChcbiAgKF8sIGkpID0+IG5ldyBEYXRlKDAsIDAsIGkpLFxuKTtcblxuY29uc3QgQ0FMRU5EQVJfTEFCRUxTX0JZX0xBTkcgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IEVOVEVSX0tFWUNPREUgPSAxMztcblxuY29uc3QgWUVBUl9DSFVOSyA9IDEyO1xuXG5jb25zdCBERUZBVUxUX01JTl9EQVRFID0gXCIwMDAwLTAxLTAxXCI7XG5jb25zdCBERUZBVUxUX0VYVEVSTkFMX0RBVEVfRk9STUFUID0gXCJNTS9ERC9ZWVlZXCI7XG5jb25zdCBJTlRFUk5BTF9EQVRFX0ZPUk1BVCA9IFwiWVlZWS1NTS1ERFwiO1xuXG5jb25zdCBOT1RfRElTQUJMRURfU0VMRUNUT1IgPSBcIjpub3QoW2Rpc2FibGVkXSlcIjtcblxuY29uc3QgcHJvY2Vzc0ZvY3VzYWJsZVNlbGVjdG9ycyA9ICguLi5zZWxlY3RvcnMpID0+XG4gIHNlbGVjdG9ycy5tYXAoKHF1ZXJ5KSA9PiBxdWVyeSArIE5PVF9ESVNBQkxFRF9TRUxFQ1RPUikuam9pbihcIiwgXCIpO1xuXG5jb25zdCBEQVRFX1BJQ0tFUl9GT0NVU0FCTEUgPSBwcm9jZXNzRm9jdXNhYmxlU2VsZWN0b3JzKFxuICBDQUxFTkRBUl9QUkVWSU9VU19ZRUFSLFxuICBDQUxFTkRBUl9QUkVWSU9VU19NT05USCxcbiAgQ0FMRU5EQVJfWUVBUl9TRUxFQ1RJT04sXG4gIENBTEVOREFSX01PTlRIX1NFTEVDVElPTixcbiAgQ0FMRU5EQVJfTkVYVF9ZRUFSLFxuICBDQUxFTkRBUl9ORVhUX01PTlRILFxuICBDQUxFTkRBUl9EQVRFX0ZPQ1VTRUQsXG4pO1xuXG5jb25zdCBNT05USF9QSUNLRVJfRk9DVVNBQkxFID0gcHJvY2Vzc0ZvY3VzYWJsZVNlbGVjdG9ycyhcbiAgQ0FMRU5EQVJfTU9OVEhfRk9DVVNFRCxcbik7XG5cbmNvbnN0IFlFQVJfUElDS0VSX0ZPQ1VTQUJMRSA9IHByb2Nlc3NGb2N1c2FibGVTZWxlY3RvcnMoXG4gIENBTEVOREFSX1BSRVZJT1VTX1lFQVJfQ0hVTkssXG4gIENBTEVOREFSX05FWFRfWUVBUl9DSFVOSyxcbiAgQ0FMRU5EQVJfWUVBUl9GT0NVU0VELFxuKTtcblxuLy8gI3JlZ2lvbiBEYXRlIE1hbmlwdWxhdGlvbiBGdW5jdGlvbnNcblxuLyoqXG4gKiBLZWVwIGRhdGUgd2l0aGluIG1vbnRoLiBNb250aCB3b3VsZCBvbmx5IGJlIG92ZXIgYnkgMSB0byAzIGRheXNcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVUb0NoZWNrIHRoZSBkYXRlIG9iamVjdCB0byBjaGVja1xuICogQHBhcmFtIHtudW1iZXJ9IG1vbnRoIHRoZSBjb3JyZWN0IG1vbnRoXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGUsIGNvcnJlY3RlZCBpZiBuZWVkZWRcbiAqL1xuY29uc3Qga2VlcERhdGVXaXRoaW5Nb250aCA9IChkYXRlVG9DaGVjaywgbW9udGgpID0+IHtcbiAgaWYgKG1vbnRoICE9PSBkYXRlVG9DaGVjay5nZXRNb250aCgpKSB7XG4gICAgZGF0ZVRvQ2hlY2suc2V0RGF0ZSgwKTtcbiAgfVxuXG4gIHJldHVybiBkYXRlVG9DaGVjaztcbn07XG5cbi8qKlxuICogU2V0IGRhdGUgZnJvbSBtb250aCBkYXkgeWVhclxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB5ZWFyIHRoZSB5ZWFyIHRvIHNldFxuICogQHBhcmFtIHtudW1iZXJ9IG1vbnRoIHRoZSBtb250aCB0byBzZXQgKHplcm8taW5kZXhlZClcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRlIHRoZSBkYXRlIHRvIHNldFxuICogQHJldHVybnMge0RhdGV9IHRoZSBzZXQgZGF0ZVxuICovXG5jb25zdCBzZXREYXRlID0gKHllYXIsIG1vbnRoLCBkYXRlKSA9PiB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgbmV3RGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgZGF0ZSk7XG4gIHJldHVybiBuZXdEYXRlO1xufTtcblxuLyoqXG4gKiB0b2RheXMgZGF0ZVxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0b2RheXMgZGF0ZVxuICovXG5jb25zdCB0b2RheSA9ICgpID0+IHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKTtcbiAgY29uc3QgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcbiAgcmV0dXJuIHNldERhdGUoeWVhciwgbW9udGgsIGRheSk7XG59O1xuXG4vKipcbiAqIFNldCBkYXRlIHRvIGZpcnN0IGRheSBvZiB0aGUgbW9udGhcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZGF0ZSB0aGUgZGF0ZSB0byBhZGp1c3RcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgYWRqdXN0ZWQgZGF0ZVxuICovXG5jb25zdCBzdGFydE9mTW9udGggPSAoZGF0ZSkgPT4ge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoMCk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn07XG5cbi8qKlxuICogU2V0IGRhdGUgdG8gbGFzdCBkYXkgb2YgdGhlIG1vbnRoXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGRhdGUgdGhlIGRhdGUgdG8gYWRqdXN0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGFkanVzdGVkIGRhdGVcbiAqL1xuY29uc3QgbGFzdERheU9mTW9udGggPSAoZGF0ZSkgPT4ge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoMCk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59O1xuXG4vKipcbiAqIEFkZCBkYXlzIHRvIGRhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IF9kYXRlIHRoZSBkYXRlIHRvIGFkanVzdFxuICogQHBhcmFtIHtudW1iZXJ9IG51bURheXMgdGhlIGRpZmZlcmVuY2UgaW4gZGF5c1xuICogQHJldHVybnMge0RhdGV9IHRoZSBhZGp1c3RlZCBkYXRlXG4gKi9cbmNvbnN0IGFkZERheXMgPSAoX2RhdGUsIG51bURheXMpID0+IHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKF9kYXRlLmdldFRpbWUoKSk7XG4gIG5ld0RhdGUuc2V0RGF0ZShuZXdEYXRlLmdldERhdGUoKSArIG51bURheXMpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn07XG5cbi8qKlxuICogU3VidHJhY3QgZGF5cyBmcm9tIGRhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IF9kYXRlIHRoZSBkYXRlIHRvIGFkanVzdFxuICogQHBhcmFtIHtudW1iZXJ9IG51bURheXMgdGhlIGRpZmZlcmVuY2UgaW4gZGF5c1xuICogQHJldHVybnMge0RhdGV9IHRoZSBhZGp1c3RlZCBkYXRlXG4gKi9cbmNvbnN0IHN1YkRheXMgPSAoX2RhdGUsIG51bURheXMpID0+IGFkZERheXMoX2RhdGUsIC1udW1EYXlzKTtcblxuLyoqXG4gKiBBZGQgd2Vla3MgdG8gZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gX2RhdGUgdGhlIGRhdGUgdG8gYWRqdXN0XG4gKiBAcGFyYW0ge251bWJlcn0gbnVtV2Vla3MgdGhlIGRpZmZlcmVuY2UgaW4gd2Vla3NcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgYWRqdXN0ZWQgZGF0ZVxuICovXG5jb25zdCBhZGRXZWVrcyA9IChfZGF0ZSwgbnVtV2Vla3MpID0+IGFkZERheXMoX2RhdGUsIG51bVdlZWtzICogNyk7XG5cbi8qKlxuICogU3VidHJhY3Qgd2Vla3MgZnJvbSBkYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfSBfZGF0ZSB0aGUgZGF0ZSB0byBhZGp1c3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1XZWVrcyB0aGUgZGlmZmVyZW5jZSBpbiB3ZWVrc1xuICogQHJldHVybnMge0RhdGV9IHRoZSBhZGp1c3RlZCBkYXRlXG4gKi9cbmNvbnN0IHN1YldlZWtzID0gKF9kYXRlLCBudW1XZWVrcykgPT4gYWRkV2Vla3MoX2RhdGUsIC1udW1XZWVrcyk7XG5cbi8qKlxuICogU2V0IGRhdGUgdG8gdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIChTdW5kYXkpXG4gKlxuICogQHBhcmFtIHtEYXRlfSBfZGF0ZSB0aGUgZGF0ZSB0byBhZGp1c3RcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgYWRqdXN0ZWQgZGF0ZVxuICovXG5jb25zdCBzdGFydE9mV2VlayA9IChfZGF0ZSkgPT4ge1xuICBjb25zdCBkYXlPZldlZWsgPSBfZGF0ZS5nZXREYXkoKTtcbiAgcmV0dXJuIHN1YkRheXMoX2RhdGUsIGRheU9mV2Vlayk7XG59O1xuXG4vKipcbiAqIFNldCBkYXRlIHRvIHRoZSBlbmQgb2YgdGhlIHdlZWsgKFNhdHVyZGF5KVxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gX2RhdGUgdGhlIGRhdGUgdG8gYWRqdXN0XG4gKiBAcGFyYW0ge251bWJlcn0gbnVtV2Vla3MgdGhlIGRpZmZlcmVuY2UgaW4gd2Vla3NcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgYWRqdXN0ZWQgZGF0ZVxuICovXG5jb25zdCBlbmRPZldlZWsgPSAoX2RhdGUpID0+IHtcbiAgY29uc3QgZGF5T2ZXZWVrID0gX2RhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBhZGREYXlzKF9kYXRlLCA2IC0gZGF5T2ZXZWVrKTtcbn07XG5cbi8qKlxuICogQWRkIG1vbnRocyB0byBkYXRlIGFuZCBrZWVwIGRhdGUgd2l0aGluIG1vbnRoXG4gKlxuICogQHBhcmFtIHtEYXRlfSBfZGF0ZSB0aGUgZGF0ZSB0byBhZGp1c3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1Nb250aHMgdGhlIGRpZmZlcmVuY2UgaW4gbW9udGhzXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGFkanVzdGVkIGRhdGVcbiAqL1xuY29uc3QgYWRkTW9udGhzID0gKF9kYXRlLCBudW1Nb250aHMpID0+IHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKF9kYXRlLmdldFRpbWUoKSk7XG5cbiAgY29uc3QgZGF0ZU1vbnRoID0gKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEyICsgbnVtTW9udGhzKSAlIDEyO1xuICBuZXdEYXRlLnNldE1vbnRoKG5ld0RhdGUuZ2V0TW9udGgoKSArIG51bU1vbnRocyk7XG4gIGtlZXBEYXRlV2l0aGluTW9udGgobmV3RGF0ZSwgZGF0ZU1vbnRoKTtcblxuICByZXR1cm4gbmV3RGF0ZTtcbn07XG5cbi8qKlxuICogU3VidHJhY3QgbW9udGhzIGZyb20gZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gX2RhdGUgdGhlIGRhdGUgdG8gYWRqdXN0XG4gKiBAcGFyYW0ge251bWJlcn0gbnVtTW9udGhzIHRoZSBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICogQHJldHVybnMge0RhdGV9IHRoZSBhZGp1c3RlZCBkYXRlXG4gKi9cbmNvbnN0IHN1Yk1vbnRocyA9IChfZGF0ZSwgbnVtTW9udGhzKSA9PiBhZGRNb250aHMoX2RhdGUsIC1udW1Nb250aHMpO1xuXG4vKipcbiAqIEFkZCB5ZWFycyB0byBkYXRlIGFuZCBrZWVwIGRhdGUgd2l0aGluIG1vbnRoXG4gKlxuICogQHBhcmFtIHtEYXRlfSBfZGF0ZSB0aGUgZGF0ZSB0byBhZGp1c3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1ZZWFycyB0aGUgZGlmZmVyZW5jZSBpbiB5ZWFyc1xuICogQHJldHVybnMge0RhdGV9IHRoZSBhZGp1c3RlZCBkYXRlXG4gKi9cbmNvbnN0IGFkZFllYXJzID0gKF9kYXRlLCBudW1ZZWFycykgPT4gYWRkTW9udGhzKF9kYXRlLCBudW1ZZWFycyAqIDEyKTtcblxuLyoqXG4gKiBTdWJ0cmFjdCB5ZWFycyBmcm9tIGRhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IF9kYXRlIHRoZSBkYXRlIHRvIGFkanVzdFxuICogQHBhcmFtIHtudW1iZXJ9IG51bVllYXJzIHRoZSBkaWZmZXJlbmNlIGluIHllYXJzXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGFkanVzdGVkIGRhdGVcbiAqL1xuY29uc3Qgc3ViWWVhcnMgPSAoX2RhdGUsIG51bVllYXJzKSA9PiBhZGRZZWFycyhfZGF0ZSwgLW51bVllYXJzKTtcblxuLyoqXG4gKiBTZXQgbW9udGhzIG9mIGRhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IF9kYXRlIHRoZSBkYXRlIHRvIGFkanVzdFxuICogQHBhcmFtIHtudW1iZXJ9IG1vbnRoIHplcm8taW5kZXhlZCBtb250aCB0byBzZXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgYWRqdXN0ZWQgZGF0ZVxuICovXG5jb25zdCBzZXRNb250aCA9IChfZGF0ZSwgbW9udGgpID0+IHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKF9kYXRlLmdldFRpbWUoKSk7XG5cbiAgbmV3RGF0ZS5zZXRNb250aChtb250aCk7XG4gIGtlZXBEYXRlV2l0aGluTW9udGgobmV3RGF0ZSwgbW9udGgpO1xuXG4gIHJldHVybiBuZXdEYXRlO1xufTtcblxuLyoqXG4gKiBTZXQgeWVhciBvZiBkYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfSBfZGF0ZSB0aGUgZGF0ZSB0byBhZGp1c3RcbiAqIEBwYXJhbSB7bnVtYmVyfSB5ZWFyIHRoZSB5ZWFyIHRvIHNldFxuICogQHJldHVybnMge0RhdGV9IHRoZSBhZGp1c3RlZCBkYXRlXG4gKi9cbmNvbnN0IHNldFllYXIgPSAoX2RhdGUsIHllYXIpID0+IHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKF9kYXRlLmdldFRpbWUoKSk7XG5cbiAgY29uc3QgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gIGtlZXBEYXRlV2l0aGluTW9udGgobmV3RGF0ZSwgbW9udGgpO1xuXG4gIHJldHVybiBuZXdEYXRlO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGVhcmxpZXN0IGRhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVBIGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfSBkYXRlQiBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZWFybGllc3QgZGF0ZVxuICovXG5jb25zdCBtaW4gPSAoZGF0ZUEsIGRhdGVCKSA9PiB7XG4gIGxldCBuZXdEYXRlID0gZGF0ZUE7XG5cbiAgaWYgKGRhdGVCIDwgZGF0ZUEpIHtcbiAgICBuZXdEYXRlID0gZGF0ZUI7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUobmV3RGF0ZS5nZXRUaW1lKCkpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxhdGVzdCBkYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlQSBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZUIgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGxhdGVzdCBkYXRlXG4gKi9cbmNvbnN0IG1heCA9IChkYXRlQSwgZGF0ZUIpID0+IHtcbiAgbGV0IG5ld0RhdGUgPSBkYXRlQTtcblxuICBpZiAoZGF0ZUIgPiBkYXRlQSkge1xuICAgIG5ld0RhdGUgPSBkYXRlQjtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZShuZXdEYXRlLmdldFRpbWUoKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGRhdGVzIGFyZSB0aGUgaW4gdGhlIHNhbWUgeWVhclxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZUEgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVCIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge2Jvb2xlYW59IGFyZSBkYXRlcyBpbiB0aGUgc2FtZSB5ZWFyXG4gKi9cbmNvbnN0IGlzU2FtZVllYXIgPSAoZGF0ZUEsIGRhdGVCKSA9PlxuICBkYXRlQSAmJiBkYXRlQiAmJiBkYXRlQS5nZXRGdWxsWWVhcigpID09PSBkYXRlQi5nZXRGdWxsWWVhcigpO1xuXG4vKipcbiAqIENoZWNrIGlmIGRhdGVzIGFyZSB0aGUgaW4gdGhlIHNhbWUgbW9udGhcbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGVBIGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfSBkYXRlQiBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtib29sZWFufSBhcmUgZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGhcbiAqL1xuY29uc3QgaXNTYW1lTW9udGggPSAoZGF0ZUEsIGRhdGVCKSA9PlxuICBpc1NhbWVZZWFyKGRhdGVBLCBkYXRlQikgJiYgZGF0ZUEuZ2V0TW9udGgoKSA9PT0gZGF0ZUIuZ2V0TW9udGgoKTtcblxuLyoqXG4gKiBDaGVjayBpZiBkYXRlcyBhcmUgdGhlIHNhbWUgZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZUEgdGhlIGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfSBkYXRlQSB0aGUgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYXJlIGRhdGVzIHRoZSBzYW1lIGRhdGVcbiAqL1xuY29uc3QgaXNTYW1lRGF5ID0gKGRhdGVBLCBkYXRlQikgPT5cbiAgaXNTYW1lTW9udGgoZGF0ZUEsIGRhdGVCKSAmJiBkYXRlQS5nZXREYXRlKCkgPT09IGRhdGVCLmdldERhdGUoKTtcblxuLyoqXG4gKiByZXR1cm4gYSBuZXcgZGF0ZSB3aXRoaW4gbWluaW11bSBhbmQgbWF4aW11bSBkYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZX0gbWluRGF0ZSBtaW5pbXVtIGRhdGUgdG8gYWxsb3dcbiAqIEBwYXJhbSB7RGF0ZX0gbWF4RGF0ZSBtYXhpbXVtIGRhdGUgdG8gYWxsb3dcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZGF0ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4XG4gKi9cbmNvbnN0IGtlZXBEYXRlQmV0d2Vlbk1pbkFuZE1heCA9IChkYXRlLCBtaW5EYXRlLCBtYXhEYXRlKSA9PiB7XG4gIGxldCBuZXdEYXRlID0gZGF0ZTtcblxuICBpZiAoZGF0ZSA8IG1pbkRhdGUpIHtcbiAgICBuZXdEYXRlID0gbWluRGF0ZTtcbiAgfSBlbHNlIGlmIChtYXhEYXRlICYmIGRhdGUgPiBtYXhEYXRlKSB7XG4gICAgbmV3RGF0ZSA9IG1heERhdGU7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUobmV3RGF0ZS5nZXRUaW1lKCkpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBkYXRlcyBpcyB2YWxpZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV9IGRhdGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfSBtaW5EYXRlIG1pbmltdW0gZGF0ZSB0byBhbGxvd1xuICogQHBhcmFtIHtEYXRlfSBtYXhEYXRlIG1heGltdW0gZGF0ZSB0byBhbGxvd1xuICogQHJldHVybiB7Ym9vbGVhbn0gaXMgdGhlcmUgYSBkYXkgd2l0aGluIHRoZSBtb250aCB3aXRoaW4gbWluIGFuZCBtYXggZGF0ZXNcbiAqL1xuY29uc3QgaXNEYXRlV2l0aGluTWluQW5kTWF4ID0gKGRhdGUsIG1pbkRhdGUsIG1heERhdGUpID0+XG4gIGRhdGUgPj0gbWluRGF0ZSAmJiAoIW1heERhdGUgfHwgZGF0ZSA8PSBtYXhEYXRlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBkYXRlcyBtb250aCBpcyBpbnZhbGlkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV9IG1pbkRhdGUgbWluaW11bSBkYXRlIHRvIGFsbG93XG4gKiBAcGFyYW0ge0RhdGV9IG1heERhdGUgbWF4aW11bSBkYXRlIHRvIGFsbG93XG4gKiBAcmV0dXJuIHtib29sZWFufSBpcyB0aGUgbW9udGggb3V0c2lkZSBtaW4gb3IgbWF4IGRhdGVzXG4gKi9cbmNvbnN0IGlzRGF0ZXNNb250aE91dHNpZGVNaW5Pck1heCA9IChkYXRlLCBtaW5EYXRlLCBtYXhEYXRlKSA9PlxuICBsYXN0RGF5T2ZNb250aChkYXRlKSA8IG1pbkRhdGUgfHwgKG1heERhdGUgJiYgc3RhcnRPZk1vbnRoKGRhdGUpID4gbWF4RGF0ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgZGF0ZXMgeWVhciBpcyBpbnZhbGlkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV9IG1pbkRhdGUgbWluaW11bSBkYXRlIHRvIGFsbG93XG4gKiBAcGFyYW0ge0RhdGV9IG1heERhdGUgbWF4aW11bSBkYXRlIHRvIGFsbG93XG4gKiBAcmV0dXJuIHtib29sZWFufSBpcyB0aGUgbW9udGggb3V0c2lkZSBtaW4gb3IgbWF4IGRhdGVzXG4gKi9cbmNvbnN0IGlzRGF0ZXNZZWFyT3V0c2lkZU1pbk9yTWF4ID0gKGRhdGUsIG1pbkRhdGUsIG1heERhdGUpID0+XG4gIGxhc3REYXlPZk1vbnRoKHNldE1vbnRoKGRhdGUsIDExKSkgPCBtaW5EYXRlIHx8XG4gIChtYXhEYXRlICYmIHN0YXJ0T2ZNb250aChzZXRNb250aChkYXRlLCAwKSkgPiBtYXhEYXRlKTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEYXRlUmFuZ2VDb250ZXh0XG4gKiBAcHJvcGVydHkge0RhdGV9IHJhbmdlU3RhcnREYXRlXG4gKiBAcHJvcGVydHkge0RhdGV9IHJhbmdlRW5kRGF0ZVxuICogQHByb3BlcnR5IHtEYXRlfSB3aXRoaW5SYW5nZVN0YXJ0RGF0ZVxuICogQHByb3BlcnR5IHtEYXRlfSB3aXRoaW5SYW5nZUVuZERhdGVcbiAqL1xuXG4vKipcbiAqIFNldCB0aGUgc3RhcnQsIGVuZCwgYW5kIHdpdGhpbiByYW5nZSB2YWx1ZXMgZm9yIGRhdGUgcmFuZ2UgdmFyaWFudHMuXG5cbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIERhdGUgdGhhdCBjb25jbHVkZXMgdGhlIGRhdGUgcmFuZ2UuXG4gKiBAcGFyYW0ge0RhdGV9IHJhbmdlRGF0ZSAtIFJhbmdlIGRhdGUgZGF0YSBhdHRyaWJ1dGUgdmFsdWUgb2YgdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudC5cbiAqIEByZXR1cm5zIHtEYXRlUmFuZ2VDb250ZXh0fSAtIERhdGVzIGZvciByYW5nZSBzZWxlY3Rpb24uXG4gKi9cbmNvbnN0IHNldFJhbmdlRGF0ZXMgPSAoZGF0ZSwgcmFuZ2VEYXRlKSA9PiB7XG4gIGNvbnN0IHJhbmdlQ29uY2x1c2lvbkRhdGUgPSBkYXRlO1xuICBjb25zdCByYW5nZVN0YXJ0RGF0ZSA9IHJhbmdlRGF0ZSAmJiBtaW4ocmFuZ2VDb25jbHVzaW9uRGF0ZSwgcmFuZ2VEYXRlKTtcbiAgY29uc3QgcmFuZ2VFbmREYXRlID0gcmFuZ2VEYXRlICYmIG1heChyYW5nZUNvbmNsdXNpb25EYXRlLCByYW5nZURhdGUpO1xuXG4gIGNvbnN0IHdpdGhpblJhbmdlU3RhcnREYXRlID0gcmFuZ2VEYXRlICYmIGFkZERheXMocmFuZ2VTdGFydERhdGUsIDEpO1xuICBjb25zdCB3aXRoaW5SYW5nZUVuZERhdGUgPSByYW5nZURhdGUgJiYgc3ViRGF5cyhyYW5nZUVuZERhdGUsIDEpO1xuXG4gIHJldHVybiB7XG4gICAgcmFuZ2VTdGFydERhdGUsXG4gICAgcmFuZ2VFbmREYXRlLFxuICAgIHdpdGhpblJhbmdlU3RhcnREYXRlLFxuICAgIHdpdGhpblJhbmdlRW5kRGF0ZSxcbiAgfTtcbn07XG5cbi8qKlxuICogUGFyc2UgYSBkYXRlIHdpdGggZm9ybWF0IE0tRC1ZWVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyaW5nIHRoZSBkYXRlIHN0cmluZyB0byBwYXJzZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZSBzdHJpbmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYWRqdXN0RGF0ZSBzaG91bGQgdGhlIGRhdGUgYmUgYWRqdXN0ZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGVcbiAqL1xuY29uc3QgcGFyc2VEYXRlU3RyaW5nID0gKFxuICBkYXRlU3RyaW5nLFxuICBkYXRlRm9ybWF0ID0gSU5URVJOQUxfREFURV9GT1JNQVQsXG4gIGFkanVzdERhdGUgPSBmYWxzZSxcbikgPT4ge1xuICBsZXQgZGF0ZTtcbiAgbGV0IG1vbnRoO1xuICBsZXQgZGF5O1xuICBsZXQgeWVhcjtcbiAgbGV0IHBhcnNlZDtcblxuICBpZiAoZGF0ZVN0cmluZykge1xuICAgIGxldCBtb250aFN0cjtcbiAgICBsZXQgZGF5U3RyO1xuICAgIGxldCB5ZWFyU3RyO1xuXG4gICAgaWYgKGRhdGVGb3JtYXQgPT09IERFRkFVTFRfRVhURVJOQUxfREFURV9GT1JNQVQpIHtcbiAgICAgIFttb250aFN0ciwgZGF5U3RyLCB5ZWFyU3RyXSA9IGRhdGVTdHJpbmcuc3BsaXQoXCIvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBbeWVhclN0ciwgbW9udGhTdHIsIGRheVN0cl0gPSBkYXRlU3RyaW5nLnNwbGl0KFwiLVwiKTtcbiAgICB9XG5cbiAgICBpZiAoeWVhclN0cikge1xuICAgICAgcGFyc2VkID0gcGFyc2VJbnQoeWVhclN0ciwgMTApO1xuICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocGFyc2VkKSkge1xuICAgICAgICB5ZWFyID0gcGFyc2VkO1xuICAgICAgICBpZiAoYWRqdXN0RGF0ZSkge1xuICAgICAgICAgIHllYXIgPSBNYXRoLm1heCgwLCB5ZWFyKTtcbiAgICAgICAgICBpZiAoeWVhclN0ci5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IHRvZGF5KCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyU3R1YiA9XG4gICAgICAgICAgICAgIGN1cnJlbnRZZWFyIC0gKGN1cnJlbnRZZWFyICUgMTAgKiogeWVhclN0ci5sZW5ndGgpO1xuICAgICAgICAgICAgeWVhciA9IGN1cnJlbnRZZWFyU3R1YiArIHBhcnNlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9udGhTdHIpIHtcbiAgICAgIHBhcnNlZCA9IHBhcnNlSW50KG1vbnRoU3RyLCAxMCk7XG4gICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWQpKSB7XG4gICAgICAgIG1vbnRoID0gcGFyc2VkO1xuICAgICAgICBpZiAoYWRqdXN0RGF0ZSkge1xuICAgICAgICAgIG1vbnRoID0gTWF0aC5tYXgoMSwgbW9udGgpO1xuICAgICAgICAgIG1vbnRoID0gTWF0aC5taW4oMTIsIG1vbnRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb250aCAmJiBkYXlTdHIgJiYgeWVhciAhPSBudWxsKSB7XG4gICAgICBwYXJzZWQgPSBwYXJzZUludChkYXlTdHIsIDEwKTtcbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZCkpIHtcbiAgICAgICAgZGF5ID0gcGFyc2VkO1xuICAgICAgICBpZiAoYWRqdXN0RGF0ZSkge1xuICAgICAgICAgIGNvbnN0IGxhc3REYXlPZlRoZU1vbnRoID0gc2V0RGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgICAgICAgIGRheSA9IE1hdGgubWF4KDEsIGRheSk7XG4gICAgICAgICAgZGF5ID0gTWF0aC5taW4obGFzdERheU9mVGhlTW9udGgsIGRheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobW9udGggJiYgZGF5ICYmIHllYXIgIT0gbnVsbCkge1xuICAgICAgZGF0ZSA9IHNldERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlO1xufTtcblxuLyoqXG4gKiBGb3JtYXQgYSBkYXRlIHRvIGZvcm1hdCBNTS1ERC1ZWVlZXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIHRoZSBkYXRlIHRvIGZvcm1hdFxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgdGhlIGZvcm1hdCBvZiB0aGUgZGF0ZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqL1xuY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlLCBkYXRlRm9ybWF0ID0gSU5URVJOQUxfREFURV9GT1JNQVQpID0+IHtcbiAgY29uc3QgcGFkWmVyb3MgPSAodmFsdWUsIGxlbmd0aCkgPT4gYDAwMDAke3ZhbHVlfWAuc2xpY2UoLWxlbmd0aCk7XG5cbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBpZiAoZGF0ZUZvcm1hdCA9PT0gREVGQVVMVF9FWFRFUk5BTF9EQVRFX0ZPUk1BVCkge1xuICAgIHJldHVybiBbcGFkWmVyb3MobW9udGgsIDIpLCBwYWRaZXJvcyhkYXksIDIpLCBwYWRaZXJvcyh5ZWFyLCA0KV0uam9pbihcIi9cIik7XG4gIH1cblxuICByZXR1cm4gW3BhZFplcm9zKHllYXIsIDQpLCBwYWRaZXJvcyhtb250aCwgMiksIHBhZFplcm9zKGRheSwgMildLmpvaW4oXCItXCIpO1xufTtcblxuLy8gI2VuZHJlZ2lvbiBEYXRlIE1hbmlwdWxhdGlvbiBGdW5jdGlvbnNcblxuLyoqXG4gKiBDcmVhdGUgYSBncmlkIHN0cmluZyBmcm9tIGFuIGFycmF5IG9mIGh0bWwgc3RyaW5nc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGh0bWxBcnJheSB0aGUgYXJyYXkgb2YgaHRtbCBpdGVtc1xuICogQHBhcmFtIHtudW1iZXJ9IHJvd1NpemUgdGhlIGxlbmd0aCBvZiBhIHJvd1xuICogQHJldHVybnMge3N0cmluZ30gdGhlIGdyaWQgc3RyaW5nXG4gKi9cbmNvbnN0IGxpc3RUb0dyaWRIdG1sID0gKGh0bWxBcnJheSwgcm93U2l6ZSkgPT4ge1xuICBjb25zdCBncmlkID0gW107XG5cbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IGh0bWxBcnJheS5sZW5ndGgpIHtcbiAgICBjb25zdCByb3cgPSBbXTtcblxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIHdoaWxlIChpIDwgaHRtbEFycmF5Lmxlbmd0aCAmJiByb3cubGVuZ3RoIDwgcm93U2l6ZSkge1xuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICB0ZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaHRtbEFycmF5W2ldKTtcbiAgICAgIHJvdy5wdXNoKHRkKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByb3cuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgdHIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgZ3JpZC5wdXNoKHRyKTtcbiAgfVxuXG4gIHJldHVybiBncmlkO1xufTtcblxuY29uc3QgY3JlYXRlVGFibGVCb2R5ID0gKGdyaWQpID0+IHtcbiAgY29uc3QgdGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICBncmlkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICB0YWJsZUJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIGVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gdGFibGVCb2R5O1xufTtcblxuLyoqXG4gKiBzZXQgdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50IGFuZCBkaXNwYXRjaCBhIGNoYW5nZSBldmVudFxuICpcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZWwgVGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIG5ldyB2YWx1ZSBvZiB0aGUgZWxlbWVudFxuICovXG5jb25zdCBjaGFuZ2VFbGVtZW50VmFsdWUgPSAoZWwsIHZhbHVlID0gXCJcIikgPT4ge1xuICBjb25zdCBlbGVtZW50VG9DaGFuZ2UgPSBlbDtcbiAgZWxlbWVudFRvQ2hhbmdlLnZhbHVlID0gdmFsdWU7XG5cbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIiwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICBkZXRhaWw6IHsgdmFsdWUgfSxcbiAgfSk7XG4gIGVsZW1lbnRUb0NoYW5nZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG5cbi8qKlxuICogVGhlIHByb3BlcnRpZXMgYW5kIGVsZW1lbnRzIHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIuXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBEYXRlUGlja2VyQ29udGV4dFxuICogQHByb3BlcnR5IHtIVE1MRGl2RWxlbWVudH0gY2FsZW5kYXJFbFxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0ZVBpY2tlckVsXG4gKiBAcHJvcGVydHkge0hUTUxJbnB1dEVsZW1lbnR9IGludGVybmFsSW5wdXRFbFxuICogQHByb3BlcnR5IHtIVE1MSW5wdXRFbGVtZW50fSBleHRlcm5hbElucHV0RWxcbiAqIEBwcm9wZXJ0eSB7SFRNTERpdkVsZW1lbnR9IHN0YXR1c0VsXG4gKiBAcHJvcGVydHkge0hUTUxEaXZFbGVtZW50fSBmaXJzdFllYXJDaHVua0VsXG4gKiBAcHJvcGVydHkge0RhdGV9IGNhbGVuZGFyRGF0ZVxuICogQHByb3BlcnR5IHtEYXRlfSBtaW5EYXRlXG4gKiBAcHJvcGVydHkge0RhdGV9IG1heERhdGVcbiAqIEBwcm9wZXJ0eSB7RGF0ZX0gc2VsZWN0ZWREYXRlXG4gKiBAcHJvcGVydHkge0RhdGV9IHJhbmdlRGF0ZVxuICogQHByb3BlcnR5IHtEYXRlfSBkZWZhdWx0RGF0ZVxuICovXG5cbi8qKlxuICogR2V0IGFuIG9iamVjdCBvZiB0aGUgcHJvcGVydGllcyBhbmQgZWxlbWVudHMgYmVsb25naW5nIGRpcmVjdGx5IHRvIHRoZSBnaXZlblxuICogZGF0ZSBwaWNrZXIgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIHRoZSBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXJcbiAqIEByZXR1cm5zIHtEYXRlUGlja2VyQ29udGV4dH0gZWxlbWVudHNcbiAqL1xuY29uc3QgZ2V0RGF0ZVBpY2tlckNvbnRleHQgPSAoZWwpID0+IHtcbiAgY29uc3QgZGF0ZVBpY2tlckVsID0gZWwuY2xvc2VzdChEQVRFX1BJQ0tFUik7XG5cbiAgaWYgKCFkYXRlUGlja2VyRWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgaXMgbWlzc2luZyBvdXRlciAke0RBVEVfUElDS0VSfWApO1xuICB9XG5cbiAgY29uc3QgaW50ZXJuYWxJbnB1dEVsID0gZGF0ZVBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgREFURV9QSUNLRVJfSU5URVJOQUxfSU5QVVQsXG4gICk7XG4gIGNvbnN0IGV4dGVybmFsSW5wdXRFbCA9IGRhdGVQaWNrZXJFbC5xdWVyeVNlbGVjdG9yKFxuICAgIERBVEVfUElDS0VSX0VYVEVSTkFMX0lOUFVULFxuICApO1xuICBjb25zdCBjYWxlbmRhckVsID0gZGF0ZVBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoREFURV9QSUNLRVJfQ0FMRU5EQVIpO1xuICBjb25zdCB0b2dnbGVCdG5FbCA9IGRhdGVQaWNrZXJFbC5xdWVyeVNlbGVjdG9yKERBVEVfUElDS0VSX0JVVFRPTik7XG4gIGNvbnN0IHN0YXR1c0VsID0gZGF0ZVBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoREFURV9QSUNLRVJfU1RBVFVTKTtcbiAgY29uc3QgZmlyc3RZZWFyQ2h1bmtFbCA9IGRhdGVQaWNrZXJFbC5xdWVyeVNlbGVjdG9yKENBTEVOREFSX1lFQVIpO1xuXG4gIGNvbnN0IGlucHV0RGF0ZSA9IHBhcnNlRGF0ZVN0cmluZyhcbiAgICBleHRlcm5hbElucHV0RWwudmFsdWUsXG4gICAgREVGQVVMVF9FWFRFUk5BTF9EQVRFX0ZPUk1BVCxcbiAgICB0cnVlLFxuICApO1xuICBjb25zdCBzZWxlY3RlZERhdGUgPSBwYXJzZURhdGVTdHJpbmcoaW50ZXJuYWxJbnB1dEVsLnZhbHVlKTtcblxuICBjb25zdCBjYWxlbmRhckRhdGUgPSBwYXJzZURhdGVTdHJpbmcoY2FsZW5kYXJFbC5kYXRhc2V0LnZhbHVlKTtcbiAgY29uc3QgbWluRGF0ZSA9IHBhcnNlRGF0ZVN0cmluZyhkYXRlUGlja2VyRWwuZGF0YXNldC5taW5EYXRlKTtcbiAgY29uc3QgbWF4RGF0ZSA9IHBhcnNlRGF0ZVN0cmluZyhkYXRlUGlja2VyRWwuZGF0YXNldC5tYXhEYXRlKTtcbiAgY29uc3QgcmFuZ2VEYXRlID0gcGFyc2VEYXRlU3RyaW5nKGRhdGVQaWNrZXJFbC5kYXRhc2V0LnJhbmdlRGF0ZSk7XG4gIGNvbnN0IGRlZmF1bHREYXRlID0gcGFyc2VEYXRlU3RyaW5nKGRhdGVQaWNrZXJFbC5kYXRhc2V0LmRlZmF1bHREYXRlKTtcblxuICBpZiAobWluRGF0ZSAmJiBtYXhEYXRlICYmIG1pbkRhdGUgPiBtYXhEYXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWluaW11bSBkYXRlIGNhbm5vdCBiZSBhZnRlciBtYXhpbXVtIGRhdGVcIik7XG4gIH1cblxuICBjb25zdCBsYW5nID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgfHwgXCJlblwiO1xuXG4gIC8vIGlmIHRoZSBsYW5ndWFnZSBpcyBub3QgZm91bmQgZ2VuZXJhdGUgdGhlIGxpc3RcbiAgaWYgKCFDQUxFTkRBUl9MQUJFTFNfQllfTEFORy5oYXMobGFuZykpIHtcbiAgICBDQUxFTkRBUl9MQUJFTFNfQllfTEFORy5zZXQobGFuZywge1xuICAgICAgbW9udGhMYWJlbHM6IE1PTlRIX0RBVEVfU0VFRC5tYXAoKGRhdGUpID0+XG4gICAgICAgIGRhdGUudG9Mb2NhbGVTdHJpbmcobGFuZywgeyBtb250aDogXCJsb25nXCIgfSksXG4gICAgICApLFxuICAgICAgZGF5T2ZXZWVrbGFiZWxzOiBEQVlfT0ZfV0VFS19EQVRFX1NFRUQubWFwKChkYXRlKSA9PlxuICAgICAgICBkYXRlLnRvTG9jYWxlU3RyaW5nKGxhbmcsIHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgZGF5T2ZXZWVrc0FidjogREFZX09GX1dFRUtfREFURV9TRUVELm1hcCgoZGF0ZSkgPT5cbiAgICAgICAgZGF0ZS50b0xvY2FsZVN0cmluZyhsYW5nLCB7XG4gICAgICAgICAgd2Vla2RheTogXCJuYXJyb3dcIixcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgeyBtb250aExhYmVscywgZGF5T2ZXZWVrbGFiZWxzLCBkYXlPZldlZWtzQWJ2IH0gPVxuICAgIENBTEVOREFSX0xBQkVMU19CWV9MQU5HLmdldChsYW5nKTtcblxuICByZXR1cm4ge1xuICAgIGNhbGVuZGFyRGF0ZSxcbiAgICBtaW5EYXRlLFxuICAgIHRvZ2dsZUJ0bkVsLFxuICAgIHNlbGVjdGVkRGF0ZSxcbiAgICBtYXhEYXRlLFxuICAgIGZpcnN0WWVhckNodW5rRWwsXG4gICAgZGF0ZVBpY2tlckVsLFxuICAgIGlucHV0RGF0ZSxcbiAgICBpbnRlcm5hbElucHV0RWwsXG4gICAgZXh0ZXJuYWxJbnB1dEVsLFxuICAgIGNhbGVuZGFyRWwsXG4gICAgcmFuZ2VEYXRlLFxuICAgIGRlZmF1bHREYXRlLFxuICAgIHN0YXR1c0VsLFxuICAgIG1vbnRoTGFiZWxzLFxuICAgIGRheU9mV2Vla2xhYmVscyxcbiAgICBkYXlPZldlZWtzQWJ2LFxuICB9O1xufTtcblxuLyoqXG4gKiBEaXNhYmxlIHRoZSBkYXRlIHBpY2tlciBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IGRpc2FibGUgPSAoZWwpID0+IHtcbiAgY29uc3QgeyBleHRlcm5hbElucHV0RWwsIHRvZ2dsZUJ0bkVsIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG5cbiAgdG9nZ2xlQnRuRWwuZGlzYWJsZWQgPSB0cnVlO1xuICBleHRlcm5hbElucHV0RWwuZGlzYWJsZWQgPSB0cnVlO1xufTtcblxuLyoqXG4gKiBBZGQgdGhlIHJlYWRvbmx5IGF0dHJpYnV0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCB0aGUgYXJpYS1kaXNhYmxlZCBhdHRyaWJ1dGUgdG8gdGhlIHRvZ2dsZSBjYWxlbmRhciBidXR0b24gYW5kIGV4dGVybmFsIGlucHV0IGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIC0gVGhlIGRhdGUgcGlja2VyIGVsZW1lbnRcbiAqL1xuY29uc3QgYXJpYURpc2FibGUgPSAoZWwpID0+IHtcbiAgY29uc3QgeyBleHRlcm5hbElucHV0RWwsIHRvZ2dsZUJ0bkVsIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG5cbiAgdG9nZ2xlQnRuRWwuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCB0cnVlKTtcbiAgZXh0ZXJuYWxJbnB1dEVsLnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gIGV4dGVybmFsSW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcIlwiKTtcbn07XG5cbi8qKlxuICogRW5hYmxlIHRoZSBkYXRlIHBpY2tlciBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IGVuYWJsZSA9IChlbCkgPT4ge1xuICBjb25zdCB7IGV4dGVybmFsSW5wdXRFbCwgdG9nZ2xlQnRuRWwgfSA9IGdldERhdGVQaWNrZXJDb250ZXh0KGVsKTtcblxuICB0b2dnbGVCdG5FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICB0b2dnbGVCdG5FbC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpO1xuXG4gIGV4dGVybmFsSW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICBleHRlcm5hbElucHV0RWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKTtcbiAgZXh0ZXJuYWxJbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpO1xufTtcblxuLy8gI3JlZ2lvbiBWYWxpZGF0aW9uXG5cbi8qKlxuICogVmFsaWRhdGUgdGhlIHZhbHVlIGluIHRoZSBpbnB1dCBhcyBhIHZhbGlkIGRhdGUgb2YgZm9ybWF0IE0vRC9ZWVlZXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBpc0RhdGVJbnB1dEludmFsaWQgPSAoZWwpID0+IHtcbiAgY29uc3QgeyBleHRlcm5hbElucHV0RWwsIG1pbkRhdGUsIG1heERhdGUgfSA9IGdldERhdGVQaWNrZXJDb250ZXh0KGVsKTtcblxuICBjb25zdCBkYXRlU3RyaW5nID0gZXh0ZXJuYWxJbnB1dEVsLnZhbHVlO1xuICBsZXQgaXNJbnZhbGlkID0gZmFsc2U7XG5cbiAgaWYgKGRhdGVTdHJpbmcpIHtcbiAgICBpc0ludmFsaWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZGF0ZVN0cmluZ1BhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi9cIik7XG4gICAgY29uc3QgW21vbnRoLCBkYXksIHllYXJdID0gZGF0ZVN0cmluZ1BhcnRzLm1hcCgoc3RyKSA9PiB7XG4gICAgICBsZXQgdmFsdWU7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChzdHIsIDEwKTtcbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZCkpIHZhbHVlID0gcGFyc2VkO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKG1vbnRoICYmIGRheSAmJiB5ZWFyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGNoZWNrRGF0ZSA9IHNldERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNoZWNrRGF0ZS5nZXRNb250aCgpID09PSBtb250aCAtIDEgJiZcbiAgICAgICAgY2hlY2tEYXRlLmdldERhdGUoKSA9PT0gZGF5ICYmXG4gICAgICAgIGNoZWNrRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmXG4gICAgICAgIGRhdGVTdHJpbmdQYXJ0c1syXS5sZW5ndGggPT09IDQgJiZcbiAgICAgICAgaXNEYXRlV2l0aGluTWluQW5kTWF4KGNoZWNrRGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSlcbiAgICAgICkge1xuICAgICAgICBpc0ludmFsaWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNJbnZhbGlkO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgdmFsdWUgaW4gdGhlIGlucHV0IGFzIGEgdmFsaWQgZGF0ZSBvZiBmb3JtYXQgTS9EL1lZWVlcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IHZhbGlkYXRlRGF0ZUlucHV0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgZXh0ZXJuYWxJbnB1dEVsIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG4gIGNvbnN0IGlzSW52YWxpZCA9IGlzRGF0ZUlucHV0SW52YWxpZChleHRlcm5hbElucHV0RWwpO1xuXG4gIGlmIChpc0ludmFsaWQgJiYgIWV4dGVybmFsSW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIGV4dGVybmFsSW5wdXRFbC5zZXRDdXN0b21WYWxpZGl0eShWQUxJREFUSU9OX01FU1NBR0UpO1xuICB9XG5cbiAgaWYgKCFpc0ludmFsaWQgJiYgZXh0ZXJuYWxJbnB1dEVsLnZhbGlkYXRpb25NZXNzYWdlID09PSBWQUxJREFUSU9OX01FU1NBR0UpIHtcbiAgICBleHRlcm5hbElucHV0RWwuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gIH1cbn07XG5cbi8vICNlbmRyZWdpb24gVmFsaWRhdGlvblxuXG4vKipcbiAqIEVuYWJsZSB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCByZWNvbmNpbGVJbnB1dFZhbHVlcyA9IChlbCkgPT4ge1xuICBjb25zdCB7IGludGVybmFsSW5wdXRFbCwgaW5wdXREYXRlIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG4gIGxldCBuZXdWYWx1ZSA9IFwiXCI7XG5cbiAgaWYgKGlucHV0RGF0ZSAmJiAhaXNEYXRlSW5wdXRJbnZhbGlkKGVsKSkge1xuICAgIG5ld1ZhbHVlID0gZm9ybWF0RGF0ZShpbnB1dERhdGUpO1xuICB9XG5cbiAgaWYgKGludGVybmFsSW5wdXRFbC52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICBjaGFuZ2VFbGVtZW50VmFsdWUoaW50ZXJuYWxJbnB1dEVsLCBuZXdWYWx1ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogU2VsZWN0IHRoZSB2YWx1ZSBvZiB0aGUgZGF0ZSBwaWNrZXIgaW5wdXRzLlxuICpcbiAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBkYXRlIHBpY2tlciBjb21wb25lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlU3RyaW5nIFRoZSBkYXRlIHN0cmluZyB0byB1cGRhdGUgaW4gWVlZWS1NTS1ERCBmb3JtYXRcbiAqL1xuY29uc3Qgc2V0Q2FsZW5kYXJWYWx1ZSA9IChlbCwgZGF0ZVN0cmluZykgPT4ge1xuICBjb25zdCBwYXJzZWREYXRlID0gcGFyc2VEYXRlU3RyaW5nKGRhdGVTdHJpbmcpO1xuXG4gIGlmIChwYXJzZWREYXRlKSB7XG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdERhdGUocGFyc2VkRGF0ZSwgREVGQVVMVF9FWFRFUk5BTF9EQVRFX0ZPUk1BVCk7XG5cbiAgICBjb25zdCB7IGRhdGVQaWNrZXJFbCwgaW50ZXJuYWxJbnB1dEVsLCBleHRlcm5hbElucHV0RWwgfSA9XG4gICAgICBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG5cbiAgICBjaGFuZ2VFbGVtZW50VmFsdWUoaW50ZXJuYWxJbnB1dEVsLCBkYXRlU3RyaW5nKTtcbiAgICBjaGFuZ2VFbGVtZW50VmFsdWUoZXh0ZXJuYWxJbnB1dEVsLCBmb3JtYXR0ZWREYXRlKTtcblxuICAgIHZhbGlkYXRlRGF0ZUlucHV0KGRhdGVQaWNrZXJFbCk7XG4gIH1cbn07XG5cbi8qKlxuICogRW5oYW5jZSBhbiBpbnB1dCB3aXRoIHRoZSBkYXRlIHBpY2tlciBlbGVtZW50c1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIFRoZSBpbml0aWFsIHdyYXBwaW5nIGVsZW1lbnQgb2YgdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBlbmhhbmNlRGF0ZVBpY2tlciA9IChlbCkgPT4ge1xuICBjb25zdCBkYXRlUGlja2VyRWwgPSBlbC5jbG9zZXN0KERBVEVfUElDS0VSKTtcbiAgaWYgKGRhdGVQaWNrZXJFbC5kYXRhc2V0LmVuaGFuY2VkKSByZXR1cm47XG5cbiAgY29uc3QgeyBkZWZhdWx0VmFsdWUgfSA9IGRhdGVQaWNrZXJFbC5kYXRhc2V0O1xuXG4gIGNvbnN0IGludGVybmFsSW5wdXRFbCA9IGRhdGVQaWNrZXJFbC5xdWVyeVNlbGVjdG9yKGBpbnB1dGApO1xuXG4gIGlmICghaW50ZXJuYWxJbnB1dEVsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke0RBVEVfUElDS0VSfSBpcyBtaXNzaW5nIGlubmVyIGlucHV0YCk7XG4gIH1cblxuICBpZiAoaW50ZXJuYWxJbnB1dEVsLnZhbHVlKSB7XG4gICAgaW50ZXJuYWxJbnB1dEVsLnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IG1pbkRhdGUgPSBwYXJzZURhdGVTdHJpbmcoXG4gICAgZGF0ZVBpY2tlckVsLmRhdGFzZXQubWluRGF0ZSB8fCBpbnRlcm5hbElucHV0RWwuZ2V0QXR0cmlidXRlKFwibWluXCIpLFxuICApO1xuICBkYXRlUGlja2VyRWwuZGF0YXNldC5taW5EYXRlID0gbWluRGF0ZVxuICAgID8gZm9ybWF0RGF0ZShtaW5EYXRlKVxuICAgIDogREVGQVVMVF9NSU5fREFURTtcblxuICBjb25zdCBtYXhEYXRlID0gcGFyc2VEYXRlU3RyaW5nKFxuICAgIGRhdGVQaWNrZXJFbC5kYXRhc2V0Lm1heERhdGUgfHwgaW50ZXJuYWxJbnB1dEVsLmdldEF0dHJpYnV0ZShcIm1heFwiKSxcbiAgKTtcbiAgaWYgKG1heERhdGUpIHtcbiAgICBkYXRlUGlja2VyRWwuZGF0YXNldC5tYXhEYXRlID0gZm9ybWF0RGF0ZShtYXhEYXRlKTtcbiAgfVxuXG4gIGNvbnN0IGNhbGVuZGFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhbGVuZGFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKERBVEVfUElDS0VSX1dSQVBQRVJfQ0xBU1MpO1xuXG4gIGNvbnN0IGV4dGVybmFsSW5wdXRFbCA9IGludGVybmFsSW5wdXRFbC5jbG9uZU5vZGUoKTtcbiAgZXh0ZXJuYWxJbnB1dEVsLmNsYXNzTGlzdC5hZGQoREFURV9QSUNLRVJfRVhURVJOQUxfSU5QVVRfQ0xBU1MpO1xuICBleHRlcm5hbElucHV0RWwudHlwZSA9IFwidGV4dFwiO1xuXG4gIGNhbGVuZGFyV3JhcHBlci5hcHBlbmRDaGlsZChleHRlcm5hbElucHV0RWwpO1xuICBjYWxlbmRhcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgU2FuaXRpemVyLmVzY2FwZUhUTUxgXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke0RBVEVfUElDS0VSX0JVVFRPTl9DTEFTU31cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgY2FsZW5kYXJcIj48L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiJHtEQVRFX1BJQ0tFUl9DQUxFTkRBUl9DTEFTU31cIiByb2xlPVwiYXBwbGljYXRpb25cIiBoaWRkZW4+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInVzYS1zci1vbmx5ICR7REFURV9QSUNLRVJfU1RBVFVTX0NMQVNTfVwiIHJvbGU9XCJzdGF0dXNcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj48L2Rpdj5gLFxuICApO1xuXG4gIGludGVybmFsSW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gIGludGVybmFsSW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICBpbnRlcm5hbElucHV0RWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBpbnRlcm5hbElucHV0RWwuY2xhc3NMaXN0LmFkZChEQVRFX1BJQ0tFUl9JTlRFUk5BTF9JTlBVVF9DTEFTUyk7XG4gIGludGVybmFsSW5wdXRFbC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgaW50ZXJuYWxJbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZShcIm5hbWVcIik7XG4gIGludGVybmFsSW5wdXRFbC5yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIGRhdGVQaWNrZXJFbC5hcHBlbmRDaGlsZChjYWxlbmRhcldyYXBwZXIpO1xuICBkYXRlUGlja2VyRWwuY2xhc3NMaXN0LmFkZChEQVRFX1BJQ0tFUl9JTklUSUFMSVpFRF9DTEFTUyk7XG5cbiAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgIHNldENhbGVuZGFyVmFsdWUoZGF0ZVBpY2tlckVsLCBkZWZhdWx0VmFsdWUpO1xuICB9XG5cbiAgaWYgKGludGVybmFsSW5wdXRFbC5kaXNhYmxlZCkge1xuICAgIGRpc2FibGUoZGF0ZVBpY2tlckVsKTtcbiAgICBpbnRlcm5hbElucHV0RWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnRlcm5hbElucHV0RWwuaGFzQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKSkge1xuICAgIGFyaWFEaXNhYmxlKGRhdGVQaWNrZXJFbCk7XG4gICAgaW50ZXJuYWxJbnB1dEVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG4gIH1cblxuICBkYXRlUGlja2VyRWwuZGF0YXNldC5lbmhhbmNlZCA9IFwidHJ1ZVwiO1xufTtcblxuLy8gI3JlZ2lvbiBDYWxlbmRhciAtIERhdGUgU2VsZWN0aW9uIFZpZXdcblxuLyoqXG4gKiByZW5kZXIgdGhlIGNhbGVuZGFyLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBkYXRlIHBpY2tlciBjb21wb25lbnRcbiAqIEBwYXJhbSB7RGF0ZX0gX2RhdGVUb0Rpc3BsYXkgYSBkYXRlIHRvIHJlbmRlciBvbiB0aGUgY2FsZW5kYXJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gYSByZWZlcmVuY2UgdG8gdGhlIG5ldyBjYWxlbmRhciBlbGVtZW50XG4gKi9cbmNvbnN0IHJlbmRlckNhbGVuZGFyID0gKGVsLCBfZGF0ZVRvRGlzcGxheSkgPT4ge1xuICBjb25zdCB7XG4gICAgZGF0ZVBpY2tlckVsLFxuICAgIGNhbGVuZGFyRWwsXG4gICAgc3RhdHVzRWwsXG4gICAgc2VsZWN0ZWREYXRlLFxuICAgIG1heERhdGUsXG4gICAgbWluRGF0ZSxcbiAgICByYW5nZURhdGUsXG4gICAgbW9udGhMYWJlbHMsXG4gICAgZGF5T2ZXZWVrbGFiZWxzLFxuICAgIGRheU9mV2Vla3NBYnYsXG4gIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG4gIGNvbnN0IHRvZGF5c0RhdGUgPSB0b2RheSgpO1xuICBsZXQgZGF0ZVRvRGlzcGxheSA9IF9kYXRlVG9EaXNwbGF5IHx8IHRvZGF5c0RhdGU7XG5cbiAgY29uc3QgY2FsZW5kYXJXYXNIaWRkZW4gPSBjYWxlbmRhckVsLmhpZGRlbjtcblxuICBjb25zdCBmb2N1c2VkRGF0ZSA9IGFkZERheXMoZGF0ZVRvRGlzcGxheSwgMCk7XG4gIGNvbnN0IGZvY3VzZWRNb250aCA9IGRhdGVUb0Rpc3BsYXkuZ2V0TW9udGgoKTtcbiAgY29uc3QgZm9jdXNlZFllYXIgPSBkYXRlVG9EaXNwbGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgcHJldk1vbnRoID0gc3ViTW9udGhzKGRhdGVUb0Rpc3BsYXksIDEpO1xuICBjb25zdCBuZXh0TW9udGggPSBhZGRNb250aHMoZGF0ZVRvRGlzcGxheSwgMSk7XG5cbiAgY29uc3QgY3VycmVudEZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGVUb0Rpc3BsYXkpO1xuXG4gIGNvbnN0IGZpcnN0T2ZNb250aCA9IHN0YXJ0T2ZNb250aChkYXRlVG9EaXNwbGF5KTtcbiAgY29uc3QgcHJldkJ1dHRvbnNEaXNhYmxlZCA9IGlzU2FtZU1vbnRoKGRhdGVUb0Rpc3BsYXksIG1pbkRhdGUpO1xuICBjb25zdCBuZXh0QnV0dG9uc0Rpc2FibGVkID0gaXNTYW1lTW9udGgoZGF0ZVRvRGlzcGxheSwgbWF4RGF0ZSk7XG5cbiAgY29uc3Qge1xuICAgIHJhbmdlU3RhcnREYXRlLFxuICAgIHJhbmdlRW5kRGF0ZSxcbiAgICB3aXRoaW5SYW5nZVN0YXJ0RGF0ZSxcbiAgICB3aXRoaW5SYW5nZUVuZERhdGUsXG4gIH0gPSBzZXRSYW5nZURhdGVzKHNlbGVjdGVkRGF0ZSB8fCBkYXRlVG9EaXNwbGF5LCByYW5nZURhdGUpO1xuXG4gIGNvbnN0IG1vbnRoTGFiZWwgPSBtb250aExhYmVsc1tmb2N1c2VkTW9udGhdO1xuXG4gIGNvbnN0IGdlbmVyYXRlRGF0ZUh0bWwgPSAoZGF0ZVRvUmVuZGVyKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtDQUxFTkRBUl9EQVRFX0NMQVNTXTtcbiAgICBjb25zdCBkYXkgPSBkYXRlVG9SZW5kZXIuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZVRvUmVuZGVyLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGVUb1JlbmRlci5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGVUb1JlbmRlci5nZXREYXkoKTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXREYXRlKGRhdGVUb1JlbmRlcik7XG5cbiAgICBsZXQgdGFiaW5kZXggPSBcIi0xXCI7XG5cbiAgICBjb25zdCBpc0Rpc2FibGVkID0gIWlzRGF0ZVdpdGhpbk1pbkFuZE1heChkYXRlVG9SZW5kZXIsIG1pbkRhdGUsIG1heERhdGUpO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBpc1NhbWVEYXkoZGF0ZVRvUmVuZGVyLCBzZWxlY3RlZERhdGUpO1xuXG4gICAgaWYgKGlzU2FtZU1vbnRoKGRhdGVUb1JlbmRlciwgcHJldk1vbnRoKSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKENBTEVOREFSX0RBVEVfUFJFVklPVVNfTU9OVEhfQ0xBU1MpO1xuICAgIH1cblxuICAgIGlmIChpc1NhbWVNb250aChkYXRlVG9SZW5kZXIsIGZvY3VzZWREYXRlKSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKENBTEVOREFSX0RBVEVfQ1VSUkVOVF9NT05USF9DTEFTUyk7XG4gICAgfVxuXG4gICAgaWYgKGlzU2FtZU1vbnRoKGRhdGVUb1JlbmRlciwgbmV4dE1vbnRoKSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKENBTEVOREFSX0RBVEVfTkVYVF9NT05USF9DTEFTUyk7XG4gICAgfVxuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaChDQUxFTkRBUl9EQVRFX1NFTEVDVEVEX0NMQVNTKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc1RvZGF5ID0gaXNTYW1lRGF5KGRhdGVUb1JlbmRlciwgdG9kYXlzRGF0ZSk7XG4gICAgaWYgKGlzVG9kYXkpIHtcbiAgICAgIGNsYXNzZXMucHVzaChDQUxFTkRBUl9EQVRFX1RPREFZX0NMQVNTKTtcbiAgICB9XG5cbiAgICBpZiAocmFuZ2VEYXRlKSB7XG4gICAgICBpZiAoaXNTYW1lRGF5KGRhdGVUb1JlbmRlciwgcmFuZ2VEYXRlKSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goQ0FMRU5EQVJfREFURV9SQU5HRV9EQVRFX0NMQVNTKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2FtZURheShkYXRlVG9SZW5kZXIsIHJhbmdlU3RhcnREYXRlKSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goQ0FMRU5EQVJfREFURV9SQU5HRV9EQVRFX1NUQVJUX0NMQVNTKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2FtZURheShkYXRlVG9SZW5kZXIsIHJhbmdlRW5kRGF0ZSkpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKENBTEVOREFSX0RBVEVfUkFOR0VfREFURV9FTkRfQ0xBU1MpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGlzRGF0ZVdpdGhpbk1pbkFuZE1heChcbiAgICAgICAgICBkYXRlVG9SZW5kZXIsXG4gICAgICAgICAgd2l0aGluUmFuZ2VTdGFydERhdGUsXG4gICAgICAgICAgd2l0aGluUmFuZ2VFbmREYXRlLFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKENBTEVOREFSX0RBVEVfV0lUSElOX1JBTkdFX0NMQVNTKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNTYW1lRGF5KGRhdGVUb1JlbmRlciwgZm9jdXNlZERhdGUpKSB7XG4gICAgICB0YWJpbmRleCA9IFwiMFwiO1xuICAgICAgY2xhc3Nlcy5wdXNoKENBTEVOREFSX0RBVEVfRk9DVVNFRF9DTEFTUyk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9udGhTdHIgPSBtb250aExhYmVsc1ttb250aF07XG4gICAgY29uc3QgZGF5U3RyID0gZGF5T2ZXZWVrbGFiZWxzW2RheU9mV2Vla107XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCB0YWJpbmRleCk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzZXMuam9pbihcIiBcIikpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRheVwiLCBkYXkpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1vbnRoXCIsIG1vbnRoICsgMSk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEteWVhclwiLCB5ZWFyKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBmb3JtYXR0ZWREYXRlKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFxuICAgICAgXCJhcmlhLWxhYmVsXCIsXG4gICAgICBTYW5pdGl6ZXIuZXNjYXBlSFRNTGAke2RheX0gJHttb250aFN0cn0gJHt5ZWFyfSAke2RheVN0cn1gLFxuICAgICk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgaXNTZWxlY3RlZCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKTtcbiAgICBpZiAoaXNUb2RheSkge1xuICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtY3VycmVudFwiLCBcImRhdGVcIik7XG4gICAgfVxuICAgIGlmIChpc0Rpc2FibGVkID09PSB0cnVlKSB7XG4gICAgICBidG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBidG4udGV4dENvbnRlbnQgPSBkYXk7XG5cbiAgICByZXR1cm4gYnRuO1xuICB9O1xuXG4gIC8vIHNldCBkYXRlIHRvIGZpcnN0IHJlbmRlcmVkIGRheVxuICBkYXRlVG9EaXNwbGF5ID0gc3RhcnRPZldlZWsoZmlyc3RPZk1vbnRoKTtcblxuICBjb25zdCBkYXlzID0gW107XG5cbiAgd2hpbGUgKFxuICAgIGRheXMubGVuZ3RoIDwgMjggfHxcbiAgICBkYXRlVG9EaXNwbGF5LmdldE1vbnRoKCkgPT09IGZvY3VzZWRNb250aCB8fFxuICAgIGRheXMubGVuZ3RoICUgNyAhPT0gMFxuICApIHtcbiAgICBkYXlzLnB1c2goZ2VuZXJhdGVEYXRlSHRtbChkYXRlVG9EaXNwbGF5KSk7XG4gICAgZGF0ZVRvRGlzcGxheSA9IGFkZERheXMoZGF0ZVRvRGlzcGxheSwgMSk7XG4gIH1cblxuICBjb25zdCBkYXRlc0dyaWQgPSBsaXN0VG9HcmlkSHRtbChkYXlzLCA3KTtcblxuICBjb25zdCBuZXdDYWxlbmRhciA9IGNhbGVuZGFyRWwuY2xvbmVOb2RlKCk7XG4gIG5ld0NhbGVuZGFyLmRhdGFzZXQudmFsdWUgPSBjdXJyZW50Rm9ybWF0dGVkRGF0ZTtcbiAgbmV3Q2FsZW5kYXIuc3R5bGUudG9wID0gYCR7ZGF0ZVBpY2tlckVsLm9mZnNldEhlaWdodH1weGA7XG4gIG5ld0NhbGVuZGFyLmhpZGRlbiA9IGZhbHNlO1xuICBuZXdDYWxlbmRhci5pbm5lckhUTUwgPSBTYW5pdGl6ZXIuZXNjYXBlSFRNTGBcbiAgICA8ZGl2IHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cIiR7Q0FMRU5EQVJfREFURV9QSUNLRVJfQ0xBU1N9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiJHtDQUxFTkRBUl9ST1dfQ0xBU1N9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke0NBTEVOREFSX0NFTExfQ0xBU1N9ICR7Q0FMRU5EQVJfQ0VMTF9DRU5URVJfSVRFTVNfQ0xBU1N9XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cIiR7Q0FMRU5EQVJfUFJFVklPVVNfWUVBUl9DTEFTU31cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5hdmlnYXRlIGJhY2sgb25lIHllYXJcIlxuICAgICAgICAgICAgJHtwcmV2QnV0dG9uc0Rpc2FibGVkID8gYGRpc2FibGVkPVwiZGlzYWJsZWRcImAgOiBcIlwifVxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke0NBTEVOREFSX0NFTExfQ0xBU1N9ICR7Q0FMRU5EQVJfQ0VMTF9DRU5URVJfSVRFTVNfQ0xBU1N9XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cIiR7Q0FMRU5EQVJfUFJFVklPVVNfTU9OVEhfQ0xBU1N9XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOYXZpZ2F0ZSBiYWNrIG9uZSBtb250aFwiXG4gICAgICAgICAgICAke3ByZXZCdXR0b25zRGlzYWJsZWQgPyBgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiYCA6IFwiXCJ9XG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7Q0FMRU5EQVJfQ0VMTF9DTEFTU30gJHtDQUxFTkRBUl9NT05USF9MQUJFTF9DTEFTU31cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtDQUxFTkRBUl9NT05USF9TRUxFQ1RJT05fQ0xBU1N9XCIgYXJpYS1sYWJlbD1cIiR7bW9udGhMYWJlbH0uIFNlbGVjdCBtb250aFwiXG4gICAgICAgICAgPiR7bW9udGhMYWJlbH08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiJHtDQUxFTkRBUl9ZRUFSX1NFTEVDVElPTl9DTEFTU31cIiBhcmlhLWxhYmVsPVwiJHtmb2N1c2VkWWVhcn0uIFNlbGVjdCB5ZWFyXCJcbiAgICAgICAgICA+JHtmb2N1c2VkWWVhcn08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCIke0NBTEVOREFSX0NFTExfQ0xBU1N9ICR7Q0FMRU5EQVJfQ0VMTF9DRU5URVJfSVRFTVNfQ0xBU1N9XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cIiR7Q0FMRU5EQVJfTkVYVF9NT05USF9DTEFTU31cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5hdmlnYXRlIGZvcndhcmQgb25lIG1vbnRoXCJcbiAgICAgICAgICAgICR7bmV4dEJ1dHRvbnNEaXNhYmxlZCA/IGBkaXNhYmxlZD1cImRpc2FibGVkXCJgIDogXCJcIn1cbiAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiJHtDQUxFTkRBUl9DRUxMX0NMQVNTfSAke0NBTEVOREFSX0NFTExfQ0VOVEVSX0lURU1TX0NMQVNTfVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCIke0NBTEVOREFSX05FWFRfWUVBUl9DTEFTU31cIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5hdmlnYXRlIGZvcndhcmQgb25lIHllYXJcIlxuICAgICAgICAgICAgJHtuZXh0QnV0dG9uc0Rpc2FibGVkID8gYGRpc2FibGVkPVwiZGlzYWJsZWRcImAgOiBcIlwifVxuICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICB0YWJsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBDQUxFTkRBUl9UQUJMRV9DTEFTUyk7XG5cbiAgY29uc3QgdGFibGVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xuICB0YWJsZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGFibGVIZWFkKTtcbiAgY29uc3QgdGFibGVIZWFkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICB0YWJsZUhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRhYmxlSGVhZFJvdyk7XG5cbiAgZGF5T2ZXZWVrbGFiZWxzLmZvckVhY2goKGRheU9mV2VlaywgaSkgPT4ge1xuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIHRoLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIENBTEVOREFSX0RBWV9PRl9XRUVLX0NMQVNTKTtcbiAgICB0aC5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLCBcImNvbFwiKTtcbiAgICB0aC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIGRheU9mV2Vlayk7XG4gICAgdGgudGV4dENvbnRlbnQgPSBkYXlPZldlZWtzQWJ2W2ldO1xuICAgIHRhYmxlSGVhZFJvdy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGgpO1xuICB9KTtcblxuICBjb25zdCB0YWJsZUJvZHkgPSBjcmVhdGVUYWJsZUJvZHkoZGF0ZXNHcmlkKTtcbiAgdGFibGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRhYmxlQm9keSk7XG5cbiAgLy8gQ29udGFpbmVyIGZvciBZZWFycywgTW9udGhzLCBhbmQgRGF5c1xuICBjb25zdCBkYXRlUGlja2VyQ2FsZW5kYXJDb250YWluZXIgPVxuICAgIG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfREFURV9QSUNLRVIpO1xuXG4gIGRhdGVQaWNrZXJDYWxlbmRhckNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgdGFibGUpO1xuXG4gIGNhbGVuZGFyRWwucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Q2FsZW5kYXIsIGNhbGVuZGFyRWwpO1xuXG4gIGRhdGVQaWNrZXJFbC5jbGFzc0xpc3QuYWRkKERBVEVfUElDS0VSX0FDVElWRV9DTEFTUyk7XG5cbiAgY29uc3Qgc3RhdHVzZXMgPSBbXTtcblxuICBpZiAoaXNTYW1lRGF5KHNlbGVjdGVkRGF0ZSwgZm9jdXNlZERhdGUpKSB7XG4gICAgc3RhdHVzZXMucHVzaChcIlNlbGVjdGVkIGRhdGVcIik7XG4gIH1cblxuICBpZiAoY2FsZW5kYXJXYXNIaWRkZW4pIHtcbiAgICBzdGF0dXNlcy5wdXNoKFxuICAgICAgXCJZb3UgY2FuIG5hdmlnYXRlIGJ5IGRheSB1c2luZyBsZWZ0IGFuZCByaWdodCBhcnJvd3NcIixcbiAgICAgIFwiV2Vla3MgYnkgdXNpbmcgdXAgYW5kIGRvd24gYXJyb3dzXCIsXG4gICAgICBcIk1vbnRocyBieSB1c2luZyBwYWdlIHVwIGFuZCBwYWdlIGRvd24ga2V5c1wiLFxuICAgICAgXCJZZWFycyBieSB1c2luZyBzaGlmdCBwbHVzIHBhZ2UgdXAgYW5kIHNoaWZ0IHBsdXMgcGFnZSBkb3duXCIsXG4gICAgICBcIkhvbWUgYW5kIGVuZCBrZXlzIG5hdmlnYXRlIHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHdlZWtcIixcbiAgICApO1xuICAgIHN0YXR1c0VsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBzdGF0dXNlcy5wdXNoKGAke21vbnRoTGFiZWx9ICR7Zm9jdXNlZFllYXJ9YCk7XG4gIH1cbiAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBzdGF0dXNlcy5qb2luKFwiLiBcIik7XG5cbiAgcmV0dXJuIG5ld0NhbGVuZGFyO1xufTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBiYWNrIG9uZSB5ZWFyIGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBfYnV0dG9uRWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNwbGF5UHJldmlvdXNZZWFyID0gKF9idXR0b25FbCkgPT4ge1xuICBpZiAoX2J1dHRvbkVsLmRpc2FibGVkKSByZXR1cm47XG4gIGNvbnN0IHsgY2FsZW5kYXJFbCwgY2FsZW5kYXJEYXRlLCBtaW5EYXRlLCBtYXhEYXRlIH0gPVxuICAgIGdldERhdGVQaWNrZXJDb250ZXh0KF9idXR0b25FbCk7XG4gIGxldCBkYXRlID0gc3ViWWVhcnMoY2FsZW5kYXJEYXRlLCAxKTtcbiAgZGF0ZSA9IGtlZXBEYXRlQmV0d2Vlbk1pbkFuZE1heChkYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgY29uc3QgbmV3Q2FsZW5kYXIgPSByZW5kZXJDYWxlbmRhcihjYWxlbmRhckVsLCBkYXRlKTtcblxuICBsZXQgbmV4dFRvRm9jdXMgPSBuZXdDYWxlbmRhci5xdWVyeVNlbGVjdG9yKENBTEVOREFSX1BSRVZJT1VTX1lFQVIpO1xuICBpZiAobmV4dFRvRm9jdXMuZGlzYWJsZWQpIHtcbiAgICBuZXh0VG9Gb2N1cyA9IG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfREFURV9QSUNLRVIpO1xuICB9XG4gIG5leHRUb0ZvY3VzLmZvY3VzKCk7XG59O1xuXG4vKipcbiAqIE5hdmlnYXRlIGJhY2sgb25lIG1vbnRoIGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBfYnV0dG9uRWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNwbGF5UHJldmlvdXNNb250aCA9IChfYnV0dG9uRWwpID0+IHtcbiAgaWYgKF9idXR0b25FbC5kaXNhYmxlZCkgcmV0dXJuO1xuICBjb25zdCB7IGNhbGVuZGFyRWwsIGNhbGVuZGFyRGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSB9ID1cbiAgICBnZXREYXRlUGlja2VyQ29udGV4dChfYnV0dG9uRWwpO1xuICBsZXQgZGF0ZSA9IHN1Yk1vbnRocyhjYWxlbmRhckRhdGUsIDEpO1xuICBkYXRlID0ga2VlcERhdGVCZXR3ZWVuTWluQW5kTWF4KGRhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICBjb25zdCBuZXdDYWxlbmRhciA9IHJlbmRlckNhbGVuZGFyKGNhbGVuZGFyRWwsIGRhdGUpO1xuXG4gIGxldCBuZXh0VG9Gb2N1cyA9IG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfUFJFVklPVVNfTU9OVEgpO1xuICBpZiAobmV4dFRvRm9jdXMuZGlzYWJsZWQpIHtcbiAgICBuZXh0VG9Gb2N1cyA9IG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfREFURV9QSUNLRVIpO1xuICB9XG4gIG5leHRUb0ZvY3VzLmZvY3VzKCk7XG59O1xuXG4vKipcbiAqIE5hdmlnYXRlIGZvcndhcmQgb25lIG1vbnRoIGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBfYnV0dG9uRWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNwbGF5TmV4dE1vbnRoID0gKF9idXR0b25FbCkgPT4ge1xuICBpZiAoX2J1dHRvbkVsLmRpc2FibGVkKSByZXR1cm47XG4gIGNvbnN0IHsgY2FsZW5kYXJFbCwgY2FsZW5kYXJEYXRlLCBtaW5EYXRlLCBtYXhEYXRlIH0gPVxuICAgIGdldERhdGVQaWNrZXJDb250ZXh0KF9idXR0b25FbCk7XG4gIGxldCBkYXRlID0gYWRkTW9udGhzKGNhbGVuZGFyRGF0ZSwgMSk7XG4gIGRhdGUgPSBrZWVwRGF0ZUJldHdlZW5NaW5BbmRNYXgoZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIGNvbnN0IG5ld0NhbGVuZGFyID0gcmVuZGVyQ2FsZW5kYXIoY2FsZW5kYXJFbCwgZGF0ZSk7XG5cbiAgbGV0IG5leHRUb0ZvY3VzID0gbmV3Q2FsZW5kYXIucXVlcnlTZWxlY3RvcihDQUxFTkRBUl9ORVhUX01PTlRIKTtcbiAgaWYgKG5leHRUb0ZvY3VzLmRpc2FibGVkKSB7XG4gICAgbmV4dFRvRm9jdXMgPSBuZXdDYWxlbmRhci5xdWVyeVNlbGVjdG9yKENBTEVOREFSX0RBVEVfUElDS0VSKTtcbiAgfVxuICBuZXh0VG9Gb2N1cy5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBmb3J3YXJkIG9uZSB5ZWFyIGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBfYnV0dG9uRWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNwbGF5TmV4dFllYXIgPSAoX2J1dHRvbkVsKSA9PiB7XG4gIGlmIChfYnV0dG9uRWwuZGlzYWJsZWQpIHJldHVybjtcbiAgY29uc3QgeyBjYWxlbmRhckVsLCBjYWxlbmRhckRhdGUsIG1pbkRhdGUsIG1heERhdGUgfSA9XG4gICAgZ2V0RGF0ZVBpY2tlckNvbnRleHQoX2J1dHRvbkVsKTtcbiAgbGV0IGRhdGUgPSBhZGRZZWFycyhjYWxlbmRhckRhdGUsIDEpO1xuICBkYXRlID0ga2VlcERhdGVCZXR3ZWVuTWluQW5kTWF4KGRhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICBjb25zdCBuZXdDYWxlbmRhciA9IHJlbmRlckNhbGVuZGFyKGNhbGVuZGFyRWwsIGRhdGUpO1xuXG4gIGxldCBuZXh0VG9Gb2N1cyA9IG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfTkVYVF9ZRUFSKTtcbiAgaWYgKG5leHRUb0ZvY3VzLmRpc2FibGVkKSB7XG4gICAgbmV4dFRvRm9jdXMgPSBuZXdDYWxlbmRhci5xdWVyeVNlbGVjdG9yKENBTEVOREFSX0RBVEVfUElDS0VSKTtcbiAgfVxuICBuZXh0VG9Gb2N1cy5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBIaWRlIHRoZSBjYWxlbmRhciBvZiBhIGRhdGUgcGlja2VyIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IGhpZGVDYWxlbmRhciA9IChlbCkgPT4ge1xuICBjb25zdCB7IGRhdGVQaWNrZXJFbCwgY2FsZW5kYXJFbCwgc3RhdHVzRWwgfSA9IGdldERhdGVQaWNrZXJDb250ZXh0KGVsKTtcblxuICBkYXRlUGlja2VyRWwuY2xhc3NMaXN0LnJlbW92ZShEQVRFX1BJQ0tFUl9BQ1RJVkVfQ0xBU1MpO1xuICBjYWxlbmRhckVsLmhpZGRlbiA9IHRydWU7XG4gIHN0YXR1c0VsLnRleHRDb250ZW50ID0gXCJcIjtcbn07XG5cbi8qKlxuICogU2VsZWN0IGEgZGF0ZSB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBjYWxlbmRhckRhdGVFbCBBIGRhdGUgZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBzZWxlY3REYXRlID0gKGNhbGVuZGFyRGF0ZUVsKSA9PiB7XG4gIGlmIChjYWxlbmRhckRhdGVFbC5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHsgZGF0ZVBpY2tlckVsLCBleHRlcm5hbElucHV0RWwgfSA9XG4gICAgZ2V0RGF0ZVBpY2tlckNvbnRleHQoY2FsZW5kYXJEYXRlRWwpO1xuXG4gIHNldENhbGVuZGFyVmFsdWUoY2FsZW5kYXJEYXRlRWwsIGNhbGVuZGFyRGF0ZUVsLmRhdGFzZXQudmFsdWUpO1xuICBoaWRlQ2FsZW5kYXIoZGF0ZVBpY2tlckVsKTtcblxuICBleHRlcm5hbElucHV0RWwuZm9jdXMoKTtcbn07XG5cbi8qKlxuICogVG9nZ2xlIHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IHRvZ2dsZUNhbGVuZGFyID0gKGVsKSA9PiB7XG4gIGlmIChlbC5kaXNhYmxlZCB8fCBlbC5oYXNBdHRyaWJ1dGUoXCJhcmlhLWRpc2FibGVkXCIpKSByZXR1cm47XG4gIGNvbnN0IHsgY2FsZW5kYXJFbCwgaW5wdXREYXRlLCBtaW5EYXRlLCBtYXhEYXRlLCBkZWZhdWx0RGF0ZSB9ID1cbiAgICBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG5cbiAgaWYgKGNhbGVuZGFyRWwuaGlkZGVuKSB7XG4gICAgY29uc3QgZGF0ZVRvRGlzcGxheSA9IGtlZXBEYXRlQmV0d2Vlbk1pbkFuZE1heChcbiAgICAgIGlucHV0RGF0ZSB8fCBkZWZhdWx0RGF0ZSB8fCB0b2RheSgpLFxuICAgICAgbWluRGF0ZSxcbiAgICAgIG1heERhdGUsXG4gICAgKTtcbiAgICBjb25zdCBuZXdDYWxlbmRhciA9IHJlbmRlckNhbGVuZGFyKGNhbGVuZGFyRWwsIGRhdGVUb0Rpc3BsYXkpO1xuICAgIG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfREFURV9GT0NVU0VEKS5mb2N1cygpO1xuICB9IGVsc2Uge1xuICAgIGhpZGVDYWxlbmRhcihlbCk7XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBjYWxlbmRhciB3aGVuIHZpc2libGUuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgYW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyXG4gKi9cbmNvbnN0IHVwZGF0ZUNhbGVuZGFySWZWaXNpYmxlID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgY2FsZW5kYXJFbCwgaW5wdXREYXRlLCBtaW5EYXRlLCBtYXhEYXRlIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG4gIGNvbnN0IGNhbGVuZGFyU2hvd24gPSAhY2FsZW5kYXJFbC5oaWRkZW47XG5cbiAgaWYgKGNhbGVuZGFyU2hvd24gJiYgaW5wdXREYXRlKSB7XG4gICAgY29uc3QgZGF0ZVRvRGlzcGxheSA9IGtlZXBEYXRlQmV0d2Vlbk1pbkFuZE1heChpbnB1dERhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICAgIHJlbmRlckNhbGVuZGFyKGNhbGVuZGFyRWwsIGRhdGVUb0Rpc3BsYXkpO1xuICB9XG59O1xuXG4vLyAjZW5kcmVnaW9uIENhbGVuZGFyIC0gRGF0ZSBTZWxlY3Rpb24gVmlld1xuXG4vLyAjcmVnaW9uIENhbGVuZGFyIC0gTW9udGggU2VsZWN0aW9uIFZpZXdcbi8qKlxuICogRGlzcGxheSB0aGUgbW9udGggc2VsZWN0aW9uIHNjcmVlbiBpbiB0aGUgZGF0ZSBwaWNrZXIuXG4gKlxuICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBhIHJlZmVyZW5jZSB0byB0aGUgbmV3IGNhbGVuZGFyIGVsZW1lbnRcbiAqL1xuY29uc3QgZGlzcGxheU1vbnRoU2VsZWN0aW9uID0gKGVsLCBtb250aFRvRGlzcGxheSkgPT4ge1xuICBjb25zdCB7IGNhbGVuZGFyRWwsIHN0YXR1c0VsLCBjYWxlbmRhckRhdGUsIG1pbkRhdGUsIG1heERhdGUsIG1vbnRoTGFiZWxzIH0gPVxuICAgIGdldERhdGVQaWNrZXJDb250ZXh0KGVsKTtcblxuICBjb25zdCBzZWxlY3RlZE1vbnRoID0gY2FsZW5kYXJEYXRlLmdldE1vbnRoKCk7XG4gIGNvbnN0IGZvY3VzZWRNb250aCA9IG1vbnRoVG9EaXNwbGF5ID09IG51bGwgPyBzZWxlY3RlZE1vbnRoIDogbW9udGhUb0Rpc3BsYXk7XG5cbiAgY29uc3QgbW9udGhzID0gbW9udGhMYWJlbHMubWFwKChtb250aCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBtb250aFRvQ2hlY2sgPSBzZXRNb250aChjYWxlbmRhckRhdGUsIGluZGV4KTtcblxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBpc0RhdGVzTW9udGhPdXRzaWRlTWluT3JNYXgoXG4gICAgICBtb250aFRvQ2hlY2ssXG4gICAgICBtaW5EYXRlLFxuICAgICAgbWF4RGF0ZSxcbiAgICApO1xuXG4gICAgbGV0IHRhYmluZGV4ID0gXCItMVwiO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IFtDQUxFTkRBUl9NT05USF9DTEFTU107XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IGluZGV4ID09PSBzZWxlY3RlZE1vbnRoO1xuXG4gICAgaWYgKGluZGV4ID09PSBmb2N1c2VkTW9udGgpIHtcbiAgICAgIHRhYmluZGV4ID0gXCIwXCI7XG4gICAgICBjbGFzc2VzLnB1c2goQ0FMRU5EQVJfTU9OVEhfRk9DVVNFRF9DTEFTUyk7XG4gICAgfVxuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaChDQUxFTkRBUl9NT05USF9TRUxFQ1RFRF9DTEFTUyk7XG4gICAgfVxuXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgdGFiaW5kZXgpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc2VzLmpvaW4oXCIgXCIpKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBpbmRleCk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtbGFiZWxcIiwgbW9udGgpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGlzU2VsZWN0ZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIik7XG4gICAgaWYgKGlzRGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIGJ0bi50ZXh0Q29udGVudCA9IG1vbnRoO1xuXG4gICAgcmV0dXJuIGJ0bjtcbiAgfSk7XG5cbiAgY29uc3QgbW9udGhzSHRtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vbnRoc0h0bWwuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcbiAgbW9udGhzSHRtbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBDQUxFTkRBUl9NT05USF9QSUNLRVJfQ0xBU1MpO1xuXG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICB0YWJsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBDQUxFTkRBUl9UQUJMRV9DTEFTUyk7XG4gIHRhYmxlLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJwcmVzZW50YXRpb25cIik7XG5cbiAgY29uc3QgbW9udGhzR3JpZCA9IGxpc3RUb0dyaWRIdG1sKG1vbnRocywgMyk7XG4gIGNvbnN0IHRhYmxlQm9keSA9IGNyZWF0ZVRhYmxlQm9keShtb250aHNHcmlkKTtcbiAgdGFibGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRhYmxlQm9keSk7XG4gIG1vbnRoc0h0bWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHRhYmxlKTtcblxuICBjb25zdCBuZXdDYWxlbmRhciA9IGNhbGVuZGFyRWwuY2xvbmVOb2RlKCk7XG4gIG5ld0NhbGVuZGFyLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBtb250aHNIdG1sKTtcbiAgY2FsZW5kYXJFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdDYWxlbmRhciwgY2FsZW5kYXJFbCk7XG5cbiAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBhIG1vbnRoLlwiO1xuXG4gIHJldHVybiBuZXdDYWxlbmRhcjtcbn07XG5cbi8qKlxuICogU2VsZWN0IGEgbW9udGggaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBtb250aEVsIEFuIG1vbnRoIGVsZW1lbnQgd2l0aGluIHRoZSBkYXRlIHBpY2tlciBjb21wb25lbnRcbiAqL1xuY29uc3Qgc2VsZWN0TW9udGggPSAobW9udGhFbCkgPT4ge1xuICBpZiAobW9udGhFbC5kaXNhYmxlZCkgcmV0dXJuO1xuICBjb25zdCB7IGNhbGVuZGFyRWwsIGNhbGVuZGFyRGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSB9ID1cbiAgICBnZXREYXRlUGlja2VyQ29udGV4dChtb250aEVsKTtcbiAgY29uc3Qgc2VsZWN0ZWRNb250aCA9IHBhcnNlSW50KG1vbnRoRWwuZGF0YXNldC52YWx1ZSwgMTApO1xuICBsZXQgZGF0ZSA9IHNldE1vbnRoKGNhbGVuZGFyRGF0ZSwgc2VsZWN0ZWRNb250aCk7XG4gIGRhdGUgPSBrZWVwRGF0ZUJldHdlZW5NaW5BbmRNYXgoZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIGNvbnN0IG5ld0NhbGVuZGFyID0gcmVuZGVyQ2FsZW5kYXIoY2FsZW5kYXJFbCwgZGF0ZSk7XG4gIG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfREFURV9GT0NVU0VEKS5mb2N1cygpO1xufTtcblxuLy8gI2VuZHJlZ2lvbiBDYWxlbmRhciAtIE1vbnRoIFNlbGVjdGlvbiBWaWV3XG5cbi8vICNyZWdpb24gQ2FsZW5kYXIgLSBZZWFyIFNlbGVjdGlvbiBWaWV3XG5cbi8qKlxuICogRGlzcGxheSB0aGUgeWVhciBzZWxlY3Rpb24gc2NyZWVuIGluIHRoZSBkYXRlIHBpY2tlci5cbiAqXG4gKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0geWVhclRvRGlzcGxheSB5ZWFyIHRvIGRpc3BsYXkgaW4geWVhciBzZWxlY3Rpb25cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gYSByZWZlcmVuY2UgdG8gdGhlIG5ldyBjYWxlbmRhciBlbGVtZW50XG4gKi9cbmNvbnN0IGRpc3BsYXlZZWFyU2VsZWN0aW9uID0gKGVsLCB5ZWFyVG9EaXNwbGF5KSA9PiB7XG4gIGNvbnN0IHsgY2FsZW5kYXJFbCwgc3RhdHVzRWwsIGNhbGVuZGFyRGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSB9ID1cbiAgICBnZXREYXRlUGlja2VyQ29udGV4dChlbCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gY2FsZW5kYXJEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGZvY3VzZWRZZWFyID0geWVhclRvRGlzcGxheSA9PSBudWxsID8gc2VsZWN0ZWRZZWFyIDogeWVhclRvRGlzcGxheTtcblxuICBsZXQgeWVhclRvQ2h1bmsgPSBmb2N1c2VkWWVhcjtcbiAgeWVhclRvQ2h1bmsgLT0geWVhclRvQ2h1bmsgJSBZRUFSX0NIVU5LO1xuICB5ZWFyVG9DaHVuayA9IE1hdGgubWF4KDAsIHllYXJUb0NodW5rKTtcblxuICBjb25zdCBwcmV2WWVhckNodW5rRGlzYWJsZWQgPSBpc0RhdGVzWWVhck91dHNpZGVNaW5Pck1heChcbiAgICBzZXRZZWFyKGNhbGVuZGFyRGF0ZSwgeWVhclRvQ2h1bmsgLSAxKSxcbiAgICBtaW5EYXRlLFxuICAgIG1heERhdGUsXG4gICk7XG5cbiAgY29uc3QgbmV4dFllYXJDaHVua0Rpc2FibGVkID0gaXNEYXRlc1llYXJPdXRzaWRlTWluT3JNYXgoXG4gICAgc2V0WWVhcihjYWxlbmRhckRhdGUsIHllYXJUb0NodW5rICsgWUVBUl9DSFVOSyksXG4gICAgbWluRGF0ZSxcbiAgICBtYXhEYXRlLFxuICApO1xuXG4gIGNvbnN0IHllYXJzID0gW107XG4gIGxldCB5ZWFySW5kZXggPSB5ZWFyVG9DaHVuaztcbiAgd2hpbGUgKHllYXJzLmxlbmd0aCA8IFlFQVJfQ0hVTkspIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gaXNEYXRlc1llYXJPdXRzaWRlTWluT3JNYXgoXG4gICAgICBzZXRZZWFyKGNhbGVuZGFyRGF0ZSwgeWVhckluZGV4KSxcbiAgICAgIG1pbkRhdGUsXG4gICAgICBtYXhEYXRlLFxuICAgICk7XG5cbiAgICBsZXQgdGFiaW5kZXggPSBcIi0xXCI7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gW0NBTEVOREFSX1lFQVJfQ0xBU1NdO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSB5ZWFySW5kZXggPT09IHNlbGVjdGVkWWVhcjtcblxuICAgIGlmICh5ZWFySW5kZXggPT09IGZvY3VzZWRZZWFyKSB7XG4gICAgICB0YWJpbmRleCA9IFwiMFwiO1xuICAgICAgY2xhc3Nlcy5wdXNoKENBTEVOREFSX1lFQVJfRk9DVVNFRF9DTEFTUyk7XG4gICAgfVxuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIGNsYXNzZXMucHVzaChDQUxFTkRBUl9ZRUFSX1NFTEVDVEVEX0NMQVNTKTtcbiAgICB9XG5cbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCB0YWJpbmRleCk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzZXMuam9pbihcIiBcIikpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHllYXJJbmRleCk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgaXNTZWxlY3RlZCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiKTtcbiAgICBpZiAoaXNEaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgYnRuLnRleHRDb250ZW50ID0geWVhckluZGV4O1xuXG4gICAgeWVhcnMucHVzaChidG4pO1xuICAgIHllYXJJbmRleCArPSAxO1xuICB9XG5cbiAgY29uc3QgbmV3Q2FsZW5kYXIgPSBjYWxlbmRhckVsLmNsb25lTm9kZSgpO1xuXG4gIC8vIGNyZWF0ZSB0aGUgeWVhcnMgY2FsZW5kYXIgd3JhcHBlclxuICBjb25zdCB5ZWFyc0NhbGVuZGFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHllYXJzQ2FsZW5kYXJXcmFwcGVyLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gIHllYXJzQ2FsZW5kYXJXcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIENBTEVOREFSX1lFQVJfUElDS0VSX0NMQVNTKTtcblxuICAvLyBjcmVhdGUgdGFibGUgcGFyZW50XG4gIGNvbnN0IHllYXJzVGFibGVQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIHllYXJzVGFibGVQYXJlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgQ0FMRU5EQVJfVEFCTEVfQ0xBU1MpO1xuXG4gIC8vIGNyZWF0ZSB0YWJsZSBib2R5IGFuZCB0YWJsZSByb3dcbiAgY29uc3QgeWVhcnNIVE1MVGFibGVCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xuICBjb25zdCB5ZWFyc0hUTUxUYWJsZUJvZHlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgLy8gY3JlYXRlIHByZXZpb3VzIGJ1dHRvblxuICBjb25zdCBwcmV2aW91c1llYXJzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJldmlvdXNZZWFyc0J0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBwcmV2aW91c1llYXJzQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIENBTEVOREFSX1BSRVZJT1VTX1lFQVJfQ0hVTktfQ0xBU1MpO1xuICBwcmV2aW91c1llYXJzQnRuLnNldEF0dHJpYnV0ZShcbiAgICBcImFyaWEtbGFiZWxcIixcbiAgICBgTmF2aWdhdGUgYmFjayAke1lFQVJfQ0hVTkt9IHllYXJzYCxcbiAgKTtcbiAgaWYgKHByZXZZZWFyQ2h1bmtEaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgIHByZXZpb3VzWWVhcnNCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIHByZXZpb3VzWWVhcnNCdG4uaW5uZXJIVE1MID0gU2FuaXRpemVyLmVzY2FwZUhUTUxgJm5ic3BgO1xuXG4gIC8vIGNyZWF0ZSBuZXh0IGJ1dHRvblxuICBjb25zdCBuZXh0WWVhcnNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXh0WWVhcnNCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgbmV4dFllYXJzQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIENBTEVOREFSX05FWFRfWUVBUl9DSFVOS19DTEFTUyk7XG4gIG5leHRZZWFyc0J0bi5zZXRBdHRyaWJ1dGUoXG4gICAgXCJhcmlhLWxhYmVsXCIsXG4gICAgYE5hdmlnYXRlIGZvcndhcmQgJHtZRUFSX0NIVU5LfSB5ZWFyc2AsXG4gICk7XG4gIGlmIChuZXh0WWVhckNodW5rRGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICBuZXh0WWVhcnNCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICB9XG4gIG5leHRZZWFyc0J0bi5pbm5lckhUTUwgPSBTYW5pdGl6ZXIuZXNjYXBlSFRNTGAmbmJzcGA7XG5cbiAgLy8gY3JlYXRlIHRoZSBhY3R1YWwgeWVhcnMgdGFibGVcbiAgY29uc3QgeWVhcnNUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgeWVhcnNUYWJsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBDQUxFTkRBUl9UQUJMRV9DTEFTUyk7XG4gIHllYXJzVGFibGUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcInByZXNlbnRhdGlvblwiKTtcblxuICAvLyBjcmVhdGUgdGhlIHllYXJzIGNoaWxkIHRhYmxlXG4gIGNvbnN0IHllYXJzR3JpZCA9IGxpc3RUb0dyaWRIdG1sKHllYXJzLCAzKTtcbiAgY29uc3QgeWVhcnNUYWJsZUJvZHkgPSBjcmVhdGVUYWJsZUJvZHkoeWVhcnNHcmlkKTtcblxuICAvLyBhcHBlbmQgdGhlIGdyaWQgdG8gdGhlIHllYXJzIGNoaWxkIHRhYmxlXG4gIHllYXJzVGFibGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHllYXJzVGFibGVCb2R5KTtcblxuICAvLyBjcmVhdGUgdGhlIHByZXYgYnV0dG9uIHRkIGFuZCBhcHBlbmQgdGhlIHByZXYgYnV0dG9uXG4gIGNvbnN0IHllYXJzSFRNTFRhYmxlQm9keURldGFpbFByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIHllYXJzSFRNTFRhYmxlQm9keURldGFpbFByZXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFxuICAgIFwiYmVmb3JlZW5kXCIsXG4gICAgcHJldmlvdXNZZWFyc0J0bixcbiAgKTtcblxuICAvLyBjcmVhdGUgdGhlIHllYXJzIHRkIGFuZCBhcHBlbmQgdGhlIHllYXJzIGNoaWxkIHRhYmxlXG4gIGNvbnN0IHllYXJzSFRNTFRhYmxlQm9keVllYXJzRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICB5ZWFyc0hUTUxUYWJsZUJvZHlZZWFyc0RldGFpbC5zZXRBdHRyaWJ1dGUoXCJjb2xzcGFuXCIsIFwiM1wiKTtcbiAgeWVhcnNIVE1MVGFibGVCb2R5WWVhcnNEZXRhaWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHllYXJzVGFibGUpO1xuXG4gIC8vIGNyZWF0ZSB0aGUgbmV4dCBidXR0b24gdGQgYW5kIGFwcGVuZCB0aGUgbmV4dCBidXR0b25cbiAgY29uc3QgeWVhcnNIVE1MVGFibGVCb2R5RGV0YWlsTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgeWVhcnNIVE1MVGFibGVCb2R5RGV0YWlsTmV4dC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgbmV4dFllYXJzQnRuKTtcblxuICAvLyBhcHBlbmQgdGhlIHRocmVlIHRkIHRvIHRoZSB5ZWFycyBjaGlsZCB0YWJsZSByb3dcbiAgeWVhcnNIVE1MVGFibGVCb2R5Um93Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICBcImJlZm9yZWVuZFwiLFxuICAgIHllYXJzSFRNTFRhYmxlQm9keURldGFpbFByZXYsXG4gICk7XG4gIHllYXJzSFRNTFRhYmxlQm9keVJvdy5pbnNlcnRBZGphY2VudEVsZW1lbnQoXG4gICAgXCJiZWZvcmVlbmRcIixcbiAgICB5ZWFyc0hUTUxUYWJsZUJvZHlZZWFyc0RldGFpbCxcbiAgKTtcbiAgeWVhcnNIVE1MVGFibGVCb2R5Um93Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICBcImJlZm9yZWVuZFwiLFxuICAgIHllYXJzSFRNTFRhYmxlQm9keURldGFpbE5leHQsXG4gICk7XG5cbiAgLy8gYXBwZW5kIHRoZSB0YWJsZSByb3cgdG8gdGhlIHllYXJzIGNoaWxkIHRhYmxlIGJvZHlcbiAgeWVhcnNIVE1MVGFibGVCb2R5Lmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCB5ZWFyc0hUTUxUYWJsZUJvZHlSb3cpO1xuXG4gIC8vIGFwcGVuZCB0aGUgeWVhcnMgdGFibGUgYm9keSB0byB0aGUgeWVhcnMgcGFyZW50IHRhYmxlXG4gIHllYXJzVGFibGVQYXJlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHllYXJzSFRNTFRhYmxlQm9keSk7XG5cbiAgLy8gYXBwZW5kIHRoZSBwYXJlbnQgdGFibGUgdG8gdGhlIGNhbGVuZGFyIHdyYXBwZXJcbiAgeWVhcnNDYWxlbmRhcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYmVmb3JlZW5kXCIsIHllYXJzVGFibGVQYXJlbnQpO1xuXG4gIC8vIGFwcGVuZCB0aGUgeWVhcnMgY2FsZW5kZXIgdG8gdGhlIG5ldyBjYWxlbmRhclxuICBuZXdDYWxlbmRhci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgeWVhcnNDYWxlbmRhcldyYXBwZXIpO1xuXG4gIC8vIHJlcGxhY2UgY2FsZW5kYXJcbiAgY2FsZW5kYXJFbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdDYWxlbmRhciwgY2FsZW5kYXJFbCk7XG5cbiAgc3RhdHVzRWwudGV4dENvbnRlbnQgPSBTYW5pdGl6ZXIuZXNjYXBlSFRNTGBTaG93aW5nIHllYXJzICR7eWVhclRvQ2h1bmt9IHRvICR7XG4gICAgeWVhclRvQ2h1bmsgKyBZRUFSX0NIVU5LIC0gMVxuICB9LiBTZWxlY3QgYSB5ZWFyLmA7XG5cbiAgcmV0dXJuIG5ld0NhbGVuZGFyO1xufTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBiYWNrIGJ5IHllYXJzIGFuZCBkaXNwbGF5IHRoZSB5ZWFyIHNlbGVjdGlvbiBzY3JlZW4uXG4gKlxuICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNwbGF5UHJldmlvdXNZZWFyQ2h1bmsgPSAoZWwpID0+IHtcbiAgaWYgKGVsLmRpc2FibGVkKSByZXR1cm47XG5cbiAgY29uc3QgeyBjYWxlbmRhckVsLCBjYWxlbmRhckRhdGUsIG1pbkRhdGUsIG1heERhdGUgfSA9XG4gICAgZ2V0RGF0ZVBpY2tlckNvbnRleHQoZWwpO1xuICBjb25zdCB5ZWFyRWwgPSBjYWxlbmRhckVsLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfWUVBUl9GT0NVU0VEKTtcbiAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gcGFyc2VJbnQoeWVhckVsLnRleHRDb250ZW50LCAxMCk7XG5cbiAgbGV0IGFkanVzdGVkWWVhciA9IHNlbGVjdGVkWWVhciAtIFlFQVJfQ0hVTks7XG4gIGFkanVzdGVkWWVhciA9IE1hdGgubWF4KDAsIGFkanVzdGVkWWVhcik7XG5cbiAgY29uc3QgZGF0ZSA9IHNldFllYXIoY2FsZW5kYXJEYXRlLCBhZGp1c3RlZFllYXIpO1xuICBjb25zdCBjYXBwZWREYXRlID0ga2VlcERhdGVCZXR3ZWVuTWluQW5kTWF4KGRhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICBjb25zdCBuZXdDYWxlbmRhciA9IGRpc3BsYXlZZWFyU2VsZWN0aW9uKFxuICAgIGNhbGVuZGFyRWwsXG4gICAgY2FwcGVkRGF0ZS5nZXRGdWxsWWVhcigpLFxuICApO1xuXG4gIGxldCBuZXh0VG9Gb2N1cyA9IG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfUFJFVklPVVNfWUVBUl9DSFVOSyk7XG4gIGlmIChuZXh0VG9Gb2N1cy5kaXNhYmxlZCkge1xuICAgIG5leHRUb0ZvY3VzID0gbmV3Q2FsZW5kYXIucXVlcnlTZWxlY3RvcihDQUxFTkRBUl9ZRUFSX1BJQ0tFUik7XG4gIH1cbiAgbmV4dFRvRm9jdXMuZm9jdXMoKTtcbn07XG5cbi8qKlxuICogTmF2aWdhdGUgZm9yd2FyZCBieSB5ZWFycyBhbmQgZGlzcGxheSB0aGUgeWVhciBzZWxlY3Rpb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBkYXRlIHBpY2tlciBjb21wb25lbnRcbiAqL1xuY29uc3QgZGlzcGxheU5leHRZZWFyQ2h1bmsgPSAoZWwpID0+IHtcbiAgaWYgKGVsLmRpc2FibGVkKSByZXR1cm47XG5cbiAgY29uc3QgeyBjYWxlbmRhckVsLCBjYWxlbmRhckRhdGUsIG1pbkRhdGUsIG1heERhdGUgfSA9XG4gICAgZ2V0RGF0ZVBpY2tlckNvbnRleHQoZWwpO1xuICBjb25zdCB5ZWFyRWwgPSBjYWxlbmRhckVsLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfWUVBUl9GT0NVU0VEKTtcbiAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gcGFyc2VJbnQoeWVhckVsLnRleHRDb250ZW50LCAxMCk7XG5cbiAgbGV0IGFkanVzdGVkWWVhciA9IHNlbGVjdGVkWWVhciArIFlFQVJfQ0hVTks7XG4gIGFkanVzdGVkWWVhciA9IE1hdGgubWF4KDAsIGFkanVzdGVkWWVhcik7XG5cbiAgY29uc3QgZGF0ZSA9IHNldFllYXIoY2FsZW5kYXJEYXRlLCBhZGp1c3RlZFllYXIpO1xuICBjb25zdCBjYXBwZWREYXRlID0ga2VlcERhdGVCZXR3ZWVuTWluQW5kTWF4KGRhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICBjb25zdCBuZXdDYWxlbmRhciA9IGRpc3BsYXlZZWFyU2VsZWN0aW9uKFxuICAgIGNhbGVuZGFyRWwsXG4gICAgY2FwcGVkRGF0ZS5nZXRGdWxsWWVhcigpLFxuICApO1xuXG4gIGxldCBuZXh0VG9Gb2N1cyA9IG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfTkVYVF9ZRUFSX0NIVU5LKTtcbiAgaWYgKG5leHRUb0ZvY3VzLmRpc2FibGVkKSB7XG4gICAgbmV4dFRvRm9jdXMgPSBuZXdDYWxlbmRhci5xdWVyeVNlbGVjdG9yKENBTEVOREFSX1lFQVJfUElDS0VSKTtcbiAgfVxuICBuZXh0VG9Gb2N1cy5mb2N1cygpO1xufTtcblxuLyoqXG4gKiBTZWxlY3QgYSB5ZWFyIGluIHRoZSBkYXRlIHBpY2tlciBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudH0geWVhckVsIEEgeWVhciBlbGVtZW50IHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IHNlbGVjdFllYXIgPSAoeWVhckVsKSA9PiB7XG4gIGlmICh5ZWFyRWwuZGlzYWJsZWQpIHJldHVybjtcbiAgY29uc3QgeyBjYWxlbmRhckVsLCBjYWxlbmRhckRhdGUsIG1pbkRhdGUsIG1heERhdGUgfSA9XG4gICAgZ2V0RGF0ZVBpY2tlckNvbnRleHQoeWVhckVsKTtcbiAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gcGFyc2VJbnQoeWVhckVsLmlubmVySFRNTCwgMTApO1xuICBsZXQgZGF0ZSA9IHNldFllYXIoY2FsZW5kYXJEYXRlLCBzZWxlY3RlZFllYXIpO1xuICBkYXRlID0ga2VlcERhdGVCZXR3ZWVuTWluQW5kTWF4KGRhdGUsIG1pbkRhdGUsIG1heERhdGUpO1xuICBjb25zdCBuZXdDYWxlbmRhciA9IHJlbmRlckNhbGVuZGFyKGNhbGVuZGFyRWwsIGRhdGUpO1xuICBuZXdDYWxlbmRhci5xdWVyeVNlbGVjdG9yKENBTEVOREFSX0RBVEVfRk9DVVNFRCkuZm9jdXMoKTtcbn07XG5cbi8vICNlbmRyZWdpb24gQ2FsZW5kYXIgLSBZZWFyIFNlbGVjdGlvbiBWaWV3XG5cbi8vICNyZWdpb24gQ2FsZW5kYXIgRXZlbnQgSGFuZGxpbmdcblxuLyoqXG4gKiBIaWRlIHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZUVzY2FwZUZyb21DYWxlbmRhciA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IGRhdGVQaWNrZXJFbCwgZXh0ZXJuYWxJbnB1dEVsIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChldmVudC50YXJnZXQpO1xuXG4gIGhpZGVDYWxlbmRhcihkYXRlUGlja2VyRWwpO1xuICBleHRlcm5hbElucHV0RWwuZm9jdXMoKTtcblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLy8gI2VuZHJlZ2lvbiBDYWxlbmRhciBFdmVudCBIYW5kbGluZ1xuXG4vLyAjcmVnaW9uIENhbGVuZGFyIERhdGUgRXZlbnQgSGFuZGxpbmdcblxuLyoqXG4gKiBBZGp1c3QgdGhlIGRhdGUgYW5kIGRpc3BsYXkgdGhlIGNhbGVuZGFyIGlmIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBhZGp1c3REYXRlRm4gZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhZGp1c3RlZCBkYXRlXG4gKi9cbmNvbnN0IGFkanVzdENhbGVuZGFyID0gKGFkanVzdERhdGVGbikgPT4gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgY2FsZW5kYXJFbCwgY2FsZW5kYXJEYXRlLCBtaW5EYXRlLCBtYXhEYXRlIH0gPSBnZXREYXRlUGlja2VyQ29udGV4dChcbiAgICBldmVudC50YXJnZXQsXG4gICk7XG5cbiAgY29uc3QgZGF0ZSA9IGFkanVzdERhdGVGbihjYWxlbmRhckRhdGUpO1xuXG4gIGNvbnN0IGNhcHBlZERhdGUgPSBrZWVwRGF0ZUJldHdlZW5NaW5BbmRNYXgoZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIGlmICghaXNTYW1lRGF5KGNhbGVuZGFyRGF0ZSwgY2FwcGVkRGF0ZSkpIHtcbiAgICBjb25zdCBuZXdDYWxlbmRhciA9IHJlbmRlckNhbGVuZGFyKGNhbGVuZGFyRWwsIGNhcHBlZERhdGUpO1xuICAgIG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfREFURV9GT0NVU0VEKS5mb2N1cygpO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG4vKipcbiAqIE5hdmlnYXRlIGJhY2sgb25lIHdlZWsgYW5kIGRpc3BsYXkgdGhlIGNhbGVuZGFyLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlVXBGcm9tRGF0ZSA9IGFkanVzdENhbGVuZGFyKChkYXRlKSA9PiBzdWJXZWVrcyhkYXRlLCAxKSk7XG5cbi8qKlxuICogTmF2aWdhdGUgZm9yd2FyZCBvbmUgd2VlayBhbmQgZGlzcGxheSB0aGUgY2FsZW5kYXIuXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVEb3duRnJvbURhdGUgPSBhZGp1c3RDYWxlbmRhcigoZGF0ZSkgPT4gYWRkV2Vla3MoZGF0ZSwgMSkpO1xuXG4vKipcbiAqIE5hdmlnYXRlIGJhY2sgb25lIGRheSBhbmQgZGlzcGxheSB0aGUgY2FsZW5kYXIuXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVMZWZ0RnJvbURhdGUgPSBhZGp1c3RDYWxlbmRhcigoZGF0ZSkgPT4gc3ViRGF5cyhkYXRlLCAxKSk7XG5cbi8qKlxuICogTmF2aWdhdGUgZm9yd2FyZCBvbmUgZGF5IGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZVJpZ2h0RnJvbURhdGUgPSBhZGp1c3RDYWxlbmRhcigoZGF0ZSkgPT4gYWRkRGF5cyhkYXRlLCAxKSk7XG5cbi8qKlxuICogTmF2aWdhdGUgdG8gdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZUhvbWVGcm9tRGF0ZSA9IGFkanVzdENhbGVuZGFyKChkYXRlKSA9PiBzdGFydE9mV2VlayhkYXRlKSk7XG5cbi8qKlxuICogTmF2aWdhdGUgdG8gdGhlIGVuZCBvZiB0aGUgd2VlayBhbmQgZGlzcGxheSB0aGUgY2FsZW5kYXIuXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVFbmRGcm9tRGF0ZSA9IGFkanVzdENhbGVuZGFyKChkYXRlKSA9PiBlbmRPZldlZWsoZGF0ZSkpO1xuXG4vKipcbiAqIE5hdmlnYXRlIGZvcndhcmQgb25lIG1vbnRoIGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZVBhZ2VEb3duRnJvbURhdGUgPSBhZGp1c3RDYWxlbmRhcigoZGF0ZSkgPT4gYWRkTW9udGhzKGRhdGUsIDEpKTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBiYWNrIG9uZSBtb250aCBhbmQgZGlzcGxheSB0aGUgY2FsZW5kYXIuXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVQYWdlVXBGcm9tRGF0ZSA9IGFkanVzdENhbGVuZGFyKChkYXRlKSA9PiBzdWJNb250aHMoZGF0ZSwgMSkpO1xuXG4vKipcbiAqIE5hdmlnYXRlIGZvcndhcmQgb25lIHllYXIgYW5kIGRpc3BsYXkgdGhlIGNhbGVuZGFyLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlU2hpZnRQYWdlRG93bkZyb21EYXRlID0gYWRqdXN0Q2FsZW5kYXIoKGRhdGUpID0+IGFkZFllYXJzKGRhdGUsIDEpKTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBiYWNrIG9uZSB5ZWFyIGFuZCBkaXNwbGF5IHRoZSBjYWxlbmRhci5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZVNoaWZ0UGFnZVVwRnJvbURhdGUgPSBhZGp1c3RDYWxlbmRhcigoZGF0ZSkgPT4gc3ViWWVhcnMoZGF0ZSwgMSkpO1xuXG4vKipcbiAqIFNldCByYW5nZSBkYXRlIGNsYXNzZXMgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGNhbGVuZGFyLiBDYWxsZWQgd2hlbiBkYXRlIGJ1dHRvbiBpcyBob3ZlcmVkLlxuICogUmV0dXJucyBlYXJseSBpZiB0aGUgZGF0ZSBob3ZlcmVkIGlzIGRpc2FibGVkIG9yIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCBkYXRlLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRhdGVFbCAtIENhbGVuZGFyIGRhdGUgYnV0dG9uIHdpdGhpbiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50LlxuICovXG5cbmNvbnN0IGhhbmRsZU1vdXNlb3ZlckZyb21EYXRlID0gKGRhdGVFbCkgPT4ge1xuICBpZiAoZGF0ZUVsLmRpc2FibGVkKSByZXR1cm47XG5cbiAgY29uc3QgaG92ZXJEYXRlID0gcGFyc2VEYXRlU3RyaW5nKGRhdGVFbC5kYXRhc2V0LnZhbHVlKTtcbiAgY29uc3QgeyBjYWxlbmRhckVsLCBzZWxlY3RlZERhdGUsIHJhbmdlRGF0ZSB9ID0gZ2V0RGF0ZVBpY2tlckNvbnRleHQoZGF0ZUVsKTtcblxuICBpZiAoc2VsZWN0ZWREYXRlKSByZXR1cm47XG5cbiAgY29uc3QgeyB3aXRoaW5SYW5nZVN0YXJ0RGF0ZSwgd2l0aGluUmFuZ2VFbmREYXRlIH0gPSBzZXRSYW5nZURhdGVzKFxuICAgIGhvdmVyRGF0ZSxcbiAgICByYW5nZURhdGUsXG4gICk7XG5cbiAgY29uc3QgZGF0ZUJ1dHRvbnMgPSBjYWxlbmRhckVsLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgYC4ke0NBTEVOREFSX0RBVEVfQ1VSUkVOVF9NT05USF9DTEFTU31gLFxuICApO1xuXG4gIGRhdGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkRhdGUgPSBwYXJzZURhdGVTdHJpbmcoYnV0dG9uLmRhdGFzZXQudmFsdWUpO1xuICAgIGlmIChcbiAgICAgIGlzRGF0ZVdpdGhpbk1pbkFuZE1heChcbiAgICAgICAgYnV0dG9uRGF0ZSxcbiAgICAgICAgd2l0aGluUmFuZ2VTdGFydERhdGUsXG4gICAgICAgIHdpdGhpblJhbmdlRW5kRGF0ZSxcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKENBTEVOREFSX0RBVEVfV0lUSElOX1JBTkdFX0NMQVNTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ0FMRU5EQVJfREFURV9XSVRISU5fUkFOR0VfQ0xBU1MpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyAjZW5kcmVnaW9uIENhbGVuZGFyIERhdGUgRXZlbnQgSGFuZGxpbmdcblxuLy8gI3JlZ2lvbiBDYWxlbmRhciBNb250aCBFdmVudCBIYW5kbGluZ1xuXG4vKipcbiAqIEFkanVzdCB0aGUgbW9udGggYW5kIGRpc3BsYXkgdGhlIG1vbnRoIHNlbGVjdGlvbiBzY3JlZW4gaWYgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGFkanVzdE1vbnRoRm4gZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBhZGp1c3RlZCBtb250aFxuICovXG5jb25zdCBhZGp1c3RNb250aFNlbGVjdGlvblNjcmVlbiA9IChhZGp1c3RNb250aEZuKSA9PiAoZXZlbnQpID0+IHtcbiAgY29uc3QgbW9udGhFbCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3Qgc2VsZWN0ZWRNb250aCA9IHBhcnNlSW50KG1vbnRoRWwuZGF0YXNldC52YWx1ZSwgMTApO1xuICBjb25zdCB7IGNhbGVuZGFyRWwsIGNhbGVuZGFyRGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSB9ID1cbiAgICBnZXREYXRlUGlja2VyQ29udGV4dChtb250aEVsKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBzZXRNb250aChjYWxlbmRhckRhdGUsIHNlbGVjdGVkTW9udGgpO1xuXG4gIGxldCBhZGp1c3RlZE1vbnRoID0gYWRqdXN0TW9udGhGbihzZWxlY3RlZE1vbnRoKTtcbiAgYWRqdXN0ZWRNb250aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDExLCBhZGp1c3RlZE1vbnRoKSk7XG5cbiAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKGNhbGVuZGFyRGF0ZSwgYWRqdXN0ZWRNb250aCk7XG4gIGNvbnN0IGNhcHBlZERhdGUgPSBrZWVwRGF0ZUJldHdlZW5NaW5BbmRNYXgoZGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIGlmICghaXNTYW1lTW9udGgoY3VycmVudERhdGUsIGNhcHBlZERhdGUpKSB7XG4gICAgY29uc3QgbmV3Q2FsZW5kYXIgPSBkaXNwbGF5TW9udGhTZWxlY3Rpb24oXG4gICAgICBjYWxlbmRhckVsLFxuICAgICAgY2FwcGVkRGF0ZS5nZXRNb250aCgpLFxuICAgICk7XG4gICAgbmV3Q2FsZW5kYXIucXVlcnlTZWxlY3RvcihDQUxFTkRBUl9NT05USF9GT0NVU0VEKS5mb2N1cygpO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG4vKipcbiAqIE5hdmlnYXRlIGJhY2sgdGhyZWUgbW9udGhzIGFuZCBkaXNwbGF5IHRoZSBtb250aCBzZWxlY3Rpb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlVXBGcm9tTW9udGggPSBhZGp1c3RNb250aFNlbGVjdGlvblNjcmVlbigobW9udGgpID0+IG1vbnRoIC0gMyk7XG5cbi8qKlxuICogTmF2aWdhdGUgZm9yd2FyZCB0aHJlZSBtb250aHMgYW5kIGRpc3BsYXkgdGhlIG1vbnRoIHNlbGVjdGlvbiBzY3JlZW4uXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVEb3duRnJvbU1vbnRoID0gYWRqdXN0TW9udGhTZWxlY3Rpb25TY3JlZW4oKG1vbnRoKSA9PiBtb250aCArIDMpO1xuXG4vKipcbiAqIE5hdmlnYXRlIGJhY2sgb25lIG1vbnRoIGFuZCBkaXNwbGF5IHRoZSBtb250aCBzZWxlY3Rpb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlTGVmdEZyb21Nb250aCA9IGFkanVzdE1vbnRoU2VsZWN0aW9uU2NyZWVuKChtb250aCkgPT4gbW9udGggLSAxKTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBmb3J3YXJkIG9uZSBtb250aCBhbmQgZGlzcGxheSB0aGUgbW9udGggc2VsZWN0aW9uIHNjcmVlbi5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZVJpZ2h0RnJvbU1vbnRoID0gYWRqdXN0TW9udGhTZWxlY3Rpb25TY3JlZW4oKG1vbnRoKSA9PiBtb250aCArIDEpO1xuXG4vKipcbiAqIE5hdmlnYXRlIHRvIHRoZSBzdGFydCBvZiB0aGUgcm93IG9mIG1vbnRocyBhbmQgZGlzcGxheSB0aGUgbW9udGggc2VsZWN0aW9uIHNjcmVlbi5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZUhvbWVGcm9tTW9udGggPSBhZGp1c3RNb250aFNlbGVjdGlvblNjcmVlbihcbiAgKG1vbnRoKSA9PiBtb250aCAtIChtb250aCAlIDMpLFxuKTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byB0aGUgZW5kIG9mIHRoZSByb3cgb2YgbW9udGhzIGFuZCBkaXNwbGF5IHRoZSBtb250aCBzZWxlY3Rpb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlRW5kRnJvbU1vbnRoID0gYWRqdXN0TW9udGhTZWxlY3Rpb25TY3JlZW4oXG4gIChtb250aCkgPT4gbW9udGggKyAyIC0gKG1vbnRoICUgMyksXG4pO1xuXG4vKipcbiAqIE5hdmlnYXRlIHRvIHRoZSBsYXN0IG1vbnRoIChEZWNlbWJlcikgYW5kIGRpc3BsYXkgdGhlIG1vbnRoIHNlbGVjdGlvbiBzY3JlZW4uXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVQYWdlRG93bkZyb21Nb250aCA9IGFkanVzdE1vbnRoU2VsZWN0aW9uU2NyZWVuKCgpID0+IDExKTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSB0byB0aGUgZmlyc3QgbW9udGggKEphbnVhcnkpIGFuZCBkaXNwbGF5IHRoZSBtb250aCBzZWxlY3Rpb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlUGFnZVVwRnJvbU1vbnRoID0gYWRqdXN0TW9udGhTZWxlY3Rpb25TY3JlZW4oKCkgPT4gMCk7XG5cbi8vICNlbmRyZWdpb24gQ2FsZW5kYXIgTW9udGggRXZlbnQgSGFuZGxpbmdcblxuLy8gI3JlZ2lvbiBDYWxlbmRhciBZZWFyIEV2ZW50IEhhbmRsaW5nXG5cbi8qKlxuICogQWRqdXN0IHRoZSB5ZWFyIGFuZCBkaXNwbGF5IHRoZSB5ZWFyIHNlbGVjdGlvbiBzY3JlZW4gaWYgbmVlZGVkLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGFkanVzdFllYXJGbiBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGFkanVzdGVkIHllYXJcbiAqL1xuY29uc3QgYWRqdXN0WWVhclNlbGVjdGlvblNjcmVlbiA9IChhZGp1c3RZZWFyRm4pID0+IChldmVudCkgPT4ge1xuICBjb25zdCB5ZWFyRWwgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IHNlbGVjdGVkWWVhciA9IHBhcnNlSW50KHllYXJFbC5kYXRhc2V0LnZhbHVlLCAxMCk7XG4gIGNvbnN0IHsgY2FsZW5kYXJFbCwgY2FsZW5kYXJEYXRlLCBtaW5EYXRlLCBtYXhEYXRlIH0gPVxuICAgIGdldERhdGVQaWNrZXJDb250ZXh0KHllYXJFbCk7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gc2V0WWVhcihjYWxlbmRhckRhdGUsIHNlbGVjdGVkWWVhcik7XG5cbiAgbGV0IGFkanVzdGVkWWVhciA9IGFkanVzdFllYXJGbihzZWxlY3RlZFllYXIpO1xuICBhZGp1c3RlZFllYXIgPSBNYXRoLm1heCgwLCBhZGp1c3RlZFllYXIpO1xuXG4gIGNvbnN0IGRhdGUgPSBzZXRZZWFyKGNhbGVuZGFyRGF0ZSwgYWRqdXN0ZWRZZWFyKTtcbiAgY29uc3QgY2FwcGVkRGF0ZSA9IGtlZXBEYXRlQmV0d2Vlbk1pbkFuZE1heChkYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgaWYgKCFpc1NhbWVZZWFyKGN1cnJlbnREYXRlLCBjYXBwZWREYXRlKSkge1xuICAgIGNvbnN0IG5ld0NhbGVuZGFyID0gZGlzcGxheVllYXJTZWxlY3Rpb24oXG4gICAgICBjYWxlbmRhckVsLFxuICAgICAgY2FwcGVkRGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICk7XG4gICAgbmV3Q2FsZW5kYXIucXVlcnlTZWxlY3RvcihDQUxFTkRBUl9ZRUFSX0ZPQ1VTRUQpLmZvY3VzKCk7XG4gIH1cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8qKlxuICogTmF2aWdhdGUgYmFjayB0aHJlZSB5ZWFycyBhbmQgZGlzcGxheSB0aGUgeWVhciBzZWxlY3Rpb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlVXBGcm9tWWVhciA9IGFkanVzdFllYXJTZWxlY3Rpb25TY3JlZW4oKHllYXIpID0+IHllYXIgLSAzKTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBmb3J3YXJkIHRocmVlIHllYXJzIGFuZCBkaXNwbGF5IHRoZSB5ZWFyIHNlbGVjdGlvbiBzY3JlZW4uXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVEb3duRnJvbVllYXIgPSBhZGp1c3RZZWFyU2VsZWN0aW9uU2NyZWVuKCh5ZWFyKSA9PiB5ZWFyICsgMyk7XG5cbi8qKlxuICogTmF2aWdhdGUgYmFjayBvbmUgeWVhciBhbmQgZGlzcGxheSB0aGUgeWVhciBzZWxlY3Rpb24gc2NyZWVuLlxuICpcbiAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgdGhlIGtleWRvd24gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlTGVmdEZyb21ZZWFyID0gYWRqdXN0WWVhclNlbGVjdGlvblNjcmVlbigoeWVhcikgPT4geWVhciAtIDEpO1xuXG4vKipcbiAqIE5hdmlnYXRlIGZvcndhcmQgb25lIHllYXIgYW5kIGRpc3BsYXkgdGhlIHllYXIgc2VsZWN0aW9uIHNjcmVlbi5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZVJpZ2h0RnJvbVllYXIgPSBhZGp1c3RZZWFyU2VsZWN0aW9uU2NyZWVuKCh5ZWFyKSA9PiB5ZWFyICsgMSk7XG5cbi8qKlxuICogTmF2aWdhdGUgdG8gdGhlIHN0YXJ0IG9mIHRoZSByb3cgb2YgeWVhcnMgYW5kIGRpc3BsYXkgdGhlIHllYXIgc2VsZWN0aW9uIHNjcmVlbi5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZUhvbWVGcm9tWWVhciA9IGFkanVzdFllYXJTZWxlY3Rpb25TY3JlZW4oXG4gICh5ZWFyKSA9PiB5ZWFyIC0gKHllYXIgJSAzKSxcbik7XG5cbi8qKlxuICogTmF2aWdhdGUgdG8gdGhlIGVuZCBvZiB0aGUgcm93IG9mIHllYXJzIGFuZCBkaXNwbGF5IHRoZSB5ZWFyIHNlbGVjdGlvbiBzY3JlZW4uXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVFbmRGcm9tWWVhciA9IGFkanVzdFllYXJTZWxlY3Rpb25TY3JlZW4oXG4gICh5ZWFyKSA9PiB5ZWFyICsgMiAtICh5ZWFyICUgMyksXG4pO1xuXG4vKipcbiAqIE5hdmlnYXRlIHRvIGJhY2sgMTIgeWVhcnMgYW5kIGRpc3BsYXkgdGhlIHllYXIgc2VsZWN0aW9uIHNjcmVlbi5cbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZVBhZ2VVcEZyb21ZZWFyID0gYWRqdXN0WWVhclNlbGVjdGlvblNjcmVlbihcbiAgKHllYXIpID0+IHllYXIgLSBZRUFSX0NIVU5LLFxuKTtcblxuLyoqXG4gKiBOYXZpZ2F0ZSBmb3J3YXJkIDEyIHllYXJzIGFuZCBkaXNwbGF5IHRoZSB5ZWFyIHNlbGVjdGlvbiBzY3JlZW4uXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCB0aGUga2V5ZG93biBldmVudFxuICovXG5jb25zdCBoYW5kbGVQYWdlRG93bkZyb21ZZWFyID0gYWRqdXN0WWVhclNlbGVjdGlvblNjcmVlbihcbiAgKHllYXIpID0+IHllYXIgKyBZRUFSX0NIVU5LLFxuKTtcblxuLy8gI2VuZHJlZ2lvbiBDYWxlbmRhciBZZWFyIEV2ZW50IEhhbmRsaW5nXG5cbi8vICNyZWdpb24gRm9jdXMgSGFuZGxpbmcgRXZlbnQgSGFuZGxpbmdcblxuY29uc3QgdGFiSGFuZGxlciA9IChmb2N1c2FibGUpID0+IHtcbiAgY29uc3QgZ2V0Rm9jdXNhYmxlQ29udGV4dCA9IChlbCkgPT4ge1xuICAgIGNvbnN0IHsgY2FsZW5kYXJFbCB9ID0gZ2V0RGF0ZVBpY2tlckNvbnRleHQoZWwpO1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gc2VsZWN0KGZvY3VzYWJsZSwgY2FsZW5kYXJFbCk7XG5cbiAgICBjb25zdCBmaXJzdFRhYkluZGV4ID0gMDtcbiAgICBjb25zdCBsYXN0VGFiSW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IGZpcnN0VGFiU3RvcCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZpcnN0VGFiSW5kZXhdO1xuICAgIGNvbnN0IGxhc3RUYWJTdG9wID0gZm9jdXNhYmxlRWxlbWVudHNbbGFzdFRhYkluZGV4XTtcbiAgICBjb25zdCBmb2N1c0luZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMuaW5kZXhPZihhY3RpdmVFbGVtZW50KCkpO1xuXG4gICAgY29uc3QgaXNMYXN0VGFiID0gZm9jdXNJbmRleCA9PT0gbGFzdFRhYkluZGV4O1xuICAgIGNvbnN0IGlzRmlyc3RUYWIgPSBmb2N1c0luZGV4ID09PSBmaXJzdFRhYkluZGV4O1xuICAgIGNvbnN0IGlzTm90Rm91bmQgPSBmb2N1c0luZGV4ID09PSAtMTtcblxuICAgIHJldHVybiB7XG4gICAgICBmb2N1c2FibGVFbGVtZW50cyxcbiAgICAgIGlzTm90Rm91bmQsXG4gICAgICBmaXJzdFRhYlN0b3AsXG4gICAgICBpc0ZpcnN0VGFiLFxuICAgICAgbGFzdFRhYlN0b3AsXG4gICAgICBpc0xhc3RUYWIsXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRhYkFoZWFkKGV2ZW50KSB7XG4gICAgICBjb25zdCB7IGZpcnN0VGFiU3RvcCwgaXNMYXN0VGFiLCBpc05vdEZvdW5kIH0gPSBnZXRGb2N1c2FibGVDb250ZXh0KFxuICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICApO1xuXG4gICAgICBpZiAoaXNMYXN0VGFiIHx8IGlzTm90Rm91bmQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlyc3RUYWJTdG9wLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0YWJCYWNrKGV2ZW50KSB7XG4gICAgICBjb25zdCB7IGxhc3RUYWJTdG9wLCBpc0ZpcnN0VGFiLCBpc05vdEZvdW5kIH0gPSBnZXRGb2N1c2FibGVDb250ZXh0KFxuICAgICAgICBldmVudC50YXJnZXQsXG4gICAgICApO1xuXG4gICAgICBpZiAoaXNGaXJzdFRhYiB8fCBpc05vdEZvdW5kKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxhc3RUYWJTdG9wLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn07XG5cbmNvbnN0IGRhdGVQaWNrZXJUYWJFdmVudEhhbmRsZXIgPSB0YWJIYW5kbGVyKERBVEVfUElDS0VSX0ZPQ1VTQUJMRSk7XG5jb25zdCBtb250aFBpY2tlclRhYkV2ZW50SGFuZGxlciA9IHRhYkhhbmRsZXIoTU9OVEhfUElDS0VSX0ZPQ1VTQUJMRSk7XG5jb25zdCB5ZWFyUGlja2VyVGFiRXZlbnRIYW5kbGVyID0gdGFiSGFuZGxlcihZRUFSX1BJQ0tFUl9GT0NVU0FCTEUpO1xuXG4vLyAjZW5kcmVnaW9uIEZvY3VzIEhhbmRsaW5nIEV2ZW50IEhhbmRsaW5nXG5cbi8vICNyZWdpb24gRGF0ZSBQaWNrZXIgRXZlbnQgRGVsZWdhdGlvbiBSZWdpc3RyYXRpb24gLyBDb21wb25lbnRcblxuY29uc3QgZGF0ZVBpY2tlckV2ZW50cyA9IHtcbiAgW0NMSUNLXToge1xuICAgIFtEQVRFX1BJQ0tFUl9CVVRUT05dKCkge1xuICAgICAgdG9nZ2xlQ2FsZW5kYXIodGhpcyk7XG4gICAgfSxcbiAgICBbQ0FMRU5EQVJfREFURV0oKSB7XG4gICAgICBzZWxlY3REYXRlKHRoaXMpO1xuICAgIH0sXG4gICAgW0NBTEVOREFSX01PTlRIXSgpIHtcbiAgICAgIHNlbGVjdE1vbnRoKHRoaXMpO1xuICAgIH0sXG4gICAgW0NBTEVOREFSX1lFQVJdKCkge1xuICAgICAgc2VsZWN0WWVhcih0aGlzKTtcbiAgICB9LFxuICAgIFtDQUxFTkRBUl9QUkVWSU9VU19NT05USF0oKSB7XG4gICAgICBkaXNwbGF5UHJldmlvdXNNb250aCh0aGlzKTtcbiAgICB9LFxuICAgIFtDQUxFTkRBUl9ORVhUX01PTlRIXSgpIHtcbiAgICAgIGRpc3BsYXlOZXh0TW9udGgodGhpcyk7XG4gICAgfSxcbiAgICBbQ0FMRU5EQVJfUFJFVklPVVNfWUVBUl0oKSB7XG4gICAgICBkaXNwbGF5UHJldmlvdXNZZWFyKHRoaXMpO1xuICAgIH0sXG4gICAgW0NBTEVOREFSX05FWFRfWUVBUl0oKSB7XG4gICAgICBkaXNwbGF5TmV4dFllYXIodGhpcyk7XG4gICAgfSxcbiAgICBbQ0FMRU5EQVJfUFJFVklPVVNfWUVBUl9DSFVOS10oKSB7XG4gICAgICBkaXNwbGF5UHJldmlvdXNZZWFyQ2h1bmsodGhpcyk7XG4gICAgfSxcbiAgICBbQ0FMRU5EQVJfTkVYVF9ZRUFSX0NIVU5LXSgpIHtcbiAgICAgIGRpc3BsYXlOZXh0WWVhckNodW5rKHRoaXMpO1xuICAgIH0sXG4gICAgW0NBTEVOREFSX01PTlRIX1NFTEVDVElPTl0oKSB7XG4gICAgICBjb25zdCBuZXdDYWxlbmRhciA9IGRpc3BsYXlNb250aFNlbGVjdGlvbih0aGlzKTtcbiAgICAgIG5ld0NhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoQ0FMRU5EQVJfTU9OVEhfRk9DVVNFRCkuZm9jdXMoKTtcbiAgICB9LFxuICAgIFtDQUxFTkRBUl9ZRUFSX1NFTEVDVElPTl0oKSB7XG4gICAgICBjb25zdCBuZXdDYWxlbmRhciA9IGRpc3BsYXlZZWFyU2VsZWN0aW9uKHRoaXMpO1xuICAgICAgbmV3Q2FsZW5kYXIucXVlcnlTZWxlY3RvcihDQUxFTkRBUl9ZRUFSX0ZPQ1VTRUQpLmZvY3VzKCk7XG4gICAgfSxcbiAgfSxcbiAga2V5dXA6IHtcbiAgICBbREFURV9QSUNLRVJfQ0FMRU5EQVJdKGV2ZW50KSB7XG4gICAgICBjb25zdCBrZXlkb3duID0gdGhpcy5kYXRhc2V0LmtleWRvd25LZXlDb2RlO1xuICAgICAgaWYgKGAke2V2ZW50LmtleUNvZGV9YCAhPT0ga2V5ZG93bikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGtleWRvd246IHtcbiAgICBbREFURV9QSUNLRVJfRVhURVJOQUxfSU5QVVRdKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZQ09ERSkge1xuICAgICAgICB2YWxpZGF0ZURhdGVJbnB1dCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtDQUxFTkRBUl9EQVRFXToga2V5bWFwKHtcbiAgICAgIFVwOiBoYW5kbGVVcEZyb21EYXRlLFxuICAgICAgQXJyb3dVcDogaGFuZGxlVXBGcm9tRGF0ZSxcbiAgICAgIERvd246IGhhbmRsZURvd25Gcm9tRGF0ZSxcbiAgICAgIEFycm93RG93bjogaGFuZGxlRG93bkZyb21EYXRlLFxuICAgICAgTGVmdDogaGFuZGxlTGVmdEZyb21EYXRlLFxuICAgICAgQXJyb3dMZWZ0OiBoYW5kbGVMZWZ0RnJvbURhdGUsXG4gICAgICBSaWdodDogaGFuZGxlUmlnaHRGcm9tRGF0ZSxcbiAgICAgIEFycm93UmlnaHQ6IGhhbmRsZVJpZ2h0RnJvbURhdGUsXG4gICAgICBIb21lOiBoYW5kbGVIb21lRnJvbURhdGUsXG4gICAgICBFbmQ6IGhhbmRsZUVuZEZyb21EYXRlLFxuICAgICAgUGFnZURvd246IGhhbmRsZVBhZ2VEb3duRnJvbURhdGUsXG4gICAgICBQYWdlVXA6IGhhbmRsZVBhZ2VVcEZyb21EYXRlLFxuICAgICAgXCJTaGlmdCtQYWdlRG93blwiOiBoYW5kbGVTaGlmdFBhZ2VEb3duRnJvbURhdGUsXG4gICAgICBcIlNoaWZ0K1BhZ2VVcFwiOiBoYW5kbGVTaGlmdFBhZ2VVcEZyb21EYXRlLFxuICAgICAgVGFiOiBkYXRlUGlja2VyVGFiRXZlbnRIYW5kbGVyLnRhYkFoZWFkLFxuICAgIH0pLFxuICAgIFtDQUxFTkRBUl9EQVRFX1BJQ0tFUl06IGtleW1hcCh7XG4gICAgICBUYWI6IGRhdGVQaWNrZXJUYWJFdmVudEhhbmRsZXIudGFiQWhlYWQsXG4gICAgICBcIlNoaWZ0K1RhYlwiOiBkYXRlUGlja2VyVGFiRXZlbnRIYW5kbGVyLnRhYkJhY2ssXG4gICAgfSksXG4gICAgW0NBTEVOREFSX01PTlRIXToga2V5bWFwKHtcbiAgICAgIFVwOiBoYW5kbGVVcEZyb21Nb250aCxcbiAgICAgIEFycm93VXA6IGhhbmRsZVVwRnJvbU1vbnRoLFxuICAgICAgRG93bjogaGFuZGxlRG93bkZyb21Nb250aCxcbiAgICAgIEFycm93RG93bjogaGFuZGxlRG93bkZyb21Nb250aCxcbiAgICAgIExlZnQ6IGhhbmRsZUxlZnRGcm9tTW9udGgsXG4gICAgICBBcnJvd0xlZnQ6IGhhbmRsZUxlZnRGcm9tTW9udGgsXG4gICAgICBSaWdodDogaGFuZGxlUmlnaHRGcm9tTW9udGgsXG4gICAgICBBcnJvd1JpZ2h0OiBoYW5kbGVSaWdodEZyb21Nb250aCxcbiAgICAgIEhvbWU6IGhhbmRsZUhvbWVGcm9tTW9udGgsXG4gICAgICBFbmQ6IGhhbmRsZUVuZEZyb21Nb250aCxcbiAgICAgIFBhZ2VEb3duOiBoYW5kbGVQYWdlRG93bkZyb21Nb250aCxcbiAgICAgIFBhZ2VVcDogaGFuZGxlUGFnZVVwRnJvbU1vbnRoLFxuICAgIH0pLFxuICAgIFtDQUxFTkRBUl9NT05USF9QSUNLRVJdOiBrZXltYXAoe1xuICAgICAgVGFiOiBtb250aFBpY2tlclRhYkV2ZW50SGFuZGxlci50YWJBaGVhZCxcbiAgICAgIFwiU2hpZnQrVGFiXCI6IG1vbnRoUGlja2VyVGFiRXZlbnRIYW5kbGVyLnRhYkJhY2ssXG4gICAgfSksXG4gICAgW0NBTEVOREFSX1lFQVJdOiBrZXltYXAoe1xuICAgICAgVXA6IGhhbmRsZVVwRnJvbVllYXIsXG4gICAgICBBcnJvd1VwOiBoYW5kbGVVcEZyb21ZZWFyLFxuICAgICAgRG93bjogaGFuZGxlRG93bkZyb21ZZWFyLFxuICAgICAgQXJyb3dEb3duOiBoYW5kbGVEb3duRnJvbVllYXIsXG4gICAgICBMZWZ0OiBoYW5kbGVMZWZ0RnJvbVllYXIsXG4gICAgICBBcnJvd0xlZnQ6IGhhbmRsZUxlZnRGcm9tWWVhcixcbiAgICAgIFJpZ2h0OiBoYW5kbGVSaWdodEZyb21ZZWFyLFxuICAgICAgQXJyb3dSaWdodDogaGFuZGxlUmlnaHRGcm9tWWVhcixcbiAgICAgIEhvbWU6IGhhbmRsZUhvbWVGcm9tWWVhcixcbiAgICAgIEVuZDogaGFuZGxlRW5kRnJvbVllYXIsXG4gICAgICBQYWdlRG93bjogaGFuZGxlUGFnZURvd25Gcm9tWWVhcixcbiAgICAgIFBhZ2VVcDogaGFuZGxlUGFnZVVwRnJvbVllYXIsXG4gICAgfSksXG4gICAgW0NBTEVOREFSX1lFQVJfUElDS0VSXToga2V5bWFwKHtcbiAgICAgIFRhYjogeWVhclBpY2tlclRhYkV2ZW50SGFuZGxlci50YWJBaGVhZCxcbiAgICAgIFwiU2hpZnQrVGFiXCI6IHllYXJQaWNrZXJUYWJFdmVudEhhbmRsZXIudGFiQmFjayxcbiAgICB9KSxcbiAgICBbREFURV9QSUNLRVJfQ0FMRU5EQVJdKGV2ZW50KSB7XG4gICAgICB0aGlzLmRhdGFzZXQua2V5ZG93bktleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIH0sXG4gICAgW0RBVEVfUElDS0VSXShldmVudCkge1xuICAgICAgY29uc3Qga2V5TWFwID0ga2V5bWFwKHtcbiAgICAgICAgRXNjYXBlOiBoYW5kbGVFc2NhcGVGcm9tQ2FsZW5kYXIsXG4gICAgICB9KTtcblxuICAgICAga2V5TWFwKGV2ZW50KTtcbiAgICB9LFxuICB9LFxuICBmb2N1c291dDoge1xuICAgIFtEQVRFX1BJQ0tFUl9FWFRFUk5BTF9JTlBVVF0oKSB7XG4gICAgICB2YWxpZGF0ZURhdGVJbnB1dCh0aGlzKTtcbiAgICB9LFxuICAgIFtEQVRFX1BJQ0tFUl0oZXZlbnQpIHtcbiAgICAgIGlmICghdGhpcy5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICBoaWRlQ2FsZW5kYXIodGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBbREFURV9QSUNLRVJfRVhURVJOQUxfSU5QVVRdKCkge1xuICAgICAgcmVjb25jaWxlSW5wdXRWYWx1ZXModGhpcyk7XG4gICAgICB1cGRhdGVDYWxlbmRhcklmVmlzaWJsZSh0aGlzKTtcbiAgICB9LFxuICB9LFxufTtcblxuaWYgKCFpc0lvc0RldmljZSgpKSB7XG4gIGRhdGVQaWNrZXJFdmVudHMubW91c2VvdmVyID0ge1xuICAgIFtDQUxFTkRBUl9EQVRFX0NVUlJFTlRfTU9OVEhdKCkge1xuICAgICAgaGFuZGxlTW91c2VvdmVyRnJvbURhdGUodGhpcyk7XG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgZGF0ZVBpY2tlciA9IGJlaGF2aW9yKGRhdGVQaWNrZXJFdmVudHMsIHtcbiAgaW5pdChyb290KSB7XG4gICAgc2VsZWN0T3JNYXRjaGVzKERBVEVfUElDS0VSLCByb290KS5mb3JFYWNoKChkYXRlUGlja2VyRWwpID0+IHtcbiAgICAgIGVuaGFuY2VEYXRlUGlja2VyKGRhdGVQaWNrZXJFbCk7XG4gICAgfSk7XG4gIH0sXG4gIGdldERhdGVQaWNrZXJDb250ZXh0LFxuICBkaXNhYmxlLFxuICBhcmlhRGlzYWJsZSxcbiAgZW5hYmxlLFxuICBpc0RhdGVJbnB1dEludmFsaWQsXG4gIHNldENhbGVuZGFyVmFsdWUsXG4gIHZhbGlkYXRlRGF0ZUlucHV0LFxuICByZW5kZXJDYWxlbmRhcixcbiAgdXBkYXRlQ2FsZW5kYXJJZlZpc2libGUsXG59KTtcblxuLy8gI2VuZHJlZ2lvbiBEYXRlIFBpY2tlciBFdmVudCBEZWxlZ2F0aW9uIFJlZ2lzdHJhdGlvbiAvIENvbXBvbmVudFxuXG5tb2R1bGUuZXhwb3J0cyA9IGRhdGVQaWNrZXI7XG4iLCJjb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IHNlbGVjdCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zZWxlY3RcIik7XG5jb25zdCBzZWxlY3RPck1hdGNoZXMgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2VsZWN0LW9yLW1hdGNoZXNcIik7XG5jb25zdCB7IHByZWZpeDogUFJFRklYIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvY29uZmlnXCIpO1xuY29uc3Qge1xuICBnZXREYXRlUGlja2VyQ29udGV4dCxcbiAgaXNEYXRlSW5wdXRJbnZhbGlkLFxuICB1cGRhdGVDYWxlbmRhcklmVmlzaWJsZSxcbn0gPSByZXF1aXJlKFwiLi4vLi4vdXNhLWRhdGUtcGlja2VyL3NyYy9pbmRleFwiKTtcblxuY29uc3QgREFURV9QSUNLRVJfQ0xBU1MgPSBgJHtQUkVGSVh9LWRhdGUtcGlja2VyYDtcbmNvbnN0IERBVEVfUkFOR0VfUElDS0VSX0NMQVNTID0gYCR7UFJFRklYfS1kYXRlLXJhbmdlLXBpY2tlcmA7XG5jb25zdCBEQVRFX1JBTkdFX1BJQ0tFUl9SQU5HRV9TVEFSVF9DTEFTUyA9IGAke0RBVEVfUkFOR0VfUElDS0VSX0NMQVNTfV9fcmFuZ2Utc3RhcnRgO1xuY29uc3QgREFURV9SQU5HRV9QSUNLRVJfUkFOR0VfRU5EX0NMQVNTID0gYCR7REFURV9SQU5HRV9QSUNLRVJfQ0xBU1N9X19yYW5nZS1lbmRgO1xuXG5jb25zdCBEQVRFX1BJQ0tFUiA9IGAuJHtEQVRFX1BJQ0tFUl9DTEFTU31gO1xuY29uc3QgREFURV9SQU5HRV9QSUNLRVIgPSBgLiR7REFURV9SQU5HRV9QSUNLRVJfQ0xBU1N9YDtcbmNvbnN0IERBVEVfUkFOR0VfUElDS0VSX1JBTkdFX1NUQVJUID0gYC4ke0RBVEVfUkFOR0VfUElDS0VSX1JBTkdFX1NUQVJUX0NMQVNTfWA7XG5jb25zdCBEQVRFX1JBTkdFX1BJQ0tFUl9SQU5HRV9FTkQgPSBgLiR7REFURV9SQU5HRV9QSUNLRVJfUkFOR0VfRU5EX0NMQVNTfWA7XG5cbmNvbnN0IERFRkFVTFRfTUlOX0RBVEUgPSBcIjAwMDAtMDEtMDFcIjtcblxuLyoqXG4gKiBUaGUgcHJvcGVydGllcyBhbmQgZWxlbWVudHMgd2l0aGluIHRoZSBkYXRlIHJhbmdlIHBpY2tlci5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IERhdGVSYW5nZVBpY2tlckNvbnRleHRcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGVSYW5nZVBpY2tlckVsXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSByYW5nZVN0YXJ0RWxcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IHJhbmdlRW5kRWxcbiAqL1xuXG4vKipcbiAqIEdldCBhbiBvYmplY3Qgb2YgdGhlIHByb3BlcnRpZXMgYW5kIGVsZW1lbnRzIGJlbG9uZ2luZyBkaXJlY3RseSB0byB0aGUgZ2l2ZW5cbiAqIGRhdGUgcGlja2VyIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCB0aGUgZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcGlja2VyXG4gKiBAcmV0dXJucyB7RGF0ZVJhbmdlUGlja2VyQ29udGV4dH0gZWxlbWVudHNcbiAqL1xuY29uc3QgZ2V0RGF0ZVJhbmdlUGlja2VyQ29udGV4dCA9IChlbCkgPT4ge1xuICBjb25zdCBkYXRlUmFuZ2VQaWNrZXJFbCA9IGVsLmNsb3Nlc3QoREFURV9SQU5HRV9QSUNLRVIpO1xuXG4gIGlmICghZGF0ZVJhbmdlUGlja2VyRWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgaXMgbWlzc2luZyBvdXRlciAke0RBVEVfUkFOR0VfUElDS0VSfWApO1xuICB9XG5cbiAgY29uc3QgcmFuZ2VTdGFydEVsID0gZGF0ZVJhbmdlUGlja2VyRWwucXVlcnlTZWxlY3RvcihcbiAgICBEQVRFX1JBTkdFX1BJQ0tFUl9SQU5HRV9TVEFSVCxcbiAgKTtcbiAgY29uc3QgcmFuZ2VFbmRFbCA9IGRhdGVSYW5nZVBpY2tlckVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgREFURV9SQU5HRV9QSUNLRVJfUkFOR0VfRU5ELFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgZGF0ZVJhbmdlUGlja2VyRWwsXG4gICAgcmFuZ2VTdGFydEVsLFxuICAgIHJhbmdlRW5kRWwsXG4gIH07XG59O1xuXG4vKipcbiAqIGhhbmRsZSB1cGRhdGUgZnJvbSByYW5nZSBzdGFydCBkYXRlIHBpY2tlclxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBkYXRlIHJhbmdlIHBpY2tlclxuICovXG5jb25zdCBoYW5kbGVSYW5nZVN0YXJ0VXBkYXRlID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgZGF0ZVJhbmdlUGlja2VyRWwsIHJhbmdlU3RhcnRFbCwgcmFuZ2VFbmRFbCB9ID1cbiAgICBnZXREYXRlUmFuZ2VQaWNrZXJDb250ZXh0KGVsKTtcbiAgY29uc3QgeyBpbnRlcm5hbElucHV0RWwgfSA9IGdldERhdGVQaWNrZXJDb250ZXh0KHJhbmdlU3RhcnRFbCk7XG4gIGNvbnN0IHVwZGF0ZWREYXRlID0gaW50ZXJuYWxJbnB1dEVsLnZhbHVlO1xuXG4gIGlmICh1cGRhdGVkRGF0ZSAmJiAhaXNEYXRlSW5wdXRJbnZhbGlkKGludGVybmFsSW5wdXRFbCkpIHtcbiAgICByYW5nZUVuZEVsLmRhdGFzZXQubWluRGF0ZSA9IHVwZGF0ZWREYXRlO1xuICAgIHJhbmdlRW5kRWwuZGF0YXNldC5yYW5nZURhdGUgPSB1cGRhdGVkRGF0ZTtcbiAgICByYW5nZUVuZEVsLmRhdGFzZXQuZGVmYXVsdERhdGUgPSB1cGRhdGVkRGF0ZTtcbiAgfSBlbHNlIHtcbiAgICByYW5nZUVuZEVsLmRhdGFzZXQubWluRGF0ZSA9IGRhdGVSYW5nZVBpY2tlckVsLmRhdGFzZXQubWluRGF0ZSB8fCBcIlwiO1xuICAgIHJhbmdlRW5kRWwuZGF0YXNldC5yYW5nZURhdGUgPSBcIlwiO1xuICAgIHJhbmdlRW5kRWwuZGF0YXNldC5kZWZhdWx0RGF0ZSA9IFwiXCI7XG4gIH1cblxuICB1cGRhdGVDYWxlbmRhcklmVmlzaWJsZShyYW5nZUVuZEVsKTtcbn07XG5cbi8qKlxuICogaGFuZGxlIHVwZGF0ZSBmcm9tIHJhbmdlIHN0YXJ0IGRhdGUgcGlja2VyXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgYW4gZWxlbWVudCB3aXRoaW4gdGhlIGRhdGUgcmFuZ2UgcGlja2VyXG4gKi9cbmNvbnN0IGhhbmRsZVJhbmdlRW5kVXBkYXRlID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgZGF0ZVJhbmdlUGlja2VyRWwsIHJhbmdlU3RhcnRFbCwgcmFuZ2VFbmRFbCB9ID1cbiAgICBnZXREYXRlUmFuZ2VQaWNrZXJDb250ZXh0KGVsKTtcbiAgY29uc3QgeyBpbnRlcm5hbElucHV0RWwgfSA9IGdldERhdGVQaWNrZXJDb250ZXh0KHJhbmdlRW5kRWwpO1xuICBjb25zdCB1cGRhdGVkRGF0ZSA9IGludGVybmFsSW5wdXRFbC52YWx1ZTtcblxuICBpZiAodXBkYXRlZERhdGUgJiYgIWlzRGF0ZUlucHV0SW52YWxpZChpbnRlcm5hbElucHV0RWwpKSB7XG4gICAgcmFuZ2VTdGFydEVsLmRhdGFzZXQubWF4RGF0ZSA9IHVwZGF0ZWREYXRlO1xuICAgIHJhbmdlU3RhcnRFbC5kYXRhc2V0LnJhbmdlRGF0ZSA9IHVwZGF0ZWREYXRlO1xuICAgIHJhbmdlU3RhcnRFbC5kYXRhc2V0LmRlZmF1bHREYXRlID0gdXBkYXRlZERhdGU7XG4gIH0gZWxzZSB7XG4gICAgcmFuZ2VTdGFydEVsLmRhdGFzZXQubWF4RGF0ZSA9IGRhdGVSYW5nZVBpY2tlckVsLmRhdGFzZXQubWF4RGF0ZSB8fCBcIlwiO1xuICAgIHJhbmdlU3RhcnRFbC5kYXRhc2V0LnJhbmdlRGF0ZSA9IFwiXCI7XG4gICAgcmFuZ2VTdGFydEVsLmRhdGFzZXQuZGVmYXVsdERhdGUgPSBcIlwiO1xuICB9XG5cbiAgdXBkYXRlQ2FsZW5kYXJJZlZpc2libGUocmFuZ2VTdGFydEVsKTtcbn07XG5cbi8qKlxuICogRW5oYW5jZSBhbiBpbnB1dCB3aXRoIHRoZSBkYXRlIHBpY2tlciBlbGVtZW50c1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIFRoZSBpbml0aWFsIHdyYXBwaW5nIGVsZW1lbnQgb2YgdGhlIGRhdGUgcmFuZ2UgcGlja2VyIGNvbXBvbmVudFxuICovXG5jb25zdCBlbmhhbmNlRGF0ZVJhbmdlUGlja2VyID0gKGVsKSA9PiB7XG4gIGNvbnN0IGRhdGVSYW5nZVBpY2tlckVsID0gZWwuY2xvc2VzdChEQVRFX1JBTkdFX1BJQ0tFUik7XG5cbiAgY29uc3QgW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSA9IHNlbGVjdChEQVRFX1BJQ0tFUiwgZGF0ZVJhbmdlUGlja2VyRWwpO1xuXG4gIGlmICghcmFuZ2VTdGFydCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGAke0RBVEVfUkFOR0VfUElDS0VSfSBpcyBtaXNzaW5nIGlubmVyIHR3byAnJHtEQVRFX1BJQ0tFUn0nIGVsZW1lbnRzYCxcbiAgICApO1xuICB9XG5cbiAgaWYgKCFyYW5nZUVuZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGAke0RBVEVfUkFOR0VfUElDS0VSfSBpcyBtaXNzaW5nIHNlY29uZCAnJHtEQVRFX1BJQ0tFUn0nIGVsZW1lbnRgLFxuICAgICk7XG4gIH1cblxuICByYW5nZVN0YXJ0LmNsYXNzTGlzdC5hZGQoREFURV9SQU5HRV9QSUNLRVJfUkFOR0VfU1RBUlRfQ0xBU1MpO1xuICByYW5nZUVuZC5jbGFzc0xpc3QuYWRkKERBVEVfUkFOR0VfUElDS0VSX1JBTkdFX0VORF9DTEFTUyk7XG5cbiAgaWYgKCFkYXRlUmFuZ2VQaWNrZXJFbC5kYXRhc2V0Lm1pbkRhdGUpIHtcbiAgICBkYXRlUmFuZ2VQaWNrZXJFbC5kYXRhc2V0Lm1pbkRhdGUgPSBERUZBVUxUX01JTl9EQVRFO1xuICB9XG5cbiAgY29uc3QgeyBtaW5EYXRlIH0gPSBkYXRlUmFuZ2VQaWNrZXJFbC5kYXRhc2V0O1xuICByYW5nZVN0YXJ0LmRhdGFzZXQubWluRGF0ZSA9IG1pbkRhdGU7XG4gIHJhbmdlRW5kLmRhdGFzZXQubWluRGF0ZSA9IG1pbkRhdGU7XG5cbiAgY29uc3QgeyBtYXhEYXRlIH0gPSBkYXRlUmFuZ2VQaWNrZXJFbC5kYXRhc2V0O1xuICBpZiAobWF4RGF0ZSkge1xuICAgIHJhbmdlU3RhcnQuZGF0YXNldC5tYXhEYXRlID0gbWF4RGF0ZTtcbiAgICByYW5nZUVuZC5kYXRhc2V0Lm1heERhdGUgPSBtYXhEYXRlO1xuICB9XG5cbiAgaGFuZGxlUmFuZ2VTdGFydFVwZGF0ZShkYXRlUmFuZ2VQaWNrZXJFbCk7XG4gIGhhbmRsZVJhbmdlRW5kVXBkYXRlKGRhdGVSYW5nZVBpY2tlckVsKTtcbn07XG5cbmNvbnN0IGRhdGVSYW5nZVBpY2tlciA9IGJlaGF2aW9yKFxuICB7XG4gICAgXCJpbnB1dCBjaGFuZ2VcIjoge1xuICAgICAgW0RBVEVfUkFOR0VfUElDS0VSX1JBTkdFX1NUQVJUXSgpIHtcbiAgICAgICAgaGFuZGxlUmFuZ2VTdGFydFVwZGF0ZSh0aGlzKTtcbiAgICAgIH0sXG4gICAgICBbREFURV9SQU5HRV9QSUNLRVJfUkFOR0VfRU5EXSgpIHtcbiAgICAgICAgaGFuZGxlUmFuZ2VFbmRVcGRhdGUodGhpcyk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpbml0KHJvb3QpIHtcbiAgICAgIHNlbGVjdE9yTWF0Y2hlcyhEQVRFX1JBTkdFX1BJQ0tFUiwgcm9vdCkuZm9yRWFjaCgoZGF0ZVJhbmdlUGlja2VyRWwpID0+IHtcbiAgICAgICAgZW5oYW5jZURhdGVSYW5nZVBpY2tlcihkYXRlUmFuZ2VQaWNrZXJFbCk7XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYXRlUmFuZ2VQaWNrZXI7XG4iLCJjb25zdCBzZWxlY3RPck1hdGNoZXMgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2VsZWN0LW9yLW1hdGNoZXNcIik7XG5jb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IFNhbml0aXplciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zYW5pdGl6ZXJcIik7XG5jb25zdCB7IHByZWZpeDogUFJFRklYIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvY29uZmlnXCIpO1xuXG5jb25zdCBEUk9QWk9ORV9DTEFTUyA9IGAke1BSRUZJWH0tZmlsZS1pbnB1dGA7XG5jb25zdCBEUk9QWk9ORSA9IGAuJHtEUk9QWk9ORV9DTEFTU31gO1xuY29uc3QgSU5QVVRfQ0xBU1MgPSBgJHtQUkVGSVh9LWZpbGUtaW5wdXRfX2lucHV0YDtcbmNvbnN0IFRBUkdFVF9DTEFTUyA9IGAke1BSRUZJWH0tZmlsZS1pbnB1dF9fdGFyZ2V0YDtcbmNvbnN0IElOUFVUID0gYC4ke0lOUFVUX0NMQVNTfWA7XG5jb25zdCBCT1hfQ0xBU1MgPSBgJHtQUkVGSVh9LWZpbGUtaW5wdXRfX2JveGA7XG5jb25zdCBJTlNUUlVDVElPTlNfQ0xBU1MgPSBgJHtQUkVGSVh9LWZpbGUtaW5wdXRfX2luc3RydWN0aW9uc2A7XG5jb25zdCBQUkVWSUVXX0NMQVNTID0gYCR7UFJFRklYfS1maWxlLWlucHV0X19wcmV2aWV3YDtcbmNvbnN0IFBSRVZJRVdfSEVBRElOR19DTEFTUyA9IGAke1BSRUZJWH0tZmlsZS1pbnB1dF9fcHJldmlldy1oZWFkaW5nYDtcbmNvbnN0IERJU0FCTEVEX0NMQVNTID0gYCR7UFJFRklYfS1maWxlLWlucHV0LS1kaXNhYmxlZGA7XG5jb25zdCBDSE9PU0VfQ0xBU1MgPSBgJHtQUkVGSVh9LWZpbGUtaW5wdXRfX2Nob29zZWA7XG5jb25zdCBBQ0NFUFRFRF9GSUxFX01FU1NBR0VfQ0xBU1MgPSBgJHtQUkVGSVh9LWZpbGUtaW5wdXRfX2FjY2VwdGVkLWZpbGVzLW1lc3NhZ2VgO1xuY29uc3QgRFJBR19URVhUX0NMQVNTID0gYCR7UFJFRklYfS1maWxlLWlucHV0X19kcmFnLXRleHRgO1xuY29uc3QgRFJBR19DTEFTUyA9IGAke1BSRUZJWH0tZmlsZS1pbnB1dC0tZHJhZ2A7XG5jb25zdCBMT0FESU5HX0NMQVNTID0gXCJpcy1sb2FkaW5nXCI7XG5jb25zdCBJTlZBTElEX0ZJTEVfQ0xBU1MgPSBcImhhcy1pbnZhbGlkLWZpbGVcIjtcbmNvbnN0IEdFTkVSSUNfUFJFVklFV19DTEFTU19OQU1FID0gYCR7UFJFRklYfS1maWxlLWlucHV0X19wcmV2aWV3LWltYWdlYDtcbmNvbnN0IEdFTkVSSUNfUFJFVklFV19DTEFTUyA9IGAke0dFTkVSSUNfUFJFVklFV19DTEFTU19OQU1FfS0tZ2VuZXJpY2A7XG5jb25zdCBQREZfUFJFVklFV19DTEFTUyA9IGAke0dFTkVSSUNfUFJFVklFV19DTEFTU19OQU1FfS0tcGRmYDtcbmNvbnN0IFdPUkRfUFJFVklFV19DTEFTUyA9IGAke0dFTkVSSUNfUFJFVklFV19DTEFTU19OQU1FfS0td29yZGA7XG5jb25zdCBWSURFT19QUkVWSUVXX0NMQVNTID0gYCR7R0VORVJJQ19QUkVWSUVXX0NMQVNTX05BTUV9LS12aWRlb2A7XG5jb25zdCBFWENFTF9QUkVWSUVXX0NMQVNTID0gYCR7R0VORVJJQ19QUkVWSUVXX0NMQVNTX05BTUV9LS1leGNlbGA7XG5jb25zdCBTUl9PTkxZX0NMQVNTID0gYCR7UFJFRklYfS1zci1vbmx5YDtcbmNvbnN0IFNQQUNFUl9HSUYgPVxuICBcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBN1wiO1xuY29uc3QgREVGQVVMVF9FUlJPUl9MQUJFTF9URVhUID0gXCJFcnJvcjogVGhpcyBpcyBub3QgYSB2YWxpZCBmaWxlIHR5cGUuXCI7XG5jb25zdCBGSU5FX1BPSU5URVJfTUVESUFfUVVFUlkgPSBcIihob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSlcIjtcblxubGV0IFRZUEVfSVNfVkFMSUQgPSBCb29sZWFuKHRydWUpOyAvLyBsb2dpYyBnYXRlIGZvciBjaGFuZ2UgbGlzdGVuZXJcbmxldCBERUZBVUxUX0FSSUFfTEFCRUxfVEVYVCA9IFwiXCI7XG5sZXQgREVGQVVMVF9GSUxFX1NUQVRVU19URVhUID0gXCJcIjtcblxuY29uc3QgaW5zdHJ1Y3Rpb25NZWRpYVF1ZXJ5Q2xlYW51cHMgPSBuZXcgV2Vha01hcCgpO1xuXG5jb25zdCBnZXRGaW5lUG9pbnRlck1lZGlhUXVlcnlMaXN0ID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShGSU5FX1BPSU5URVJfTUVESUFfUVVFUlkpO1xufTtcblxuY29uc3Qgc2hvdWxkU2hvd0RyYWdUZXh0ID0gKCkgPT4ge1xuICBjb25zdCBmaW5lUG9pbnRlck1lZGlhUXVlcnkgPSBnZXRGaW5lUG9pbnRlck1lZGlhUXVlcnlMaXN0KCk7XG5cbiAgcmV0dXJuIEJvb2xlYW4oZmluZVBvaW50ZXJNZWRpYVF1ZXJ5ICYmIGZpbmVQb2ludGVyTWVkaWFRdWVyeS5tYXRjaGVzKTtcbn07XG5cbi8qKlxuICogVGhlIHByb3BlcnRpZXMgYW5kIGVsZW1lbnRzIHdpdGhpbiB0aGUgZmlsZSBpbnB1dC5cbiAqIEB0eXBlZGVmIHtPYmplY3R9IEZpbGVJbnB1dENvbnRleHRcbiAqIEBwcm9wZXJ0eSB7SFRNTERpdkVsZW1lbnR9IGRyb3Bab25lRWxcbiAqIEBwcm9wZXJ0eSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRFbFxuICovXG5cbi8qKlxuICogR2V0IGFuIG9iamVjdCBvZiB0aGUgcHJvcGVydGllcyBhbmQgZWxlbWVudHMgYmVsb25naW5nIGRpcmVjdGx5IHRvIHRoZSBnaXZlblxuICogZmlsZSBpbnB1dCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgdGhlIGVsZW1lbnQgd2l0aGluIHRoZSBmaWxlIGlucHV0XG4gKiBAcmV0dXJucyB7RmlsZUlucHV0Q29udGV4dH0gZWxlbWVudHNcbiAqL1xuY29uc3QgZ2V0RmlsZUlucHV0Q29udGV4dCA9IChlbCkgPT4ge1xuICBjb25zdCBkcm9wWm9uZUVsID0gZWwuY2xvc2VzdChEUk9QWk9ORSk7XG5cbiAgaWYgKCFkcm9wWm9uZUVsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IGlzIG1pc3Npbmcgb3V0ZXIgJHtEUk9QWk9ORX1gKTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0RWwgPSBkcm9wWm9uZUVsLnF1ZXJ5U2VsZWN0b3IoSU5QVVQpO1xuXG4gIHJldHVybiB7XG4gICAgZHJvcFpvbmVFbCxcbiAgICBpbnB1dEVsLFxuICB9O1xufTtcblxuLyoqXG4gKiBEaXNhYmxlIHRoZSBmaWxlIGlucHV0IGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBmaWxlIGlucHV0IGNvbXBvbmVudFxuICovXG5jb25zdCBkaXNhYmxlID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgZHJvcFpvbmVFbCwgaW5wdXRFbCB9ID0gZ2V0RmlsZUlucHV0Q29udGV4dChlbCk7XG5cbiAgaW5wdXRFbC5kaXNhYmxlZCA9IHRydWU7XG4gIGRyb3Bab25lRWwuY2xhc3NMaXN0LmFkZChESVNBQkxFRF9DTEFTUyk7XG59O1xuXG4vKipcbiAqIFNldCBhcmlhLWRpc2FibGVkIGF0dHJpYnV0ZSB0byBmaWxlIGlucHV0IGNvbXBvbmVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIEFuIGVsZW1lbnQgd2l0aGluIHRoZSBmaWxlIGlucHV0IGNvbXBvbmVudFxuICovXG5jb25zdCBhcmlhRGlzYWJsZSA9IChlbCkgPT4ge1xuICBjb25zdCB7IGRyb3Bab25lRWwgfSA9IGdldEZpbGVJbnB1dENvbnRleHQoZWwpO1xuXG4gIGRyb3Bab25lRWwuY2xhc3NMaXN0LmFkZChESVNBQkxFRF9DTEFTUyk7XG59O1xuXG4vKipcbiAqIEVuYWJsZSB0aGUgZmlsZSBpbnB1dCBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgZmlsZSBpbnB1dCBjb21wb25lbnRcbiAqL1xuY29uc3QgZW5hYmxlID0gKGVsKSA9PiB7XG4gIGNvbnN0IHsgZHJvcFpvbmVFbCwgaW5wdXRFbCB9ID0gZ2V0RmlsZUlucHV0Q29udGV4dChlbCk7XG5cbiAgaW5wdXRFbC5kaXNhYmxlZCA9IGZhbHNlO1xuICBkcm9wWm9uZUVsLmNsYXNzTGlzdC5yZW1vdmUoRElTQUJMRURfQ0xBU1MpO1xuICBkcm9wWm9uZUVsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIik7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcyBzcGVjaWFsIGNoYXJhY3RlcnNcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHJlcGxhY2VzIHNwZWNpZmllZCB2YWx1ZXNcbiAqL1xuY29uc3QgcmVwbGFjZU5hbWUgPSAocykgPT4ge1xuICBjb25zdCBjID0gcy5jaGFyQ29kZUF0KDApO1xuICBpZiAoYyA9PT0gMzIpIHJldHVybiBcIi1cIjtcbiAgaWYgKGMgPj0gNjUgJiYgYyA8PSA5MCkgcmV0dXJuIGBpbWdfJHtzLnRvTG93ZXJDYXNlKCl9YDtcbiAgcmV0dXJuIGBfXyR7KFwiMDAwXCIsIGMudG9TdHJpbmcoMTYpKS5zbGljZSgtNCl9YDtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBJRCBuYW1lIGZvciBlYWNoIGZpbGUgdGhhdCBzdHJpcHMgYWxsIGludmFsaWQgY2hhcmFjdGVycy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgZmlsZSBhZGRlZCB0byBmaWxlIGlucHV0IChzZWFyY2h2YWx1ZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHNhbWUgY2hhcmFjdGVycyBhcyB0aGUgbmFtZSB3aXRoIGludmFsaWQgY2hhcnMgcmVtb3ZlZCAobmV3dmFsdWUpXG4gKi9cbmNvbnN0IG1ha2VTYWZlRm9ySUQgPSAobmFtZSkgPT4gbmFtZS5yZXBsYWNlKC9bXmEtejAtOV0vZywgcmVwbGFjZU5hbWUpO1xuXG4vLyBUYWtlcyBhIGdlbmVyYXRlZCBzYWZlIElEIGFuZCBjcmVhdGVzIGEgdW5pcXVlIElELlxuY29uc3QgY3JlYXRlVW5pcXVlSUQgPSAobmFtZSkgPT5cbiAgYCR7bmFtZX0tJHtNYXRoLmZsb29yKERhdGUubm93KCkudG9TdHJpbmcoKSAvIDEwMDApfWA7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgc2luZ3VsYXIgb3IgcGx1cmFsIGl0ZW0gbGFiZWwgc2hvdWxkIGJlIHVzZWRcbiAqIERldGVybWluYXRpb24gaXMgYmFzZWQgb24gdGhlIHByZXNlbmNlIG9mIHRoZSBgbXVsdGlwbGVgIGF0dHJpYnV0ZVxuICpcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZmlsZUlucHV0RWwgLSBUaGUgaW5wdXQgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gVGhlIHNpbmd1bGFyIG9yIHBsdXJhbCB2ZXJzaW9uIG9mIFwiaXRlbVwiXG4gKi9cbmNvbnN0IGdldEl0ZW1zTGFiZWwgPSAoZmlsZUlucHV0RWwpID0+IHtcbiAgY29uc3QgYWNjZXB0c011bHRpcGxlID0gZmlsZUlucHV0RWwuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIik7XG4gIGNvbnN0IGl0ZW1zTGFiZWwgPSBhY2NlcHRzTXVsdGlwbGUgPyBcImZpbGVzXCIgOiBcImZpbGVcIjtcblxuICByZXR1cm4gaXRlbXNMYWJlbDtcbn07XG5cbi8qKlxuICogU2NhZmZvbGQgdGhlIGZpbGUgaW5wdXQgY29tcG9uZW50IHdpdGggYSBwYXJlbnQgd3JhcHBlciBhbmRcbiAqIENyZWF0ZSBhIHRhcmdldCBhcmVhIG92ZXJsYXkgZm9yIGRyYWcgYW5kIGRyb3AgZnVuY3Rpb25hbGl0eVxuICpcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZmlsZUlucHV0RWwgLSBUaGUgaW5wdXQgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gVGhlIGRyYWcgYW5kIGRyb3AgdGFyZ2V0IGFyZWEuXG4gKi9cbmNvbnN0IGNyZWF0ZVRhcmdldEFyZWEgPSAoZmlsZUlucHV0RWwpID0+IHtcbiAgY29uc3QgZmlsZUlucHV0UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHJvcFRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gQWRkcyBjbGFzcyBuYW1lcyBhbmQgb3RoZXIgYXR0cmlidXRlc1xuICBmaWxlSW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKERST1BaT05FX0NMQVNTKTtcbiAgZmlsZUlucHV0RWwuY2xhc3NMaXN0LmFkZChJTlBVVF9DTEFTUyk7XG4gIGZpbGVJbnB1dFBhcmVudC5jbGFzc0xpc3QuYWRkKERST1BaT05FX0NMQVNTKTtcbiAgYm94LmNsYXNzTGlzdC5hZGQoQk9YX0NMQVNTKTtcbiAgZHJvcFRhcmdldC5jbGFzc0xpc3QuYWRkKFRBUkdFVF9DTEFTUyk7XG5cbiAgLy8gQWRkcyBjaGlsZCBlbGVtZW50cyB0byB0aGUgRE9NXG4gIGRyb3BUYXJnZXQucHJlcGVuZChib3gpO1xuICBmaWxlSW5wdXRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkcm9wVGFyZ2V0LCBmaWxlSW5wdXRFbCk7XG4gIGZpbGVJbnB1dEVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZpbGVJbnB1dFBhcmVudCwgZHJvcFRhcmdldCk7XG4gIGRyb3BUYXJnZXQuYXBwZW5kQ2hpbGQoZmlsZUlucHV0RWwpO1xuICBmaWxlSW5wdXRQYXJlbnQuYXBwZW5kQ2hpbGQoZHJvcFRhcmdldCk7XG5cbiAgcmV0dXJuIGRyb3BUYXJnZXQ7XG59O1xuXG4vKipcbiAqIEJ1aWxkIHRoZSB2aXNpYmxlIGVsZW1lbnQgd2l0aCBkZWZhdWx0IGludGVyYWN0aW9uIGluc3RydWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGZpbGVJbnB1dEVsIC0gVGhlIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGluc3RydWN0aW9ucyAtIFRoZSBjb250YWluZXIgZm9yIHZpc2libGUgaW50ZXJhY3Rpb24gaW5zdHJ1Y3Rpb25zXG4gKi9cbmNvbnN0IHVwZGF0ZVZpc2libGVJbnN0cnVjdGlvbnMgPSAoZmlsZUlucHV0RWwsIGluc3RydWN0aW9ucykgPT4ge1xuICBjb25zdCBpbnN0cnVjdGlvbnNFbCA9IGluc3RydWN0aW9ucztcbiAgY29uc3QgaXRlbXNMYWJlbCA9IGdldEl0ZW1zTGFiZWwoZmlsZUlucHV0RWwpO1xuICBjb25zdCBkcmFnVGV4dCA9IGBEcmFnICR7aXRlbXNMYWJlbH0gaGVyZSBvcmA7XG4gIGNvbnN0IGRyYWdUZXh0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgY2hvb3NlVGV4dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGRyYWdUZXh0SXNWaXNpYmxlID0gc2hvdWxkU2hvd0RyYWdUZXh0KCk7XG4gIGNvbnN0IGNob29zZVRleHQgPSBkcmFnVGV4dElzVmlzaWJsZVxuICAgID8gXCJjaG9vc2UgZnJvbSBmb2xkZXJcIlxuICAgIDogXCJDaG9vc2UgZnJvbSBmb2xkZXJcIjtcblxuICAvLyBDcmVhdGUgaW5zdHJ1Y3Rpb25zIHRleHQgZm9yIGFyaWEtbGFiZWxcbiAgREVGQVVMVF9BUklBX0xBQkVMX1RFWFQgPSBkcmFnVGV4dElzVmlzaWJsZVxuICAgID8gYCR7ZHJhZ1RleHR9ICR7Y2hvb3NlVGV4dH1gXG4gICAgOiBjaG9vc2VUZXh0O1xuXG4gIGluc3RydWN0aW9uc0VsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgY2hvb3NlVGV4dEVsLmNsYXNzTGlzdC5hZGQoQ0hPT1NFX0NMQVNTKTtcbiAgY2hvb3NlVGV4dEVsLnRleHRDb250ZW50ID0gY2hvb3NlVGV4dDtcblxuICBpZiAoZHJhZ1RleHRJc1Zpc2libGUpIHtcbiAgICBkcmFnVGV4dEVsLmNsYXNzTGlzdC5hZGQoRFJBR19URVhUX0NMQVNTKTtcbiAgICBkcmFnVGV4dEVsLnRleHRDb250ZW50ID0gZHJhZ1RleHQ7XG4gICAgaW5zdHJ1Y3Rpb25zRWwuYXBwZW5kQ2hpbGQoZHJhZ1RleHRFbCk7XG4gICAgaW5zdHJ1Y3Rpb25zRWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgXCIpKTtcbiAgfVxuXG4gIGluc3RydWN0aW9uc0VsLmFwcGVuZENoaWxkKGNob29zZVRleHRFbCk7XG5cbiAgaWYgKCFpbnN0cnVjdGlvbnNFbC5oYXNBdHRyaWJ1dGUoXCJoaWRkZW5cIikpIHtcbiAgICBmaWxlSW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIERFRkFVTFRfQVJJQV9MQUJFTF9URVhUKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCdWlsZCB0aGUgdmlzaWJsZSBlbGVtZW50IHdpdGggZGVmYXVsdCBpbnRlcmFjdGlvbiBpbnN0cnVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBmaWxlSW5wdXRFbCAtIFRoZSBpbnB1dCBlbGVtZW50LlxuICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fSBUaGUgY29udGFpbmVyIGZvciB2aXNpYmxlIGludGVyYWN0aW9uIGluc3RydWN0aW9ucy5cbiAqL1xuY29uc3QgY3JlYXRlVmlzaWJsZUluc3RydWN0aW9ucyA9IChmaWxlSW5wdXRFbCkgPT4ge1xuICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIEFkZHMgY2xhc3MgbmFtZXMgYW5kIG90aGVyIGF0dHJpYnV0ZXNcbiAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5hZGQoSU5TVFJVQ1RJT05TX0NMQVNTKTtcbiAgaW5zdHJ1Y3Rpb25zLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgdXBkYXRlVmlzaWJsZUluc3RydWN0aW9ucyhmaWxlSW5wdXRFbCwgaW5zdHJ1Y3Rpb25zKTtcblxuICAvLyBBZGQgdGhlIGluc3RydWN0aW9ucyBlbGVtZW50IHRvIHRoZSBET01cbiAgZmlsZUlucHV0RWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5zdHJ1Y3Rpb25zLCBmaWxlSW5wdXRFbCk7XG5cbiAgcmV0dXJuIGluc3RydWN0aW9ucztcbn07XG5cbmNvbnN0IGFkZEluc3RydWN0aW9uTWVkaWFRdWVyeUxpc3RlbmVyID0gKGZpbGVJbnB1dEVsLCBpbnN0cnVjdGlvbnMpID0+IHtcbiAgY29uc3QgZmluZVBvaW50ZXJNZWRpYVF1ZXJ5ID0gZ2V0RmluZVBvaW50ZXJNZWRpYVF1ZXJ5TGlzdCgpO1xuICBjb25zdCBoYW5kbGVNZWRpYVF1ZXJ5Q2hhbmdlID0gKCkgPT4ge1xuICAgIHVwZGF0ZVZpc2libGVJbnN0cnVjdGlvbnMoZmlsZUlucHV0RWwsIGluc3RydWN0aW9ucyk7XG4gIH07XG5cbiAgaWYgKCFmaW5lUG9pbnRlck1lZGlhUXVlcnkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZpbmVQb2ludGVyTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZU1lZGlhUXVlcnlDaGFuZ2UpO1xuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgZmluZVBvaW50ZXJNZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlTWVkaWFRdWVyeUNoYW5nZSk7XG4gIH07XG59O1xuXG4vKipcbiAqIEJ1aWxkIGEgc2NyZWVuIHJlYWRlci1vbmx5IG1lc3NhZ2UgZWxlbWVudCB0aGF0IGNvbnRhaW5zIGZpbGUgc3RhdHVzIHVwZGF0ZXMgYW5kXG4gKiBDcmVhdGUgYW5kIHNldCB0aGUgZGVmYXVsdCBmaWxlIHN0YXR1cyBtZXNzYWdlXG4gKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBmaWxlSW5wdXRFbCAtIFRoZSBpbnB1dCBlbGVtZW50LlxuICovXG5jb25zdCBjcmVhdGVTUk9ubHlTdGF0dXMgPSAoZmlsZUlucHV0RWwpID0+IHtcbiAgY29uc3Qgc3RhdHVzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpdGVtc0xhYmVsID0gZ2V0SXRlbXNMYWJlbChmaWxlSW5wdXRFbCk7XG4gIGNvbnN0IGZpbGVJbnB1dFBhcmVudCA9IGZpbGVJbnB1dEVsLmNsb3Nlc3QoRFJPUFpPTkUpO1xuICBjb25zdCBmaWxlSW5wdXRUYXJnZXQgPSBmaWxlSW5wdXRFbC5jbG9zZXN0KGAuJHtUQVJHRVRfQ0xBU1N9YCk7XG5cbiAgREVGQVVMVF9GSUxFX1NUQVRVU19URVhUID0gYE5vICR7aXRlbXNMYWJlbH0gc2VsZWN0ZWQuYDtcblxuICAvLyBBZGRzIGNsYXNzIG5hbWVzIGFuZCBvdGhlciBhdHRyaWJ1dGVzXG4gIHN0YXR1c0VsLmNsYXNzTGlzdC5hZGQoU1JfT05MWV9DTEFTUyk7XG4gIHN0YXR1c0VsLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBcInBvbGl0ZVwiKTtcblxuICAvLyBBZGQgaW5pdGlhbCBmaWxlIHN0YXR1cyBtZXNzYWdlXG4gIHN0YXR1c0VsLnRleHRDb250ZW50ID0gREVGQVVMVF9GSUxFX1NUQVRVU19URVhUO1xuXG4gIC8vIEFkZCB0aGUgc3RhdHVzIGVsZW1lbnQgdG8gdGhlIERPTVxuICBmaWxlSW5wdXRQYXJlbnQuaW5zZXJ0QmVmb3JlKHN0YXR1c0VsLCBmaWxlSW5wdXRUYXJnZXQpO1xufTtcblxuLyoqXG4gKiBTY2FmZm9sZCB0aGUgY29tcG9uZW50IHdpdGggYWxsIHJlcXVpcmVkIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBmaWxlSW5wdXRFbCAtIFRoZSBvcmlnaW5hbCBpbnB1dCBlbGVtZW50LlxuICovXG5jb25zdCBlbmhhbmNlRmlsZUlucHV0ID0gKGZpbGVJbnB1dEVsKSA9PiB7XG4gIGNvbnN0IGlzSW5wdXREaXNhYmxlZCA9XG4gICAgZmlsZUlucHV0RWwuaGFzQXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiKSB8fFxuICAgIGZpbGVJbnB1dEVsLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICBjb25zdCBkcm9wVGFyZ2V0ID0gY3JlYXRlVGFyZ2V0QXJlYShmaWxlSW5wdXRFbCk7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGNyZWF0ZVZpc2libGVJbnN0cnVjdGlvbnMoZmlsZUlucHV0RWwpO1xuICBjb25zdCB7IGRyb3Bab25lRWwgfSA9IGdldEZpbGVJbnB1dENvbnRleHQoZmlsZUlucHV0RWwpO1xuXG4gIGlmIChpc0lucHV0RGlzYWJsZWQpIHtcbiAgICBkcm9wWm9uZUVsLmNsYXNzTGlzdC5hZGQoRElTQUJMRURfQ0xBU1MpO1xuICB9IGVsc2Uge1xuICAgIGNyZWF0ZVNST25seVN0YXR1cyhmaWxlSW5wdXRFbCk7XG4gIH1cblxuICAvLyBNYXJrIHRoZSB3cmFwcGVyLCBub3QgdGhlIGluaXRpYWwgZGl2XG4gIGRyb3Bab25lRWwuZGF0YXNldC5lbmhhbmNlZCA9IFwidHJ1ZVwiO1xuXG4gIHJldHVybiB7IGluc3RydWN0aW9ucywgZHJvcFRhcmdldCB9O1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGltYWdlIHByZXZpZXdzXG4gKiBXZSB3YW50IHRvIHN0YXJ0IHdpdGggYSBjbGVhbiBsaXN0IGV2ZXJ5IHRpbWUgZmlsZXMgYXJlIGFkZGVkIHRvIHRoZSBmaWxlIGlucHV0XG4gKlxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gZHJvcFRhcmdldCAtIFRoZSBkcmFnIGFuZCBkcm9wIHRhcmdldCBhcmVhLlxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gaW5zdHJ1Y3Rpb25zIC0gVGhlIGNvbnRhaW5lciBmb3IgdmlzaWJsZSBpbnRlcmFjdGlvbiBpbnN0cnVjdGlvbnMuXG4gKi9cbmNvbnN0IHJlbW92ZU9sZFByZXZpZXdzID0gKGRyb3BUYXJnZXQsIGluc3RydWN0aW9ucykgPT4ge1xuICBjb25zdCBmaWxlUHJldmlld3MgPSBkcm9wVGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke1BSRVZJRVdfQ0xBU1N9YCk7XG4gIGNvbnN0IGN1cnJlbnRQcmV2aWV3SGVhZGluZyA9IGRyb3BUYXJnZXQucXVlcnlTZWxlY3RvcihcbiAgICBgLiR7UFJFVklFV19IRUFESU5HX0NMQVNTfWAsXG4gICk7XG4gIGNvbnN0IGN1cnJlbnRFcnJvck1lc3NhZ2UgPSBkcm9wVGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYC4ke0FDQ0VQVEVEX0ZJTEVfTUVTU0FHRV9DTEFTU31gLFxuICApO1xuXG4gIC8qKlxuICAgKiBmaW5kcyB0aGUgcGFyZW50IG9mIHRoZSBwYXNzZWQgbm9kZSBhbmQgcmVtb3ZlcyB0aGUgY2hpbGRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICAgKi9cbiAgY29uc3QgcmVtb3ZlSW1hZ2VzID0gKG5vZGUpID0+IHtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH07XG5cbiAgLy8gUmVtb3ZlIHRoZSBoZWFkaW5nIGFib3ZlIHRoZSBwcmV2aWV3c1xuICBpZiAoY3VycmVudFByZXZpZXdIZWFkaW5nKSB7XG4gICAgY3VycmVudFByZXZpZXdIZWFkaW5nLm91dGVySFRNTCA9IFwiXCI7XG4gIH1cblxuICAvLyBSZW1vdmUgZXhpc3RpbmcgZXJyb3IgbWVzc2FnZXNcbiAgaWYgKGN1cnJlbnRFcnJvck1lc3NhZ2UpIHtcbiAgICBjdXJyZW50RXJyb3JNZXNzYWdlLm91dGVySFRNTCA9IFwiXCI7XG4gICAgZHJvcFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKElOVkFMSURfRklMRV9DTEFTUyk7XG4gIH1cblxuICAvLyBHZXQgcmlkIG9mIGV4aXN0aW5nIHByZXZpZXdzIGlmIHRoZXkgZXhpc3QsIHNob3cgaW5zdHJ1Y3Rpb25zXG4gIGlmIChmaWxlUHJldmlld3MgIT09IG51bGwpIHtcbiAgICBpZiAoaW5zdHJ1Y3Rpb25zKSB7XG4gICAgICBpbnN0cnVjdGlvbnMucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZpbGVQcmV2aWV3cywgcmVtb3ZlSW1hZ2VzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIHNjcmVlbiByZWFkZXItb25seSBzdGF0dXMgbWVzc2FnZSBhZnRlciBpbnRlcmFjdGlvblxuICpcbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IHN0YXR1c0VsZW1lbnQgLSBUaGUgc2NyZWVuIHJlYWRlci1vbmx5IGNvbnRhaW5lciBmb3IgZmlsZSBzdGF0dXMgdXBkYXRlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBmaWxlTmFtZXMgLSBUaGUgc2VsZWN0ZWQgZmlsZXMgZm91bmQgaW4gdGhlIGZpbGVMaXN0IG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGZpbGVTdG9yZSAtIFRoZSBhcnJheSBvZiB1cGxvYWRlZCBmaWxlIG5hbWVzIGNyZWF0ZWQgZnJvbSB0aGUgZmlsZU5hbWVzIG9iamVjdC5cbiAqL1xuY29uc3QgdXBkYXRlU3RhdHVzTWVzc2FnZSA9IChzdGF0dXNFbGVtZW50LCBmaWxlTmFtZXMsIGZpbGVTdG9yZSkgPT4ge1xuICBjb25zdCBzdGF0dXNFbCA9IHN0YXR1c0VsZW1lbnQ7XG4gIGxldCBzdGF0dXNNZXNzYWdlID0gREVGQVVMVF9GSUxFX1NUQVRVU19URVhUO1xuXG4gIC8vIElmIGZpbGVzIGFkZGVkLCB1cGRhdGUgdGhlIHN0YXR1cyBtZXNzYWdlIHdpdGggZmlsZSBuYW1lKHMpXG4gIGlmIChmaWxlTmFtZXMubGVuZ3RoID09PSAxKSB7XG4gICAgc3RhdHVzTWVzc2FnZSA9IGBZb3UgaGF2ZSBzZWxlY3RlZCB0aGUgZmlsZTogJHtmaWxlU3RvcmV9YDtcbiAgfSBlbHNlIGlmIChmaWxlTmFtZXMubGVuZ3RoID4gMSkge1xuICAgIHN0YXR1c01lc3NhZ2UgPSBgWW91IGhhdmUgc2VsZWN0ZWQgJHtcbiAgICAgIGZpbGVOYW1lcy5sZW5ndGhcbiAgICB9IGZpbGVzOiAke2ZpbGVTdG9yZS5qb2luKFwiLCBcIil9YDtcbiAgfVxuXG4gIC8vIEFkZCBkZWxheSB0byBlbmNvdXJhZ2Ugc2NyZWVuIHJlYWRlciByZWFkb3V0XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHN0YXR1c0VsLnRleHRDb250ZW50ID0gc3RhdHVzTWVzc2FnZTtcbiAgfSwgMTAwMCk7XG59O1xuXG4vKipcbiAqIFNob3cgdGhlIHByZXZpZXcgaGVhZGluZywgaGlkZSB0aGUgaW5pdGlhbCBpbnN0cnVjdGlvbnMgYW5kXG4gKiBVcGRhdGUgdGhlIGFyaWEtbGFiZWwgd2l0aCBuZXcgaW5zdHJ1Y3Rpb25zIHRleHRcbiAqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGZpbGVJbnB1dEVsIC0gVGhlIGlucHV0IGVsZW1lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gZmlsZU5hbWVzIC0gVGhlIHNlbGVjdGVkIGZpbGVzIGZvdW5kIGluIHRoZSBmaWxlTGlzdCBvYmplY3QuXG4gKi9cbmNvbnN0IGFkZFByZXZpZXdIZWFkaW5nID0gKGZpbGVJbnB1dEVsLCBmaWxlTmFtZXMpID0+IHtcbiAgY29uc3QgZmlsZVByZXZpZXdzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRyb3BUYXJnZXQgPSBmaWxlSW5wdXRFbC5jbG9zZXN0KGAuJHtUQVJHRVRfQ0xBU1N9YCk7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRyb3BUYXJnZXQucXVlcnlTZWxlY3RvcihgLiR7SU5TVFJVQ1RJT05TX0NMQVNTfWApO1xuICBsZXQgY2hhbmdlSXRlbVRleHQgPSBcIkNoYW5nZSBmaWxlXCI7XG4gIGxldCBwcmV2aWV3SGVhZGluZ1RleHQgPSBcIlwiO1xuXG4gIGlmIChmaWxlTmFtZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcHJldmlld0hlYWRpbmdUZXh0ID0gU2FuaXRpemVyLmVzY2FwZUhUTUxgU2VsZWN0ZWQgZmlsZSA8c3BhbiBjbGFzcz1cInVzYS1maWxlLWlucHV0X19jaG9vc2VcIj4ke2NoYW5nZUl0ZW1UZXh0fTwvc3Bhbj5gO1xuICB9IGVsc2UgaWYgKGZpbGVOYW1lcy5sZW5ndGggPiAxKSB7XG4gICAgY2hhbmdlSXRlbVRleHQgPSBcIkNoYW5nZSBmaWxlc1wiO1xuICAgIHByZXZpZXdIZWFkaW5nVGV4dCA9IFNhbml0aXplci5lc2NhcGVIVE1MYCR7ZmlsZU5hbWVzLmxlbmd0aH0gZmlsZXMgc2VsZWN0ZWQgPHNwYW4gY2xhc3M9XCJ1c2EtZmlsZS1pbnB1dF9fY2hvb3NlXCI+JHtjaGFuZ2VJdGVtVGV4dH08L3NwYW4+YDtcbiAgfVxuXG4gIC8vIEhpZGVzIG51bGwgc3RhdGUgY29udGVudCBhbmQgc2V0cyBwcmV2aWV3IGhlYWRpbmdcbiAgaW5zdHJ1Y3Rpb25zLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcInRydWVcIik7XG4gIGZpbGVQcmV2aWV3c0hlYWRpbmcuY2xhc3NMaXN0LmFkZChQUkVWSUVXX0hFQURJTkdfQ0xBU1MpO1xuICBmaWxlUHJldmlld3NIZWFkaW5nLmlubmVySFRNTCA9IHByZXZpZXdIZWFkaW5nVGV4dDtcbiAgZHJvcFRhcmdldC5pbnNlcnRCZWZvcmUoZmlsZVByZXZpZXdzSGVhZGluZywgaW5zdHJ1Y3Rpb25zKTtcblxuICAvLyBVcGRhdGUgYXJpYSBsYWJlbCB0byBtYXRjaCB0aGUgdmlzaWJsZSBhY3Rpb24gdGV4dFxuICBmaWxlSW5wdXRFbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIGNoYW5nZUl0ZW1UZXh0KTtcbn07XG5cbi8qKiBBZGQgYW4gZXJyb3IgbGlzdGVuZXIgdG8gdGhlIGltYWdlIHByZXZpZXcgdG8gc2V0IGEgZmFsbGJhY2sgaW1hZ2VcbiAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gcHJldmlld0ltYWdlIC0gVGhlIGltYWdlIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBmYWxsYmFja0NsYXNzIC0gVGhlIENTUyBjbGFzcyBvZiB0aGUgZmFsbGJhY2sgaW1hZ2VcbiAqL1xuY29uc3Qgc2V0UHJldmlld0ZhbGxiYWNrID0gKHByZXZpZXdJbWFnZSwgZmFsbGJhY2tDbGFzcykgPT4ge1xuICBwcmV2aWV3SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImVycm9yXCIsXG4gICAgKCkgPT4ge1xuICAgICAgY29uc3QgbG9jYWxQcmV2aWV3SW1hZ2UgPSBwcmV2aWV3SW1hZ2U7IC8vIHRvIGF2b2lkIG5vLXBhcmFtLXJlYXNzaWduIGZyb20gRVNMaW50XG4gICAgICBsb2NhbFByZXZpZXdJbWFnZS5zcmMgPSBTUEFDRVJfR0lGO1xuICAgICAgbG9jYWxQcmV2aWV3SW1hZ2UuY2xhc3NMaXN0LmFkZChmYWxsYmFja0NsYXNzKTtcbiAgICB9LFxuICAgIHsgb25jZTogdHJ1ZSB9LFxuICApO1xufTtcblxuLyoqXG4gKiBXaGVuIG5ldyBmaWxlcyBhcmUgYXBwbGllZCB0byBmaWxlIGlucHV0LCB0aGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBwcmV2aWV3c1xuICogYW5kIHJlbW92ZXMgb2xkIG9uZXMuXG4gKlxuICogQHBhcmFtIHtldmVudH0gZVxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBmaWxlSW5wdXRFbCAtIFRoZSBpbnB1dCBlbGVtZW50LlxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gaW5zdHJ1Y3Rpb25zIC0gVGhlIGNvbnRhaW5lciBmb3IgdmlzaWJsZSBpbnRlcmFjdGlvbiBpbnN0cnVjdGlvbnMuXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBkcm9wVGFyZ2V0IC0gVGhlIGRyYWcgYW5kIGRyb3AgdGFyZ2V0IGFyZWEuXG4gKi9cblxuY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGZpbGVJbnB1dEVsLCBpbnN0cnVjdGlvbnMsIGRyb3BUYXJnZXQpID0+IHtcbiAgY29uc3QgZmlsZU5hbWVzID0gZS50YXJnZXQuZmlsZXM7XG4gIGNvbnN0IGlucHV0UGFyZW50ID0gZHJvcFRhcmdldC5jbG9zZXN0KGAuJHtEUk9QWk9ORV9DTEFTU31gKTtcbiAgY29uc3Qgc3RhdHVzRWxlbWVudCA9IGlucHV0UGFyZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke1NSX09OTFlfQ0xBU1N9YCk7XG4gIGNvbnN0IGZpbGVTdG9yZSA9IFtdO1xuXG4gIC8vIEZpcnN0LCBnZXQgcmlkIG9mIGV4aXN0aW5nIHByZXZpZXdzXG4gIHJlbW92ZU9sZFByZXZpZXdzKGRyb3BUYXJnZXQsIGluc3RydWN0aW9ucyk7XG5cbiAgLy8gVGhlbiwgaXRlcmF0ZSB0aHJvdWdoIGZpbGVzIGxpc3QgYW5kIGNyZWF0ZSBwcmV2aWV3c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVOYW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBmaWxlTmFtZXNbaV0ubmFtZTtcbiAgICBsZXQgaW1hZ2VJZDtcblxuICAgIC8vIFB1c2ggdXBkYXRlZCBmaWxlIG5hbWVzIGludG8gdGhlIHN0b3JlIGFycmF5XG4gICAgZmlsZVN0b3JlLnB1c2goZmlsZU5hbWUpO1xuXG4gICAgLy8gU3RhcnRzIHdpdGggYSBsb2FkaW5nIGltYWdlIHdoaWxlIHByZXZpZXcgaXMgY3JlYXRlZFxuICAgIHJlYWRlci5vbmxvYWRzdGFydCA9IGZ1bmN0aW9uIGNyZWF0ZUxvYWRpbmdJbWFnZSgpIHtcbiAgICAgIGltYWdlSWQgPSBjcmVhdGVVbmlxdWVJRChtYWtlU2FmZUZvcklEKGZpbGVOYW1lKSk7XG5cbiAgICAgIGluc3RydWN0aW9ucy5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgIFwiYWZ0ZXJlbmRcIixcbiAgICAgICAgU2FuaXRpemVyLmVzY2FwZUhUTUxgPGRpdiBjbGFzcz1cIiR7UFJFVklFV19DTEFTU31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8aW1nIGlkPVwiJHtpbWFnZUlkfVwiIHNyYz1cIiR7U1BBQ0VSX0dJRn1cIiBhbHQ9XCJcIiBjbGFzcz1cIiR7R0VORVJJQ19QUkVWSUVXX0NMQVNTX05BTUV9ICR7TE9BRElOR19DTEFTU31cIi8+JHtmaWxlTmFtZX1cbiAgICAgICAgPGRpdj5gLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gTm90IGFsbCBmaWxlcyB3aWxsIGJlIGFibGUgdG8gZ2VuZXJhdGUgcHJldmlld3MuIEluIGNhc2UgdGhpcyBoYXBwZW5zLCB3ZSBwcm92aWRlIHNldmVyYWwgdHlwZXMgXCJnZW5lcmljIHByZXZpZXdzXCIgYmFzZWQgb24gdGhlIGZpbGUgZXh0ZW5zaW9uLlxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiBjcmVhdGVGaWxlUHJldmlldygpIHtcbiAgICAgIGNvbnN0IHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltYWdlSWQpO1xuICAgICAgY29uc3QgZmlsZUV4dGVuc2lvbiA9IGZpbGVOYW1lLnNwbGl0KFwiLlwiKS5wb3AoKTtcbiAgICAgIGlmIChmaWxlRXh0ZW5zaW9uID09PSBcInBkZlwiKSB7XG4gICAgICAgIHNldFByZXZpZXdGYWxsYmFjayhwcmV2aWV3SW1hZ2UsIFBERl9QUkVWSUVXX0NMQVNTKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGZpbGVFeHRlbnNpb24gPT09IFwiZG9jXCIgfHxcbiAgICAgICAgZmlsZUV4dGVuc2lvbiA9PT0gXCJkb2N4XCIgfHxcbiAgICAgICAgZmlsZUV4dGVuc2lvbiA9PT0gXCJwYWdlc1wiXG4gICAgICApIHtcbiAgICAgICAgc2V0UHJldmlld0ZhbGxiYWNrKHByZXZpZXdJbWFnZSwgV09SRF9QUkVWSUVXX0NMQVNTKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGZpbGVFeHRlbnNpb24gPT09IFwieGxzXCIgfHxcbiAgICAgICAgZmlsZUV4dGVuc2lvbiA9PT0gXCJ4bHN4XCIgfHxcbiAgICAgICAgZmlsZUV4dGVuc2lvbiA9PT0gXCJudW1iZXJzXCJcbiAgICAgICkge1xuICAgICAgICBzZXRQcmV2aWV3RmFsbGJhY2socHJldmlld0ltYWdlLCBFWENFTF9QUkVWSUVXX0NMQVNTKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlsZUV4dGVuc2lvbiA9PT0gXCJtb3ZcIiB8fCBmaWxlRXh0ZW5zaW9uID09PSBcIm1wNFwiKSB7XG4gICAgICAgIHNldFByZXZpZXdGYWxsYmFjayhwcmV2aWV3SW1hZ2UsIFZJREVPX1BSRVZJRVdfQ0xBU1MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UHJldmlld0ZhbGxiYWNrKHByZXZpZXdJbWFnZSwgR0VORVJJQ19QUkVWSUVXX0NMQVNTKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlcyBsb2FkZXIgYW5kIGRpc3BsYXlzIHByZXZpZXdcbiAgICAgIHByZXZpZXdJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKExPQURJTkdfQ0xBU1MpO1xuICAgICAgcHJldmlld0ltYWdlLnNyYyA9IHJlYWRlci5yZXN1bHQ7XG4gICAgfTtcblxuICAgIGlmIChmaWxlTmFtZXNbaV0pIHtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVOYW1lc1tpXSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZpbGVOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBSZXNldCBpbnB1dCBhcmlhLWxhYmVsIHdpdGggZGVmYXVsdCBtZXNzYWdlXG4gICAgZmlsZUlucHV0RWwuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBERUZBVUxUX0FSSUFfTEFCRUxfVEVYVCk7XG4gIH0gZWxzZSB7XG4gICAgYWRkUHJldmlld0hlYWRpbmcoZmlsZUlucHV0RWwsIGZpbGVOYW1lcyk7XG4gIH1cblxuICB1cGRhdGVTdGF0dXNNZXNzYWdlKHN0YXR1c0VsZW1lbnQsIGZpbGVOYW1lcywgZmlsZVN0b3JlKTtcbn07XG5cbi8qKlxuICogV2hlbiB1c2luZyBhbiBBY2NlcHQgYXR0cmlidXRlLCBpbnZhbGlkIGZpbGVzIHdpbGwgYmUgaGlkZGVuIGZyb21cbiAqIGZpbGUgYnJvd3NlciwgYnV0IHRoZXkgY2FuIHN0aWxsIGJlIGRyYWdnZWQgdG8gdGhlIGlucHV0LiBUaGlzXG4gKiBmdW5jdGlvbiBwcmV2ZW50cyB0aGVtIGZyb20gYmVpbmcgZHJhZ2dlZCBhbmQgcmVtb3ZlcyBlcnJvciBzdGF0ZXNcbiAqIHdoZW4gY29ycmVjdCBmaWxlcyBhcmUgYWRkZWQuXG4gKlxuICogQHBhcmFtIHtldmVudH0gZVxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBmaWxlSW5wdXRFbCAtIFRoZSBpbnB1dCBlbGVtZW50LlxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gaW5zdHJ1Y3Rpb25zIC0gVGhlIGNvbnRhaW5lciBmb3IgdmlzaWJsZSBpbnRlcmFjdGlvbiBpbnN0cnVjdGlvbnMuXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBkcm9wVGFyZ2V0IC0gVGhlIGRyYWcgYW5kIGRyb3AgdGFyZ2V0IGFyZWEuXG4gKi9cbmNvbnN0IHByZXZlbnRJbnZhbGlkRmlsZXMgPSAoZSwgZmlsZUlucHV0RWwsIGluc3RydWN0aW9ucywgZHJvcFRhcmdldCkgPT4ge1xuICBjb25zdCBhY2NlcHRlZEZpbGVzQXR0ciA9IGZpbGVJbnB1dEVsLmdldEF0dHJpYnV0ZShcImFjY2VwdFwiKTtcbiAgZHJvcFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKElOVkFMSURfRklMRV9DTEFTUyk7XG5cbiAgLyoqXG4gICAqIFdlIGNhbiBwcm9iYWJseSBtb3ZlIGF3YXkgZnJvbSB0aGlzIG9uY2UgSUUxMSBzdXBwb3J0IHN0b3BzLCBhbmQgcmVwbGFjZVxuICAgKiB3aXRoIGEgc2ltcGxlIGVzIGAuaW5jbHVkZXNgXG4gICAqIGNoZWNrIGlmIGVsZW1lbnQgaXMgaW4gYXJyYXlcbiAgICogY2hlY2sgaWYgMSBvciBtb3JlIGFscGhhYmV0cyBhcmUgaW4gc3RyaW5nXG4gICAqIGlmIGVsZW1lbnQgaXMgcHJlc2VudCByZXR1cm4gdGhlIHBvc2l0aW9uIHZhbHVlIGFuZCAtMSBvdGhlcndpc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpbGVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgKi9cbiAgY29uc3QgaXNJbmNsdWRlZCA9IChmaWxlLCB2YWx1ZSkgPT4ge1xuICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgIGNvbnN0IHBvcyA9IGZpbGUuaW5kZXhPZih2YWx1ZSk7XG4gICAgaWYgKHBvcyA+PSAwKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxuICAvLyBSdW5zIGlmIG9ubHkgc3BlY2lmaWMgZmlsZXMgYXJlIGFjY2VwdGVkXG4gIGlmIChhY2NlcHRlZEZpbGVzQXR0cikge1xuICAgIGNvbnN0IGFjY2VwdGVkRmlsZXMgPSBhY2NlcHRlZEZpbGVzQXR0ci5zcGxpdChcIixcIik7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB1c2VyRXJyb3JUZXh0ID0gZmlsZUlucHV0RWwuZGF0YXNldC5lcnJvcm1lc3NhZ2U7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlVGV4dCA9IHVzZXJFcnJvclRleHQgfHwgREVGQVVMVF9FUlJPUl9MQUJFTF9URVhUO1xuXG4gICAgZXJyb3JNZXNzYWdlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHRydWUpO1xuXG4gICAgLy8gSWYgbXVsdGlwbGUgZmlsZXMgYXJlIGRyYWdnZWQsIHRoaXMgaXRlcmF0ZXMgdGhyb3VnaCB0aGVtIGFuZCBsb29rIGZvciBhbnkgZmlsZXMgdGhhdCBhcmUgbm90IGFjY2VwdGVkLlxuICAgIGxldCBhbGxGaWxlc0FsbG93ZWQgPSB0cnVlO1xuICAgIGNvbnN0IHNjYW5uZWRGaWxlcyA9IGUudGFyZ2V0LmZpbGVzIHx8IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2Nhbm5lZEZpbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBmaWxlID0gc2Nhbm5lZEZpbGVzW2ldO1xuICAgICAgaWYgKGFsbEZpbGVzQWxsb3dlZCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFjY2VwdGVkRmlsZXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBmaWxlVHlwZSA9IGFjY2VwdGVkRmlsZXNbal07XG4gICAgICAgICAgYWxsRmlsZXNBbGxvd2VkID1cbiAgICAgICAgICAgIGZpbGUubmFtZS5pbmRleE9mKGZpbGVUeXBlKSA+IDAgfHxcbiAgICAgICAgICAgIGlzSW5jbHVkZWQoZmlsZS50eXBlLCBmaWxlVHlwZS5yZXBsYWNlKC9cXCovZywgXCJcIikpO1xuICAgICAgICAgIGlmIChhbGxGaWxlc0FsbG93ZWQpIHtcbiAgICAgICAgICAgIFRZUEVfSVNfVkFMSUQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gSWYgZHJhZ2dlZCBmaWxlcyBhcmUgbm90IGFjY2VwdGVkLCB0aGlzIHJlbW92ZXMgdGhlbSBmcm9tIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgYW5kIGNyZWF0ZXMgYW5kIGVycm9yIHN0YXRlXG4gICAgaWYgKCFhbGxGaWxlc0FsbG93ZWQpIHtcbiAgICAgIHJlbW92ZU9sZFByZXZpZXdzKGRyb3BUYXJnZXQsIGluc3RydWN0aW9ucyk7XG4gICAgICBmaWxlSW5wdXRFbC52YWx1ZSA9IFwiXCI7XG4gICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2VUZXh0O1xuICAgICAgZHJvcFRhcmdldC5pbnNlcnRCZWZvcmUoZXJyb3JNZXNzYWdlLCBmaWxlSW5wdXRFbCk7XG5cbiAgICAgIGNvbnN0IGFyaWFMYWJlbFRleHQgPSBgJHtlcnJvck1lc3NhZ2VUZXh0fSAke0RFRkFVTFRfQVJJQV9MQUJFTF9URVhUfWA7XG5cbiAgICAgIGZpbGVJbnB1dEVsLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgYXJpYUxhYmVsVGV4dCk7XG4gICAgICBlcnJvck1lc3NhZ2UuY2xhc3NMaXN0LmFkZChBQ0NFUFRFRF9GSUxFX01FU1NBR0VfQ0xBU1MpO1xuICAgICAgZHJvcFRhcmdldC5jbGFzc0xpc3QuYWRkKElOVkFMSURfRklMRV9DTEFTUyk7XG4gICAgICBUWVBFX0lTX1ZBTElEID0gZmFsc2U7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiAxLiBwYXNzZXMgdGhyb3VnaCBnYXRlIGZvciBwcmV2ZW50aW5nIGludmFsaWQgZmlsZXNcbiAqIDIuIGhhbmRsZXMgdXBkYXRlcyBpZiBmaWxlIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtIHtldmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gZmlsZUlucHV0RWwgLSBUaGUgaW5wdXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGluc3RydWN0aW9ucyAtIFRoZSBjb250YWluZXIgZm9yIHZpc2libGUgaW50ZXJhY3Rpb24gaW5zdHJ1Y3Rpb25zLlxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gZHJvcFRhcmdldCAtIFRoZSBkcmFnIGFuZCBkcm9wIHRhcmdldCBhcmVhLlxuICovXG5jb25zdCBoYW5kbGVVcGxvYWQgPSAoZXZlbnQsIGZpbGVJbnB1dEVsLCBpbnN0cnVjdGlvbnMsIGRyb3BUYXJnZXQpID0+IHtcbiAgcHJldmVudEludmFsaWRGaWxlcyhldmVudCwgZmlsZUlucHV0RWwsIGluc3RydWN0aW9ucywgZHJvcFRhcmdldCk7XG4gIGlmIChUWVBFX0lTX1ZBTElEID09PSB0cnVlKSB7XG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50LCBmaWxlSW5wdXRFbCwgaW5zdHJ1Y3Rpb25zLCBkcm9wVGFyZ2V0KTtcbiAgfVxufTtcblxuY29uc3QgZmlsZUlucHV0ID0gYmVoYXZpb3IoXG4gIHt9LFxuICB7XG4gICAgaW5pdChyb290KSB7XG4gICAgICBzZWxlY3RPck1hdGNoZXMoRFJPUFpPTkUsIHJvb3QpLmZvckVhY2goKGZpbGVJbnB1dEVsKSA9PiB7XG4gICAgICAgIGlmIChmaWxlSW5wdXRFbC5kYXRhc2V0LmVuaGFuY2VkKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgeyBpbnN0cnVjdGlvbnMsIGRyb3BUYXJnZXQgfSA9IGVuaGFuY2VGaWxlSW5wdXQoZmlsZUlucHV0RWwpO1xuICAgICAgICBjb25zdCByZW1vdmVJbnN0cnVjdGlvbk1lZGlhUXVlcnlMaXN0ZW5lciA9XG4gICAgICAgICAgYWRkSW5zdHJ1Y3Rpb25NZWRpYVF1ZXJ5TGlzdGVuZXIoZmlsZUlucHV0RWwsIGluc3RydWN0aW9ucyk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUluc3RydWN0aW9uTWVkaWFRdWVyeUxpc3RlbmVyKSB7XG4gICAgICAgICAgaW5zdHJ1Y3Rpb25NZWRpYVF1ZXJ5Q2xlYW51cHMuc2V0KFxuICAgICAgICAgICAgZmlsZUlucHV0RWwsXG4gICAgICAgICAgICByZW1vdmVJbnN0cnVjdGlvbk1lZGlhUXVlcnlMaXN0ZW5lcixcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZHJvcFRhcmdldC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiZHJhZ292ZXJcIixcbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVEcmFnT3ZlcigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChEUkFHX0NMQVNTKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICApO1xuXG4gICAgICAgIGRyb3BUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImRyYWdsZWF2ZVwiLFxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZURyYWdMZWF2ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShEUkFHX0NMQVNTKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhbHNlLFxuICAgICAgICApO1xuXG4gICAgICAgIGRyb3BUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImRyb3BcIixcbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVEcm9wKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKERSQUdfQ0xBU1MpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICk7XG5cbiAgICAgICAgZmlsZUlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNoYW5nZVwiLFxuICAgICAgICAgIChlKSA9PiBoYW5kbGVVcGxvYWQoZSwgZmlsZUlucHV0RWwsIGluc3RydWN0aW9ucywgZHJvcFRhcmdldCksXG4gICAgICAgICAgZmFsc2UsXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRlYXJkb3duKHJvb3QpIHtcbiAgICAgIHNlbGVjdE9yTWF0Y2hlcyhJTlBVVCwgcm9vdCkuZm9yRWFjaCgoZmlsZUlucHV0RWwpID0+IHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5zdHJ1Y3Rpb25NZWRpYVF1ZXJ5TGlzdGVuZXIgPVxuICAgICAgICAgIGluc3RydWN0aW9uTWVkaWFRdWVyeUNsZWFudXBzLmdldChmaWxlSW5wdXRFbCk7XG4gICAgICAgIGNvbnN0IGZpbGVJbnB1dFRvcEVsZW1lbnQgPSBmaWxlSW5wdXRFbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHJlbW92ZUluc3RydWN0aW9uTWVkaWFRdWVyeUxpc3RlbmVyKSB7XG4gICAgICAgICAgcmVtb3ZlSW5zdHJ1Y3Rpb25NZWRpYVF1ZXJ5TGlzdGVuZXIoKTtcbiAgICAgICAgICBpbnN0cnVjdGlvbk1lZGlhUXVlcnlDbGVhbnVwcy5kZWxldGUoZmlsZUlucHV0RWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsZUlucHV0VG9wRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZChcbiAgICAgICAgICBmaWxlSW5wdXRFbCxcbiAgICAgICAgICBmaWxlSW5wdXRUb3BFbGVtZW50LFxuICAgICAgICApO1xuXG4gICAgICAgIGZpbGVJbnB1dEVsLmNsYXNzTmFtZSA9IERST1BaT05FX0NMQVNTO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRGaWxlSW5wdXRDb250ZXh0LFxuICAgIGRpc2FibGUsXG4gICAgYXJpYURpc2FibGUsXG4gICAgZW5hYmxlLFxuICB9LFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaWxlSW5wdXQ7XG4iLCJjb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IHsgQ0xJQ0sgfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9ldmVudHNcIik7XG5jb25zdCB7IHByZWZpeDogUFJFRklYIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvY29uZmlnXCIpO1xuXG5jb25zdCBTQ09QRSA9IGAuJHtQUkVGSVh9LWZvb3Rlci0tYmlnYDtcbmNvbnN0IE5BViA9IGAke1NDT1BFfSBuYXZgO1xuY29uc3QgQlVUVE9OID0gYCR7TkFWfSAuJHtQUkVGSVh9LWZvb3Rlcl9fcHJpbWFyeS1saW5rYDtcbmNvbnN0IEhJREVfTUFYX1dJRFRIID0gNDgwO1xuXG4vKipcbiAqIEV4cGFuZHMgc2VsZWN0ZWQgZm9vdGVyIG1lbnUgcGFuZWwsIHdoaWxlIGNvbGxhcHNpbmcgb3RoZXJzXG4gKi9cbmZ1bmN0aW9uIHNob3dQYW5lbCgpIHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgSElERV9NQVhfV0lEVEgpIHtcbiAgICBjb25zdCBpc09wZW4gPSB0aGlzLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwidHJ1ZVwiO1xuICAgIGNvbnN0IHRoaXNGb290ZXIgPSB0aGlzLmNsb3Nlc3QoU0NPUEUpO1xuXG4gICAgLy8gQ2xvc2UgYWxsIG90aGVyIG1lbnVzXG4gICAgdGhpc0Zvb3Rlci5xdWVyeVNlbGVjdG9yQWxsKEJVVFRPTikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgIWlzT3Blbik7XG4gIH1cbn1cblxuLyoqXG4gKiBTd2FwcyB0aGUgPGg0PiBlbGVtZW50IGZvciBhIDxidXR0b24+IGVsZW1lbnQgKGFuZCB2aWNlLXZlcnNhKSBhbmQgc2V0cyBpZFxuICogb2YgbWVudSBsaXN0XG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBpc01vYmlsZSAtIElmIHRoZSBmb290ZXIgaXMgaW4gbW9iaWxlIGNvbmZpZ3VyYXRpb25cbiAqL1xuZnVuY3Rpb24gdG9nZ2xlSHRtbFRhZyhpc01vYmlsZSkge1xuICBjb25zdCBiaWdGb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFNDT1BFKTtcblxuICBpZiAoIWJpZ0Zvb3Rlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHByaW1hcnlMaW5rcyA9IGJpZ0Zvb3Rlci5xdWVyeVNlbGVjdG9yQWxsKEJVVFRPTik7XG5cbiAgY29uc3QgQUxMT1dFRF9UQUdTID0gW1wiaDFcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiLCBcImg2XCJdO1xuXG4gIHByaW1hcnlMaW5rcy5mb3JFYWNoKChjdXJyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50Q2xhc3NlcyA9IGN1cnJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgIGNvbnN0IHJhd1ByZXNlcnZlZFRhZyA9IChcbiAgICAgIGN1cnJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGFnXCIpIHx8IGN1cnJlbnRFbGVtZW50LnRhZ05hbWVcbiAgICApLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgcHJlc2VydmVkSHRtbFRhZyA9IEFMTE9XRURfVEFHUy5pbmNsdWRlcyhyYXdQcmVzZXJ2ZWRUYWcpXG4gICAgICA/IHJhd1ByZXNlcnZlZFRhZ1xuICAgICAgOiBcImg0XCI7XG5cbiAgICBjb25zdCBuZXdFbGVtZW50VHlwZSA9IGlzTW9iaWxlID8gXCJidXR0b25cIiA6IHByZXNlcnZlZEh0bWxUYWc7XG5cbiAgICAvLyBDcmVhdGUgdGhlIG5ldyBlbGVtZW50XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFR5cGUpO1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY3VycmVudEVsZW1lbnRDbGFzc2VzKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBgJHtQUkVGSVh9LWZvb3Rlcl9fcHJpbWFyeS1saW5rLS1idXR0b25gLFxuICAgICAgaXNNb2JpbGUsXG4gICAgKTtcbiAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudEVsZW1lbnQudGV4dENvbnRlbnQ7XG5cbiAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10YWdcIiwgY3VycmVudEVsZW1lbnQudGFnTmFtZSk7XG4gICAgICBjb25zdCBtZW51SWQgPSBgJHtQUkVGSVh9LWZvb3Rlci1tZW51LWxpc3QtJHtNYXRoLmZsb29yKFxuICAgICAgICBNYXRoLnJhbmRvbSgpICogMTAwMDAwLFxuICAgICAgKX1gO1xuXG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgbWVudUlkKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgY3VycmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIG1lbnVJZCk7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IHRoZSBuZXcgZWxlbWVudCBhbmQgZGVsZXRlIHRoZSBvbGRcbiAgICBjdXJyZW50RWxlbWVudC5hZnRlcihuZXdFbGVtZW50KTtcbiAgICBjdXJyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG59XG5cbmNvbnN0IHJlc2l6ZSA9IChldmVudCkgPT4ge1xuICB0b2dnbGVIdG1sVGFnKGV2ZW50Lm1hdGNoZXMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiZWhhdmlvcihcbiAge1xuICAgIFtDTElDS106IHtcbiAgICAgIFtCVVRUT05dOiBzaG93UGFuZWwsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIC8vIGV4cG9ydCBmb3IgdXNlIGVsc2V3aGVyZVxuICAgIEhJREVfTUFYX1dJRFRILFxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRvZ2dsZUh0bWxUYWcod2luZG93LmlubmVyV2lkdGggPCBISURFX01BWF9XSURUSCk7XG4gICAgICB0aGlzLm1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXG4gICAgICAgIGAobWF4LXdpZHRoOiAke0hJREVfTUFYX1dJRFRIIC0gMC4xfXB4KWAsXG4gICAgICApO1xuICAgICAgdGhpcy5tZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcihyZXNpemUpO1xuICAgIH0sXG5cbiAgICB0ZWFyZG93bigpIHtcbiAgICAgIHRoaXMubWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIocmVzaXplKTtcbiAgICB9LFxuICB9LFxuKTtcbiIsImNvbnN0IGtleW1hcCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9rZXltYXBcIik7XG5jb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IHNlbGVjdCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zZWxlY3RcIik7XG5jb25zdCB0b2dnbGUgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvdG9nZ2xlXCIpO1xuY29uc3QgRm9jdXNUcmFwID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2ZvY3VzLXRyYXBcIik7XG5jb25zdCBhY2NvcmRpb24gPSByZXF1aXJlKFwiLi4vLi4vdXNhLWFjY29yZGlvbi9zcmMvaW5kZXhcIik7XG5jb25zdCBTY3JvbGxCYXJXaWR0aCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zY3JvbGxiYXItd2lkdGhcIik7XG5cbmNvbnN0IHsgQ0xJQ0sgfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9ldmVudHNcIik7XG5jb25zdCB7IHByZWZpeDogUFJFRklYIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvY29uZmlnXCIpO1xuXG5jb25zdCBCT0RZID0gXCJib2R5XCI7XG5jb25zdCBIRUFERVIgPSBgLiR7UFJFRklYfS1oZWFkZXJgO1xuY29uc3QgTkFWID0gYC4ke1BSRUZJWH0tbmF2YDtcbmNvbnN0IE5BVl9DT05UQUlORVIgPSBgLiR7UFJFRklYfS1uYXYtY29udGFpbmVyYDtcbmNvbnN0IE5BVl9QUklNQVJZID0gYC4ke1BSRUZJWH0tbmF2X19wcmltYXJ5YDtcbmNvbnN0IE5BVl9QUklNQVJZX0lURU0gPSBgLiR7UFJFRklYfS1uYXZfX3ByaW1hcnktaXRlbWA7XG5jb25zdCBOQVZfQ09OVFJPTCA9IGBidXR0b24uJHtQUkVGSVh9LW5hdl9fbGlua2A7XG5jb25zdCBOQVZfTElOS1MgPSBgJHtOQVZ9IGFgO1xuY29uc3QgTk9OX05BVl9ISURERU5fQVRUUklCVVRFID0gYGRhdGEtbmF2LWhpZGRlbmA7XG5jb25zdCBPUEVORVJTID0gYC4ke1BSRUZJWH0tbWVudS1idG5gO1xuY29uc3QgQ0xPU0VfQlVUVE9OID0gYC4ke1BSRUZJWH0tbmF2X19jbG9zZWA7XG5jb25zdCBPVkVSTEFZID0gYC4ke1BSRUZJWH0tb3ZlcmxheWA7XG5jb25zdCBDTE9TRVJTID0gYCR7Q0xPU0VfQlVUVE9OfSwgLiR7UFJFRklYfS1vdmVybGF5YDtcbmNvbnN0IFRPR0dMRVMgPSBbTkFWLCBPVkVSTEFZXS5qb2luKFwiLCBcIik7XG5jb25zdCBOT05fTkFWX0VMRU1FTlRTID0gYGJvZHkgKjpub3QoJHtIRUFERVJ9LCAke05BVl9DT05UQUlORVJ9LCAke05BVn0sICR7TkFWfSAqKTpub3QoW2FyaWEtaGlkZGVuXSlgO1xuY29uc3QgTk9OX05BVl9ISURERU4gPSBgWyR7Tk9OX05BVl9ISURERU5fQVRUUklCVVRFfV1gO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSBcInVzYS1qcy1tb2JpbGUtbmF2LS1hY3RpdmVcIjtcbmNvbnN0IFZJU0lCTEVfQ0xBU1MgPSBcImlzLXZpc2libGVcIjtcblxubGV0IG5hdmlnYXRpb247XG5sZXQgbmF2QWN0aXZlO1xubGV0IG5vbk5hdkVsZW1lbnRzO1xuXG5jb25zdCBpc0FjdGl2ZSA9ICgpID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKEFDVElWRV9DTEFTUyk7XG4vLyBEZXRlY3QgU2FmYXJpXG4vLyBOb3RlOiBDaHJvbWUgYWxzbyByZXBvcnRzIHRoZSBTYWZhcmkgdXNlckFnZW50IHNvIHRoaXMgc3BlY2lmaWNhbGx5IGV4Y2x1ZGVzIENocm9tZS5cbmNvbnN0IGlzU2FmYXJpID1cbiAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIlNhZmFyaVwiKSAmJlxuICAhbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcyhcIkNocm9tZVwiKTtcbmNvbnN0IFNDUk9MTEJBUl9XSURUSCA9IFNjcm9sbEJhcldpZHRoKCk7XG5jb25zdCBJTklUSUFMX1BBRERJTkcgPSB3aW5kb3dcbiAgLmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSlcbiAgLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpO1xuY29uc3QgVEVNUE9SQVJZX1BBRERJTkcgPSBgJHtcbiAgcGFyc2VJbnQoSU5JVElBTF9QQURESU5HLnJlcGxhY2UoL3B4LywgXCJcIiksIDEwKSArXG4gIHBhcnNlSW50KFNDUk9MTEJBUl9XSURUSC5yZXBsYWNlKC9weC8sIFwiXCIpLCAxMClcbn1weGA7XG5cbmNvbnN0IGhpZGVOb25OYXZJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtIRUFERVJ9YCkucGFyZW50Tm9kZTtcbiAgbm9uTmF2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE5PTl9OQVZfRUxFTUVOVFMpO1xuXG4gIG5vbk5hdkVsZW1lbnRzLmZvckVhY2goKG5vbk5hdkVsZW1lbnQpID0+IHtcbiAgICBpZiAobm9uTmF2RWxlbWVudCAhPT0gaGVhZGVyUGFyZW50KSB7XG4gICAgICBub25OYXZFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIHRydWUpO1xuICAgICAgbm9uTmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoTk9OX05BVl9ISURERU5fQVRUUklCVVRFLCBcIlwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd05vbk5hdkl0ZW1zID0gKCkgPT4ge1xuICBub25OYXZFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoTk9OX05BVl9ISURERU4pO1xuXG4gIGlmICghbm9uTmF2RWxlbWVudHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZW1vdmUgYXJpYS1oaWRkZW4gZnJvbSBub24taGVhZGVyIGVsZW1lbnRzXG4gIG5vbk5hdkVsZW1lbnRzLmZvckVhY2goKG5vbk5hdkVsZW1lbnQpID0+IHtcbiAgICBub25OYXZFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgIG5vbk5hdkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKE5PTl9OQVZfSElEREVOX0FUVFJJQlVURSk7XG4gIH0pO1xufTtcblxuLy8gVG9nZ2xlIGFsbCBub24taGVhZGVyIGVsZW1lbnRzICMzNTI3LlxuY29uc3QgdG9nZ2xlTm9uTmF2SXRlbXMgPSAoYWN0aXZlKSA9PiB7XG4gIGlmIChhY3RpdmUpIHtcbiAgICBoaWRlTm9uTmF2SXRlbXMoKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93Tm9uTmF2SXRlbXMoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZXRlY3QgU2FmYXJpIGFuZCBhZGQgYm9keSBjbGFzcyBmb3IgYSBTYWZhcmktb25seSBDU1MgYnVnIGZpeC5cbiAqIE1vcmUgZGV0YWlscyBpbiBodHRwczovL2dpdGh1Yi5jb20vdXN3ZHMvdXN3ZHMvcHVsbC81NDQzXG4gKi9cbmNvbnN0IGFkZFNhZmFyaUNsYXNzID0gKCkgPT4ge1xuICBpZiAoaXNTYWZhcmkpIHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJpcy1zYWZhcmlcIik7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHRoZSB2YWx1ZSBmb3IgdGhlIC0tc2Nyb2xsdG9wIENTUyB2YXIgd2hlbiB0aGUgbW9iaWxlIG1lbnUgaXMgb3Blbi5cbiAqIFRoaXMgYWxsb3dzIHRoZSBDU1MgdG8gbG9jayB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gaW4gU2FmYXJpXG4gKiB3aGVuIG92ZXJmbG93LXkgaXMgc2V0IHRvIHNjcm9sbC5cbiAqIE1vcmUgZGV0YWlscyBpbiBodHRwczovL2dpdGh1Yi5jb20vdXN3ZHMvdXN3ZHMvcHVsbC81NDQzXG4gKi9cbmNvbnN0IHNldFNhZmFyaVNjcm9sbFBvc2l0aW9uID0gKGJvZHkpID0+IHtcbiAgY29uc3QgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gYC0ke3dpbmRvdy5zY3JvbGxZfXB4YDtcbiAgaWYgKGlzU2FmYXJpKSB7XG4gICAgYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Nyb2xsdG9wXCIsIGN1cnJlbnRTY3JvbGxQb3NpdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IHRvZ2dsZU5hdiA9IChhY3RpdmUpID0+IHtcbiAgY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcbiAgY29uc3Qgc2FmZUFjdGl2ZSA9IHR5cGVvZiBhY3RpdmUgPT09IFwiYm9vbGVhblwiID8gYWN0aXZlIDogIWlzQWN0aXZlKCk7XG5cbiAgc2V0U2FmYXJpU2Nyb2xsUG9zaXRpb24oYm9keSk7XG5cbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKEFDVElWRV9DTEFTUywgc2FmZUFjdGl2ZSk7XG5cbiAgc2VsZWN0KFRPR0dMRVMpLmZvckVhY2goKGVsKSA9PlxuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoVklTSUJMRV9DTEFTUywgc2FmZUFjdGl2ZSksXG4gICk7XG5cbiAgbmF2aWdhdGlvbi5mb2N1c1RyYXAudXBkYXRlKHNhZmVBY3RpdmUpO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gYm9keS5xdWVyeVNlbGVjdG9yKENMT1NFX0JVVFRPTik7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE9QRU5FUlMpO1xuXG4gIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID1cbiAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9PT0gVEVNUE9SQVJZX1BBRERJTkdcbiAgICAgID8gSU5JVElBTF9QQURESU5HXG4gICAgICA6IFRFTVBPUkFSWV9QQURESU5HO1xuXG4gIHRvZ2dsZU5vbk5hdkl0ZW1zKHNhZmVBY3RpdmUpO1xuXG4gIGlmIChzYWZlQWN0aXZlICYmIGNsb3NlQnV0dG9uKSB7XG4gICAgLy8gVGhlIG1vYmlsZSBuYXYgd2FzIGp1c3QgYWN0aXZhdGVkLiBGb2N1cyBvbiB0aGUgY2xvc2UgYnV0dG9uLCB3aGljaCBpc1xuICAgIC8vIGp1c3QgYmVmb3JlIGFsbCB0aGUgbmF2IGVsZW1lbnRzIGluIHRoZSB0YWIgb3JkZXIuXG4gICAgY2xvc2VCdXR0b24uZm9jdXMoKTtcbiAgfSBlbHNlIGlmIChcbiAgICAhc2FmZUFjdGl2ZSAmJlxuICAgIG1lbnVCdXR0b24gJiZcbiAgICBnZXRDb21wdXRlZFN0eWxlKG1lbnVCdXR0b24pLmRpc3BsYXkgIT09IFwibm9uZVwiXG4gICkge1xuICAgIC8vIFRoZSBtb2JpbGUgbmF2IHdhcyBqdXN0IGRlYWN0aXZhdGVkLiBXZSBkb24ndCB3YW50IHRoZSBmb2N1cyB0b1xuICAgIC8vIGRpc2FwcGVhciBpbnRvIHRoZSB2b2lkLCBzbyBmb2N1cyBvbiB0aGUgbWVudSBidXR0b24gaWYgaXQnc1xuICAgIC8vIHZpc2libGUgKHRoaXMgbWF5IGhhdmUgYmVlbiB3aGF0IHRoZSB1c2VyIHdhcyBqdXN0IGZvY3VzZWQgb24sXG4gICAgLy8gaWYgdGhleSB0cmlnZ2VyZWQgdGhlIG1vYmlsZSBuYXYgYnkgbWlzdGFrZSkuXG4gICAgbWVudUJ1dHRvbi5mb2N1cygpO1xuICB9XG5cbiAgcmV0dXJuIHNhZmVBY3RpdmU7XG59O1xuXG5jb25zdCByZXNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IGNsb3NlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihDTE9TRV9CVVRUT04pO1xuXG4gIGlmIChpc0FjdGl2ZSgpICYmIGNsb3NlciAmJiBjbG9zZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPT09IDApIHtcbiAgICAvLyBXaGVuIHRoZSBtb2JpbGUgbmF2IGlzIGFjdGl2ZSwgYW5kIHRoZSBjbG9zZSBib3ggaXNuJ3QgdmlzaWJsZSxcbiAgICAvLyB3ZSBrbm93IHRoZSB1c2VyJ3Mgdmlld3BvcnQgaGFzIGJlZW4gcmVzaXplZCB0byBiZSBsYXJnZXIuXG4gICAgLy8gTGV0J3MgbWFrZSB0aGUgcGFnZSBzdGF0ZSBjb25zaXN0ZW50IGJ5IGRlYWN0aXZhdGluZyB0aGUgbW9iaWxlIG5hdi5cbiAgICBuYXZpZ2F0aW9uLnRvZ2dsZU5hdi5jYWxsKGNsb3NlciwgZmFsc2UpO1xuICB9XG59O1xuXG5jb25zdCBvbk1lbnVDbG9zZSA9ICgpID0+IG5hdmlnYXRpb24udG9nZ2xlTmF2LmNhbGwobmF2aWdhdGlvbiwgZmFsc2UpO1xuXG5jb25zdCBoaWRlQWN0aXZlTmF2RHJvcGRvd24gPSAoKSA9PiB7XG4gIGlmICghbmF2QWN0aXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdG9nZ2xlKG5hdkFjdGl2ZSwgZmFsc2UpO1xuICBuYXZBY3RpdmUgPSBudWxsO1xufTtcblxuY29uc3QgZm9jdXNOYXZCdXR0b24gPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcGFyZW50TmF2SXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KE5BVl9QUklNQVJZX0lURU0pO1xuXG4gIC8vIE9ubHkgc2hpZnQgZm9jdXMgaWYgd2l0aGluIGRyb3Bkb3duXG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoTkFWX0NPTlRST0wpKSB7XG4gICAgY29uc3QgbmF2Q29udHJvbCA9IHBhcmVudE5hdkl0ZW0ucXVlcnlTZWxlY3RvcihOQVZfQ09OVFJPTCk7XG4gICAgaWYgKG5hdkNvbnRyb2wpIHtcbiAgICAgIG5hdkNvbnRyb2wuZm9jdXMoKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUVzY2FwZSA9IChldmVudCkgPT4ge1xuICBoaWRlQWN0aXZlTmF2RHJvcGRvd24oKTtcbiAgZm9jdXNOYXZCdXR0b24oZXZlbnQpO1xufTtcblxubmF2aWdhdGlvbiA9IGJlaGF2aW9yKFxuICB7XG4gICAgW0NMSUNLXToge1xuICAgICAgW05BVl9DT05UUk9MXSgpIHtcbiAgICAgICAgLy8gSWYgYW5vdGhlciBuYXYgaXMgb3BlbiwgY2xvc2UgaXRcbiAgICAgICAgaWYgKG5hdkFjdGl2ZSAhPT0gdGhpcykge1xuICAgICAgICAgIGhpZGVBY3RpdmVOYXZEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBsYXN0IGNsaWNrZWQgbmF2IGxpbmsgZWxlbWVudCwgc28gd2VcbiAgICAgICAgLy8gY2FuIGhpZGUgdGhlIGRyb3Bkb3duIGlmIGFub3RoZXIgZWxlbWVudCBvbiB0aGUgcGFnZSBpcyBjbGlja2VkXG4gICAgICAgIGlmICghbmF2QWN0aXZlKSB7XG4gICAgICAgICAgbmF2QWN0aXZlID0gdGhpcztcbiAgICAgICAgICB0b2dnbGUobmF2QWN0aXZlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvIHRoaXMgc28gdGhlIGV2ZW50IGhhbmRsZXIgb24gdGhlIGJvZHkgZG9lc24ndCBmaXJlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBbQk9EWV06IGhpZGVBY3RpdmVOYXZEcm9wZG93bixcbiAgICAgIFtPUEVORVJTXTogdG9nZ2xlTmF2LFxuICAgICAgW0NMT1NFUlNdOiB0b2dnbGVOYXYsXG4gICAgICBbTkFWX0xJTktTXSgpIHtcbiAgICAgICAgLy8gQSBuYXZpZ2F0aW9uIGxpbmsgaGFzIGJlZW4gY2xpY2tlZCEgV2Ugd2FudCB0byBjb2xsYXBzZSBhbnlcbiAgICAgICAgLy8gaGllcmFyY2hpY2FsIG5hdmlnYXRpb24gVUkgaXQncyBhIHBhcnQgb2YsIHNvIHRoYXQgdGhlIHVzZXJcbiAgICAgICAgLy8gY2FuIGZvY3VzIG9uIHdoYXRldmVyIHRoZXkndmUganVzdCBzZWxlY3RlZC5cblxuICAgICAgICAvLyBTb21lIG5hdmlnYXRpb24gbGlua3MgYXJlIGluc2lkZSBhY2NvcmRpb25zOyB3aGVuIHRoZXkncmVcbiAgICAgICAgLy8gY2xpY2tlZCwgd2Ugd2FudCB0byBjb2xsYXBzZSB0aG9zZSBhY2NvcmRpb25zLlxuICAgICAgICBjb25zdCBhY2MgPSB0aGlzLmNsb3Nlc3QoYWNjb3JkaW9uLkFDQ09SRElPTik7XG5cbiAgICAgICAgaWYgKGFjYykge1xuICAgICAgICAgIGFjY29yZGlvbi5nZXRCdXR0b25zKGFjYykuZm9yRWFjaCgoYnRuKSA9PiBhY2NvcmRpb24uaGlkZShidG4pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBtb2JpbGUgbmF2aWdhdGlvbiBtZW51IGlzIGFjdGl2ZSwgd2Ugd2FudCB0byBoaWRlIGl0LlxuICAgICAgICBpZiAoaXNBY3RpdmUoKSkge1xuICAgICAgICAgIG5hdmlnYXRpb24udG9nZ2xlTmF2LmNhbGwobmF2aWdhdGlvbiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAga2V5ZG93bjoge1xuICAgICAgW05BVl9QUklNQVJZXToga2V5bWFwKHsgRXNjYXBlOiBoYW5kbGVFc2NhcGUgfSksXG4gICAgfSxcbiAgICBmb2N1c291dDoge1xuICAgICAgW05BVl9QUklNQVJZXShldmVudCkge1xuICAgICAgICBjb25zdCBuYXYgPSBldmVudC50YXJnZXQuY2xvc2VzdChOQVZfUFJJTUFSWSk7XG5cbiAgICAgICAgaWYgKCFuYXYuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgICAgICBoaWRlQWN0aXZlTmF2RHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaW5pdChyb290KSB7XG4gICAgICBjb25zdCB0cmFwQ29udGFpbmVyID0gcm9vdC5tYXRjaGVzKE5BVikgPyByb290IDogcm9vdC5xdWVyeVNlbGVjdG9yKE5BVik7XG5cbiAgICAgIGlmICh0cmFwQ29udGFpbmVyKSB7XG4gICAgICAgIG5hdmlnYXRpb24uZm9jdXNUcmFwID0gRm9jdXNUcmFwKHRyYXBDb250YWluZXIsIHtcbiAgICAgICAgICBFc2NhcGU6IG9uTWVudUNsb3NlLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYWRkU2FmYXJpQ2xhc3MoKTtcbiAgICAgIHJlc2l6ZSgpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplLCBmYWxzZSk7XG4gICAgfSxcbiAgICB0ZWFyZG93bigpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZSwgZmFsc2UpO1xuICAgICAgbmF2QWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBmb2N1c1RyYXA6IG51bGwsXG4gICAgdG9nZ2xlTmF2LFxuICB9LFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0aW9uO1xuIiwiY29uc3Qga2V5bWFwID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2tleW1hcFwiKTtcbmNvbnN0IHNlbGVjdE9yTWF0Y2hlcyA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zZWxlY3Qtb3ItbWF0Y2hlc1wiKTtcbmNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcbmNvbnN0IHsgQ0xJQ0sgfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9ldmVudHNcIik7XG5jb25zdCBTYW5pdGl6ZXIgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2FuaXRpemVyXCIpO1xuXG5jb25zdCBDVVJSRU5UX0NMQVNTID0gYCR7UFJFRklYfS1jdXJyZW50YDtcbmNvbnN0IElOX1BBR0VfTkFWX0hFQURJTkdTID0gXCJoMiBoM1wiO1xuY29uc3QgSU5fUEFHRV9OQVZfVkFMSURfSEVBRElOR1MgPSBbXCJoMVwiLCBcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIl07XG5jb25zdCBJTl9QQUdFX05BVl9USVRMRV9URVhUID0gXCJPbiB0aGlzIHBhZ2VcIjtcbmNvbnN0IElOX1BBR0VfTkFWX1RJVExFX0hFQURJTkdfTEVWRUwgPSBcImg0XCI7XG5jb25zdCBJTl9QQUdFX05BVl9TQ1JPTExfT0ZGU0VUID0gMDtcbmNvbnN0IElOX1BBR0VfTkFWX1JPT1RfTUFSR0lOID0gXCIwcHggMHB4IDBweCAwcHhcIjtcbmNvbnN0IElOX1BBR0VfTkFWX1RIUkVTSE9MRCA9IFwiMVwiO1xuY29uc3QgSU5fUEFHRV9OQVZfTUlOSU1VTV9IRUFESU5HX0NPVU5UID0gMjtcbmNvbnN0IElOX1BBR0VfTkFWX0NMQVNTID0gYCR7UFJFRklYfS1pbi1wYWdlLW5hdmA7XG5jb25zdCBJTl9QQUdFX05BVl9BTkNIT1JfQ0xBU1MgPSBgJHtQUkVGSVh9LWFuY2hvcmA7XG5jb25zdCBJTl9QQUdFX05BVl9OQVZfQ0xBU1MgPSBgJHtJTl9QQUdFX05BVl9DTEFTU31fX25hdmA7XG5jb25zdCBJTl9QQUdFX05BVl9MSVNUX0NMQVNTID0gYCR7SU5fUEFHRV9OQVZfQ0xBU1N9X19saXN0YDtcbmNvbnN0IElOX1BBR0VfTkFWX0lURU1fQ0xBU1MgPSBgJHtJTl9QQUdFX05BVl9DTEFTU31fX2l0ZW1gO1xuY29uc3QgSU5fUEFHRV9OQVZfUFJJTUFSWV9JVEVNX0NMQVNTID0gYCR7SU5fUEFHRV9OQVZfSVRFTV9DTEFTU30tLXByaW1hcnlgO1xuY29uc3QgSU5fUEFHRV9OQVZfTElOS19DTEFTUyA9IGAke0lOX1BBR0VfTkFWX0NMQVNTfV9fbGlua2A7XG5jb25zdCBJTl9QQUdFX05BVl9USVRMRV9DTEFTUyA9IGAke0lOX1BBR0VfTkFWX0NMQVNTfV9faGVhZGluZ2A7XG5jb25zdCBNQUlOX0VMRU1FTlQgPSBcIm1haW5cIjtcblxuLyoqXG4gKiBTZXQgdGhlIGFjdGl2ZSBsaW5rIHN0YXRlIGZvciB0aGUgY3VycmVudGx5IG9ic2VydmVkIHNlY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCBBbiBlbGVtZW50IHdpdGhpbiB0aGUgaW4tcGFnZSBuYXYgY29tcG9uZW50XG4gKi9cbmNvbnN0IHNldEFjdGl2ZSA9IChlbCkgPT4ge1xuICBjb25zdCBhbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke0lOX1BBR0VfTkFWX0xJTktfQ0xBU1N9YCk7XG4gIGVsLm1hcCgoaSkgPT4ge1xuICAgIGlmIChpLmlzSW50ZXJzZWN0aW5nID09PSB0cnVlICYmIGkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMSkge1xuICAgICAgYWxsTGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKENVUlJFTlRfQ0xBU1MpKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGBhW2hyZWY9XCIjJHtpLnRhcmdldC5pZH1cIl1gKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChDVVJSRU5UX0NMQVNTKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgdGhlIGRlc2lnbmF0ZWQgaGVhZGluZyB0eXBlcyBmb3VuZCBpbiB0aGUgZGVzaWduYXRlZCBjb250ZW50IHJlZ2lvbi5cbiAqIFRocm93IGFuIGVycm9yIGlmIGFuIGludmFsaWQgaGVhZGVyIGVsZW1lbnQgaXMgZGVzaWduYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzZWxlY3RlZENvbnRlbnRSZWdpb24gVGhlIGNvbnRlbnQgcmVnaW9uIHRoZSBjb21wb25lbnQgc2hvdWxkIHB1bGwgaGVhZGVycyBmcm9tXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0ZWRIZWFkaW5nVHlwZXMgVGhlIGxpc3Qgb2YgaGVhZGluZyB0eXBlcyB0aGF0IHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgbmF2IGxpc3RcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBBbiBhcnJheSBvZiBkZXNpZ25hdGVkIGhlYWRpbmcgdHlwZXMgZnJvbSB0aGUgZGVzaWduYXRlZCBjb250ZW50IHJlZ2lvblxuICovXG5jb25zdCBjcmVhdGVTZWN0aW9uSGVhZGluZ3NBcnJheSA9IChcbiAgc2VsZWN0ZWRDb250ZW50UmVnaW9uLFxuICBzZWxlY3RlZEhlYWRpbmdUeXBlcyxcbikgPT4ge1xuICAvLyBDb252ZXJ0IGRlc2lnbmF0ZWQgaGVhZGluZ3MgbGlzdCB0byBhbiBhcnJheVxuICBjb25zdCBzZWxlY3RlZEhlYWRpbmdUeXBlc0FycmF5ID0gc2VsZWN0ZWRIZWFkaW5nVHlwZXMuaW5kZXhPZihcIiBcIilcbiAgICA/IHNlbGVjdGVkSGVhZGluZ1R5cGVzLnNwbGl0KFwiIFwiKVxuICAgIDogc2VsZWN0ZWRIZWFkaW5nVHlwZXM7XG4gIGNvbnN0IGNvbnRlbnRSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdGVkQ29udGVudFJlZ2lvbik7XG5cbiAgc2VsZWN0ZWRIZWFkaW5nVHlwZXNBcnJheS5mb3JFYWNoKChoZWFkaW5nVHlwZSkgPT4ge1xuICAgIGlmICghSU5fUEFHRV9OQVZfVkFMSURfSEVBRElOR1MuaW5jbHVkZXMoaGVhZGluZ1R5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbi1wYWdlIG5hdmlnYXRpb246IGRhdGEtaGVhZGluZy1lbGVtZW50cyBhdHRyaWJ1dGUgZGVmaW5lZCB3aXRoIGFuIGludmFsaWQgaGVhZGluZyB0eXBlOiBcIiR7aGVhZGluZ1R5cGV9XCIuXG4gICAgICAgIERlZmluZSB0aGUgYXR0cmlidXRlIHdpdGggb25lIG9yIG1vcmUgb2YgdGhlIGZvbGxvd2luZzogXCIke0lOX1BBR0VfTkFWX1ZBTElEX0hFQURJTkdTfVwiLlxuICAgICAgICBEbyBub3QgdXNlIGNvbW1hcyBvciBvdGhlciBwdW5jdHVhdGlvbiBpbiB0aGUgYXR0cmlidXRlIGRlZmluaXRpb24uYCxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzZWN0aW9uSGVhZGluZ3NBcnJheSA9IEFycmF5LmZyb20oXG4gICAgY29udGVudFJlZ2lvbi5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdGVkSGVhZGluZ1R5cGVzQXJyYXkpLFxuICApO1xuXG4gIHJldHVybiBzZWN0aW9uSGVhZGluZ3NBcnJheTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIHRoZSB2aXNpYmxlIGhlYWRpbmdzIGZyb20gc2VjdGlvbkhlYWRpbmdzQXJyYXkuXG4gKiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgaGVhZGluZ3MgdGhhdCBhcmUgaGlkZGVuIHdpdGggZGlzcGxheTpub25lIG9yIHZpc2liaWxpdHk6bm9uZSBzdHlsZSBydWxlcy5cbiAqIFRoZXNlIGl0ZW1zIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGNvbXBvbmVudCBuYXYgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzZWxlY3RlZENvbnRlbnRSZWdpb24gVGhlIGNvbnRlbnQgcmVnaW9uIHRoZSBjb21wb25lbnQgc2hvdWxkIHB1bGwgaGVhZGVycyBmcm9tXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0ZWRIZWFkaW5nVHlwZXMgVGhlIGxpc3Qgb2YgaGVhZGluZyB0eXBlcyB0aGF0IHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgbmF2IGxpc3RcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0gLSBBbiBhcnJheSBvZiB2aXNpYmxlIGhlYWRpbmdzIGZyb20gdGhlIGRlc2lnbmF0ZWQgY29udGVudCByZWdpb25cbiAqL1xuY29uc3QgZ2V0VmlzaWJsZVNlY3Rpb25IZWFkaW5ncyA9IChcbiAgc2VsZWN0ZWRDb250ZW50UmVnaW9uLFxuICBzZWxlY3RlZEhlYWRpbmdUeXBlcyxcbikgPT4ge1xuICBjb25zdCBzZWN0aW9uSGVhZGluZ3MgPSBjcmVhdGVTZWN0aW9uSGVhZGluZ3NBcnJheShcbiAgICBzZWxlY3RlZENvbnRlbnRSZWdpb24sXG4gICAgc2VsZWN0ZWRIZWFkaW5nVHlwZXMsXG4gICk7XG5cbiAgLy8gRmluZCBhbGwgaGVhZGluZ3Mgd2l0aCBoaWRkZW4gc3R5bGluZyBhbmQgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgYXJyYXlcbiAgY29uc3QgdmlzaWJsZVNlY3Rpb25IZWFkaW5ncyA9IHNlY3Rpb25IZWFkaW5ncy5maWx0ZXIoKGhlYWRpbmcpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkaW5nKTtcbiAgICBjb25zdCB2aXNpYmxlSGVhZGluZyA9XG4gICAgICBoZWFkaW5nU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIikgIT09IFwibm9uZVwiICYmXG4gICAgICBoZWFkaW5nU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcInZpc2liaWxpdHlcIikgIT09IFwiaGlkZGVuXCI7XG5cbiAgICByZXR1cm4gdmlzaWJsZUhlYWRpbmc7XG4gIH0pO1xuXG4gIHJldHVybiB2aXNpYmxlU2VjdGlvbkhlYWRpbmdzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGhpZ2hlc3QtbGV2ZWwgaGVhZGVyIHRhZyBpbmNsdWRlZCBpbiB0aGUgbGluayBsaXN0XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2VjdGlvbkhlYWRpbmdzIFRoZSBhcnJheSBvZiBoZWFkaW5ncyBzZWxlY3RlZCBmb3IgaW5jbHVzaW9uIGluIHRoZSBsaW5rIGxpc3RcbiAqXG4gKiBAcmV0dXJuIHt0YWdOYW1lfSAtIFRoZSB0YWcgbmFtZSBmb3IgdGhlIGhpZ2hlc3QgbGV2ZWwgb2YgaGVhZGVyIGluIHRoZSBsaW5rIGxpc3RcbiAqL1xuXG5jb25zdCBnZXRUb3BMZXZlbEhlYWRpbmcgPSAoc2VjdGlvbkhlYWRpbmdzKSA9PiB7XG4gIGNvbnN0IHRvcEhlYWRpbmcgPSBzZWN0aW9uSGVhZGluZ3NbMF0udGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gdG9wSGVhZGluZztcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgbm9kZSBsaXN0IG9mIHNlY3Rpb24gYW5jaG9yIHRhZ3NcbiAqXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudFtdfSAtIEFuIGFycmF5IG9mIERPTSBub2Rlc1xuICovXG5jb25zdCBnZXRTZWN0aW9uQW5jaG9ycyA9ICgpID0+IHtcbiAgY29uc3Qgc2VjdGlvbkFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIGAuJHtJTl9QQUdFX05BVl9BTkNIT1JfQ0xBU1N9YCxcbiAgKTtcbiAgcmV0dXJuIHNlY3Rpb25BbmNob3JzO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgSUQgZm9yIHRoZSBnaXZlbiBoZWFkaW5nIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtIVE1MSGVhZGluZ0VsZW1lbnR9IGhlYWRpbmdcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9IC0gVW5pcXVlIElEXG4gKi9cbmNvbnN0IGdldEhlYWRpbmdJZCA9IChoZWFkaW5nKSA9PiB7XG4gIGNvbnN0IGJhc2VJZCA9IGhlYWRpbmcudGV4dENvbnRlbnRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC8vIFJlcGxhY2Ugbm9uLWFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIHdpdGggZGFzaGVzXG4gICAgLnJlcGxhY2UoL1teYS16XFxkXS9nLCBcIi1cIilcbiAgICAvLyBSZXBsYWNlIGEgc2VxdWVuY2Ugb2YgdHdvIG9yIG1vcmUgZGFzaGVzIHdpdGggYSBzaW5nbGUgZGFzaFxuICAgIC5yZXBsYWNlKC8tezIsfS9nLCBcIi1cIilcbiAgICAvLyBUcmltIGxlYWRpbmcgb3IgdHJhaWxpbmcgZGFzaCAodGhlcmUgc2hvdWxkIG9ubHkgZXZlciBiZSBvbmUpXG4gICAgLnJlcGxhY2UoL14tfC0kL2csIFwiXCIpO1xuXG4gIGxldCBpZDtcbiAgbGV0IHN1ZmZpeCA9IDA7XG4gIGRvIHtcbiAgICBpZCA9IGJhc2VJZDtcblxuICAgIC8vIFRvIGF2b2lkIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIElEcyBvbiB0aGUgcGFnZSwgbG9vcCBhbmQgYXBwZW5kIGFuXG4gICAgLy8gaW5jcmVtZW50ZWQgc3VmZml4IHVudGlsIGEgdW5pcXVlIElEIGlzIGZvdW5kLlxuICAgIHN1ZmZpeCArPSAxO1xuICAgIGlmIChzdWZmaXggPiAxKSB7XG4gICAgICBpZCArPSBgLSR7c3VmZml4fWA7XG4gICAgfVxuICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGEgc2VjdGlvbiBpZC9hbmNob3IgaGFzaCB3aXRob3V0IHRoZSBudW1iZXIgc2lnblxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gLSBJZCB2YWx1ZSB3aXRoIHRoZSBudW1iZXIgc2lnbiByZW1vdmVkXG4gKi9cbmNvbnN0IGdldFNlY3Rpb25JZCA9ICh2YWx1ZSkgPT4ge1xuICBsZXQgaWQ7XG5cbiAgLy8gQ2hlY2sgaWYgdmFsdWUgaXMgYW4gZXZlbnQgb3IgZWxlbWVudCBhbmQgZ2V0IHRoZSBjbGVhbmVkIHVwIGlkXG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlkID0gdmFsdWUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcbiAgfSBlbHNlIHtcbiAgICBpZCA9IHZhbHVlLnRhcmdldC5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSB0b3RhbCBvZmZzZXQgb2YgYW4gZWxlbWVudCBmcm9tIHRoZSB0b3Agb2YgdGhlIHBhZ2UuXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQSBoZWFkaW5nIGVsZW1lbnQgdG8gY2FsY3VsYXRlIHRoZSBvZmZzZXQgZm9yLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIHRvdGFsIGVsZW1lbnQgb2Zmc2V0IGZyb20gdGhlIHRvcCBvZiBpdHMgcGFyZW50LlxuICovXG5jb25zdCBnZXRUb3RhbEVsZW1lbnRPZmZzZXQgPSAoZWwpID0+IHtcbiAgY29uc3QgY2FsY3VsYXRlT2Zmc2V0ID0gKGN1cnJlbnRFbCkgPT4ge1xuICAgIGlmICghY3VycmVudEVsLm9mZnNldFBhcmVudCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRFbC5vZmZzZXRUb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRFbC5vZmZzZXRUb3AgKyBjYWxjdWxhdGVPZmZzZXQoY3VycmVudEVsLm9mZnNldFBhcmVudCk7XG4gIH07XG5cbiAgcmV0dXJuIGNhbGN1bGF0ZU9mZnNldChlbCk7XG59O1xuXG4vKipcbiAqIFNjcm9sbCBzbW9vdGhseSB0byBhIHNlY3Rpb24gYmFzZWQgb24gdGhlIHBhc3NlZCBpbiBlbGVtZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQSBoZWFkaW5nIGVsZW1lbnRcbiAqL1xuY29uc3QgaGFuZGxlU2Nyb2xsVG9TZWN0aW9uID0gKGVsKSA9PiB7XG4gIGNvbnN0IGluUGFnZU5hdkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7SU5fUEFHRV9OQVZfQ0xBU1N9YCk7XG4gIGNvbnN0IGluUGFnZU5hdlNjcm9sbE9mZnNldCA9XG4gICAgaW5QYWdlTmF2RWwuZGF0YXNldC5zY3JvbGxPZmZzZXQgfHwgSU5fUEFHRV9OQVZfU0NST0xMX09GRlNFVDtcblxuICBjb25zdCBvZmZzZXRUb3AgPSBnZXRUb3RhbEVsZW1lbnRPZmZzZXQoZWwpO1xuXG4gIHdpbmRvdy5zY3JvbGwoe1xuICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIHRvcDogb2Zmc2V0VG9wIC0gaW5QYWdlTmF2U2Nyb2xsT2Zmc2V0LFxuICB9KTtcblxuICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkgIT09IGVsLmlkKSB7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIFwiXCIsIGAjJHtlbC5pZH1gKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTY3JvbGxzIHRoZSBwYWdlIHRvIHRoZSBzZWN0aW9uIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgaGFzaCBmcmFnbWVudCwgaWYgb25lIGV4aXN0cy5cbiAqL1xuY29uc3Qgc2Nyb2xsVG9DdXJyZW50U2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaGFzaEZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XG4gIGlmIChoYXNoRnJhZ21lbnQpIHtcbiAgICBjb25zdCBhbmNob3JUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoRnJhZ21lbnQpO1xuICAgIGlmIChhbmNob3JUYWcpIHtcbiAgICAgIGhhbmRsZVNjcm9sbFRvU2VjdGlvbihhbmNob3JUYWcpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgbnVtYmVyIG9mIHNwZWNpZmllZCBoZWFkaW5ncyBtZWV0cyB0aGUgbWluaW11bSByZXF1aXJlZCBjb3VudC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzZWN0aW9uSGVhZGluZ3MgLSBBcnJheSBvZiBhbGwgdmlzaWJsZSBzZWN0aW9uIGhlYWRpbmdzLlxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbmltdW1IZWFkaW5nQ291bnQgLSBUaGUgbWluaW11bSBudW1iZXIgb2Ygc3BlY2lmaWVkIGhlYWRpbmdzIHJlcXVpcmVkLlxuICogQHBhcmFtIHtBcnJheX0gYWNjZXB0ZWRIZWFkaW5nTGV2ZWxzIC0gQXJyYXkgb2YgaGVhZGluZ3MgY29uc2lkZXJlZCBhcyB2YWxpZCBmb3IgdGhlIGNvdW50LlxuICogQHJldHVybnMge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb3VudCBvZiBzcGVjaWZpZWQgaGVhZGluZ3MgbWVldHMgdGhlIG1pbmltdW0sIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuY29uc3Qgc2hvdWxkUmVuZGVySW5QYWdlTmF2ID0gKFxuICBzZWN0aW9uSGVhZGluZ3MsXG4gIG1pbmltdW1IZWFkaW5nQ291bnQsXG4gIGFjY2VwdGVkSGVhZGluZ0xldmVscyxcbikgPT4ge1xuICAvLyBGaWx0ZXIgaGVhZGluZ3MgdGhhdCBhcmUgaW5jbHVkZWQgaW4gdGhlIGFjY2VwdGVkSGVhZGluZ0xldmVsc1xuICBjb25zdCB2YWxpZEhlYWRpbmdzID0gc2VjdGlvbkhlYWRpbmdzLmZpbHRlcigoaGVhZGluZykgPT5cbiAgICBhY2NlcHRlZEhlYWRpbmdMZXZlbHMuaW5jbHVkZXMoaGVhZGluZy50YWdOYW1lLnRvTG93ZXJDYXNlKCkpLFxuICApO1xuICByZXR1cm4gdmFsaWRIZWFkaW5ncy5sZW5ndGggPj0gbWluaW11bUhlYWRpbmdDb3VudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBpbi1wYWdlIG5hdmlnYXRpb24gY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgVGhlIGluLXBhZ2UgbmF2IGVsZW1lbnRcbiAqL1xuY29uc3QgY3JlYXRlSW5QYWdlTmF2ID0gKGVsKSA9PiB7XG4gIGNvbnN0IGluUGFnZU5hdkVsID0gZWw7XG5cbiAgaWYgKGluUGFnZU5hdkVsLmRhdGFzZXQuZW5oYW5jZWQpIHJldHVybjtcblxuICBjb25zdCBpblBhZ2VOYXZUaXRsZVRleHQgPSBTYW5pdGl6ZXIuZXNjYXBlSFRNTGAke1xuICAgIGluUGFnZU5hdkVsLmRhdGFzZXQudGl0bGVUZXh0IHx8IElOX1BBR0VfTkFWX1RJVExFX1RFWFRcbiAgfWA7XG4gIGNvbnN0IGluUGFnZU5hdlRpdGxlSGVhZGluZ0xldmVsID0gU2FuaXRpemVyLmVzY2FwZUhUTUxgJHtcbiAgICBpblBhZ2VOYXZFbC5kYXRhc2V0LnRpdGxlSGVhZGluZ0xldmVsIHx8IElOX1BBR0VfTkFWX1RJVExFX0hFQURJTkdfTEVWRUxcbiAgfWA7XG4gIGNvbnN0IGluUGFnZU5hdlJvb3RNYXJnaW4gPSBTYW5pdGl6ZXIuZXNjYXBlSFRNTGAke1xuICAgIGluUGFnZU5hdkVsLmRhdGFzZXQucm9vdE1hcmdpbiB8fCBJTl9QQUdFX05BVl9ST09UX01BUkdJTlxuICB9YDtcbiAgY29uc3QgaW5QYWdlTmF2VGhyZXNob2xkID0gU2FuaXRpemVyLmVzY2FwZUhUTUxgJHtcbiAgICBpblBhZ2VOYXZFbC5kYXRhc2V0LnRocmVzaG9sZCB8fCBJTl9QQUdFX05BVl9USFJFU0hPTERcbiAgfWA7XG4gIGNvbnN0IGluUGFnZU5hdkNvbnRlbnRTZWxlY3RvciA9IFNhbml0aXplci5lc2NhcGVIVE1MYCR7XG4gICAgaW5QYWdlTmF2RWwuZGF0YXNldC5tYWluQ29udGVudFNlbGVjdG9yIHx8IE1BSU5fRUxFTUVOVFxuICB9YDtcbiAgY29uc3QgaW5QYWdlTmF2SGVhZGluZ1NlbGVjdG9yID0gU2FuaXRpemVyLmVzY2FwZUhUTUxgJHtcbiAgICBpblBhZ2VOYXZFbC5kYXRhc2V0LmhlYWRpbmdFbGVtZW50cyB8fCBJTl9QQUdFX05BVl9IRUFESU5HU1xuICB9YDtcblxuICBjb25zdCBpblBhZ2VOYXZNaW5pbXVtSGVhZGluZ0NvdW50ID0gU2FuaXRpemVyLmVzY2FwZUhUTUxgJHtcbiAgICBpblBhZ2VOYXZFbC5kYXRhc2V0Lm1pbmltdW1IZWFkaW5nQ291bnQgfHwgSU5fUEFHRV9OQVZfTUlOSU1VTV9IRUFESU5HX0NPVU5UXG4gIH1gO1xuXG4gIGNvbnN0IGFjY2VwdGVkSGVhZGluZ0xldmVscyA9IGluUGFnZU5hdkhlYWRpbmdTZWxlY3RvclxuICAgIC5zcGxpdChcIiBcIilcbiAgICAubWFwKChoKSA9PiBoLnRvTG93ZXJDYXNlKCkpO1xuXG4gIGNvbnN0IHNlY3Rpb25IZWFkaW5ncyA9IGdldFZpc2libGVTZWN0aW9uSGVhZGluZ3MoXG4gICAgaW5QYWdlTmF2Q29udGVudFNlbGVjdG9yLFxuICAgIGluUGFnZU5hdkhlYWRpbmdTZWxlY3RvcixcbiAgKTtcblxuICBpZiAoXG4gICAgIXNob3VsZFJlbmRlckluUGFnZU5hdihcbiAgICAgIHNlY3Rpb25IZWFkaW5ncyxcbiAgICAgIGluUGFnZU5hdk1pbmltdW1IZWFkaW5nQ291bnQsXG4gICAgICBhY2NlcHRlZEhlYWRpbmdMZXZlbHMsXG4gICAgKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJvb3Q6IG51bGwsXG4gICAgcm9vdE1hcmdpbjogaW5QYWdlTmF2Um9vdE1hcmdpbixcbiAgICB0aHJlc2hvbGQ6IFtpblBhZ2VOYXZUaHJlc2hvbGRdLFxuICB9O1xuXG4gIGNvbnN0IGluUGFnZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGluUGFnZU5hdi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIGluUGFnZU5hdlRpdGxlVGV4dCk7XG4gIGluUGFnZU5hdi5jbGFzc0xpc3QuYWRkKElOX1BBR0VfTkFWX05BVl9DTEFTUyk7XG5cbiAgY29uc3QgaW5QYWdlTmF2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGluUGFnZU5hdlRpdGxlSGVhZGluZ0xldmVsKTtcbiAgaW5QYWdlTmF2VGl0bGUuY2xhc3NMaXN0LmFkZChJTl9QQUdFX05BVl9USVRMRV9DTEFTUyk7XG4gIGluUGFnZU5hdlRpdGxlLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgaW5QYWdlTmF2VGl0bGUudGV4dENvbnRlbnQgPSBpblBhZ2VOYXZUaXRsZVRleHQ7XG4gIGluUGFnZU5hdi5hcHBlbmRDaGlsZChpblBhZ2VOYXZUaXRsZSk7XG5cbiAgY29uc3QgaW5QYWdlTmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgaW5QYWdlTmF2TGlzdC5jbGFzc0xpc3QuYWRkKElOX1BBR0VfTkFWX0xJU1RfQ0xBU1MpO1xuICBpblBhZ2VOYXYuYXBwZW5kQ2hpbGQoaW5QYWdlTmF2TGlzdCk7XG5cbiAgc2VjdGlvbkhlYWRpbmdzLmZvckVhY2goKHNlY3Rpb25IZWFkaW5nRWwpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGFuY2hvclRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IHRleHRDb250ZW50T2ZMaW5rID0gc2VjdGlvbkhlYWRpbmdFbC50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0YWcgPSBzZWN0aW9uSGVhZGluZ0VsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB0b3BIZWFkaW5nTGV2ZWwgPSBnZXRUb3BMZXZlbEhlYWRpbmcoc2VjdGlvbkhlYWRpbmdzKTtcbiAgICBjb25zdCBoZWFkaW5nSWQgPSBnZXRIZWFkaW5nSWQoc2VjdGlvbkhlYWRpbmdFbCk7XG5cbiAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKElOX1BBR0VfTkFWX0lURU1fQ0xBU1MpO1xuXG4gICAgaWYgKHRhZyA9PT0gdG9wSGVhZGluZ0xldmVsKSB7XG4gICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKElOX1BBR0VfTkFWX1BSSU1BUllfSVRFTV9DTEFTUyk7XG4gICAgfVxuXG4gICAgbmF2TGlua3Muc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBgIyR7aGVhZGluZ0lkfWApO1xuICAgIG5hdkxpbmtzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIElOX1BBR0VfTkFWX0xJTktfQ0xBU1MpO1xuICAgIG5hdkxpbmtzLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRPZkxpbms7XG5cbiAgICBhbmNob3JUYWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgaGVhZGluZ0lkKTtcbiAgICBhbmNob3JUYWcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgSU5fUEFHRV9OQVZfQU5DSE9SX0NMQVNTKTtcbiAgICBzZWN0aW9uSGVhZGluZ0VsLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgYW5jaG9yVGFnKTtcblxuICAgIGluUGFnZU5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcbiAgfSk7XG5cbiAgaW5QYWdlTmF2RWwuYXBwZW5kQ2hpbGQoaW5QYWdlTmF2KTtcblxuICBjb25zdCBhbmNob3JUYWdzID0gZ2V0U2VjdGlvbkFuY2hvcnMoKTtcbiAgY29uc3Qgb2JzZXJ2ZVNlY3Rpb25zID0gbmV3IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcihzZXRBY3RpdmUsIG9wdGlvbnMpO1xuXG4gIGFuY2hvclRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgb2JzZXJ2ZVNlY3Rpb25zLm9ic2VydmUodGFnKTtcbiAgfSk7XG5cbiAgaW5QYWdlTmF2RWwuZGF0YXNldC5lbmhhbmNlZCA9IFwidHJ1ZVwiO1xufTtcblxuLyoqXG4gKiBIYW5kbGUgY2xpY2sgZnJvbSBsaW5rXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgQW4gZWxlbWVudCB3aXRoaW4gdGhlIGluLXBhZ2UgbmF2IGNvbXBvbmVudFxuICovXG5jb25zdCBoYW5kbGVDbGlja0Zyb21MaW5rID0gKGVsKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRUb1Njcm9sbFRvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWwuaGFzaC5zbGljZSgxKSk7XG4gIGhhbmRsZVNjcm9sbFRvU2VjdGlvbihlbGVtZW50VG9TY3JvbGxUbyk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSB0aGUgZW50ZXIgZXZlbnQgZnJvbSBhIGxpbmsgd2l0aGluIHRoZSBpbi1wYWdlIG5hdiBjb21wb25lbnRcbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEFuIGV2ZW50IHdpdGhpbiB0aGUgaW4tcGFnZSBuYXYgY29tcG9uZW50XG4gKi9cbmNvbnN0IGhhbmRsZUVudGVyRnJvbUxpbmsgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgaWQgPSBnZXRTZWN0aW9uSWQoZXZlbnQpO1xuICBjb25zdCB0YXJnZXRBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGNvbnN0IHRhcmdldCA9IHRhcmdldEFuY2hvci5wYXJlbnRFbGVtZW50O1xuXG4gIGlmICh0YXJnZXQpIHtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG4gICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImJsdXJcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKTtcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIHRocm93IGFuIGVycm9yP1xuICB9XG4gIGhhbmRsZVNjcm9sbFRvU2VjdGlvbih0YXJnZXRBbmNob3IpO1xufTtcblxuY29uc3QgaW5QYWdlTmF2aWdhdGlvbiA9IGJlaGF2aW9yKFxuICB7XG4gICAgW0NMSUNLXToge1xuICAgICAgW2AuJHtJTl9QQUdFX05BVl9MSU5LX0NMQVNTfWBdKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG4gICAgICAgIGhhbmRsZUNsaWNrRnJvbUxpbmsodGhpcyk7XG4gICAgICB9LFxuICAgIH0sXG4gICAga2V5ZG93bjoge1xuICAgICAgW2AuJHtJTl9QQUdFX05BVl9MSU5LX0NMQVNTfWBdOiBrZXltYXAoe1xuICAgICAgICBFbnRlcjogaGFuZGxlRW50ZXJGcm9tTGluayxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpbml0KHJvb3QpIHtcbiAgICAgIHNlbGVjdE9yTWF0Y2hlcyhgLiR7SU5fUEFHRV9OQVZfQ0xBU1N9YCwgcm9vdCkuZm9yRWFjaCgoaW5QYWdlTmF2RWwpID0+IHtcbiAgICAgICAgY3JlYXRlSW5QYWdlTmF2KGluUGFnZU5hdkVsKTtcbiAgICAgICAgc2Nyb2xsVG9DdXJyZW50U2VjdGlvbigpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5QYWdlTmF2aWdhdGlvbjtcbiIsImNvbnN0IHNlbGVjdE9yTWF0Y2hlcyA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zZWxlY3Qtb3ItbWF0Y2hlc1wiKTtcbmNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcblxuY29uc3QgTUFTS0VEX0NMQVNTID0gYCR7UFJFRklYfS1tYXNrZWRgO1xuY29uc3QgTUFTS0VEID0gYC4ke01BU0tFRF9DTEFTU31gO1xuY29uc3QgTUFTSyA9IGAke1BSRUZJWH0taW5wdXQtbWFza2A7XG5jb25zdCBNQVNLX0NPTlRFTlQgPSBgJHtNQVNLfS0tY29udGVudGA7XG5jb25zdCBQTEFDRUhPTERFUiA9IFwicGxhY2Vob2xkZXJcIjtcblxuLy8gVXNlciBkZWZpbmVkIFZhbHVlc1xuY29uc3QgbWFza2VkTnVtYmVyID0gXCJfI2REbU15WTlcIjtcbmNvbnN0IG1hc2tlZExldHRlciA9IFwiQVwiO1xuXG4vLyByZXBsYWNlcyBlYWNoIG1hc2tlZCBpbnB1dCB3aXRoIGEgc2hlbGwgY29udGFpbmluZyB0aGUgaW5wdXQgYW5kIGl0J3MgbWFzay5cbmNvbnN0IGNyZWF0ZU1hc2tlZElucHV0U2hlbGwgPSAoaW5wdXQpID0+IHtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoYCR7UExBQ0VIT0xERVJ9YCk7XG4gIGlmIChwbGFjZWhvbGRlcikge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBwbGFjZWhvbGRlci5sZW5ndGgpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImRhdGEtcGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShgJHtQTEFDRUhPTERFUn1gKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzaGVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzaGVsbC5jbGFzc0xpc3QuYWRkKE1BU0spO1xuICBzaGVsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1hc2tcIiwgcGxhY2Vob2xkZXIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKE1BU0tfQ09OVEVOVCk7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICBjb250ZW50LmlkID0gYCR7aW5wdXQuaWR9TWFza2A7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwbGFjZWhvbGRlcjtcblxuICBzaGVsbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2hlbGwsIGlucHV0KTtcbiAgc2hlbGwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xufTtcblxuY29uc3Qgc2V0VmFsdWVPZk1hc2sgPSAoZWwpID0+IHtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gZWw7XG4gIGNvbnN0IHBsYWNlaG9sZGVyVmFsID0gYCR7ZWwuZGF0YXNldC5wbGFjZWhvbGRlci5zdWJzdHIodmFsdWUubGVuZ3RoKX1gO1xuXG4gIGNvbnN0IHRoZUlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICB0aGVJRWwudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgcmV0dXJuIFt0aGVJRWwsIHBsYWNlaG9sZGVyVmFsXTtcbn07XG5cbmNvbnN0IHN0cmlwcGVkVmFsdWUgPSAoaXNDaGFyc2V0UHJlc2VudCwgdmFsdWUpID0+XG4gIGlzQ2hhcnNldFByZXNlbnQgPyB2YWx1ZS5yZXBsYWNlKC9cXFcvZywgXCJcIikgOiB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG5cbmNvbnN0IGlzSW50ZWdlciA9ICh2YWx1ZSkgPT4gIU51bWJlci5pc05hTihwYXJzZUludCh2YWx1ZSwgMTApKTtcblxuY29uc3QgaXNMZXR0ZXIgPSAodmFsdWUpID0+ICh2YWx1ZSA/IHZhbHVlLm1hdGNoKC9bQS1aXS9pKSA6IGZhbHNlKTtcblxuY29uc3QgaGFuZGxlQ3VycmVudFZhbHVlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGlzQ2hhcnNldFByZXNlbnQgPSBlbC5kYXRhc2V0LmNoYXJzZXQ7XG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gaXNDaGFyc2V0UHJlc2VudCB8fCBlbC5kYXRhc2V0LnBsYWNlaG9sZGVyO1xuICBjb25zdCB7IHZhbHVlIH0gPSBlbDtcbiAgY29uc3QgbGVuID0gcGxhY2Vob2xkZXIubGVuZ3RoO1xuICBsZXQgbmV3VmFsdWUgPSBcIlwiO1xuICBsZXQgaTtcbiAgbGV0IGNoYXJJbmRleDtcblxuICBjb25zdCBzdHJpcHBlZFZhbCA9IHN0cmlwcGVkVmFsdWUoaXNDaGFyc2V0UHJlc2VudCwgdmFsdWUpO1xuXG4gIGZvciAoaSA9IDAsIGNoYXJJbmRleCA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGNvbnN0IGlzSW50ID0gaXNJbnRlZ2VyKHN0cmlwcGVkVmFsW2NoYXJJbmRleF0pO1xuICAgIGNvbnN0IGlzTGV0ID0gaXNMZXR0ZXIoc3RyaXBwZWRWYWxbY2hhckluZGV4XSk7XG4gICAgY29uc3QgbWF0Y2hlc051bWJlciA9IG1hc2tlZE51bWJlci5pbmRleE9mKHBsYWNlaG9sZGVyW2ldKSA+PSAwO1xuICAgIGNvbnN0IG1hdGNoZXNMZXR0ZXIgPSBtYXNrZWRMZXR0ZXIuaW5kZXhPZihwbGFjZWhvbGRlcltpXSkgPj0gMDtcblxuICAgIGlmIChcbiAgICAgIChtYXRjaGVzTnVtYmVyICYmIGlzSW50KSB8fFxuICAgICAgKGlzQ2hhcnNldFByZXNlbnQgJiYgbWF0Y2hlc0xldHRlciAmJiBpc0xldClcbiAgICApIHtcbiAgICAgIG5ld1ZhbHVlICs9IHN0cmlwcGVkVmFsW2NoYXJJbmRleF07XG4gICAgICBjaGFySW5kZXggKz0gMTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKCFpc0NoYXJzZXRQcmVzZW50ICYmICFpc0ludCAmJiBtYXRjaGVzTnVtYmVyKSB8fFxuICAgICAgKGlzQ2hhcnNldFByZXNlbnQgJiZcbiAgICAgICAgKChtYXRjaGVzTGV0dGVyICYmICFpc0xldCkgfHwgKG1hdGNoZXNOdW1iZXIgJiYgIWlzSW50KSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlICs9IHBsYWNlaG9sZGVyW2ldO1xuICAgIH1cbiAgICAvLyBicmVhayBpZiBubyBjaGFyYWN0ZXJzIGxlZnQgYW5kIHRoZSBwYXR0ZXJuIGlzIG5vbi1zcGVjaWFsIGNoYXJhY3RlclxuICAgIGlmIChzdHJpcHBlZFZhbFtjaGFySW5kZXhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbmNvbnN0IGhhbmRsZVZhbHVlQ2hhbmdlID0gKGVsKSA9PiB7XG4gIGNvbnN0IGlucHV0RWwgPSBlbDtcbiAgY29uc3QgaWQgPSBpbnB1dEVsLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICBpbnB1dEVsLnZhbHVlID0gaGFuZGxlQ3VycmVudFZhbHVlKGlucHV0RWwpO1xuXG4gIGNvbnN0IG1hc2tWYWwgPSBzZXRWYWx1ZU9mTWFzayhlbCk7XG4gIGNvbnN0IG1hc2tFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfU1hc2tgKTtcbiAgbWFza0VsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFza0VsLnJlcGxhY2VDaGlsZHJlbihtYXNrVmFsWzBdLCBtYXNrVmFsWzFdKTtcbn07XG5cbmNvbnN0IGlucHV0TWFza0V2ZW50cyA9IHtcbiAga2V5dXA6IHtcbiAgICBbTUFTS0VEXSgpIHtcbiAgICAgIGhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBpbnB1dE1hc2sgPSBiZWhhdmlvcihpbnB1dE1hc2tFdmVudHMsIHtcbiAgaW5pdChyb290KSB7XG4gICAgc2VsZWN0T3JNYXRjaGVzKE1BU0tFRCwgcm9vdCkuZm9yRWFjaCgobWFza2VkSW5wdXQpID0+IHtcbiAgICAgIGNyZWF0ZU1hc2tlZElucHV0U2hlbGwobWFza2VkSW5wdXQpO1xuICAgIH0pO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5wdXRNYXNrO1xuIiwiY29uc3Qga2V5bWFwID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2tleW1hcFwiKTtcbmNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3QgdG9nZ2xlID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3RvZ2dsZVwiKTtcbmNvbnN0IEZvY3VzVHJhcCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9mb2N1cy10cmFwXCIpO1xuY29uc3QgYWNjb3JkaW9uID0gcmVxdWlyZShcIi4uLy4uL3VzYS1hY2NvcmRpb24vc3JjL2luZGV4XCIpO1xuXG5jb25zdCB7IENMSUNLIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvZXZlbnRzXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcblxuY29uc3QgQk9EWSA9IFwiYm9keVwiO1xuY29uc3QgTEFOR1VBR0UgPSBgLiR7UFJFRklYfS1sYW5ndWFnZWA7XG5jb25zdCBMQU5HVUFHRV9TVUIgPSBgLiR7UFJFRklYfS1sYW5ndWFnZV9fc3VibWVudWA7XG5jb25zdCBMQU5HVUFHRV9QUklNQVJZID0gYC4ke1BSRUZJWH0tbGFuZ3VhZ2VfX3ByaW1hcnlgO1xuY29uc3QgTEFOR1VBR0VfUFJJTUFSWV9JVEVNID0gYC4ke1BSRUZJWH0tbGFuZ3VhZ2VfX3ByaW1hcnktaXRlbWA7XG5jb25zdCBMQU5HVUFHRV9DT05UUk9MID0gYGJ1dHRvbi4ke1BSRUZJWH0tbGFuZ3VhZ2VfX2xpbmtgO1xuY29uc3QgTEFOR1VBR0VfTElOS1MgPSBgJHtMQU5HVUFHRX0gYWA7XG5cbmxldCBsYW5ndWFnZUFjdGl2ZTtcblxuY29uc3QgaGlkZUFjdGl2ZUxhbmd1YWdlRHJvcGRvd24gPSAoKSA9PiB7XG4gIGlmICghbGFuZ3VhZ2VBY3RpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0b2dnbGUobGFuZ3VhZ2VBY3RpdmUsIGZhbHNlKTtcbiAgbGFuZ3VhZ2VBY3RpdmUgPSBudWxsO1xufTtcblxuY29uc3QgZm9jdXNMYW5ndWFnZUJ1dHRvbiA9IChldmVudCkgPT4ge1xuICBjb25zdCBwYXJlbnRMYW5ndWFnZUl0ZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdChMQU5HVUFHRV9QUklNQVJZX0lURU0pO1xuXG4gIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoTEFOR1VBR0VfQ09OVFJPTCkpIHtcbiAgICBwYXJlbnRMYW5ndWFnZUl0ZW0ucXVlcnlTZWxlY3RvcihMQU5HVUFHRV9DT05UUk9MKS5mb2N1cygpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVFc2NhcGUgPSAoZXZlbnQpID0+IHtcbiAgaGlkZUFjdGl2ZUxhbmd1YWdlRHJvcGRvd24oKTtcbiAgZm9jdXNMYW5ndWFnZUJ1dHRvbihldmVudCk7XG59O1xuXG5jb25zdCBsYW5ndWFnZVNlbGVjdG9yID0gYmVoYXZpb3IoXG4gIHtcbiAgICBbQ0xJQ0tdOiB7XG4gICAgICBbTEFOR1VBR0VfQ09OVFJPTF0oKSB7XG4gICAgICAgIGlmIChsYW5ndWFnZUFjdGl2ZSAhPT0gdGhpcykge1xuICAgICAgICAgIGhpZGVBY3RpdmVMYW5ndWFnZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhbmd1YWdlQWN0aXZlID09PSB0aGlzKSB7XG4gICAgICAgICAgaGlkZUFjdGl2ZUxhbmd1YWdlRHJvcGRvd24oKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsYW5ndWFnZUFjdGl2ZSkge1xuICAgICAgICAgIGxhbmd1YWdlQWN0aXZlID0gdGhpcztcbiAgICAgICAgICB0b2dnbGUobGFuZ3VhZ2VBY3RpdmUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIFtCT0RZXTogaGlkZUFjdGl2ZUxhbmd1YWdlRHJvcGRvd24sXG4gICAgICBbTEFOR1VBR0VfTElOS1NdKCkge1xuICAgICAgICBjb25zdCBhY2MgPSB0aGlzLmNsb3Nlc3QoYWNjb3JkaW9uLkFDQ09SRElPTik7XG5cbiAgICAgICAgaWYgKGFjYykge1xuICAgICAgICAgIGFjY29yZGlvbi5nZXRCdXR0b25zKGFjYykuZm9yRWFjaCgoYnRuKSA9PiBhY2NvcmRpb24uaGlkZShidG4pKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIGtleWRvd246IHtcbiAgICAgIFtMQU5HVUFHRV9QUklNQVJZXToga2V5bWFwKHsgRXNjYXBlOiBoYW5kbGVFc2NhcGUgfSksXG4gICAgfSxcbiAgICBmb2N1c291dDoge1xuICAgICAgW0xBTkdVQUdFX1BSSU1BUlldKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoTEFOR1VBR0VfUFJJTUFSWSk7XG5cbiAgICAgICAgaWYgKCFsYW5ndWFnZS5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgIGhpZGVBY3RpdmVMYW5ndWFnZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGluaXQocm9vdCkge1xuICAgICAgY29uc3QgdHJhcENvbnRhaW5lciA9IHJvb3QubWF0Y2hlcyhMQU5HVUFHRV9TVUIpXG4gICAgICAgID8gcm9vdFxuICAgICAgICA6IHJvb3QucXVlcnlTZWxlY3RvcihMQU5HVUFHRV9TVUIpO1xuXG4gICAgICBpZiAodHJhcENvbnRhaW5lcikge1xuICAgICAgICBsYW5ndWFnZVNlbGVjdG9yLmZvY3VzVHJhcCA9IEZvY3VzVHJhcCh0cmFwQ29udGFpbmVyLCB7XG4gICAgICAgICAgRXNjYXBlOiAoKSA9PiBoaWRlQWN0aXZlTGFuZ3VhZ2VEcm9wZG93bigpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRlYXJkb3duKCkge1xuICAgICAgbGFuZ3VhZ2VBY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGZvY3VzVHJhcDogbnVsbCxcbiAgfSxcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbGFuZ3VhZ2VTZWxlY3RvcjtcbiIsImNvbnN0IHNlbGVjdE9yTWF0Y2hlcyA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zZWxlY3Qtb3ItbWF0Y2hlc1wiKTtcbmNvbnN0IEZvY3VzVHJhcCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9mb2N1cy10cmFwXCIpO1xuY29uc3QgU2Nyb2xsQmFyV2lkdGggPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2Nyb2xsYmFyLXdpZHRoXCIpO1xuY29uc3QgYmVoYXZpb3IgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvYmVoYXZpb3JcIik7XG5cbmNvbnN0IHsgcHJlZml4OiBQUkVGSVggfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9jb25maWdcIik7XG5cbmNvbnN0IE1PREFMX0NMQVNTTkFNRSA9IGAke1BSRUZJWH0tbW9kYWxgO1xuY29uc3QgT1ZFUkxBWV9DTEFTU05BTUUgPSBgJHtNT0RBTF9DTEFTU05BTUV9LW92ZXJsYXlgO1xuY29uc3QgV1JBUFBFUl9DTEFTU05BTUUgPSBgJHtNT0RBTF9DTEFTU05BTUV9LXdyYXBwZXJgO1xuY29uc3QgT1BFTkVSX0FUVFJJQlVURSA9IFwiZGF0YS1vcGVuLW1vZGFsXCI7XG5jb25zdCBDTE9TRVJfQVRUUklCVVRFID0gXCJkYXRhLWNsb3NlLW1vZGFsXCI7XG5jb25zdCBGT1JDRV9BQ1RJT05fQVRUUklCVVRFID0gXCJkYXRhLWZvcmNlLWFjdGlvblwiO1xuY29uc3QgTk9OX01PREFMX0hJRERFTl9BVFRSSUJVVEUgPSBgZGF0YS1tb2RhbC1oaWRkZW5gO1xuY29uc3QgTU9EQUwgPSBgLiR7TU9EQUxfQ0xBU1NOQU1FfWA7XG5jb25zdCBJTklUSUFMX0ZPQ1VTID0gYFtkYXRhLWZvY3VzXWA7XG5jb25zdCBDTE9TRV9CVVRUT04gPSBgJHtXUkFQUEVSX0NMQVNTTkFNRX0gKlske0NMT1NFUl9BVFRSSUJVVEV9XWA7XG5jb25zdCBPUEVORVJTID0gYCpbJHtPUEVORVJfQVRUUklCVVRFfV1bYXJpYS1jb250cm9sc11gO1xuY29uc3QgQ0xPU0VSUyA9IGAke0NMT1NFX0JVVFRPTn0sIC4ke09WRVJMQVlfQ0xBU1NOQU1FfTpub3QoWyR7Rk9SQ0VfQUNUSU9OX0FUVFJJQlVURX1dKWA7XG5jb25zdCBOT05fTU9EQUxTID0gYGJvZHkgPiAqOm5vdCguJHtXUkFQUEVSX0NMQVNTTkFNRX0pOm5vdChbYXJpYS1oaWRkZW5dKWA7XG5jb25zdCBOT05fTU9EQUxTX0hJRERFTiA9IGBbJHtOT05fTU9EQUxfSElEREVOX0FUVFJJQlVURX1dYDtcblxuY29uc3QgQUNUSVZFX0NMQVNTID0gXCJ1c2EtanMtbW9kYWwtLWFjdGl2ZVwiO1xuY29uc3QgUFJFVkVOVF9DTElDS19DTEFTUyA9IFwidXNhLWpzLW5vLWNsaWNrXCI7XG5jb25zdCBWSVNJQkxFX0NMQVNTID0gXCJpcy12aXNpYmxlXCI7XG5jb25zdCBISURERU5fQ0xBU1MgPSBcImlzLWhpZGRlblwiO1xuXG5sZXQgbW9kYWw7XG5sZXQgSU5JVElBTF9CT0RZX1BBRERJTkc7XG5sZXQgVEVNUE9SQVJZX0JPRFlfUEFERElORztcblxuY29uc3QgaXNBY3RpdmUgPSAoKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhBQ1RJVkVfQ0xBU1MpO1xuY29uc3QgU0NST0xMQkFSX1dJRFRIID0gU2Nyb2xsQmFyV2lkdGgoKTtcblxuLyoqXG4gKiAgQ2xvc2VzIG1vZGFsIHdoZW4gYm91bmQgdG8gYSBidXR0b24gYW5kIHByZXNzZWQuXG4gKi9cbmNvbnN0IG9uTWVudUNsb3NlID0gKCkgPT4ge1xuICBtb2RhbC50b2dnbGVNb2RhbC5jYWxsKG1vZGFsLCBmYWxzZSk7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgdmFsdWUgZm9yIHRlbXBvcmFyeSBib2R5IHBhZGRpbmcgdGhhdCB3aWxsIGJlIGFwcGxpZWQgd2hlbiB0aGUgbW9kYWwgaXMgb3Blbi5cbiAqIFZhbHVlIGlzIGNyZWF0ZWQgYnkgY2hlY2tpbmcgZm9yIGluaXRpYWwgYm9keSBwYWRkaW5nIGFuZCBhZGRpbmcgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIuXG4gKi9cbmNvbnN0IHNldFRlbXBvcmFyeUJvZHlQYWRkaW5nID0gKCkgPT4ge1xuICBJTklUSUFMX0JPRFlfUEFERElORyA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoXCJwYWRkaW5nLXJpZ2h0XCIpO1xuICBURU1QT1JBUllfQk9EWV9QQURESU5HID0gYCR7XG4gICAgcGFyc2VJbnQoSU5JVElBTF9CT0RZX1BBRERJTkcucmVwbGFjZSgvcHgvLCBcIlwiKSwgMTApICtcbiAgICBwYXJzZUludChTQ1JPTExCQVJfV0lEVEgucmVwbGFjZSgvcHgvLCBcIlwiKSwgMTApXG4gIH1weGA7XG59O1xuXG4vKipcbiAqICBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgYSBtb2RhbCB3aW5kb3dcbiAqXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IHRoZSBrZXlkb3duIGV2ZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IHNhZmVBY3RpdmUgaWYgbW9iaWxlIGlzIG9wZW4uXG4gKi9cbmZ1bmN0aW9uIHRvZ2dsZU1vZGFsKGV2ZW50KSB7XG4gIGxldCBvcmlnaW5hbE9wZW5lcjtcbiAgbGV0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICBjb25zdCBzYWZlQWN0aXZlID0gIWlzQWN0aXZlKCk7XG4gIGNvbnN0IG1vZGFsSWQgPSBjbGlja2VkRWxlbWVudFxuICAgID8gY2xpY2tlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7V1JBUFBFUl9DTEFTU05BTUV9LiR7VklTSUJMRV9DTEFTU31gKTtcbiAgY29uc3QgdGFyZ2V0TW9kYWwgPSBzYWZlQWN0aXZlXG4gICAgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbElkKVxuICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7V1JBUFBFUl9DTEFTU05BTUV9LiR7VklTSUJMRV9DTEFTU31gKTtcblxuICAvLyBpZiB0aGVyZSBpcyBubyBtb2RhbCB3ZSByZXR1cm4gZWFybHlcbiAgaWYgKCF0YXJnZXRNb2RhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGN1c3RvbUZvY3VzRWwgPSB0YXJnZXRNb2RhbC5xdWVyeVNlbGVjdG9yKElOSVRJQUxfRk9DVVMpO1xuICBjb25zdCByZXR1cm5Gb2N1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIHRhcmdldE1vZGFsLmdldEF0dHJpYnV0ZShcImRhdGEtb3BlbmVyXCIpLFxuICApO1xuICBjb25zdCBtZW51QnV0dG9uID0gYm9keS5xdWVyeVNlbGVjdG9yKE9QRU5FUlMpO1xuICBjb25zdCBmb3JjZVVzZXJBY3Rpb24gPSB0YXJnZXRNb2RhbC5nZXRBdHRyaWJ1dGUoRk9SQ0VfQUNUSU9OX0FUVFJJQlVURSk7XG5cbiAgLy8gU2V0cyB0aGUgY2xpY2tlZCBlbGVtZW50IHRvIHRoZSBjbG9zZSBidXR0b25cbiAgLy8gc28gZXNjIGtleSBhbHdheXMgY2xvc2VzIG1vZGFsXG4gIGlmIChldmVudC50eXBlID09PSBcImtleWRvd25cIiAmJiB0YXJnZXRNb2RhbCAhPT0gbnVsbCkge1xuICAgIGNsaWNrZWRFbGVtZW50ID0gdGFyZ2V0TW9kYWwucXVlcnlTZWxlY3RvcihDTE9TRV9CVVRUT04pO1xuICB9XG5cbiAgLy8gV2hlbiB3ZSdyZSBub3QgaGl0dGluZyB0aGUgZXNjYXBlIGtleeKAplxuICBpZiAoY2xpY2tlZEVsZW1lbnQpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgY2xpY2sgdGhlIG9wZW5lclxuICAgIC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBhbiBJRCwgbWFrZSBvbmVcbiAgICAvLyBTdG9yZSBpZCBhcyBkYXRhIGF0dHJpYnV0ZSBvbiBtb2RhbFxuICAgIGlmIChjbGlja2VkRWxlbWVudC5oYXNBdHRyaWJ1dGUoT1BFTkVSX0FUVFJJQlVURSkpIHtcbiAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBudWxsKSB7XG4gICAgICAgIG9yaWdpbmFsT3BlbmVyID0gYG1vZGFsLSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTAwMDAwKSArIDEwMDAwMH1gO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShcImlkXCIsIG9yaWdpbmFsT3BlbmVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsT3BlbmVyID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldE1vZGFsLnNldEF0dHJpYnV0ZShcImRhdGEtb3BlbmVyXCIsIG9yaWdpbmFsT3BlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIGJhc2ljYWxseSBzdG9wcyB0aGUgcHJvcGFnYXRpb24gaWYgdGhlIGVsZW1lbnRcbiAgICAvLyBpcyBpbnNpZGUgdGhlIG1vZGFsIGFuZCBub3QgYSBjbG9zZSBidXR0b24gb3JcbiAgICAvLyBlbGVtZW50IGluc2lkZSBhIGNsb3NlIGJ1dHRvblxuICAgIGlmIChjbGlja2VkRWxlbWVudC5jbG9zZXN0KGAuJHtNT0RBTF9DTEFTU05BTUV9YCkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tlZEVsZW1lbnQuaGFzQXR0cmlidXRlKENMT1NFUl9BVFRSSUJVVEUpIHx8XG4gICAgICAgIGNsaWNrZWRFbGVtZW50LmNsb3Nlc3QoYFske0NMT1NFUl9BVFRSSUJVVEV9XWApXG4gICAgICApIHtcbiAgICAgICAgLy8gZG8gbm90aGluZy4gbW92ZSBvbi5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBib2R5LmNsYXNzTGlzdC50b2dnbGUoQUNUSVZFX0NMQVNTLCBzYWZlQWN0aXZlKTtcbiAgdGFyZ2V0TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShWSVNJQkxFX0NMQVNTLCBzYWZlQWN0aXZlKTtcbiAgdGFyZ2V0TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShISURERU5fQ0xBU1MsICFzYWZlQWN0aXZlKTtcblxuICAvLyBJZiB1c2VyIGlzIGZvcmNlZCB0byB0YWtlIGFuIGFjdGlvbiwgYWRkaW5nXG4gIC8vIGEgY2xhc3MgdG8gdGhlIGJvZHkgdGhhdCBwcmV2ZW50cyBjbGlja2luZyB1bmRlcm5lYXRoXG4gIC8vIG92ZXJsYXlcbiAgaWYgKGZvcmNlVXNlckFjdGlvbikge1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShQUkVWRU5UX0NMSUNLX0NMQVNTLCBzYWZlQWN0aXZlKTtcbiAgfVxuXG4gIC8vIFRlbXBvcmFyaWx5IGluY3JlYXNlIGJvZHkgcGFkZGluZyB0byBpbmNsdWRlIHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyLlxuICAvLyBUaGlzIGFjY291bnRzIGZvciB0aGUgY29udGVudCBzaGlmdCB3aGVuIHRoZSBzY3JvbGxiYXIgaXMgcmVtb3ZlZCBvbiBtb2RhbCBvcGVuLlxuICBpZiAoYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPT09IFRFTVBPUkFSWV9CT0RZX1BBRERJTkcpIHtcbiAgICBib2R5LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwicGFkZGluZy1yaWdodFwiKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFRFTVBPUkFSWV9CT0RZX1BBRERJTkc7XG4gIH1cblxuICAvLyBIYW5kbGUgdGhlIGZvY3VzIGFjdGlvbnNcbiAgaWYgKHNhZmVBY3RpdmUpIHtcbiAgICBjb25zdCBvcGVuRm9jdXNFbCA9XG4gICAgICBjdXN0b21Gb2N1c0VsIHx8XG4gICAgICB0YXJnZXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLnVzYS1tb2RhbF9fZm9vdGVyIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSlcIikgfHxcbiAgICAgIHRhcmdldE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b246bm90KFtkaXNhYmxlZF0pXCIpO1xuXG4gICAgdGFyZ2V0TW9kYWwucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIik7XG4gICAgdGFyZ2V0TW9kYWwuc2V0QXR0cmlidXRlKFwiYXJpYS1tb2RhbFwiLCBcInRydWVcIik7XG5cbiAgICAvLyBCaW5kcyBlc2NhcGUga2V5IGlmIHdlJ3JlIG5vdCBmb3JjaW5nXG4gICAgLy8gdGhlIHVzZXIgdG8gdGFrZSBhbiBhY3Rpb25cbiAgICBpZiAoZm9yY2VVc2VyQWN0aW9uKSB7XG4gICAgICBtb2RhbC5mb2N1c1RyYXAgPSBGb2N1c1RyYXAodGFyZ2V0TW9kYWwsIHsgYXV0b0ZvY3VzOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9kYWwuZm9jdXNUcmFwID0gRm9jdXNUcmFwKHRhcmdldE1vZGFsLCB7XG4gICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgIEVzY2FwZTogb25NZW51Q2xvc2UsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGVzIGZvY3VzIHNldHRpbmcgYW5kIGludGVyYWN0aW9uc1xuICAgIG1vZGFsLmZvY3VzVHJhcC51cGRhdGUoc2FmZUFjdGl2ZSk7XG5cbiAgICBvcGVuRm9jdXNFbD8uZm9jdXMoKTtcblxuICAgIC8vIEhpZGVzIGV2ZXJ5dGhpbmcgdGhhdCBpcyBub3QgdGhlIG1vZGFsIGZyb20gc2NyZWVuIHJlYWRlcnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE5PTl9NT0RBTFMpLmZvckVhY2goKG5vbk1vZGFsKSA9PiB7XG4gICAgICBub25Nb2RhbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgICBub25Nb2RhbC5zZXRBdHRyaWJ1dGUoTk9OX01PREFMX0hJRERFTl9BVFRSSUJVVEUsIFwiXCIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFzYWZlQWN0aXZlKSB7XG4gICAgdGFyZ2V0TW9kYWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgIHRhcmdldE1vZGFsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIik7XG5cbiAgICAvLyBUaGUgbW9kYWwgd2luZG93IGlzIGNsb3NlZC5cbiAgICAvLyBOb24tbW9kYWxzIG5vdyBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXIuXG4gICAgLy8gVGhpcyBydW5zIHVuY29uZGl0aW9uYWxseTogdGhlIG9wZW5lciBtYXkgYmUgZ29uZSBmcm9tIHRoZSBkb2N1bWVudCBieVxuICAgIC8vIG5vdywgYW5kIHBhZ2UgY29udGVudCBtdXN0IG5ldmVyIGJlIGxlZnQgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2guXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChOT05fTU9EQUxTX0hJRERFTikuZm9yRWFjaCgobm9uTW9kYWwpID0+IHtcbiAgICAgIG5vbk1vZGFsLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIpO1xuICAgICAgbm9uTW9kYWwucmVtb3ZlQXR0cmlidXRlKE5PTl9NT0RBTF9ISURERU5fQVRUUklCVVRFKTtcbiAgICB9KTtcblxuICAgIGlmIChtZW51QnV0dG9uICYmIHJldHVybkZvY3VzKSB7XG4gICAgICAvLyBGb2N1cyBpcyByZXR1cm5lZCB0byB0aGUgb3BlbmVyXG4gICAgICByZXR1cm5Gb2N1cy5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmIChtb2RhbC5mb2N1c1RyYXApIHtcbiAgICAgIG1vZGFsLmZvY3VzVHJhcC51cGRhdGUoc2FmZUFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNhZmVBY3RpdmU7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBsYWNlaG9sZGVyIHdpdGggZGF0YSBhdHRyaWJ1dGVzIGZvciBjbGVhbnVwIGZ1bmN0aW9uLlxuICogVGhlIGNsZWFudXAgZnVuY3Rpb24gdXNlcyB0aGlzIHBsYWNlaG9sZGVyIHRvIGVhc2lseSByZXN0b3JlIHRoZSBvcmlnaW5hbCBNb2RhbCBIVE1MIG9uIHRlYXJkb3duLlxuICpcbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGJhc2VDb21wb25lbnQgLSBNb2RhbCBIVE1MIGZyb20gdGhlIERPTS5cbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH0gUGxhY2Vob2xkZXIgdXNlZCBmb3IgY2xlYW51cCBmdW5jdGlvbi5cbiAqL1xuY29uc3QgY3JlYXRlUGxhY2VIb2xkZXIgPSAoYmFzZUNvbXBvbmVudCkgPT4ge1xuICBjb25zdCBtb2RhbElEID0gYmFzZUNvbXBvbmVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgY29uc3Qgb3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbW9kYWxBdHRyaWJ1dGVzID0gQXJyYXkuZnJvbShiYXNlQ29tcG9uZW50LmF0dHJpYnV0ZXMpO1xuXG4gIHNldFRlbXBvcmFyeUJvZHlQYWRkaW5nKCk7XG5cbiAgb3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyLnNldEF0dHJpYnV0ZShgZGF0YS1wbGFjZWhvbGRlci1mb3JgLCBtb2RhbElEKTtcbiAgb3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgb3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcblxuICBtb2RhbEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgb3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyLnNldEF0dHJpYnV0ZShcbiAgICAgIGBkYXRhLW9yaWdpbmFsLSR7YXR0cmlidXRlLm5hbWV9YCxcbiAgICAgIGF0dHJpYnV0ZS52YWx1ZSxcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gb3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyO1xufTtcblxuLyoqXG4gKiBNb3ZlcyBuZWNlc3NhcnkgYXR0cmlidXRlcyBmcm9tIE1vZGFsIEhUTUwgdG8gd3JhcHBlciBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGJhc2VDb21wb25lbnQgLSBNb2RhbCBIVE1MIGluIHRoZSBET00uXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBtb2RhbENvbnRlbnRXcmFwcGVyIC0gTW9kYWwgY29tcG9uZW50IHdyYXBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIE1vZGFsIHdyYXBwZXIgd2l0aCBjb3JyZWN0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IHNldE1vZGFsQXR0cmlidXRlcyA9IChiYXNlQ29tcG9uZW50LCBtb2RhbENvbnRlbnRXcmFwcGVyKSA9PiB7XG4gIGNvbnN0IG1vZGFsSUQgPSBiYXNlQ29tcG9uZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICBjb25zdCBhcmlhTGFiZWxsZWRCeSA9IGJhc2VDb21wb25lbnQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpO1xuICBjb25zdCBhcmlhRGVzY3JpYmVkQnkgPSBiYXNlQ29tcG9uZW50LmdldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIik7XG4gIGNvbnN0IGZvcmNlVXNlckFjdGlvbiA9IGJhc2VDb21wb25lbnQuaGFzQXR0cmlidXRlKEZPUkNFX0FDVElPTl9BVFRSSUJVVEUpO1xuXG4gIGlmICghYXJpYUxhYmVsbGVkQnkpXG4gICAgdGhyb3cgbmV3IEVycm9yKGAke21vZGFsSUR9IGlzIG1pc3NpbmcgYXJpYS1sYWJlbGxlZGJ5IGF0dHJpYnV0ZWApO1xuXG4gIGlmICghYXJpYURlc2NyaWJlZEJ5KVxuICAgIHRocm93IG5ldyBFcnJvcihgJHttb2RhbElEfSBpcyBtaXNzaW5nIGFyaWEtZGVzcmliZWRieSBhdHRyaWJ1dGVgKTtcblxuICAvLyBTZXQgYXR0cmlidXRlc1xuICBtb2RhbENvbnRlbnRXcmFwcGVyLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJkaWFsb2dcIik7XG4gIG1vZGFsQ29udGVudFdyYXBwZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICBtb2RhbENvbnRlbnRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIG1vZGFsSUQpO1xuICBtb2RhbENvbnRlbnRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCBhcmlhTGFiZWxsZWRCeSk7XG4gIG1vZGFsQ29udGVudFdyYXBwZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLCBhcmlhRGVzY3JpYmVkQnkpO1xuXG4gIGlmIChmb3JjZVVzZXJBY3Rpb24pIHtcbiAgICBtb2RhbENvbnRlbnRXcmFwcGVyLnNldEF0dHJpYnV0ZShGT1JDRV9BQ1RJT05fQVRUUklCVVRFLCBmb3JjZVVzZXJBY3Rpb24pO1xuICB9XG5cbiAgLy8gQWRkIGFyaWEtY29udHJvbHNcbiAgY29uc3QgbW9kYWxDbG9zZXJzID0gbW9kYWxDb250ZW50V3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKENMT1NFUlMpO1xuICBtb2RhbENsb3NlcnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIG1vZGFsSUQpO1xuICB9KTtcblxuICAvLyBVcGRhdGUgdGhlIGJhc2UgZWxlbWVudCBIVE1MXG4gIGJhc2VDb21wb25lbnQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gIGJhc2VDb21wb25lbnQucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpO1xuICBiYXNlQ29tcG9uZW50LnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIik7XG4gIGJhc2VDb21wb25lbnQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcblxuICByZXR1cm4gbW9kYWxDb250ZW50V3JhcHBlcjtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpZGRlbiBtb2RhbCBjb250ZW50IHdyYXBwZXIuXG4gKiBSZWJ1aWxkcyB0aGUgb3JpZ2luYWwgTW9kYWwgSFRNTCBpbiB0aGUgbmV3IHdyYXBwZXIgYW5kIGFkZHMgYSBwYWdlIG92ZXJsYXkuXG4gKiBUaGVuIG1vdmVzIG9yaWdpbmFsIE1vZGFsIEhUTUwgYXR0cmlidXRlcyB0byB0aGUgbmV3IHdyYXBwZXIuXG4gKlxuICogQHBhcmFtIHtIVE1MRGl2RWxlbWVudH0gYmFzZUNvbXBvbmVudCAtIE9yaWdpbmFsIE1vZGFsIEhUTUwgaW4gdGhlIERPTS5cbiAqIEByZXR1cm5zIE1vZGFsIGNvbXBvbmVudCAtIE1vZGFsIHdyYXBwZXIgdy8gbmVzdGVkIE92ZXJsYXkgYW5kIE1vZGFsIENvbnRlbnQuXG4gKi9cbmNvbnN0IHJlYnVpbGRNb2RhbCA9IChiYXNlQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGJhc2VDb21wb25lbnQ7XG4gIGNvbnN0IG1vZGFsQ29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBvdmVybGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICBtb2RhbENvbnRlbnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoSElEREVOX0NMQVNTLCBXUkFQUEVSX0NMQVNTTkFNRSk7XG4gIG92ZXJsYXlEaXYuY2xhc3NMaXN0LmFkZChPVkVSTEFZX0NMQVNTTkFNRSk7XG5cbiAgLy8gUmVidWlsZCB0aGUgbW9kYWwgZWxlbWVudFxuICBtb2RhbENvbnRlbnRXcmFwcGVyLmFwcGVuZChvdmVybGF5RGl2KTtcbiAgb3ZlcmxheURpdi5hcHBlbmQobW9kYWxDb250ZW50KTtcblxuICAvLyBBZGQgYXR0cmlidXRlc1xuICBzZXRNb2RhbEF0dHJpYnV0ZXMobW9kYWxDb250ZW50LCBtb2RhbENvbnRlbnRXcmFwcGVyKTtcblxuICByZXR1cm4gbW9kYWxDb250ZW50V3JhcHBlcjtcbn07XG5cbi8qKlxuICogIEJ1aWxkcyBtb2RhbCB3aW5kb3cgZnJvbSBiYXNlIEhUTUwgYW5kIGFwcGVuZHMgdG8gdGhlIGVuZCBvZiB0aGUgRE9NLlxuICpcbiAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGJhc2VDb21wb25lbnQgLSBUaGUgbW9kYWwgZGl2IGVsZW1lbnQgaW4gdGhlIERPTS5cbiAqL1xuY29uc3Qgc2V0VXBNb2RhbCA9IChiYXNlQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IG1vZGFsSUQgPSBiYXNlQ29tcG9uZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXG4gIGlmICghbW9kYWxJRCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTW9kYWwgbWFya3VwIGlzIG1pc3NpbmcgSURgKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBwbGFjZWhvbGRlciB3aGVyZSBtb2RhbCBpcyBmb3IgY2xlYW51cFxuICBjb25zdCBvcmlnaW5hbExvY2F0aW9uUGxhY2VIb2xkZXIgPSBjcmVhdGVQbGFjZUhvbGRlcihiYXNlQ29tcG9uZW50KTtcbiAgYmFzZUNvbXBvbmVudC5hZnRlcihvcmlnaW5hbExvY2F0aW9uUGxhY2VIb2xkZXIpO1xuXG4gIC8vIEJ1aWxkIG1vZGFsIGNvbXBvbmVudFxuICBjb25zdCBtb2RhbENvbXBvbmVudCA9IHJlYnVpbGRNb2RhbChiYXNlQ29tcG9uZW50KTtcblxuICAvLyBNb3ZlIGFsbCBtb2RhbHMgdG8gdGhlIGVuZCBvZiB0aGUgRE9NLiBEb2luZyB0aGlzIGFsbG93cyB1cyB0b1xuICAvLyBtb3JlIGVhc2lseSBmaW5kIHRoZSBlbGVtZW50cyB0byBoaWRlIGZyb20gc2NyZWVuIHJlYWRlcnNcbiAgLy8gd2hlbiB0aGUgbW9kYWwgaXMgb3Blbi5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbENvbXBvbmVudCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZXMgZHluYW1pY2FsbHkgY3JlYXRlZCBNb2RhbCBhbmQgV3JhcHBlciBlbGVtZW50cyBhbmQgcmVzdG9yZXMgb3JpZ2luYWwgTW9kYWwgSFRNTC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxEaXZFbGVtZW50fSBiYXNlQ29tcG9uZW50IC0gVGhlIG1vZGFsIGRpdiBlbGVtZW50IGluIHRoZSBET00uXG4gKi9cbmNvbnN0IGNsZWFuVXBNb2RhbCA9IChiYXNlQ29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGJhc2VDb21wb25lbnQ7XG4gIGNvbnN0IG1vZGFsQ29udGVudFdyYXBwZXIgPSBtb2RhbENvbnRlbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBtb2RhbElEID0gbW9kYWxDb250ZW50V3JhcHBlci5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcblxuICAvLyBpZiB0aGVyZSBpcyBubyBtb2RhbElELCByZXR1cm4gZWFybHlcbiAgaWYgKCFtb2RhbElEKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgb3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW2RhdGEtcGxhY2Vob2xkZXItZm9yPVwiJHttb2RhbElEfVwiXWAsXG4gICk7XG5cbiAgaWYgKG9yaWdpbmFsTG9jYXRpb25QbGFjZUhvbGRlcikge1xuICAgIGNvbnN0IG1vZGFsQXR0cmlidXRlcyA9IEFycmF5LmZyb20ob3JpZ2luYWxMb2NhdGlvblBsYWNlSG9sZGVyLmF0dHJpYnV0ZXMpO1xuICAgIG1vZGFsQXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGlmIChhdHRyaWJ1dGUubmFtZS5zdGFydHNXaXRoKFwiZGF0YS1vcmlnaW5hbC1cIikpIHtcbiAgICAgICAgLy8gZGF0YS1vcmlnaW5hbC0gaXMgMTQgbG9uZ1xuICAgICAgICBtb2RhbENvbnRlbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLnN1YnN0cigxNCksIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBvcmlnaW5hbExvY2F0aW9uUGxhY2VIb2xkZXIuYWZ0ZXIobW9kYWxDb250ZW50KTtcbiAgICBvcmlnaW5hbExvY2F0aW9uUGxhY2VIb2xkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgIG9yaWdpbmFsTG9jYXRpb25QbGFjZUhvbGRlcixcbiAgICApO1xuICB9XG5cbiAgbW9kYWxDb250ZW50V3JhcHBlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG1vZGFsQ29udGVudFdyYXBwZXIpO1xufTtcblxubW9kYWwgPSBiZWhhdmlvcihcbiAge30sXG4gIHtcbiAgICBpbml0KHJvb3QpIHtcbiAgICAgIHNlbGVjdE9yTWF0Y2hlcyhNT0RBTCwgcm9vdCkuZm9yRWFjaCgobW9kYWxXaW5kb3cpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxJZCA9IG1vZGFsV2luZG93LmlkO1xuXG4gICAgICAgIHNldFVwTW9kYWwobW9kYWxXaW5kb3cpO1xuXG4gICAgICAgIC8vIFF1ZXJ5IGFsbCBvcGVuZXJzIGFuZCBjbG9zZXJzIGluY2x1ZGluZyB0aGUgb3ZlcmxheVxuICAgICAgICBzZWxlY3RPck1hdGNoZXMoYFthcmlhLWNvbnRyb2xzPVwiJHttb2RhbElkfVwiXWAsIGRvY3VtZW50KS5mb3JFYWNoKFxuICAgICAgICAgIChtb2RhbFRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIC8vIElmIG1vZGFsVHJpZ2dlciBpcyBhbiBhbmNob3IuLi5cbiAgICAgICAgICAgIGlmIChtb2RhbFRyaWdnZXIubm9kZU5hbWUgPT09IFwiQVwiKSB7XG4gICAgICAgICAgICAgIC8vIFR1cm4gYW5jaG9yIGxpbmtzIGludG8gYnV0dG9ucyBmb3Igc2NyZWVuIHJlYWRlcnNcbiAgICAgICAgICAgICAgbW9kYWxUcmlnZ2VyLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG5cbiAgICAgICAgICAgICAgLy8gUHJldmVudCBtb2RhbCB0cmlnZ2VycyBmcm9tIGFjdGluZyBsaWtlIGxpbmtzXG4gICAgICAgICAgICAgIG1vZGFsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbiB1bmNvbW1lbnQgd2hlbiBhcmlhLWhhc3BvcHVwPVwiZGlhbG9nXCIgaXMgc3VwcG9ydGVkXG4gICAgICAgICAgICAvLyBodHRwczovL2ExMXlzdXBwb3J0LmlvL3RlY2gvYXJpYS9hcmlhLWhhc3BvcHVwX2F0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gTW9zdCBzY3JlZW4gcmVhZGVycyBzdXBwb3J0IGFyaWEtaGFzcG9wdXAsIGJ1dCBtaWdodCBhbm5vdW5jZVxuICAgICAgICAgICAgLy8gYXMgb3BlbmluZyBhIG1lbnUgaWYgXCJkaWFsb2dcIiBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgICAgLy8gbW9kYWxUcmlnZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtaGFzcG9wdXBcIiwgXCJkaWFsb2dcIik7XG5cbiAgICAgICAgICAgIG1vZGFsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTW9kYWwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRlYXJkb3duKHJvb3QpIHtcbiAgICAgIHNlbGVjdE9yTWF0Y2hlcyhNT0RBTCwgcm9vdCkuZm9yRWFjaCgobW9kYWxXaW5kb3cpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxJZCA9IG1vZGFsV2luZG93LmlkO1xuICAgICAgICBjbGVhblVwTW9kYWwobW9kYWxXaW5kb3cpO1xuXG4gICAgICAgIHNlbGVjdE9yTWF0Y2hlcyhgW2FyaWEtY29udHJvbHM9XCIke21vZGFsSWR9XCJdYCwgZG9jdW1lbnQpLmZvckVhY2goXG4gICAgICAgICAgKG1vZGFsVHJpZ2dlcikgPT5cbiAgICAgICAgICAgIG1vZGFsVHJpZ2dlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTW9kYWwpLFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBmb2N1c1RyYXA6IG51bGwsXG4gICAgdG9nZ2xlTW9kYWwsXG4gIH0sXG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsO1xuIiwiY29uc3Qgc2VsZWN0T3JNYXRjaGVzID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdC1vci1tYXRjaGVzXCIpO1xuY29uc3QgYmVoYXZpb3IgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvYmVoYXZpb3JcIik7XG5cbmNvbnN0IHsgcHJlZml4OiBQUkVGSVggfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9jb25maWdcIik7XG5cbmNvbnN0IFJBTkdFX0NMQVNTTkFNRSA9IGAke1BSRUZJWH0tcmFuZ2VgO1xuY29uc3QgUkFOR0UgPSBgLiR7UkFOR0VfQ0xBU1NOQU1FfWA7XG5jb25zdCBSQU5HRV9XUkFQUEVSX0NMQVNTID0gYCR7UkFOR0V9X193cmFwcGVyYDtcbmNvbnN0IFZBTFVFX1dSQVBQRVJfQ0xBU1MgPSBgJHtSQU5HRX1fX3ZhbHVlYDtcblxuY29uc3QgUkFOR0VfV1JBUFBFUiA9IGAke1JBTkdFX0NMQVNTTkFNRX1fX3dyYXBwZXJgO1xuY29uc3QgVkFMVUVfV1JBUFBFUiA9IGAke1JBTkdFX0NMQVNTTkFNRX1fX3ZhbHVlYDtcbi8qKlxuICogRHluYW1pY2FsbHkgY3JlYXRlIGEgc3BhbiBmaWVsZCB3aXRoIHRoZSByYW5nZSBzbGlkZXIncyBpbml0aWFsIHZhbHVlLlxuICpcbiAqIEBjb21tZW50IFRoaXMgaXMgdGhlIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUgb2YgdGhlIHJhbmdlIHNsaWRlclxuICogYW5kIGFwcGVhcnMgaW4gYW4gYWRqYWNlbnQgc3Bhbi4gVGhpcyBydW5zIG9uIGluaXQuXG4gKi9cbmNvbnN0IGNyZWF0ZUVuaGFuY2VkUmFuZ2VTbGlkZXIgPSAoZWwpID0+IHtcbiAgY29uc3QgcmFuZ2VTbGlkZXJFbCA9IGVsO1xuICBpZiAocmFuZ2VTbGlkZXJFbC5kYXRhc2V0LmVuaGFuY2VkKSByZXR1cm47XG5cbiAgY29uc3QgcmFuZ2VTbGlkZXJWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcmFuZ2VTbGlkZXJWYWwuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICByYW5nZVNsaWRlclZhbC5jbGFzc05hbWUgPSBWQUxVRV9XUkFQUEVSO1xuICByYW5nZVNsaWRlclZhbC50ZXh0Q29udGVudCA9IHJhbmdlU2xpZGVyRWwudmFsdWU7XG5cbiAgY29uc3QgcmFuZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmFuZ2VXcmFwcGVyLmNsYXNzTmFtZSA9IFJBTkdFX1dSQVBQRVI7XG5cbiAgcmFuZ2VTbGlkZXJFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShyYW5nZVdyYXBwZXIsIHJhbmdlU2xpZGVyRWwpO1xuXG4gIHJhbmdlV3JhcHBlci5hcHBlbmRDaGlsZChyYW5nZVNsaWRlckVsKTtcbiAgcmFuZ2VXcmFwcGVyLmFwcGVuZENoaWxkKHJhbmdlU2xpZGVyVmFsKTtcblxuICByYW5nZVNsaWRlckVsLmRhdGFzZXQuZW5oYW5jZWQgPSBcInRydWVcIjtcbn07XG4vKipcbiAqIFVwZGF0ZSByYW5nZSBjYWxsb3V0IGZvciBzY3JlZW4gcmVhZGVycyB1c2luZyB0aGUgb3B0aW9uYWwgZGF0YSBhdHRyaWJ1dGVzLlxuICpcbiAqIEdldCBvcHRpb25hbCBkYXRhIGF0dHJpYnV0ZXMsIGNvbnN0cnVjdCBhbmQgYXBwZW5kcyBhcmlhLXZhbHVldGV4dCBhdHRyaWJ1dGUuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiA8aW5wdXQgaWQ9XCJ1c2EtcmFuZ2VcIiBjbGFzcz1cInVzYS1yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiB2YWx1ZT1cIjIwXCIgZGF0YS10ZXh0LXVuaXQ9XCJkZWdyZWVzXCI+XG4gKlxuICogQ2FsbG91dCByZXR1cm5zIFwiMjAgZGVncmVlcyBvZiAxMDAuXCJcbiAqXG4gKiA8aW5wdXQgaWQ9XCJ1c2EtcmFuZ2VcIiBjbGFzcz1cInVzYS1yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMTBcIiB2YWx1ZT1cIjIwXCIgZGF0YS10ZXh0LXByZXBvc2l0aW9uPVwiZGVcIj5cbiAqXG4gKiBDYWxsb3V0IHJldHVybnMgXCIyMCBkZSAxMDAuXCJcbiAqXG4gKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IHRhcmdldFJhbmdlIC0gVGhlIHJhbmdlIHNsaWRlciBpbnB1dCBlbGVtZW50XG4gKi9cbmNvbnN0IHVwZGF0ZUNhbGxvdXQgPSAodGFyZ2V0UmFuZ2UpID0+IHtcbiAgY29uc3QgcmFuZ2VTbGlkZXIgPSB0YXJnZXRSYW5nZTtcbiAgY29uc3QgZGVmYXVsdFByZXAgPSBcIm9mXCI7XG4gIGNvbnN0IG9wdGlvbmFsUHJlcCA9IHJhbmdlU2xpZGVyLmRhdGFzZXQudGV4dFByZXBvc2l0aW9uO1xuICBjb25zdCBwcmVwID0gb3B0aW9uYWxQcmVwIHx8IGRlZmF1bHRQcmVwO1xuICBjb25zdCB1bml0ID0gcmFuZ2VTbGlkZXIuZGF0YXNldC50ZXh0VW5pdDtcbiAgY29uc3QgdmFsID0gcmFuZ2VTbGlkZXIudmFsdWU7XG4gIC8vIE5vdGU6IDEwMCBpcyB0aGUgbWF4IGF0dHJpYnV0ZSdzIG5hdGl2ZSBkZWZhdWx0IHZhbHVlIG9uIHJhbmdlIGlucHV0c1xuICAvLyBSZWZlcmVuY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dC9yYW5nZSN2YWxpZGF0aW9uXG4gIGNvbnN0IG1heCA9IHJhbmdlU2xpZGVyLmdldEF0dHJpYnV0ZShcIm1heFwiKSB8fCAxMDA7XG4gIGxldCBjYWxsb3V0O1xuICBpZiAodW5pdCkge1xuICAgIGNhbGxvdXQgPSBgJHt2YWx9ICR7dW5pdH0gJHtwcmVwfSAke21heH1gO1xuICB9IGVsc2Uge1xuICAgIGNhbGxvdXQgPSBgJHt2YWx9ICR7cHJlcH0gJHttYXh9YDtcbiAgfVxuICByYW5nZVNsaWRlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLXZhbHVldGV4dFwiLCBjYWxsb3V0KTtcbn07XG4vKipcbiAqIFVwZGF0ZSByYW5nZSA8c3Bhbj4gdmFsdWUgKHRoZSByYW5nZSBzbGlkZXIgdmFsdWUgZm9yIHNpZ2h0ZWQgdXNlcnMpLlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSB0YXJnZXRSYW5nZSAtIFRoZSByYW5nZSBzbGlkZXIgaW5wdXQgZWxlbWVudFxuICovXG5jb25zdCB1cGRhdGVWaXN1YWxDYWxsb3V0ID0gKGVsKSA9PiB7XG4gIGNvbnN0IHJhbmdlU2xpZGVyRWwgPSBlbDtcbiAgY29uc3QgcGFyZW50RGl2ID0gcmFuZ2VTbGlkZXJFbC5jbG9zZXN0KFJBTkdFX1dSQVBQRVJfQ0xBU1MpO1xuICBjb25zdCByYW5nZVNsaWRlclZhbCA9IHBhcmVudERpdi5xdWVyeVNlbGVjdG9yKFZBTFVFX1dSQVBQRVJfQ0xBU1MpO1xuICByYW5nZVNsaWRlclZhbC50ZXh0Q29udGVudCA9IHJhbmdlU2xpZGVyRWwudmFsdWU7XG59O1xuXG5jb25zdCByYW5nZUV2ZW50cyA9IHtcbiAgY2hhbmdlOiB7XG4gICAgW1JBTkdFXSgpIHtcbiAgICAgIHVwZGF0ZUNhbGxvdXQodGhpcyk7XG4gICAgICB1cGRhdGVWaXN1YWxDYWxsb3V0KHRoaXMpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCByYW5nZSA9IGJlaGF2aW9yKHJhbmdlRXZlbnRzLCB7XG4gIGluaXQocm9vdCkge1xuICAgIHNlbGVjdE9yTWF0Y2hlcyhSQU5HRSwgcm9vdCkuZm9yRWFjaCgocmFuZ2VTbGlkZXIpID0+IHtcbiAgICAgIGNyZWF0ZUVuaGFuY2VkUmFuZ2VTbGlkZXIocmFuZ2VTbGlkZXIpO1xuICAgICAgdXBkYXRlQ2FsbG91dChyYW5nZVNsaWRlcik7XG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZUNhbGxvdXQsXG4gIHVwZGF0ZVZpc3VhbENhbGxvdXQsXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSByYW5nZTtcbiIsImNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3Qgc2VsZWN0ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdFwiKTtcblxuY29uc3QgeyBDTElDSyB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2V2ZW50c1wiKTtcblxuY29uc3QgQlVUVE9OID0gXCIuanMtc2VhcmNoLWJ1dHRvblwiO1xuY29uc3QgRk9STSA9IFwiLmpzLXNlYXJjaC1mb3JtXCI7XG5jb25zdCBJTlBVVCA9IFwiW3R5cGU9c2VhcmNoXVwiO1xuY29uc3QgQ09OVEVYVCA9IFwiaGVhZGVyXCI7IC8vIFhYWFxuXG5sZXQgbGFzdEJ1dHRvbjtcblxuY29uc3QgZ2V0Rm9ybSA9IChidXR0b24pID0+IHtcbiAgY29uc3QgY29udGV4dCA9IGJ1dHRvbi5jbG9zZXN0KENPTlRFWFQpO1xuICByZXR1cm4gY29udGV4dCA/IGNvbnRleHQucXVlcnlTZWxlY3RvcihGT1JNKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRk9STSk7XG59O1xuXG5jb25zdCB0b2dnbGVTZWFyY2ggPSAoYnV0dG9uLCBhY3RpdmUpID0+IHtcbiAgY29uc3QgZm9ybSA9IGdldEZvcm0oYnV0dG9uKTtcblxuICBpZiAoIWZvcm0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vICR7Rk9STX0gZm91bmQgZm9yIHNlYXJjaCB0b2dnbGUgaW4gJHtDT05URVhUfSFgKTtcbiAgfVxuXG4gIGJ1dHRvbi5oaWRkZW4gPSBhY3RpdmU7XG4gIGZvcm0uaGlkZGVuID0gIWFjdGl2ZTtcblxuICBpZiAoIWFjdGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKElOUFVUKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5mb2N1cygpO1xuICB9XG4gIC8vIHdoZW4gdGhlIHVzZXIgY2xpY2tzIF9vdXRzaWRlXyBvZiB0aGUgZm9ybSB3L2lnbm9yZSgpOiBoaWRlIHRoZVxuICAvLyBzZWFyY2gsIHRoZW4gcmVtb3ZlIHRoZSBsaXN0ZW5lclxuICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGlmIChmb3JtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGFzdEJ1dHRvbikge1xuICAgICAgaGlkZVNlYXJjaC5jYWxsKGxhc3RCdXR0b24pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihDTElDSywgbGlzdGVuZXIpO1xuICB9O1xuXG4gIC8vIE5vcm1hbGx5IHdlIHdvdWxkIGp1c3QgcnVuIHRoaXMgY29kZSB3aXRob3V0IGEgdGltZW91dCwgYnV0XG4gIC8vIElFMTEgYW5kIEVkZ2Ugd2lsbCBhY3R1YWxseSBjYWxsIHRoZSBsaXN0ZW5lciAqaW1tZWRpYXRlbHkqIGJlY2F1c2VcbiAgLy8gdGhleSBhcmUgY3VycmVudGx5IGhhbmRsaW5nIHRoaXMgZXhhY3QgdHlwZSBvZiBldmVudCwgc28gd2UnbGxcbiAgLy8gbWFrZSBzdXJlIHRoZSBicm93c2VyIGlzIGRvbmUgaGFuZGxpbmcgdGhlIGN1cnJlbnQgY2xpY2sgZXZlbnQsXG4gIC8vIGlmIGFueSwgYmVmb3JlIHdlIGF0dGFjaCB0aGUgbGlzdGVuZXIuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihDTElDSywgbGlzdGVuZXIpO1xuICB9LCAwKTtcbn07XG5cbmZ1bmN0aW9uIHNob3dTZWFyY2goKSB7XG4gIHRvZ2dsZVNlYXJjaCh0aGlzLCB0cnVlKTtcbiAgbGFzdEJ1dHRvbiA9IHRoaXM7XG59XG5cbmZ1bmN0aW9uIGhpZGVTZWFyY2goKSB7XG4gIHRvZ2dsZVNlYXJjaCh0aGlzLCBmYWxzZSk7XG4gIGxhc3RCdXR0b24gPSB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IHNlYXJjaCA9IGJlaGF2aW9yKFxuICB7XG4gICAgW0NMSUNLXToge1xuICAgICAgW0JVVFRPTl06IHNob3dTZWFyY2gsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGluaXQodGFyZ2V0KSB7XG4gICAgICBzZWxlY3QoQlVUVE9OLCB0YXJnZXQpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICB0b2dnbGVTZWFyY2goYnV0dG9uLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHRlYXJkb3duKCkge1xuICAgICAgLy8gZm9yZ2V0IHRoZSBsYXN0IGJ1dHRvbiBjbGlja2VkXG4gICAgICBsYXN0QnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gIH0sXG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlYXJjaDtcbiIsImNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3QgeyBDTElDSyB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2V2ZW50c1wiKTtcbmNvbnN0IHsgcHJlZml4OiBQUkVGSVggfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9jb25maWdcIik7XG5cbmNvbnN0IExJTksgPSBgLiR7UFJFRklYfS1za2lwbmF2W2hyZWZePVwiI1wiXSwgLiR7UFJFRklYfS1mb290ZXJfX3JldHVybi10by10b3AgW2hyZWZePVwiI1wiXWA7XG5jb25zdCBNQUlOQ09OVEVOVCA9IFwibWFpbi1jb250ZW50XCI7XG5cbmZ1bmN0aW9uIHNldFRhYmluZGV4KCkge1xuICAvLyBOQjogd2Uga25vdyBiZWNhdXNlIG9mIHRoZSBzZWxlY3RvciB3ZSdyZSBkZWxlZ2F0aW5nIHRvIGJlbG93IHRoYXQgdGhlXG4gIC8vIGhyZWYgYWxyZWFkeSBiZWdpbnMgd2l0aCAnIydcbiAgY29uc3QgaWQgPSBlbmNvZGVVUkkodGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpKTtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgaWQgPT09IFwiI1wiID8gTUFJTkNPTlRFTlQgOiBpZC5zbGljZSgxKSxcbiAgKTtcblxuICBpZiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnN0eWxlLm91dGxpbmUgPSBcIjBcIjtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG4gICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSksIHtcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhyb3cgYW4gZXJyb3I/XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiZWhhdmlvcih7XG4gIFtDTElDS106IHtcbiAgICBbTElOS106IHNldFRhYmluZGV4LFxuICB9LFxufSk7XG4iLCJjb25zdCBzZWxlY3QgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2VsZWN0XCIpO1xuY29uc3QgYmVoYXZpb3IgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvYmVoYXZpb3JcIik7XG5jb25zdCB7IENMSUNLIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvZXZlbnRzXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcbmNvbnN0IFNhbml0aXplciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9zYW5pdGl6ZXJcIik7XG5cbmNvbnN0IFRBQkxFID0gYC4ke1BSRUZJWH0tdGFibGVgO1xuY29uc3QgU09SVEVEID0gXCJhcmlhLXNvcnRcIjtcbmNvbnN0IEFTQ0VORElORyA9IFwiYXNjZW5kaW5nXCI7XG5jb25zdCBERVNDRU5ESU5HID0gXCJkZXNjZW5kaW5nXCI7XG5jb25zdCBTT1JUX09WRVJSSURFID0gXCJkYXRhLXNvcnQtdmFsdWVcIjtcbmNvbnN0IFNPUlRfQlVUVE9OX0NMQVNTID0gYCR7UFJFRklYfS10YWJsZV9faGVhZGVyX19idXR0b25gO1xuY29uc3QgU09SVF9CVVRUT04gPSBgLiR7U09SVF9CVVRUT05fQ0xBU1N9YDtcbmNvbnN0IFNPUlRBQkxFX0hFQURFUiA9IGB0aFtkYXRhLXNvcnRhYmxlXWA7XG5jb25zdCBBTk5PVU5DRU1FTlRfUkVHSU9OID0gYC4ke1BSRUZJWH0tdGFibGVfX2Fubm91bmNlbWVudC1yZWdpb25bYXJpYS1saXZlPVwicG9saXRlXCJdYDtcblxuLyoqIEdldHMgdGhlIGRhdGEtc29ydC12YWx1ZSBhdHRyaWJ1dGUgdmFsdWUsIGlmIHByb3ZpZGVkIOKAlCBvdGhlcndpc2UsIGdldHNcbiAqIHRoZSBpbm5lclRleHQgb3IgdGV4dENvbnRlbnQg4oCUIG9mIHRoZSBjaGlsZCBlbGVtZW50IChIVE1MVGFibGVDZWxsRWxlbWVudClcbiAqIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggb2YgdGhlIGdpdmVuIHRhYmxlIHJvd1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHthcnJheTxIVE1MVGFibGVSb3dFbGVtZW50Pn0gdHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGdldENlbGxWYWx1ZSA9ICh0ciwgaW5kZXgpID0+XG4gIHRyLmNoaWxkcmVuW2luZGV4XS5nZXRBdHRyaWJ1dGUoU09SVF9PVkVSUklERSkgfHxcbiAgdHIuY2hpbGRyZW5baW5kZXhdLmlubmVyVGV4dCB8fFxuICB0ci5jaGlsZHJlbltpbmRleF0udGV4dENvbnRlbnQ7XG5cbi8qKlxuICogQ29tcGFyZXMgdGhlIHZhbHVlcyBvZiB0d28gcm93IGFycmF5IGl0ZW1zIGF0IHRoZSBnaXZlbiBpbmRleCwgdGhlbiBzb3J0cyBieSB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7c3RyaW5nfSBkaXJlY3Rpb25cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGNvbXBhcmVGdW5jdGlvbiA9IChpbmRleCwgaXNBc2NlbmRpbmcpID0+ICh0aGlzUm93LCBuZXh0Um93KSA9PiB7XG4gIC8vIGdldCB2YWx1ZXMgdG8gY29tcGFyZSBmcm9tIGRhdGEgYXR0cmlidXRlIG9yIGNlbGwgY29udGVudFxuICBjb25zdCB2YWx1ZTEgPSBnZXRDZWxsVmFsdWUoaXNBc2NlbmRpbmcgPyB0aGlzUm93IDogbmV4dFJvdywgaW5kZXgpO1xuICBjb25zdCB2YWx1ZTIgPSBnZXRDZWxsVmFsdWUoaXNBc2NlbmRpbmcgPyBuZXh0Um93IDogdGhpc1JvdywgaW5kZXgpO1xuXG4gIC8vIGlmIG5laXRoZXIgdmFsdWUgaXMgZW1wdHksIGFuZCBpZiBib3RoIHZhbHVlcyBhcmUgYWxyZWFkeSBudW1iZXJzLCBjb21wYXJlIG51bWVyaWNhbGx5XG4gIGlmIChcbiAgICB2YWx1ZTEgJiZcbiAgICB2YWx1ZTIgJiZcbiAgICAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZTEpKSAmJlxuICAgICFOdW1iZXIuaXNOYU4oTnVtYmVyKHZhbHVlMikpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZTEgLSB2YWx1ZTI7XG4gIH1cbiAgLy8gT3RoZXJ3aXNlLCBjb21wYXJlIGFscGhhYmV0aWNhbGx5IGJhc2VkIG9uIGN1cnJlbnQgdXNlciBsb2NhbGVcbiAgcmV0dXJuIHZhbHVlMS50b1N0cmluZygpLmxvY2FsZUNvbXBhcmUodmFsdWUyLCBuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICBudW1lcmljOiB0cnVlLFxuICAgIGlnbm9yZVB1bmN0dWF0aW9uOiB0cnVlLFxuICB9KTtcbn07XG5cbi8qKlxuICogR2V0IGFuIEFycmF5IG9mIGNvbHVtbiBoZWFkZXJzIGVsZW1lbnRzIGJlbG9uZ2luZyBkaXJlY3RseSB0byB0aGUgZ2l2ZW5cbiAqIHRhYmxlIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0hUTUxUYWJsZUVsZW1lbnR9IHRhYmxlXG4gKiBAcmV0dXJuIHthcnJheTxIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudD59XG4gKi9cbmNvbnN0IGdldENvbHVtbkhlYWRlcnMgPSAodGFibGUpID0+IHtcbiAgY29uc3QgaGVhZGVycyA9IHNlbGVjdChTT1JUQUJMRV9IRUFERVIsIHRhYmxlKTtcbiAgcmV0dXJuIGhlYWRlcnMuZmlsdGVyKChoZWFkZXIpID0+IGhlYWRlci5jbG9zZXN0KFRBQkxFKSA9PT0gdGFibGUpO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGJ1dHRvbiBsYWJlbCB3aXRoaW4gdGhlIGdpdmVuIGhlYWRlciBlbGVtZW50LCByZXNldHRpbmcgaXRcbiAqIHRvIHRoZSBkZWZhdWx0IHN0YXRlIChyZWFkeSB0byBzb3J0IGFzY2VuZGluZykgaWYgaXQncyBubyBsb25nZXIgc29ydGVkXG4gKiBAcGFyYW0ge0hUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50fSBoZWFkZXJcbiAqL1xuY29uc3QgdXBkYXRlU29ydExhYmVsID0gKGhlYWRlcikgPT4ge1xuICBjb25zdCBoZWFkZXJOYW1lID0gaGVhZGVyLmlubmVyVGV4dDtcbiAgY29uc3Qgc29ydGVkQXNjZW5kaW5nID0gaGVhZGVyLmdldEF0dHJpYnV0ZShTT1JURUQpID09PSBBU0NFTkRJTkc7XG4gIGNvbnN0IGlzU29ydGVkID1cbiAgICBoZWFkZXIuZ2V0QXR0cmlidXRlKFNPUlRFRCkgPT09IEFTQ0VORElORyB8fFxuICAgIGhlYWRlci5nZXRBdHRyaWJ1dGUoU09SVEVEKSA9PT0gREVTQ0VORElORyB8fFxuICAgIGZhbHNlO1xuICBjb25zdCBoZWFkZXJMYWJlbCA9IGAke2hlYWRlck5hbWV9LCBzb3J0YWJsZSBjb2x1bW4sIGN1cnJlbnRseSAke1xuICAgIGlzU29ydGVkXG4gICAgICA/IGAke3NvcnRlZEFzY2VuZGluZyA/IGBzb3J0ZWQgJHtBU0NFTkRJTkd9YCA6IGBzb3J0ZWQgJHtERVNDRU5ESU5HfWB9YFxuICAgICAgOiBcInVuc29ydGVkXCJcbiAgfWA7XG4gIGNvbnN0IGhlYWRlckJ1dHRvbkxhYmVsID0gYENsaWNrIHRvIHNvcnQgYnkgJHtoZWFkZXJOYW1lfSBpbiAke1xuICAgIHNvcnRlZEFzY2VuZGluZyA/IERFU0NFTkRJTkcgOiBBU0NFTkRJTkdcbiAgfSBvcmRlci5gO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBoZWFkZXJMYWJlbCk7XG4gIGhlYWRlci5xdWVyeVNlbGVjdG9yKFNPUlRfQlVUVE9OKS5zZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiLCBoZWFkZXJCdXR0b25MYWJlbCk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYXJpYS1zb3J0IGF0dHJpYnV0ZSBvbiB0aGUgZ2l2ZW4gaGVhZGVyIGVsZW1lbnQsIGFuZCByZXNldCB0aGUgbGFiZWwgYW5kIGJ1dHRvbiBpY29uXG4gKiBAcGFyYW0ge0hUTUxUYWJsZUhlYWRlckNlbGxFbGVtZW50fSBoZWFkZXJcbiAqL1xuY29uc3QgdW5zZXRTb3J0ID0gKGhlYWRlcikgPT4ge1xuICBoZWFkZXIucmVtb3ZlQXR0cmlidXRlKFNPUlRFRCk7XG4gIHVwZGF0ZVNvcnRMYWJlbChoZWFkZXIpO1xufTtcblxuLyoqXG4gKiBTb3J0IHJvd3MgZWl0aGVyIGFzY2VuZGluZyBvciBkZXNjZW5kaW5nLCBiYXNlZCBvbiBhIGdpdmVuIGhlYWRlcidzIGFyaWEtc29ydCBhdHRyaWJ1dGVcbiAqIEBwYXJhbSB7SFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnR9IGhlYWRlclxuICogQHBhcmFtIHtib29sZWFufSBpc0FzY2VuZGluZ1xuICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZVxuICovXG5jb25zdCBzb3J0Um93cyA9IChoZWFkZXIsIGlzQXNjZW5kaW5nKSA9PiB7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoU09SVEVELCBpc0FzY2VuZGluZyA9PT0gdHJ1ZSA/IERFU0NFTkRJTkcgOiBBU0NFTkRJTkcpO1xuICB1cGRhdGVTb3J0TGFiZWwoaGVhZGVyKTtcblxuICBjb25zdCB0Ym9keSA9IGhlYWRlci5jbG9zZXN0KFRBQkxFKS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XG5cbiAgLy8gV2UgY2FuIHVzZSBBcnJheS5mcm9tKCkgYW5kIEFycmF5LnNvcnQoKSBpbnN0ZWFkIG9uY2Ugd2UgZHJvcCBJRTExIHN1cHBvcnQsIGxpa2VseSBpbiB0aGUgc3VtbWVyIG9mIDIwMjFcbiAgLy9cbiAgLy8gQXJyYXkuZnJvbSh0Ym9keS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpLnNvcnQoXG4gIC8vICAgY29tcGFyZUZ1bmN0aW9uKFxuICAvLyAgICAgQXJyYXkuZnJvbShoZWFkZXIucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZihoZWFkZXIpLFxuICAvLyAgICAgIWlzQXNjZW5kaW5nKVxuICAvLyAgIClcbiAgLy8gLmZvckVhY2godHIgPT4gdGJvZHkuYXBwZW5kQ2hpbGQodHIpICk7XG5cbiAgLy8gW10uc2xpY2UuY2FsbCgpIHR1cm5zIGFycmF5LWxpa2Ugc2V0cyBpbnRvIHRydWUgYXJyYXlzIHNvIHRoYXQgd2UgY2FuIHNvcnQgdGhlbVxuICBjb25zdCBhbGxSb3dzID0gW10uc2xpY2UuY2FsbCh0Ym9keS5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIikpO1xuICBjb25zdCBhbGxIZWFkZXJzID0gW10uc2xpY2UuY2FsbChoZWFkZXIucGFyZW50Tm9kZS5jaGlsZHJlbik7XG4gIGNvbnN0IHRoaXNIZWFkZXJJbmRleCA9IGFsbEhlYWRlcnMuaW5kZXhPZihoZWFkZXIpO1xuICBhbGxSb3dzLnNvcnQoY29tcGFyZUZ1bmN0aW9uKHRoaXNIZWFkZXJJbmRleCwgIWlzQXNjZW5kaW5nKSkuZm9yRWFjaCgodHIpID0+IHtcbiAgICBbXS5zbGljZVxuICAgICAgLmNhbGwodHIuY2hpbGRyZW4pXG4gICAgICAuZm9yRWFjaCgodGQpID0+IHRkLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtc29ydC1hY3RpdmVcIikpO1xuICAgIHRyLmNoaWxkcmVuW3RoaXNIZWFkZXJJbmRleF0uc2V0QXR0cmlidXRlKFwiZGF0YS1zb3J0LWFjdGl2ZVwiLCB0cnVlKTtcbiAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XG4gIH0pO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGxpdmUgcmVnaW9uIGltbWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgdGFibGUgd2hlbmV2ZXIgc29ydCBjaGFuZ2VzLlxuICogQHBhcmFtIHtIVE1MVGFibGVFbGVtZW50fSB0YWJsZVxuICogQHBhcmFtIHtIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudH0gc29ydGVkSGVhZGVyXG4gKi9cblxuY29uc3QgdXBkYXRlTGl2ZVJlZ2lvbiA9ICh0YWJsZSwgc29ydGVkSGVhZGVyKSA9PiB7XG4gIGNvbnN0IGNhcHRpb24gPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwiY2FwdGlvblwiKS5pbm5lclRleHQ7XG4gIGNvbnN0IHNvcnRlZEFzY2VuZGluZyA9IHNvcnRlZEhlYWRlci5nZXRBdHRyaWJ1dGUoU09SVEVEKSA9PT0gQVNDRU5ESU5HO1xuICBjb25zdCBoZWFkZXJMYWJlbCA9IHNvcnRlZEhlYWRlci5pbm5lclRleHQ7XG4gIGNvbnN0IGxpdmVSZWdpb24gPSB0YWJsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChsaXZlUmVnaW9uICYmIGxpdmVSZWdpb24ubWF0Y2hlcyhBTk5PVU5DRU1FTlRfUkVHSU9OKSkge1xuICAgIGNvbnN0IHNvcnRBbm5vdW5jZW1lbnQgPSBgVGhlIHRhYmxlIG5hbWVkIFwiJHtjYXB0aW9ufVwiIGlzIG5vdyBzb3J0ZWQgYnkgJHtoZWFkZXJMYWJlbH0gaW4gJHtcbiAgICAgIHNvcnRlZEFzY2VuZGluZyA/IEFTQ0VORElORyA6IERFU0NFTkRJTkdcbiAgICB9IG9yZGVyLmA7XG4gICAgbGl2ZVJlZ2lvbi5pbm5lclRleHQgPSBzb3J0QW5ub3VuY2VtZW50O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBUYWJsZSBjb250YWluaW5nIGEgc29ydGFibGUgY29sdW1uIGhlYWRlciBpcyBub3QgZm9sbG93ZWQgYnkgYW4gYXJpYS1saXZlIHJlZ2lvbi5gLFxuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogVG9nZ2xlIGEgaGVhZGVyJ3Mgc29ydCBzdGF0ZSwgb3B0aW9uYWxseSBwcm92aWRpbmcgYSB0YXJnZXRcbiAqIHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7SFRNTFRhYmxlSGVhZGVyQ2VsbEVsZW1lbnR9IGhlYWRlclxuICogQHBhcmFtIHtib29sZWFuP30gaXNBc2NlbmRpbmcgSWYgbm8gc3RhdGUgaXMgcHJvdmlkZWQsIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSB3aWxsIGJlIHRvZ2dsZWQgKGZyb20gZmFsc2UgdG8gdHJ1ZSwgYW5kIHZpY2UtdmVyc2EpLlxuICovXG5jb25zdCB0b2dnbGVTb3J0ID0gKGhlYWRlciwgaXNBc2NlbmRpbmcpID0+IHtcbiAgY29uc3QgdGFibGUgPSBoZWFkZXIuY2xvc2VzdChUQUJMRSk7XG5cbiAgaWYgKCF0YWJsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtTT1JUQUJMRV9IRUFERVJ9IGlzIG1pc3Npbmcgb3V0ZXIgJHtUQUJMRX1gKTtcbiAgfVxuXG4gIGNvbnN0IHNhZmVBc2NlbmRpbmcgPSBzb3J0Um93cyhoZWFkZXIsIGlzQXNjZW5kaW5nKTtcblxuICBpZiAoc2FmZUFzY2VuZGluZykge1xuICAgIGdldENvbHVtbkhlYWRlcnModGFibGUpLmZvckVhY2goKG90aGVySGVhZGVyKSA9PiB7XG4gICAgICBpZiAob3RoZXJIZWFkZXIgIT09IGhlYWRlcikge1xuICAgICAgICB1bnNldFNvcnQob3RoZXJIZWFkZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVwZGF0ZUxpdmVSZWdpb24odGFibGUsIGhlYWRlcik7XG4gIH1cbn07XG5cbi8qKlxuICoqIEluc2VydHMgYSBidXR0b24gd2l0aCBpY29uIGluc2lkZSBhIHNvcnRhYmxlIGhlYWRlclxuICogQHBhcmFtIHtIVE1MVGFibGVIZWFkZXJDZWxsRWxlbWVudH0gaGVhZGVyXG4gKi9cblxuY29uc3QgY3JlYXRlSGVhZGVyQnV0dG9uID0gKGhlYWRlcikgPT4ge1xuICBjb25zdCBidXR0b25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbkVsLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgYnV0dG9uRWwuY2xhc3NMaXN0LmFkZChTT1JUX0JVVFRPTl9DTEFTUyk7XG4gIC8vIElDT05fU09VUkNFXG4gIGJ1dHRvbkVsLmlubmVySFRNTCA9IFNhbml0aXplci5lc2NhcGVIVE1MYFxuICA8c3ZnIGNsYXNzPVwiJHtQUkVGSVh9LWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgIDxnIGNsYXNzPVwiZGVzY2VuZGluZ1wiIGZpbGw9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgPHBhdGggZD1cIk0xNyAxN0wxNS41OSAxNS41OUwxMi45OTk5IDE4LjE3VjJIMTAuOTk5OVYxOC4xN0w4LjQxIDE1LjU4TDcgMTdMMTEuOTk5OSAyMkwxNyAxN1pcIiAvPlxuICAgIDwvZz5cbiAgICA8ZyBjbGFzcz1cImFzY2VuZGluZ1wiIGZpbGw9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgPHBhdGggdHJhbnNmb3JtPVwicm90YXRlKDE4MCwgMTIsIDEyKVwiIGQ9XCJNMTcgMTdMMTUuNTkgMTUuNTlMMTIuOTk5OSAxOC4xN1YySDEwLjk5OTlWMTguMTdMOC40MSAxNS41OEw3IDE3TDExLjk5OTkgMjJMMTcgMTdaXCIgLz5cbiAgICA8L2c+XG4gICAgPGcgY2xhc3M9XCJ1bnNvcnRlZFwiIGZpbGw9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTUuMTcgMTUgMTMgMTcuMTcgMTMgNi44MyAxNS4xNyA5IDE2LjU4IDcuNTkgMTIgMyA3LjQxIDcuNTkgOC44MyA5IDExIDYuODMgMTEgMTcuMTcgOC44MyAxNSA3LjQyIDE2LjQxIDEyIDIxIDE2LjU5IDE2LjQxIDE1LjE3IDE1XCIvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gIGA7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChidXR0b25FbCk7XG4gIHVwZGF0ZVNvcnRMYWJlbChoZWFkZXIpO1xufTtcblxuY29uc3QgdGFibGUgPSBiZWhhdmlvcihcbiAge1xuICAgIFtDTElDS106IHtcbiAgICAgIFtTT1JUX0JVVFRPTl0oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlU29ydChcbiAgICAgICAgICBldmVudC50YXJnZXQuY2xvc2VzdChTT1JUQUJMRV9IRUFERVIpLFxuICAgICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KFNPUlRBQkxFX0hFQURFUikuZ2V0QXR0cmlidXRlKFNPUlRFRCkgPT09XG4gICAgICAgICAgICBBU0NFTkRJTkcsXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpbml0KHJvb3QpIHtcbiAgICAgIGNvbnN0IHNvcnRhYmxlSGVhZGVycyA9IHNlbGVjdChTT1JUQUJMRV9IRUFERVIsIHJvb3QpO1xuICAgICAgc29ydGFibGVIZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4gY3JlYXRlSGVhZGVyQnV0dG9uKGhlYWRlcikpO1xuXG4gICAgICBjb25zdCBmaXJzdFNvcnRlZCA9IHNvcnRhYmxlSGVhZGVycy5maWx0ZXIoXG4gICAgICAgIChoZWFkZXIpID0+XG4gICAgICAgICAgaGVhZGVyLmdldEF0dHJpYnV0ZShTT1JURUQpID09PSBBU0NFTkRJTkcgfHxcbiAgICAgICAgICBoZWFkZXIuZ2V0QXR0cmlidXRlKFNPUlRFRCkgPT09IERFU0NFTkRJTkcsXG4gICAgICApWzBdO1xuICAgICAgaWYgKHR5cGVvZiBmaXJzdFNvcnRlZCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAvLyBubyBzb3J0YWJsZSBoZWFkZXJzIGZvdW5kXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvcnREaXIgPSBmaXJzdFNvcnRlZC5nZXRBdHRyaWJ1dGUoU09SVEVEKTtcbiAgICAgIGlmIChzb3J0RGlyID09PSBBU0NFTkRJTkcpIHtcbiAgICAgICAgdG9nZ2xlU29ydChmaXJzdFNvcnRlZCwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHNvcnREaXIgPT09IERFU0NFTkRJTkcpIHtcbiAgICAgICAgdG9nZ2xlU29ydChmaXJzdFNvcnRlZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgVEFCTEUsXG4gICAgU09SVEFCTEVfSEVBREVSLFxuICAgIFNPUlRfQlVUVE9OLFxuICB9LFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZTtcbiIsImNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3Qgc2VsZWN0T3JNYXRjaGVzID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdC1vci1tYXRjaGVzXCIpO1xuY29uc3QgeyBwcmVmaXg6IFBSRUZJWCB9ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL2NvbmZpZ1wiKTtcbmNvbnN0IHtcbiAgQ09NQk9fQk9YX0NMQVNTLFxuICBlbmhhbmNlQ29tYm9Cb3gsXG59ID0gcmVxdWlyZShcIi4uLy4uL3VzYS1jb21iby1ib3gvc3JjL2luZGV4XCIpO1xuXG5jb25zdCBUSU1FX1BJQ0tFUl9DTEFTUyA9IGAke1BSRUZJWH0tdGltZS1waWNrZXJgO1xuY29uc3QgVElNRV9QSUNLRVIgPSBgLiR7VElNRV9QSUNLRVJfQ0xBU1N9YDtcbmNvbnN0IE1BWF9USU1FID0gNjAgKiAyNCAtIDE7XG5jb25zdCBNSU5fVElNRSA9IDA7XG5jb25zdCBERUZBVUxUX1NURVAgPSAzMDtcbmNvbnN0IE1JTl9TVEVQID0gMTtcblxuY29uc3QgRklMVEVSX0RBVEFTRVQgPSB7XG4gIGZpbHRlcjpcbiAgICBcIjA/e3sgaG91clF1ZXJ5RmlsdGVyIH19Ont7bWludXRlUXVlcnlGaWx0ZXJ9fS4qe3sgYXBRdWVyeUZpbHRlciB9fW0/XCIsXG4gIGFwUXVlcnlGaWx0ZXI6IFwiKFthcF0pXCIsXG4gIGhvdXJRdWVyeUZpbHRlcjogXCIoWzEtOV1bMC0yXT8pXCIsXG4gIG1pbnV0ZVF1ZXJ5RmlsdGVyOiBcIltcXFxcZF0rOihbMC05XXswLDJ9KVwiLFxufTtcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBvZiBoaDptbSBpbnRvIG1pbnV0ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZVN0ciB0aGUgdGltZSBzdHJpbmcgdG8gcGFyc2VcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBudW1iZXIgb2YgbWludXRlc1xuICovXG5jb25zdCBwYXJzZVRpbWVTdHJpbmcgPSAodGltZVN0cikgPT4ge1xuICBsZXQgbWludXRlcztcblxuICBpZiAodGltZVN0cikge1xuICAgIGNvbnN0IFtob3VycywgbWluc10gPSB0aW1lU3RyLnNwbGl0KFwiOlwiKS5tYXAoKHN0cikgPT4ge1xuICAgICAgbGV0IHZhbHVlO1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWQpKSB2YWx1ZSA9IHBhcnNlZDtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGlmIChob3VycyAhPSBudWxsICYmIG1pbnMgIT0gbnVsbCkge1xuICAgICAgbWludXRlcyA9IGhvdXJzICogNjAgKyBtaW5zO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtaW51dGVzO1xufTtcblxuLyoqXG4gKiBFbmhhbmNlIGFuIGlucHV0IHdpdGggdGhlIGRhdGUgcGlja2VyIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgVGhlIGluaXRpYWwgd3JhcHBpbmcgZWxlbWVudCBvZiB0aGUgZGF0ZSBwaWNrZXIgY29tcG9uZW50XG4gKi9cbmNvbnN0IHRyYW5zZm9ybVRpbWVQaWNrZXIgPSAoZWwpID0+IHtcbiAgY29uc3QgdGltZVBpY2tlckVsID0gZWwuY2xvc2VzdChUSU1FX1BJQ0tFUik7XG5cbiAgLy8gU2V0IGR1cmluZyBlbmhhbmNlQ29tYm9Cb3godGltZVBpY2tlckVsKVxuICBpZiAodGltZVBpY2tlckVsLmRhdGFzZXQuZW5oYW5jZWQpIHJldHVybjtcblxuICBjb25zdCBpbml0aWFsSW5wdXRFbCA9IHRpbWVQaWNrZXJFbC5xdWVyeVNlbGVjdG9yKGBpbnB1dGApO1xuXG4gIGlmICghaW5pdGlhbElucHV0RWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7VElNRV9QSUNLRVJ9IGlzIG1pc3NpbmcgaW5uZXIgaW5wdXRgKTtcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICBbXG4gICAgXCJpZFwiLFxuICAgIFwibmFtZVwiLFxuICAgIFwicmVxdWlyZWRcIixcbiAgICBcImFyaWEtbGFiZWxcIixcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcImFyaWEtZGlzYWJsZWRcIixcbiAgXS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgaWYgKGluaXRpYWxJbnB1dEVsLmhhc0F0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBpbml0aWFsSW5wdXRFbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICBzZWxlY3RFbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgaW5pdGlhbElucHV0RWwucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcGFkWmVyb3MgPSAodmFsdWUsIGxlbmd0aCkgPT4gYDAwMDAke3ZhbHVlfWAuc2xpY2UoLWxlbmd0aCk7XG5cbiAgY29uc3QgZ2V0VGltZUNvbnRleHQgPSAobWludXRlcykgPT4ge1xuICAgIGNvbnN0IG1pbnV0ZSA9IG1pbnV0ZXMgJSA2MDtcbiAgICBjb25zdCBob3VyMjQgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgY29uc3QgaG91cjEyID0gaG91cjI0ICUgMTIgfHwgMTI7XG4gICAgY29uc3QgYW1wbSA9IGhvdXIyNCA8IDEyID8gXCJhbVwiIDogXCJwbVwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbnV0ZSxcbiAgICAgIGhvdXIyNCxcbiAgICAgIGhvdXIxMixcbiAgICAgIGFtcG0sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBtaW5UaW1lID0gTWF0aC5tYXgoXG4gICAgTUlOX1RJTUUsXG4gICAgcGFyc2VUaW1lU3RyaW5nKHRpbWVQaWNrZXJFbC5kYXRhc2V0Lm1pblRpbWUpIHx8IE1JTl9USU1FLFxuICApO1xuICBjb25zdCBtYXhUaW1lID0gTWF0aC5taW4oXG4gICAgTUFYX1RJTUUsXG4gICAgcGFyc2VUaW1lU3RyaW5nKHRpbWVQaWNrZXJFbC5kYXRhc2V0Lm1heFRpbWUpIHx8IE1BWF9USU1FLFxuICApO1xuICBjb25zdCBzdGVwID0gTWF0aC5mbG9vcihcbiAgICBNYXRoLm1heChNSU5fU1RFUCwgdGltZVBpY2tlckVsLmRhdGFzZXQuc3RlcCB8fCBERUZBVUxUX1NURVApLFxuICApO1xuXG4gIGxldCBkZWZhdWx0VmFsdWU7XG4gIGZvciAobGV0IHRpbWUgPSBtaW5UaW1lOyB0aW1lIDw9IG1heFRpbWU7IHRpbWUgKz0gc3RlcCkge1xuICAgIGNvbnN0IHsgbWludXRlLCBob3VyMjQsIGhvdXIxMiwgYW1wbSB9ID0gZ2V0VGltZUNvbnRleHQodGltZSk7XG5cbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGAke3BhZFplcm9zKGhvdXIyNCwgMil9OiR7cGFkWmVyb3MobWludXRlLCAyKX1gO1xuICAgIG9wdGlvbi50ZXh0ID0gYCR7aG91cjEyfToke3BhZFplcm9zKG1pbnV0ZSwgMil9JHthbXBtfWA7XG4gICAgaWYgKG9wdGlvbi50ZXh0ID09PSBpbml0aWFsSW5wdXRFbC52YWx1ZSkge1xuICAgICAgZGVmYXVsdFZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgIH1cbiAgICBzZWxlY3RFbC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgdGltZVBpY2tlckVsLmNsYXNzTGlzdC5hZGQoQ09NQk9fQk9YX0NMQVNTKTtcblxuICAvLyBjb21ibyBib3ggcHJvcGVydGllc1xuICBPYmplY3Qua2V5cyhGSUxURVJfREFUQVNFVCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgdGltZVBpY2tlckVsLmRhdGFzZXRba2V5XSA9IEZJTFRFUl9EQVRBU0VUW2tleV07XG4gIH0pO1xuICB0aW1lUGlja2VyRWwuZGF0YXNldC5kaXNhYmxlRmlsdGVyaW5nID0gXCJ0cnVlXCI7XG4gIHRpbWVQaWNrZXJFbC5kYXRhc2V0LmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICB0aW1lUGlja2VyRWwuYXBwZW5kQ2hpbGQoc2VsZWN0RWwpO1xuICBpbml0aWFsSW5wdXRFbC5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHRpbWVQaWNrZXIgPSBiZWhhdmlvcihcbiAge30sXG4gIHtcbiAgICBpbml0KHJvb3QpIHtcbiAgICAgIHNlbGVjdE9yTWF0Y2hlcyhUSU1FX1BJQ0tFUiwgcm9vdCkuZm9yRWFjaCgodGltZVBpY2tlckVsKSA9PiB7XG4gICAgICAgIHRyYW5zZm9ybVRpbWVQaWNrZXIodGltZVBpY2tlckVsKTtcbiAgICAgICAgZW5oYW5jZUNvbWJvQm94KHRpbWVQaWNrZXJFbCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIEZJTFRFUl9EQVRBU0VULFxuICB9LFxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0aW1lUGlja2VyO1xuIiwiLy8gVG9vbHRpcHNcbmNvbnN0IGtleW1hcCA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9rZXltYXBcIik7XG5jb25zdCBzZWxlY3RPck1hdGNoZXMgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvc2VsZWN0LW9yLW1hdGNoZXNcIik7XG5jb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy91dGlscy9iZWhhdmlvclwiKTtcbmNvbnN0IHsgcHJlZml4OiBQUkVGSVggfSA9IHJlcXVpcmUoXCIuLi8uLi91c3dkcy1jb3JlL3NyYy9qcy9jb25maWdcIik7XG5jb25zdCBpc0VsZW1lbnRJblZpZXdwb3J0ID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2lzLWluLXZpZXdwb3J0XCIpO1xuXG5jb25zdCBCT0RZID0gXCJib2R5XCI7XG5jb25zdCBUT09MVElQID0gYC4ke1BSRUZJWH0tdG9vbHRpcGA7XG5jb25zdCBUT09MVElQX1RSSUdHRVIgPSBgLiR7UFJFRklYfS10b29sdGlwX190cmlnZ2VyYDtcbmNvbnN0IFRPT0xUSVBfVFJJR0dFUl9DTEFTUyA9IGAke1BSRUZJWH0tdG9vbHRpcF9fdHJpZ2dlcmA7XG5jb25zdCBUT09MVElQX0NMQVNTID0gYCR7UFJFRklYfS10b29sdGlwYDtcbmNvbnN0IFRPT0xUSVBfQk9EWV9DTEFTUyA9IGAke1BSRUZJWH0tdG9vbHRpcF9fYm9keWA7XG5jb25zdCBTRVRfQ0xBU1MgPSBcImlzLXNldFwiO1xuY29uc3QgVklTSUJMRV9DTEFTUyA9IFwiaXMtdmlzaWJsZVwiO1xuY29uc3QgVFJJQU5HTEVfU0laRSA9IDU7XG5jb25zdCBBREpVU1RfV0lEVEhfQ0xBU1MgPSBgJHtQUkVGSVh9LXRvb2x0aXBfX2JvZHktLXdyYXBgO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0RPTUVsZW1lbnR9IHRyaWdnZXIgLSBUaGUgdG9vbHRpcCB0cmlnZ2VyXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBFbGVtZW50cyBmb3IgaW5pdGlhbGl6ZWQgdG9vbHRpcDsgaW5jbHVkZXMgdHJpZ2dlciwgd3JhcHBlciwgYW5kIGJvZHlcbiAqL1xuY29uc3QgZ2V0VG9vbHRpcEVsZW1lbnRzID0gKHRyaWdnZXIpID0+IHtcbiAgY29uc3Qgd3JhcHBlciA9IHRyaWdnZXIucGFyZW50Tm9kZTtcbiAgY29uc3QgYm9keSA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcihgLiR7VE9PTFRJUF9CT0RZX0NMQVNTfWApO1xuXG4gIHJldHVybiB7IHRyaWdnZXIsIHdyYXBwZXIsIGJvZHkgfTtcbn07XG5cbi8qKlxuICogU2hvd3MgdGhlIHRvb2x0aXBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRvb2x0aXBUcmlnZ2VyIC0gdGhlIGVsZW1lbnQgdGhhdCBpbml0aWFsaXplcyB0aGUgdG9vbHRpcFxuICovXG5jb25zdCBzaG93VG9vbFRpcCA9ICh0b29sdGlwQm9keSwgdG9vbHRpcFRyaWdnZXIsIHBvc2l0aW9uKSA9PiB7XG4gIHRvb2x0aXBCb2R5LnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG5cbiAgLy8gVGhpcyBzZXRzIHVwIHRoZSB0b29sdGlwIGJvZHkuIFRoZSBvcGFjaXR5IGlzIDAsIGJ1dFxuICAvLyB3ZSBjYW4gYmVnaW4gcnVubmluZyB0aGUgY2FsY3VsYXRpb25zIGJlbG93LlxuICB0b29sdGlwQm9keS5jbGFzc0xpc3QuYWRkKFNFVF9DTEFTUyk7XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIHRoZSB0b29sdGlwIGJvZHkgd2hlbiB0aGUgdHJpZ2dlciBpcyBob3ZlcmVkXG4gICAqIFJlbW92ZXMgb2xkIHBvc2l0aW9uaW5nIGNsYXNzbmFtZXMgYW5kIHJlYXBwbGllcy4gVGhpcyBhbGxvd3NcbiAgICogcG9zaXRpb25pbmcgdG8gY2hhbmdlIGluIGNhc2UgdGhlIHVzZXIgcmVzaXplcyBicm93c2VyIG9yIERPTSBtYW5pcHVsYXRpb25cbiAgICogY2F1c2VzIHRvb2x0aXAgdG8gZ2V0IGNsaXBwZWQgZnJvbSB2aWV3cG9ydFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2V0UG9zIC0gY2FuIGJlIFwidG9wXCIsIFwiYm90dG9tXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCJcbiAgICovXG4gIGNvbnN0IHNldFBvc2l0aW9uQ2xhc3MgPSAoc2V0UG9zKSA9PiB7XG4gICAgdG9vbHRpcEJvZHkuY2xhc3NMaXN0LnJlbW92ZShgJHtUT09MVElQX0JPRFlfQ0xBU1N9LS10b3BgKTtcbiAgICB0b29sdGlwQm9keS5jbGFzc0xpc3QucmVtb3ZlKGAke1RPT0xUSVBfQk9EWV9DTEFTU30tLWJvdHRvbWApO1xuICAgIHRvb2x0aXBCb2R5LmNsYXNzTGlzdC5yZW1vdmUoYCR7VE9PTFRJUF9CT0RZX0NMQVNTfS0tcmlnaHRgKTtcbiAgICB0b29sdGlwQm9keS5jbGFzc0xpc3QucmVtb3ZlKGAke1RPT0xUSVBfQk9EWV9DTEFTU30tLWxlZnRgKTtcbiAgICB0b29sdGlwQm9keS5jbGFzc0xpc3QuYWRkKGAke1RPT0xUSVBfQk9EWV9DTEFTU30tLSR7c2V0UG9zfWApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIG9sZCBwb3NpdGlvbmluZyBzdHlsZXMuIFRoaXMgYWxsb3dzXG4gICAqIHJlLXBvc2l0aW9uaW5nIHRvIGNoYW5nZSB3aXRob3V0IGluaGVyaXRpbmcgb3RoZXJcbiAgICogZHluYW1pYyBzdHlsZXNcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZSAtIHRoaXMgaXMgdGhlIHRvb2x0aXAgYm9keVxuICAgKi9cbiAgY29uc3QgcmVzZXRQb3NpdGlvblN0eWxlcyA9IChlKSA9PiB7XG4gICAgLy8gd2UgZG9uJ3Qgb3ZlcnJpZGUgYW55dGhpbmcgaW4gdGhlIHN0eWxlc2hlZXQgd2hlbiBmaW5kaW5nIGFsdCBwb3NpdGlvbnNcbiAgICBlLnN0eWxlLnRvcCA9IG51bGw7XG4gICAgZS5zdHlsZS5ib3R0b20gPSBudWxsO1xuICAgIGUuc3R5bGUucmlnaHQgPSBudWxsO1xuICAgIGUuc3R5bGUubGVmdCA9IG51bGw7XG4gICAgZS5zdHlsZS5tYXJnaW4gPSBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBnZXQgbWFyZ2luIG9mZnNldCBjYWxjdWxhdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gdGhpcyBpcyB0aGUgdG9vbHRpcCBib2R5XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eVZhbHVlIC0gdGhpcyBpcyB0aGUgdG9vbHRpcCBib2R5XG4gICAqL1xuXG4gIGNvbnN0IG9mZnNldE1hcmdpbiA9ICh0YXJnZXQsIHByb3BlcnR5VmFsdWUpID0+XG4gICAgcGFyc2VJbnQoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlWYWx1ZSksXG4gICAgICAxMCxcbiAgICApO1xuXG4gIC8vIG9mZnNldExlZnQgPSB0aGUgbGVmdCBwb3NpdGlvbiwgYW5kIG1hcmdpbiBvZiB0aGUgZWxlbWVudCwgdGhlIGxlZnRcbiAgLy8gcGFkZGluZywgc2Nyb2xsYmFyIGFuZCBib3JkZXIgb2YgdGhlIG9mZnNldFBhcmVudCBlbGVtZW50XG4gIC8vIG9mZnNldFdpZHRoID0gVGhlIG9mZnNldFdpZHRoIHByb3BlcnR5IHJldHVybnMgdGhlIHZpZXdhYmxlIHdpZHRoIG9mIGFuXG4gIC8vIGVsZW1lbnQgaW4gcGl4ZWxzLCBpbmNsdWRpbmcgcGFkZGluZywgYm9yZGVyIGFuZCBzY3JvbGxiYXIsIGJ1dCBub3RcbiAgLy8gdGhlIG1hcmdpbi5cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIG1hcmdpbiBvZmZzZXRcbiAgICogdG9vbHRpcCB0cmlnZ2VyIG1hcmdpbihwb3NpdGlvbikgb2Zmc2V0ICsgdG9vbHRpcEJvZHkgb2Zmc2V0V2lkdGhcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1hcmdpblBvc2l0aW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b29sdGlwQm9keU9mZnNldFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0cmlnZ2VyXG4gICAqL1xuICBjb25zdCBjYWxjdWxhdGVNYXJnaW5PZmZzZXQgPSAoXG4gICAgbWFyZ2luUG9zaXRpb24sXG4gICAgdG9vbHRpcEJvZHlPZmZzZXQsXG4gICAgdHJpZ2dlcixcbiAgKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID1cbiAgICAgIG9mZnNldE1hcmdpbih0cmlnZ2VyLCBgbWFyZ2luLSR7bWFyZ2luUG9zaXRpb259YCkgPiAwXG4gICAgICAgID8gdG9vbHRpcEJvZHlPZmZzZXQgLSBvZmZzZXRNYXJnaW4odHJpZ2dlciwgYG1hcmdpbi0ke21hcmdpblBvc2l0aW9ufWApXG4gICAgICAgIDogdG9vbHRpcEJvZHlPZmZzZXQ7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBQb3NpdGlvbnMgdG9vbHRpcCBhdCB0aGUgdG9wXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGUgLSB0aGlzIGlzIHRoZSB0b29sdGlwIGJvZHlcbiAgICovXG4gIGNvbnN0IHBvc2l0aW9uVG9wID0gKGUpID0+IHtcbiAgICByZXNldFBvc2l0aW9uU3R5bGVzKGUpOyAvLyBlbnN1cmVzIHdlIHN0YXJ0IGZyb20gdGhlIHNhbWUgcG9pbnRcbiAgICAvLyBnZXQgZGV0YWlscyBvbiB0aGUgZWxlbWVudHMgb2JqZWN0IHdpdGhcblxuICAgIGNvbnN0IHRvcE1hcmdpbiA9IGNhbGN1bGF0ZU1hcmdpbk9mZnNldChcbiAgICAgIFwidG9wXCIsXG4gICAgICBlLm9mZnNldEhlaWdodCxcbiAgICAgIHRvb2x0aXBUcmlnZ2VyLFxuICAgICk7XG5cbiAgICBjb25zdCBsZWZ0TWFyZ2luID0gY2FsY3VsYXRlTWFyZ2luT2Zmc2V0KFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBlLm9mZnNldFdpZHRoLFxuICAgICAgdG9vbHRpcFRyaWdnZXIsXG4gICAgKTtcblxuICAgIHNldFBvc2l0aW9uQ2xhc3MoXCJ0b3BcIik7XG4gICAgZS5zdHlsZS5sZWZ0ID0gYDUwJWA7IC8vIGNlbnRlciB0aGUgZWxlbWVudFxuICAgIGUuc3R5bGUudG9wID0gYC0ke1RSSUFOR0xFX1NJWkV9cHhgOyAvLyBjb25zaWRlciB0aGUgcHNldWRvIGVsZW1lbnRcbiAgICAvLyBhcHBseSBvdXIgbWFyZ2lucyBiYXNlZCBvbiB0aGUgb2Zmc2V0XG4gICAgZS5zdHlsZS5tYXJnaW4gPSBgLSR7dG9wTWFyZ2lufXB4IDAgMCAtJHtsZWZ0TWFyZ2luIC8gMn1weGA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0b29sdGlwIGF0IHRoZSBib3R0b21cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZSAtIHRoaXMgaXMgdGhlIHRvb2x0aXAgYm9keVxuICAgKi9cbiAgY29uc3QgcG9zaXRpb25Cb3R0b20gPSAoZSkgPT4ge1xuICAgIHJlc2V0UG9zaXRpb25TdHlsZXMoZSk7XG5cbiAgICBjb25zdCBsZWZ0TWFyZ2luID0gY2FsY3VsYXRlTWFyZ2luT2Zmc2V0KFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBlLm9mZnNldFdpZHRoLFxuICAgICAgdG9vbHRpcFRyaWdnZXIsXG4gICAgKTtcblxuICAgIHNldFBvc2l0aW9uQ2xhc3MoXCJib3R0b21cIik7XG4gICAgZS5zdHlsZS5sZWZ0ID0gYDUwJWA7XG4gICAgZS5zdHlsZS5tYXJnaW4gPSBgJHtUUklBTkdMRV9TSVpFfXB4IDAgMCAtJHtsZWZ0TWFyZ2luIC8gMn1weGA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0b29sdGlwIGF0IHRoZSByaWdodFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlIC0gdGhpcyBpcyB0aGUgdG9vbHRpcCBib2R5XG4gICAqL1xuICBjb25zdCBwb3NpdGlvblJpZ2h0ID0gKGUpID0+IHtcbiAgICByZXNldFBvc2l0aW9uU3R5bGVzKGUpO1xuXG4gICAgY29uc3QgdG9wTWFyZ2luID0gY2FsY3VsYXRlTWFyZ2luT2Zmc2V0KFxuICAgICAgXCJ0b3BcIixcbiAgICAgIGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgdG9vbHRpcFRyaWdnZXIsXG4gICAgKTtcblxuICAgIHNldFBvc2l0aW9uQ2xhc3MoXCJyaWdodFwiKTtcbiAgICBlLnN0eWxlLnRvcCA9IGA1MCVgO1xuICAgIGUuc3R5bGUubGVmdCA9IGAke1xuICAgICAgdG9vbHRpcFRyaWdnZXIub2Zmc2V0TGVmdCArIHRvb2x0aXBUcmlnZ2VyLm9mZnNldFdpZHRoICsgVFJJQU5HTEVfU0laRVxuICAgIH1weGA7XG4gICAgZS5zdHlsZS5tYXJnaW4gPSBgLSR7dG9wTWFyZ2luIC8gMn1weCAwIDAgMGA7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0b29sdGlwIGF0IHRoZSByaWdodFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlIC0gdGhpcyBpcyB0aGUgdG9vbHRpcCBib2R5XG4gICAqL1xuICBjb25zdCBwb3NpdGlvbkxlZnQgPSAoZSkgPT4ge1xuICAgIHJlc2V0UG9zaXRpb25TdHlsZXMoZSk7XG5cbiAgICBjb25zdCB0b3BNYXJnaW4gPSBjYWxjdWxhdGVNYXJnaW5PZmZzZXQoXG4gICAgICBcInRvcFwiLFxuICAgICAgZS5vZmZzZXRIZWlnaHQsXG4gICAgICB0b29sdGlwVHJpZ2dlcixcbiAgICApO1xuXG4gICAgLy8gd2UgaGF2ZSB0byBjaGVjayBmb3Igc29tZSB1dGlsaXR5IG1hcmdpbnNcbiAgICBjb25zdCBsZWZ0TWFyZ2luID0gY2FsY3VsYXRlTWFyZ2luT2Zmc2V0KFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICB0b29sdGlwVHJpZ2dlci5vZmZzZXRMZWZ0ID4gZS5vZmZzZXRXaWR0aFxuICAgICAgICA/IHRvb2x0aXBUcmlnZ2VyLm9mZnNldExlZnQgLSBlLm9mZnNldFdpZHRoXG4gICAgICAgIDogZS5vZmZzZXRXaWR0aCxcbiAgICAgIHRvb2x0aXBUcmlnZ2VyLFxuICAgICk7XG5cbiAgICBzZXRQb3NpdGlvbkNsYXNzKFwibGVmdFwiKTtcbiAgICBlLnN0eWxlLnRvcCA9IGA1MCVgO1xuICAgIGUuc3R5bGUubGVmdCA9IGAtJHtUUklBTkdMRV9TSVpFfXB4YDtcbiAgICBlLnN0eWxlLm1hcmdpbiA9IGAtJHt0b3BNYXJnaW4gLyAyfXB4IDAgMCAke1xuICAgICAgdG9vbHRpcFRyaWdnZXIub2Zmc2V0TGVmdCA+IGUub2Zmc2V0V2lkdGggPyBsZWZ0TWFyZ2luIDogLWxlZnRNYXJnaW5cbiAgICB9cHhgOyAvLyBhZGp1c3QgdGhlIG1hcmdpblxuICB9O1xuXG4gIC8qKlxuICAgKiBXZSB0cnkgdG8gc2V0IHRoZSBwb3NpdGlvbiBiYXNlZCBvbiB0aGVcbiAgICogb3JpZ2luYWwgaW50ZW50aW9uLCBidXQgbWFrZSBhZGp1c3RtZW50c1xuICAgKiBpZiB0aGUgZWxlbWVudCBpcyBjbGlwcGVkIG91dCBvZiB0aGUgdmlld3BvcnRcbiAgICogd2UgY29uc3RyYWluIHRoZSB3aWR0aCBvbmx5IGFzIGEgbGFzdCByZXNvcnRcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudChhbGlhcyB0b29sdGlwQm9keSlcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGF0dGVtcHQgKC0tZmxhZylcbiAgICovXG5cbiAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyO1xuXG4gIGZ1bmN0aW9uIGZpbmRCZXN0UG9zaXRpb24oZWxlbWVudCwgYXR0ZW1wdCA9IDEpIHtcbiAgICAvLyBjcmVhdGUgYXJyYXkgb2Ygb3B0aW9uYWwgcG9zaXRpb25zXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcG9zaXRpb25Ub3AsXG4gICAgICBwb3NpdGlvbkJvdHRvbSxcbiAgICAgIHBvc2l0aW9uUmlnaHQsXG4gICAgICBwb3NpdGlvbkxlZnQsXG4gICAgXTtcblxuICAgIGxldCBoYXNWaXNpYmxlUG9zaXRpb24gPSBmYWxzZTtcblxuICAgIC8vIHdlIHRha2UgYSByZWN1cnNpdmUgYXBwcm9hY2hcbiAgICBmdW5jdGlvbiB0cnlQb3NpdGlvbnMoaSkge1xuICAgICAgaWYgKGkgPCBwb3NpdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uc1tpXTtcbiAgICAgICAgcG9zKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICghaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSkge1xuICAgICAgICAgIHRyeVBvc2l0aW9ucyhpICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFzVmlzaWJsZVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRyeVBvc2l0aW9ucygwKTtcbiAgICAvLyBpZiB3ZSBjYW4ndCBmaW5kIGEgcG9zaXRpb24gd2UgY29tcHJlc3MgaXQgYW5kIHRyeSBhZ2FpblxuICAgIGlmICghaGFzVmlzaWJsZVBvc2l0aW9uKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoQURKVVNUX1dJRFRIX0NMQVNTKTtcbiAgICAgIGlmIChhdHRlbXB0IDw9IG1heEF0dGVtcHRzKSB7XG4gICAgICAgIGZpbmRCZXN0UG9zaXRpb24oZWxlbWVudCwgYXR0ZW1wdCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICBjYXNlIFwidG9wXCI6XG4gICAgICBwb3NpdGlvblRvcCh0b29sdGlwQm9keSk7XG4gICAgICBpZiAoIWlzRWxlbWVudEluVmlld3BvcnQodG9vbHRpcEJvZHkpKSB7XG4gICAgICAgIGZpbmRCZXN0UG9zaXRpb24odG9vbHRpcEJvZHkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgcG9zaXRpb25Cb3R0b20odG9vbHRpcEJvZHkpO1xuICAgICAgaWYgKCFpc0VsZW1lbnRJblZpZXdwb3J0KHRvb2x0aXBCb2R5KSkge1xuICAgICAgICBmaW5kQmVzdFBvc2l0aW9uKHRvb2x0aXBCb2R5KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgcG9zaXRpb25SaWdodCh0b29sdGlwQm9keSk7XG4gICAgICBpZiAoIWlzRWxlbWVudEluVmlld3BvcnQodG9vbHRpcEJvZHkpKSB7XG4gICAgICAgIGZpbmRCZXN0UG9zaXRpb24odG9vbHRpcEJvZHkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxlZnRcIjpcbiAgICAgIHBvc2l0aW9uTGVmdCh0b29sdGlwQm9keSk7XG4gICAgICBpZiAoIWlzRWxlbWVudEluVmlld3BvcnQodG9vbHRpcEJvZHkpKSB7XG4gICAgICAgIGZpbmRCZXN0UG9zaXRpb24odG9vbHRpcEJvZHkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gc2tpcCBkZWZhdWx0IGNhc2VcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGx5IHNob3cgdGhlIHRvb2x0aXAuIFRoZSBWSVNJQkxFX0NMQVNTXG4gICAqIHdpbGwgY2hhbmdlIHRoZSBvcGFjaXR5IHRvIDFcbiAgICovXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRvb2x0aXBCb2R5LmNsYXNzTGlzdC5hZGQoVklTSUJMRV9DTEFTUyk7XG4gIH0sIDIwKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgdGhlIHByb3BlcnRpZXMgdG8gc2hvdyBhbmQgcG9zaXRpb24gdGhlIHRvb2x0aXAsXG4gKiBhbmQgcmVzZXRzIHRoZSB0b29sdGlwIHBvc2l0aW9uIHRvIHRoZSBvcmlnaW5hbCBpbnRlbnRpb25cbiAqIGluIGNhc2UgdGhlIHdpbmRvdyBpcyByZXNpemVkIG9yIHRoZSBlbGVtZW50IGlzIG1vdmVkIHRocm91Z2hcbiAqIERPTSBtYW5pcHVsYXRpb24uXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0b29sdGlwQm9keSAtIFRoZSBib2R5IG9mIHRoZSB0b29sdGlwXG4gKi9cbmNvbnN0IGhpZGVUb29sVGlwID0gKHRvb2x0aXBCb2R5KSA9PiB7XG4gIHRvb2x0aXBCb2R5LmNsYXNzTGlzdC5yZW1vdmUoVklTSUJMRV9DTEFTUyk7XG4gIHRvb2x0aXBCb2R5LmNsYXNzTGlzdC5yZW1vdmUoU0VUX0NMQVNTKTtcbiAgdG9vbHRpcEJvZHkuY2xhc3NMaXN0LnJlbW92ZShBREpVU1RfV0lEVEhfQ0xBU1MpO1xuICB0b29sdGlwQm9keS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG59O1xuXG4vKipcbiAqIFNldHVwIHRoZSB0b29sdGlwIGNvbXBvbmVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdG9vbHRpcFRyaWdnZXIgVGhlIGVsZW1lbnQgdGhhdCBjcmVhdGVzIHRoZSB0b29sdGlwXG4gKi9cbmNvbnN0IHNldFVwQXR0cmlidXRlcyA9ICh0b29sdGlwVHJpZ2dlcikgPT4ge1xuICBjb25zdCB0b29sdGlwSUQgPSBgdG9vbHRpcC0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkwMDAwMCkgKyAxMDAwMDB9YDtcbiAgY29uc3QgdG9vbHRpcENvbnRlbnQgPSB0b29sdGlwVHJpZ2dlci5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCB0b29sdGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBhZGRpdGlvbmFsQ2xhc3NlcyA9IHRvb2x0aXBUcmlnZ2VyLmdldEF0dHJpYnV0ZShcImRhdGEtY2xhc3Nlc1wiKTtcbiAgbGV0IHBvc2l0aW9uID0gdG9vbHRpcFRyaWdnZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiKTtcblxuICAvLyBBcHBseSBkZWZhdWx0IHBvc2l0aW9uIGlmIG5vdCBzZXQgYXMgYXR0cmlidXRlXG4gIGlmICghcG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IFwidG9wXCI7XG4gICAgdG9vbHRpcFRyaWdnZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wb3NpdGlvblwiLCBwb3NpdGlvbik7XG4gIH1cblxuICAvLyBTZXQgdXAgdG9vbHRpcCBhdHRyaWJ1dGVzXG4gIHRvb2x0aXBUcmlnZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIiwgdG9vbHRpcElEKTtcbiAgdG9vbHRpcFRyaWdnZXIuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCIwXCIpO1xuICB0b29sdGlwVHJpZ2dlci5yZW1vdmVBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcbiAgdG9vbHRpcFRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZShUT09MVElQX0NMQVNTKTtcbiAgdG9vbHRpcFRyaWdnZXIuY2xhc3NMaXN0LmFkZChUT09MVElQX1RSSUdHRVJfQ0xBU1MpO1xuXG4gIC8vIGluc2VydCB3cmFwcGVyIGJlZm9yZSBlbCBpbiB0aGUgRE9NIHRyZWVcbiAgdG9vbHRpcFRyaWdnZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdG9vbHRpcFRyaWdnZXIpO1xuXG4gIC8vIHNldCB1cCB0aGUgd3JhcHBlclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRvb2x0aXBUcmlnZ2VyKTtcbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFRPT0xUSVBfQ0xBU1MpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRvb2x0aXBCb2R5KTtcblxuICAvLyBBcHBseSBhZGRpdGlvbmFsIGNsYXNzIG5hbWVzIHRvIHdyYXBwZXIgZWxlbWVudFxuICBpZiAoYWRkaXRpb25hbENsYXNzZXMpIHtcbiAgICBjb25zdCBjbGFzc2VzQXJyYXkgPSBhZGRpdGlvbmFsQ2xhc3Nlcy5zcGxpdChcIiBcIik7XG4gICAgY2xhc3Nlc0FycmF5LmZvckVhY2goKGNsYXNzbmFtZSkgPT4gd3JhcHBlci5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSkpO1xuICB9XG5cbiAgLy8gc2V0IHVwIHRoZSB0b29sdGlwIGJvZHlcbiAgdG9vbHRpcEJvZHkuY2xhc3NMaXN0LmFkZChUT09MVElQX0JPRFlfQ0xBU1MpO1xuICB0b29sdGlwQm9keS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0b29sdGlwSUQpO1xuICB0b29sdGlwQm9keS5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgdG9vbHRpcEJvZHkuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuXG4gIC8vIHBsYWNlIHRoZSB0ZXh0IGluIHRoZSB0b29sdGlwXG4gIHRvb2x0aXBCb2R5LnRleHRDb250ZW50ID0gdG9vbHRpcENvbnRlbnQ7XG5cbiAgcmV0dXJuIHsgdG9vbHRpcEJvZHksIHBvc2l0aW9uLCB0b29sdGlwQ29udGVudCwgd3JhcHBlciB9O1xufTtcblxuLyoqXG4gKiBIaWRlIGFsbCBhY3RpdmUgdG9vbHRpcHMgd2hlbiBlc2NhcGUga2V5IGlzIHByZXNzZWQuXG4gKi9cblxuY29uc3QgaGFuZGxlRXNjYXBlID0gKCkgPT4ge1xuICBjb25zdCBhY3RpdmVUb29sdGlwcyA9IHNlbGVjdE9yTWF0Y2hlcyhgLiR7VE9PTFRJUF9CT0RZX0NMQVNTfS4ke1NFVF9DTEFTU31gKTtcblxuICBpZiAoIWFjdGl2ZVRvb2x0aXBzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWN0aXZlVG9vbHRpcHMuZm9yRWFjaCgoYWN0aXZlVG9vbHRpcCkgPT4gaGlkZVRvb2xUaXAoYWN0aXZlVG9vbHRpcCkpO1xufTtcblxuLy8gU2V0dXAgb3VyIGZ1bmN0aW9uIHRvIHJ1biBvbiB2YXJpb3VzIGV2ZW50c1xuY29uc3QgdG9vbHRpcCA9IGJlaGF2aW9yKFxuICB7XG4gICAgXCJtb3VzZW92ZXIgZm9jdXNpblwiOiB7XG4gICAgICBbVE9PTFRJUF0oZSkge1xuICAgICAgICBjb25zdCB0cmlnZ2VyID0gZS50YXJnZXQ7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0b29sdGlwIGlmIGl0IGhhc24ndCBhbHJlYWR5XG4gICAgICAgIGlmICh0cmlnZ2VyLmhhc0F0dHJpYnV0ZShcInRpdGxlXCIpKSB7XG4gICAgICAgICAgc2V0VXBBdHRyaWJ1dGVzKHRyaWdnZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1RPT0xUSVBfVFJJR0dFUl0oZSkge1xuICAgICAgICBjb25zdCB7IHRyaWdnZXIsIGJvZHkgfSA9IGdldFRvb2x0aXBFbGVtZW50cyhlLnRhcmdldCk7XG5cbiAgICAgICAgc2hvd1Rvb2xUaXAoYm9keSwgdHJpZ2dlciwgdHJpZ2dlci5kYXRhc2V0LnBvc2l0aW9uKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb2N1c291dDoge1xuICAgICAgW1RPT0xUSVBfVFJJR0dFUl0oZSkge1xuICAgICAgICBjb25zdCB7IGJvZHkgfSA9IGdldFRvb2x0aXBFbGVtZW50cyhlLnRhcmdldCk7XG5cbiAgICAgICAgaGlkZVRvb2xUaXAoYm9keSk7XG4gICAgICB9LFxuICAgIH0sXG4gICAga2V5ZG93bjoge1xuICAgICAgW0JPRFldOiBrZXltYXAoeyBFc2NhcGU6IGhhbmRsZUVzY2FwZSB9KSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaW5pdChyb290KSB7XG4gICAgICBzZWxlY3RPck1hdGNoZXMoVE9PTFRJUCwgcm9vdCkuZm9yRWFjaCgodG9vbHRpcFRyaWdnZXIpID0+IHtcbiAgICAgICAgc2V0VXBBdHRyaWJ1dGVzKHRvb2x0aXBUcmlnZ2VyKTtcblxuICAgICAgICBjb25zdCB7IGJvZHksIHdyYXBwZXIgfSA9IGdldFRvb2x0aXBFbGVtZW50cyh0b29sdGlwVHJpZ2dlcik7XG4gICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4gaGlkZVRvb2xUaXAoYm9keSkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB0ZWFyZG93bihyb290KSB7XG4gICAgICBzZWxlY3RPck1hdGNoZXMoVE9PTFRJUCwgcm9vdCkuZm9yRWFjaCgodG9vbHRpcFdyYXBwZXIpID0+IHtcbiAgICAgICAgdG9vbHRpcFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZVRvb2xUaXApO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXR1cDogc2V0VXBBdHRyaWJ1dGVzLFxuICAgIGdldFRvb2x0aXBFbGVtZW50cyxcbiAgICBzaG93OiBzaG93VG9vbFRpcCxcbiAgICBoaWRlOiBoaWRlVG9vbFRpcCxcbiAgfSxcbik7XG5cbm1vZHVsZS5leHBvcnRzID0gdG9vbHRpcDtcbiIsImNvbnN0IGJlaGF2aW9yID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL2JlaGF2aW9yXCIpO1xuY29uc3QgdmFsaWRhdGUgPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvdXRpbHMvdmFsaWRhdGUtaW5wdXRcIik7XG5jb25zdCB7IHByZWZpeDogUFJFRklYIH0gPSByZXF1aXJlKFwiLi4vLi4vdXN3ZHMtY29yZS9zcmMvanMvY29uZmlnXCIpO1xuY29uc3Qgc2VsZWN0T3JNYXRjaGVzID0gcmVxdWlyZShcIi4uLy4uL3Vzd2RzLWNvcmUvc3JjL2pzL3V0aWxzL3NlbGVjdC1vci1tYXRjaGVzXCIpO1xuXG5jb25zdCBWQUxJREFURV9JTlBVVCA9XG4gIFwiaW5wdXRbZGF0YS12YWxpZGF0aW9uLWVsZW1lbnRdLHRleHRhcmVhW2RhdGEtdmFsaWRhdGlvbi1lbGVtZW50XVwiO1xuY29uc3QgQ0hFQ0tMSVNUX0lURU0gPSBgLiR7UFJFRklYfS1jaGVja2xpc3RfX2l0ZW1gO1xuXG4vLyBUcmlnZ2VyIHZhbGlkYXRpb24gb24gaW5wdXQgY2hhbmdlXG5jb25zdCBoYW5kbGVDaGFuZ2UgPSAoZWwpID0+IHZhbGlkYXRlKGVsKTtcblxuLy8gQ3JlYXRlIGNvbnRhaW5lciB0byBob2xkIGFyaWEgcmVhZG91dFxuY29uc3QgY3JlYXRlU3RhdHVzRWxlbWVudCA9IChpbnB1dCkgPT4ge1xuICBjb25zdCB2YWxpZGF0aW9uQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZTtcbiAgY29uc3QgaW5wdXRJRCA9IGlucHV0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xuICBjb25zdCBzdGF0dXNTdW1tYXJ5SUQgPSBgJHtpbnB1dElEfS1zci1zdW1tYXJ5YDtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLCBzdGF0dXNTdW1tYXJ5SUQpO1xuXG4gIGNvbnN0IHN0YXR1c1N1bW1hcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBzdGF0dXNTdW1tYXJ5Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsaWRhdGlvbi1zdGF0dXNcIiwgXCJcIik7XG4gIHN0YXR1c1N1bW1hcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVzYS1zci1vbmx5XCIpO1xuICBzdGF0dXNTdW1tYXJ5Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLCBcInBvbGl0ZVwiKTtcbiAgc3RhdHVzU3VtbWFyeUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWF0b21pY1wiLCB0cnVlKTtcbiAgc3RhdHVzU3VtbWFyeUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBzdGF0dXNTdW1tYXJ5SUQpO1xuICB2YWxpZGF0aW9uQ29udGFpbmVyLmFwcGVuZChzdGF0dXNTdW1tYXJ5Q29udGFpbmVyKTtcbn07XG5cbi8vIFNldCB1cCBjaGVja2xpc3QgaXRlbXMgd2l0aCBpbml0aWFsIGFyaWEtbGFiZWwgKGluY29tcGxldGUpIHZhbHVlc1xuY29uc3QgY3JlYXRlSW5pdGlhbFN0YXR1cyA9IChpbnB1dCkgPT4ge1xuICBjb25zdCB2YWxpZGF0aW9uQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZTtcbiAgY29uc3QgY2hlY2tsaXN0SXRlbXMgPSB2YWxpZGF0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoQ0hFQ0tMSVNUX0lURU0pO1xuICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGlucHV0LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsaWRhdGlvbi1lbGVtZW50XCIpO1xuXG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiwgdmFsaWRhdGlvbkVsZW1lbnQpO1xuXG4gIGNoZWNrbGlzdEl0ZW1zLmZvckVhY2goKGxpc3RJdGVtKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRTdGF0dXMgPSBcInN0YXR1cyBpbmNvbXBsZXRlXCI7XG4gICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZShcImRhdGEtdmFsaWRhdGlvbi1pbmNvbXBsZXRlXCIpKSB7XG4gICAgICBjdXJyZW50U3RhdHVzID0gaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxpZGF0aW9uLWluY29tcGxldGVcIik7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1TdGF0dXMgPSBgJHtsaXN0SXRlbS50ZXh0Q29udGVudH0gJHtjdXJyZW50U3RhdHVzfSBgO1xuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgaXRlbVN0YXR1cyk7XG4gIH0pO1xufTtcblxuY29uc3QgZW5oYW5jZVZhbGlkYXRpb24gPSAoaW5wdXQpID0+IHtcbiAgY3JlYXRlU3RhdHVzRWxlbWVudChpbnB1dCk7XG4gIGNyZWF0ZUluaXRpYWxTdGF0dXMoaW5wdXQpO1xufTtcblxuY29uc3QgdmFsaWRhdG9yID0gYmVoYXZpb3IoXG4gIHtcbiAgICBcImlucHV0IGNoYW5nZVwiOiB7XG4gICAgICBbVkFMSURBVEVfSU5QVVRdKGV2ZW50KSB7XG4gICAgICAgIGhhbmRsZUNoYW5nZShldmVudC50YXJnZXQpO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaW5pdChyb290KSB7XG4gICAgICBzZWxlY3RPck1hdGNoZXMoVkFMSURBVEVfSU5QVVQsIHJvb3QpLmZvckVhY2goKGlucHV0KSA9PlxuICAgICAgICBlbmhhbmNlVmFsaWRhdGlvbihpbnB1dCksXG4gICAgICApO1xuICAgIH0sXG4gIH0sXG4pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBwcmVmaXg6IFwidXNhXCIsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIFRoaXMgdXNlZCB0byBiZSBjb25kaXRpb25hbGx5IGRlcGVuZGVudCBvbiB3aGV0aGVyIHRoZVxuICAvLyBicm93c2VyIHN1cHBvcnRlZCB0b3VjaCBldmVudHM7IGlmIGl0IGRpZCwgYENMSUNLYCB3YXMgc2V0IHRvXG4gIC8vIGB0b3VjaHN0YXJ0YC4gIEhvd2V2ZXIsIHRoaXMgaGFkIGRvd25zaWRlczpcbiAgLy9cbiAgLy8gKiBJdCBwcmUtZW1wdGllZCBtb2JpbGUgYnJvd3NlcnMnIGRlZmF1bHQgYmVoYXZpb3Igb2YgZGV0ZWN0aW5nXG4gIC8vICAgd2hldGhlciBhIHRvdWNoIHR1cm5lZCBpbnRvIGEgc2Nyb2xsLCB0aGVyZWJ5IHByZXZlbnRpbmdcbiAgLy8gICB1c2VycyBmcm9tIHVzaW5nIHNvbWUgb2Ygb3VyIGNvbXBvbmVudHMgYXMgc2Nyb2xsIHN1cmZhY2VzLlxuICAvL1xuICAvLyAqIFNvbWUgZGV2aWNlcywgc3VjaCBhcyB0aGUgTWljcm9zb2Z0IFN1cmZhY2UgUHJvLCBzdXBwb3J0ICpib3RoKlxuICAvLyAgIHRvdWNoIGFuZCBjbGlja3MuIFRoaXMgbWVhbnQgdGhlIGNvbmRpdGlvbmFsIGVmZmVjdGl2ZWx5IGRyb3BwZWRcbiAgLy8gICBzdXBwb3J0IGZvciB0aGUgdXNlcidzIG1vdXNlLCBmcnVzdHJhdGluZyB1c2VycyB3aG8gcHJlZmVycmVkXG4gIC8vICAgaXQgb24gdGhvc2Ugc3lzdGVtcy5cbiAgQ0xJQ0s6IFwiY2xpY2tcIixcbn07XG4iLCJjb25zdCBhY2NvcmRpb24gPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLWFjY29yZGlvbi9zcmMvaW5kZXhcIik7XG5jb25zdCBiYW5uZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLWJhbm5lci9zcmMvaW5kZXhcIik7XG5jb25zdCBidXR0b24gPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLWJ1dHRvbi9zcmMvaW5kZXhcIik7XG5jb25zdCBjaGFyYWN0ZXJDb3VudCA9IHJlcXVpcmUoXCIuLi8uLi8uLi91c2EtY2hhcmFjdGVyLWNvdW50L3NyYy9pbmRleFwiKTtcbmNvbnN0IGNvbWJvQm94ID0gcmVxdWlyZShcIi4uLy4uLy4uL3VzYS1jb21iby1ib3gvc3JjL2luZGV4XCIpO1xuY29uc3QgZGF0ZVBpY2tlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi91c2EtZGF0ZS1waWNrZXIvc3JjL2luZGV4XCIpO1xuY29uc3QgZGF0ZVJhbmdlUGlja2VyID0gcmVxdWlyZShcIi4uLy4uLy4uL3VzYS1kYXRlLXJhbmdlLXBpY2tlci9zcmMvaW5kZXhcIik7XG5jb25zdCBmaWxlSW5wdXQgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLWZpbGUtaW5wdXQvc3JjL2luZGV4XCIpO1xuY29uc3QgZm9vdGVyID0gcmVxdWlyZShcIi4uLy4uLy4uL3VzYS1mb290ZXIvc3JjL2luZGV4XCIpO1xuY29uc3QgaW5QYWdlTmF2aWdhdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi8uLi91c2EtaW4tcGFnZS1uYXZpZ2F0aW9uL3NyYy9pbmRleFwiKTtcbmNvbnN0IGlucHV0TWFzayA9IHJlcXVpcmUoXCIuLi8uLi8uLi91c2EtaW5wdXQtbWFzay9zcmMvaW5kZXhcIik7XG5jb25zdCBsYW5ndWFnZVNlbGVjdG9yID0gcmVxdWlyZShcIi4uLy4uLy4uL3VzYS1sYW5ndWFnZS1zZWxlY3Rvci9zcmMvaW5kZXhcIik7XG5jb25zdCBtb2RhbCA9IHJlcXVpcmUoXCIuLi8uLi8uLi91c2EtbW9kYWwvc3JjL2luZGV4XCIpO1xuY29uc3QgbmF2aWdhdGlvbiA9IHJlcXVpcmUoXCIuLi8uLi8uLi91c2EtaGVhZGVyL3NyYy9pbmRleFwiKTtcbmNvbnN0IHBhc3N3b3JkID0gcmVxdWlyZShcIi4uLy4uLy4uL191c2EtcGFzc3dvcmQvc3JjL2luZGV4XCIpO1xuY29uc3QgcmFuZ2UgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLXJhbmdlL3NyYy9pbmRleFwiKTtcbmNvbnN0IHNlYXJjaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi91c2Etc2VhcmNoL3NyYy9pbmRleFwiKTtcbmNvbnN0IHNraXBuYXYgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLXNraXBuYXYvc3JjL2luZGV4XCIpO1xuY29uc3QgdGFibGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLXRhYmxlL3NyYy9pbmRleFwiKTtcbmNvbnN0IHRpbWVQaWNrZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLXRpbWUtcGlja2VyL3NyYy9pbmRleFwiKTtcbmNvbnN0IHRvb2x0aXAgPSByZXF1aXJlKFwiLi4vLi4vLi4vdXNhLXRvb2x0aXAvc3JjL2luZGV4XCIpO1xuY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZShcIi4uLy4uLy4uL3VzYS12YWxpZGF0aW9uL3NyYy9pbmRleFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFjY29yZGlvbixcbiAgYmFubmVyLFxuICBidXR0b24sXG4gIGNoYXJhY3RlckNvdW50LFxuICBjb21ib0JveCxcbiAgZGF0ZVBpY2tlcixcbiAgZGF0ZVJhbmdlUGlja2VyLFxuICBmaWxlSW5wdXQsXG4gIGZvb3RlcixcbiAgaW5QYWdlTmF2aWdhdGlvbixcbiAgaW5wdXRNYXNrLFxuICBsYW5ndWFnZVNlbGVjdG9yLFxuICBtb2RhbCxcbiAgbmF2aWdhdGlvbixcbiAgcGFzc3dvcmQsXG4gIHJhbmdlLFxuICBzZWFyY2gsXG4gIHNraXBuYXYsXG4gIHRhYmxlLFxuICB0aW1lUGlja2VyLFxuICB0b29sdGlwLFxuICB2YWxpZGF0b3IsXG59O1xuIiwid2luZG93LnVzd2RzUHJlc2VudCA9IHRydWU7IC8vIEdMT0JBTCB2YXJpYWJsZSB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c3dkcy5qcyBoYXMgbG9hZGVkIGluIHRoZSBET00uXG5cbmNvbnN0IHVzd2RzID0gcmVxdWlyZShcIi4vY29uZmlnXCIpO1xuXG5jb25zdCBjb21wb25lbnRzID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG5cbnVzd2RzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xuXG5jb25zdCBpbml0Q29tcG9uZW50cyA9ICgpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgT2JqZWN0LmtleXMoY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgYmVoYXZpb3IgPSBjb21wb25lbnRzW2tleV07XG4gICAgYmVoYXZpb3Iub24odGFyZ2V0KTtcbiAgfSk7XG59O1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdENvbXBvbmVudHMsIHsgb25jZTogdHJ1ZSB9KTtcbn0gZWxzZSB7XG4gIGluaXRDb21wb25lbnRzKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHVzd2RzO1xuZXhwb3J0cy5pbml0Q29tcG9uZW50cyA9IGluaXRDb21wb25lbnRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoaHRtbERvY3VtZW50ID0gZG9jdW1lbnQpID0+IGh0bWxEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuIiwiLyoqXG4gKiBDYWxsYmFjayBoYW5kbGVyIGZvciBjb21wb25lbnQgc2V0dXAgYW5kIHRlYXJkb3duIGV2ZW50cy5cbiAqXG4gKiBAdHlwZWRlZiB7KHRhcmdldD86IEhUTUxFbGVtZW50KSA9PiBhbnl9IEJlaGF2aW9yTGlmZWN5Y2xlXG4gKi9cblxuLyoqXG4gKiBPcHRpb25zIG9iamVjdCBmb3IgaW5pdGlhbGl6aW5nIGEgY29tcG9uZW50J3MgYmVoYXZpb3IgYW5kIGluY2x1ZGluZyBhZGRpdGlvbmFsIHByb3BlcnRpZXMgaW5cbiAqIHRoZSBwdWJsaWMgaW50ZXJmYWNlIG9mIGVhY2ggaW5pdGlhbGl6ZWQgY29tcG9uZW50LlxuICpcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8c3RyaW5nLCBhbnk+ICYgeyBpbml0PzogQmVoYXZpb3JMaWZlY3ljbGUsIHRlYXJkb3duPzogQmVoYXZpb3JMaWZlY3ljbGUgfX0gQmVoYXZpb3JQcm9wc1xuICovXG5cbi8qKlxuICogQ29tcG9uZW50IGluaXRpYWxpemVyLlxuICpcbiAqIEB0eXBlZGVmIHtCZWhhdmlvclByb3BzICYge1xuICogICBvbjogQmVoYXZpb3JMaWZlY3ljbGUsXG4gKiAgIG9mZjogQmVoYXZpb3JMaWZlY3ljbGUsXG4gKiAgIGFkZDogQmVoYXZpb3JMaWZlY3ljbGUsXG4gKiAgIHJlbW92ZTogQmVoYXZpb3JMaWZlY3ljbGUsXG4gKiB9fSBCZWhhdmlvclxuICovXG5cbi8qKlxuICogRXZlbnQgY2FsbGJhY2sgaGFuZGxlci5cbiAqXG4gKiBAdHlwZWRlZiB7KFxuICogICB0aGlzOiBIVE1MRWxlbWVudCxcbiAqICAgZXZlbnQ6IEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwID8gSFRNTEVsZW1lbnRFdmVudE1hcFtLXSA6IEV2ZW50XG4gKiApID0+IGFueX0gRXZlbnRIYW5kbGVyXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gSyBFdmVudCBuYW1lKHMpXG4gKi9cblxuLyoqXG4gKiBDYWxsYmFjayBvciBvYmplY3Qgb2Ygc2VsZWN0b3Itc2NvcGVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAdHlwZWRlZiB7RXZlbnRIYW5kbGVyPEs+IHwgUmVjb3JkPHN0cmluZywgRXZlbnRIYW5kbGVyPEs+Pn0gRXZlbnRIYW5kbGVyT3JTZWxlY3Rvck1hcFxuICogQHRlbXBsYXRlIHtzdHJpbmd9IEsgRXZlbnQgbmFtZShzKVxuICovXG5cbi8qKlxuICogT2JqZWN0IG9mIGNvbXBvbmVudCBldmVudCBoYW5kbGVycywgd2hlcmUgZWFjaCBldmVudCBoYW5kbGVyIG1heSBiZSBhIGNhbGxiYWNrIGZ1bmN0aW9uIG9yIGFuXG4gKiBvYmplY3Qgb2Ygc2VsZWN0b3Itc2NvcGVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAdHlwZWRlZiB7UmVjb3JkPEssIEV2ZW50SGFuZGxlck9yU2VsZWN0b3JNYXA8Sz4+fSBFdmVudHNcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBLIEV2ZW50IG5hbWUocylcbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RXZlbnRzPEs+fSBldmVudHMgT2JqZWN0IG9mIGNvbXBvbmVudCBldmVudCBoYW5kbGVycywgd2hlcmUgZWFjaCBldmVudCBoYW5kbGVyIG1heSBiZSBhXG4gKiBjYWxsYmFjayBmdW5jdGlvbiBvciBhbiBvYmplY3Qgb2Ygc2VsZWN0b3Itc2NvcGVkIGNhbGxiYWNrcy5cbiAqIEBwYXJhbSB7UGFydGlhbDxCZWhhdmlvclByb3BzPn0gcHJvcHMgQWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRvIGluY2x1ZGUgaW4gcHVibGljIGludGVyZmFjZSBvZlxuICogZWFjaCBpbml0aWFsaXplZCBjb21wb25lbnQuXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gSyBFdmVudCBuYW1lKHMpXG4gKlxuICogQHJldHVybiB7QmVoYXZpb3J9IENvbXBvbmVudCBpbml0aWFsaXplci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IChldmVudHMsIHByb3BzKSA9PiB7XG4gIC8vIE5vcm1hbGl6ZSBldmVudCBoYW5kbGVycyB0byBhbiBhcnJheSBvZiBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIGVpdGhlciBgYWRkRXZlbnRMaXN0ZW5lcmAgb3JcbiAgLy8gYHJlbW92ZUV2ZW50TGlzdGVuZXJgIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24uXG4gIGNvbnN0IGxpc3RlbmVycyA9IE9iamVjdC5lbnRyaWVzKGV2ZW50cykuZmxhdE1hcCgoW2V2ZW50VHlwZXMsIGhhbmRsZXJzXSkgPT5cbiAgICAvLyBFYWNoIGV2ZW50IGhhbmRsZXIgY2FuIGJlIGRlZmluZWQgZm9yIG9uZSBvciBtb3JlIHNwYWNlLXNlcGFyYXRlZCBldmVudCBuYW1lcy5cbiAgICBldmVudFR5cGVzLnNwbGl0KFwiIFwiKS5tYXAoXG4gICAgICAoZXZlbnRUeXBlKSA9PlxuICAgICAgICAvLyBHZW5lcmF0ZSBhcmd1bWVudHMgb2YgYFthZGQvcmVtb3ZlXUV2ZW50TGlzdGVuZXJgIGFzIFtldmVudFR5cGUsIGNhbGxiYWNrXVxuICAgICAgICAvKiogQHR5cGUge1trZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwLCBFdmVudEhhbmRsZXI8YW55Pl19ICovIChbXG4gICAgICAgICAgZXZlbnRUeXBlLFxuICAgICAgICAgIC8vIEV2ZW50IGhhbmRsZXJzIGNhbiBiZSBkZWZpbmVkIGFzIGEgY2FsbGJhY2sgb3Igb2JqZWN0IG9mIHNlbGVjdG9yLXNjb3BlZCBjYWxsYmFja3MuIFRvXG4gICAgICAgICAgLy8gbm9ybWFsaXplIGFzIGEgZnVuY3Rpb24sIGNyZWF0ZSBhIGZ1bmN0aW9uIGZyb20gYSBnaXZlbiBvYmplY3QgdG8gcGVyZm9ybSB0aGUgc2NvcGluZ1xuICAgICAgICAgIC8vIGxvZ2ljLlxuICAgICAgICAgIHR5cGVvZiBoYW5kbGVycyA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IGhhbmRsZXJzXG4gICAgICAgICAgICA6IChldmVudCkgPT5cbiAgICAgICAgICAgICAgICAvLyBXaGVuIGEgaGFuZGxlciBpcyBkZWZpbmVkIGFzIGFuIG9iamVjdCwgZXZlbnQgaGFuZGxpbmcgc2hvdWxkIHRlcm1pbmF0ZSBpZiBhbnkgb2ZcbiAgICAgICAgICAgICAgICAvLyB0aGUgc2NvcGVkIGNhbGxiYWNrcyByZXR1cm4gYGZhbHNlYC4gVGhpcyBpcyBhY2NvbXBsaXNoZWQgYnkgaXRlcmF0aW5nIG92ZXIgdGhlXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0J3MgdmFsdWVzIGFzIGFuIGFycmF5IGFuZCB1c2luZyBgQXJyYXkjc29tZWAgdG8gYWJvcnQgYXQgdGhlIGZpcnN0IGBmYWxzZWBcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdmFsdWUuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaGFuZGxlcnMpLnNvbWUoKFtzZWxlY3RvciwgaGFuZGxlcl0pID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgZXZlbnQgaXMgYXR0YWNoZWQgYXQgYW4gYW5jZXN0b3IgYW5kIGlzIGhhbmRsZWQgdXNpbmcgZXZlbnRcbiAgICAgICAgICAgICAgICAgIC8vIGRlbGVnYXRpb24sIGVuc3VyZSB0aGF0IHRoZSBhY3R1YWwgZXZlbnQgdGFyZ2V0IGlzIHdpdGhpbiB0aGUgc2NvcGVkIHNlbGVjdG9yLlxuICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQgJiYgaGFuZGxlci5jYWxsKHRhcmdldCwgZXZlbnQpID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgKSxcbiAgKTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjb21wb25lbnRzIHdpdGhpbiB0aGUgZ2l2ZW4gdGFyZ2V0LCBkZWZhdWx0aW5nIHRvIHRoZSBkb2N1bWVudCBib2R5LlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBBbmNlc3RvciBlbGVtZW50IGluIHdoaWNoIHRvIGluaXRpYWxpemVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBjb25zdCBvbiA9ICh0YXJnZXQgPSBkb2N1bWVudC5ib2R5KSA9PiB7XG4gICAgaWYgKHByb3BzICYmIHByb3BzLmluaXQpIHtcbiAgICAgIHByb3BzLmluaXQodGFyZ2V0KTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoYXJncykgPT4gdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoLi4uYXJncykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgY29tcG9uZW50IGJlaGF2aW9ycyB3aXRoaW4gdGhlIGdpdmVuIHRhcmdldCwgZGVmYXVsdGluZyB0byB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgQW5jZXN0b3IgZWxlbWVudCBpbiB3aGljaCB0byByZW1vdmUgY29tcG9uZW50IGJlaGF2aW9ycy5cbiAgICovXG4gIGNvbnN0IG9mZiA9ICh0YXJnZXQgPSBkb2N1bWVudC5ib2R5KSA9PiB7XG4gICAgaWYgKHByb3BzICYmIHByb3BzLnRlYXJkb3duKSB7XG4gICAgICBwcm9wcy50ZWFyZG93bih0YXJnZXQpO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChhcmdzKSA9PiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lciguLi5hcmdzKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgb24sIGFkZDogb24sIG9mZiwgcmVtb3ZlOiBvZmYsIC4uLnByb3BzIH07XG59O1xuIiwiLyoqXG4gKiBEZWJvdW5jZSBhIGZ1bmN0aW9uIHNvIGl0IHJ1bnMgYWZ0ZXIgYGRlbGF5YCBtcyBvZiBpbmFjdGl2aXR5LlxuICpcbiAqIFRoZSByZXR1cm5lZCBmdW5jdGlvbiBpbmNsdWRlcyBhIGAuY2FuY2VsKClgIG1ldGhvZCB0aGF0IGNsZWFycyBhbnlcbiAqIHBlbmRpbmcgaW52b2NhdGlvbi4gVXNlZnVsIHdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY29tcGV0aW5nIGRlYm91bmNlZFxuICogdXBkYXRlcyAoZm9yIGV4YW1wbGUsIGFzc2VydGl2ZSB2cyByZWNvdmVyeSBhbm5vdW5jZW1lbnRzKS5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGRlYm91bmNlZFxuICogQHBhcmFtICB7bnVtYmVyfSBkZWxheSAtIE1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBjYWxsaW5nIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb24gJiB7IGNhbmNlbDogKCkgPT4gdm9pZCB9fSBBIGRlYm91bmNlZCBmdW5jdGlvblxuICogQGV4YW1wbGUgY29uc3QgdXBkYXRlU3RhdHVzID0gZGVib3VuY2UoKHN0cmluZykgPT4gY29uc29sZS5sb2coc3RyaW5nKSwgMjAwMClcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlYm91bmNlKGNhbGxiYWNrLCBkZWxheSA9IDUwMCkge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBjb25zdCBkZWJvdW5jZWQgPSBmdW5jdGlvbiBkZWJvdW5jZWQoLi4uYXJncykge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSwgZGVsYXkpO1xuICB9O1xuICBkZWJvdW5jZWQuY2FuY2VsID0gKCkgPT4ge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn07XG4iLCJjb25zdCBrZXltYXAgPSByZXF1aXJlKFwiLi9rZXltYXBcIik7XG5jb25zdCBiZWhhdmlvciA9IHJlcXVpcmUoXCIuL2JlaGF2aW9yXCIpO1xuY29uc3Qgc2VsZWN0ID0gcmVxdWlyZShcIi4vc2VsZWN0XCIpO1xuY29uc3QgYWN0aXZlRWxlbWVudCA9IHJlcXVpcmUoXCIuL2FjdGl2ZS1lbGVtZW50XCIpO1xuXG5jb25zdCBGT0NVU0FCTEUgPVxuICAnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0nO1xuXG5jb25zdCB0YWJIYW5kbGVyID0gKGNvbnRleHQpID0+IHtcbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBzZWxlY3QoRk9DVVNBQkxFLCBjb250ZXh0KTtcbiAgY29uc3QgZmlyc3RUYWJTdG9wID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gIGNvbnN0IGxhc3RUYWJTdG9wID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gU3BlY2lhbCBydWxlcyBmb3Igd2hlbiB0aGUgdXNlciBpcyB0YWJiaW5nIGZvcndhcmQgZnJvbSB0aGUgbGFzdCBmb2N1c2FibGUgZWxlbWVudCxcbiAgLy8gb3Igd2hlbiB0YWJiaW5nIGJhY2t3YXJkcyBmcm9tIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICBmdW5jdGlvbiB0YWJBaGVhZChldmVudCkge1xuICAgIGlmIChhY3RpdmVFbGVtZW50KCkgPT09IGxhc3RUYWJTdG9wKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZmlyc3RUYWJTdG9wLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGFiQmFjayhldmVudCkge1xuICAgIGlmIChhY3RpdmVFbGVtZW50KCkgPT09IGZpcnN0VGFiU3RvcCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxhc3RUYWJTdG9wLmZvY3VzKCk7XG4gICAgfVxuICAgIC8vIFRoaXMgY2hlY2tzIGlmIHlvdSB3YW50IHRvIHNldCB0aGUgaW5pdGlhbCBmb2N1cyB0byBhIGNvbnRhaW5lclxuICAgIC8vIGluc3RlYWQgb2YgYW4gZWxlbWVudCB3aXRoaW4sIGFuZCB0aGUgdXNlciB0YWJzIGJhY2suXG4gICAgLy8gVGhlbiB3ZSBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdFxuICAgIGVsc2UgaWYgKCFmb2N1c2FibGVFbGVtZW50cy5pbmNsdWRlcyhhY3RpdmVFbGVtZW50KCkpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZmlyc3RUYWJTdG9wLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdFRhYlN0b3AsXG4gICAgbGFzdFRhYlN0b3AsXG4gICAgdGFiQWhlYWQsXG4gICAgdGFiQmFjayxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGNvbnRleHQsIGFkZGl0aW9uYWxLZXlCaW5kaW5ncyA9IHt9KSA9PiB7XG4gIGNvbnN0IHsgYXV0b0ZvY3VzID0gdHJ1ZSwgLi4ua2V5QmluZGluZ3MgfSA9IGFkZGl0aW9uYWxLZXlCaW5kaW5ncztcbiAgY29uc3QgdGFiRXZlbnRIYW5kbGVyID0gdGFiSGFuZGxlcihjb250ZXh0KTtcbiAgY29uc3QgYmluZGluZ3MgPSBrZXlCaW5kaW5ncztcbiAgY29uc3QgeyBFc2MsIEVzY2FwZSB9ID0gYmluZGluZ3M7XG5cbiAgaWYgKEVzY2FwZSAmJiAhRXNjKSBiaW5kaW5ncy5Fc2MgPSBFc2NhcGU7XG5cbiAgLy8gIFRPRE86IEluIHRoZSBmdXR1cmUsIGxvb3Agb3ZlciBhZGRpdGlvbmFsIGtleWJpbmRpbmdzIGFuZCBwYXNzIGFuIGFycmF5XG4gIC8vIG9mIGZ1bmN0aW9ucywgaWYgbmVjZXNzYXJ5LCB0byB0aGUgbWFwIGtleXMuIFRoZW4gcGVvcGxlIGltcGxlbWVudGluZ1xuICAvLyB0aGUgZm9jdXMgdHJhcCBjb3VsZCBwYXNzIGNhbGxiYWNrcyB0byBmaXJlIHdoZW4gdGFiYmluZ1xuICBjb25zdCBrZXlNYXBwaW5ncyA9IGtleW1hcCh7XG4gICAgVGFiOiB0YWJFdmVudEhhbmRsZXIudGFiQWhlYWQsXG4gICAgXCJTaGlmdCtUYWJcIjogdGFiRXZlbnRIYW5kbGVyLnRhYkJhY2ssXG4gICAgLi4ua2V5QmluZGluZ3MsXG4gIH0pO1xuXG4gIGNvbnN0IGZvY3VzVHJhcCA9IGJlaGF2aW9yKFxuICAgIHtcbiAgICAgIGtleWRvd246IGtleU1hcHBpbmdzLFxuICAgIH0sXG4gICAge1xuICAgICAgaW5pdCgpIHtcbiAgICAgICAgLy8gVE9ETzogaXMgdGhpcyBkZXNpcmFibGUgYmVoYXZpb3I/IFNob3VsZCB0aGUgdHJhcCBhbHdheXMgZG8gdGhpcyBieSBkZWZhdWx0IG9yIHNob3VsZFxuICAgICAgICAvLyB0aGUgY29tcG9uZW50IGdldHRpbmcgZGVjb3JhdGVkIGhhbmRsZSB0aGlzP1xuICAgICAgICBpZiAoYXV0b0ZvY3VzICYmIHRhYkV2ZW50SGFuZGxlci5maXJzdFRhYlN0b3ApIHtcbiAgICAgICAgICB0YWJFdmVudEhhbmRsZXIuZmlyc3RUYWJTdG9wLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGUoaXNBY3RpdmUpIHtcbiAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5vbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2ZmKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gZm9jdXNUcmFwO1xufTtcbiIsIi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NTU3NDMzXG5mdW5jdGlvbiBpc0VsZW1lbnRJblZpZXdwb3J0KFxuICBlbCxcbiAgd2luID0gd2luZG93LFxuICBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbikge1xuICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICByZWN0LnRvcCA+PSAwICYmXG4gICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICByZWN0LmJvdHRvbSA8PSAod2luLmlubmVySGVpZ2h0IHx8IGRvY0VsLmNsaWVudEhlaWdodCkgJiZcbiAgICByZWN0LnJpZ2h0IDw9ICh3aW4uaW5uZXJXaWR0aCB8fCBkb2NFbC5jbGllbnRXaWR0aClcbiAgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VsZW1lbnRJblZpZXdwb3J0O1xuIiwiLy8gaU9TIGRldGVjdGlvbiBmcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MDM5ODg1LzE3NzcxMFxuZnVuY3Rpb24gaXNJb3NEZXZpY2UoKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBvZHxpUGhvbmV8aVBhZCkvZykgfHxcbiAgICAgIChuYXZpZ2F0b3IucGxhdGZvcm0gPT09IFwiTWFjSW50ZWxcIiAmJiBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKSkgJiZcbiAgICAhd2luZG93Lk1TU3RyZWFtXG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJb3NEZXZpY2U7XG4iLCIvKipcbiAqIENhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIGtleSBpcyBwcmVzc2VkLlxuICpcbiAqIEB0eXBlZGVmIHsoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IGFueX0gS2V5Ym9hcmRFdmVudEhhbmRsZXJcbiAqL1xuXG4vKipcbiAqIE9iamVjdCB3aXRoIGtleWJvYXJkIGtleSBjb21iaW5hdGlvbiBhcyBvYmplY3Qga2V5LCBhbmQgY29ycmVzcG9uZGluZyBjYWxsYmFjayBoYW5kbGVyIGFzIHZhbHVlLlxuICpcbiAqIEB0eXBlZGVmIHtSZWNvcmQ8c3RyaW5nLCBLZXlib2FyZEV2ZW50SGFuZGxlcj59IEtleW1hcENvbmZpZ1xuICovXG5cbi8qKlxuICogSW5pdGlhbGl6ZSBrZXlib2FyZCBldmVudHMgd2l0aCBhbiBvYmplY3Qgb2Yga2V5Ym9hcmQga2V5IGNvbWJpbmF0aW9ucyBhbmQgY29ycmVzcG9uZGluZyBldmVudFxuICogaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtLZXltYXBDb25maWd9IG1hcFxuICogQHJldHVybiB7S2V5Ym9hcmRFdmVudEhhbmRsZXJ9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKG1hcCkgPT4gKGV2ZW50KSA9PiB7XG4gIC8vIEJhaWwgb3V0IGlmIHRoaXMgaXMgbm90IGEgS2V5Ym9hcmRFdmVudCAoZS5nLiBJbnB1dEV2ZW50IGZyb20gZGF0YWxpc3RcbiAgLy8gc2VsZWN0aW9uKS4gT25seSBLZXlib2FyZEV2ZW50cyBoYXZlIGBrZXlgIGFuZCBgZ2V0TW9kaWZpZXJTdGF0ZWAuXG4gIGlmIChcbiAgICAhKGV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkgfHxcbiAgICB0eXBlb2YgZXZlbnQua2V5ID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgdHlwZW9mIGV2ZW50LmdldE1vZGlmaWVyU3RhdGUgIT09IFwiZnVuY3Rpb25cIlxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goKGNvbWJvKSA9PiB7XG4gICAgLy8gRWFjaCBrZXkgY29tYmluYXRpb24gY2FuIGhhdmUgb25lIG9yIG1vcmUgbW9kaWZpZXIsIHdoZXJlIGVhY2ggbW9kaWZpZXIgaXMgcHJlZml4ZWQgd2l0aCB0aGVcbiAgICAvLyBtb2RpZmllciBuYW1lIGFuZCBcIitcIi5cbiAgICBjb25zdCBwYXJ0cyA9IGNvbWJvLnNwbGl0KFwiK1wiKTtcblxuICAgIC8vIFRoZSBrZXlib2FyZCBrZXkgbmFtZSBzaG91bGQgY29tZSBhcyB0aGUgbGFzdCBwYXJ0IG9mIGEgXCIrXCIgZGVsaW1pdGVkIGtleS4gUG9wcGluZyB0aGUgaXRlbVxuICAgIC8vIHdpbGwgcmVzdWx0IGluIGBwYXJ0c2Agb25seSBjb250YWluaW5nIHRoZSBtb2RpZmllcnMgdG8gYmUgY2hlY2tlZC5cbiAgICBjb25zdCBrZXkgPSBwYXJ0cy5wb3AoKTtcblxuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBtb2RpZmllcnMgb24gdGhlIGV2ZW50IGFyZSBleGFjdGx5IGVxdWFsIHRvIHRoZSBtb2RpZmllcnMgc3BlY2lmaWVkIGluIHRoZVxuICAgIC8vIGtleSBjb21iaW5hdGlvbi4gVXNlIHRoZSBzcGVjIG1vZGlmaWVyIG5hbWVzIHJlY29nbml6ZWQgYnkgYGdldE1vZGlmaWVyU3RhdGUoKWA6IFwiQ29udHJvbFwiXG4gICAgLy8gKG5vdCBcIkN0cmxcIiksIFwiU2hpZnRcIiwgXCJBbHRcIiwgXCJNZXRhXCIuXG4gICAgY29uc3QgaXNNb2RpZmllck1hdGNoID0gW1wiU2hpZnRcIiwgXCJBbHRcIiwgXCJDb250cm9sXCIsIFwiTWV0YVwiXVxuICAgICAgLy8gRm9yIGFueSBtb2RpZmllciBhY3RpdmUgaW4gdGhlIGV2ZW50IChvciB2aWNlLXZlcnNhLCBleHBlY3RlZCBpbiB0aGUga2V5IGNvbWJpbmF0aW9uKS4uLlxuICAgICAgLmZpbHRlcigobW9kKSA9PiBldmVudC5nZXRNb2RpZmllclN0YXRlKG1vZCkgfHwgcGFydHMuaW5jbHVkZXMobW9kKSlcbiAgICAgIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGV4cGVjdGVkIGluIHRoZSBrZXkgY29tYmluYXRpb24gKG9yIHZpY2UtdmVyc2EsIGFjdGl2ZSBpbiB0aGUgZXZlbnQpLlxuICAgICAgLmV2ZXJ5KChtb2QpID0+IGV2ZW50LmdldE1vZGlmaWVyU3RhdGUobW9kKSAmJiBwYXJ0cy5pbmNsdWRlcyhtb2QpKTtcblxuICAgIGlmIChrZXkgPT09IGV2ZW50LmtleSAmJiBpc01vZGlmaWVyTWF0Y2gpIHtcbiAgICAgIG1hcFtjb21ib10oZXZlbnQpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyoqXG4gKiBBIHNpbXBsZSBsaWJyYXJ5IHRvIGhlbHAgeW91IGVzY2FwZSBIVE1MIHVzaW5nIHRlbXBsYXRlIHN0cmluZ3MuIFRoaXMgb3JpZ2luYXRlZFxuICogZnJvbSBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNTA5MTAwNDAxMTAvaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvRmlyZWZveF9PUy9TZWN1cml0eS9TZWN1cml0eV9BdXRvbWF0aW9uXG4gKlxuICogSXQgd2FzIGNvbnZlcnRlZCBmcm9tIFVNRCB0byBDb21tb25KUywgYW5kIHVudXNlZCBtZXRob2RzIHdlcmUgcmVtb3ZlZCxcbiAqIGJ1dCB0aGUgc3Bpcml0IHJlbWFpbnMgdGhlIHNhbWUuXG4gKlxuICogU2VlIGFkZGl0aW9uYWwgYmFja2dyb3VuZCBpbmZvcm1hdGlvbiBhbmQgZGVzaWduIGRvY3MgYXRcbiAqIGh0dHBzOi8vd2lraS5tb3ppbGxhLm9yZy9Vc2VyOkZicmF1bi9HYWlhL1NhZmVpbm5lckhUTUxSb2FkbWFwXG4gKi9cblxuY29uc3QgU2FuaXRpemVyID0ge1xuICBfZW50aXR5OiAvWyY8PlwiJy9dL2csXG5cbiAgX2VudGl0aWVzOiB7XG4gICAgXCImXCI6IFwiJmFtcDtcIixcbiAgICBcIjxcIjogXCImbHQ7XCIsXG4gICAgXCI+XCI6IFwiJmd0O1wiLFxuICAgICdcIic6IFwiJnF1b3Q7XCIsXG4gICAgXCInXCI6IFwiJmFwb3M7XCIsXG4gICAgXCIvXCI6IFwiJiN4MkY7XCIsXG4gIH0sXG5cbiAgZ2V0RW50aXR5OiBmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBTYW5pdGl6ZXIuX2VudGl0aWVzW3NdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBFc2NhcGVzIEhUTUwgZm9yIGFsbCB2YWx1ZXMgaW4gYSB0YWdnZWQgdGVtcGxhdGUgc3RyaW5nLlxuICAgKi9cbiAgZXNjYXBlSFRNTDogZnVuY3Rpb24gKHN0cmluZ3MpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHN0cmluZ3NbaV07XG4gICAgICBpZiAoaSArIDEgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWUgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoU2FuaXRpemVyLl9lbnRpdHksIFNhbml0aXplci5nZXRFbnRpdHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNhbml0aXplcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyV2lkdGgoKSB7XG4gIC8vIENyZWF0aW5nIGludmlzaWJsZSBjb250YWluZXJcbiAgY29uc3Qgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiOyAvLyBmb3JjaW5nIHNjcm9sbGJhciB0byBhcHBlYXJcbiAgb3V0ZXIuc3R5bGUubXNPdmVyZmxvd1N0eWxlID0gXCJzY3JvbGxiYXJcIjsgLy8gbmVlZGVkIGZvciBXaW5KUyBhcHBzXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gIC8vIENyZWF0aW5nIGlubmVyIGVsZW1lbnQgYW5kIHBsYWNpbmcgaXQgaW4gdGhlIGNvbnRhaW5lclxuICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICAvLyBDYWxjdWxhdGluZyBkaWZmZXJlbmNlIGJldHdlZW4gY29udGFpbmVyJ3MgZnVsbCB3aWR0aCBhbmQgdGhlIGNoaWxkIHdpZHRoXG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gYCR7b3V0ZXIub2Zmc2V0V2lkdGggLSBpbm5lci5vZmZzZXRXaWR0aH1weGA7XG5cbiAgLy8gUmVtb3ZpbmcgdGVtcG9yYXJ5IGVsZW1lbnRzIGZyb20gdGhlIERPTVxuICBvdXRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG91dGVyKTtcblxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59O1xuIiwiY29uc3Qgc2VsZWN0ID0gcmVxdWlyZShcIi4vc2VsZWN0XCIpO1xuLyoqXG4gKiBAbmFtZSBpc0VsZW1lbnRcbiAqIEBkZXNjIHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGEgRE9NIGVsZW1lbnQuXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzRWxlbWVudCA9ICh2YWx1ZSkgPT5cbiAgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlLm5vZGVUeXBlID09PSAxO1xuXG4vKipcbiAqIEBuYW1lIHNlbGVjdE9yTWF0Y2hlc1xuICogQGRlc2Mgc2VsZWN0cyBlbGVtZW50cyBmcm9tIHRoZSBET00gYnkgY2xhc3Mgc2VsZWN0b3Igb3IgSUQgc2VsZWN0b3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3IgLSBUaGUgc2VsZWN0b3IgdG8gdHJhdmVyc2UgdGhlIERPTSB3aXRoLlxuICogQHBhcmFtIHtEb2N1bWVudHxIVE1MRWxlbWVudD99IGNvbnRleHQgLSBUaGUgY29udGV4dCB0byB0cmF2ZXJzZSB0aGUgRE9NXG4gKiAgIGluLiBJZiBub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvIHRoZSBkb2N1bWVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50W119IC0gQW4gYXJyYXkgb2YgRE9NIG5vZGVzIG9yIGFuIGVtcHR5IGFycmF5LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IChzZWxlY3RvciwgY29udGV4dCkgPT4ge1xuICBjb25zdCBzZWxlY3Rpb24gPSBzZWxlY3Qoc2VsZWN0b3IsIGNvbnRleHQpO1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvbjtcbiAgfVxuXG4gIGlmIChpc0VsZW1lbnQoY29udGV4dCkgJiYgY29udGV4dC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgIHNlbGVjdGlvbi5wdXNoKGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdGlvbjtcbn07XG4iLCIvKipcbiAqIEBuYW1lIGlzRWxlbWVudFxuICogQGRlc2MgcmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYXJndW1lbnQgaXMgYSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgaXNFbGVtZW50ID0gKHZhbHVlKSA9PlxuICB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUubm9kZVR5cGUgPT09IDE7XG5cbi8qKlxuICogQG5hbWUgc2VsZWN0XG4gKiBAZGVzYyBzZWxlY3RzIGVsZW1lbnRzIGZyb20gdGhlIERPTSBieSBjbGFzcyBzZWxlY3RvciBvciBJRCBzZWxlY3Rvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciAtIFRoZSBzZWxlY3RvciB0byB0cmF2ZXJzZSB0aGUgRE9NIHdpdGguXG4gKiBAcGFyYW0ge0RvY3VtZW50fEhUTUxFbGVtZW50P30gY29udGV4dCAtIFRoZSBjb250ZXh0IHRvIHRyYXZlcnNlIHRoZSBET01cbiAqICAgaW4uIElmIG5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gdGhlIGRvY3VtZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnRbXX0gLSBBbiBhcnJheSBvZiBET00gbm9kZXMgb3IgYW4gZW1wdHkgYXJyYXkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKHNlbGVjdG9yLCBjb250ZXh0KSA9PiB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoIWNvbnRleHQgfHwgIWlzRWxlbWVudChjb250ZXh0KSkge1xuICAgIGNvbnRleHQgPSB3aW5kb3cuZG9jdW1lbnQ7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGlvbiA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3Rpb24pO1xufTtcbiIsIi8qKlxuICogRmxpcHMgZ2l2ZW4gSU5QVVQgZWxlbWVudHMgYmV0d2VlbiBtYXNrZWQgKGhpZGluZyB0aGUgZmllbGQgdmFsdWUpIGFuZCB1bm1hc2tlZFxuICogQHBhcmFtIHtBcnJheS5IVE1MRWxlbWVudH0gZmllbGRzIC0gQW4gYXJyYXkgb2YgSU5QVVQgZWxlbWVudHNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbWFzayAtIFdoZXRoZXIgdGhlIG1hc2sgc2hvdWxkIGJlIGFwcGxpZWQsIGhpZGluZyB0aGUgZmllbGQgdmFsdWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZmllbGQsIG1hc2spID0+IHtcbiAgZmllbGQuc2V0QXR0cmlidXRlKFwiYXV0b2NhcGl0YWxpemVcIiwgXCJvZmZcIik7XG4gIGZpZWxkLnNldEF0dHJpYnV0ZShcImF1dG9jb3JyZWN0XCIsIFwib2ZmXCIpO1xuICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIG1hc2sgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIik7XG59O1xuIiwiY29uc3QgdG9nZ2xlRmllbGRNYXNrID0gcmVxdWlyZShcIi4vdG9nZ2xlLWZpZWxkLW1hc2tcIik7XG5cbmNvbnN0IENPTlRST0xTID0gXCJhcmlhLWNvbnRyb2xzXCI7XG5jb25zdCBQUkVTU0VEID0gXCJhcmlhLXByZXNzZWRcIjtcbmNvbnN0IFNIT1dfQVRUUiA9IFwiZGF0YS1zaG93LXRleHRcIjtcbmNvbnN0IEhJREVfQVRUUiA9IFwiZGF0YS1oaWRlLXRleHRcIjtcblxuLyoqXG4gKiBSZXBsYWNlIHRoZSB3b3JkIFwiU2hvd1wiIChvciBcInNob3dcIikgd2l0aCBcIkhpZGVcIiAob3IgXCJoaWRlXCIpIGluIGEgc3RyaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IHNob3dUZXh0XG4gKiBAcmV0dXJuIHtzdHJvbmd9IGhpZGVUZXh0XG4gKi9cbmNvbnN0IGdldEhpZGVUZXh0ID0gKHNob3dUZXh0KSA9PlxuICBzaG93VGV4dC5yZXBsYWNlKC9cXGJTaG93XFxiL2ksIChzaG93KSA9PiBgJHtzaG93WzBdID09PSBcIlNcIiA/IFwiSFwiIDogXCJoXCJ9aWRlYCk7XG5cbmNvbnN0IHJlc29sdmVJZFJlZnMgPSAoaWQpID0+IHtcbiAgY29uc3QgaWRzID0gaWQudHJpbSgpLnNwbGl0KC9cXHMrLyk7XG5cbiAgcmV0dXJuIGlkcy5tYXAoKGkpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIGNvbnN0IGVyciA9IGBubyBlbGVtZW50IHdpdGggaWQ6ICR7aX1gO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENvbXBvbmVudCB0aGF0IGRlY29yYXRlcyBhbiBIVE1MIGVsZW1lbnQgd2l0aCB0aGUgYWJpbGl0eSB0byB0b2dnbGUgdGhlXG4gKiBtYXNrZWQgc3RhdGUgb2YgYW4gaW5wdXQgZmllbGQgKGxpa2UgYSBwYXNzd29yZCkgd2hlbiBjbGlja2VkLlxuICogVGhlIGlkcyBvZiB0aGUgZmllbGRzIHRvIGJlIG1hc2tlZCB3aWxsIGJlIHB1bGxlZCBkaXJlY3RseSBmcm9tIHRoZSBidXR0b24nc1xuICogYGFyaWEtY29udHJvbHNgIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgUGFyZW50IGVsZW1lbnQgY29udGFpbmluZyB0aGUgZmllbGRzIHRvIGJlIG1hc2tlZFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZWwpID0+IHtcbiAgLy8gdGhpcyBpcyB0aGUgKnRhcmdldCogc3RhdGU6XG4gIC8vICogaWYgdGhlIGVsZW1lbnQgaGFzIHRoZSBhdHRyIGFuZCBpdCdzICE9PSBcInRydWVcIiwgcHJlc3NlZCBpcyB0cnVlXG4gIC8vICogb3RoZXJ3aXNlLCBwcmVzc2VkIGlzIGZhbHNlXG4gIGNvbnN0IHByZXNzZWQgPVxuICAgIGVsLmhhc0F0dHJpYnV0ZShQUkVTU0VEKSAmJiBlbC5nZXRBdHRyaWJ1dGUoUFJFU1NFRCkgIT09IFwidHJ1ZVwiO1xuXG4gIGNvbnN0IGZpZWxkcyA9IHJlc29sdmVJZFJlZnMoZWwuZ2V0QXR0cmlidXRlKENPTlRST0xTKSk7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4gdG9nZ2xlRmllbGRNYXNrKGZpZWxkLCBwcmVzc2VkKSk7XG5cbiAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoU0hPV19BVFRSKSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShTSE9XX0FUVFIsIGVsLnRleHRDb250ZW50KTtcbiAgfVxuXG4gIGNvbnN0IHNob3dUZXh0ID0gZWwuZ2V0QXR0cmlidXRlKFNIT1dfQVRUUik7XG4gIGNvbnN0IGhpZGVUZXh0ID0gZWwuZ2V0QXR0cmlidXRlKEhJREVfQVRUUikgfHwgZ2V0SGlkZVRleHQoc2hvd1RleHQpO1xuXG4gIGVsLnRleHRDb250ZW50ID0gcHJlc3NlZCA/IHNob3dUZXh0IDogaGlkZVRleHQ7XG4gIGVsLnNldEF0dHJpYnV0ZShQUkVTU0VELCBwcmVzc2VkKTtcbiAgcmV0dXJuIHByZXNzZWQ7XG59O1xuIiwiY29uc3QgRVhQQU5ERUQgPSBcImFyaWEtZXhwYW5kZWRcIjtcbmNvbnN0IENPTlRST0xTID0gXCJhcmlhLWNvbnRyb2xzXCI7XG5jb25zdCBISURERU4gPSBcImhpZGRlblwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChidXR0b24sIGV4cGFuZGVkKSA9PiB7XG4gIGxldCBzYWZlRXhwYW5kZWQgPSBleHBhbmRlZDtcblxuICBpZiAodHlwZW9mIHNhZmVFeHBhbmRlZCAhPT0gXCJib29sZWFuXCIpIHtcbiAgICBzYWZlRXhwYW5kZWQgPSBidXR0b24uZ2V0QXR0cmlidXRlKEVYUEFOREVEKSA9PT0gXCJmYWxzZVwiO1xuICB9XG5cbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShFWFBBTkRFRCwgc2FmZUV4cGFuZGVkKTtcblxuICBjb25zdCBpZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoQ09OVFJPTFMpO1xuICBjb25zdCByb290ID1cbiAgICB0eXBlb2YgYnV0dG9uLmdldFJvb3ROb2RlID09PSBcImZ1bmN0aW9uXCIgPyBidXR0b24uZ2V0Um9vdE5vZGUoKSA6IGRvY3VtZW50O1xuICBjb25zdCBjb250cm9scyA9XG4gICAgdHlwZW9mIHJvb3QuZ2V0RWxlbWVudEJ5SWQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyByb290LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlmICghY29udHJvbHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHRvZ2dsZSB0YXJnZXQgZm91bmQgd2l0aCBpZDogXCIke2lkfVwiYCk7XG4gIH1cblxuICBpZiAoc2FmZUV4cGFuZGVkKSB7XG4gICAgY29udHJvbHMucmVtb3ZlQXR0cmlidXRlKEhJRERFTik7XG4gIH0gZWxzZSB7XG4gICAgY29udHJvbHMuc2V0QXR0cmlidXRlKEhJRERFTiwgXCJcIik7XG4gIH1cblxuICByZXR1cm4gc2FmZUV4cGFuZGVkO1xufTtcbiIsImNvbnN0IGRlYm91bmNlID0gcmVxdWlyZShcIi4vZGVib3VuY2VcIik7XG5jb25zdCB7IHByZWZpeDogUFJFRklYIH0gPSByZXF1aXJlKFwiLi4vY29uZmlnXCIpO1xuXG5jb25zdCBDSEVDS0VEX0NMQVNTID0gYCR7UFJFRklYfS1jaGVja2xpc3RfX2l0ZW0tLWNoZWNrZWRgO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHZhbGlkYXRlKGVsKSB7XG4gIGNvbnN0IGlkID0gZWwuZGF0YXNldC52YWxpZGF0aW9uRWxlbWVudDtcbiAgY29uc3QgY2hlY2tMaXN0ID1cbiAgICBpZC5jaGFyQXQoMCkgPT09IFwiI1wiXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpXG4gICAgICA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICBpZiAoIWNoZWNrTGlzdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gdmFsaWRhdGlvbiBlbGVtZW50IGZvdW5kIHdpdGggaWQ6IFwiJHtpZH1cImApO1xuICB9XG5cbiAgbGV0IHN0YXR1c1N1bW1hcnkgPSBcIlwiO1xuICBPYmplY3QuZW50cmllcyhlbC5kYXRhc2V0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJ2YWxpZGF0ZVwiKSkge1xuICAgICAgY29uc3QgdmFsaWRhdG9yTmFtZSA9IGtleS5zdWJzdHIoXCJ2YWxpZGF0ZVwiLmxlbmd0aCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IHZhbGlkYXRvclBhdHRlcm4gPSBuZXcgUmVnRXhwKHZhbHVlKTtcbiAgICAgIGNvbnN0IHZhbGlkYXRvclNlbGVjdG9yID0gYFtkYXRhLXZhbGlkYXRvcj1cIiR7dmFsaWRhdG9yTmFtZX1cIl1gO1xuICAgICAgY29uc3QgdmFsaWRhdG9yQ2hlY2tib3ggPSBjaGVja0xpc3QucXVlcnlTZWxlY3Rvcih2YWxpZGF0b3JTZWxlY3Rvcik7XG4gICAgICBjb25zdCB2YWxpZGF0b3JQYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgY29uc3Qgc3RhdHVzU3VtbWFyeUNvbnRhaW5lciA9IHZhbGlkYXRvclBhcmVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW2RhdGEtdmFsaWRhdGlvbi1zdGF0dXNdYCxcbiAgICAgICk7XG5cbiAgICAgIGlmICghdmFsaWRhdG9yQ2hlY2tib3gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyB2YWxpZGF0b3IgY2hlY2tib3ggZm91bmQgZm9yOiBcIiR7dmFsaWRhdG9yTmFtZX1cImApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGVja2VkID0gdmFsaWRhdG9yUGF0dGVybi50ZXN0KGVsLnZhbHVlKTtcbiAgICAgIHZhbGlkYXRvckNoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoQ0hFQ0tFRF9DTEFTUywgY2hlY2tlZCk7XG5cbiAgICAgIC8vIENyZWF0ZSBzdGF0dXMgcmVwb3J0cyBmb3IgY2hlY2tsaXN0IGl0ZW1zXG4gICAgICBjb25zdCBzdGF0dXNDb21wbGV0ZSA9IGVsLmRhdGFzZXQudmFsaWRhdGlvbkNvbXBsZXRlIHx8IFwic3RhdHVzIGNvbXBsZXRlXCI7XG4gICAgICBjb25zdCBzdGF0dXNJbmNvbXBsZXRlID1cbiAgICAgICAgZWwuZGF0YXNldC52YWxpZGF0aW9uSW5jb21wbGV0ZSB8fCBcInN0YXR1cyBpbmNvbXBsZXRlXCI7XG4gICAgICBsZXQgY2hlY2tib3hDb250ZW50ID0gYCR7dmFsaWRhdG9yQ2hlY2tib3gudGV4dENvbnRlbnR9IGA7XG5cbiAgICAgIGlmICh2YWxpZGF0b3JDaGVja2JveC5jbGFzc0xpc3QuY29udGFpbnMoQ0hFQ0tFRF9DTEFTUykpIHtcbiAgICAgICAgY2hlY2tib3hDb250ZW50ICs9IHN0YXR1c0NvbXBsZXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tib3hDb250ZW50ICs9IHN0YXR1c0luY29tcGxldGU7XG4gICAgICB9XG5cbiAgICAgIC8vIG1vdmUgc3RhdHVzIHVwZGF0ZXMgdG8gYXJpYS1sYWJlbCBvbiBjaGVja2xpc3QgaXRlbVxuICAgICAgdmFsaWRhdG9yQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLCBjaGVja2JveENvbnRlbnQpO1xuXG4gICAgICAvLyBDcmVhdGUgYSBzdW1tYXJ5IG9mIHN0YXR1cyBmb3IgYWxsIGNoZWNrbGlzdCBpdGVtc1xuICAgICAgc3RhdHVzU3VtbWFyeSArPSBgJHtjaGVja2JveENvbnRlbnR9LiBgO1xuXG4gICAgICAvLyBBZGQgc3VtbWFyeSB0byBzY3JlZW4gcmVhZGVyIHN1bW1hcnkgY29udGFpbmVyLCBhZnRlciBhIGRlbGF5XG4gICAgICBjb25zdCBzclVwZGF0ZVN0YXR1cyA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgc3RhdHVzU3VtbWFyeUNvbnRhaW5lci50ZXh0Q29udGVudCA9IHN0YXR1c1N1bW1hcnk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgc3JVcGRhdGVTdGF0dXMoKTtcbiAgICB9XG4gIH0pO1xufTtcbiJdfQ==

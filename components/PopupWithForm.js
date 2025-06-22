import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    const inputValues = {};
    const elementsForms = Array.from(this._form.elements);
    elementsForms.forEach((element) => {
      if (element.name) {
        inputValues[element.name] = element.value;
      }
    });
    return inputValues;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form = this._popup.querySelector("form");
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      //if (this._form.checkValidity()) {
      const inputValues = this._getInputValues();
      this._handleSubmit(inputValues);
      // }
      this._form.reset();
    });
  }
}

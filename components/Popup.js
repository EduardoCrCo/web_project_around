export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._setEventListeners();
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this.escapeHandler);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this.escapeHandler);
  }

  escapeHandler = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _setEventListeners() {
    const popupCloseButton = this._popup.querySelector(".popup__close-button");
    const overlay = this._popup.querySelector(".popup__overlay");

    popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    overlay.addEventListener("click", () => {
      this.close();
    });
  }
}

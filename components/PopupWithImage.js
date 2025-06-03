import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    const image = this._popup.querySelector(".popup__image");
    const title = this._popup.querySelector(".popup__title");
    image.src = link;
    image.alt = name;
    title.textContent = name;
  }
}

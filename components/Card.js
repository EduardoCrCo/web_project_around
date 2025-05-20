import { openImagePopup } from "../utils/utils.js";

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  remove() {
    this._element.remove();
  }

  toggleLike() {
    const likeButton = this._element.querySelector(
      ".grid-card__button-like-image"
    );
    likeButton.classList.toggle("grid-card__button-like_active");
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector(".grid-card__image");
    const likeButton = this._element.querySelector(
      ".grid-card__button-like-image"
    );
    const trashButton = this._element.querySelector(".grid-card__button-trash");

    cardImage.addEventListener("click", () => {
      this.clickCard();
    });
    likeButton.addEventListener("click", () => {
      this.toggleLike();
    });

    trashButton.addEventListener("click", () => {
      this.remove();
    });
  }

  _getTemplate() {
    const templateCard = document.querySelector(this._templateSelector);
    this._element = templateCard.content
      .querySelector(".grid-card")
      .cloneNode(true);

    const cardImage = this._element.querySelector(".grid-card__image");
    const cardTitle = this._element.querySelector(".grid-card__paragraph");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
  }

  clickCard() {
    openImagePopup(this._name, this._link);
  }

  render() {
    this._getTemplate();
    this._setEventListeners();
    return this._element;
  }
}

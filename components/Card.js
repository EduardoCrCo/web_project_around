export default class Card {
  constructor(name, link, templateSelector, { handleCardImageClick }) {
    this._name = name;
    this._link = link;
    this._handleCardImageClick = handleCardImageClick;
    this._templateSelector = templateSelector;
  }
  //--------------------------------
  _getTemplate() {
    const templateCard = document.querySelector(this._templateSelector);
    return templateCard.content.querySelector(".grid-card").cloneNode(true);
  }

  _setCardContent() {
    const cardImage = this._element.querySelector(".grid-card__image");
    const cardTitle = this._element.querySelector(".grid-card__paragraph");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
  }

  //-----------------------------
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

  clickCard() {
    this._handleCardImageClick(this._name, this._link);
  }
  toggleLike() {
    const likeButton = this._element.querySelector(
      ".grid-card__button-like-image"
    );
    likeButton.classList.toggle("grid-card__button-like_active");
  }
  remove() {
    this._element.remove();
  }

  render() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setCardContent();
    return this._element;
  }
}

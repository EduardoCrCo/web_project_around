export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    { handleCardImageClick, handleDeleteClick, handleLikeClick }
  ) {
    this._name = name;
    this._link = link;
    this._handleCardImageClick = handleCardImageClick;
    this._templateSelector = templateSelector;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
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

    if (this._ownerId !== this._currentUserId && trashButton) {
      trashButton.style.display = "none";
    }
    cardImage.addEventListener("click", () => {
      this.clickCard();
    });
    likeButton.addEventListener("click", () => {
      if (this._handleLikeClick) {
        this._handleLikeClick(this);
      }
    });

    trashButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
  }

  //-----------------------------
  clickCard() {
    this._handleCardImageClick(this._name, this._link);
  }

  updateLikes(isLiked) {
    const likeButton = this._element.querySelector(
      ".grid-card__button-like-image"
    );
    if (isLiked) {
      likeButton.classList.add("grid-card__button-like_active");
    } else {
      likeButton.classList.remove("grid-card__button-like_active");
    }
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  render() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setCardContent();
    return this._element;
  }
}

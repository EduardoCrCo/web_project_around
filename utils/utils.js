import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";

const places = [
  {
    link: "./images/cecut-air.jpg",
    alt: "centro cultural Tijuana",
    name: "Centro Cultural Tijuana",
  },
  {
    link: "./images/muelle-rosarito.jpg",
    alt: "Imagen playas de Rosarito",
    name: "Playas de Rosarito B. C.",
  },
  {
    link: "./images/la-rumorosa.JPG",
    alt: "Imagen la Rumorosa",
    name: "La Rumorosa B. C.",
  },
  {
    link: "./images/la-bufadora.JPG",
    alt: "Imagen la Bufadora",
    name: "La Bufadora, Ensenada B. C.",
  },
  {
    link: "./images/san-felipe.JPG",
    alt: "Imagen San Felipe",
    name: "San Felipe B. C.",
  },
  {
    link: "./images/tecate.PNG",
    alt: "Imagen Tecate",
    name: "Tecate B. C.",
  },
];
const gridContainer = document.querySelector(".grid");

const placeAddImageButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile-info__edit-button");
const profileImageEdit = document.querySelector(".profile-avatar__edit_icon");
const removeCard = document.querySelector(".grid-card__button-trash");
//--------------------------------------------------
const formPlace = document.querySelector(".form_place");
const formAvatar = document.querySelector(".form_avatar");
const formProfile = document.querySelector(".form_profile");
const formInputName = document.querySelector(".form__input-name");
const formInputAbout = document.querySelector(".form__input-about");

const popupWithImageObj = new PopupWithImage(".popup_image");
function createElement(name, link, handleDeleteClick) {
  const card = new Card(name, link, "#card-template", {
    handleCardImageClick: (nameCard, linkCard) => {
      popupWithImageObj.open(nameCard, linkCard);
    },
    handleDeleteClick: handleDeleteClick,
  });
  return card.render();
}

function handleDeleteClick(cardInstance, popupWithConfirmation) {
  popupWithConfirmation.setSubmitAction(() => {
    cardInstance.remove();
    popupWithConfirmation.close();
  });
  popupWithConfirmation.open();
}

export {
  gridContainer,
  places,
  createElement,
  handleDeleteClick,
  profileEditButton,
  placeAddImageButton,
  formPlace,
  formProfile,
  formInputName,
  formInputAbout,
  configForm,
  profileImageEdit,
  formAvatar,
  removeCard,
};

const configForm = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

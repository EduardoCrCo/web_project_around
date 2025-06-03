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

const popupWithImageObj = new PopupWithImage(".popup_image");
function createElement(name, link) {
  const card = new Card(name, link, "#card-template", {
    handleCardImageClick: (nameCard, linkCard) => {
      popupWithImageObj.open(nameCard, linkCard);
    },
  });
  return card.render();
}

const formPlace = document.querySelector(".form_place");

const formProfile = document.querySelector(".form_profile");
const profileName = document.querySelector(".profile-info__name");
const profileAbout = document.querySelector(".profile-info__about");

export {
  gridContainer,
  places,
  createElement,
  profileEditButton,
  placeAddImageButton,
  formPlace,
  formProfile,
  profileName,
  profileAbout,
  configForm,
};

const configForm = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

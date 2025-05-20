import Card from "../components/Card.js";

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
//ruta
const popupImage = document.querySelector(".popup_image");
const popupCloseButton = Array.from(
  document.querySelectorAll(".popup__close-button")
);

const popupOverlays = document.querySelectorAll(".popup__overlay");
const popupProfile = document.querySelector(".popup_profile");
const popupPlace = document.querySelector(".popup_place");
const placeAddImageButton = document.querySelector(".profile__add-button");
const profileEditButton = document.querySelector(".profile-info__edit-button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopups() {
  popupImage.classList.remove("popup_opened");
  popupProfile.classList.remove("popup_opened");
  popupPlace.classList.remove("popup_opened");
}

function openImagePopup(name, link) {
  openPopup(popupImage);
  popupImage.querySelector(".popup__image").src = link;
  popupImage.querySelector(".popup__image").alt = name;
  popupImage.querySelector(".popup__title").textContent = name;
}

function createElement(name, link) {
  const card = new Card(name, link, "#card-template");
  return card.render();
}

popupCloseButton.forEach((button) => {
  button.addEventListener("click", () => {
    closePopups();
  });
});

popupOverlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    const popup = overlay.closest(".popup");
    popup.classList.remove("popup_opened");
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    popup.classList.remove("popup_opened");
  }
});

const formPlace = document.querySelector(".form_place");
const formInputTitle = document.querySelector(".form__input_title");
const formInputImage = document.querySelector(".form__input_url-image");

const formProfile = document.querySelector(".form_profile");
const profileName = document.querySelector(".profile-info__name");
const profileAbout = document.querySelector(".profile-info__about");
const formInputName = document.querySelector(".form__input-name");
const formInputAbout = document.querySelector(".form__input-about");

export {
  openPopup,
  closePopups,
  openImagePopup,
  gridContainer,
  places,
  createElement,
  profileEditButton,
  placeAddImageButton,
  formPlace,
  formInputTitle,
  formInputImage,
  popupProfile,
  popupPlace,
  formProfile,
  profileName,
  profileAbout,
  formInputName,
  formInputAbout,
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

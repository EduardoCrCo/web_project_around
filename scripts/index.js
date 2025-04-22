const profileName = document.querySelector(".profile-info__name");
const profileAbout = document.querySelector(".profile-info__about");
const formInputName = document.querySelector(".form__input_name");
const formInputAbout = document.querySelector(".form__input_about");

const formProfile = document.querySelector(".form_profile");
const profileEditButton = document.querySelector(".profile-info__edit-button");
const popupProfile = document.querySelector(".popup_profile");

const popupCloseButton = document.querySelectorAll(".popup__close-button");

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  if (formInputName.value !== "" && formInputAbout.value !== "") {
    profileName.textContent = formInputName.value;
    profileAbout.textContent = formInputAbout.value;
    formProfile.reset();
    popupProfile.classList.remove("popup_opened");
  } else {
    alert("el campo tiene que ser obligatorio");
  }
});

const cardButtonLikeImage = document.querySelectorAll(
  ".grid-card__button-like-image_active"
);
cardButtonLikeImage.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("grid-card__button-like_active");
  });
});
// -----------------------------------------------------------------------------
const places = [
  {
    src: "./images/cecut-air.jpg",
    alt: "centro cultural Tijuana",
    description: "Centro Cultural Tijuana",
  },
  {
    src: "./images/muelle-rosarito.jpg",
    alt: "Imagen playas de Rosarito",
    description: "Playas de Rosarito B. C.",
  },
  {
    src: "./images/la-rumorosa.JPG",
    alt: "Imagen la Rumorosa",
    description: "La Rumorosa B. C.",
  },
  {
    src: "./images/la-bufadora.JPG",
    alt: "Imagen la Bufadora",
    description: "La Bufadora, Ensenada B. C.",
  },
  {
    src: "./images/san-felipe.JPG",
    alt: "Imagen San Felipe",
    description: "San Felipe B. C.",
  },
  {
    src: "./images/tecate.PNG",
    alt: "Imagen Tecate",
    description: "Tecate B. C.",
  },
];

const gridContainer = document.querySelector(".grid");
places.forEach((place) => {
  const card = createElement(place.description, place.src);
  gridContainer.prepend(card);
});
// -----------------------------------------------------------------------------
const cardImage = document.querySelector(".grid-card__image");
const cardTitle = document.querySelector(".grid-card__paragraph");
const formInputImage = document.querySelector(".form__input_url-image");
const formInputTitle = document.querySelector(".form__input_title");

const elements = document.querySelector(".grid-card");

const formPlace = document.querySelector(".form_place");
const placeAddImageButton = document.querySelector(".profile__add-button");
const popupPlace = document.querySelector(".popup_place");

const popupImage = document.querySelector(".popup_image");
const popupImageCloseButton = popupImage.querySelector(".popup__close-button");

placeAddImageButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_opened");
});

// -----------------------------------------------------------------------------
function createElement(name, link) {
  const cardNode = document
    .querySelector(".grid-card-template")
    .content.querySelector(".grid-card")
    .cloneNode(true);

  cardNode.querySelector(".grid-card__image").src = link;
  cardNode.querySelector(".grid-card__image").alt = name;
  cardNode.querySelector(".grid-card__paragraph").textContent = name;

  const likeButton = cardNode.querySelector(".grid-card__button-like-image");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("grid-card__button-like_active");
  });

  const trashButton = cardNode.querySelector(".grid-card__button-trash");
  trashButton.addEventListener("click", function () {
    cardNode.remove(".grid-card__button-trash");
  });

  const Image = cardNode.querySelector(".grid-card__image");
  Image.addEventListener("click", function () {
    popupImage.classList.add("popup_opened");
    popupImage.querySelector(".popup__image").src = link;
    popupImage.querySelector(".popup__image").alt = name;
    popupImage.querySelector(".popup__title").textContent = name;
  });
  return cardNode;
}

formPlace.addEventListener("submit", function (event) {
  event.preventDefault();
  if (formInputTitle.value !== "" && formInputImage.value !== "") {
    const card = createElement(formInputTitle.value, formInputImage.value);
    gridContainer.prepend(card);
    formPlace.reset();
    popupPlace.classList.remove("popup_opened");
  } else {
    alert("El campo tiene que ser obligatorio");
  }
});

popupCloseButton.forEach((button) => {
  button.addEventListener("click", function () {
    popupProfile.classList.remove("popup_opened");
    popupPlace.classList.remove("popup_opened");
    popupImage.classList.remove("popup_opened");
  });
});

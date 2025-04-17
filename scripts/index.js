const profileName = document.querySelector(".profile-info__name");
const profileAbout = document.querySelector(".profile-info__about");
const formInputName = document.querySelector(".form__input_name");
const formInputAbout = document.querySelector(".form__input_about");

const formProfile = document.querySelector(".form__profile");
const profileEditButton = document.querySelector(".profile-info__edit-button");
const popupProfile = document.querySelector(".popup_profile");

const popupCloseButton = document.querySelectorAll(".popup__close-button");
// const popupPlaceCloseButton = document.querySelector(
//   ".popup__place-close-button"
// );

const cardButtonLikeImage = document.querySelectorAll(
  ".grid-card__button-like-image_active"
);

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

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

// popupCloseButton.addEventListener("click", function () {
//   popupProfile.classList.remove("popup_opened");
//   popupPlace.classList.remove("popup_opened");
// });

cardButtonLikeImage.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("grid-card__button-like_active");
  });
});

const cardTitle = document.querySelector(".grid-card__paragraph");
const cardImage = document.querySelector(".grid-card__image");
const formInputTitle = document.querySelector(".form__input_title");
const formInputImage = document.querySelector(".form__input_url-image");

const formPlace = document.querySelector(".form__place");
const placeAddImageButton = document.querySelector(".profile__add-button");
const popupPlace = document.querySelector(".popup_place");

formPlace.addEventListener("submit", function (event) {
  event.preventDefault();
  if (formInputTitle.value !== "" && formInputImage.value !== "") {
    cardTitle.textContent = formInputTitle.value;
    cardImage.textContent = formInputImage.value;
    formPlace.reset();
    popupPlace.classList.remove("popup_opened");
  } else {
    alert("el campo tiene que ser obligatorio");
  }
});

placeAddImageButton.addEventListener("click", function () {
  popupPlace.classList.add("popup_opened");
});

popupCloseButton.forEach((button) => {
  button.addEventListener("click", function () {
    popupProfile.classList.remove("popup_opened");
    popupPlace.classList.remove("popup_opened");
  });
});

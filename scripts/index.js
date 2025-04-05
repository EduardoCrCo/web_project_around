const profileName = document.querySelector(".profile-info__name");
const profileAbout = document.querySelector(".profile-info__about");

const formInputName = document.querySelector(".form__input_name");
const formInputAbout = document.querySelector(".form__input_about");

const form = document.querySelector(".form");

const profileEditButton = document.querySelector(".profile-info__edit-button");
const popupProfile = document.querySelector(".popup_profile");

const popupCloseButton = document.querySelector(".popup__close-button");

const cardButtonLikeImage = document.querySelectorAll(
  ".grid-card__button-like-image_active"
);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (formInputName.value !== "" && formInputAbout.value !== "") {
    profileName.textContent = formInputName.value;
    profileAbout.textContent = formInputAbout.value;
    popupProfile.classList.remove("popup_opened");
  } else {
    alert("el campo tiene que ser obligatorio");
  }
});

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
});

popupCloseButton.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

cardButtonLikeImage.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("grid-card__button-like_active");
  });
});

import Card from "../components/Card.js";
import {
  places,
  gridContainer,
  createElement,
  profileEditButton,
  placeAddImageButton,
  openPopup,
  popupProfile,
  popupPlace,
  formPlace,
  formInputTitle,
  formInputImage,
  formProfile,
  profileName,
  profileAbout,
  formInputName,
  formInputAbout,
  configForm,
} from "../utils/utils.js";
import FormValidator from "../components/FormValidator.js";

places.forEach((place) => {
  gridContainer.prepend(createElement(place.name, place.link));
});

profileEditButton.addEventListener("click", () => {
  openPopup(popupProfile);
});

placeAddImageButton.addEventListener("click", () => {
  openPopup(popupPlace);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  if (formInputName.value !== "" && formInputAbout.value !== "") {
    profileName.textContent = formInputName.value;
    profileAbout.textContent = formInputAbout.value;
    formProfile.reset();
    popupProfile.classList.remove("popup_opened");
  }
});

formPlace.addEventListener("submit", (event) => {
  event.preventDefault();
  if (formInputTitle.value !== "" && formInputImage.value !== "") {
    const card = createElement(formInputTitle.value, formInputImage.value);
    gridContainer.prepend(card);
    formPlace.reset();
    popupPlace.classList.remove("popup_opened");
  }
});

const formValidatorProfile = new FormValidator(formProfile, configForm);
formValidatorProfile.enableValidation();

const formValidatorPlace = new FormValidator(formPlace, configForm);
formValidatorPlace.enableValidation();

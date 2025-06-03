import {
  places,
  gridContainer,
  createElement,
  profileEditButton,
  placeAddImageButton,
  formPlace,
  formProfile,
  profileName,
  profileAbout,
  configForm,
} from "../utils/utils.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const sectionCards = new Section(
  places,
  (place) => {
    return createElement(place.name, place.link);
  },
  ".grid"
);
sectionCards.renderItems();

profileEditButton.addEventListener("click", () => {
  popupAddProfile.open();
});
//--------------------------------------------------
placeAddImageButton.addEventListener("click", () => {
  popupAddCard.open();
});

const popupAddCard = new PopupWithForm(".popup_place", ({ name, link }) => {
  const newCard = createElement(name, link);
  gridContainer.prepend(newCard);
  popupAddCard.close();
});

const popupAddProfile = new PopupWithForm(
  ".popup_profile",
  ({ name, about }) => {
    profileName.textContent = name;
    profileAbout.textContent = about;
    popupAddProfile.close();
  }
);

const formValidatorProfile = new FormValidator(formProfile, configForm);
formValidatorProfile.enableValidation();

const formValidatorPlace = new FormValidator(formPlace, configForm);
formValidatorPlace.enableValidation();

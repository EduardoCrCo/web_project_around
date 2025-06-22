import {
  places,
  gridContainer,
  createElement,
  handleDeleteClick,
  profileEditButton,
  profileImageEdit,
  placeAddImageButton,
  formAvatar,
  formPlace,
  formProfile,
  formInputName,
  formInputAbout,
  configForm,
} from "../utils/utils.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const handleCardDelete = (cardInstance) =>
  handleDeleteClick(cardInstance, popupRemovePlaceCard);

const sectionCards = new Section(
  places,
  (place) => {
    return createElement(place.name, place.link, handleCardDelete);
  },
  ".grid"
);
sectionCards.renderItems();

const userInfo = new UserInfo(".profile-info__name", ".profile-info__about");
profileEditButton.addEventListener("click", () => {
  formInputName.value = userInfo.getUserInfo().name.trim();
  formInputAbout.value = userInfo.getUserInfo().about.trim();
  popupAddProfile.open();
});
placeAddImageButton.addEventListener("click", () => {
  popupAddCard.open();
});
profileImageEdit.addEventListener("click", () => {
  popupProfileImageEdit.open();
});

//--------------------------------------------------
const popupAddProfile = new PopupWithForm(
  ".popup_profile",
  ({ name, about }) => {
    userInfo.setUserInfo(name, about);
    popupAddProfile.close();
  }
);
const popupAddCard = new PopupWithForm(".popup_place", ({ name, link }) => {
  const newCard = createElement(name, link, handleCardDelete);
  gridContainer.prepend(newCard);
  popupAddCard.close();
});
const popupProfileImageEdit = new PopupWithForm(".popup_avatar", ({ link }) => {
  const profileAvatar = document.querySelector(".profile-avatar__image");
  console.log(link);
  profileAvatar.src = link;
  popupProfileImageEdit.close();
});
const popupRemovePlaceCard = new PopupWithConfirmation(".popup_remove-place");
popupRemovePlaceCard.setEventListeners();

//--------------------------------------------------
[formPlace, formAvatar, formProfile].forEach((form) => {
  new FormValidator(form, configForm).enableValidation();
});

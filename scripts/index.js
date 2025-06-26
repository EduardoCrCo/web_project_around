import {
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
import api from "../components/Api.js";

//-------------------------------------------------
const handleCardDelete = (cardInstance) => {
  handleDeleteClick(cardInstance, popupRemovePlaceCard);
};

const sectionCards = new Section(
  [],
  (place) => {
    const isLiked =
      typeof place.isLiked === "boolean"
        ? place.isLiked
        : Array.isArray(place.likes)
        ? place.likes.some((user) => user._id === window.currentUserId)
        : false;
    return createElement(
      place.name,
      place.link,
      handleCardDelete,
      place._id,
      (cardInstance) => {
        if (cardInstance._isLiked) {
          api
            .deleteLikeCard(cardInstance._id)
            .then((updatedCard) => {
              cardInstance.updateLikes(updatedCard.isLiked);
              cardInstance._isLiked = updatedCard.isLiked;
            })
            .catch((error) => {
              alert("No se pudo quitar el like de la tarjeta.");
              console.error(error);
            });
        } else {
          api
            .likeCard(cardInstance._id)
            .then((updatedCard) => {
              console.log("Estado de like recibido:", updatedCard.isLiked);
              cardInstance.updateLikes(updatedCard.isLiked);
              cardInstance._isLiked = updatedCard.isLiked;
            })
            .catch((error) => {
              alert("No se pudo dar like a la tarjeta.");
              console.error(error);
            });
        }
      },
      window.currentUserId,
      isLiked,
      place.owner
    );
  },
  ".grid"
);

const userInfo = new UserInfo(".profile-info__name", ".profile-info__about");
api
  .getAppInfo()
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    document.querySelector(".profile-avatar__image").src = userData.avatar;
    window.currentUserId = userData._id;

    sectionCards.setItems(cards);
    sectionCards.renderItems();
  })
  .catch((error) => {
    alert("No se pudo obtener la información de la aplicación.");
    console.error(error);
  });

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
    const submitButton = document.querySelector(".popup_profile .form__submit");
    const originalText = submitButton.textContent;
    submitButton.textContent = "Guardando...";

    api
      .updateUser(name, about)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
        popupAddProfile.close();
      })
      .catch((error) => {
        alert("No se pudo actualizar la información del usuario.");
        console.error(error);
      })
      .finally(() => {
        submitButton.textContent = originalText;
      });
  }
);
//--------------------------------------------------
const popupAddCard = new PopupWithForm(".popup_place", ({ name, link }) => {
  const submitButton = document.querySelector(".popup_place .form__submit");
  const originalText = submitButton.textContent;
  submitButton.textContent = "Guardando...";

  api
    .addCard(name, link)
    .then((card) => {
      const newCard = createElement(
        card.name,
        card.link,
        handleCardDelete,
        card._id,
        (cardInstance) => {
          api
            .likeCard(cardInstance._id)
            .then((updatedCard) => {
              cardInstance.updateLikes(updatedCard.isLiked);
            })
            .catch((error) => {
              alert("No se pudo dar like a la tarjeta");
              console.error(error);
            });
        }
      );
      gridContainer.prepend(newCard);
      popupAddCard.close();
    })
    .catch((error) => {
      alert(error);
    })
    .finally(() => {
      submitButton.textContent = originalText;
    });
});
//--------------------------------------------------
const popupProfileImageEdit = new PopupWithForm(".popup_avatar", ({ link }) => {
  const submitButton = document.querySelector(".popup_avatar .form__submit");
  const originalText = submitButton.textContent;
  submitButton.textContent = "Guardando...";

  api
    .updateAvatar(link)
    .then((data) => {
      const profileAvatar = document.querySelector(".profile-avatar__image");
      profileAvatar.src = data.avatar;
      popupProfileImageEdit.close();
    })
    .catch((error) => {
      alert("No se pudo actualizar el avatar.");
      console.error(error);
    })
    .finally(() => {
      submitButton.textContent = originalText;
    });
});

//--------------------------------------------------
const popupRemovePlaceCard = new PopupWithConfirmation(".popup_remove-place");
popupRemovePlaceCard.setEventListeners();

//--------------------------------------------------
[formPlace, formAvatar, formProfile].forEach((form) => {
  new FormValidator(form, configForm).enableValidation();
});

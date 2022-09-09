const initialCards = [
  {
    title: "Lago di Braies",
    url: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
  {
    title: "Vanoise National Park",
    url: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Latemar",
    url: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Bald Mountains",
    url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Lake Louise",
    url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Yosemite Valley",
    url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
];

const placesCardsSelector = ".places__cards";

const cardSettings = {
  templateSelector: "#card",
  cardSelector: ".card",
  likeButtonActiveClass: "card__like-button_active",
  likeButtonSelector: ".card__like-button",
  deleteButtonSelector: ".card__delete-button",
  imageContainerSelector: ".card__photo-container",
};

const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  inputValidClass: "form__input_valid",
  inputErrorClass: "form__input_error",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  errorClass: "form__error",
  errorSelector: ".form__error",
  errorActiveClass: "form__error_visible",
};

const popupSettings = {
  popupClass: "modal",
  visibleClass: "modal_visible",
  closeButtonSelector: ".modal__close-button",
  formSelector: ".form",
  inputFieldsSelector: ".form__input",
  submitButtonSelector: ".form__button",
};

const editPopupSettings = {
  __proto__: popupSettings,
  popupSelector: ".modal_type_edit",
};

const addPopupSettings = {
  __proto__: popupSettings,
  popupSelector: ".modal_type_add",
};

const cardPopupSettings = {
  __proto__: popupSettings,
  popupSelector: ".modal_type_card",
};

const userInfoSettings = {
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
};

export {
  initialCards,
  cardSettings,
  validationSettings,
  popupSettings,
  editPopupSettings,
  addPopupSettings,
  cardPopupSettings,
  userInfoSettings,
  placesCardsSelector,
};

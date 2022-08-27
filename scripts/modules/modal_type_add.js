import { openModal, closeModal, resetValidation } from "./utils.js";
import { renderCard } from "../index.js";

const addCardModal = document.querySelector(".modal_type_add");
const formWindowTypeAdd = document.querySelector(".modal__window_type_add");
const formTypeAdd = document.querySelector(".form_type_add");
const addButton = document.querySelector(".profile__add-button");

/**
 * 1. creates a card object
 * 2. creates a card element
 * 3. closes modal window on form submit
 * 4. resets form
 * @param {Event} evt - Submit event
 */
function handleAddSubmit(evt, cardContainer) {
  //prevents default submit handling
  evt.preventDefault();

  /* 1.
  Creates card abjects with name and link properties according 
  to user input */
  const newCardObj = {
    name: formWindowTypeAdd.querySelector(".form__input_type_title").value,
    link: formWindowTypeAdd.querySelector(".form__input_type_url").value,
  };

  renderCard(newCardObj, cardContainer);

  /* 3.
  closes modal after card is added */
  closeModal(addCardModal);

  /* 4.
  resets form */
  formTypeAdd.reset();
}

function addAddEventListeners(formValidator, cardContainer) {
  // Adds event listeners for the add button and the close button in the modal
  addButton.addEventListener("click", () => {
    openModal(addCardModal);
    resetValidation(formValidator);
  });

  // Specifies submit handler for the modal form
  formWindowTypeAdd.addEventListener("submit", (e) =>
    handleAddSubmit(e, cardContainer)
  );
}

export { addAddEventListeners };

const cardModal = document.querySelector(".modal_type_card");

// Queries the card modal close button and adds the event listener
const cardModalCloseButton = cardModal.querySelector(".modal__close-button_for_card-modal");
cardModalCloseButton.addEventListener("click", () => closeModal(cardModal));


// Gets the values for the card modal depending on which picture is clicked
function getCardModalValues(evt) {
  // Gets relevant values from the card's elements to assign them to the modal window's elements
  const srcValue = evt.target.closest(".card__photo").getAttribute("src");
  const captionText = evt.target.parentElement.nextElementSibling.firstElementChild.textContent;

  // Assigns the values to their corresponding elements in the modal window
  const cardModalPhoto = cardModal.querySelector(".card-modal__photo");
  cardModalPhoto.setAttribute("src", srcValue);
  cardModalPhoto.setAttribute("alt", `Photo of ${captionText}`)

  const cardModalPhotoCaption = cardModal.querySelector(".card-modal__photo-caption");
  cardModalPhotoCaption.textContent = captionText;
};


// Renders the card modal window with the appropiate values
const renderCardModal = evt => {
  // Gets appropiate values
  getCardModalValues(evt)
  // Calls the openModal function from modal_functions.js to toggle modal window visibility
  openModal(cardModal)
};

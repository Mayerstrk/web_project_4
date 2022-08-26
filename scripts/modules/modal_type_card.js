import { openModal } from "./utils.js";

const cardModal = document.querySelector(".modal_type_card");
const cardModalPhoto = cardModal.querySelector(".card-modal__photo");
const cardModalPhotoCaption = cardModal.querySelector(".card-modal__photo-caption");

/** 
 * Gets the values for the card modal depending on which picture is clicked 
 * @param {Element} cardPhoto - cardElement that was clicked
 */
function getCardModalValues(cardObj) {
  const modalValues = {
    sourceValue: cardPhoto.getAttribute("src"),
    captionText: cardPhoto.parentElement.nextElementSibling.firstElementChild.textContent,
  };

  return modalValues
}

function setCardModalValues(cardObj) {
  console.log(cardObj)
  const captionText = cardObj.name;
  const sourceValue = cardObj.link;
  console.log(captionText);
  console.log(sourceValue);
  
  cardModalPhoto.setAttribute("src", sourceValue);
  cardModalPhoto.setAttribute("alt", `Photo of ${captionText}`);
  cardModalPhotoCaption.textContent = captionText;
}

function renderCardModal(cardObj) {
  // 1 Gets appropiate values
  setCardModalValues(cardObj, cardModal)
  // 2 Calls the openModal function from modal_functions.js to toggle modal window visibility
  openModal(cardModal)
};

export { renderCardModal };

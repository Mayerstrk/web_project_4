import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor({ settings, handleSubmit }) {
    super(settings);
    this._form = this._popupElement.querySelector(settings.formSelector);
    this._inputFields = [
      ...this._form.querySelectorAll(settings.inputFieldsSelector),
    ];
    this._submitButton = this._form.querySelector(
      settings.submitButtonSelector
    );
    this.buttonText = this._submitButton.textContent;
    this._onSubmit = handleSubmit;
  }

  setButtonText = (text) => {
    this._submitButton.textContent = text
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    this.setButtonText("Saving...");
    this._onSubmit(this._getInputValues());
  };

  _getInputValues() {
    const inputValues = {};
    this._inputFields.forEach((field) => {
      inputValues[field.name] = field.value;
    });

    return inputValues;
  }

  setInputValues(data) {
    this._inputFields.forEach((field) => {
      field.value = data[field.name];
    });
  }

  setEventListeners = () => {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleSubmit);
  };

  removeEventListeners = () => {
    super.removeEventListeners();
    this._form.removeEventListener("submit", this._handleSubmit);
  };

  close() {
    super.close();
    this._form.reset();
  }
}

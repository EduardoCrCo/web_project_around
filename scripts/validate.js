const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  configForm
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(configForm.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configForm.errorClass);
};

const hideInputError = (formElement, inputElement, configForm) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(configForm.inputErrorClass);
  errorElement.classList.remove(configForm.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configForm
    );
  } else {
    hideInputError(formElement, inputElement, configForm);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, configForm) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(configForm.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(configForm.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, configForm) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configForm.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    configForm.submitButtonSelector
  );

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, configForm);
    });
  });
};

const enableValidation = (configForm) => {
  const formList = Array.from(
    document.querySelectorAll(configForm.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, configForm);
  });
};

const configForm = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};
enableValidation(configForm);

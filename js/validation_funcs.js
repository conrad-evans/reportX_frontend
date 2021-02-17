function checkFields(listOfFields) {
  listOfFields.forEach((field) => {
    if ((field.value = "")) {
      showError(field);
    } else {
      showSuccess(field);
    }
  });
}

function showError(field) {
  const form_control = field.parentElement;
  form_control.className = "form-control error";
}

function showSuccess(field) {
  const form_control = field.parentElement;
  form_control.className = "form-control success";
}

function checkPasswordLength(password, min, max) {
  if ((password.value.length < min) && (password.value.length > max)) {
    showError(field);
  } else {
    showSuccess(field);
  }
}

function checkPasswordsMatch(password1, password2) {
  if (password1 === password2) {
    showSuccess(password1);
    showSuccess(password2);
  } else {
    showError(password1);
    showError(password2);
  }
}

function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email);
  }
}

export { checkEmail, checkFields, checkPasswordLength, checkPasswordsMatch };

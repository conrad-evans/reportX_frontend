export default function checkFields(listOfFields) {
  listOfFields.forEach((field) => {
    if (field.value === "") {
      showError(field, `${capitalizeFirstChar(field)} required`);
    } else {
      showSuccess(field);
    }
  });
}

function capitalizeFirstChar(string) {
  if (string.id === "confirm-password") {
    string.id = "confirm password";
  }
  return string.id.charAt(0).toUpperCase() + string.id.slice(1);
}

function showError(field, message) {
  const form_control = field.parentElement;
  form_control.className = "form-control error";
  const small = form_control.querySelector("small");
  small.innerText = message;
}

function showSuccess(field) {
  const form_control = field.parentElement;
  form_control.className = "form-control success";
}

function checkPasswordLength(password, min, max) {
  if (password.value.length < min) {
    showError(password, `Password must be at least ${min} characters`);
  } else if (password.value.length > max) {
    showError(password, `Password must be less than ${max} charaters`);
  } else {
    showSuccess(password);
  }
}

function checkPasswordsMatch(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password1, "Passwords did not match");
    showError(password2, "Passwords did not match");
  } else {
    showSuccess(password1);
    showSuccess(password2);
  }
}

function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
  } else {
    showError(email, "Invalid email");
  }
}

function validateFields(fields) {
  const error_fields = fields.filter(
    (field) => field.parentElement.className !== "form-control success"
  );
  if (error_fields.length === 0) {
    return true;
  }
  return false;
}

export { validateFields, checkEmail, checkPasswordLength, checkPasswordsMatch };

import checkFields, {
  checkEmail,
  checkPasswordsMatch,
  checkPasswordLength,
  validateFields,
} from "./validation_funcs.js";

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(password.value.length);

  checkEmail(email);
  checkPasswordLength(password, 8, 30);
  checkPasswordsMatch(password, confirmPassword);
  checkFields([email, password, confirmPassword]);

  if (validateFields([email, password, confirmPassword])) {
    console.log("sending data....");
  }
});

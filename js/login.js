import checkFields, { checkEmail, validateFields } from "./validation_funcs.js";

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail(email);
  checkFields([email, password]);

  if (validateFields([email, password])) {
    console.log("sending data....");
  }
});

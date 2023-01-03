import uniqueString from "unique-string";

const button = document.querySelector("button");

const generateCode = function () {
  document.querySelector(".string").innerHTML = uniqueString();
};

button.addEventListener("click", generateCode);

import isEmail from "validator/lib/isEmail";
import tripleMe from "./tripleMe";
// const validator = require("validator");
console.log(isEmail("bharath@gmail.com"));
console.log(tripleMe(3));

document.querySelector("h1").innerText = "Hello world";

if (module.hot) {
  module.hot.accept();
}

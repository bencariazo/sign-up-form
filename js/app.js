const form = document.querySelector("#form");
const firstName = document.querySelector("#first-name");
const divFirstName = document.querySelector(".div-first-name");
const lastName = document.querySelector("#last-name");
const divLastName = document.querySelector(".div-last-name")
const email = document.querySelector("#email");
const divEmail = document.querySelector(".div-email");
const phoneNumber = document.querySelector("#phone");
const divPhone = document.querySelector(".div-phone");
const password = document.querySelector("#password");
const divPassword = document.querySelector(".div-password");
const confirmPassword = document.querySelector("#confirm-password");
const divConfirmPassword = document.querySelector(".div-confirm-password");
const divInput = document.querySelectorAll("[class^=div]")

form.noValidate = true;
const addErrorMessage = document.createElement("div");
addErrorMessage.classList.add("error")


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

function addErrorDiv() {
    divInput.forEach(el => {
        el.appendChild(addErrorMessage.cloneNode(true))
    });
}

addErrorDiv();

function validateFirstName() {
    const firstNameError = document.querySelector(".div-first-name > .error");
    if(firstName.value.trim() === "") {
        firstNameError.textContent = "First Name is required"
        return false;
    } else if (/[0-9]/.test(firstName.value)){
        firstNameError.textContent = "Digits are not allowed"
        return false;
    } else if (/[a-z]/.test(firstName.value[0])){
        firstNameError.textContent = "Capitalize first letter"
        return false;
    }else {
        firstNameError.textContent = "";
        return true
    }
}


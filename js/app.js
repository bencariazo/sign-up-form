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

function validateLastName(){
    const lastNameError = document.querySelector(".div-last-name > .error");
    if(lastName.value.trim() === "") {
        lastNameError.textContent = "Last Name is required"
        return false;
    } else if (/[0-9]/.test(lastName.value)){
        lastNameError.textContent = "Digits are not allowed"
        return false;
    } else if (/[a-z]/.test(lastName.value[0])){
        lastNameError.textContent = "Capitalize first letter"
        return false;
    }else {
        lastNameError.textContent = "";
        return true
    }
}

function validateEmail(){
    const emailError = document.querySelector(".div-email > .error");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email.value.trim() === ""){
        emailError.textContent = "Email is required";
        return false;
    } else if(!emailRegex.test(email.value)){
        emailError.textContent = "It is not a valid email";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

function validatePhone(){
    // +123-456-789-1234 for reference
    const phoneRegEx = /^\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$/;
    const phoneError = document.querySelector(".div-phone > .error");
    if(phoneNumber.value.trim() === ""){
        phoneError.textContent = "Phone is required";
        return false;
    } else if(!phoneRegEx.test(phoneNumber.value)) {
        console.log(phoneNumber.value);
        console.log(phoneRegEx.test(phoneNumber.value))
        phoneError.textContent = "Not a valid phone number"
    } else {
        phoneError.textContent = "";
        return true;
    }
}

function validatePassword(){
    const passwordError = document.querySelector(".div-password > .error");
    if(password.value.trim() === ""){
        passwordError.textContent = "Password is required";
        return false;
    } 
    if (!/(?=.*[0-9])/.test(password.value)) {
        passwordError.textContent = "Password must contain at least one digit (0-9)";
        return false;
    }
    if (!/(?=.*[a-z])/.test(password.value)) {
        passwordError.textContent = "Password must contain at least one lowercase letter (a-z)";
        return false;
    }
    if (!/(?=.*[A-Z])/.test(password.value)) {
        passwordError.textContent = "Password must contain at least one uppercase letter (A-Z)";
        return false;
    }
    if (!/(?=.*\W)/.test(password.value)) {
        passwordError.textContent = "Password must contain at least one special character";
        return false;
    }
    if (/.*\s/.test(password.value)) {
        passwordError.textContent = "Password cannot contain whitespace";
        return false;
    }
    if (password.value.length < 8 || password.value.length > 16) {
        passwordError.textContent = "Password length must be between 8 and 16 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

function validateConfirmPassword(){
    const confirmPasswordError = document.querySelector('.div-confirm-password > .error')
    if(confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Confirm Password is required"
    }
    if(confirmPassword.value !== password.value){
        confirmPasswordError.textContent = "It doesn't match with Password"
        return false;
    }
    password.textContent = "";
    return true;
}

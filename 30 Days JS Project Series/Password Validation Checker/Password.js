// codewithharsh_
let userInput = document.querySelector(".container .input-box input");
let eye = document.querySelector(".container .input-box .fa-eye");
let eyeSlash = document.querySelector(".container .input-box .fa-eye-slash");
let minLength = document.querySelector(".password-length");
let lowercase = document.querySelector(".lowercase");
let uppercase = document.querySelector(".uppercase");
let digit = document.querySelector(".number");
let specialChar = document.querySelector(".special-character");

// Function to toggle password visibility 
let passwordToggle = () => {
        if (userInput.type == "password") {
                // If input type is "password" change it to "text" so characters are visible 
                userInput.type = "text";
                eye.style.display = "none"; // hide the "eye" icon
                eyeSlash.style.display = "block"; // show the "eye slash" icon
        } else {
                // If input type is "text", change it back to "password"
                userInput.type = "password";
                eye.style.display = "block"; // show the "eye" icon
                eyeSlash.style.display = "none"; // hide the "eye slash" icon 
        }
}

// Function to check password strength 
let checkPassword = () => {
        let value = userInput.value; // current password value

        // Define regex patterns for password requirements 
        const passLength = new RegExp('(?=.{8,})'); // Atleast 8 characters
        const lower = new RegExp('(?=.*[a-z])'); // Atleast one lowercase letter
        const upper = new RegExp('(?=.*[A-Z])'); // Atleast one uppercase letter
        const number = new RegExp('(?=.*[0-9])'); // Atleast one number
        const special = new RegExp('(?=.[!@#$%^&])'); // Atleast one special character

        // Check each requirement and toggle the "valid" class accordingly 
        if (passLength.test(value)) {
                minLength.classList.add("valid");
        } else {
                minLength.classList.remove("valid");
        }

        if (lower.test(value)) {
                lowercase.classList.add("valid");
        } else {
                lowercase.classList.remove("valid");
        }

        if (upper.test(value)) {
                uppercase.classList.add("valid");
        } else {
                uppercase.classList.remove("valid");
        }

        if (number.test(value)) {
                digit.classList.add("valid");
        } else {
                digit.classList.remove("valid");
        }

        if (special.test(value)) {
                specialChar.classList.add("valid");
        } else {
                specialChar.classList.remove("valid");
        }
}

// Run password strength check every time the user types in the input field 
userInput.addEventListener("input", checkPassword);

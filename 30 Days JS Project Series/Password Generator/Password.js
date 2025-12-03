// Doxa Dev 
let container = document.querySelector(".container");
let passLength = container.querySelector(".password-length input");
let options = container.querySelectorAll(".checkboxes-box div input");
let generateBtn = container.querySelector(".generate-btn");
let password = container.querySelector(".password-box .password");
let copyBtn = container.querySelector(".password-box .copy-btn");
let copiedMsg = copyBtn.querySelector("span");
let copiedIcon = copyBtn.querySelector("i");

// Function to update password length display 
let getPassLengthValue =() =>{
    // Update the length value display with the current input value
    document.querySelector(".length-value").innerHTML = passLength.value;
}

// Object containing character sets for password generation 
const characters = {
    // Object keys must always match the IDs of checkboxes
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Uppercase letters
    lowercase: "abcdefghijklmnopqrstuvwxyz", // Lowercase letters
    numbers: "0123456789", // Numbers
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=" // Special symbols
}

// Function to generate a strong password based on selected options 
let getPassword =() =>{
    let strongPassword = ""; // String to store selected character sets
    let randomPassword = ""; // String to store generated password
    let passWordLength = passLength.value; // Desired password length

    // Iterate through checkbox options and add selected character sets to strongPassword
    options.forEach((option) =>{
        if(option.checked){
            // Append the character set correspoding to the checked option
            strongPassword += characters[option.id];
        }
    })

    // Generate a random password by selecting characters from strongPassword
    for(let i = 0; i < passWordLength; i++){
        // Select a random character from strongPassword and append to randomPassword
        randomPassword += strongPassword[Math.floor(Math.random() * strongPassword.length)];
    }

    // Display the generated password 
    password.innerHTML = randomPassword;
}

// Function to copy the generated password to clipboard and display "Copied!" message 
let copyPassword =() =>{
    // Use the clipboard API to write the password text to the clipboard 
    navigator.clipboard.writeText(password.textContent);

    // Hide the copy icon and display the "Copied!" message 
    copiedIcon.style.display = "none";
    copiedMsg.style.display = "block";

    // Revert the display after 1 second 
    setTimeout(() =>{
        copiedIcon.style.display = "block";
        copiedMsg.style.display = "none";
    }, 1000);
}


// Add event listener to copy button 
copyBtn.addEventListener("click", copyPassword);
// Generate password on button click
generateBtn.addEventListener("click", getPassword);

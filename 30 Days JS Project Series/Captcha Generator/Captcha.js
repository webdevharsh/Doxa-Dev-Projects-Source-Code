// Doxa Dev 
let container = document.querySelector('.container');
let captcha = container.querySelector(".captcha-box h3");
let userInput = container.querySelector(".userInput");
let checkBtn = container.querySelector(".check-btn");
let generateBtn = container.querySelector(".generate-btn");
let message = container.querySelector(".message");

// Array of characters used to generate captcha 
let captchaCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function to generate captcha 
let generateCaptcha = () => {
        captcha.innerHTML = ""; // clear previous captcha
        // Generate random captcha characters 
        for (let i = 0; i < 6; i++) {
                let randomCaptcha = captchaCharacter[Math.floor(Math.random() * captchaCharacter.length)];
                captcha.innerHTML += ' ' + randomCaptcha;
        }
        message.style.display = "none"; // hide message
        userInput.value = ""; // Clear input
}

// Function to check user input 
let check = () => {
        let userCaptcha = userInput.value;
        let rightCaptcha = captcha.innerHTML;
        if (userCaptcha.replaceAll(' ', '') == rightCaptcha.replaceAll(' ', '')) {
                // If captcha matches, display success message
                message.style.display = "block";
                message.innerHTML = '<i class="fa-solid fa-circle-check"></i> Captcha matched. You are not a robot';
                message.classList.add("correct");
                message.classList.remove("incorrect");
        } else {
                // If captcha does'nt match, display error message 
                message.style.display = "block";
                message.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Captcha not matched. Please try again!';
                message.classList.add("incorrect");
                message.classList.remove("correct");
        }
}

// Add event listener to check button
checkBtn.addEventListener("click", () => {
        if (userInput.value.trim() != "") {
                check(); // Check captcha if user input is not empty
        } else {
                alert("Please enter captcha!"); // Prompt user to enter captcha
        }
})

// Geenrate initial captcha 
generateCaptcha();

// Add event listener to generate button 
generateBtn.addEventListener("click", generateCaptcha);

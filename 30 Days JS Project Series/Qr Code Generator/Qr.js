// Doxa Dev
let qrCodeBox = document.querySelector(".container .qr-code-box");
let qrCode = document.querySelector(".container .qr-code-box img");
let userInput = document.querySelector(".container .user-input");
let generateBtn = document.querySelector(".container .generate-btn");

let generateQr =() =>{
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput.value}`;
    qrCode.src = url;
    qrCodeBox.classList.add("active");
}

generateBtn.addEventListener("click", ()=>{
    if(userInput.value != ""){
        generateQr();
    }
})
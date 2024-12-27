// Doxa Dev
let container = document.querySelector(".container");

// Select the user input field
let userInput = container.querySelector(".userInput");

// Select the generate button element
let generateBtn = container.querySelector(".generate-btn");

// Select the barcode box container
let barcodeBox = container.querySelector(".barcode-box");

// Select the barcode element
let barcode = barcodeBox.querySelector("#barcode");

// Define a function to generate the barcode
let generateBarcode =() =>{
    // Add class "active" to the barcode box
    barcodeBox.classList.add("active");

    // Generate the barcode using jsBarcode library
    JsBarcode("#barcode", userInput.value, {
        lineColor: "#000000",
        background: "#FFFFFF",
      });
}

// Add event listener to the generate button
generateBtn.addEventListener("click", () =>{
    // Check if user input is not empty
    if(userInput.value != ""){
        // Call the generateBarcode function
        generateBarcode();
    }
})
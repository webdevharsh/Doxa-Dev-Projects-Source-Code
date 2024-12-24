// codewithharsh_
// Select the input field where the calculation result will be displayed
let result = document.querySelector(".container .result-box input");

// Select all button elements
let btns = document.querySelectorAll(".container .btns-box .btn");

// Select individual button elements for evaluation, clearing, and deletion
let evalBtn = document.querySelector(".container .btns-box .eval-btn");
let clrBtn = document.querySelector(".container .btns-box .clr-btn");
let delBtn = document.querySelector(".container .btns-box .delete-btn");

// Define a function to get the value of a button when clicked
let getValue =(e) =>{
    // Get the text content of the button
    let btnText = e.target.innerHTML;

    // Replace "x" with "*" and "÷" with "/" for evaluation
    if(btnText == "x"){
        btnText = "*";
    }
    if(btnText == "÷"){
        btnText = "/";
    }

    // Append the button text to the result input field
    result.value += btnText;
}

// Add event listener to the evaluation button
evalBtn.addEventListener("click", () =>{
    try{
        // Evaluate the expression in the result input field and display the result
        result.value = eval(result.value);
    } catch (err) {
        // display an error message if the evaluation fails
        result.value = "Error";
    }
})

// Add event listener to the clear button
clrBtn.addEventListener("click", () =>{
    // Clear the result input field
    result.value = "";
})

// Add event listener to the delete button
delBtn.addEventListener("click", () =>{
    // Remove the last character from the result input field
    result.value = result.value.substr(0, result.value.length - 1);
})

// Add event listener to each button element
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", getValue);
}
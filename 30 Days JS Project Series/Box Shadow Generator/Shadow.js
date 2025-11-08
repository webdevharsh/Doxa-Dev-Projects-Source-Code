// Doxa Dev 
let container = document.querySelector(".container");
let boxColor = container.querySelector(".boxColor");
let shadowColor = container.querySelector(".shadowColor");
let outputBox = container.querySelector(".outputBox");
let horizontalRange = container.querySelector(".horizontal input");
let verticalRange = container.querySelector(".vertical input");
let blurRange = container.querySelector(".blur input");
let spreadRange = container.querySelector(".spread input");
let inset = container.querySelector("#inset-checkbox");
let shadowCSS = container.querySelector(".code-box span");

// Update output box background color when box color input changes
boxColor.addEventListener("input", () =>{
    outputBox.style.backgroundColor = boxColor.value;
})

// Function to generate box shadow 
let generateShadow =(event) =>{
    // Get values from range inputs 
    let horizontal = horizontalRange.value;
    let vertical = verticalRange.value;
    let blur = blurRange.value; 
    let spread = spreadRange.value;

    // Construct box shadow CSS string 
    let boxshadow = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${shadowColor.value} ${inset.checked ? "inset" : ""}`;
    // Apply box shadow to output box 
    outputBox.style.boxShadow = boxshadow;

    // Display generated box shadow CSS code 
    shadowCSS.innerHTML = "box-shadow:" + boxshadow; 
}

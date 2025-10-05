// Doxa Dev
let container = document.querySelector(".container");
let amountInput = container.querySelector(".principal-amount input");
let interestInput = container.querySelector(".rate-of-interest input");
let timePeriodInput = container.querySelector(".time-period input");
let PrincAmountTxt = document.querySelector(".result-box .princ-amount")
let interestResultTxt = document.querySelector(".result-box .ttl-interest");
let TtlAmountResultTxt = document.querySelector(".result-box .ttl-amount");
let calculateBtn = container.querySelector(".calculate-btn");

// Function to calculate simple interest 
let calculate =() =>{
    // Get input values and convert to numbers
    let p = Number(amountInput.value); // Principal amount
    let r = Number(interestInput.value) // Interest rate
    let t = Number(timePeriodInput.value); // Time period

    // Calculate simple interest 
    let simpleInterest = (p * r * t) / 100;

    // Calculate total amount
    let amount = p + simpleInterest;

    // Display results
    PrincAmountTxt.innerHTML = `Principal Amount: <strong>$${p.toFixed(2)}</strong>`;
    interestResultTxt.innerHTML = `Total interest: <strong>$${simpleInterest.toFixed(2)}</strong>`;
    TtlAmountResultTxt.innerHTML = `Total amount: <strong>$${amount.toFixed(2)}</strong>`;
}

// Event listener for calculate button 
calculateBtn.addEventListener("click", () =>{
    // Check if all the fields are filled 
    if(amountInput.value != "" && interestInput.value != "" && timePeriodInput.value != ""){
        calculate();
    }else{
        alert("Input fields can't be empty!");
    }
})

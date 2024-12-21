// Doxa Dev
// Select the container element and its child input elements
let container = document.querySelector(".container");
let dateInput = container.querySelector(".details .date input");
let monthInput = container.querySelector(".details .month input");
let yearInput = container.querySelector(".details .year input");
let submitBtn = container.querySelector(".submit-btn");
let resultBox = container.querySelector(".result");

// Function to calculate and display user's age
let showResult =() =>{
            // Get user input values
            let d1 = dateInput.value;
            let m1 = monthInput.value;
            let y1 = yearInput.value;

            // Get current date
            let date = new Date();
            let d2 = date.getDate();
            let m2 = 1 + date.getMonth(); // Adjust month value (0-11 to 1-12)
            let y2 = date.getFullYear(); // Get current year 

            // Define month lengths for calculation
            let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            // Adjust dates for calculation
            if(d1 > d2){
                d2 = d2 + month[m2 - 1];
                m2 = m2 - 1;
            }
            if(m1 > m2){
                m2 = m2 + 12;
                y2 = y2 - 1;
            }

            // Calculate age
            let d = d2 - d1;
            let m = m2 - m1;
            let y = y2 - y1;

            // display result
            resultBox.style.display = "block";
            resultBox.innerHTML = `Your age is <span>${y}</span> Years <span>${m}</span> Months <span>${d}</span> Days`;
}

// Add event listener to the submit button, and call the result function if no fields are left empty
submitBtn.addEventListener("click", ()=>{
    if(dateInput.value != "" && monthInput.value != "" && yearInput.value != ""){
        showResult();
    }else{
        alert("Please fill all the required fields!");
    }
})
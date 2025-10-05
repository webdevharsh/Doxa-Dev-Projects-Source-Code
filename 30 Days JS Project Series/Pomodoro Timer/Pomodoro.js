// Doxa Dev
let allModBtn = document.querySelectorAll(".container .mode-btns-box button");
let focusBtn = document.querySelector(".container .mode-btns-box .focus-btn");
let shortBreakBtn = document.querySelector(".container .mode-btns-box .short-break-btn");
let longBreakBtn = document.querySelector(".container .mode-btns-box .long-break-btn");
let startBtn = document.querySelector(".container .btns .start-btn"); 
let pauseBtn = document.querySelector(".container .btns .pause-btn"); 
let resetBtn = document.querySelector(".container .btns .reset-btn"); 
let timer = document.querySelector(".container .timer");

let setIn; // stores setInterval reference
let paused = true; // indicates if the timer is paused
let minCount = 24; // minutes counter (default focus mode = 25mins, but shown as 24 + 1 later)
let count = 59; // seconds counter (starts at 59)

// Initialize timer display to "25:00"
timer.innerHTML = `${minCount + 1}:00`;

// Helper function to add leading zero to numbers < 10 (e.g., 9 - 09)
let appendZero =(value) =>{
    value = value < 10 ? "0" + value : value;
    return value;
}

// Function to remove active highlight from all buttons
let removeBtnFocus =() =>{
    allModBtn.forEach((button) =>{
        button.classList.remove("btn-focus");
    })
}

// Focus mode button 
focusBtn.addEventListener("click", () =>{
    removeBtnFocus(); // remove highlight from other buttons
    focusBtn.classList.add("btn-focus"); // highlight button
    pauseTimer(); // stop timer if running
    count = 59; 
    minCount = 24;
    timer.innerHTML = `${minCount + 1}:00`; // reset to 5:00
})

// Short break mode button 
shortBreakBtn.addEventListener("click", () =>{
    removeBtnFocus(); // remove highlight from other buttons
    shortBreakBtn.classList.add("btn-focus"); // highlight button
    pauseTimer(); // stop timer if running
    count = 59; 
    minCount = 4;
    timer.innerHTML = `${minCount + 1}:00`; // reset to 5:00
})

// Long break mode button 
longBreakBtn.addEventListener("click", () =>{
    removeBtnFocus(); // remove highlight from other buttons
    longBreakBtn.classList.add("btn-focus"); // highlight button
    pauseTimer(); // stop timer if running
    count = 59; 
    minCount = 14;
    timer.innerHTML = `${minCount + 1}:00`; // reset to 5:00
})

// Reset button functionality 
resetBtn.addEventListener("click", () =>{
    pauseTimer(); //pause any running timer
    count = 59; // reset seconds to 59
    // Update timer display 
    timer.innerHTML = `${minCount + 1}:00`; 
})

// Pause button functionality 
pauseBtn.addEventListener("click", (pauseTimer = () =>{
    paused = true; // mark as paused
    clearInterval(setIn); // stop interval
    pauseBtn.style.display = "none"; // hide pause button
    resetBtn.style.display = "none"; // hide reset button
    startBtn.style.display = "block"; // show start button
}));

// Start button functionality 
startBtn.addEventListener("click", () =>{
    pauseBtn.style.display = "block"; // show pause button
    resetBtn.style.display = "block"; // show reset button
    startBtn.style.display = "none"; // hide start button

    if(paused){ // only run if currently paused
        paused = false;
        // Update timer immediately 
        timer.innerHTML = `${appendZero(minCount)}:${appendZero(count)}`;

        // Run countdown every second
        setIn = setInterval(() =>{
            count--; // decrease seconds
            timer.innerHTML = `${appendZero(minCount)}:${appendZero(count)}`;

            // When seconds hit 0
            if(count == 0){
                if(minCount != 0){
                    minCount--; // reduce minutes
                    count = 60; // reduce seconds
                }else{
                    clearInterval(setIn); // stop timer when it hits 00:00
                }
            }
        }, 1000);
    }
})

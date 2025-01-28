// Doxa Dev
// Select the start/stop and reset buttons
let container = document.querySelector(".container");
let startStopBtn = container.querySelector(".start-stop-btn");
let resetBtn = container.querySelector(".reset-btn");

// Initialize timer varibales
let hour = min = sec = ms = "0" + 0;

// Initialize the startTimer variable
let startTimer;

// Function to start the stopwatch
let startStopwatch =() =>{
    // Set the interval to update the timer every 10ms
    startTimer = setInterval(() =>{
        // Increment the milliseconds
        ms++; 

        // Add leading zero if milliseconds is less than 10
        ms = ms < 10 ? "0" + ms : ms;

        // If milliseconds reaches 100, increment seconds
        if(ms == 100){
            sec++;
            ms = "0" + 0;
            sec = sec < 10 ? "0" + sec : sec;
        }

        // If seconds reaches 60, increment minutes
        if(sec == 60){
            min++;
            sec = "0" + 0;
            min = min < 10 ? "0" + min : min;
        }

        // If minutes reaches 60, increment hours
        if(min == 60){
            hour++;
            min = "0" + 0;
            hour = hour < 10 ? "0" + hour : hour;
        }

        // Update the timer display
        putValue();

        // Update the start/stop button text
        startStopBtn.innerHTML = "Stop";

    }, 10);
}

// Function to stop the stopwatch
let stopStopwatch =() =>{
    // Clear the interval
    clearInterval(startTimer);

    // Update the start/stop button text
    startStopBtn.innerHTML = "Start";
}

// Add event listeners to the reset button
resetBtn.addEventListener("click", () =>{
    // Reset the timer variables
    hour = min = sec = ms = "0" + 0;

    // Clear the interval
    clearInterval(startTimer);

    // Update the start/stop button text
    startStopBtn.innerHTML = "Start";

    // Update the timer display
    putValue();
})

// Function to update the timer display
let putValue =() =>{
    // Update the hour, minute, second and millisecond displays
    container.querySelector(".hour").innerHTML = hour;
    container.querySelector(".min").innerHTML = min;
    container.querySelector(".sec").innerHTML = sec;
    container.querySelector(".ms").innerHTML = ms;
}

// Add event listener to the start/stop button
startStopBtn.addEventListener("click", (e)=>{
    // Check if the button text is "Start"
    if(e.target.innerHTML === "Start"){
        // Start the stopwatch
        startStopwatch();
    }else{
        // Stop the stopwatch
        stopStopwatch();
    }
})
// Doxa Dev
// Select HTML elements to display date and time 
let dateTxt = document.querySelector(".container .date");
let timeTxt = document.querySelector(".container .time");

// Define arrays of day and month names
const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Initialize AM/PM variable
let AMpm = "AM";

// Function to get and display current date and time
let getTime =() =>{
    // Create a new Date object to get current date and time
    let d = new Date();

    // Extract date and time component
    let day = d.getDay();
    let year = d.getFullYear();
    let date = d.getDate();
    let month = d.getMonth();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    // Convert to 12-hour format and add leading zeros if necessary
    if(hours > 12){
        hours = hours - 12;
        AMpm = "PM";
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    dateTxt.innerHTML = `${weeks[day]}, ${months[month]} ${date}, ${year}`;
    timeTxt.innerHTML = `${hours} : ${minutes} : ${seconds} ${AMpm}`;
}

// Call getTime function every second to update date and time display
setInterval(getTime, 1000);
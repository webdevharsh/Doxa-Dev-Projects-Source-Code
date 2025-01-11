// Doxa Dev

// Define the degree value for each minute/second (6 degrees per minute/second)
let deg = 6;

// Select the hour, minute, and second hand elements from the HTML
const hr = document.querySelector(".container .hour-hand");
const mn = document.querySelector(".container .min-hand");
const sc = document.querySelector(".container .sec-hand");

// Set an interval to update the clock
setInterval(() =>{
    // Get the current date and time
    let date = new Date();

    // Calculate the rotation angles for the hour, minute and second hands
    let hh = date.getHours() * 30; // 30 degrees per hour
    let mm = date.getMinutes() * deg; // 6 degrees per minute
    let ss = date.getSeconds() * deg; // 6 degrees per second

    // Update the rotation of the hour. minute, and second hands
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`; // Adjust hour hand fro minute offset
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})
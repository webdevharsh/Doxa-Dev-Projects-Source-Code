// Doxa Dev
let container = document.querySelector(".container");
let cityInput = container.querySelector(".input-box input");
let searchBtn = container.querySelector(".input-box button");
let weather_img = container.querySelector(".weather-img img");
let temp = container.querySelector(".temp");
let weatherDescrip = container.querySelector(".weather-descrip");
let humidity = container.querySelector(".other .humidity .humidity-value");
let windSpeed = container.querySelector(".other .wind-speed .windspeed-value");

// To create this weather app we will use openWeatherMap api
// Follow this steps to get ur api key
// Step 1 - Open ur browser and search "openWeatherMap"
// Step 2 - If you don't have any account before then create a new free account by clicking on "Create an Account"
// So i have already account, so simply i will login here
// Step 3 - After SignIn/SignUp Click on your Account > Api Keys
// Step 4 - Now create ur Api Key
let apiKey = "";

// Add event listener to search button 
searchBtn.addEventListener("click", () =>{
    if(cityInput.value.trim() != ""){
        getWeatherInfo(); // Call getweatherInfo function if city input is not empty
    }
})

// Function to get weather info from openWeatherMap Api 
let getWeatherInfo =() =>{
    let city = cityInput.value; // Get city name from input field
    // Api URL 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // Fetch weather data from api 
    fetch(url).then((res) => res.json()).then((data) =>{
        console.log(data);
        // Update weather elements with API data 
        weather_img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; // set weather icon
        temp.innerHTML = `${data.main.temp}&deg;`; // set temperature
        weatherDescrip.innerHTML = `${data.weather[0].description}`; // set weather description
        humidity.innerHTML = `${data.main.humidity}%`; // set humidity
        windSpeed.innerHTML = `${data.wind.speed}Km/H`; // set wind speed
    })
}

// Call getWeatherInfo function initially 
getWeatherInfo();
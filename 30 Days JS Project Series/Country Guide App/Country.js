// Doxa Dev
// Retrieve the user input element and info box element
let userInput = document.querySelector(".container .search-box input");
let infoBox = document.querySelector(".container .info-box");

// Function for fetching country details from the API
let getCountryDetails =(country) =>{
    // Construct the API URL with the country name
    let url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

    // Fetch the country data from the api
    fetch(url).then((res) => res.json()).then((data) =>{
        let info = 
        `<div class="country-flag-name">
            <div class="image">
                <img src="${data[0].flags.svg}" alt="">
            </div>
            <h3 class="country-name">${data[0].name.common}</h3>
        </div>
        <div class="other-info">
            <h5>Capital: <span>${data[0].capital}</span></h5>
            <h5>Continent: <span>${data[0].continents}</span></h5>
            <h5>Population: <span>${data[0].population}</span></h5>
            <h5>Currency: <span>
                ${Object.keys(data[0].currencies)[0]} -
                ${data[0].currencies[Object.keys(data[0].currencies)].name}
                (${data[0].currencies[Object.keys(data[0].currencies)].symbol})
            </span></h5>
            <h5>Common Languages: <span>
                ${Object.values(data[0].languages).join(",")}
            </span></h5>
        </div>`
        infoBox.innerHTML = info;
    })
    .catch(() => {
        // Display an error message if the country data cannot be fetched
        infoBox.innerHTML = `<h3 class="invalid-name-msg">Please enter valid country name!</h3>`;
    });
}

// Add an event listener to the user input element to fetch country details on Enter Key Press
userInput.addEventListener("keyup", (e) =>{
    if(e.key == "Enter" && userInput.value != ""){
        getCountryDetails(e.target.value);
    }
})

getCountryDetails("India");
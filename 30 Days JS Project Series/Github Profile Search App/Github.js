// Doxa Dev
// Get user input field, search button and info box elements
let userInput = document.querySelector(".container .search-box input");
let searchBtn = document.querySelector(".container .search-box button");
let infoBox = document.querySelector(".container .info-box");

// Fetches Github user data based on user input and display it on the page
let getData =() =>{
    // Construct API URL using user input
    const url = `https://api.github.com/users/${userInput.value}`;

    // Fetch user data from GITHUB API
    fetch(url).then((res) => res.json()).then((data) =>{
        // Check if user data is available
        if(data.Response = "True"){

            // Extract and format relevant data
            const dateData = data.created_at.slice(0, data.created_at.length - 10);
            const bio = data.bio === "" || data.bio === null ? "This profile has no bio" : data.bio;
            const company = data.company === "" || data.company === null ? "No Company" : data.company;
            const location = data.location === "" || data.location === null ? "No location" : data.location;
            const website = data.blog === "" || data.blog === null ? "No Website" : data.blog;
            const twitter = data.twitter_username === "" || data.twitter_username === null ? "No Twitter" : data.twitter_username;

            infoBox.innerHTML = 
            `<div class="user-details">
                <div class="img-box">
                    <img src="${data.avatar_url}">
                </div>
                <div class="details">
                    <h3 class="name">${data.name}</h3>
                    <h3 class="username">@${data.login}</h3>
                    <span class="join-date">Join date ${dateData}</span>
                </div>
                <p class="bio">${bio}</p>
                <div class="user-profile">
                    <div class="repos">
                        <h2>${data.public_repos}</h2>
                        <span>Repos</span>
                    </div>
                    <div class="followers">
                        <h2>${data.followers}</h2>
                        <span>Followers</span>
                    </div>
                    <div class="following">
                        <h2>${data.following}</h2>
                        <span>Following</span>
                    </div>
                </div>
                <div class="user-other-details">
                    <p><i class="fa-solid fa-building"></i> ${company}</p>
                    <p><i class="fa-solid fa-location-pin"></i> ${location}</p>
                    <p><i class="fa-solid fa-link"></i> ${website}</p>
                    <p><i class="fa-brands fa-x-twitter"></i> ${twitter}</p>
                </div>
            </div>`;
        }
    }).catch(error => {
        // Display error message
        infoBox.innerHTML = `<div class="err-msg">Invalid username. Please try again!!</div>`;
    })
}

// Add event listener to search button
searchBtn.addEventListener("click", (e) =>{
    // Check if user input is not empty
    if(userInput.value !== ""){
        // Call getData function to fetch user data
        getData();
    }
})

// Call getData function initially
getData();
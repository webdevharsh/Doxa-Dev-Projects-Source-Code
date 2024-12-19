// Doxa Dev
// Select HTML elements for joke display and interaction
let container = document.querySelector(".container");
let emoji = container.querySelector(".emoji");
let joke = container.querySelector(".joke");
let getJokeBtn = container.querySelector(".btns .refresh");
let copyBtn = container.querySelector(".btns .copy");
let copyIcon = container.querySelector(".btns .copy i");
let copyText = container.querySelector(".btns .copy span");
let twitterBtn = container.querySelector(".btns .twitter");

// API endpoint for fetching jokes
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// Function to fetch and display a new joke
let getJoke =() =>{
    // Display loading message while fetching joke
    joke.innerHTML = "Loading....";

    // Fetch joke data from API and update HTML element
    fetch(url).then((res) => res.json()).then((data) =>{
        joke.innerHTML = data.joke;
    })

    // Get and display a random emoji
    getEmoji();
}

// Function to get and display random emoji
let getEmoji =()=>{
    // Array of emojis to choose from
    let emojis = ["&#128514;", "&#129315;"];

    // Select a random emoji from the array
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // Update HTML element from the random emoji
    emoji.innerHTML = randomEmoji;
}

// Function to copy the joke to the clipboard
let copyJoke =() =>{
    // Write the joke text to the clipboard
    navigator.clipboard.writeText(joke.textContent);

    // Update copy button icon and text to indicate success
    copyIcon.style.display = "none";
    copyText.style.display = "block";

    // Revert copy button icon and text after 0.5 seconds 
    setTimeout(() =>{
        copyIcon.style.display = "block";
        copyText.style.display = "none";  
    }, 500);
}

// Function to share the joke on twitter
let twittJoke =() =>{
    // Construct twitter share url with joke text
    let tweetUrl = `https://twitter.com/intent/tweet?url=${joke.textContent}`;

    // Open twtter share URL in a new window
    window.open(tweetUrl, "_blank");
}

// Add event listeners to button
getJokeBtn.addEventListener("click", getJoke);
copyBtn.addEventListener("click", copyJoke);
twitterBtn.addEventListener("click", twittJoke);

// Initialize joke display and emoji
getJoke();
getEmoji();
// Doxa Dev
// Select HTML elements for quote generation and tweeting
let quote = document.querySelector(".container .quote-box .quote");
let author = document.querySelector(".container .quote-box h6");
let newQuoteBtn = document.querySelector(".container .new-quote-btn");
let tweetBtn = document.querySelector(".container .tweet-btn");

// Get quote function
let getQuote =() =>{
    // API URL
    const url = 'https://dummyjson.com/quotes/random';
    // Fetch quote data from API and update HTML elements
    fetch(url).then((res) => res.json()).then((data) =>{
        quote.innerHTML = data.quote; 
        author.innerHTML = '--' + data.author;
    })
}

// Tweet quote function
let tweetQuote =() =>{
    // Construct tweet URL with quote and author text
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerHTML} ${author.innerHTML}`;

    // Open tweet URL in new window
    window.open(tweetUrl, "_blank");
}

// Add event listener to generate new quote on button click
newQuoteBtn.addEventListener("click", getQuote);
// Add event listener to tweet quote on twitter(X)
tweetBtn.addEventListener("click", tweetQuote);
// Simulate initial button click to generate first quote
newQuoteBtn.click();
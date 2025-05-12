const quoteTextElement = document.getElementById('quote-text');
const quoteCharacterElement = document.getElementById('quote-character');
const quoteAnimeElement = document.getElementById('quote-anime');
const newQuoteBtn = document.getElementById('new-quote-btn');

let quotes = [];

// Fetch quotes from JSON file
async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        quotes = await response.json();
        displayRandomQuote();
    } catch (error) {
        console.error("Could not fetch quotes:", error);
        quoteTextElement.textContent = "Sorry, could not load quotes.";
        quoteCharacterElement.textContent = "";
        quoteAnimeElement.textContent = "";
    }
}

// Display a random quote
function displayRandomQuote() {
    if (quotes.length === 0) {
        quoteTextElement.textContent = "No quotes available.";
        quoteCharacterElement.textContent = "";
        quoteAnimeElement.textContent = "";
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteTextElement.textContent = `"${randomQuote.quote}"`;
    quoteCharacterElement.textContent = `- ${randomQuote.character}`;
    if (randomQuote.anime) {
        quoteAnimeElement.textContent = `(${randomQuote.anime})`;
    } else {
        quoteAnimeElement.textContent = "";
    }
}

// Event listener for the button
newQuoteBtn.addEventListener('click', displayRandomQuote);

// Initial fetch and display
fetchQuotes();
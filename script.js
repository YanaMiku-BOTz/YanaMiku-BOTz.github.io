const quoteTextElement = document.getElementById('quote-text');
const quoteAnimeElement = document.getElementById('quote-anime');
const newQuoteBtn = document.getElementById('new-quote-btn');

let quotes = [];

async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        quotes = await response.json();
        displayRandomQuote(); // Display a quote once fetched
    } catch (error) {
        console.error("Could not fetch quotes:", error);
        quoteTextElement.textContent = "Gagal memuat quotes. Silakan coba lagi nanti.";
        quoteAnimeElement.textContent = "Error";
    }
}

function getRandomQuote() {
    if (quotes.length === 0) {
        return { quote: "Tidak ada quotes yang tersedia.", anime: "" };
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    quoteTextElement.textContent = `"${randomQuote.quote}"`;
    quoteAnimeElement.textContent = `- ${randomQuote.anime}`;
}

newQuoteBtn.addEventListener('click', displayRandomQuote);

// Fetch quotes when the script loads
fetchQuotes();
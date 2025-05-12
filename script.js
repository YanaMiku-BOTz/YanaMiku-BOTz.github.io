const quotesData = [
    {
        "quote": "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful.",
        "anime": "Roy Mustang (Fullmetal Alchemist: Brotherhood)"
    },
    {
        "quote": "If you don’t take risks, you can’t create a future!",
        "anime": "Monkey D. Luffy (One Piece)"
    },
    {
        "quote": "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have.",
        "anime": "Matsumoto Rangiku (Bleach)"
    },
    {
        "quote": "People’s lives don’t end when they die. It ends when they lose faith.",
        "anime": "Itachi Uchiha (Naruto)"
    },
    {
        "quote": "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
        "anime": "Kenshin Himura (Rurouni Kenshin)"
    },
    {
        "quote": "Fear is not evil. It tells you what your weakness is. And once you know your weakness, you can become stronger as well as kinder.",
        "anime": "Gildarts Clive (Fairy Tail)"
    },
    {
        "quote": "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!",
        "anime": "Naruto Uzumaki (Naruto)"
    },
    {
        "quote": "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
        "anime": "Kakashi Hatake (Naruto)"
    },
    {
        "quote": "If you can’t do something, then don’t. Focus on what you can.",
        "anime": "Shiroe (Log Horizon)"
    },
    {
        "quote": "It’s not a crime to be different.",
        "anime": "Asuka Langley Soryu (Neon Genesis Evangelion)"
    }
];

const quoteTextElement = document.getElementById('quote-text');
const quoteAnimeElement = document.getElementById('quote-anime');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
}

function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteTextElement.textContent = `"${randomQuote.quote}"`;
    quoteAnimeElement.innerHTML = `<em>- ${randomQuote.anime}</em>`;
}

newQuoteBtn.addEventListener('click', displayQuote);

// Display initial quote on load
displayQuote();
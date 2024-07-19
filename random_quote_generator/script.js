const authors = [
    "Steve Jobs",
    "Winston Churchill",
    "Theodore Roosevelt",
    "Buddha",
    "William James",
    "Peter Drucker",
    "Wayne Gretzky",
    "John Lennon",
    "Sam Levenson",
    "Lao Tzu"
];


const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "What we think, we become.",
    "Act as if what you do makes a difference. It does.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don’t take.",
    "Life is what happens when you’re busy making other plans.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The journey of a thousand miles begins with one step."
];

const quote = document.getElementById("quoteDisplay");
const author = document.getElementById("authorDisplay");
const button = document.getElementById("getNewQuote");

let prevDigit = 0;

function generateQuote(){
    let randomIndex = Math.floor(Math.random() * 10);
    quote.innerText = quotes[randomIndex];
    author.innerText = `- ${authors[randomIndex]}`;
}

generateQuote();

button.addEventListener('click', function(){
    generateQuote();
})

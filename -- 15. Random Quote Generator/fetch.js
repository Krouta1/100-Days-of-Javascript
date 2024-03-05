// Variables
const btn = document.querySelector('.get-quotes');
const number = document.getElementById('number');
const quotesContainer = document.querySelector('.quotes');

// Functions
const renderQuote = quote => `
    <ul>
        <li>Text: ${quote.text}</li>
        <li>Author: ${quote.author}</li>
    </ul>
    <hr>
`;

const displayQuotes = quotes => {
  const quotesRandomize = quotes
    .sort(() => Math.random() - 0.5)
    .slice(0, number.value); //randomized quotes with length selected by user

  const quotesHTML = quotesRandomize.map(renderQuote).join('');
  quotesContainer.innerHTML = quotesHTML;
};

const getQuotes = e => {
  e.preventDefault();

  fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(displayQuotes);
};

// Event Listeners
btn.addEventListener('click', getQuotes);

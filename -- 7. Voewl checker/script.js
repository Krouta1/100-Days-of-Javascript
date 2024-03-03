// Variables
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const inputText = document.querySelector('.input-text');

// Function to check if the word is a palindrome madam should pass
const countVowel = () => {
  const word = inputText.value;
  const count = word.toLowerCase().match(/[aeiou]/gi).length;
  result.innerHTML = `The ${word} has ${count} vowels`;
};

// Event listeners
btn.addEventListener('click', countVowel);

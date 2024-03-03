//Variables
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

// Function to check if the word is a palindrome madam should pass
const palindromeCheck = () => {
  let word = document.querySelector('.input-text').value;
  //console.log(word);
  let wordReverse = word.split('').reverse().join('');
  //console.log(wordReverse);
  word === wordReverse
    ? (result.innerHTML = 'Yes, it is a palindrome')
    : (result.innerHTML = 'No, it is not a palindrome');
};

// Event listeners
btn.addEventListener('click', palindromeCheck);

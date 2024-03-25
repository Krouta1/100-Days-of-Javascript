const typedWord = document.querySelector('.typed-word');
const cursor = document.querySelector('.cursor');

const wordArray = ['Web Developer', 'Product Designer', 'Tech Advocate'];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingSpeed = 200;
const erasingSpeed = 400;
const waitingTime = 2000;

// Typing function
function type() {
  if (letterIndex < wordArray[wordArrayIndex].length) {
    if (!cursor.classList.contains('typing')) {
      cursor.classList.add('typing');
    }

    typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    cursor.classList.remove('typing');
    setTimeout(erase, waitingTime);
  }
}

// Erasing function
function erase() {
  if (letterIndex > 0) {
    typedWord.textContent = wordArray[wordArrayIndex].substring(
      0,
      letterIndex - 1
    );
    letterIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    cursor.classList.add('typing');
    wordArrayIndex++;
    if (wordArrayIndex >= wordArray.length) {
      wordArrayIndex = 0;
    }
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () =>
  setTimeout(type, waitingTime)
);

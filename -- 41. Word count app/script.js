const input = document.querySelector('.input'),
  character = document.querySelector('.character'),
  word = document.querySelector('.word'),
  readingTime = document.querySelector('.reading-time'),
  wordLimit = document.querySelector('.word-limit'),
  WORD_LIMIT = 10;

input.addEventListener('keyup', characterCount);
input.addEventListener('keyup', wordCount);

function characterCount() {
  character.textContent = input.value.length;
}

function wordCount(e) {
  const words = input.value.split(' ');
  word.textContent = words.length;
  if (words.length > WORD_LIMIT - 1 && e.code !== 'Backspace') {
    wordLimit.textContent = 'You have reached the word limit';
    // input.setAttribute('disabled', true);
  } else {
    wordLimit.textContent = WORD_LIMIT - words.length;
  }
  readingTime.textContent = words.length / 200;
}

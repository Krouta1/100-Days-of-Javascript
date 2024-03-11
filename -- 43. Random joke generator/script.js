// https://api.chucknorris.io/jokes/random

const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');
const url = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', getJoke);

async function getJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    joke.innerHTML = data.value;
    console.log(data);
  } catch (error) {
    joke.innerHTML = error.message;
  }
}

const number = document.querySelector('.number');
const btnGenerate = document.querySelector('.generate');

const generateRandomNumber = () => {
  // Generate a random number between 1 and 10
  const rand = Math.floor(Math.random() * 10) + 1;
  number.innerHTML = rand;
};

btnGenerate.addEventListener('click', generateRandomNumber);

//const rand = Math.floor(Math.random() * 10) + 1;

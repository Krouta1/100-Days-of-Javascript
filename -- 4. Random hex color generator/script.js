//Select the span element
const hex = document.querySelector('.hex');
const btnGenerate = document.querySelector('.generate');

const generateRandomColor = () => {
  //Generate a random hex color code
  const randomColor = Math.random().toString(16).substring(2, 8);

  //Set the background color to the random color
  document.body.style.backgroundColor = '#' + randomColor;

  //Set the text content of the span element to the random color
  hex.innerHTML = '#' + randomColor;
};

btnGenerate.addEventListener('click', generateRandomColor);

generateRandomColor(); //Call the function to generate a random color when the page loads

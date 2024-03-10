const btn = document.querySelector('.btn'),
  result = document.querySelector('.result'),
  reset = document.querySelector('.reset');

function calcBMI(e) {
  e.preventDefault();

  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value) / 100;
  const bmi = (weight / height ** 2).toFixed(2);

  const categories = ['Underweight', 'Normal weight', 'Overweight', 'Obesity'];
  let category;

  if (bmi < 18.5) {
    category = categories[0];
    result.style.backgroundColor = 'red';
  } else if (bmi < 25) {
    category = categories[1];
    result.style.backgroundColor = 'green';
  } else if (bmi < 30) {
    category = categories[2];
    result.style.backgroundColor = 'orange';
  } else {
    category = categories[3];
    result.style.backgroundColor = 'red';
  }

  result.innerHTML = `Your BMI is ${bmi}. You are ${category}.`;
}

btn.addEventListener('click', calcBMI);
btn.addEventListener('click', () => {
  btn.disabled = true;
  reset.style.display = 'block';
});
reset.addEventListener('click', () => {
  result.innerHTML = '';
  result.style.backgroundColor = '#005490';
  document.querySelector('.weight').value = '';
  document.querySelector('.height').value = '';
  btn.disabled = false;
  reset.style.display = 'none';
});

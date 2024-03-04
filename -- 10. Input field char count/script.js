//VARIABLES
const count = document.querySelector('.count');
const input = document.querySelector('input');

input.addEventListener('keyup', () => {
  count.innerHTML = input.value.length;
  input.value.length > 10
    ? (count.style.color = 'red')
    : (count.style.color = 'black');
});

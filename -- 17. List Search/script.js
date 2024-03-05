const input = document.getElementById('search');

const search = () => {
  const inputValue = input.value.toLowerCase();
  const items = document.querySelectorAll('li');
  items.forEach(item => {
    //If the item contains the input value, display it, otherwise hide it inputValue:g is ni word Gambia
    item.textContent.toLowerCase().includes(inputValue)
      ? (item.style.display = '')
      : (item.style.display = 'none');
  });
};

input.addEventListener('keyup', search);

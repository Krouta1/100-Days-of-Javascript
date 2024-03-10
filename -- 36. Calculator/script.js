const key = document.getElementsByTagName('li');
const result = document.querySelector('p');
const clear = document.querySelector('.clear');

for (let i = 0; i < key.length; i++) {
  if (key[i].innerHTML === '=') {
    key[i].addEventListener('click', calculate);
  } else {
    key[i].addEventListener('click', addValue(i));
  }
}

const operatorMapping = {
  '÷': '/',
  x: '*',
};

function addValue(i) {
  return () => {
    const keyContent = key[i].innerHTML;
    result.innerHTML += operatorMapping[keyContent] || keyContent;
  };
}

function calculate() {
  try {
    result.innerHTML = eval(result.innerHTML);
  } catch {
    result.innerHTML = 'Error';
  }
}

clear.addEventListener('click', () => (result.innerHTML = ''));

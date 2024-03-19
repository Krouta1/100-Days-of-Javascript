// Map - https://www.worldometers.info/geography/flags-of-the-world/

const cur1 = document.querySelector('.cur-1');
const cur2 = document.querySelector('.cur-2');
const cur1Input = document.querySelector('.cur-1-input');
const cur2Input = document.querySelector('.cur-2-input');

const baseRate = document.querySelector('.base');
const switchCur = document.querySelector('.switch-cur');

const countries = [
  {
    name: 'AED',
    flagURL: 'https://www.worldometers.info/img/flags/ae-flag.gif',
  },
  {
    name: 'EUR',
    flagURL: 'https://www.worldometers.info/img/flags/au-flag.gif',
  },
  {
    name: 'GBP',
    flagURL: 'https://www.worldometers.info/img/flags/uk-flag.gif',
  },
  {
    name: 'USD',
    flagURL: 'https://www.worldometers.info/img/flags/us-flag.gif',
  },
];

// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
const apiURL = 'https://v6.exchangerate-api.com/v6/';
const key = '093352694b431c8342cff984'; //please get your own key from the website

//get exchange rate
async function getExchangeRate() {
  const cur1Code = cur1.value;
  const cur2Code = cur2.value;

  const res = await fetch(`${apiURL}${key}/latest/${cur1Code}`);
  const data = await res.json();

  const rate = data.conversion_rates[cur2Code];
  baseRate.textContent = `1 ${cur1Code} = ${rate.toFixed(2)} ${cur2Code}`;

  cur2Input.value = (cur1Input.value * rate).toFixed(2);
}

//get flag images
function getFlags() {
  countries.forEach(country => {
    if (cur1.value === country.name) {
      document.querySelector('.from img').setAttribute('src', country.flagURL);
    }

    if (cur2.value === country.name) {
      document.querySelector('.to img').setAttribute('src', country.flagURL);
    }
  });
}

//event listeners
cur1.addEventListener('change', () => {
  getExchangeRate();
  getFlags();
});

cur2.addEventListener('change', () => {
  getExchangeRate();
  getFlags();
});

cur1Input.addEventListener('input', getExchangeRate);
cur2Input.addEventListener('input', getExchangeRate);

switchCur.addEventListener('click', () => {
  const temp = cur1.value;
  cur1.value = cur2.value;
  cur2.value = temp;
  switchCur.classList.toggle('switched');

  getExchangeRate();
  getFlags();
});

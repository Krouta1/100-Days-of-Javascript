const btn = document.querySelector('.btn'),
  total = document.querySelector('.total'),
  error = document.querySelector('.error'),
  bill = document.querySelector('.bill'),
  rate = document.querySelector('.rate'),
  tip = document.querySelector('.tip');

const hiddeError = () => {
  setTimeout(() => {
    error.style.display = 'none';
  }, 3000);
};

const calculateTip = (bill, rate) => {
  if (bill === '' || rate === '') {
    error.style.display = 'block';
    hiddeError();
  }

  if (isNaN(bill)) {
    error.style.display = 'block';
    hiddeError();
  }

  const tipAmount = bill * rate;
  tip.textContent = `Tip: $${tipAmount.toFixed(2)}`;
  total.textContent = `Total: $${(parseFloat(bill) + tipAmount).toFixed(2)}`;
};

btn.addEventListener('click', () => {
  calculateTip(bill.value, rate.value);
});

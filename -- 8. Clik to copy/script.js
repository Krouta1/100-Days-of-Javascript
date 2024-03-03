//variables
const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');

const copyText = e => {
  e.preventDefault();
  //coupon.select();
  // document.execCommand('copy'); // thi is deprecated, but is still working

  // This is the new way to copy text to clipboard
  navigator.clipboard.writeText(coupon.value).then(() => {
    // This will change text of the button and than change it back after 3 seconds
    btn.textContent = 'Copied';
    setTimeout(() => {
      btn.textContent = 'Copy';
    }, 3000);
  });
};

//Event listener
btn.addEventListener('click', copyText);

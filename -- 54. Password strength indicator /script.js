let state,
  password = document.getElementById('password'),
  passwordStrength = document.getElementById('password-strength'),
  lowUpperCase = document.querySelector('.low-upper-case i'),
  number = document.querySelector('.number i'),
  specialChar = document.querySelector('.special-char i'),
  eightChar = document.querySelector('.eight-char i'),
  showPassword = document.querySelector('.show-pass'),
  eyeIcon = document.querySelector('#eye');

showPassword.addEventListener('click', toggle);
eyeIcon.addEventListener('click', toggleEye);

password.addEventListener('keyup', () => {
  let pass = password.value;
  checkStrength(pass);
});

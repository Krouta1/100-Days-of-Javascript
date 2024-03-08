//VARIABLES AND ELEMENTS
const characters = {
  empty: "",
  case: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*=-_"
};

const elements = {
  pwdLength: document.getElementById("p-length"),
  pwdUpper: document.getElementById("p-uppercase"),
  pwdLower: document.getElementById("p-lowercase"),
  pwdNumber: document.getElementById("p-number"),
  pwdSymbol: document.getElementById("p-symbol"),
  generate: document.getElementById("submit"),
  password: document.getElementById("password"),
  copy: document.getElementById("copy"),
};

//FUNCTIONS
const getRandomCharFromString = (inputString) => {
  const randomIndex = Math.floor(Math.random() * inputString.length);
  return inputString.charAt(randomIndex);
};

const generatePassword = () => {
  let initialPwd = "";
  // ADD Characters if an option is checked
  elements.pwdUpper.checked ? (initialPwd += characters.case.toUpperCase()) : "";
  elements.pwdLower.checked ? (initialPwd += characters.case) : "";
  elements.pwdNumber.checked ? (initialPwd += characters.number) : "";
  elements.pwdSymbol.checked ? (initialPwd += characters.symbol) : "";

  if (elements.pwdLength.value === 0) return alert("Please define length of your password!");

  let finalPwd = "";
  for (let index = 0; index < elements.pwdLength.value; index++) {
    finalPwd += getRandomCharFromString(initialPwd);
  }

  return finalPwd;
};

const displayPwd = () => {
  elements.password.value = generatePassword();
};

const copyPwd = (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(elements.password.value)
    .then(() => {
      elements.copy.textContent = 'Copied';
      setTimeout(() => {
        elements.copy.textContent = 'Copy';
      }, 3000);
    });
};

//EVENT LISTENERS
elements.generate.addEventListener("click", displayPwd);
elements.copy.addEventListener("click", copyPwd);

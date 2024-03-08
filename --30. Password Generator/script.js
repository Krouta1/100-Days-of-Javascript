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

const getRandomCharFromString = (inputString) => {
  const randomIndex = Math.floor(Math.random() * inputString.length);
  return inputString.charAt(randomIndex);
};

const generatePassword = () => {
  const options = [elements.pwdUpper, elements.pwdLower, elements.pwdNumber, elements.pwdSymbol];
  const initialPwd = options.filter(option => option.checked).map(option => characters[option.id]).join(""); // this will initialize password

  if (elements.pwdLength.value === 0) {
    alert("Please define the length of your password!");
    return "";
  }

  return Array.from({ length: elements.pwdLength.value }, () => getRandomCharFromString(initialPwd)).join("");
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

elements.generate.addEventListener("click", displayPwd);
elements.copy.addEventListener("click", copyPwd);

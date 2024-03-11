const temperatures = {
  celsius: {
    fahrenheit: c => (c * 9/5) + 32,
    kelvin: c => c + 273.15
  },
  fahrenheit: {
    celsius: f => (f - 32) * 5/9,
    kelvin: f => (f + 459.67) * 5/9
  },
  kelvin: {
    celsius: k => k - 273.15,
    fahrenheit: k => (k * 9/5) - 459.67
  }
};

const form = document.querySelector("form");

form.addEventListener("input", convertTemperature);

function convertTemperature(e) {
  const inputValue = parseFloat(e.target.value);
  const currentUnit = Array.from(e.target.classList).find(className => temperatures.hasOwnProperty(className));
 
  Object.keys(temperatures[currentUnit]).forEach(unit => {
    if (unit !== currentUnit) {
      const targetElement = document.querySelector(`.${unit}`);
      targetElement.value = temperatures[currentUnit][unit](inputValue).toFixed(2);
    }
  });
}
// --Convert Celsius to--
// fah = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert Fah to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;

const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

const showPosition = (position) => {
  userLocation.innerHTML = `
    Latitude: ${position.coords.latitude} <br>
    Longitude: ${position.coords.longitude}
  `;
};

const getCurrentPosition = () => {
  navigator.geolocation.getCurrentPosition(showPosition);
};

btn.addEventListener('click', getCurrentPosition);

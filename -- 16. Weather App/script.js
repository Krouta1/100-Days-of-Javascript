const api = {
    key: "Place your own OPEN WEATHER API KEY here",
    base: "https://api.openweathermap.org/data/2.5/"
};

const elements = {
    search: document.querySelector(".search"),
    btn: document.querySelector(".btn"),
    error: document.querySelector(".error"),
    city: document.querySelector(".city"),
    date: document.querySelector(".date"),
    temp: document.querySelector(".temp"),
    weather: document.querySelector(".weather"),
    weatherIcon: document.querySelector(".weather-icon"),
    tempRange: document.querySelector(".temp-range")
};

const displayData = (data) => {
    const { cod, name, sys, main, weather } = data;
    const iconURL = 'https://api.openweathermap.org/img/w/'

    if (cod === '404') {
        elements.error.textContent = "Please enter a valid city!";
        elements.search.value = "";
    } else {
        elements.city.innerText = `${name}, ${sys.country}`;
        elements.date.innerText = dateFunction(new Date());
        elements.temp.textContent = `Temp: ${Math.round(main.temp)}`;
        elements.weather.textContent = `Weather: ${weather[0].main}`;
        elements.tempRange.textContent = `Temp Range: ${Math.round(main.temp_min)}°C / ${Math.round(main.temp_max)}°C`;
        elements.weatherIcon.src = iconURL + weather[0].icon + '.png'
        elements.search.value = "";
    }
};

const getData = (search) => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(displayData);
};

const getInput = (e) => {
    e.preventDefault();
    if (e.type !== 'click') return;
    getData(elements.search.value);
};

const dateFunction = (data) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const day = days[data.getDay()];
    const date = data.getDate();
    const month = months[data.getMonth()];
    const year = data.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
};

elements.btn.addEventListener("click", getInput);

let searchInput = document.querySelector('#search-input');
let weatherImage = document.querySelector('#weatherImage');
let weatherDegree = document.querySelector('#weatherDegree');
let weatherStatus = document.querySelector('#weatherStatus');
let search = document.getElementById('search');
let humidity = document.querySelector('#humidity');
let wind = document.querySelector('#wind');
let weatherBody = document.querySelector('.weather-body');
let error = document.querySelector('.error')


search.addEventListener('click', () => {
    checkWeather(searchInput.value);
});

async function checkWeather(city) {

    weatherBody.style.display = 'flex';
    console.log(city)
    const API_KEY = '3fcc12385bda524cf1560dd87b14702a';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;


    const weatherData = await fetch(`${URL}`).then(response => response.json());

    if (weatherData.cod === `404`) {
        weatherBody.style.display = 'none';
        error.style.display = 'flex';
        console.log('error');
        return;

    }

    console.log(weatherData);
    weatherDegree.innerText = `${Math.round(weatherData.main.temp - 273.15)}°c`;

    weatherStatus.innerText = weatherData.weather[0].main;

    humidity.innerText = `${weatherData.main.humidity}%`;

    wind.innerText = `${weatherData.wind.speed}KMPH`;

    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImage.src = './images/clouds.png';
            break;

        case 'Haze':
            weatherImage.src = './images/haze.png';
            break;
        case 'Light Rain':
            weatherImage.src = './images/lightrain.png';
            break;
        case 'Clear Sky':
            weatherImage.src = './images/clearsky.png';
            break;
        case 'Mist':
            weatherImage.src = './images/mist.png';
            break;
        case 'Snow':
            weatherImage.src = './images/snow.png';
            break;

    }

}

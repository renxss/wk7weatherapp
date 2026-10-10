function refreshWeatherData(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector ("#humidity");
    let windSpeedElement = document.querySelector ("#wind-speed");
    let timeElement = document.querySelector ("#time");
    let date = new Date(response.data.time * 1000);
    
    cityElement.innerHTML = response.data.city;

    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
   
}

function formatDate(date) {
    let day = date.getDay ();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday', 'Saturday'];
    let day = days[date.getDays()];

    return `${day} ${hours}:${minutes}`

 
}

function searchCity(city) {
    let apiKey = "abtd48d815a54b190coedf704f30b0e3"
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeatherData);
}






function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Sydney");
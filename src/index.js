function refreshWeatherData(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#city");

    console.log(response.data);
    
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    temperatureElement.innerHTML = Math.round(temperature);
   
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
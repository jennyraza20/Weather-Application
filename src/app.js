function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#local-temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let feelsLikeElement = document.querySelector("#feels");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "73277c7b18b5c07a81fafdff51fe6d88";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kingston&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

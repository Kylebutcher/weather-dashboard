// const lat= 
// cont lon=
// const key=
// let cityname = []
const APIKEY = "2f045213741d82e002d3d0f2d5970b0f"
const searchBtnEl = document.getElementById("search-button");
const city = document.getElementById("searchCity");

let citiesName = JSON.parse(localStorage.getItem("cityNames")) || [];

function getAPI() {
    const requestURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${APIKEY}&units=imperial`;
    console.log(requestURL);
    fetch (requestURL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        deleteExtras()
        citiesName.push(data.city.name)
        localStorage.setItem("cityName", JSON.stringify(citiesName))
        saveToLocalStorage(data)
        populateWeatherData();
      })
};
  
  function deleteExtras() {
    cityName = cities.filter( (name, i) => !cities.includes(name, i + 1))
    localStorage.setItem("cities", JSON.stringify(cityName))
    console.log(cityName)
  };

  // read from storage
  function readLocalStorage() {
    let string = localStorage.getItem("city");
    let weather = JSON.parse(string) || [];
    return weather;
  };

  // save data to the local storage here

  function saveToLocalStorage(weather) {
    let apiData = JSON.stringify(weather);
    localStorage.setItem("city", apiData);
  };

  function populateWeatherData(){
    const weather = readLocalStorage();
    const todaysWeather = document.querySelector(".todaysWeather");

    const city = document.createElement("h2");
    city.textContent = weather.city.name;
    todaysWeather.appendChild(city);

    const todaysDate = document.createElement("p");
    todaysDate.textContent = dayjs.unix(weather.list[0].dt).format("MM/DD/YYYY");
    todaysWeather.appendChild(todaysDate);

    const windSpeed = document.createElement("p");
    windSpeed.textContent = `Wind ${weather.list[0].wind.speed}mph`;
    todaysWeather.appendChild(windSpeed);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${weather.list[0].main.humidity}%`;
    todaysWeather.appendChild(humidity);

    const today = document.createElement("p");
    todaysWeather.classList.add("weatherCards");

    const temperature = document.createElement("p");
    temperature.textContent = `Temp: ${weather.list[0].main.temp}°`;
    todaysWeather.appendChild(temperature);


  // get the 5 day forecast here
  const weeklyForecast = document.querySelector(".weekly-forecast");

  for (let i = 0; i < weather.list.length; i += 8){
    const forecast = document.querySelector("weekly-forecast");
    weeklyForecast.classList.add("weatherCards");

    const weeklyCard = document.createElement("div");
    weeklyCard.classList.add("days");
    const date = document.createElement("p");
    date.textContent = dayjs.unix(weather.list[i].dt + 86400).format("MM/DD/YYYY");
    weeklyCard.appendChild(date);

    const wind = document.createElement("p");
    wind.textContent = `Wind: ${weather.list[i].wind.speed} mph`;
    weeklyCard.appendChild(wind);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${weather.list[i].main.humidity}%`;
    weeklyCard.appendChild(humidity);

    const temperature = document.createElement("p");
    temperature.textContent = `Temp: ${weather.list[i].main.temp}`;
    weeklyCard.appendChild(temperature);
    weeklyForecast.appendChild(weeklyCard);
  }
};

function displayCity(cityName) {
  const displayedCity = document.querySelectorAll('h2');
  displayedCity.forEach((h2) => {
    h2.textContent = cityName;
  });
}

// const cities = citiesName;
// console.log(cities);
// displayCity(cities);
// deleteExtras()
// document.querySelectorAll('.today').forEach(element => element.innerHTML ="");
// document.querySelectorAll('.forecast').forEach(element => element.innerHTML="");

searchBtnEl.addEventListener("click", function(e) {
  e.preventDefault();
  getAPI();
  }
);

function deleteExtras() {

}
  
  // getAPI();
  
  // searchBtnEl.addEventListener("click", getAPI);
  
  // function getAPI2() {
  //     const requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${key}`;
  //     console.log(requestURL);
  
    
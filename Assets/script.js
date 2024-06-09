// const lat= 
// cont lon=
// const key=
// let cityname = []
const APIKEY = "716081892881e2753cc3fba701bb8257"
const searchBtnEl = document.getElementById("search-button");

let citiesName = JSON.parse(localStorage.getItem("cityNames")) || [];


// getting button working below 
function getInfo (event){
  event.preventDefault();
  const searchInputEl = document.getElementById("search-info");
  let searchTerm = searchInputEl.value;
  const geoCoderURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${APIKEY}`
  
  fetch(geoCoderURL)
  .then(data => data.json())
  .then(geoCodeData => {
    console.log(geoCodeData);
  })
};

function getAPI() {
    const requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;
    console.log(requestURL);
    fetch (requestURL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        deleteExtras()
        citiesName.push(data.city.name)
        localStorage.setItem("citiesName", JSON.stringify(citiesName))
        saveToLocalStorage(data)
        populateInfo();
      })
};
  
  function deleteExtras() {
    cityName = cityName.filter( (name, i) => !cityName.includes(name, i+1))
    localStorage.setItem("cityName", JSON.stringify(cityNames))
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
    today.appendChild(todaysDate);

    const windSpeed = document.createElement("p");
    temp.textContent = `Wind ${weather.list[0].main.temp}`;
    today.appendChild(windSpeed);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${weather.list[i].main.humidity}%`;
    today.appendChild(humidity);

    const today = document.createElement("p");
    today.classList.add("weatherCards");

    const temperature = document.createElement("p");
    temperature.textContent = `Temp: ${weather.list[0].main.temp}`;
    today.appendChild(temperature);


  // get the 5 day forecast here
  const weeklyForecast = document.querySelector(".weekly-forecast");

  for (let i = 0; i < weather.list.length; i += 8){
    const forecast = document.querySelector("weekly-forecast");
    forecast.classList.add("weatherCards");

    const date = document.createElement("p");
    date.textContent = dayjs.unix(weather.list[i].dt + 86400).format("MM/DD/YYYY");
    forecast.appendChild(date);

    const wind = document.createElement("p");
    wind.textContent = `Wind: ${weather.lsit[i].wind.speed} mph`;
    forecast.appendChild(wind);

    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${weather.list[i].main.humidity}%`;
    forecast.appendChild(humidity);

    const temperature = document.createElement("p");
    temperature.textContent = `Temp: ${weather.list[i].main.temp}`;
    forecast.appendChild(temperature);

  }
};
  
  
  
  // getAPI();
  
  searchBtnEl.addEventListener("click", getInfo);
  
  // function getAPI2() {
    //   const requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${key}`;
    //   console.log(requestURL);
    // }
    
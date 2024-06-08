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
    const todayWeather = document.querySelector(".todays-weather");

    const city = document.createElement("h2");
    city.textContent = weather.city.name;
    today
  }

  
  
  
  // getAPI();
  
  searchBtnEl.addEventListener("click", getInfo);
  
  // function getAPI2() {
    //   const requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&appid=${key}`;
    //   console.log(requestURL);
    // }
    
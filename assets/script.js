// Test API

/* var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=09305fa7af376150d681f93c53d839a7';

function getApi(requestUrl) {
// Call API
fetch(requestUrl)
    .then(function (response) {
// Convert response to JSON string
    return response.json();
    })
// Convert JSON to readable data
    .then(function (data) {
    console.log(data);
    });
}

getApi (requestUrl); */

// Define Variables

var searchBarEl = $('#search-bar');
var cityNameEl = $('#city-name');
var currentWeatherEl = $('#current-weather');
var currentCity = $('#current-city');
var currentTemperature = $('#temperature');
var currentDescription = $('#description');
var currentHumidity = $('#humidity');
var currentWind = $('#wind');

// API Key

var APIkey= "09305fa7af376150d681f93c53d839a7";

function displayWeather(event){
    event.preventDefault();
    if (cityNameEl.val().trim()!==""){
        city=cityNameEl.val().trim();
        getCurrentWeather(city);
    }

    currentCity.textContent = val(cityNameEl);
}

    // get Current weather bulk files
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Melbourne&unit=metric&appid=09305fa7af376150d681f93c53d839a7';

    function getCurrentWeather (){
    fetch(apiUrl)
    .then (function (response) {
        if (response.status == 200) {
            console.log("This is working!" + response);
            response.json().then (function (data) {
                console.log (data);
                //displayWeather(data, city);
        });
        }
        else {
            alert('Error' + response.statusText);
        }
    })
}

getCurrentWeather ();
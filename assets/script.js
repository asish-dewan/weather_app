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

var searchCityEl = $('#search-city');
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
}


   // get Current weather 
    
    function getCurrentWeather (city){

        var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric"+ "&APPID=" + APIkey;
    fetch(apiUrl)
    .then (function (response) {
            if (response.status == 200) {
            console.log("This is working!" + response);
            response.json().then (function (data) {
                console.log (data);

        const {name} = data;
        const {description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        // Display city name from response
        $(currentCity).html(name);
        // Display description 
        $(currentDescription).html(description);
        // Display current Temperature
        $(currentTemperature).html(temp + "°C");
        // Display the Humidity
        $(currentHumidity).html(humidity+"%");
        //Display Wind speed 
        $(currentWind).html(speed + "MPH");
        })
    }
    });
    }
    

// 5 day forecast for the current city

    function getforecast(cityid){
        var forecastUrl="https://api.openweathermap.org/data/2.5/forecast?id="+cityid+"&appid="+APIkey;
    fetch(forecastUrl)
    .then (function (response) {
            response.json().then (function (data) {
                console.log (data);

                const {description} = data.weather[0];
                const { temp, humidity } = data.main;
                const { speed } = data.wind;
                
                for (i=0;i<5;i++){
                
                // Display description 
                $("#fdescription").html(description );
                // Display current Temperature
                $("#ftemperature").html(temp [(i+1)] + "°C");
                // Display the Humidity
                $("#fhumidity").html(humidity [((i+1)*8)-1]+"%");
                //Display Wind speed 
                $("fwind").html(speed [((i+1)*8)-1]+ "MPH");
                    
                }
                })
            })
            }


$("#search-button").on("click",displayWeather);
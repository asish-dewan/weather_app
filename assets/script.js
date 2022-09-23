// Test API

var requestUrl = "https://bulk.openweathermap.org/snapshot/weather_14.json.gz?appid=09305fa7af376150d681f93c53d839a7"
var responseText = $(".msg");

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

getApi (requestUrl);


var getCurrentWeather = function () {
    // get Current weather bulk files
    var apiUrl = "https://bulk.openweathermap.org/snapshot/weather_14.json.gz?appid=09305fa7af376150d681f93c53d839a7"

    fetch(apiUrl)
    .then (function (response) {
        if (response.status == 200) {
            console.log("This is working!" + response);
            response.json()
            .then (function (data) {
                console.log (data);
                displayWeather(data);
        });
        }
    }
    )
}

var displayWeather = function (){
    
} 
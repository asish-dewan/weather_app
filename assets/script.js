
// Call API and 
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=09305fa7af376150d681f93c53d839a7"
var responseText = $("#msg");

function getApi(requestUrl) {
    fetch(requestUrl).then(function (response) {
    console.log(response);
    responseText.textContent = response;
    });
}

getApi(requestUrl);


/* let weather = {
    var apiKey= "09305fa7af376150d681f93c53d839a7";

// Fetch data from API
    fetchWeather= function (){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=09305fa7af376150d681f93c53d839a7"
        ).then((response) => response.json())
        .then(data) => console.log(data));
    },
}

fetchWeather();
 */
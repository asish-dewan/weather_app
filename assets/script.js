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

// Test 2 

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
    });
    }

getCurrentWeather ();


/* // Define Variables

var searchBarEl = $('#search-bar');
var nameInputEl = $('#cityname');
var searchContainerEl = $('#search-container');
var searchTerm = $('#search-term');


// Search bar event 

var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = nameInputEl.value.trim();

    if (city) {
        getCurrentWeather(city);

        searchContainerEl.textContent = '';
        nameInputEl.value = '';
    } else {
        alert('Please enter a City name');
    }
    };

var getCurrentWeather = function (city) {
    // get Current weather bulk files
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=09305fa7af376150d681f93c53d839a7';

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
};

 */
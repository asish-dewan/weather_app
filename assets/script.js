
let weather = {
    "apikey": "09305fa7af376150d681f93c53d839a7"

// Fetch data from API
    fetchWeather: function (){
        fetch(
            ""
        ).then((response) => response.json())
        .then(data) => console.log(data))
    },
};
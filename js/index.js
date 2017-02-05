function mainFunction() {
    var getIP = 'http://ip-api.com/json/';
    var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';
    $.getJSON(getIP).done(function(location) {
        $.getJSON(openWeatherMap, {
            lat: location.lat,
            lon: location.lon,
            units: 'metric',
            APPID: '9334f947893792dcb9b2e2c05ae23eb0'
        }).done(function(weather) {
            console.log(weather);

            var geolocation = weather.name + ", " + weather.sys.country;
            $("#geolocation").html(geolocation);
            var temperature = weather.main.temp;
            $("#data").html(temperature);
            var degrees = "<a class='celsius'>°C</a>"
            + " | " + "<a class='fahrenheit'>°F</a>";
            $("#degrees").html(degrees);

            $(".celsius").on("click", function(){
                temperature = weather.main.temp;
                $("#data").html(temperature);
            });

            $(".fahrenheit").on("click", function(){
                temperature = Math.round(weather.main.temp * 9/5 + 32);
                $("#data").html(temperature);
            });
            $("#wind").html("SW: " + weather.wind.speed);

            $("#description").html(weather.weather[0].description);
            switch (weather.weather[0].description) {
                case "clear sky":
                    $(".sunny").removeClass("hidden");
                    break;
                case "few clouds":
                    $(".cloudy").removeClass("hidden");
                    break;
                case "scattered clouds":
                    $(".cloudy").removeClass("hidden");
                    break;
                case "broken clouds":
                    $(".cloudy").removeClass("hidden");
                    break;
                case "shower rain":
                    $(".sun-shower").removeClass("hidden");
                    break;
                case "rain":
                    $(".rainy").removeClass("hidden");
                    break;
                case "thunderstorm":
                    $(".thunder-storm").removeClass("hidden");
                    break;
                case "snow":
                    $(".flurries").removeClass("hidden");
                    break;
                case "mist":
                    $(".cloudy").removeClass("hidden");
                    break;
            }
        });
    });
}

$(function() {
  mainFunction();
});

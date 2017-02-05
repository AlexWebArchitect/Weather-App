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
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/us3JQvC.jpg" + ')');
                    break;
                case "few clouds":
                    $(".cloudy").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/VEkmy0H.jpg" + ')');
                    break;
                case "scattered clouds":
                    $(".cloudy").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/CR9ArBs.jpg" + ')');
                    break;
                case "broken clouds":
                    $(".cloudy").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/xrPyIQY.jpg" + ')');
                    break;
                case "shower rain":
                    $(".sun-shower").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/ih6wEOr.jpg" + ')');
                    break;
                case "rain":
                    $(".rainy").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/xpGU9uf.jpg" + ')');
                    break;
                case "thunderstorm":
                    $(".thunder-storm").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/YTG9O3N.jpg" + ')');
                    break;
                case "snow":
                    $(".flurries").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/qs7r20c.jpg" + ')');
                    break;
                case "mist":
                    $(".cloudy").removeClass("hidden");
                    $('body').css('background-image', 'url(' + "http://i.imgur.com/GaTPG7D.jpg" + ')');
                    break;
            }
        });
    });
}

$(function() {
  mainFunction();
});

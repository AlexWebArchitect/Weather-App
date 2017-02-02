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
        $("#data").html(weather.name
            + ", " + weather.sys.country
            + "<br>" + weather.main.temp
            + "<br>" + weather.weather[0].description
            + "<br>" + weather.weather[0].icon);
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
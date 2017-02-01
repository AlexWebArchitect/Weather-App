var getIP = 'http://ip-api.com/json/';
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';
$.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units: 'metric',
        APPID: '9334f947893792dcb9b2e2c05ae23eb0'
    }).done(function(weather) {
        console.log(weather)
        $("#data").html(weather.name + ", " + weather.sys.country + "<br>" + weather.main.temp);
    });
});
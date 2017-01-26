if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latit = position.coords.latitude;
    const longit = position.coords.longitude;
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}

function randomQuote() {
  $.ajax({
      url: "api.openweathermap.org/data/2.5/weather?lat=latit&lon=longit&APPID=93bbb527a6fdda2a5bd8906b20da0565",
      dataType: "jsonp",
      /*data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + "</p>");
        $("#tweet").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' - ' + response.quoteAuthor);
      }*/
  });
}

$(function() {
  randomQuote();
});

$("#getMessage").click(function(){
  randomQuote();
});
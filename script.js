$(document).ready(function(){
$("button").on("click", function(){
 var city=  $("input").val()
console.log(city); 
  var url= "http://api.openweathermap.org/data/2.5/weather?q="
  +city
  +"&units=imperial&appid=2f452e4e0387022d9d4d4ebf9f17b6e0"
  $.get( url, function( data ) {
      
      console.log(data)
  });
});
});


$(document).ready(function(){
  $.getJSON( "https://thesimpsonsquoteapi.glitch.me/quotes", function(data) {
  var items = [];
  $("#quote-box").append("<ul>"+data[0].quote+"</ul><br><ul>"+data[0].character+"</ul>")
  $("#character-image").append("<img src='"+data[0].image+"'/>")
  console.log(data)
  });
})
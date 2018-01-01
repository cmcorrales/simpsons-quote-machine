$(document).ready(function(){
  var url = "https://thesimpsonsquoteapi.glitch.me/quotes"
  var getQuote = function(data) {
  $("#quote-box").html("<ul id='quote'>"+data[0].quote+"</ul><br><ul id='character'>"+data[0].character+"</ul>")
  $("#character-image").html("<img src='"+data[0].image+"'/>")
  }
  $.getJSON(url, getQuote, 'jsonp');
  $("#new-quote").click(function() {
    $("#quote-box").empty();
    $.getJSON(url, getQuote, 'jsonp');
  })
});
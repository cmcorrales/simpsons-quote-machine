$(document).ready(function(){
  var url = "https://thesimpsonsquoteapi.glitch.me/quotes"
  var getQuote = function(data) {
  $("#quote").html('<strong>"'+data[0].quote+'"</strong>')
  $("#character").html("-"+data[0].character)
  $("#character-image").html("<img src='"+data[0].image+"'/>")
  }
  $.getJSON(url, getQuote, 'jsonp');
  $("#new-quote").click(function() {
    $("#quote", "#character", "#character-image").empty();
    $.getJSON(url, getQuote, 'jsonp');
  })
});
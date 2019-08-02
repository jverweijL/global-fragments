$(function() {
  var regex = /[\?&]utm_.+?=([\s-_\w_]+)/g;
  var utmParams = window.location.href.match(regex);
  for (i = 0; i < utmParams.length; i++) { 
    document.cookie = utmParams[i].substring(1);
  }
  console.log( "UTM ready!" );
});
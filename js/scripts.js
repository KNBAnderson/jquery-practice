$(document).ready(function() {


  $("#toggle-container .clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle().hide();
  });

  $("#toggle-container img.clickable").click(function() {
    $("#walrus-fade-in").fadeIn();

  });

  $("#fade-container img.clickable").click(function() {
    $("#walrus-fade-in").fadeOut();
    $("#walrus-slide-in").slideToggle();
    // $("#walrus-slide-out").slideOut();
  });


});

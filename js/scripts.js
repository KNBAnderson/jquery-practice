$(document).ready(function() {


  $("#toggle-container .clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle().hide();
    $("body").removeClass();
    $("body").addClass("tan-background")
  });

  $("#toggle-container img.clickable").click(function() {
    $("body").removeClass();
    $("body").addClass("orange-background");
    $("#walrus-fade-in").fadeIn();

  });

  $("#fade-container img.clickable").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
    $("#walrus-fade-in").fadeOut();
    $("#walrus-slide-in").slideToggle();
    // $("#walrus-slide-out").slideOut();
  });


});

// global variables
var numRed = 0;
var numYellow = 0;
var numGreen = 0;
var numBlue = 0;

$(document).ready(function() {
    console.log( "ready!" );

  $(".color-button,#red").on( "click", function () {
    numRed++;
    console.log(numRed);
    $("#red-total").text(numRed);
    $('<span class="color-cube red"></span>').appendTo("body");
  });

  $(".color-button,#yellow").on( "click", function () {
    numYellow++;
    console.log(numYellow);
    $("#yellow-total").text(numYellow);
    $('<span class="color-cube yellow"></span>').appendTo("body");
  });

  $(".color-button,#green").on( "click", function () {
     numGreen++;
     console.log(numGreen);
     $("#green-total").text(numGreen);
     $('<span class="color-cube green"></span>').appendTo("body");
  });

  $(".color-button,#blue").on( "click", function () {
     numBlue++;
     console.log(numBlue);
     $("#blue-total").text(numBlue);
     $('<span class="color-cube blue"></span>').appendTo("body");
  });
  });
//
//
// $(toDom).append('.color-cube');

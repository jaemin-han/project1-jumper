/*
Project Name: I'm Late to GA
Author: Jaemin Han
*/

document.addEventListener("DOMContentLoaded", function(event) {
console.log('ready.');

// Create 80 divs as a gameboard
var $container = $('.flex-container');

var $boxes = function () {
 for (var i = 0; i < 80; i++) {
  var $div = $('<div>');
  $div.addClass('flex-item');
  $container.append($div);
 }
}

$boxes();

//creating a player class under the container div
var $player = $('<div class="player"></div>');
$container.append($player);


// Create arrow movements for player
  $('body').keydown(function(move) {

    var position = $('.player').position();

    switch (move.keyCode)
    {
      case 37:
        $('.player').css('left', position.left - 60 + 'px');
        break;

      case 38:
        $('.player').css('top', position.top - 60 + 'px');
        break;

      case 39:
        $('.player').css('left', position.left + 60 + 'px');
        break;

      case 40:
        $('.player').css('top', position.top + 60 + 'px');
        break;
    }
  });



  });



/*
Project Name: I'm Late to GA
Author: Jaemin Han
*/

document.addEventListener("DOMContentLoaded", function(event) {
console.log('ready.');

// Create 80 divs as a gameboard
var $container = $('.flex-container');

var $boxes = function () {
 for (var i = 0; i < 40; i++) {
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
        // check collide
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

  // Obstabcle #1
  var img = $("#obstacle1"),
    width = img.get(0).width,
    screenWidth = $(".flex-container").width(),
    duration = 3000;

  function animateObsticle1() {
    img.css("left", -width).animate({
    "left": screenWidth
    }, duration, animateObsticle1);
    }

    animateObsticle1();


  // Obstacle #2
  var img2 = $("#obstacle2"),
    width = img2.get(0).width,
    screenWidth = $(".flex-container").width(),
    duration = 5000;

  function animateObsticle2() {
    img2.css("left", -width).animate({
    "left": screenWidth
    }, duration, animateObsticle2);
    }

    animateObsticle2();

// Trying to collide two objects
  var $player = $('.player');
  var $obstacle1 = $('#obstacle1');

  function divCollide($player, $obstacle1) {
    var playerTop = $player.offset().top;
    var playerLeft = $player.offset().left;
    var playerRight = Number($player.offset().left) + Number($player.width());
    var playerBottom = Number($player.offset().top) + Number($player.height());
    var obstacleTop = $obstacle1.offset().top;
    var obstacleLeft = $obstacle1.offset().left;
    var obstacleRight = Number($obstacle1.offset().left) + Number($obstacle1.width());
    var obstacleBottom = Number($obstacle1.offset().top) + Number($obstacle1.height());
    if (playerRight > obstacleLeft && playerLeft < obstacleRight && playerTop < playerBottom && playerBottom > obstacleTop) {
      console.log(playerRight);


      $('body').css('background-color', 'purple');

    }
  }

  $('body').on('keydown', function() {
  divCollide($player, $obstacle1);
});

});




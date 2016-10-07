/*
Project Name: I'm Late to GA
Author: Jaemin Han
*/

// document.addEventListener("DOMContentLoaded", function(event) {
console.log('ready.');

$(document).ready(function() {

// $(function(event) {


// Create 80 divs as a gameboard
var $container = $('.flex-container');

var $boxes = function () {
 for (var i = 0; i < 20; i++) {
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
        $('.player').css('left', position.left - 30 + 'px');
        divCollide($player, $obstacles);
        break;

      case 38:
        $('.player').css('top', position.top - 30 + 'px');
        divCollide($player, $obstacles);
        break;

      case 39:
        $('.player').css('left', position.left + 30 + 'px');
        divCollide($player, $obstacles);
        break;

      case 40:
        $('.player').css('top', position.top + 30 + 'px');
        divCollide($player, $obstacles);
        break;
    }
  });


//randomize obstacles at different speed
function getRandom(a, b) {
  return (Math.random()*a)+b;
}

// function myFunction() {
//   setInterval(function(){ alert("Hello"); }, 3000);
// }

  var $obstacles =$(".obstacles"),
    width = $obstacles.get(0).width,
    screenWidth = $(".flex-container").width(),
    duration = getRandom(4500, 500);

  function animateObsticles() {
    $obstacles.eq(0).css("left", -width).delay(getRandom(2000, 100)).animate({
    "left": screenWidth
    }, duration, animateObsticles);

    $obstacles.eq(1).css("left", -width).delay(getRandom(2000, 100)).animate({
    "left": screenWidth
    }, duration, animateObsticles);
  }

  animateObsticles();





  // Obstacle #2
  // var img2 = $("#obstacle2"),
  //   width = img2.get(0).width,
  //   screenWidth = $(".flex-container").width(),
  //   duration = 5000;

  // function animateObsticle2() {
  //   img2.css("left", -width).animate({
  //   "left": screenWidth
  //   }, duration, animateObsticle2);
  //   }

  //   animateObsticle2();

// Trying to collide two objects
  var $player = $('.player');
  var $obstacles = $('.obstacles');

  function divCollide($player, $obstacles) {
    var playerTop = $player.offset().top;
    var playerLeft = $player.offset().left;
    var playerRight = Number($player.offset().left) + Number($player.width());
    var playerBottom = Number($player.offset().top) + Number($player.height());
    var obstacleTop = $obstacles.offset().top;
    var obstacleLeft = $obstacles.offset().left;
    var obstacleRight = Number($obstacles.offset().left) + Number($obstacles.width());
    var obstacleBottom = Number($obstacles.offset().top) + Number($obstacles.height());
    if (playerRight > obstacleLeft && playerLeft < obstacleRight && playerTop < obstacleBottom && playerBottom > obstacleTop) {

      location.reload();

    }
  }

  // $('body').on('keydown', function() {
  //   $obstacles.each(function() {
  //     divCollide($player,$(this));
  //   })
  //   // divCollide($player, $obstacles);
  // });

  setInterval(function() {
    $obstacles.each(function() {
      divCollide($player,$(this));
    })
  }, 100);


//looping through the when it gets to the end

// function

});

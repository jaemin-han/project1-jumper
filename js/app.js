/*
Project Name: NYC Jumper
Author: Jaemin Han
*/

// document.addEventListener("DOMContentLoaded", function(event) {
console.log('ready.');

$(document).ready(function() {

// $(function(event) {


// Create 80 divs as a gameboard
var $container = $('.flex-container');

var $boxes = function () {
 for (var i = 0; i < 30; i++) {
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
        $('.player').css('left', position.left - 20 + 'px');
        divCollide($player, $obstacles);
        win($player, $winning);
        break;

      case 38:
        $('.player').css('top', position.top - 20 + 'px');
        divCollide($player, $obstacles);
        win($player, $winning);
        break;

      case 39:
        $('.player').css('left', position.left + 20 + 'px');
        divCollide($player, $obstacles);
        win($player, $winning);
        break;

      case 40:
        $('.player').css('top', position.top + 20 + 'px');
        divCollide($player, $obstacles);
        win($player, $winning);
        break;
    }
  });


//randomize obstacles at [1] different starting speed and [2] movement speed
function getRandom(a, b) {
  return (Math.random()*a)+b;
}

  var $obstacles =$(".obstacles");
  var width = $obstacles.get(0).width;
  var screenWidth = $(".flex-container").width();
  var duration = getRandom(3500, 1000);


  function animateObsticles() {
    $obstacles.eq(0).css("left", -width).delay(getRandom(2000, 100)).animate({
    "left": screenWidth}, duration, animateObsticles);

    $obstacles.eq(1).css("left", -width).delay(getRandom(3000, 1000)).animate({
    "left": screenWidth}, duration, animateObsticles);

    $obstacles.eq(2).css("left", -width).delay(getRandom(2000, 1000)).animate({
    "left": screenWidth}, duration, animateObsticles);

    }

  animateObsticles();

// Trying to loop obstacles left to right
function leftToRight(){
  var $right = $('.right');
  var location = -50;
  setInterval(function(){
    $right.css('left', location + 'px');
    if (location > 1200) {
      location = -50;
    } else {
      location += 20;
    }
  }, 100);
};

  leftToRight();

function leftToRight2(){
  var $ob8 = $('#obstacle8');
  var location = -300;
  setInterval(function(){
    $ob8.css('left', location + 'px');
    if (location > 1200) {
      location = -50;
    } else {
      location += 20;
    }
  }, 100);
};

  leftToRight2();



// Trying to move obstacles from right to left
function rightToLeft(){
  var $ob4 = $('#obstacle4');
  var distance = 1200;
  setInterval(function(){
    $ob4.css('left', distance + 'px');
    if (distance < -50) {
      distance = 1200;
    } else {
      distance -= 20;
    }
  }, 100);
};

  rightToLeft();

  function rightToLeft1(){
    var $ob5 = $('#obstacle5');
    var distance = 800;
  setInterval(function(){
    $ob5.css('left', distance + 'px');
    if (distance < -50) {
      distance = 1200;
    } else {
      distance -= 20;
    }
  }, 100);
};

  rightToLeft1();




//Collide detaction on all obstacles when the player moves
//Detection based on movement 'left' 'up' 'right' 'down'
//Assistance from Matt Keigwin to make the detection
//Created custom box to set alert, text, and reload
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
      alert("Shoot~! Next Time look left and right before crossing.")
      location.reload();
    }
  }

  setInterval(function() {
    $obstacles.each(function() {
      divCollide($player,$(this));
    })
  }, 100);

// If a player reaches the bottom of the page - alert occurs
  var $winning = $('.finish');

  function win($player, $winning){
    var playerBottom = Number($player.offset().top) + Number($player.height());
    var finishBottom = Number($winning.offset().top) + Number($winning.height());
    if(playerBottom > finishBottom) {
      alert("Winning! You survived. Play Again!");
      location.reload();
    }
  }
  win($player, $winning);


});

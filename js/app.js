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
var $gif_img = $('<img src="img/playernew.gif">');
$player.append($gif_img);
$container.append($player);


// Create arrow movements for player

// var playerLeft = 0;

$('body').keydown(function(move) {
  var position = $('.player').position();

  switch (move.keyCode)
  {
    case 37:
      if(position.left >=4){
        $('.player').css('left', position.left - 20 + 'px');
      } else {
        return false;
      }
      divCollide($player, $obstacles);
      win($player, $winning);
      break;

    case 38:
      if(position.top >=1){
        $('.player').css('top', position.top - 20 + 'px');
      } else {
        return false;
      }
      divCollide($player, $obstacles);
      win($player, $winning);
      break;

    case 39:
      if(position.left <= 1220) {
        $('.player').css('left', position.left + 20 + 'px');
      } else {
        return false;
      }
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


//randomize obstacles at
//1. different starting speed
//2. movement speed
function getRandom(a, b) {
  return (Math.random()*a)+b;
}

var $obstacles =$(".obstacles");
var width = $obstacles.get(0).width;
var screenWidth = $(".flex-container").width();
var duration = getRandom(1500, 1000);

function animateObsticles() {
  $obstacles.eq(0).css("left", -width).delay(getRandom(5000, 2500)).animate({
  "left": screenWidth}, duration, animateObsticles);

  $obstacles.eq(1).css("left", -width).delay(getRandom(5000, 3000)).animate({
  "left": screenWidth}, duration, animateObsticles);

  $obstacles.eq(2).css("left", -width).delay(getRandom(4000, 2000)).animate({
  "left": screenWidth}, duration, animateObsticles);
  }

animateObsticles();


// Trying to loop obstacles left to right
//Below are list of obstacles with different speed and location
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

function leftToRight1(){
  var $right1 = $('.right1');
  var location = -85;
  setInterval(function(){
    $right1.css('left', location + 'px');
    if (location > 1200) {
      location = -70;
    } else {
      location += 45;
    }
  }, 100);
};

leftToRight1();

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

function leftToRight3(){
  var $ob8a = $('#obstacle8a');
  var location = -150;
  setInterval(function(){
    $ob8a.css('left', location + 'px');
    if (location > 1200) {
      location = -120;
    } else {
      location += 35;
    }
  }, 100);
};

leftToRight3();

function leftToRight4(){
  var $ob8b = $('#obstacle8b');
  var location = -450;
  setInterval(function(){
    $ob8b.css('left', location + 'px');
    if (location > 1200) {
      location = -120;
    } else {
      location += 45;
    }
  }, 100);
};

leftToRight4();

function leftToRight5(){
  var $ob8c = $('#obstacle8c');
  var location = -150;
  setInterval(function(){
    $ob8c.css('left', location + 'px');
    if (location > 1200) {
      location = -100;
    } else {
      location += 15;
    }
  }, 100);
};

leftToRight5();


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

function rightToLeft2(){
  var $ob7a = $('#obstacle7a');
  var distance = 400;
  setInterval(function(){
    $ob7a.css('left', distance + 'px');
    if (distance < -50) {
      distance = 1200;
    } else {
      distance -= 10;
    }
  }, 100);
};

rightToLeft2();

function rightToLeft3(){
  var $ob7b = $('#obstacle7b');
  var distance = 900;
  setInterval(function(){
    $ob7b.css('left', distance + 'px');
    if (distance < -50) {
      distance = 1200;
    } else {
      distance -= 25;
    }
  }, 100);
};

rightToLeft3();

function rightToLeft4(){
  var $ob7c = $('#obstacle7c');
  var distance = 400;
  setInterval(function(){
    $ob7c.css('left', distance + 'px');
    if (distance < -50) {
      distance = 1200;
    } else {
      distance -= 45;
    }
  }, 100);
};

rightToLeft4();

function rightToLeft5(){
  var $ob7d = $('#obstacle7d');
  var distance = 350;
  setInterval(function(){
    $ob7d.css('left', distance + 'px');
    if (distance < -60) {
      distance = 1250;
    } else {
      distance -= 55;
    }
  }, 100);
};

rightToLeft5();

function rightToLeft6(){
  var $ob7e = $('#obstacle7e');
  var distance = 190;
  setInterval(function(){
    $ob7e.css('left', distance + 'px');
    if (distance < -55) {
      distance = 1100;
    } else {
      distance -= 45;
    }
  }, 100);
};

rightToLeft6();

function rightToLeft7(){
  var $ob7f = $('#obstacle7f');
  var distance = 190;
  setInterval(function(){
    $ob7f.css('left', distance + 'px');
    if (distance < -50) {
      distance = 1250;
    } else {
      distance -= 35;
    }
  }, 100);
};

rightToLeft7();


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
var score = $('#score');
var gameScore = 0;

function win($player, $winning){
  var playerBottom = Number($player.offset().top) + Number($player.height());
  var finishBottom = Number($winning.offset().top) + Number($winning.height());
  if(playerBottom > finishBottom) {

    gameScore+=1;
    $('#score').text(gameScore);
    scorePlus();

  }
}

win($player, $winning);


// Adding refresh with score plus plus
function scorePlus(){
  $player.offset({top: 0, left: 650}).top = 0;
}


//Please note -- this code is from our group's project [WDI w02-d03 lab]
//Using the form method to get Player's name and favorite food on the second page
//I manipulated the code to fit in my code
// function courtesy of http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
var players;

(window.onpopstate = function () {
  var match;
  var pl = /\+/g;  // Regex for replacing addition symbol with a space
  var search = /([^&=]+)=?([^&]*)/g;
  var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
  var query  = window.location.search.substring(1);

    players = {};

    while (match = search.exec(query))
      players[decode(match[1])] = decode(match[2]);
})();

// creates a div for the cart, and attaches a section inside
function playerName (info) {

  //creates a new section and list for each product
  var $playerName = document.createElement('table');
  $playerName.setAttribute('class', "cart-table");

  for (var property in info) { //appends a list of the user's custom selections
    var $item = document.createElement('td');
    var $itemProp = document.createElement('td');
    var $column= document.createElement('tr');
    $item.setAttribute('class', "item-name");
    $itemProp.setAttribute('class', "item-prop");
    $item.innerHTML = property;
    $itemProp.innerHTML = info[property];
    $column.appendChild($item);
    $column.appendChild($itemProp);
    $playerName.appendChild($column);
  }
  document.getElementById('player_name').appendChild($playerName);
}

playerName(players);

});

/*
#######################
#  **HTML REFERNCE**  #
#######################
# Scoring Varibles:   #
#   #targetValue      #
#   #userValue        #
#   #userWins         #
#   #userLoses        #
#######################
# Card Varibles:      #
#   #spades           #
#   #hearts           #
#   #clubs            #
#   #diamonds         #
#   .playingCard      #
#######################
*/

console.log("External JS Loaded - main.js")

$(document).ready(function() { console.log("JQuery Loaded");
var userWins = 0;
var userLoses = 0;
var userScore;
var spadesValue;
var heartsValue;
var clubsValue;
var diamondsValue;
var goalValue;

function newGame() {
spadesValue = Math.floor(Math.random() * 20);
heartsValue = Math.floor(Math.random() * 20);
clubsValue = Math.floor(Math.random() * 20);
diamondsValue = Math.floor(Math.random() * 20);

userScore = 0;
goalValue = Math.floor(Math.random() * 50) + 50;
console.log(goalValue);

// Setup Values
$('#targetValue').text(goalValue);
$('#userValue').text(userScore);
};

// Add Value to score on click
$('#spades').click(function() {
  userScore = userScore + spadesValue;
  $('#userValue').text(userScore);
  checkScore();
} );

$('#hearts').click(function() {
  userScore = userScore + heartsValue;
  $('#userValue').text(userScore);
  checkScore();
} );

$('#clubs').click(function() {
  userScore = userScore + clubsValue;
  $('#userValue').text(userScore);
  checkScore();
} );

$('#diamonds').click(function() {
  userScore = userScore + diamondsValue;
  $('#userValue').text(userScore);
  checkScore();
} );

function checkScore() {
  if (userScore === goalValue) {
    alert("You win!");
    userWins++;
    $('#userWins').text(userWins);
    newGame();
  }
  else if (userScore > goalValue) {
    alert("woops! You lost this round!");
    userLoses++;
    $('#userLoses').text(userLoses);
    newGame();
  }
};

newGame();

});

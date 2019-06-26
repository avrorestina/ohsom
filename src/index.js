import Scissor from "../src/scissor.js";
import Game from "../src/game.js";

var canvas = document.getElementById("gameScreen");
var battleText = document.getElementById("battleText");
var scissor_image = document.getElementById("scissor");
var rock_image = document.getElementById("rock");
var paper_image = document.getElementById("paper");
var scissor = new Scissor();

scissor_image.addEventListener("click", function() {
  //battleText.innerHTML = "Scissor";
  var game = new Game("Scissor");
  game.update(battleText);
});

rock_image.addEventListener("click", function() {
  //battleText.innerHTML = "Rock";
  var game = new Game("Rock");
  game.update(battleText);
});

paper_image.addEventListener("click", function() {
  //battleText.innerHTML = "Paper";
  var game = new Game("Paper");
  game.update(battleText);
});

//This is animation file in javascript in case CSS animation doesnt work

//End of animation section

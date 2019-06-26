export default class Game {
  constructor(type) {
    this.type = type;
  }

  update(text) {
    var typeArray = ["Rock", "Paper", "Scissor"];
    var rand = typeArray[Math.floor(Math.random() * typeArray.length)];
    console.log(rand);

    if (rand == "Rock") {
      if (this.type == "Scissor") {
        text.innerHTML = " You pick Scissor";
        setTimeout(function() {
          text.innerHTML = "Opponent pick Rock";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Scissor vs Rock = You lose!";
        }, 2500);
      } else if (this.type == "Rock") {
        text.innerHTML = "You pick Rock";
        setTimeout(function() {
          text.innerHTML = "Opponent pick Rock";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Rock vs Rock = Draw!";
        }, 2500);
      } else if (this.type == "Paper") {
        text.innerHTML = "You pick Paper";
        setTimeout(function() {
          text.innerHTML = "Opponent pick Rock";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Paper vs Rock = You win!";
        }, 2500);
      }
    } else if (rand == "Paper") {
      if (this.type == "Scissor") {
        text.innerHTML = "You pick Scissor";
        setTimeout(function() {
          text.innerHTML = "Opponent pick paper";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Scissor vs Paper = You win!";
        }, 2500);
      } else if (this.type == "Rock") {
        text.innerHTML = "You pick Rock";
        setTimeout(function() {
          text.innerHTML = "Opponent pick paper";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Rock vs Paper = You lose!";
        }, 2500);
      } else if (this.type == "Paper") {
        text.innerHTML = "You pick Paper";
        setTimeout(function() {
          text.innerHTML = "Opponent pick paper";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Paper vs Paper = Draw!";
        }, 2500);
      }
    } else if (rand == "Scissor") {
      if (this.type == "Scissor") {
        text.innerHTML = " You pick Scissor";
        setTimeout(function() {
          text.innerHTML = "Opponent pick Scissor";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Scissor vs Scissor = Draw!";
        }, 2500);
      } else if (this.type == "Rock") {
        text.innerHTML = "You pick Rock";
        setTimeout(function() {
          text.innerHTML = "Opponent pick Scissor";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Rock vs Scissor = You win!";
        }, 2500);
      } else if (this.type == "Paper") {
        text.innerHTML = "You pick Paper";
        setTimeout(function() {
          text.innerHTML = "Opponent pick Scissor";
        }, 1500);
        setTimeout(function() {
          text.innerHTML = "Paper vs Scissor = You lose!";
        }, 2500);
      }
    }
  }
}

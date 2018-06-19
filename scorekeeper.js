var player1b = document.querySelector("#p1");
var player2b = document.getElementById("p2");
var resetButton = document.getElementById('reset');
var player1score = document.querySelector("#player1s")
var player2score = document.querySelector("#player2s")
var numInput = document.querySelector("input");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");
var p1 = 0;
var p2 = 0;
var gameOver = false;
var winningScore = 5;

player1b.addEventListener("click", function(){
  if(!gameOver){
    p1++;
    if(p1 === winningScore) {
      player1score.classList.add("winner")
      gameOver = true;
    }
    player1score.textContent = p1;
  }
})

player2b.addEventListener("click", function(){
  if(!gameOver){
    p2++;
    if(p2 === winningScore) {
      player2score.classList.add("winner")
      gameOver = true;
    }
    player2score.textContent = p2;
  }
})

resetButton.addEventListener('click', function(){
  reset();
})

function reset(){
  p1 = 0;
  p2 = 0;
  player1score.textContent = 0;
  player2score.textContent = 0;
  player1score.classList.remove("winner");
  player2score.classList.remove("winner");
  gameOver = false;
}


numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value)
  reset();
})
var player1b = document.querySelector("#p1");
var player2b = document.getElementById("p2");
var player1score = document.querySelector("#player1s")
var player2score = document.querySelector("#player2s")

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


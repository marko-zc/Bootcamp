var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p = document.querySelector("p");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function() {
    if(!gameOver){
        p1Score++;
        if (p1Score === winningScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
// increaseScore(1);

});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++; 
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
    
    // increaseScore(2);
});

resetButton.addEventListener("click", function(){
    resetScores();
});

// function increaseScore(player) {
//     if(!gameOver){

//         if (player === 1) {
//             p1Display.textContent = ++p1Score;
//         } else if (player === 2) {
//             p2Display.textContent = ++p2Score;
//         }
//         if(p2Score === winningScore){
//             gameOver = true;
//         }
//     }
// }

function resetScores() {
    // 1. reset scores to 0
    p1Score = 0;
    p2Score = 0;
    // 2. display scores

    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
    
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    resetScores();
});
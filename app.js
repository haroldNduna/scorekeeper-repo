const player1 = {
score : 0,
button : document.querySelector('#player1Button'),
display : document.querySelector('#player1ScoreDisplay'),
}

const player2 = {
    score : 0,
    button : document.querySelector('#player2Button'),
    display : document.querySelector('#player2ScoreDisplay'),
    }


const resetSelected = document.querySelector('#reset');
const scoreLimit = document.querySelector('#scoreLimit')
let winningScore = 3;
let isGameOver = false;

function updateScores (player , opponent){
    if (!isGameOver) {
        player.score += 1;

        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function () {
   updateScores(player1, player2)
})

player2.button.addEventListener('click', function () {
    updateScores(player2,player1)
})

scoreLimit.addEventListener('change', function () {
    //using parseint to convert string to int
    winningScore = parseInt(this.value);
    functionToReset()
})

resetSelected.addEventListener('click', functionToReset)

function functionToReset() {
        isGameOver = false;
        for(let playerLoop of [player1, player2]){
            playerLoop.score = 0;
            playerLoop.display.textContent = 0;
            playerLoop.display.classList.remove('has-text-success', 'has-text-danger');
            playerLoop.button.disabled = false;

}
 }
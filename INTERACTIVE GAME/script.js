

let playGame = confirm("Let's play rock, paper or scissors?");
if(playGame){
    //play
    let playerChoice = prompt("Please enter rock, paper or scissors.");
    if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne ==="paper" || playerOne === "scissors"){
            

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" 
            : computerChoice === 2 ? "paper"
            :"scissors" ;

            let result = 
            playerOne === computer
            ? "Tie game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne : ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne : ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne : ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne : ${playerOne}\nComputer: ${computer}\nplayer wins!`
            alert(result);

            let playAgain  = confirm("Play Again?");
            playAgain ? location.reload() : alert("ok thanks for playing");


        }else{
            alert("You didn't enter rock, paper or scissors")
        }

    }else{
        alert("Guess you changed your mind, maybe next time.")
    }

}else{
    //cancel
    alert("Okay, maybe next time.")
}
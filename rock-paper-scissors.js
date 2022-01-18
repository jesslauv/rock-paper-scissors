function computerPlay() {
    const randInt = Math.floor(Math.random() * ((2-0+1)));
    console.log(randInt)
    switch (randInt) {
        case 0:
            return "paper"
            break;
        case 1:
            return "scissors"
            break;
        case 2:
            return "rock"
    }
}

function playRound(computer, player) {
    if (computer ===  player) {
        console.log("It's a tie!")
        return "tie"
    }
    if (computer == "rock") {
        if (player === "scissors") {
            console.log("You Lose! Rock beats Scissors")
            return "lose"
        }
        if (player === "paper")  {
            console.log("You Win! Paper beats Rock")
            return "win"
        }
    }
    if (computer == "scissors") {
        if (player === "paper") {
            console.log("You Lose! Scissors beats Paper")
            return "lose"
        }
        if (player === "rock")  {
            console.log("You Win! Rock beats Scissors")
            return "win"
        }
    }
    if (computer == "paper") {
        if (player === "rock") {
            console.log("You Lose! Paper beats Rock")
            return "lose"
        }
        if (player === "scissors")  {
            console.log("You Win! Scissors beats Paper")
            return "win"
        }
    }
}




function game() {
    let counter = 0 
    for (let i=0; i<5; i++) {
        const computerChoice = computerPlay()
        let playerChoice = ""
        while (true) {
            playerChoice = prompt("Rock, Paper or Scissors?")
            playerChoice = playerChoice.toLowerCase()
            if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
                break
            }
        } 
        let gameResult = playRound(computerChoice, playerChoice);
        counter += keepTally(gameResult)
        if (gameResult === "tie") {
            i--
        }
    }

    if (counter >= 3) {
        console.log("WINNER! You won " + counter + " out of 5 games.")
    }
    else {
        console.log("LOSER! You won " + counter + " out of 5 games.")
    }

    
}

function keepTally(gameResult) {
    if (gameResult === "win") {
        tally = 1
    }
    else {
        tally = 0 
    }
    return tally;
}

game()
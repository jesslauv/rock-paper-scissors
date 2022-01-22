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

const bod = document.querySelector("body")
const roundResultDiv = document.createElement("h1")
const buttonContainer = document.getElementById("button-container")

function removeChoices() {
    buttonContainer.style.display = "none"
}

const displayRoundChoices = document.createElement("div")
const computerChoiceImg = document.createElement("img")
const playerChoiceImg = document.createElement("img")

displayRoundChoices.appendChild(playerChoiceImg)
const vs = document.createElement("h1")
vs.textContent = "vs"
displayRoundChoices.appendChild(vs)
displayRoundChoices.appendChild(computerChoiceImg)

function displayPlayerVsComputerChoices(computer, player) {
    
    bod.insertBefore(displayRoundChoices, runningScore)
    displayRoundChoices.style.display = "flex"
    displayRoundChoices.style.gap = "30px"

    if (player === "rock") {
    
        playerChoiceImg.src = "./images/rock.jpeg"
        
    }
    if (player === "scissors") {
        
        playerChoiceImg.src = "./images/scissors.jpeg"
       
    }
    if (player === "paper") {
        
        playerChoiceImg.src = "./images/paper.jpeg"
       
    }

    if (computer === "rock") {
        
        computerChoiceImg.src = "./images/rock.jpeg"
        
    }
    if (computer === "scissors") {
       
        computerChoiceImg.src = "./images/scissors.jpeg"
        
    }
    if (computer === "paper") {
       
        computerChoiceImg.src = "./images/paper.jpeg"
        
    }  
}

function playRound(computer, player) {
    removeChoices()
    displayPlayerVsComputerChoices(computer, player)
    if (computer ===  player) {
        roundResultDiv.textContent = "It's a tie!"
        roundResultDiv.classList.add("tie")
        bod.appendChild(roundResultDiv) 
        createNextRoundButton()
        return "tie"
    }
    if (computer == "rock") {
        if (player === "scissors") {
            roundResultDiv.textContent = "You Lose! Rock beats Scissors"
            roundResultDiv.classList.add("lose")
            bod.appendChild(roundResultDiv) 
            createNextRoundButton()
            return "lose"
        }
        if (player === "paper")  {
            roundResultDiv.textContent = "You Win! Paper beats Rock" 
            roundResultDiv.classList.add("win")
            bod.appendChild(roundResultDiv) 
            createNextRoundButton()
            return "win"
        }
    }
    if (computer == "scissors") {
        if (player === "paper") {
            roundResultDiv.textContent= "You Lose! Scissors beats Paper"
            roundResultDiv.classList.add("lose")
            bod.appendChild(roundResultDiv) 
            createNextRoundButton()
            return "lose"
        }
        if (player === "rock")  {
            roundResultDiv.textContent = "You Win! Rock beats Scissors"
            roundResultDiv.classList.add("win")
            bod.appendChild(roundResultDiv) 
            createNextRoundButton()
            return "win"
        }
    }
    if (computer == "paper") {
        if (player === "rock") {
            roundResultDiv.textContent = "You Lose! Paper beats Rock" 
            roundResultDiv.classList.add("lose")
            bod.appendChild(roundResultDiv) 
            createNextRoundButton()
            return "lose"
        }
        if (player === "scissors")  {
            roundResultDiv.textContent = "You Win! Scissors beats Paper" 
            roundResultDiv.classList.add("win")
            bod.appendChild(roundResultDiv) 
            createNextRoundButton()
            return "win"
        }
    }
   
}


const nextRound = document.createElement("button") 

function createNextRoundButton() {    
    nextRound.textContent = "Next Round"
    nextRound.style.id = "nextRound"
    bod.insertBefore(nextRound, roundResultDiv)
    console.log(nextRound)
    nextRound.addEventListener("click", startNextRound)
}

function startNextRound() {
    displayRoundChoices.remove();
    buttonContainer.style.display = "flex";
    nextRound.remove()
}



const btns = document.querySelectorAll("img")
Array.from(btns).forEach((btn) => btn.addEventListener("mouseover", (e) => {
    e.target.classList.add("hovering")
}))

Array.from(btns).forEach((btn) => btn.addEventListener("click", callPlayRound))

Array.from(btns).forEach(btn => btn.addEventListener("mouseout", (e) => {
    e.target.classList.remove('hovering')
}))


computerCounter = 0;
playerCounter = 0;
const runningScore = document.createElement("h1")
runningScore.textContent = `Computer: 0
                                 You: 0`
bod.appendChild(runningScore)

const gameOver = document.createElement("h1")
gameOver.style.display = "flex"
gameOver.style.flexDirection = "column"
gameOver.style.justifyContent = "center"
gameOver.style.flex = "1"
gameOver.style.alignItems = "center"

function callPlayRound(e) {
    const roundResult = playRound(computerPlay(), e.target.id)
    console.log(e.target.id)

    if (roundResult === "win") {
        playerCounter++;
    }
    if (roundResult === "lose") {
        computerCounter++;
    }
    runningScore.textContent = `Computer: ${computerCounter}
                                     You: ${playerCounter}`
    if (computerCounter === 5) {
        testIfPlayedBefore()
        roundResultDiv.remove()
        gameOver.textContent = "Sorry, you lost the game." 
        gameOverActions()

    }
    if (playerCounter === 5) {
        testIfPlayedBefore()
        roundResultDiv.remove()
        gameOver.textContent = "CONGRATS! You won the game!"   
        gameOverActions()
        
    }
}
const restartButton = document.createElement("button") 
function createRestartButton(gameOverDiv) {
    restartButton.textContent = "Play again"
    restartButton.id = "replay"
    gameOver.appendChild(restartButton)
}

function testIfPlayedBefore() {
    if (gameOver.style.display === "none") {
        gameOver.style.display = "flex"
    }
}

function gameOverActions() {
    bod.insertBefore(gameOver, buttonContainer)
    buttonContainer.style.display = "none"
    createRestartButton(gameOver)
    displayRoundChoices.remove()
    nextRound.remove()
}


console.log(restartButton)
restartButton.addEventListener("click", playAgain)

function playAgain() {
    // console.log("buttonContainer")
    buttonContainer.style.display = "flex"
    gameOver.style.display = "none"
    computerCounter = 0
    playerCounter = 0 
    runningScore.textContent = `Computer: ${computerCounter}
                                     You: ${playerCounter}`
}

// runningScore.textContent = `${counter} / 5`

// function game() {
    
//     for (let i=0; i<5; i++) {
//         if (roundResultDiv.className === "win") {
//             counter++;
//         }
//         if (roundResultDiv.className === "tie") {
//             i--;
//         }
//         console.log('test')
//         runningScore.textContent = `${counter} / 5`
//     }
// }
// game()





// function game() {
//     let counter = 0 
//     for (let i=0; i<5; i++) {
//         const computerChoice = computerPlay()
//         let playerChoice = ""
//         while (true) {
//             playerChoice = prompt("Rock, Paper or Scissors?")
//             playerChoice = playerChoice.toLowerCase()
//             if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
//                 break
//             }
//         } 
//         let gameroundResultDiv = playRound(computerChoice, playerChoice);
//         counter += keepTally(gameroundResultDiv)
//         if (gameroundResultDiv === "tie") {
//             i--;
//         }
//     }

//     if (counter >= 3) {
//         console.log("WINNER! You won " + counter + " out of 5 games.")
//     }
//     else {
//         console.log("LOSER! You won " + counter + " out of 5 games.")
//     }

    
// }

// function keepTally(gameroundResultDiv) {
//     if (gameroundResultDiv === "win") {
//         tally = 1
//     }
//     else {
//         tally = 0 
//     }
//     return tally;
// }

// game()
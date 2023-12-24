let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const winAudio = document.getElementById("win");
const lostAudio = document.getElementById("lost");
const drawAudio = document.getElementById("draw");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(
        userChoice
    )}${smallUserWord} beats  ${convertToWord(
        computerChoice
    )}${smallCompWord} . You win!`;
    winAudio.play();
}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    computerScore.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(
        userChoice
    )}${smallUserWord} loses to  ${convertToWord(
        computerChoice
    )}${smallCompWord} . You lost!`;
    lostAudio.play();
}
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(
        userChoice
    )}${smallUserWord} equal to  ${convertToWord(
        computerChoice
    )}${smallCompWord} . Draw😑.`;
    drawAudio.play();
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    });

    paper_div.addEventListener("click", function () {
        game("p");
    });

    scissor_div.addEventListener("click", function () {
        game("s");
    });
}
main();

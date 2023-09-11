const ball = document.getElementById("ball");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let ballX = 0;
let ballY = 0;
let ballSpeedX = 5;
let ballSpeedY = 5;

function updateBallPosition() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY >= 380 || ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballX >= 780 || ballX <= 0) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX <= 30 && ballY >= parseInt(player1.style.top) && ballY <= parseInt(player1.style.top) + 100) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX >= 750 && ballY >= parseInt(player2.style.top) && ballY <= parseInt(player2.style.top) + 100) {
        ballSpeedX = -ballSpeedX;
    }

    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "o" && parseInt(player2.style.top) > 0) {
        player2.style.top = parseInt(player2.style.top) - 10 + "px";
    }

    if (event.key === "l" && parseInt(player2.style.top) < 300) {
        player2.style.top = parseInt(player2.style.top) + 10 + "px";
    }

    if (event.key === "w" && parseInt(player1.style.top) > 0) {
        player1.style.top = parseInt(player1.style.top) - 10 + "px";
    }

    if (event.key === "s" && parseInt(player1.style.top) < 300) {
        player1.style.top = parseInt(player1.style.top) + 10 + "px";
    }
});

setInterval(updateBallPosition, 1000 / 60);

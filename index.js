let homePoints = document.getElementById("home-score")
let awayPoints = document.getElementById("away-score")


function add1Home() {
    homePoints.textContent = +homePoints.textContent + 1
}

function add2Home() {
    homePoints.textContent = +homePoints.textContent + 2
}

function add3Home() {
    homePoints.textContent = +homePoints.textContent + 3
}

function add1Away() {
    awayPoints.textContent = +awayPoints.textContent + 1
}

function add2Away() {
    awayPoints.textContent = +awayPoints.textContent + 2
}

function add3Away() {
    awayPoints.textContent = +awayPoints.textContent + 3
}

function newGame() {
    awayPoints.textContent = "0"
    homePoints.textContent = "0"
}


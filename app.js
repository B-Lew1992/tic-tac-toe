const player1 = { mark: "X" };
const player2 = { mark: "O" };
let turn = "player1";
let moveCount = 0

const board = document.getElementById("board");
const rematch = document.getElementById("playAgain");
let start = document.getElementById("start");

// Getting player 1s name from the user
let playerName1 = window.prompt("player 1's name :X");
// Filling in the space for player 1s name
let player1Input = document.getElementById("player1");
player1Input.value = playerName1;

// Getting player 1s name from the user
let playerName2 = window.prompt("player 2's name :O");
// Filling in the space for player 2s name
let player2Input = document.getElementById("player2");
player2Input.value = playerName2;

let cell1 = document.getElementById("tile_1");
console.log(cell1);
cell1.addEventListener("click", playCell);
let cell2 = document.getElementById("tile_2");
cell2.addEventListener("click", playCell);
let cell3 = document.getElementById("tile_3");
cell3.addEventListener("click", playCell);
let cell4 = document.getElementById("tile_4");
cell4.addEventListener("click", playCell);
let cell5 = document.getElementById("tile_5");
cell5.addEventListener("click", playCell);
let cell6 = document.getElementById("tile_6");
cell6.addEventListener("click", playCell);
let cell7 = document.getElementById("tile_7");
cell7.addEventListener("click", playCell);
let cell8 = document.getElementById("tile_8");
cell8.addEventListener("click", playCell);
let cell9 = document.getElementById("tile_9");
cell9.addEventListener("click", playCell);

function switchTurn() {
  if (turn === "player1") {
    turn = "player2";
  } else if (turn === "player2") {
    turn = "player1";
  }
}

rematch.addEventListener("click", restartGame);

function restartGame() {
  cell1.innerText = "";
  cell2.innerText = "";
  cell3.innerText = "";
  cell4.innerText = "";
  cell5.innerText = "";
  cell6.innerText = "";
  cell7.innerText = "";
  cell8.innerText = "";
  cell9.innerText = "";
  moveCount = 0
}

function checkDraw() { 
  console.log({moveCount});
  if (moveCount === 9) {
    restartGame();
    alert("Draw!");
    return true
  }
}

function checkWinnerPlayer1() {
  // row 1
  if (
    cell1.innerText === "X" &&
    cell2.innerText === "X" &&
    cell3.innerText === "X"
  ) {
    alert(playerName1 + " Wins!");
    restartGame();
    return true;
  }
  // row 2
  if (
    cell4.innerText === "X" &&
    cell5.innerText === "X" &&
    cell6.innerText === "X"
  ) {
    restartGame();
    alert(playerName1 + " Wins!");
    return true;
  }
  // row 3
  if (
    cell7.innerText === "X" &&
    cell8.innerText === "X" &&
    cell9.innerHTML === "X"
  ) {
    restartGame();
    alert(playerName1 + " Wins!");
    return true;
  }
  // column 1
  if (
    cell1.innerText === "X" &&
    cell4.innerText === "X" &&
    cell7.innerText === "X"
  ) {
    restartGame();
    alert(playerName1 + " Wins!");
    return true;
  }
  // column 2
  if (
    cell2.innerText === "X" &&
    cell5.innerText === "X" &&
    cell8.innerText === "X"
  ) {
    restartGame();
    alert(playerName1 + " Wins!");
    return true;
  }
  // column 3
  if (
    cell3.innerText === "X" &&
    cell6.innerText === "X" &&
    cell9.innerText === "X"
  ) {
    restartGame();
    alert(playerName1 + " Wins!");
    return true;
  }

  // diagonal 1
  if (
    cell1.innerText === "X" &&
    cell5.innerText === "X" &&
    cell9.innerText === "X"
  ) {
    restartGame();
    alert(playerName1 + " Wins!");
    return true;
  }
  // diagonal 2
  if (
    cell3.innerText === "X" &&
    cell5.innerText === "X" &&
    cell7.innerText === "X"
  ) {
    restartGame();
    alert(playerName1 + " Wins!");
    return true;
  }
  checkDraw()
}

function checkWinnerPlayer2() {
  // row 1
  if (
    cell1.innerText === "O" &&
    cell2.innerText === "O" &&
    cell3.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
    // call reset board when its created
  }
  // row 2
  if (
    cell4.innerText === "O" &&
    cell5.innerText === "O" &&
    cell6.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
  }
  // row 3
  if (
    cell7.innerText === "O" &&
    cell8.innerText === "O" &&
    cell9.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
  }
  // column 1
  if (
    cell1.innerText === "O" &&
    cell4.innerText === "O" &&
    cell7.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
  }
  // column 2
  if (
    cell2.innerText === "O" &&
    cell5.innerText === "O" &&
    cell8.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
  }
  // column 3
  if (
    cell3.innerText === "O" &&
    cell6.innerText === "O" &&
    cell9.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
  }

  // diagonal 1
  if (
    cell1.innerText === "O" &&
    cell5.innerText === "O" &&
    cell9.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
  }
  // diagonal 2
  if (
    cell3.innerText === "O" &&
    cell5.innerText === "O" &&
    cell7.innerText === "O"
  ) {
    restartGame();
    alert(playerName2 + " Wins!");
    return true;
  }
  checkDraw()
}



function playCell(event) {
  console.log("clicked");
  let cell = event.target;
  console.log(event.target.id);

  if (turn === "player1") {
    // check to make sure there isn't a X or O there
    if (cell.innerText === "") {
      document.getElementById(event.target.id).innerText = "X";
      moveCount++
      checkWinnerPlayer1();
    }
  } else if (turn === "player2") {
    if (cell.innerText === "") {
      document.getElementById(event.target.id).innerText = "O";
      moveCount++
      checkWinnerPlayer2();
    }
  }

  switchTurn(); // <== this switch its to the other player
}

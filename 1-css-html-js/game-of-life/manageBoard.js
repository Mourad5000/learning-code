const boardElement = document.getElementsByClassName("board")[0];

function createDOMBoard(myBoard) {
  for (let i = 0; i < 10; i++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row", `row${i}`);
    for (let j = 0; j < 20; j++) {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell", `cell${i}${j}`);
      //evento onClick
      cellElement.onclick = function () {
        let boardValue = [i][j];
        if (boardValue === 1) {
          myBoard[i][j] = 0;
        } else {
          myBoard[i][j] = 1;
        }
        printBoard(myBoard);
      };
      rowElement.appendChild(cellElement);
    }
    boardElement.appendChild(rowElement);
  }
  return myBoard;
}

function printBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 20; j++) {
      const element = board[i][j];
      const cellElement = document.getElementsByClassName(`cell${i}${j}`)[0];
      if (element === 1) {
        cellElement.style.background = "#36A763";
      } else {
        cellElement.style.background = "black";
      }
    }
  }
}

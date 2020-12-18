const myBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let nextBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let timer = 0;

createDOMBoard(myBoard);
printBoard(myBoard);

function play() {
  mainGame(myBoard);
}

function stopBoard(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 20; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}

function stop() {
  clearInterval(timer);
}

function restart() {
  stopBoard(myBoard);
  printBoard(myBoard);
}

function mainGame(board) {
  timer = setInterval(() => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < 20; j++) {
        let numberOfNeighbours = 0;
        const element = board[i][j];
        //numero de vecinos
        numberOfNeighbours = checkNeighbours(i, j, board); //traigo el numero de vecinos de element
        //reglas
        //rules(element, numberOfNeighbours); //la llamo
        nextValueBoard = rules(element, numberOfNeighbours); //me traigo si es true (sera 1) o false (sera 0)
        if (nextValueBoard === true) {
          nextBoard[i][j] = 1;
        } else {
          nextBoard[i][j] = 0;
        }
      }
    }
    board = setBoardState(board, nextBoard);
    nextBoard = clearNextBoard(nextBoard);
    printBoard(board);
  }, 200);
}

function setBoardState(board, nextBoard) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 20; j++) {
      board[i][j] = nextBoard[i][j];
    }
  }

  return board;
}

function clearNextBoard(nextBoardParam) {
  for (let i = 0; i < nextBoardParam.length; i++) {
    for (let j = 0; j < 20; j++) {
      nextBoardParam[i][j] = 0;
    }
  }
  return nextBoardParam;
}

function checkNeighbours(row, col, board) {
  let cell = null;
  let neighbours = 0;
  try {
    cell = board[row - 1][col - 1];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  try {
    cell = board[row - 1][col];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  try {
    cell = board[row - 1][col + 1];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  try {
    cell = board[row][col - 1];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  try {
    cell = board[row][col + 1];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  try {
    cell = board[row + 1][col - 1];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  try {
    cell = board[row + 1][col];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  try {
    cell = board[row + 1][col + 1];
    if (cell === 1) {
      neighbours++;
    }
  } catch {}
  return neighbours;
}

function rules(cell, numberOfNeighbours) {
  if (cell === 1) {
    if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
      return true;
    }
    if (numberOfNeighbours > 3) {
      return false;
    }
    if (numberOfNeighbours < 2) {
      return false;
    }
  }

  if (cell === 0) {
    if (numberOfNeighbours === 3) {
      return true;
    } else {
      return false;
    }
  }
}

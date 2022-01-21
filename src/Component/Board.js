import React, { useState } from "react";
import History from "./History";
import WinningStatus from "./WinningStatus.js";
const Board = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), valueX: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  //to show x and y in squares
  const handleClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prevValue) => {
      const last = prevValue[prevValue.length - 1];
      const newBoard = last.board.map((elem, id) => {
        if (id === position) {
          return last.valueX ? "X" : "O";
        }
        return elem;
      });
      setCurrentMove(currentMove + 1);
      return prevValue.concat({ board: newBoard, valueX: !last.valueX });
    });
  };

  // to render the square in board
  const renderSquare = (position) => {
    return (
      <button
        className={`btn ${
          current.board[position] === "X" ? "green-text" : "red-text"
        }`}
        onClick={() => handleClick(position)}
      >
        {current.board[position]}
      </button>
    );
  };

  // to calculate the winner
  const calculateWinner = (currentBoard) => {
    let list = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < list.length; i++) {
      const [a, b, c] = list[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return;
  };
  const winner = calculateWinner(current.board);

  //start new game
  const startNewGame = () => {
    setHistory([{ board: Array(9).fill(null), valueX: true }]);
    setCurrentMove(0);
  };

  //move to
  const moveTo = (pos) => {
    setCurrentMove(pos);
  };

  return (
    <>
      <WinningStatus winner={winner} current={current} />
      <div className="container">
        <div className="container-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="container-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="container-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="newGameStart">
        <button
          onClick={startNewGame}
          className={`start_btn ${winner ? "start_btn_active" : ""}`}
        >
          Start New Game
        </button>
      </div>
      <History history={history} currentMove={currentMove} moveTo={moveTo} />
    </>
  );
};

export default Board;

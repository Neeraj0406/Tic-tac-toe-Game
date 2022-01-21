import React from "react";

const winningStatus = ({ winner, current }) => {
  const noMovesLeft = current.board.every((elem) => {
    return elem !== null;
  });

  return (
    <div>
      <h2 className="statusMessage ">
        {winner && (
          <>
            Winner is &nbsp;
            <span className={`${winner ? "green-text" : "red-text"}`}>
              {winner}
            </span>
          </>
        )}
        {!winner && !noMovesLeft && (
          <>
            <span className={`${current.valueX ? "green-text" : "red-text"}`}>
              {current.valueX ? "X " : "O "}
            </span>
            Turn
          </>
        )}
        {noMovesLeft && "Match is tied"}
      </h2>
    </div>
  );
};

export default winningStatus;

import React from "react";

const History = ({ history, currentMove, moveTo }) => {
  return (
    <div className="history_container">
      <ul className="list_ul">
        {history.map((elem, id) => {
          return (
            <li
              className={` lists_li ${id === currentMove ? "li_active" : ""}  `}
              onClick={() => moveTo(id)}
            >
              {id === 0 ? "go to game start" : `go to move ${id}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;

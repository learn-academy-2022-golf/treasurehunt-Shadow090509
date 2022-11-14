import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleGamePlay = (index) => {
    //alert(index);
    let updatedBoard = [...board];
    if (index === treasureLocation) {
      updatedBoard[index] = "💎";
      setBoard(updatedBoard);
      alert("Congrats! You win!");
    } else if (index === bombLocation) {
      updatedBoard[index] = "💣";
      setBoard(updatedBoard);
      alert("You lose. Try again.");
    } else {
      updatedBoard[index] = "🌴";
      setBoard(updatedBoard);
    }
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <h2>Guesses remaining:{[3]}</h2>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
      <div className="reset">
        <a href="#" class="btn" onclick="location.reload()">
          Play again
        </a>
      </div>
    </>
  );
};

export default App;

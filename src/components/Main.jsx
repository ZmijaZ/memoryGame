import { useState } from "react";
import CardList from "./game/CardList";

const Main = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => {
    setScore((prevState) => prevState + 1);
  };

  const handleGameOver = () => {
    setBestScore(score > bestScore ? score : bestScore);
    setScore(0);
  };

  return (
    <div>
      <h1>Cards:</h1>
      <h2>Score: {score}</h2>
      <h2>Best score: {bestScore}</h2>
      <CardList
        increaseScore={increaseScore}
        handleGameOver={handleGameOver}
      ></CardList>
    </div>
  );
};

export default Main;

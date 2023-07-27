import { useState } from "react";

const Card = (props) => {
  const { photo, name, gameOver, increaseScore, handleClickedItem } = props;

  const [isClicked, setIsClicked] = useState(false);

  const onClick = (e) => {
    if (isClicked) {
      gameOver(e);
    } else {
      setIsClicked(true);
      console.log("clicked");
      handleClickedItem(e);
      increaseScore();
    }
  };

  return (
    <div onClick={(e) => onClick(e)}>
      <img src={photo}></img>
      <h3>{name}</h3>
    </div>
  );
};

export default Card;

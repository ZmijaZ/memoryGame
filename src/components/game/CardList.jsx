import { useEffect, useState } from "react";
import characters from "./images";
import Card from "./Card";
import _ from "lodash";

const CardList = (props) => {
  const { increaseScore, handleGameOver } = props;

  const [index, setIndex] = useState(0);
  const [clickedItems, setClickedItems] = useState(new Set());
  const [list, setList] = useState(characters[index]);

  const handleClickedItem = (e) => {
    setClickedItems((prevState) => new Set([...prevState, e.target]));

    setList(_.shuffle(list));

    console.log(clickedItems.size);
  };

  const cleanClickedItems = () => {
    setClickedItems(new Set());
  };

  useEffect(() => {
    if (clickedItems.size == list.length) {
      setIndex((prevState) => prevState + 1);
      setList(characters[index + 1]);
      console.log(list);
      cleanClickedItems();
    }
  });

  useEffect(() => {}, [index, clickedItems]);

  const items = list.map((item) => (
    <Card
      key={item.name}
      photo={item.photo}
      name={item.name}
      gameOver={handleGameOver}
      handleClickedItem={handleClickedItem}
      increaseScore={increaseScore}
    ></Card>
  ));

  return <div>{items}</div>;
};

export default CardList;

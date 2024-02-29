import Card from "../components/Card";
import data from "../assets/data.json";
import { useState } from "react";

const CardList = () => {
    const [index, setIndex] = useState(0);

    function handleNextClick() {
      if (index < data.players.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setIndex(0);
      }
    }
    function handlePrevClick() {
      if (index == 0) {
        setIndex(data.players.length - 1);
    } else {
        setIndex((prev) => prev - 1);
      }
    }
  
  return (
    <div>
      <Card
        image_url={data.players[index].image_url}
        name={data.players[index].name}
        fifa_ratings={data.players[index].fifa_ratings}
        position={data.players[index].position}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </div>
  )
}

export default CardList

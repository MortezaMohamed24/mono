import Card from "../listCard";
import React from "react";
import BoardListCardCreator from "../listCardCreator";


interface CardsProps {
  idList: string;
  idCards: string[];
  indexOfCardCreator: number | undefined;
  shouldRenderCardCreator: boolean;
}

const Cards = React.memo<CardsProps>(({idList, idCards, indexOfCardCreator, shouldRenderCardCreator}) => {
  let cards = [];


  cards = idCards.map(idCard => (
    <Card 
      key={idCard} 
      idCard={idCard} 
    />
  ));


  if ((
    shouldRenderCardCreator
  ) && (
    indexOfCardCreator !== NaN
  ) && (
    indexOfCardCreator !== undefined
  ) && (
    indexOfCardCreator !== -Infinity
  )) {
    cards.splice(indexOfCardCreator, 0,
      <BoardListCardCreator
        key="cardCreator" 
        index={indexOfCardCreator} 
        idList={idList} 
      />
    );
  }


  return <>{cards}</>;
});


export default Cards;
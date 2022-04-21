import {State} from "/store";
import addOneCard from "./addOne";
import {CardRawUnnested} from "/cards/entity/rawUnnested";


function addManyCards(state: State, cards: CardRawUnnested[]) {
  for (let card of cards) {
    addOneCard(state, card);
  }
}


export default addManyCards;
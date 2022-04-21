import {State} from "/store";
import destroyOneCard from "./destroyOne";


function destroyManyCards(state: State, idCards: string[]) {
  for (let idCard of idCards) {
    destroyOneCard(state, {idCard});
  }
}


export default destroyManyCards;
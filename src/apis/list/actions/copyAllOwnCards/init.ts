import Config from "./config.js";
import COPY_ALL_OWN_CARDS from "./action.js";
import {PopulateListByBody} from "src/models/list/api/middlewares";


COPY_ALL_OWN_CARDS.push(PopulateListByBody<Config, "listB", "idListB">({
  listKey: "listB",
  idListKey: "idListB",
}));


COPY_ALL_OWN_CARDS.push(PopulateListByBody<Config, "listB", "idListB">({
  listKey: "listB",
  idListKey: "idListB",
}));


COPY_ALL_OWN_CARDS.push(async ({get, set}) => {
  const {listA, listB} = get();

  const cards = await listA.copyAllOwnCards(listB);

  set({cards});
});


COPY_ALL_OWN_CARDS.push(async ({get}) => {

  const cards = get().cards;
  const listB = get().listB;
  const boardB = await listB.board();
  const labels = await boardB.labels();

  return Object.freeze({
    cards: await Promise.all(cards.map(card => card.project())),
    labels: await Promise.all(labels.map(label => label.project())),
  });

});
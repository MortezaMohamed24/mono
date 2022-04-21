import MOVE from "./action.js";
import {Config} from "./index.js";
import {PopulateCardByBody} from "#models/card/api/middlewares";
import {PopulateListByBody} from "#models/list/api/middlewares";


MOVE.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


MOVE.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


MOVE.push(async ({get, body: {index}}) => {
  const {card, list} = get();

  await card.move(list, index);
});


MOVE.push(async ({get}) => {
  const card = get().card;
  const board = await card.board();
  const labels = await board.labels();

  return {
    card: await card.project(),
    labels: await Promise.all(labels.map(label => label.project())),
  };
});
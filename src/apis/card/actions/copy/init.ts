import COPY from "./action.js";
import Config from "./config.js";
import {PopulateCardByBody} from "src/models/card/api/middlewares";
import {PopulateListByBody} from "src/models/list/api/middlewares";


COPY.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


COPY.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


COPY.push(async ({get, set, body: {title, index, keepDates, keepLabels, keepChecklists}}) => {
  const {card, list} = get();


  const copy = await card.copy({
    list,
    title, 
    index, 
    keepDates, 
    keepLabels, 
    keepChecklists,
  });


  set({copy});
});


COPY.push(async ({get}) => {
  const copy = get().copy;
  const board = await copy.board();
  const labels = await board.labels();

  return {
    card: await copy.project(),
    labels: await Promise.all(labels.map(label => label.project())),
  };
});
import EDIT from "./action.js";
import save from "src/models/util/save";
import Config from "./config.js";
import {PopulateCardByBody} from "src/models/card/api/middlewares";


EDIT.push(PopulateCardByBody<Config, "card", "idCard">({
  cardKey: "card",
  idCardKey: "idCard",
}));


EDIT.push(async ({get, body: {dateDue, dateStart, title, isComplete, description}}) => {
  const {card} = get();

  if (title !== undefined) { card.title = title; }
  if (dateDue !== undefined) { card.dateDue = dateDue; }
  if (dateStart !== undefined) { card.dateStart = dateStart; }
  if (isComplete !== undefined) { card.isComplete = isComplete; }
  if (description !== undefined) { card.description = description; }

  await save(card);
});
import MOVE from "./action.js";
import Config from "./config.js";
import {PopulateListByBody} from "src/models/list/api/middlewares";
import {PopulateBoardByBody} from "src/models/board/api/middlewares";


MOVE.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


MOVE.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


MOVE.push(async ({get, body: {index}}) => {

  await get().list.move(get().board, index);

});


MOVE.push(async ({get}) => {

  const list = get().list;
  const board = get().board;
  const labels = await board.labels();

  return Object.freeze({
    list: await list.project(),
    labels: await Promise.all(labels.map(label => label.project())),
  });

});
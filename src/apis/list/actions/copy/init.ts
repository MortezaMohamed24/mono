import COPY from "./action.js";
import Config from "./config.js";
import {PopulateListByBody} from "src/models/list/api/middlewares";
import {PopulateBoardByBody} from "src/models/board/api/middlewares";


COPY.push(PopulateBoardByBody<Config, "board", "idBoard">({
  boardKey: "board",
  idBoardKey: "idBoard",
}));


COPY.push(PopulateListByBody<Config, "list", "idList">({
  listKey: "list",
  idListKey: "idList",
}));


COPY.push(async ({get, set, body: {title}}) => {
  const {list, board} = get();


  const copy = await list.copy({
    title,
    board,
    keepCards: true,
  });


  set({copy});
});


COPY.push(async ({get}) => {

  const copy = get().copy;
  const board = get().board;
  const labels = await board.labels();

  return Object.freeze({
    copy: await copy.project(),
    labels: await Promise.all(labels.map(label => label.project())),
  });

});
import bd from "src/models/board/crud";
import Board from "src/models/board/board";
import Error from "#util/error";
import {Oid} from "#util/oid";
import {NOT_FOUND} from "src/models/board/errors";
import {ActionFactoryConfig} from "src/models/util/apiAction";


function PopulateBoardByBody<
  Config extends ActionFactoryConfig,
  BoardKey extends keyof Config["locals"],
  IdBoardKey extends keyof Config["query"],
>({boardKey, idBoardKey}: {
  boardKey: BoardKey;
  idBoardKey: IdBoardKey;
}) {

  interface Argument {
    set(locals: {[Key in BoardKey]?: Board}): void; 
    query: {[Key in IdBoardKey]: Oid};
    idUser: Oid;
  }
  
  async function populateBoardByBody({set, query, idUser}: Argument) {
    const board = await bd.f(query[idBoardKey], {idUser});
  
    if (!board) {
      throw new Error(400, NOT_FOUND);
    }
  
    set({[boardKey]: board} as {[Key in BoardKey]?: Board});
  }


  return populateBoardByBody;
}


export default PopulateBoardByBody;
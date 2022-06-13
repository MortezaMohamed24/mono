import {Oid} from "#util/oid";
import Board from "src/models/board";
import {BOARD} from "../../../constants/paths.js";


function id(this: Board): Oid {
  return this._id;
}

function url(this: Board) {
  return `${BOARD.href}/${this.id.toString()}`;
}


export default Object.freeze({id, url});
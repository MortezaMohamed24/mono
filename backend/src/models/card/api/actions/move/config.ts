import List from "#models/list";
import Card from "#models/card";
import Board from "#models/board/model";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface Card$RequestConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {card: Card, list: List, board: Board, return: ReturnType};
  authorized: true;
}


export default Card$RequestConfig;
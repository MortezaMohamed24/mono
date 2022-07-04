import List from "src/models/list/List";
import Card from "src/Card";
import Board from "src/models/board/model";
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
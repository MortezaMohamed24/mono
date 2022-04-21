import list from "/lists/entity";
import label from "/labels/entity";
import {OID} from "/util/formatter";
import {title} from "/boards/fields";
import {theme} from "/boards/fields";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import BoardBase from "./base";
import {isStarred} from "/boards/fields";
import {dateLastView} from "/boards/fields";


export type BoardNative = Pick<BoardBase, 
  | "id"
  | "title"
  | "theme"
  | "idUser"
  | "idLists"
  | "idLabels"
  | "isStarred"
  | "dateLastView"
>



export default formatAsBoardNative;
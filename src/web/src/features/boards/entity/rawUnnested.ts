import {OID} from "/util/formatter";
import {title} from "/features/boards/fields";
import {theme} from "/features/boards/fields";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import BoardBase from "./base";
import {isStarred} from "/features/boards/fields";
import {dateLastView} from "/features/boards/fields";
import {formatAsListRawNested} from "/features/lists/entity";
import {formatAsLabelRawNested} from "/features/labels/entity";


export type BoardRawUnnested = Pick<BoardBase, 
  | "id"
  | "title"
  | "theme"
  | "lists"
  | "labels"
  | "isStarred"
  | "dateLastView"
>

export const formatAsBoardRawUnnested = OBJECT({
  id: OID(),
  title: title,
  theme: theme,
  lists: ARRAY([formatAsListRawNested]),
  labels: ARRAY([formatAsLabelRawNested]),
  isStarred: isStarred,
  dateLastView: dateLastView,
}, {
  name: "BoardRawUnnested",
});


export default formatAsBoardRawUnnested;
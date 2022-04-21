import {OID} from "/util/formatter";
import {title} from "/boards/fields";
import {theme} from "/boards/fields";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import BoardBase from "./base";
import {isStarred} from "/boards/fields";
import {dateLastView} from "/boards/fields";
import {formatAsListRawNested} from "/lists/entity";
import {formatAsLabelRawNested} from "/labels/entity";


export type BoardRawNested = Pick<BoardBase, 
  | "id"
  | "title"
  | "theme"
  | "lists"
  | "labels"
  | "isStarred"
  | "dateLastView"
>

export const formatAsBoardRawNested = OBJECT({
  id: OID(),
  title: title,
  theme: theme,
  lists: ARRAY([formatAsListRawNested]),
  labels: ARRAY([formatAsLabelRawNested]),
  isStarred: isStarred,
  dateLastView: dateLastView,
}, {
  name: "BoardRawNested"
});


export default formatAsBoardRawNested;
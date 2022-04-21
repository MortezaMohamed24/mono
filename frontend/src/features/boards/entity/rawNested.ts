import list from "/lists/entity";
import label from "/labels/entity";
import {OID} from "/util/checker";
import {title} from "/boards/fields";
import {theme} from "/boards/fields";
import {ARRAY} from "/util/checker";
import {OBJECT} from "/util/checker";
import BoardBase from "./base";
import {WithError} from "/util/checker";
import {isStarred} from "/boards/fields";
import {dateLastView} from "/boards/fields";


export type BoardRawNested = Pick<BoardBase, 
  | "id"
  | "title"
  | "theme"
  | "lists"
  | "labels"
  | "isStarred"
  | "dateLastView"
>


export const formatAsBoardRawNested = OBJECT<BoardRawNested>({
  id: OID(),
  title: title,
  theme: theme,
  lists: ARRAY([list.rawNested.format]),
  labels: ARRAY([label.rawNested.format]),
  isStarred: isStarred,
  dateLastView: dateLastView,
});


export const formatAsBoardRawNestedStrictly = WithError(
  OBJECT<BoardRawNested>({
    id: OID(),
    title: title,
    theme: theme,
    lists: ARRAY([list.rawNested.formatStrictly]),
    labels: ARRAY([label.rawNested.formatStrictly]),
    isStarred: isStarred,
    dateLastView: dateLastView,
  }), 
  () => {
    new TypeError("invalid raw nested board")
  },
);


export default Object.freeze({
  format: formatAsBoardRawNested, 
  formatStrictly: formatAsBoardRawNestedStrictly,
});
import {OID} from "#util/checker";
import {title} from "src/models/board/fields/checkables";
import {theme} from "src/models/board/fields/checkables";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {isStarred} from "src/models/board/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  title: title.opt(undefined),
  theme: theme.opt(undefined),
  idBoard: OID({}),
  isStarred: isStarred.opt(undefined),
});


export default bodyCheckable;
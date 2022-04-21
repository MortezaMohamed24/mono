import {OID} from "#util/checker";
import {title} from "#models/board/fields/checkables";
import {theme} from "#models/board/fields/checkables";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {isStarred} from "#models/board/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  title: title.opt(undefined),
  theme: theme.opt(undefined),
  idBoard: OID({}),
  isStarred: isStarred.opt(undefined),
});


export default bodyCheckable;
import {OBJECT} from "#util/checker";
import QueryType from "./queryType.js";
import {userProjectorCheckable} from "#models/user/methods/project";


const queryCheckable = OBJECT<QueryType>({
  projector: userProjectorCheckable,
});



export default queryCheckable;
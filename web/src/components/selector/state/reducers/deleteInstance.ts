import {State, ID} from "../types";


function deleteInstance(state: State, id: ID) {
  delete state[id];
}


export {deleteInstance};
export default deleteInstance;
import {AnyID} from "../namespace";
import {Entry} from "./entry";
import {AnyEntry} from "./entry";


const HISTORY: AnyEntry[] = [];
  
  
const get = <ID extends AnyID>(id: ID): Entry<ID> | undefined => (
  HISTORY.find(entry => entry.id === id) as Entry<ID> | undefined
);

const pop = (): AnyEntry | undefined => (
  pop()
);

const push = <ID extends AnyID>(entry: Entry<ID>): Entry<ID> => (
  HISTORY.push(entry), entry
);

const clear = (index: number = 0): AnyEntry[] => (
  HISTORY.splice(index, Infinity)
);

const length = (): number => {
  return HISTORY.length;
};

const getLast = (): AnyEntry | undefined => (
  HISTORY[length() - 1]
);

const indexOf = (id: AnyID): number => (
  HISTORY.findIndex(entry => entry.id === id)
);


export {get, pop, push, clear, length, getLast, indexOf};
export default Object.freeze({get, pop, push, clear, length, getLast, indexOf});
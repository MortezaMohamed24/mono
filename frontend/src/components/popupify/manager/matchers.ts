import {AnyID} from "./namespace";
import {WILDCARD} from "./constants";


/**
 * Returns a function that indicates whether its argument (`matchee`) is or is in `idOrIds`
 */
export const is = (idOrIds: AnyID | AnyID[]) => {
  const ids = Array.isArray(idOrIds) ? idOrIds : [idOrIds];

  return (matchee: AnyID) => {
    for (let id of ids) {
      if (matchee === WILDCARD || id === matchee) {
        return true;
      }
    }

    return false;
  };
};

/**
 * Returns a function that indicates whether its argument (`matchee`) is not or is not in `idOrIds`
 */
export const not = (idOrIds: AnyID | AnyID[]) => {
  const ids = Array.isArray(idOrIds) ? idOrIds : [idOrIds];

  return (matchee: AnyID) => {
    for (let id of ids) {
      if (matchee !== WILDCARD && matchee !== id) {
        return true;
      }
    }

    return false;
  };
};


export default Object.freeze({is, not});
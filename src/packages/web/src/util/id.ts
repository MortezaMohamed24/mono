/**
 * A RegExp matching a BSON object id's string representation.
*/
const OID = /^[0123456789abcdef]{24}$/u;

const isOid = (v: any): boolean => (
  typeof v === "string" && OID.test(v)
);

const move = (ids: string[], id: string, indexB: number = Infinity) => {
  const indexA = ids.indexOf(id);

  if (indexA === -1) { return; }

  ids.splice(indexA, 1);
  ids.splice(indexB, 0, id);
};

const rem = (ids: string[], id: string) => {
  const index = ids.indexOf(id);
  if (index === -1) { return; }
  ids.splice(index, 1);
};

const add = (ids: string[], id: string, index: number = Infinity) => {
  if (Number.isFinite(index) && index >= 0) {
    ids.splice(index, 0, id);
  } else {
    ids.splice(Infinity, 0, id);
  }
};


export {move, rem, add, OID, isOid};
export default Object.freeze({move, rem, add, OID, isOid});
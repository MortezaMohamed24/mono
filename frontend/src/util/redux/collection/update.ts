import isPlainObject from "/util/object/isPlainObject";


type Any = AnyArray | AnyObject | AnyPrimitive
type AnyArray = Any[]
type AnyObject = {[key: string | number | symbol]: Any}
type AnyPrimitive = null | number | string | boolean | undefined


const update = (vA: Any, vB: Any) => {
  const isVAObject = isPlainObject(vA);
  const isVBObject = isPlainObject(vB);

  /** if they are strictly the same value */
  if (vA === vB) {
    return vB;
  } 
  
  /** we cannot merge them if they are of different types */
  if (!isVAObject || !isVBObject) {
    return vB;
  }

  const objectA = vA as AnyObject;
  const objectB = vB as AnyObject;

  const keysA = Object.keys(objectA);
  const keysB = Object.keys(objectB);

  for (let key of keysA) {
    if (!(key in objectB)) {
      delete objectA[key];
    }
  }

  for (let key of keysB) {
    objectA[key] = update(objectA[key], objectB[key]);
  }

  return vA;
};


export default update;
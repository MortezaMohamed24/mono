type AnyValue = string | number | bigint | boolean | symbol | null | undefined | ArrOfValues | ObjOfValues
type ArrOfValues = AnyValue[]
type ObjOfValues = {[key: string | number | symbol]: AnyValue}


function deepEquals(vA: AnyValue, vB: AnyValue, deepestLevel: number, currLevel: number = 0): boolean {
  if (deepestLevel > currLevel) {
    return false;
  } 
  
  if (vA === vB) {
    return true;
  } else if (vA === null || vB === null) {
    return false;
  } else if (typeof vA === "function" || typeof vB === "function") {
    return false;
  }
  
  switch (typeof vA) {
    case "bigint": 
    case "number": 
    case "string": 
    case "symbol": 
    case "boolean": 
    case "undefined":
      return false; 
  }

  if (Array.isArray(vA) && Array.isArray(vB)) {
    if (vA.length !== vB.length) {
      return false;
    }

    for (let key in vA) {
      if (!deepEquals(vA[key], vB[key], deepestLevel, currLevel + 1)) {
        return false;
      }
    }

    return true;
  }

  if (!Array.isArray(vA) && !Array.isArray(vB)) {
    return deepEquals(Object.entries(vA), Object.entries(vB as object), deepestLevel, currLevel);
  }

  return false;
}

function DeepEquals<T extends AnyValue>(deepestLevel: number = 0) {
  return (vA: T, vB: T) => deepEquals(vA, vB, deepestLevel);
}


export default DeepEquals;
type Patch = Add | Remove | Replace;

type Add = {
  op: "add";
  path: string[];
  value: unknown;
}

type Remove = {
  op: "remove";
  path: string[];
  value: unknown;
}

type Replace = {
  op: "replace";
  path: string[];
  value: unknown;
}


const typeOf = (v: unknown) => {
  if (
    v === null ||
    typeof v === "string" ||
    typeof v === "number" || 
    typeof v === "bigint" ||
    typeof v === "boolean" || 
    typeof v === "undefined"
  ) {
    // Primitive in this context means not having properties
    return "primitive";
  } if (Array.isArray(v)) {
    return "array";
  } else if (typeof v === "object") {
    return "object";
  } else {
    throw new TypeError("Given value of unrecognized type");
  }
};


const generateUndoerPatchesForValues = (vA: unknown, vB: unknown, path: string[] = []): Patch[] => {
  const typeA = typeOf(vA);
  const typeB = typeOf(vB);

  // No changes
  if (vA === vB) {
    return [];
  }

  // vB was added
  if (vA === undefined) {
    return [{op: "remove", path, value: vB}];
  }

  // vA was removed
  if (vB === undefined) {
    return [{op: "add", path, value: vA}];
  }

  // vA was replaced
  if (typeA !== typeB) {
    return [{op: "replace", path, value: vA}];
  }

  if (typeA === "primitive") {
    // were vA replaced ? yes : no
    return vA !== vB ? [{op: "replace", path, value: vA}] : [];
  }

  if (typeA === "array") {
    return generateUndoerPatchesForArrays(vA as any[], vB as any[], path);
  }

  if (typeA === "object") {
    return generateUndoerPatchesForObjects(vA as Record<string, unknown>, vB as Record<string, unknown>, path);
  }

  throw new Error("Given value of unrecognized type");
};

const generateUndoerPatchesForArrays = (vA: any[], vB: any[], path: string[] = []): Patch[] => {
  const lengthA = vA.length;
  const lengthB = vB.length;

  if (lengthA !== lengthB) {
    return [{op: "replace", path, value: vA}];
  }

  const patches = [];

  for (let i = 0; i < lengthA; i++) {
    patches.push(...generateUndoerPatchesForValues(vA[i], vB[i], [...path, String(i)]));
  }

  return patches;
};

const generateUndoerPatchesForObjects = (vA: Record<string, unknown>, vB: Record<string, unknown>, path: string[] = []): Patch[] => {
  const keys = new Set([...Object.keys(vA), ...Object.keys(vB)]);
  const patches = [];

  for (let key of keys) {
    patches.push(...generateUndoerPatchesForValues(vA[key], vB[key], [...path, key]));
  }

  return patches;
};


const generateUndoerPatches = (vA: object, vB: object) => (
  generateUndoerPatchesForValues(vA, vB)
);


export default generateUndoerPatches;
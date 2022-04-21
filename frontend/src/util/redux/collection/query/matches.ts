const IS = (value: unknown, query: unknown): boolean => (
  Object.is(value, query)
);

const OR = (value: unknown, query: unknown[]): boolean => {
  for (let item of query) {
    if (MATCHES(value, item)) {
      return true;
    }
  }

  return false;
};

const IN = (value: unknown[], query: unknown): boolean => {
  for (let itemOfValue of value) {
    if (MATCHES(itemOfValue, query)) {
      return true;
    }
  }

  return false;
}

const SOME = (value: unknown[], query: unknown[]): boolean => {
  for (let itemOfQuery of query) {
    for (let itemOfValue of value) {
      if (MATCHES(itemOfValue, itemOfQuery)) {
        return true;
      }
    }
  }

  return false;
};

const OBJECT = (entity: {[key: string]: unknown}, query: {[key: string]: unknown}): boolean => {
  const keysOfMatcher = Object.keys(query);

  for (let key of keysOfMatcher) {
    if (!MATCHES(entity[key], query[key])) {
      return false;
    }
  }

  return true;
};


const typeOf = (unknown: unknown) => {
  switch (unknown) {
    case null: return "null";
  }
  
  switch (typeof unknown) {
    case "string": return "primitive";
    case "bigint": return "primitive";
    case "number": return "primitive";
    case "symbol": return "primitive";
    case "boolean": return "primitive";
    case "function": return "primitive";
    case "undefined": return "primitive";
  }

  if (Array.isArray(unknown)) {
    return "array";
  }

  return "object";
};


const MATCHES = (value: unknown, query: unknown) => {
  const typeOfValue = typeOf(value);
  const typeOfQuery = typeOf(query);
  
  if (typeOfValue === "array" && typeOfQuery === "array") {
    return SOME(
      value as unknown[], 
      query as unknown[],
    );
  } 
  
  if (typeOfValue === "object" && typeOfQuery === "object") {
    return OBJECT(
      value as {[key: string]: unknown},
      query as {[key: string]: unknown},
    );
  } 
  
  if (typeOfValue === "array") {
    return IN(
      value as unknown[],
      query as unknown,
    );
  } 
  
  if (typeOfQuery === "array") {
    return OR(
      value as unknown,
      query as unknown[],
    );
  }
  
  return IS(
    value as unknown,
    query as unknown,
  );
};


export default MATCHES;
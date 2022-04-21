import typeOf from "./typeOf";
import Visited from "./visited";
import typeNameOf from "./typeNameOf";


function serialize(value: unknown, level: number = 0, path: string[] = [], visited: Visited = new Visited()) {
  switch (typeOf(value)) {
    case "null": return serializeNull(value as null);
    case "string": return serializeString(value as string);
    case "symbol": return serializeSymbol(value as symbol);
    case "bigint": return serializeBigInt(value as bigint);
    case "number": return serializeNumber(value as number);
    case "object": return serializeObject(value as Record<any, unknown>, level, path, visited);
    case "boolean": return serializeBoolean(value as boolean);
    case "function": return serializeFunction(value as Function);
    case "undefined": return serializeUndefined(value as undefined);
  }
}

function serializeNull(value?: null) {
  return `${typeNameOf(null)}: ${null}`;
}

function serializeString(value: string) {
  return `${typeNameOf(value)}: "${value}"`;
}

function serializeNumber(value: number) {
  return `${typeNameOf(value)}: ${value}`;
}

function serializeBigInt(value: bigint) {
  return `${typeNameOf(value)}: ${value}n`;
}

function serializeSymbol(value: symbol) {
  return `${typeNameOf(value)}: ${value.toString()}`;
}

function serializeObject(object: Record<any, unknown>, level: number = 0, path: string[] = [], visited: Visited = new Visited()) {
  let indent = [...Array(level)].map(() => "  ").join("");
  let string = `${typeNameOf(object)}: {\n`;


  for (let key in object) {
    const value = object[key];
    const circularPath = visited.pathOf(value);
    const inlinePathAsArray = [...path, key];
    const inlinePathAsString = inlinePathAsArray.join("/");


    if (circularPath) {
      string += `${indent}  ${key}: ${typeNameOf(value)} : [Circular Reference: ${path.join("/")}]\n`;
    } 
    
    else {
      visited.push(inlinePathAsString, value);
      string += `${indent}  ${key}: ${serialize(value, level + 1, inlinePathAsArray, visited)}\n`;
    }
  }
  

  return string += `${indent}}`;
}

function serializeBoolean(value: boolean) {
  return `${typeNameOf(value)}: ${value}`;
}

function serializeFunction(value: Function) {
  return `${typeNameOf(value)}: ${value}`;
}

function serializeUndefined(value?: undefined) {
  return `${typeNameOf(undefined)}: ${undefined}`;
}


export default serialize;
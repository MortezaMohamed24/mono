export default function typeOf(value: unknown) {
  if (value === null) {
    return "null";
  }
  
  switch (typeof value) {
    case "string": return "string";
    case "symbol": return "symbol";
    case "bigint": return "bigint";
    case "number": return "number";
    case "object": return "object";
    case "boolean": return "boolean";
    case "function": return "function";
    case "undefined": return "undefined";
  }
}
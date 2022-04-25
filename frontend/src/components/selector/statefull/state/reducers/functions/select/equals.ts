type Query = Record<any, unknown>
type Option = Record<any, unknown>


function equals(option: Option, query: Query) {
  if (option === query) {
    return true;
  }

  if ((
    query !== null
  ) && (
    option !== null
  ) && (
    typeof query === "object"
  ) && (
    typeof option === "object"
  )) {
    for (let key of Object.keys(query)) {
      if (equals(option[key], query[key])) {
        return true;
      }
    }
  }

  return false;
} 


export default equals;
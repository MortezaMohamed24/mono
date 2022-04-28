type AnyValue = AnyArray | AnyObject | AnyPrimitive
type AnyArray = AnyValue[]
type AnyObject = {[key: string | number | symbol]: AnyValue}
type AnyPrimitive = null | string | number | symbol | boolean | undefined


function equals(option: AnyValue, query: AnyValue) {
  if (option === query) {
    return true;
  }

  if ((
    typeof query === "object"
  ) && (
    typeof option === "object"
  ) && (
    query !== null
  ) && (
    option !== null
  )) {
    for (let key of Object.keys(query)) {
      if (equals(option[key as any], query[key as any])) {
        return true;
      }
    }
  }

  return false;
} 


export default equals;
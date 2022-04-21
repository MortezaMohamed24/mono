import serialize from "/util/loginSerializer";


type ErrorCreator = (value: unknown) => unknown


function ErrorCreator(typeName?: string) {
  return (value: unknown) => (
    new TypeError(`Invalid ${typeName ?? "UnknownType"}. \n\nGot: \n${serialize(value)}`)
  )
}


export default ErrorCreator;
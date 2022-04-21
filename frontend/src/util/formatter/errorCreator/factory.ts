import serialize from "/util/loggingSerializer";


function ErrorCreator(typeName?: string) {
    return (value: unknown) => `Invalid ${typeName ?? "UnknownType"}. \n\nGot: \n${serialize(value)}`
}
  
  
export default ErrorCreator;
import serialize from "./serialize.js"


interface CotrOptions {
  typeKey?: undefined | string | number | symbol
  typeName: string | symbol | number
  violation?: string | undefined
  invalidValue: unknown 
  childTypeName?: undefined | string
}

class FormatError extends Error {
  typeKey: string | number | symbol | undefined
  typeName: string | symbol | number
  typePath: string
  violation: string | undefined
  invalidValue: unknown
  childTypeName: string | undefined


  constructor({typeName, violation, invalidValue, typeKey, childTypeName}: CotrOptions) {
    let message = ""
    let typePath = ""

    typePath += typeKey !== undefined ? `${String(typeKey)}: ` : ""
    typePath += String(typeName)
    typePath += childTypeName !== undefined ? `/${childTypeName}` : ""

    message += "Cannot Format Invalid Value"
    message += `\nPath: ${typePath}`
    message += `\nValue: ${serialize(invalidValue)}`

    super(message)

    this.typeKey = typeKey
    this.typeName = typeName
    this.typePath = typePath
    this.violation = violation
    this.invalidValue = invalidValue
    this.childTypeName = childTypeName
  }
}


export {FormatError}
export default FormatError
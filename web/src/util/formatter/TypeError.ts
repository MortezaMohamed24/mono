export default class TypeError extends Error{
  message: string;
  typeName: string;
  invalidValue: unknown;


  constructor(typeName: string, invalidValue: unknown) {
    super();

    this.message = `invalid value error.\n\n\ntype: ${typeName}\n\nvalue: ${String(invalidValue)}`;

    this.typeName = typeName;
    this.invalidValue = invalidValue;
  }

  
  toString() {
    return this.message;
  }

  toJSON() {
    return this.message;
  }
}
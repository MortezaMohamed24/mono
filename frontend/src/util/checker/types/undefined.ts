import Type from "../type";


const UNDEFINED = Type<undefined, undefined, undefined>({
  checker: () => undefined,
  typeName: ["Undefined"],
});


export default UNDEFINED;
import Type from "../type";


const NULL = Type<null, undefined, null>({
  checker: () => null,
  typeName: ["Null"],
});


export default NULL;
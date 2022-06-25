type ConstructorReturn<
  T extends new (...anys: any[]) => any,
> = 
  T extends new (...anys: any[]) => infer Return ? Return : never


export default ConstructorReturn;
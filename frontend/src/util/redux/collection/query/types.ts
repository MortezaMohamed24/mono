import ElementType from "/util/ts/elementType";


export type Query = QueryArray | QueryObject | QueryPrimitive
export type QueryArray = Query[]
export type QueryObject = {[key: string]: Query}
export type QueryPrimitive = null | string | number | bigint | symbol | boolean | undefined


export type Queryable = QueryableArray | QueryableObject | QueryablePrimitive
export type QueryableArray = Queryable[]
export type QueryableObject = {[key: string]: Queryable}
export type QueryablePrimitive = null | string | number | bigint | symbol | boolean | undefined


export type Querify<Unknown extends Queryable> = 
  [Unknown] extends [QueryableArray]
    ? QuerifyArray<Unknown>
    : [Unknown] extends [QueryableObject]
      ? QuerifyObject<Unknown>
        : [Unknown] extends [QueryablePrimitive]
          ? QuerifyPrimitive<Unknown>  
          : never

export type QuerifyArray<Array extends QueryableArray> =
  | readonly QuerifyArray<Array>[]
  | QuerifyPrimitive<ElementType<Array>>

export type QuerifyObject<Object extends QueryableObject> = {
  readonly [Key in keyof Object]?: Querify<Object[Key]>
}

export type QuerifyPrimitive<V> = 
  | V 
  | readonly QuerifyPrimitive<V>[] 
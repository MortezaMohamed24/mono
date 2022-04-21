import {Querify} from "./query/types";


export type AnySchema = Readonly<{id: string, [key: string]: AnySchemaValue}>
export type AnySchemaValue = AnySchemaArray | AnySchemaObject | AnySchemaPrimitive
export type AnySchemaArray = AnySchemaValue[]
export type AnySchemaObject = {[key: string | number | symbol]: AnySchemaValue}
export type AnySchemaPrimitive = null | number | string | boolean | undefined


export interface Collection<Schema extends AnySchema> {
  count(): number;
  clear(): void;
  getField<Key extends keyof Schema>(query: Querify<Schema>, key: Key): Schema[Key] | undefined;
  addOne(raw: Schema): Schema;  
  addMany(raws: Schema[]): Schema[];
  findOne(query: string | Querify<Schema>): Schema | undefined;
  findMany(query: string[] | Querify<Schema>): Schema[];
  deleteOne(query: string | Querify<Schema>): boolean;
  deleteMany(query: string[] | Querify<Schema>): number;
  updateOne(query: string | Querify<Schema>, changes: Partial<Omit<Schema, "id">>): void;
  updateMany(query: string[] | Querify<Schema>, changes: Partial<Omit<Schema, "id">>): void;
}


export default Collection;
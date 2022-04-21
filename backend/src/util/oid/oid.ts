import mongoose from "mongoose";


export const Oid = mongoose.Types.ObjectId;
export type Constructor = typeof Oid;
export type Oid = Constructor extends new (...anys: any[]) => infer T ? T : never;


export default Oid;
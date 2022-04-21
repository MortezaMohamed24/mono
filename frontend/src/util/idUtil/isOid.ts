import PATTERN from "./pattern";


const isOid = (v: any): boolean => (
  typeof v === "string" && PATTERN.test(v)
);


export default isOid;
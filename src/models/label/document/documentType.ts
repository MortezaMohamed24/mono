import {Oid} from "#util/oid";


interface LabelDocumentType {
  _id: Oid;
  name: string | null;
  color: (
    | "blue" 
    | "indigo" 
    | "dark" 
    | "sky" 
    | "purple" 
    | "pink" 
    | "red" 
    | "orange" 
    | "cyan" 
    | "lime" 
    | "green" 
    | "yellow"
  );
  idUser: Oid;
  idBoard: Oid;
}


export default LabelDocumentType;
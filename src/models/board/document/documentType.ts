import {Oid} from "#util/oid";


interface BoardDocumentType {
  _id: Oid;
  title: string;
  theme: (
    | "blue" 
    | "cyan" 
    | "dark" 
    | "green" 
    | "indigo" 
    | "lime" 
    | "orange" 
    | "pink" 
    | "purple" 
    | "red" 
    | "sky"
  );
  idUser: Oid;
  idLists: Oid[];
  idLabels: Oid[];
  isStarred: boolean;
  dateCreation: number;
  dateLastView: number | null;
  dateLastActivity: number | null;
}


export default BoardDocumentType;
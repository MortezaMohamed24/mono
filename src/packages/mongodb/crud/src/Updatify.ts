import {Oid} from "#util/oid";


type idKey = "_id" | "id";
type idEntityKey = "idUser" | "idList" | "idCard" | "idBoard" | "idLabel" | "idChecklist" | "idCheckitem";

type Updatify<T extends object> = {
  [Key in Exclude<keyof T, idKey>]?: Key extends idEntityKey
    ? string | Oid
    : T[Key] extends object
      ? Updatify<T[Key]>
      : T[Key] | undefined 
}


export default Updatify;
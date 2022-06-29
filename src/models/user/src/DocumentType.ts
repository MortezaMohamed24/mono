import {Oid} from "oid"


export interface UserDocumentType {
  _id: Oid
  avatar: string | null
  username: string 
  password: {hash: string, salt: string} 
  idBoards: Oid[]
  lastname: string 
  initials: string 
  firstname: string
}


export default UserDocumentType
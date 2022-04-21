import {BoardRawNested} from "/boards/entity";


export type UserBase = {
  id: string;
  boards: BoardRawNested[];
  avatar: string | null;
  password: string;
  initials: string;
  idBoards: string[];
  username: string;
  lastname: string;
  firstname: string;
}


export default UserBase;
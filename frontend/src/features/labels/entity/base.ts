import * as Colors from "../constants/colors";


/**
 * All fields a label might possibly have
 */
export type LabelBase = {
  id: string;
  name: string | null;
  color: Colors.Name;
  idUser: string;
  idBoard: string;
}



export default LabelBase;
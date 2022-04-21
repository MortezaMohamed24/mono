import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import {avatar} from "/user/fields";
import {username} from "/user/fields";
import {initials} from "/user/fields";
import {lastname} from "/user/fields";
import {firstname} from "/user/fields";
import {BoardRawNested} from "/boards/entity";
import {formatAsBoardRawNested} from "/boards/entity";


export type UserRaw = {
  id: string;
  boards: BoardRawNested[];
  avatar: string | null;
  initials: string;
  username: string;
  lastname: string;
  firstname: string;
}

export const formatAsUserRaw = OBJECT({
  id: OID(),
  boards: ARRAY([formatAsBoardRawNested]),
  avatar: avatar,
  username: username,
  initials: initials,
  lastname: lastname,
  firstname: firstname,
});


export default formatAsUserRaw;
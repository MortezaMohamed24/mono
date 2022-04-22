import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import {avatar} from "/features/user/fields";
import {username} from "/features/user/fields";
import {initials} from "/features/user/fields";
import {lastname} from "/features/user/fields";
import {firstname} from "/features/user/fields";
import {BoardRawNested} from "/features/boards/entity";
import {formatAsBoardRawNested} from "/features/boards/entity";


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
}, {
  name: "UserRaw",
});


export default formatAsUserRaw;
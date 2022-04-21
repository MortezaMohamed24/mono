import board from "/boards/entity";
import {OID} from "/util/checker";
import {ARRAY} from "/util/checker";
import {OBJECT} from "/util/checker";
import {avatar} from "/user/fields";
import {username} from "/user/fields";
import {initials} from "/user/fields";
import {lastname} from "/user/fields";
import {firstname} from "/user/fields";
import {WithError} from "/util/checker";
import {BoardRawNested} from "/boards/entity";


export type UserRaw = {
  id: string;
  boards: BoardRawNested[];
  avatar: string | null;
  initials: string;
  username: string;
  lastname: string;
  firstname: string;
}

export const formatAsUserRaw = OBJECT<UserRaw>({
  id: OID(),
  boards: ARRAY([board.rawNested.format]),
  avatar: avatar,
  username: username,
  initials: initials,
  lastname: lastname,
  firstname: firstname,
});


export const formatAsUserRawStrictly = WithError(OBJECT<UserRaw>({
  id: OID(),
  boards: ARRAY([board.rawNested.formatStrictly]),
  avatar: avatar,
  username: username,
  initials: initials,
  lastname: lastname,
  firstname: firstname,
}), () => (
  new TypeError("invalid raw user")
));


export default Object.freeze({
  format: formatAsUserRaw,
  formatStrictly: formatAsUserRaw,
});
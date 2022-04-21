import User from "#models/user";


interface UserEditActionBody {
  /** The new username for user. */
  readonly username?: User["username"];
  /** The new first name for user. */
  readonly firstname?: User["firstname"];
  /** The new last name for user. */
  readonly lastname?: User["lastname"];
  /** The new initials for user. */
  readonly initials?: User["initials"];
  /** The new passwrod for user. */
  readonly password?: string;
}


export default UserEditActionBody;
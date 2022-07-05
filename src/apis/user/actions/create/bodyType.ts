import User from "src/User";


interface UserCreateActionBody {
  /** The username of the user to create. */
  readonly username: User["username"]; 
  /** The first name of the user to create. */
  readonly firstname: User["firstname"]; 
  /** The password of the user to create. */
  readonly password: string;
  /** The last name of the user to create. */
  readonly lastname: User["lastname"]; 
}


export default UserCreateActionBody;
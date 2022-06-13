import User from "src/models/user";


interface UserStaticsMakeArgument {
  username: User["username"];
  lastname: User["lastname"];
  password: string;
  firstname: User["firstname"];
}


export default UserStaticsMakeArgument;
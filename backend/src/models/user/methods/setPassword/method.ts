import v from "#models/user/fields/validators";
import User from "#models/user";
import {pbkdf2Sync} from "node:crypto";
import {randomBytes} from "node:crypto";


function setPassword(this: User, password: string) {
  password = v.password(password);
  
  const salt = randomBytes(32).toString();
  const hash = pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  
  this.password = {salt, hash};
}


export default setPassword;
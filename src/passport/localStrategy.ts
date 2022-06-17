import ur from "src/models/user/crud";
import {Strategy} from "passport-local";
import {WRONG_USERNAME} from "src/error-codes/auth";
import {WRONG_PASSWORD} from "src/error-codes/auth";


export default new Strategy(async (username, password, done) => {
  const user = await ur.f({username});

  if (!user) { 
    done(WRONG_USERNAME);
  } else if (!user.isPassword(password)) {
    done(WRONG_PASSWORD);
  } else {
    done(null, user.id.toString());
  }
});
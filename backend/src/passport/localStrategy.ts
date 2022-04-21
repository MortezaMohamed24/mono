import ur from "#models/user/crud";
import {Strategy} from "passport-local";
import {WRONG_USERNAME} from "#constants/errors/auth";
import {WRONG_PASSWORD} from "#constants/errors/auth";


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
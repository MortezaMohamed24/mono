import {Router} from "express";
import passport from "passport";
import isAuthorized from "#middleware/isAuthorized";
import {WRONG_USERNAME} from "src/errors/auth";
import {WRONG_PASSWORD} from "src/errors/auth";


const router = Router();


router.post("/login", (req, res, next) => (
  passport.authenticate("local", (error, user) => {
    if (error === WRONG_USERNAME || error === WRONG_PASSWORD) { 
      res.status(400).send(error);
    } else if (error) {
      res.status(500).send();
    } else {
      req.login(user, (err) => {
        err ? res.status(500).send(err) : res.status(200).send();
      });
    }
  })(req, res, next)
));

router.get("/login/status", (req, res) => {
  res.send({
    isAuthorized: req.isAuthenticated()
  });
});

router.get("/logout", isAuthorized, (req) => {
  req.logout();
});


export default router;
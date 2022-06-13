import passport from "passport";
import strategy from "./localStrategy.js";
import {oidifyOne} from "#util/oid";


passport.use(strategy);
passport.serializeUser((idUser, done) => done(null, idUser));
passport.deserializeUser((idUser, done) => done(null, oidifyOne(idUser)));
import express, { Express } from "express";
import { config } from "config";
import passport from "passport";
import basicStrategy from "utils/auth/basicAuthStrategy";
import generateAuthJWT from "utils/auth/generateAuthJWT";
import { TWO_HOURS_IN_MILLISECONDS } from "utils/common/time";
import { User } from "models/user";

function authRoute(app: Express) {
  const router = express.Router();
  app.use("/api/auth", router);

  router.post(
    "/login",
    passport.authenticate(basicStrategy, { session: false }),
    async function (req, res) {
      const token = await generateAuthJWT(req.user as User);

      //Return the JWT and set the cookie
      res.cookie("token", token, {
        httpOnly: !config.dev,
        secure: !config.dev,
        sameSite: "none",
        maxAge: TWO_HOURS_IN_MILLISECONDS,
      });
      return res.status(200).json({ token });
    }
  );
}

export default authRoute;

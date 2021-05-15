import { Strategy } from "passport-jwt";
import UsersService from "services/users";
import { config } from "config";
import { Request } from "express";

const options = {
  secretOrKey: config.AUTH_JWT_SECRET,
  jwtFromRequest: cookieExtractor,
};

function cookieExtractor(req: Request) {
  let token = null;
  if (req?.cookies) token = req.cookies["token"];
  return token;
}

const jwtStrategy = new Strategy(options, function (payload, callback) {
  const usersService = new UsersService();

  try {
    const user = usersService.getUser(payload.email);

    if (!user) {
      return callback(Error("Unauthorized"), null);
    }

    delete user.password;

    callback(null, { ...user, scopes: payload.scopes });
  } catch (error) {
    callback(error);
  }
});

export default jwtStrategy;

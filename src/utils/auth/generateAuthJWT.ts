import jwt from "jsonwebtoken";
import { config } from "config";
import { User } from "models/user";

// Generate a JWT with the user data and access scopes
async function generateAuthJWT(user: User) {
  const { id, name, email } = user;
  const payload = {
    sub: id,
    name,
    email,
    // scopes: apiKey.scopes,
  };

  return jwt.sign(payload, config.AUTH_JWT_SECRET, {
    expiresIn: "15m",
  });
}

export default generateAuthJWT;

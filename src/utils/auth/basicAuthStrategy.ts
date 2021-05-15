import { BasicStrategy } from "passport-http";
import bcrypt from "bcrypt";
import UsersService from "services/users";
import { User } from "models/user";

const basicStrategy = new BasicStrategy(async function (
  email: string,
  password: string,
  callback: (error: Error | null, user: User | null) => void
) {
  const usersService = new UsersService();

  try {
    const user = usersService.getUser(email);
    if (!user) {
      return callback(Error("Unauthorized"), null);
    }

    if (!(await bcrypt.compare(password, user.password ?? ""))) {
      return callback(Error("Unauthorized"), null);
    }

    delete user.password;

    return callback(null, user);
  } catch (error) {
    callback(error, null);
  }
});

export default basicStrategy;

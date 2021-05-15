import { User } from "models/user";
import { users } from "utils/mocks/users";

class UsersService {
  getUser(email: string): User | undefined {
    const user = users.find((user) => user.email === email);
    if (user) {
      return { ...user };
    }

    return undefined;
  }
}

export default UsersService;

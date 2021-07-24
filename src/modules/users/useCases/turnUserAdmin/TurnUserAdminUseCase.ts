import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const existingUser = this.usersRepository.findById(user_id);

    if (!existingUser) throw new Error("User Does Not Exists!");

    this.usersRepository.turnAdmin(existingUser);

    return existingUser;
  }
}

export { TurnUserAdminUseCase };

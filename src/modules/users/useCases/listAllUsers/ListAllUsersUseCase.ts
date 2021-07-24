import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User[] {
    const existingUser = this.usersRepository.findById(user_id);

    if (!existingUser) throw new Error("User Does Not Exists!");

    if (!existingUser.isAdmin()) throw new Error("User Is Not An Admin!");

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

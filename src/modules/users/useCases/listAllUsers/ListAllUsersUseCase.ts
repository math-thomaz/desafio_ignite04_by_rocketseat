import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui

    const findUser = this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error("User not found!");
    }

    if (!findUser.admin) {
      throw new Error("Only admin users can access this function!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

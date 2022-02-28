import { User } from '../domain/modules';
import { UserDTO } from '../infrasctructure/interfaces/dto/userDto';
import { UserRepository } from '../infrasctructure/repositories';

export class UserCase {
  private readonly _userRepository: UserRepository;

  constructor() {
    this._userRepository = new UserRepository();
  }

  async findAllUsers(): Promise<User[]> {
    const user = await this._userRepository.findAllUser();

    if (!user) {
      throw Error('Cannot find a user!');
    }

    return user;
  }

  async findUser(id: number): Promise<User> {
    const user = await this._userRepository.findUser(id);

    if (!user) {
      throw Error(`The ${id} is invalid and not found!`);
    }

    return user;
  }

  async createUser(user: UserDTO): Promise<User> {
    return await this._userRepository.createUsers(user);
  }
}

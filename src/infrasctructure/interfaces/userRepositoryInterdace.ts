import { User } from '../../domain/modules';
import { UserDTO } from './dto/userDto';

export interface IUserRepositoryInterface {
  findAllUser(): Promise<User[]>;
  findUser(id: number): Promise<User>;
  createUsers(user: UserDTO): Promise<User>;
}

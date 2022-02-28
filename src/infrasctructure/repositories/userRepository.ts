import { PrismaClient } from '@prisma/client';
import { User } from '../../domain/modules';
import { UserDTO } from '../interfaces/dto/userDto';
import { IUserRepositoryInterface } from '../interfaces';

export class UserRepository implements IUserRepositoryInterface {
  private _model: PrismaClient;

  constructor() {
    this._model = new PrismaClient();
  }

  async findAllUser(): Promise<User[]> {
    return await this._model.user.findMany();
  }

  async findUser(id: number): Promise<User> {
    return await this._model.user.findFirst({
      where: { id }
    });
  }

  async createUsers(user: UserDTO): Promise<User> {
    return await this._model.user.create({
      data: {
        ...user
      }
    });
  }
}

import { IUserRepositoryInterface } from 'src/infrasctructure/interfaces';
import { UserDTO } from 'src/infrasctructure/interfaces/dto/userDto';
import { User } from '../../../../src/domain/modules';

class MockUserRepository implements IUserRepositoryInterface {
  findAllUser(): Promise<User[]> {
    const user1 = new User('Rory', 'mock@io.com.br', 'senhasecreta');
    const user2 = new User('Raul', 'mock2@io.com.br', 'minhsenhasecreta');
    const data = [user1, user2];

    return new Promise((resolve) => resolve(data));
  }

  findUser(id: number): Promise<User> {
    const user = new User('Rory', 'mock@io.com.br', 'senhasecreta');
    if (id) {
      return new Promise((resolve) => resolve(user));
    }
  }

  createUsers(user: UserDTO): Promise<User> {
    const { name, email, password } = user;
    const mockUser = new User(name, email, password);

    return new Promise((resolve) => resolve(mockUser));
  }
}

describe('UserRepository', () => {
  const UserRepo = new MockUserRepository();

  it('Find for user at the bank', async () => {
    const id = 1;
    const response = await UserRepo.findUser(id);
    const data = new User('Rory', 'mock@io.com.br', 'senhasecreta');

    expect(response).toStrictEqual(data);
  });

  it('Find for users at the bank', async () => {
    const response = await UserRepo.findAllUser();
    const user1 = new User('Rory', 'mock@io.com.br', 'senhasecreta');
    const user2 = new User('Raul', 'mock2@io.com.br', 'minhsenhasecreta');
    const data = [user1, user2];

    expect(response).toStrictEqual(data);
  });

  it('Should be to create a new user', async () => {
    const user: UserDTO = {
      userId: 'MOCK',
      name: 'Rory',
      email: 'mock@io.com.br',
      password: 'senhasecreta'
    };

    const response = await UserRepo.createUsers(user);
    const data = new User('Rory', 'mock@io.com.br', 'senhasecreta');

    expect(response).toStrictEqual(data);
  });
});

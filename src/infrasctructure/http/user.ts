import { Request, Response } from 'express';
import { UserCase } from '../../application';

export class UserController {
  private _useCase: UserCase;

  constructor() {
    this._useCase = new UserCase();
  }

  async findAllUsers(request: Request, response: Response) {
    try {
      const result = await this._useCase.findAllUsers();
      return response.status(200).json(result);
    } catch (error) {
      return response.status(500).json({ error });
    }
  }

  async findUser(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const result = await this._useCase.findUser(parseInt(id));
      return response.status(200).json(result);
    } catch (error) {
      return error;
    }
  }

  async createUsers(request: Request, response: Response) {
    try {
      const result = await this._useCase.createUser(request.body);
      return response.status(200).json(result);
    } catch (error) {
      return response.json({ error });
    }
  }
}

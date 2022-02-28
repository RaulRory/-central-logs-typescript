import { Request, Response } from 'express';
import { LogCase } from '../../application';

export class LogController {
  private _useCase: LogCase;

  constructor() {
    this._useCase = new LogCase();
  }

  async findAllLogs(request: Request, response: Response) {
    try {
      const result = await this._useCase.findAllLogs();
      return response.status(200).json(result);
    } catch (error) {
      return response.json({ error });
    }
  }

  async findLog(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const result = await this._useCase.findLog(parseInt(id));
      return response.status(200).json(result);
    } catch (error) {
      return response.json({ error });
    }
  }

  async createLogs(request: Request, response: Response) {
    try {
      const result = await this._useCase.createLog(request.body);
      return response.status(200).json(result);
    } catch (error) {
      return response.json({ error });
    }
  }
}

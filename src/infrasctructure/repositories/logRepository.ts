import { PrismaClient } from '@prisma/client';
import { Log } from '../../domain/modules';
import { LogsDTO } from '../interfaces/dto/logDto';
import { ILogRepositoryInterface } from '../interfaces';

export class LogRepository implements ILogRepositoryInterface {
  private readonly _model: PrismaClient;

  async findAllLogs(): Promise<Log[]> {
    return await this._model.log.findMany();
  }
  async findLog(id: number): Promise<Log> {
    return await this._model.log.findFirst({
      where: { id }
    });
  }

  async createLogs(log: LogsDTO): Promise<Log> {
    return await this._model.log.create({
      data: {
        ...log
      }
    });
  }
}

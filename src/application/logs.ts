import { Log } from '../domain/modules';
import { LogsDTO } from '../infrasctructure/interfaces/dto/logDto';
import { LogRepository } from '../infrasctructure/repositories';

export class LogCase {
  private _logRepository: LogRepository;

  constructor() {
    this._logRepository = new LogRepository();
  }

  async findAllLogs(): Promise<Log[]> {
    const log = await this._logRepository.findAllLogs();

    if (!log) {
      throw Error('Cannot find a Log!');
    }
    return log;
  }

  async findLog(id: number): Promise<Log> {
    const log = await this._logRepository.findLog(id);

    if (!log) {
      throw Error(`The ${id} is invalid and not found!`);
    }
    return log;
  }

  async createLog(log: LogsDTO): Promise<Log> {
    return await this._logRepository.createLogs(log);
  }
}

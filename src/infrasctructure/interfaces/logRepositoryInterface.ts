import { Log } from '../../domain/modules';
import { LogsDTO } from './dto/logDto';

export interface ILogRepositoryInterface {
  findAllLogs(): Promise<Log[]>;
  findLog(id: number): Promise<Log>;
  createLogs(log: LogsDTO): Promise<Log>;
}

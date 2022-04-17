import { ILogRepositoryInterface } from 'src/infrasctructure/interfaces';
import { LogsDTO } from 'src/infrasctructure/interfaces/dto/logDto';
import { Log } from '../../../../src/domain/modules';

class MockLogRepository implements ILogRepositoryInterface {
  findAllLogs(): Promise<Log[]> {
    const mock1 = new Log('BUG', 'Data is mock bug', 1);
    const mock2 = new Log('ERROR', 'Data is mock error', 2);

    return new Promise((resolve) => resolve([mock1, mock2]));
  }

  findLog(id: number): Promise<Log> {
    const mock1 = new Log('BUG', 'Data is mock bug', id);

    return new Promise((resolve) => resolve(mock1));
  }

  createLogs(log: LogsDTO): Promise<Log> {
    const { type, origin, userId } = log;
    const mock = new Log(type, origin, userId);

    return new Promise((resolve) => resolve(mock));
  }
}

describe('LogRepository', () => {
  it('Find for Log at the bank', async () => {
    const logRepo = new MockLogRepository();
    const id = 1;
    const data = new Log('BUG', 'Data is mock bug', id);

    const response = await logRepo.findLog(id);
    expect(response).toStrictEqual(data);
  });

  it('Find for Logs at the bank', async () => {
    const logRepo = new MockLogRepository();
    const mock1 = new Log('BUG', 'Data is mock bug', 1);
    const mock2 = new Log('ERROR', 'Data is mock error', 2);
    const data = [mock1, mock2];

    const response = await logRepo.findAllLogs();
    expect(response).toStrictEqual(data);
  });

  it('Should be to create a new log', async () => {
    const logRepo = new MockLogRepository();
    const log: LogsDTO = {
      type: 'BUG',
      origin: 'Data is mock bug',
      userId: 1
    };

    const data = new Log('BUG', 'Data is mock bug', 1);
    const response = await logRepo.createLogs(log);
    expect(response).toStrictEqual(data);
  });
});

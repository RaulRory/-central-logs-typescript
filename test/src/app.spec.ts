import { createServer, Server } from 'http';
import { app } from '../../src/app';

let server: Server;

beforeEach((done) => {
  server = createServer(app);
  done();
});

afterEach(() => {
  server.close();
});

describe('App Express', () => {
  it('Server is Running', (done) => {
    expect(server).toBeTruthy();
    done();
  });
});

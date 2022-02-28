import { Router } from 'express';
import { LogController } from './infrasctructure/http';
import { UserController } from './infrasctructure/http';

const route = Router();

route.get('/users', (request, response) =>
  new UserController().findAllUsers(request, response)
);
route.get('/user/:id', (request, response) =>
  new UserController().findUser(request, response)
);
route.post('/user/create', (request, response) =>
  new UserController().createUsers(request, response)
);

route.get('/logs', (request, response) =>
  new LogController().findAllLogs(request, response)
);
route.get('/log/:id', (request, response) =>
  new LogController().findLog(request, response)
);
route.post('/log/create', (request, response) =>
  new LogController().createLogs(request, response)
);

export { route };

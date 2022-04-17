import { User } from './user';
import { TypesError } from '@prisma/client';

export class Log {
  public type: TypesError;
  public origin: string;
  public userId: number;
  public statusCode?: number;
  public user?: User;

  constructor(
    type: TypesError,
    origin: string,
    userId: number,
    statusCode?: number,
    user?: User
  ) {
    this.type = type;
    this.origin = origin;
    this.userId = userId;
    this.statusCode = statusCode;
    this.user = user;
  }
}

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

  // getType(): TypesError {
  //   return this.type;
  // }

  // getOrigin(): string {
  //   return this.origin;
  // }

  // getStatusCode(): number | undefined {
  //   return this.statusCode;
  // }

  // getUser(): User | undefined {
  //   return this.user;
  // }

  // getUserId(): number | undefined {
  //   return this.userId;
  // }
}

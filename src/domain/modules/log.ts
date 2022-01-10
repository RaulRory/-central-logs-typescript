import { User } from './user';

enum TypesError {
  ERROR,
  WARNING,
  BUG
}
export class Log {
  constructor(
    private readonly _id: number,
    private readonly _type: TypesError,
    private readonly _origin: string,
    private readonly _statusCode?: number,
    private readonly _user?: User,
    private readonly _userId?: number
  ) {}

  get id(): number {
    return this._id;
  }

  get type(): TypesError {
    return this._type;
  }

  get origin(): string {
    return this._origin;
  }

  get statusCode(): number | undefined {
    return this._statusCode;
  }

  get user(): User | undefined {
    return this._user;
  }

  get userId(): number | undefined {
    return this._userId;
  }
}

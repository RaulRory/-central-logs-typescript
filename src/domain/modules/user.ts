import { Log } from './log';

export class User {
  constructor(
    private readonly _name: string,
    private readonly _email: string,
    private readonly _password: string,
    private readonly _logs: Log[],
    private readonly _username?: string
  ) {}

  get name(): string {
    return this._name;
  }

  get username(): string | undefined {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get logs(): Log[] {
    return this._logs;
  }
}

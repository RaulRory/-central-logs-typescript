import { Log } from './log';

export class User {
  public name: string;
  public email: string;
  public password: string;
  public logs?: Log[];
  public username?: string;

  constructor(
    name: string,
    email: string,
    password: string,
    logs?: Log[],
    username?: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.logs = logs;
    this.username = username;
  }

  // getName(): string {
  //   return this.name;
  // }

  // getUsername(): string | undefined {
  //   return this.username;
  // }

  // getEmail(): string {
  //   return this.email;
  // }

  // getPassword(): string {
  //   return this.password;
  // }

  // getLogs(): Log[] {
  //   return this.logs;
  // }
}

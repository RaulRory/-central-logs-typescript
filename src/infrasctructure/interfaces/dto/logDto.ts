import { TypesError } from '@prisma/client';

export class LogsDTO {
  type: TypesError;
  origin: string;
  userId: number;
  statusCode?: number;
}

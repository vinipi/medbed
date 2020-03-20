import { Injectable, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class AppService {
  private logger: Logger = new Logger();

  constructor(
    private connection: Connection,
  ) { }

}

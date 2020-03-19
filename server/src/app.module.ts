import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'front', 'build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

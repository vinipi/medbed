import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { UF } from './entities/uf.entity';
import { SiteService } from './site.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'front', 'build'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'corteks.net',
      port: 63306,
      username: 'medbed_test',
      password: 'Azerty01',
      database: 'medbed_test',
      entities: [Site, UF],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Site]),
  ],
  controllers: [AppController],
  providers: [AppService, SiteService],
})
export class AppModule { }

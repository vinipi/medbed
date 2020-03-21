import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { UF } from './entities/uf.entity';
import { SiteModule } from './site/site.module';
import { UFModule } from './uf/uf.module';
import { BedRequest } from './entities/bed-request.entity';
import { BedRequestModule } from './bed-request/bed-request.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'suivichu', 'dist', 'suivichu'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'corteks.net',
      port: 63306,
      username: 'medbed_test',
      password: 'Azerty01',
      database: 'medbed_test',
      entities: [Site, UF, BedRequest],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Site, UF, BedRequest]),
    SiteModule,
    UFModule,
    BedRequestModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from 'src/entities/site.entity';
import { UF } from 'src/entities/uf.entity';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Site, UF]),
    ],
    controllers: [
        SiteController,
    ],
    providers: [
        SiteService,
    ],
    exports: [
        SiteService,
    ],
})
export class SiteModule { }

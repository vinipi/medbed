import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from '../entities/site.entity';
import { UF } from '../entities/uf.entity';
import { UFController } from '../uf/uf.controller';
import { UFService } from '../uf/uf.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Site, UF]),
    ],
    controllers: [
        UFController,
    ],
    providers: [
        UFService,
    ],
    exports: [
        UFService,
    ],
})
export class UFModule { }

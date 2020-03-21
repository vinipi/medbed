import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from 'src/entities/site.entity';
import { UF } from 'src/entities/uf.entity';
import { UFController } from 'src/uf/uf.controller';
import { UFService } from 'src/uf/uf.service';

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

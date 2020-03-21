import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from '../entities/site.entity';
import { UF } from '../entities/uf.entity';
import { HospitalUser } from 'src/entities/hospital-user.entity';
import { HospitalUserController } from './hospital-user.controller';
import { HospitalUserService } from './hospital-user.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Site, UF, HospitalUser]),
    ],
    controllers: [
        HospitalUserController,
    ],
    providers: [
        HospitalUserService,
    ],
    exports: [
        HospitalUserService,
    ],
})
export class HospitalUserModule { }

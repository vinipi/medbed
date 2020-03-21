import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from 'src/entities/site.entity';
import { UF } from 'src/entities/uf.entity';
import { BedRequest } from 'src/entities/bed-request.entity';
import { BedRequestController } from './bed-request.controller';
import { BedRequestService } from './bed-request.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Site, UF, BedRequest]),
    ],
    controllers: [
        BedRequestController,
    ],
    providers: [
        BedRequestService,
    ],
    exports: [
        BedRequestService,
    ],
})
export class BedRequestModule { }

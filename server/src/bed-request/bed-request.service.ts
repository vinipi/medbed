import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { BedRequest, Status } from 'src/entities/bed-request.entity';

@Injectable()
export class BedRequestService {
    constructor(
        @InjectRepository(BedRequest)
        private bedRequestRepository: Repository<BedRequest>,
        @Inject(Connection)
        private connection: Connection,
    ) { }

    findAll(): Promise<BedRequest[]> {
        return this.bedRequestRepository.find({
            order: {
                createdAt: 'DESC',
                id: 'DESC',
            },
        });
    }

    find(id: number): Promise<BedRequest> {
        return this.bedRequestRepository.findOne(id);
    }

    findBySiteId(siteId: number): Promise<any> {
        return this.bedRequestRepository.find({
            where: {
                siteId,
            },
            order: {
                createdAt: 'DESC',
                id: 'DESC',
            },
        });
    }

    create(siteId: number) {
        const bedRequest = new BedRequest();
        bedRequest.siteId = siteId;
        return this.bedRequestRepository.insert(bedRequest);
    }

    update(id: number, status: Status) {
        return this.bedRequestRepository.update({
            id,
        }, {
            status,
        });
    }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SiteService {
    constructor(
        @InjectRepository(Site)
        private siteRepository: Repository<Site>,
    ) { }

    findAll(): Promise<Site[]> {
        return this.siteRepository.find();
    }

    find(id: number): Promise<Site> {
        return this.siteRepository.findOne(id);
    }

    findByUrlKey(urlKey: string): Promise<Site> {
        return this.siteRepository.findOne({
            where: {
                urlKey,
            },
        });
    }

    async remove(id: string): Promise<void> {
        await this.siteRepository.delete(id);
    }
}

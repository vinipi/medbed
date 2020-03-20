import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './entities/site.entity';
import { Repository, Connection } from 'typeorm';

@Injectable()
export class SiteService {
    constructor(
        @InjectRepository(Site)
        private siteRepository: Repository<Site>,
        @Inject(Connection)
        private connection: Connection,
    ) { }

    findAll(): Promise<Site[]> {
        return this.siteRepository.find();
    }

    find(id: number): Promise<Site> {
        return this.siteRepository.findOne(id);
    }

    async findByUrlKey(urlKey: string): Promise<any> {
        const res: any[] = await this.connection.query('SELECT site.id AS site_id, site.name AS site_name, uf.* FROM site INNER JOIN uf ON site.id = uf.site_id WHERE site.urlKey = ?', [urlKey]);
        return res.reduce((prev, current) => {
            const accu = {
                ...prev,
                id: current.site_id,
                name: current.site_name,
            };
            accu.ufs.push({ ...current });
            return accu;
        }, { ufs: [] });
    }

    async remove(id: string): Promise<void> {
        await this.siteRepository.delete(id);
    }
}

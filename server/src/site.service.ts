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
        const res: any[] = await this.connection.query(
            `SELECT site.id AS siteId, site.name AS siteName,
            uf.id, uf.name, uf.bed_other_total AS bedOtherTotal, uf.bed_other_used AS bedOtherUsed, uf.bed_other_available AS bedOtherAvailable, uf.bed_covid_total AS bedCovidTotal, uf.bed_covid_used AS bedCovidUsed, uf.bed_covid_available AS bedCovidAvailable
            FROM site INNER JOIN uf ON site.id = uf.site_id
            WHERE site.url_key = ?`,
            [urlKey],
        );
        return res.reduce((prev, current) => {
            const accu = {
                ...prev,
                id: current.siteId,
                name: current.siteName,
            };
            accu.ufs.push({ ...current });
            return accu;
        }, { ufs: [] });
    }

    async remove(id: string): Promise<void> {
        await this.siteRepository.delete(id);
    }
}

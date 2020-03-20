import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { UF } from './entities/uf.entity';

@Injectable()
export class UFService {
    constructor(
        @InjectRepository(UF)
        private ufRepository: Repository<UF>,
        @Inject(Connection)
        private connection: Connection,
    ) { }

    async update(
        bedOtherTotal: number,
        bedOtherUsed: number,
        bedCovidTotal: number,
        bedCovidUsed: number,
        id: number,
    ): Promise<any> {
        await this.connection.query(
            `UPDATE uf
            SET
            bed_other_total = ?,
            bed_other_used = ?,
            bed_covid_total = ?,
            bed_covid_used = ?
            WHERE id = ?;`,
            [
                bedOtherTotal,
                bedOtherUsed,
                bedCovidTotal,
                bedCovidUsed,
                id,
            ],
        );
    }

    async create(
        name: string,
        siteId: number,
        bedOtherTotal: number,
        bedOtherUsed: number,
        bedCovidTotal: number,
        bedCovidUsed: number,
    ): Promise<any> {
        await this.connection.query(
            `INSERT INTO uf (
                name,
                site_id,
                bed_other_total,
                bed_other_used,
                bed_covid_total,
                bed_covid_used
            ) VALUES (
                ?,?,?,?,?,?
            )`,
            [
                name,
                siteId,
                bedOtherTotal,
                bedOtherUsed,
                bedCovidTotal,
                bedCovidUsed,
            ],
        );
    }
}

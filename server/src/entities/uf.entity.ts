import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Site } from './site.entity';

@Entity()
export class UF {
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id: number;

    @Column()
    name: string;

    @Column()
    siteId: number;

    @Column()
    bedTotal: number;

    @Column()
    bedAvailable: number;

    @Column()
    bedUserCovid: number;

    @Column()
    bedUsedNotCovid: number;

}

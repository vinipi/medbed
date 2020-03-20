import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UF } from './uf.entity';

@Entity()
export class Site {
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id: number;

    @Column()
    name: string;

    @Column()
    urlKey: string;

    @OneToMany(type => UF, uf => uf.siteId)
    ufs: UF[];

}

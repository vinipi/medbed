import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UF } from './uf.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Site {
    @ApiProperty()
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @Column({ name: 'url_key' })
    urlKey: string;

    @ApiProperty({ type: [UF] })
    @OneToMany(type => UF, uf => uf.siteId)
    ufs: UF[];

    @ApiProperty()
    bedOtherUsed: number;

    @ApiProperty()
    bedOtherAvailable: number;

    @ApiProperty()
    bedCovidUsed: number;

    @ApiProperty()
    bedCovidAvailable: number;

}

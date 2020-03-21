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

    @Column({ name: 'url_key', select: false })
    urlKey: string;

    @ApiProperty()
    @Column()
    address: string;

    @ApiProperty()
    @Column({ name: 'phone_number' })
    phoneNumber: string;

    @ApiProperty()
    @Column()
    department: string;

    @ApiProperty()
    @Column()
    longitude: number;

    @ApiProperty()
    @Column()
    latitude: number;

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

import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Site } from './site.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UF {
    @ApiProperty()
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column({ name: 'site_id' })
    siteId: number;

    @ApiProperty()
    @Column({ name: 'bed_total' })
    bedTotal: number;

    @ApiProperty()
    @Column({ name: 'bed_available' })
    bedAvailable: number;

    @ApiProperty()
    @Column({ name: 'bed_user_covid' })
    bedUserCovid: number;

    @ApiProperty()
    @Column({ name: 'bed_used_not_covid' })
    bedUsedNotCovid: number;

}

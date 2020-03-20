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
    @Column()
    siteId: number;

    @ApiProperty()
    @Column()
    bedTotal: number;

    @ApiProperty()
    @Column()
    bedAvailable: number;

    @ApiProperty()
    @Column()
    bedUserCovid: number;

    @ApiProperty()
    @Column()
    bedUsedNotCovid: number;

}

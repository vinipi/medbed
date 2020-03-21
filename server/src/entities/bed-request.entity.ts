import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum Status {
    TODO = 'TODO',
    ACCEPTED = 'ACCEPTED',
    REFUSED = 'REFUSED',
    CANCELLED = 'CANCELLED',
}

@Entity()
export class BedRequest {
    @ApiProperty()
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id: number;

    @ApiProperty()
    @Column({ name: 'site_id' })
    siteId: number;

    @ApiProperty()
    @Column({ enum: { enum: Status } })
    status: Status;

    @ApiProperty()
    @Column({ name: 'created_at' })
    createdAt: number;
}

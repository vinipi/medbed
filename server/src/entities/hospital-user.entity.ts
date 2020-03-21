import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class HospitalUser {
    @ApiProperty()
    @PrimaryGeneratedColumn({
        unsigned: true,
    })
    id: number;

    @ApiProperty()
    @Column()
    lastname: string;

    @ApiProperty()
    @Column()
    firstname: string;

    @ApiProperty()
    @Column({ name: 'phone_number' })
    phoneNumber: string;

    @ApiProperty()
    @Column()
    mail: string;

    @ApiProperty()
    @Column({ name: 'site_id' })
    siteId: number;

    @Column({ name: 'url_key' })
    urlKey: string;
}

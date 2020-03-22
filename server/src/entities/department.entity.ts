import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UF } from './uf.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Site {
    @ApiProperty()
    @PrimaryColumn()
    code: string;

    @ApiProperty()
    @Column()
    name: string;
}

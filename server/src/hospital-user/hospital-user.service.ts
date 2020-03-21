import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { UF } from '../entities/uf.entity';
import { HospitalUser } from 'src/entities/hospital-user.entity';

@Injectable()
export class HospitalUserService {
    constructor(
        @InjectRepository(HospitalUser)
        private hospitalUserRepository: Repository<HospitalUser>,
        @Inject(Connection)
        private connection: Connection,
    ) { }

    findAll() {
        return this.hospitalUserRepository.find();
    }

    find(id: number) {
        return this.hospitalUserRepository.findOne(id);
    }

    async create(hospitalUser: HospitalUser): Promise<any> {
        await this.hospitalUserRepository.insert(hospitalUser);
    }
}

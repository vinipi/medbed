import { Controller, Body, Put, Post, Param, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UfUpdateDto } from '../uf/dto/uf-update.dto';
import { UFService } from '../uf/uf.service';
import { UfCreateDto } from '../uf/dto/uf-create.dto';
import { HospitalUserService } from './hospital-user.service';
import { HospitalUser } from 'src/entities/hospital-user.entity';
import { HospitalUserCreateDto } from './dto/hospitaluser-create-dto';

@Controller('/api/hospitalUser')
@ApiTags('Hospital user')
export class HospitalUserController {
    constructor(
        private readonly hospitalUserService: HospitalUserService,
    ) { }

    @Get('/')
    @ApiOperation({
        description: 'Get all hospital users',
    })
    getAll(): Promise<HospitalUser[]> {
        return this.hospitalUserService.findAll();
    }

    @Get('/:id')
    @ApiOperation({
        description: 'Get a hospital user by its id',
    })
    getById(@Param('id') id: number): Promise<HospitalUser> {
        return this.hospitalUserService.find(id);
    }

    @Post('/')
    @ApiOperation({
        description: 'Create hospital user for a specific site',
    })
    @ApiResponse({ status: 200, type: Boolean })
    create(
        @Body() hospitalUserCreateDto: HospitalUserCreateDto,
    ): Promise<any> {
        const hospitalUser = new HospitalUser();
        hospitalUser.lastname = hospitalUserCreateDto.lastname;
        hospitalUser.firstname = hospitalUserCreateDto.firstname;
        hospitalUser.phoneNumber = hospitalUserCreateDto.phoneNumber;
        hospitalUser.mail = hospitalUserCreateDto.mail;
        hospitalUser.siteId = hospitalUserCreateDto.siteId;

        return this.hospitalUserService.create(hospitalUser);
    }
}

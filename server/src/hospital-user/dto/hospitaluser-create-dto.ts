import { ApiProperty } from '@nestjs/swagger';

export class HospitalUserCreateDto {
    @ApiProperty()
    lastname: string;
    @ApiProperty()
    firstname: string;
    @ApiProperty()
    phoneNumber: string;
    @ApiProperty()
    mail: string;
    @ApiProperty()
    siteId: number;
}
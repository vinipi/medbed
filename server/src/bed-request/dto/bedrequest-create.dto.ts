import { ApiProperty } from '@nestjs/swagger';

export class BedRequestCreateDto {
    @ApiProperty()
    siteId: number;
}

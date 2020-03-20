import { ApiProperty } from '@nestjs/swagger';

export class UfCreateDto {
    @ApiProperty()
    bedOtherTotal: number;
    @ApiProperty()
    bedOtherUsed: number;
    @ApiProperty()
    bedCovidTotal: number;
    @ApiProperty()
    bedCovidUsed: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    siteId: number;
}

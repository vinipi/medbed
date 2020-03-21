import { ApiProperty } from '@nestjs/swagger';

export class UfUpdateDto {
    @ApiProperty()
    bedOtherTotal: number;
    @ApiProperty()
    bedOtherUsed: number;
    @ApiProperty()
    bedCovidTotal: number;
    @ApiProperty()
    bedCovidUsed: number;
    @ApiProperty()
    id: number;
}

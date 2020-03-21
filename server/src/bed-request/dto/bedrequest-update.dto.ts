import { Status } from 'src/entities/bed-request.entity';
import { ApiProperty } from '@nestjs/swagger';

export class BedRequestUpdateDto {
    @ApiProperty({ enum: Status })
    status: Status;
}

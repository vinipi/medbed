import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BedRequestService } from './bed-request.service';
import { BedRequest } from 'src/entities/bed-request.entity';
import { BedRequestCreateDto } from 'src/bed-request/dto/bedrequest-create.dto';

@Controller('/api/bedRequest')
@ApiTags('Bed requests')
export class BedRequestController {
    constructor(
        private readonly bedRequestService: BedRequestService,
    ) { }

    @Get('/')
    @ApiQuery({ name: 'siteId', type: 'number', required: false })
    @ApiOperation({
        description: 'Return all bed requests',
    })
    @ApiResponse({ status: 200, type: BedRequest })
    getBedRequest(@Query('siteId') siteId): Promise<BedRequest[]> {
        if (siteId) return this.bedRequestService.findBySiteId(siteId);
        return this.bedRequestService.findAll();
    }

    @Post('/')
    @ApiOperation({
        description: 'Create a bed request for a site',
    })
    @ApiResponse({ status: 200, type: Boolean })
    createUf(
        @Body() bedRequestCreateDto: BedRequestCreateDto,
    ): Promise<any> {
        return this.bedRequestService.create(
            bedRequestCreateDto.siteId,
        );
    }

}

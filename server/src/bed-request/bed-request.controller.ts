import { Controller, Get, Query, Post, Body, Put, Param } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { BedRequestService } from './bed-request.service';
import { BedRequest } from '../entities/bed-request.entity';
import { BedRequestCreateDto } from '../bed-request/dto/bedrequest-create.dto';
import { BedRequestUpdateDto } from './dto/bedrequest-update.dto';

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

    @Put('/:id')
    @ApiOperation({
        description: 'Update bed request',
    })
    @ApiBody({
        type: BedRequestUpdateDto,
    })
    @ApiResponse({ status: 200, type: Boolean })
    updateUf(
        @Param('id') id: number,
        @Body() data: BedRequestUpdateDto,
    ): Promise<any> {
        return this.bedRequestService.update(
            id,
            data.status,
        );
    }

}

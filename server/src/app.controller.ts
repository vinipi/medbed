import { Controller, Inject, Get, Param, Query, Put, Body, Post } from '@nestjs/common';
import { SiteService } from './site.service';
import { ApiOperation, ApiResponse, ApiQuery, ApiBody } from '@nestjs/swagger';
import { Site } from './entities/site.entity';
import { UFService } from './uf.service';
import { UfUpdateDto } from './uf-update.dto';
import { UfCreateDto } from './uf-create.dto';

@Controller()
export class AppController {
    constructor(
        @Inject(SiteService) private siteService: SiteService,
        @Inject(UFService) private ufService: UFService,
    ) { }

    @Get('/api/site')
    @ApiQuery({ name: 'urlKey', type: 'string' })
    @ApiOperation({
        description: 'Return a site with all its UFs',
    })
    @ApiResponse({ status: 200, type: Site })
    getSite(@Query('urlKey') urlKey): Promise<Site> {
        return this.siteService.findByUrlKey(urlKey);
    }

    @Put('/api/uf/:id')
    @ApiOperation({
        description: 'Update bed in an UF',
    })
    @ApiResponse({ status: 200, type: 'boolean' })
    updateUf(
        @Body() ufUpdateDto: UfUpdateDto,
    ): Promise<any> {
        return this.ufService.update(
            ufUpdateDto.bedOtherTotal,
            ufUpdateDto.bedOtherUsed,
            ufUpdateDto.bedCovidTotal,
            ufUpdateDto.bedCovidUsed,
            ufUpdateDto.id,
        );
    }

    @Post('/api/site/:id/uf/')
    @ApiOperation({
        description: 'Create an uf for a site',
    })
    @ApiResponse({ status: 200, type: 'boolean' })
    createUf(
        @Body() ufCreateDto: UfCreateDto,
    ): Promise<any> {
        return this.ufService.create(
            ufCreateDto.name,
            ufCreateDto.siteId,
            ufCreateDto.bedOtherTotal,
            ufCreateDto.bedOtherUsed,
            ufCreateDto.bedCovidTotal,
            ufCreateDto.bedCovidUsed,
        );
    }
}

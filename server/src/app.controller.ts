import { Controller, Inject, Get, Param, Query } from '@nestjs/common';
import { SiteService } from './site.service';
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { SiteWithUFDto } from './dto/sitewithufdto';
import { Site } from './entities/site.entity';

@Controller()
export class AppController {
    constructor(
        @Inject(SiteService) private siteService: SiteService,
    ) { }

    @Get('/api/site')
    @ApiQuery({ name: 'urlKey', type: 'string' })
    @ApiOperation({
        description: 'Return a site with all its UFs',
    })
    @ApiResponse({ status: 200, type: Site })
    getSite(@Query('urlKey') urlKey): Promise<SiteWithUFDto> {
        return this.siteService.findByUrlKey(urlKey);
    }

}

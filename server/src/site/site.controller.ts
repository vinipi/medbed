import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SiteService } from './site.service';
import { Site } from 'src/entities/site.entity';

@Controller('/api/site')
@ApiTags('Site')
export class SiteController {
    constructor(
        private readonly siteService: SiteService,
    ) { }

    @Get('/')
    @ApiQuery({ name: 'urlKey', type: 'string', required: false })
    @ApiOperation({
        description: 'Return a site with all its UFs',
    })
    @ApiResponse({ status: 200, type: Site })
    getSite(@Query('urlKey') urlKey): Promise<Site | Site[]> {
        if (urlKey) return this.siteService.findByUrlKey(urlKey);
        return this.siteService.findAll();
    }
}

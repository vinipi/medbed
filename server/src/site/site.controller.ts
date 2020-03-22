import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SiteService } from './site.service';
import { Site } from '../entities/site.entity';

@Controller('/api/site')
@ApiTags('Site')
export class SiteController {
    constructor(
        private readonly siteService: SiteService,
    ) { }

    @Get('/:urlKey')
    @ApiParam({ name: 'urlKey', type: 'string' })
    @ApiOperation({
        description: 'Return a site with all its UFs',
    })
    @ApiResponse({ status: 200, type: Site })
    getSite(@Param('urlKey') urlKey): Promise<Site | Site[]> {
        return this.siteService.findByUrlKey(urlKey);
    }
}

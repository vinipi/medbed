import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { SiteService } from './site.service';
import { Site } from '../entities/site.entity';

@Controller('/api')
@ApiTags('Site')
export class SiteController {
    constructor(
        private readonly siteService: SiteService,
    ) { }

    @Get('/site/:urlKey')
    @ApiParam({ name: 'urlKey', type: 'string' })
    @ApiOperation({
        description: 'Return a site with all its UFs',
    })
    @ApiResponse({ status: 200, type: Site })
    getSite(@Param('urlKey') urlKey): Promise<Site | Site[]> {
        return this.siteService.findByUrlKey(urlKey);
    }

    @Get('/department')
    @ApiOperation({
        description: 'Return all department present in database',
    })
    @ApiResponse({ status: 200, type: Site })
    getDepartment(): Promise<any> {
        return this.siteService.getDepartment();
    }
}

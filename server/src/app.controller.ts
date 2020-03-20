import { Controller, Inject, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Site } from './entities/site.entity';
import { SiteService } from './site.service';

@Controller()
export class AppController {
    constructor(
        @Inject(SiteService) private siteService: SiteService,
    ) { }

    @Get('/api/site/:urlKey')
    getSite(@Param() params): Promise<Site> {
        return this.siteService.findByUrlKey(params.urlKey);
    }

}

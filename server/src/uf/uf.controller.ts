import { Controller, Body, Put, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UfUpdateDto } from 'src/uf/dto/uf-update.dto';
import { UFService } from 'src/uf/uf.service';
import { UfCreateDto } from 'src/uf/dto/uf-create.dto';

@Controller('/api/uf')
@ApiTags('UF')
export class UFController {
    constructor(
        private readonly ufService: UFService,
    ) { }

    @Put('/:id')
    @ApiOperation({
        description: 'Update bed in an UF',
    })
    @ApiResponse({ status: 200, type: Boolean })
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

    @Post('/')
    @ApiOperation({
        description: 'Create an uf for a site',
    })
    @ApiResponse({ status: 200, type: Boolean })
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

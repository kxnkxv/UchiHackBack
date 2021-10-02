import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../common/constants/role-type';
import { PageDto } from '../../common/dto/page.dto';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { Auth, UUIDParam } from '../../decorators/http.decorators';
import { TranslationService } from '../../shared/services/translation.service';
import { ThemeDto } from './dto/theme-dto';
import { ThemePageOptionsDto } from './dto/themes-page-options.dto';
import { ThemeEntity } from './themes.entity';
import { ThemesService } from './themes.service';

import type { ThemeCreateDto } from './dto/theme-create.dto';

@Controller('themes')
@ApiTags('themes')
export class ThemesController {
  constructor(
    private themeService: ThemesService,
  ) {}

  @Get()
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get themes list',
    type: PageDto,
  })
  getThemes(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: ThemePageOptionsDto,
  ): Promise<PageDto<ThemeDto>> {
    return this.themeService.getThemes(pageOptionsDto);
  }

  @Post('create')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: ThemeDto, description: 'Successfully Created Theme' })
  async createTheme(
    @Body() themeCreateDto: ThemeCreateDto,
  ): Promise<ThemeDto> {
    const createdTheme = await this.themeService.createTheme(
      themeCreateDto,
    );

    return createdTheme.toDto<typeof ThemeDto>();
  }

  @Get(':id')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get users list',
    type: ThemeDto,
  })
  getTheme(@UUIDParam('id') themeId: string): Promise<ThemeDto> {
    return this.themeService.getTheme(themeId);
  }
}

import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import { ValidatorService } from '../../shared/services/validator.service';
import type { PageDto } from '../../common/dto/page.dto';

import { ThemeEntity } from './themes.entity';
import { ThemesRepository } from './themes.repository';
import { ThemeDto } from './dto/theme-dto';
import { ThemePageOptionsDto } from './dto/themes-page-options.dto';
import type { ThemeCreateDto } from './dto/theme-create.dto';

@Injectable()
export class ThemesService {
  constructor(
    public readonly themeRepository: ThemesRepository,
    public readonly validatorService: ValidatorService,
  ) {}

  findOne(findData: FindConditions<ThemeEntity>): Promise<ThemeEntity> {
    return this.themeRepository.findOne(findData);
  }

  async createTheme(
    themeCreateDto: ThemeCreateDto,
  ): Promise<ThemeEntity> {
    const theme = this.themeRepository.create(themeCreateDto);

    return this.themeRepository.save(theme);
  }

  async getThemes(
    pageOptionsDto: ThemePageOptionsDto,
  ): Promise<PageDto<ThemeDto>> {
    const queryBuilder = this.themeRepository.createQueryBuilder('theme');
    const { items, pageMetaDto } = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async getTheme(themeId: string): Promise<ThemeDto> {
    const queryBuilder = this.themeRepository.createQueryBuilder('theme');

    queryBuilder.where('theme.id = :themeId', { themeId });

    const userEntity = await queryBuilder.getOne();

    return userEntity.toDto();
  }
}

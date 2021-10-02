import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { ThemeEntity } from '../themes.entity';

export class ThemeDto extends AbstractDto {
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  parent: ThemeEntity;

  @ApiPropertyOptional()
  subthemes: ThemeEntity[];

  constructor(theme: ThemeEntity, options?: Partial<{}>) {
    super(theme);
    this.title = theme.title;
    this.parent = theme.parent;
    this.subthemes = theme.subthemes
  }
}

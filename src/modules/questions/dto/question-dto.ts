import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { QuestionEntity } from '../questions.entity';

import { UserEntity } from '../../user/user.entity';
import { ThemeEntity } from '../../themes/themes.entity';

// title (название вопроса)
// description (текст вопроса)
// theme (Категория)
// subtheme (Подкатегория)
// createdAt (время создания)
// USER (Пользователь который создал вопрос)
// coast (Баллы за выполнение)
// status (Решено/не решено)
// time (огранечение по времени)
// сроочное/несрочное задание

export class QuestionDto extends AbstractDto {
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  theme: ThemeEntity;

  @ApiPropertyOptional()
  subtheme: ThemeEntity;

  @ApiPropertyOptional()
  user: UserEntity;

  @ApiPropertyOptional()
  cost: number;

  @ApiPropertyOptional()
  status: number;

  @ApiPropertyOptional()
  time: number;

  @ApiPropertyOptional()
  urgent: boolean;

  constructor(question: QuestionEntity, options?: Partial<{}>) {
    super(question);
    this.title = question.title;
    this.description = question.description;
    this.theme = question.theme;
    this.subtheme = question.subtheme;
    this.user = question.user;
    this.cost = question.cost;
    this.status = question.status;
    this.time = question.time;
    this.urgent = question.urgent;
  }
}

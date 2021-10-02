import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { QuestionEntity } from '../questions.entity';

import { UserEntity } from '../../user/user.entity';
import { ThemeEntity } from '../../themes/themes.entity';
import { AnswerEntity } from '../../answers/answers.entity';

export class QuestionDto extends AbstractDto {
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  theme: ThemeEntity['id'];

  @ApiPropertyOptional()
  subTheme: ThemeEntity['id'];

  @ApiPropertyOptional()
  user: UserEntity['id'];

  @ApiPropertyOptional()
  answers: AnswerEntity['id'][];

  @ApiPropertyOptional()
  cost: number;

  @ApiPropertyOptional()
  status: number;

  @ApiPropertyOptional()
  time: number;

  @ApiPropertyOptional()
  urgently: boolean;

  constructor(question: QuestionEntity, options?: Partial<{}>) {
    super(question);
    this.id = question.id;
    this.title = question.title;
    this.description = question.description;
    this.theme = question.theme;
    this.subTheme = question.subTheme;
    this.user = question.user;
    this.answers = question.answers;
    this.cost = question.cost;
    this.status = question.status;
    this.time = question.time;
    this.urgently = question.urgently;
  }
}

import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { AnswerEntity } from '../answers.entity';

import { UserEntity } from '../../user/user.entity';
import { QuestionEntity } from '../../questions/questions.entity';

export class AnswerDto extends AbstractDto {
  @ApiPropertyOptional()
  content: string;

  @ApiPropertyOptional()
  question: QuestionEntity;

  @ApiPropertyOptional()
  user: UserEntity;

  constructor(answer: AnswerEntity, options?: Partial<{}>) {
    super(answer);
    this.content = answer.content;
    this.question = answer.question;
    this.user = answer.user;
  }
}

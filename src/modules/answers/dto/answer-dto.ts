import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { AnswerEntity } from '../answers.entity';

import { UserEntity } from '../../user/user.entity';
import { QuestionEntity } from '../../questions/questions.entity';

export class AnswerDto extends AbstractDto {
  @ApiPropertyOptional()
  message: string;

  @ApiPropertyOptional()
  question: QuestionEntity['id'];

  @ApiPropertyOptional()
  user: UserEntity['id'];

  constructor(answer: AnswerEntity, options?: Partial<{}>) {
    super(answer);
    this.id = answer.id;
    this.message = answer.message;
    this.question = answer.question;
    this.user = answer.user;
  }
}

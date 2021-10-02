import { ApiPropertyOptional } from '@nestjs/swagger';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { CommentEntity } from '../comments.entity';

import { UserEntity } from '../../user/user.entity';
import { QuestionEntity } from '../../questions/questions.entity';

export class CommentDto extends AbstractDto {
  @ApiPropertyOptional()
  message: string;

  @ApiPropertyOptional()
  question: QuestionEntity['id'];

  @ApiPropertyOptional()
  user: UserEntity['id'];

  constructor(comment: CommentEntity, options?: Partial<{}>) {
    super(comment);
    this.id = comment.id;
    this.message = comment.message;
    this.question = comment.question;
    this.user = comment.user;
  }
}

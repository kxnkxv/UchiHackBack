import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { CommentDto } from './dto/comment-dto';

import { UserEntity } from '../user/user.entity';
import { QuestionEntity } from '../questions/questions.entity';

// export interface CommentType {
//   user: UserType;
//   id: string;
//   createdAt: Moment;
//   message: string;
// }

@Entity({ name: 'answers' })
export class CommentEntity extends AbstractEntity<CommentDto> {
  @Column({ length: 1000 })
  message: string;
  
  @ManyToOne(() => QuestionEntity, question => question.answers)
  question: QuestionEntity['id'];

  @ManyToOne(() => UserEntity, user => user.id)
  user: UserEntity['id'];

  dtoClass = CommentDto;
}

import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { AnswerDto } from './dto/answer-dto';

import { UserEntity } from '../user/user.entity';
import { QuestionEntity } from '../questions/questions.entity';
import { CommentEntity } from '../comments/comments.entity';

// export interface AnswerType {
//   user: UserType;
//   id: string;
//   isRightAnswer: boolean;
//   message: string;
//   createdAt: Moment;
//   comments: CommentType[];
// }

@Entity({ name: 'answers' })
export class AnswerEntity extends AbstractEntity<AnswerDto> {
  @Column({ length: 20000 })
  message: string;
  
  @ManyToOne(() => QuestionEntity, question => question.answers)
  question: QuestionEntity['id'];

  @ManyToOne(() => UserEntity, user => user.id)
  user: UserEntity['id'];

  @OneToMany(() => CommentEntity, (answer) => answer.id)
  comments: CommentEntity['id'][];

  @Column('boolean', {default: false})
  isRightAnswer: boolean = false;

  dtoClass = AnswerDto;
}

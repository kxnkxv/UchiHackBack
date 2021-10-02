import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { AnswerDto } from './dto/answer-dto';

import { UserEntity } from '../user/user.entity';
import { QuestionEntity } from '../questions/questions.entity';

@Entity({ name: 'answers' })
export class AnswerEntity extends AbstractEntity<AnswerDto> {
  @Column({ length: 20000 })
  content: string;
  
  @ManyToOne(() => QuestionEntity, question => question.answers)
  question: QuestionEntity;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  dtoClass = AnswerDto;
}

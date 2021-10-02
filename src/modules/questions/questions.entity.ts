import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { QuestionDto } from './dto/question-dto';

import { UserEntity } from '../user/user.entity';
import { ThemeEntity } from '../themes/themes.entity';
import { AnswerEntity } from '../answers/answers.entity';

// export interface QuestionType {
//   id: string;
//   title: string;
//   description: string;
//   theme: string;
//   subTheme: string;
//   createdAt: Moment;
//   user: UserType;
//   cost: number;
//   status: string;
//   time: number;
//   urgently: boolean;
// }

@Entity({ name: 'questions' })
export class QuestionEntity extends AbstractEntity<QuestionDto> {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;
  
  @ManyToOne(() => ThemeEntity)
  theme: ThemeEntity['id'];

  @ManyToOne(() => ThemeEntity)
  subTheme: ThemeEntity['id'];

  @ManyToOne(() => UserEntity)
  user: UserEntity['id'];

  @OneToMany(() => AnswerEntity, (answer) => answer.question)
  answers: AnswerEntity['id'][];

  @Column({ nullable: false })
  cost: number;

  @Column({ default: 0 })
  status: number;

  @Column({ default: 0 })
  time: number;

  @Column({ nullable: true })
  urgently: boolean;

  dtoClass = QuestionDto;
}

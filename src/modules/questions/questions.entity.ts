import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { QuestionDto } from './dto/question-dto';

import { UserEntity } from '../user/user.entity';
import { ThemeEntity } from '../themes/themes.entity';

@Entity({ name: 'questions' })
export class QuestionEntity extends AbstractEntity<QuestionDto> {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;
  
  @ManyToOne(() => ThemeEntity)
  theme: ThemeEntity;

  @ManyToOne(() => ThemeEntity)
  subtheme: ThemeEntity;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column({ nullable: false })
  cost: number;

  @Column({ default: 0 })
  status: number;

  @Column({ default: 0 })
  time: number;

  @Column({ nullable: true })
  urgent: boolean;

  dtoClass = QuestionDto;
}

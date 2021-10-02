import { Column, Entity, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { ThemeDto } from './dto/theme-dto';

@Entity({ name: 'themes' })
export class ThemeEntity extends AbstractEntity<ThemeDto> {
  @Column({ nullable: false })
  title: string;

  @OneToMany(() => ThemeEntity, (theme) => theme.subthemes)
  subthemes: ThemeEntity[];

  @ManyToOne(() => ThemeEntity)
  parent: ThemeEntity;

  dtoClass = ThemeDto;
}

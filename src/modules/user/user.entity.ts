import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '../../common/abstract.entity';
import { RoleType } from '../../common/constants/role-type';
import { VirtualColumn } from '../../decorators/virtual-column.decorator';
import { UserDto } from './dto/user-dto';

// export interface UserType {
//   id: string;
//   firstName: string;
//   lastName: string;
//   avatar: string;
//   phone: string;
//   answers: number;
//   questions: number;
//   role: string;
//   patronymic: string;
//   education: string;
//   emailNotify: boolean;
//   balance: number;
// }

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserDto> {
  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  patronymic: string;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
  role: RoleType;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column('boolean', {default: false})
  emailNotify: boolean = false;

  @Column({ nullable: true })
  balance: number;

  @Column({ nullable: true })
  avatar: string;

  @VirtualColumn()
  fullName: string;

  @VirtualColumn()
  answers: number;

  @VirtualColumn()
  questions: number;

  dtoClass = UserDto;
}

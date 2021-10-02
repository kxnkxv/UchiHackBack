import { ApiPropertyOptional } from '@nestjs/swagger';

import { RoleType } from '../../../common/constants/role-type';
import { AbstractDto } from '../../../common/dto/abstract.dto';
import type { UserEntity } from '../user.entity';

export class UserDto extends AbstractDto {
  @ApiPropertyOptional()
  firstName: string;

  @ApiPropertyOptional()
  lastName: string;

  @ApiPropertyOptional()
  patronymic: string;

  @ApiPropertyOptional()
  username: string;

  @ApiPropertyOptional({ enum: RoleType })
  role: RoleType;

  @ApiPropertyOptional()
  email: string;

  @ApiPropertyOptional()
  avatar: string;

  @ApiPropertyOptional()
  phone: string;

  @ApiPropertyOptional({ default: false })
  emailNotify: boolean;

  @ApiPropertyOptional()
  balance: number;

  @ApiPropertyOptional()
  isActive: boolean;

  constructor(user: UserEntity, options?: Partial<{ isActive: boolean }>) {
    super(user);
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.patronymic = user.patronymic;
    this.emailNotify = user.emailNotify;
    this.balance = user.balance;
    this.role = user.role;
    this.email = user.email;
    this.avatar = user.avatar;
    this.phone = user.phone;
    this.isActive = options?.isActive;
  }
}

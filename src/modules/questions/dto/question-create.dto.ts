import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsEmpty,
  IsOptional,
  IsPhoneNumber,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

import { Trim } from '../../../decorators/transforms.decorator';

import type { UserEntity } from '../../user/user.entity';
import type { ThemeEntity } from '../../themes/themes.entity';

export class QuestionCreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly theme: ThemeEntity;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Trim()
  readonly subtheme: ThemeEntity;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly user: UserEntity;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Trim()
  readonly cost: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  @Trim()
  readonly status: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Trim()
  readonly time: number;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  @Trim()
  urgent: boolean;
}

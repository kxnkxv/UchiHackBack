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

import { UserEntity } from '../../user/user.entity';
import { QuestionEntity } from '../../questions/questions.entity';

export class AnswerCreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly content: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Trim()
  readonly question: QuestionEntity['id'];

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  user: UserEntity['id'];
}

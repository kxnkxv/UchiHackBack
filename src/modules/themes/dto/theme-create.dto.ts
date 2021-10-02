import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

import { Trim } from '../../../decorators/transforms.decorator';

export class ThemeCreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Trim()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Trim()
  readonly parent: ThemeEntity;
}

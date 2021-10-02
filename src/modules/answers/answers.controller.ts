import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../common/constants/role-type';
import { PageDto } from '../../common/dto/page.dto';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { Auth, UUIDParam } from '../../decorators/http.decorators';
import { TranslationService } from '../../shared/services/translation.service';

import { AnswerDto } from './dto/answer-dto';
import { AnswerPageOptionsDto } from './dto/answer-page-options.dto';
import { AnswerEntity } from './answers.entity';
import { AnswersService } from './answers.service';

import type { AnswerCreateDto } from './dto/answer-create.dto';

@Controller('answers')
@ApiTags('answers')
export class AnswersController {
  constructor(
    private answerService: AnswersService,
  ) {}

  @Post('create')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: AnswerDto, description: 'Successfully Created Answer' })
  async createAnswer(
    @Body() answerCreateDto: AnswerCreateDto,
  ): Promise<AnswerDto> {
    const createdAnswer = await this.answerService.createAnswer(
      answerCreateDto,
    );

    return createdAnswer.toDto<typeof AnswerDto>();
  }

  @Get(':id')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get answer',
    type: AnswerDto,
  })
  getAnswer(@UUIDParam('id') themeId: string): Promise<AnswerDto> {
    return this.answerService.getAnswer(themeId);
  }
}

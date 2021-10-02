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
import { QuestionDto } from './dto/question-dto';
import { QuestionPageOptionsDto } from './dto/questions-page-options.dto';
import { QuestionEntity } from './questions.entity';
import { QuestionsService } from './questions.service';

import type { QuestionCreateDto } from './dto/question-create.dto';

@Controller('questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(
    private questionService: QuestionsService,
  ) {}

  @Get()
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get questions list',
    type: PageDto,
  })
  getQuestions(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: QuestionPageOptionsDto,
  ): Promise<PageDto<QuestionDto>> {
    return this.questionService.getQuestions(pageOptionsDto);
  }

  @Post('suggestions')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get suggestions list',
    type: PageDto,
  })
  questionsSuggestions(
    @Query(new ValidationPipe({ transform: true }))
    pageOptionsDto: QuestionPageOptionsDto,
  ): Promise<PageDto<QuestionDto>> {
    return this.questionService.getQuestions(pageOptionsDto);
  }

  @Post('create')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: QuestionDto, description: 'Successfully Created Question' })
  async createQuestion(
    @Body() questionCreateDto: QuestionCreateDto,
  ): Promise<QuestionDto> {
    const createdTheme = await this.questionService.createQuestion(
      questionCreateDto,
    );

    return createdTheme.toDto<typeof QuestionDto>();
  }

  @Get(':id')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get question list',
    type: QuestionDto,
  })
  getQuestion(@UUIDParam('id') questionId: string): Promise<QuestionDto> {
    return this.questionService.getQuestion(questionId);
  }
}

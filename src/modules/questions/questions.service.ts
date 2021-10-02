import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import { ValidatorService } from '../../shared/services/validator.service';
import type { PageDto } from '../../common/dto/page.dto';

import { QuestionEntity } from './questions.entity';
import { QuestionsRepository } from './questions.repository';
import { QuestionDto } from './dto/question-dto';
import { QuestionPageOptionsDto } from './dto/questions-page-options.dto';
import type { QuestionCreateDto } from './dto/question-create.dto';

@Injectable()
export class QuestionsService {
  constructor(
    public readonly questionRepository: QuestionsRepository,
    public readonly validatorService: ValidatorService,
  ) {}

  findOne(findData: FindConditions<QuestionEntity>): Promise<QuestionEntity> {
    return this.questionRepository.findOne(findData);
  }

  async createQuestion(
    questionCreateDto: QuestionCreateDto,
  ): Promise<QuestionEntity> {
    const question = this.questionRepository.create(questionCreateDto);

    return this.questionRepository.save(question);
  }

  async getQuestions(
    pageOptionsDto: QuestionPageOptionsDto,
  ): Promise<PageDto<QuestionDto>> {
    const queryBuilder = this.questionRepository.createQueryBuilder('questions');
    const { items, pageMetaDto } = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async getQuestionsBySearch(
    pageOptionsDto: QuestionPageOptionsDto,
  ): Promise<PageDto<QuestionDto>> {
    const queryBuilder = this.questionRepository.createQueryBuilder('questions');
    const { items, pageMetaDto } = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }

  async getQuestion(questionId: string): Promise<QuestionDto> {
    const queryBuilder = this.questionRepository.createQueryBuilder('questions');

    queryBuilder.where('question.id = :questionId', { questionId });

    const userEntity = await queryBuilder.getOne();

    return userEntity.toDto();
  }
}

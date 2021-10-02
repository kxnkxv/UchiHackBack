import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import { ValidatorService } from '../../shared/services/validator.service';
import type { PageDto } from '../../common/dto/page.dto';

import { AnswerEntity } from './answers.entity';
import { AnswersRepository } from './answers.repository';
import { AnswerDto } from './dto/answer-dto';
import { AnswerPageOptionsDto } from './dto/answer-page-options.dto';
import type { AnswerCreateDto } from './dto/answer-create.dto';

@Injectable()
export class AnswersService {
  constructor(
    public readonly answerRepository: AnswersRepository,
    public readonly validatorService: ValidatorService,
  ) {}

  findOne(findData: FindConditions<AnswerEntity>): Promise<AnswerEntity> {
    return this.answerRepository.findOne(findData);
  }

  async createAnswer(
    themeCreateDto: AnswerCreateDto,
  ): Promise<AnswerEntity> {
    const answer = this.answerRepository.create(themeCreateDto);

    return this.answerRepository.save(answer);
  }

  async getAnswer(answerId: string): Promise<AnswerDto> {
    const queryBuilder = this.answerRepository.createQueryBuilder('answer');

    queryBuilder.where('answer.id = :answerId', { answerId });

    const userEntity = await queryBuilder.getOne();

    return userEntity.toDto();
  }

  async getAnswersByQuestion(
    pageOptionsDto: AnswerPageOptionsDto,
    questionId: string
  ): Promise<PageDto<AnswerDto>> {
    const queryBuilder = this.answerRepository.createQueryBuilder('answer');

    queryBuilder.where('answer.question = :questionId', { questionId });

    const { items, pageMetaDto } = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }
}

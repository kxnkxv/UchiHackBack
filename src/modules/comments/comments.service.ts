import { Injectable } from '@nestjs/common';
import type { FindConditions } from 'typeorm';

import { ValidatorService } from '../../shared/services/validator.service';
import type { PageDto } from '../../common/dto/page.dto';

import { CommentEntity } from './comments.entity';
import { CommentsRepository } from './comments.repository';
import { CommentDto } from './dto/comment-dto';
import { CommentPageOptionsDto } from './dto/comment-page-options.dto';
import type { CommentCreateDto } from './dto/comment-create.dto';

@Injectable()
export class CommentsService {
  constructor(
    public readonly commentRepository: CommentsRepository,
    public readonly validatorService: ValidatorService,
  ) {}

  findOne(findData: FindConditions<CommentEntity>): Promise<CommentEntity> {
    return this.commentRepository.findOne(findData);
  }

  async createComment(
    themeCreateDto: CommentCreateDto,
  ): Promise<CommentEntity> {
    const comment = this.commentRepository.create(themeCreateDto);

    return this.commentRepository.save(comment);
  }

  async getComment(commentId: string): Promise<CommentDto> {
    const queryBuilder = this.commentRepository.createQueryBuilder('comment');

    queryBuilder.where('comment.id = :commentId', { commentId });

    const userEntity = await queryBuilder.getOne();

    return userEntity.toDto();
  }

  async getCommentByQuestion(
    pageOptionsDto: CommentPageOptionsDto,
    questionId: string
  ): Promise<PageDto<CommentDto>> {
    const queryBuilder = this.commentRepository.createQueryBuilder('comment');

    queryBuilder.where('comment.question = :questionId', { questionId });

    const { items, pageMetaDto } = await queryBuilder.paginate(pageOptionsDto);

    return items.toPageDto(pageMetaDto);
  }
}

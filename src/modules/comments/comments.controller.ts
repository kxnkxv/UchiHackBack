import {
  Body,
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Query,
  ValidationPipe,
  UseInterceptors
} from '@nestjs/common';
import { ApiResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { RoleType } from '../../common/constants/role-type';
import { PageDto } from '../../common/dto/page.dto';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { Auth, UUIDParam } from '../../decorators/http.decorators';
import { TranslationService } from '../../shared/services/translation.service';

import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { UserEntity } from '../user/user.entity';

import { CommentDto } from './dto/comment-dto';
import { CommentPageOptionsDto } from './dto/comment-page-options.dto';
import { CommentEntity } from './comments.entity';
import { CommentsService } from './comments.service';

import type { CommentCreateDto } from './dto/comment-create.dto';

@Controller('comments')
@ApiTags('comments')
export class CommentsController {
  constructor(
    private commentService: CommentsService,
  ) {}

  @Get('question/:questionId')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get comment',
    type: CommentDto,
  })
  getCommentByQuestion(
    @UUIDParam('id') questionId: string,
    pageOptionsDto: CommentPageOptionsDto,
  ): Promise<PageDto<CommentDto>> {
    return this.commentService.getCommentByQuestion(pageOptionsDto, questionId);
  }

  @Post('create')
  @Auth(RoleType.USER)
  @UseInterceptors(AuthUserInterceptor)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: CommentDto, description: 'Successfully Created Comment' })
  async createComment(
    @Body() commentCreateDto,
    @AuthUser() user: UserEntity,
  ): Promise<CommentDto> {
    commentCreateDto.user = user.id;

    const createdComment = await this.commentService.createComment(
      commentCreateDto,
    );

    return createdComment.toDto<typeof CommentDto>();
  }

  @Get('id/:id')
  @Auth(RoleType.USER)
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get comment',
    type: CommentDto,
  })
  getComment(@UUIDParam('id') themeId: string): Promise<CommentDto> {
    return this.commentService.getComment(themeId);
  }
}

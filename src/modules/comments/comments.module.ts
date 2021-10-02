import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommentsService } from './comments.service';
import { CommentsRepository } from './comments.repository';
import { CommentsController } from './comments.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommentsRepository])],
  controllers: [CommentsController],
  exports: [CommentsService],
  providers: [CommentsService],
})
export class CommentsModule {}

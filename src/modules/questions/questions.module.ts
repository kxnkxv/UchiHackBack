import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuestionsController } from './questions.controller';
import { QuestionsRepository } from './questions.repository';
import { QuestionsService } from './questions.service';

import { UserRepository } from '../user/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionsRepository]), TypeOrmModule.forFeature([UserRepository])],
  controllers: [QuestionsController],
  exports: [QuestionsService],
  providers: [QuestionsService],
})
export class QuestionsModule {}

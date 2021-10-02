import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AnswersService } from './answers.service';
import { AnswersRepository } from './answers.repository';
import { AnswersController } from './answers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AnswersRepository])],
  controllers: [AnswersController],
  exports: [AnswersService],
  providers: [AnswersService],
})
export class AnswersModule {}

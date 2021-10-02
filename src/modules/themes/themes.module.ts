import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ThemesController } from './themes.controller';
import { ThemesRepository } from './themes.repository';
import { ThemesService } from './themes.service';

@Module({
  imports: [TypeOrmModule.forFeature([ThemesRepository])],
  controllers: [ThemesController],
  exports: [ThemesService],
  providers: [ThemesService],
})
export class ThemesModule {}

import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { ThemeEntity } from './themes.entity';

@EntityRepository(ThemeEntity)
export class ThemesRepository extends Repository<ThemeEntity> {}

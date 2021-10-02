import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { QuestionEntity } from './questions.entity';

@EntityRepository(QuestionEntity)
export class QuestionsRepository extends Repository<QuestionEntity> {}

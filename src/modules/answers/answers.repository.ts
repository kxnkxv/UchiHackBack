import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { AnswerEntity } from './answers.entity';

@EntityRepository(AnswerEntity)
export class AnswersRepository extends Repository<AnswerEntity> {}

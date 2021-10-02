import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { CommentEntity } from './comments.entity';

@EntityRepository(CommentEntity)
export class CommentsRepository extends Repository<CommentEntity> {}

import {MigrationInterface, QueryRunner} from "typeorm";

export class main1633194691146 implements MigrationInterface {
    name = 'main1633194691146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "content" character varying(20000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "message" character varying(1000) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "content" character varying(20000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "message" character varying(1000) NOT NULL`);
    }

}

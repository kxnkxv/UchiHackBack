import {MigrationInterface, QueryRunner} from "typeorm";

export class main1633195208466 implements MigrationInterface {
    name = 'main1633195208466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "users_role_enum" AS ENUM('USER', 'ADMIN', 'TEACHER')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying, "last_name" character varying, "patronymic" character varying, "role" "users_role_enum" NOT NULL DEFAULT 'USER', "email" character varying, "password" character varying, "phone" character varying, "email_notify" boolean NOT NULL DEFAULT false, "balance" integer, "avatar" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "themes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "parent_id" uuid, CONSTRAINT "PK_ddbeaab913c18682e5c88155592" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "description" character varying NOT NULL, "cost" integer NOT NULL, "status" integer NOT NULL DEFAULT '0', "time" integer NOT NULL DEFAULT '0', "urgently" boolean, "theme_id" uuid, "sub_theme_id" uuid, "user_id" uuid, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "message" character varying(1000) NOT NULL, "question_id" uuid, "user_id" uuid, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "is_right_answer" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "message" character varying(20000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "themes" ADD CONSTRAINT "FK_a62dbd367841f6720b2af373943" FOREIGN KEY ("parent_id") REFERENCES "themes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_e33a5129cc01279299076fc7c05" FOREIGN KEY ("theme_id") REFERENCES "themes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_78bb46b4da85d545dc8c62105b5" FOREIGN KEY ("sub_theme_id") REFERENCES "themes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_5800cd25a5888174b2c40e67d4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_f4cf663ebeca05b7a12f6a2cc97" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_f4cf663ebeca05b7a12f6a2cc97"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_677120094cf6d3f12df0b9dc5d3"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_5800cd25a5888174b2c40e67d4b"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_78bb46b4da85d545dc8c62105b5"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_e33a5129cc01279299076fc7c05"`);
        await queryRunner.query(`ALTER TABLE "themes" DROP CONSTRAINT "FK_a62dbd367841f6720b2af373943"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "answers" ADD "message" character varying(1000) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answers" DROP COLUMN "is_right_answer"`);
        await queryRunner.query(`DROP TABLE "answers"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "themes"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "users_role_enum"`);
    }

}

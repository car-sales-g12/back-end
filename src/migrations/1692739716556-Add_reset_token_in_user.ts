import { MigrationInterface, QueryRunner } from "typeorm";

export class AddResetTokenInUser1692739716556 implements MigrationInterface {
    name = 'AddResetTokenInUser1692739716556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`);
    }

}

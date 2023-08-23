import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692806567802 implements MigrationInterface {
    name = 'InitialMigration1692806567802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "perfilImg" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "perfilImg"`);
    }

}

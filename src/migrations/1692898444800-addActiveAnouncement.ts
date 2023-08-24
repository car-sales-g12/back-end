import { MigrationInterface, QueryRunner } from "typeorm";

export class AddActiveAnouncement1692898444800 implements MigrationInterface {
    name = 'AddActiveAnouncement1692898444800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ADD "active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "active"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class Initalmigration1691259670208 implements MigrationInterface {
    name = 'Initalmigration1691259670208'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "birth_date" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "birth_date" date NOT NULL`);
    }

}

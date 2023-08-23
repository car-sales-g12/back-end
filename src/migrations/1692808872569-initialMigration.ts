import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692808872569 implements MigrationInterface {
    name = 'InitialMigration1692808872569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "description" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "description" SET DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fbr%2Ffotos%2Fsombra&psig=AOvVaw0MO5vBuCQr-D0IhiiiGnUs&ust=1692893713735000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCXqtmW84ADFQAAAAAdAAAAABAD'`);
    }

}

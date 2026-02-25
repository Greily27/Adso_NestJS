import { MigrationInterface, QueryRunner } from "typeorm";

export class MigrationNumberTwoCreateColumnDocHumberforUsers1772047104029 implements MigrationInterface {
    name = 'MigrationNumberTwoCreateColumnDocHumberforUsers1772047104029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "docType" character varying(255) NOT NULL DEFAULT 'CC'
        `);

        await queryRunner.query(`
            ALTER TABLE "user"
            ADD "docNumber" character varying(255) NOT NULL DEFAULT '000000000'
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "docNumber"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "docType"`);
    }
}
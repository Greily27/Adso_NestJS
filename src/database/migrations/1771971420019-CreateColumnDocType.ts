import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateColumnDocType1771971420019 implements MigrationInterface {
    name = 'CreateColumnDocType1771971420019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // 1️⃣ Agregar columna permitiendo null
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD COLUMN "docType" character varying(255)
        `);

        // 2️⃣ Asignar valor a registros existentes
        await queryRunner.query(`
            UPDATE "user"
            SET "docType" = 'CC'
        `);

        // 3️⃣ Convertir columna en NOT NULL
        await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "docType" SET NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "user"
            DROP COLUMN "docType"
        `);
    }
}
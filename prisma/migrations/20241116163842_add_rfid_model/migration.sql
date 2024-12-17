/*
  Warnings:

  - You are about to drop the column `last_used_date` on the `rfid` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uid]` on the table `RFID` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `RFID` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uid` to the `RFID` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rfid` DROP COLUMN `last_used_date`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `uid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `RFID_uid_key` ON `RFID`(`uid`);

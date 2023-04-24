/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "TicketLink" (
    "clerkUserId" TEXT NOT NULL,
    "symplaTicketNumber" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "TicketLink_clerkUserId_key" ON "TicketLink"("clerkUserId");

-- CreateIndex
CREATE UNIQUE INDEX "TicketLink_symplaTicketNumber_key" ON "TicketLink"("symplaTicketNumber");

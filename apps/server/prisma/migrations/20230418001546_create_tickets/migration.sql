-- CreateTable
CREATE TABLE "Ticket" (
    "userId" TEXT NOT NULL,
    "ticket" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("userId","ticket")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_userId_key" ON "Ticket"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticket_key" ON "Ticket"("ticket");

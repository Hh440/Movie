-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "TIme" TEXT,
ADD COLUMN     "movieName" TEXT,
ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "startAt" DROP NOT NULL,
ALTER COLUMN "seats" DROP NOT NULL,
ALTER COLUMN "seats" SET DATA TYPE TEXT,
ALTER COLUMN "orderId" DROP NOT NULL,
ALTER COLUMN "ticketPrice" DROP NOT NULL,
ALTER COLUMN "total" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
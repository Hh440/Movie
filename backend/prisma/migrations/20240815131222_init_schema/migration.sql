-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "language" DROP NOT NULL,
ALTER COLUMN "genre" DROP NOT NULL,
ALTER COLUMN "director" DROP NOT NULL,
ALTER COLUMN "trailer" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL;

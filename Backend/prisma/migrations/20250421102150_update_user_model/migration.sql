-- AlterTable
ALTER TABLE "user" ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "refreshToken" DROP NOT NULL,
ALTER COLUMN "forgotPasswordToken" DROP NOT NULL,
ALTER COLUMN "forgotPasswordExpiry" DROP NOT NULL,
ALTER COLUMN "emailVerificationToken" DROP NOT NULL,
ALTER COLUMN "emailVerificationExpiry" DROP NOT NULL;

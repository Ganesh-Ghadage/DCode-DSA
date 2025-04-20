import { PrismaClient } from '../generated/prisma/client/index.js'

const globalThisForPrisma = globalThis

export const db = globalThisForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThisForPrisma.prisma = db
import { PrismaClient } from '@prisma/client'

// global.d.ts
declare global {
    var prisma: PrismaClient;
}
import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcryptjs";

const globalThisForPrisma = globalThis

export const userDBClient = globalThisForPrisma.userPrisma || new PrismaClient().$extends({
  query: {
    user: {
      async create({args, query}) {
        if(args.data.password) {
          args.data.password = await bcrypt.hash(args.data.password, 10)
        }
        return query(args)
      },
      async update({args, query}) {
        if(args.data.password) {
          args.data.password = await bcrypt.hash(args.data.password, 10)
        }
        return query(args)
      }
    }
  },
  model: {
    user: {
      async isPasswordValid(password) {
        return await bcrypt.compare(password, this.password)
      },
      
      
    }  
  }
});

if (process.env.NODE_ENV !== 'production') globalThisForPrisma.userPrisma = userDBClient
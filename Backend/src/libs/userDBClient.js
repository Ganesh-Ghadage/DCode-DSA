import { PrismaClient } from "../generated/prisma/client/index.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

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
      async isPasswodValid(this, password) {
        return await bcrypt.compare(password, this.password)
      },
      generateAccessToken(this) {
        return jwt.sign(
          {
            id: this.id,
            name: this.name,
            email: this.email,
            role: this.role
          },
          process.env.ACCESS_TOKEN_SECRET,
          { 
             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
          }
        )
      },
      generateRefreshToken(this) {
        return jwt.sign(
          {
            id: this.id
          },
          process.env.REFRESH_TOKEN_SECRET,
          { 
             expiresIn: process.env.REFRESH_TOKEN_EXPIRY
          }
        )
      },
    }  
  }
});

if (process.env.NODE_ENV !== 'production') globalThisForPrisma.userPrisma = db
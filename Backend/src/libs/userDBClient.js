import { PrismaClient } from "../generated/prisma/index.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import crypto from 'crypto'

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
      async isPasswodValid(password) {
        return await bcrypt.compare(password, this.password)
      },
      generateAccessToken() {
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
      generateRefreshToken() {
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
      generateVerificationToken() {
        const unHashedToken = crypto.randomBytes(16).toString('hex')

        const hashedToken = crypto.createHash('sha256').update(unHashedToken).digest('hex')

        const tokenExpiry = Date.now() + (20*60*1000) // 20 min

        return { unHashedToken, hashedToken, tokenExpiry }
      }
    }  
  }
});

if (process.env.NODE_ENV !== 'production') globalThisForPrisma.userPrisma = userDBClient
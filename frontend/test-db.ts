import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const prisma = new PrismaClient()

async function main() {
  try {
    console.log('Attempting to connect to the database...')
    console.log('DATABASE_URL:', process.env.DATABASE_URL)
    const result = await prisma.$queryRaw`SELECT current_database() as database, current_user as user`
    console.log('Database connection successful', result)
  } catch (error) {
    console.error('Database connection failed', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
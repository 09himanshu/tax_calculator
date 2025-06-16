import { config } from 'dotenv'

config({ path: '.env' })

export const env = {
    port: process.env.port,
    host: process.env.host
}


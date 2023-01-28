import { connect } from 'mongoose'

declare var process: {
  env: {
    MONGO_URL: string
  }
}
declare global {
  var mongoose: { conn: null; promise: null | any }
}

const MONGO_URL = process.env.MONGO_URL

if (!MONGO_URL) {
  throw new Error(
    'Please define the MONGO_URL environment variable inside .env.local',
  )
}

async function dbConnect() {
  try {
    connect(MONGO_URL)
    console.log('connected')
  } catch (error) {
    console.log(error)
  }
}

export default dbConnect

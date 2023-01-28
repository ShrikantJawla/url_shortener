import { Schema, model, models } from 'mongoose'

interface Shortener {
  originalUrl: string
  shortUrl: string
  urlId: string
}

const shortenerSchema = new Schema<Shortener>(
  {
    originalUrl: String,
    shortUrl: String,
    urlId: String,
  },
  { timestamps: true },
)

export default models.shortUrl || model('shortUrl', shortenerSchema)

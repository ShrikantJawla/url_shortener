import dbConnect from '@/src/configs/mongodbConfig'
import shortenerModel from '@/src/models/shortener.model'
import { NextApiRequest, NextApiResponse } from 'next'
import { nanoid } from 'nanoid'

declare var process: {
  env: {
    baseUrl: string
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, method } = req
  const { url } = body
  try {
    if (method === 'POST') {
      await dbConnect()
      const id = nanoid(10)
      const shortUrl = `${process.env.baseUrl}/api/visit/${id}`
      const result = await shortenerModel.create({
        originalUrl: url,
        shortUrl,
        urlId: id,
      })
      return res.json(result)
    }
  } catch (error) {
    const { message }: any = error
    res.json(message)
  }
}

export default handler

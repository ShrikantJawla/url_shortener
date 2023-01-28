import dbConnect from '@/src/configs/mongodbConfig'
import shortenerModel from '@/src/models/shortener.model'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req
  const { urlId } = query
  try {
    if (method === 'GET') {
      await dbConnect()
      const original = await shortenerModel.findOne({ urlId })
      res.redirect(original.originalUrl)
    }
  } catch (error) {
    const { message }: any = error
    res.json(message)
  }
}

export default handler

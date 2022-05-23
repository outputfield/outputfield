import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

export const getArtist = (artistName: any) => {
  return prisma?.artist.findUnique({
    where: {
      handle: artistName
    },
    include: {
      work: true,
      links: true
    },
  })
}

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
){
  // if (req.method === 'POST') {
  // }
  const { name }: { name?: string } = req.query
  if (req.method === 'GET') {
    try {
      const artist = await getArtist(name)
      if (!artist) {
        return res.status(404)
      } else {
        res.status(200).json(artist)
      }
    } catch (err) {
      res.status(405)
      res.end()
    }
  }
}

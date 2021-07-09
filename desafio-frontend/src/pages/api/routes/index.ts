// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Route, routes } from '../../model'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Route[]>
) {
  res.status(200).json(routes)
}

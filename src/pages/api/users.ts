import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
   { id: 1, name: 'Will'},
   { id: 2, name: 'Carla'},
   { id: 3, name: 'Viny'},
 ]

 return response.json(users);
}
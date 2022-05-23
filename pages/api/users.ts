import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handle (
  request: NextApiRequest,
  res: NextApiResponse
){
  // if (req.method === 'POST') {
  // }
  if (request.method === 'GET') {
    const prisma = new PrismaClient()
    try {
      const allUsers = await prisma.user.findMany({
        // include: { projects: true }
      })
      if (!allUsers) {
        return res.status(404)
        //return h.response().code(404)
      } else {
        return {
          allUsers,
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
}

// const usersPlugin = {
//   name: 'app/users',
//   dependencies: ['prisma'],
//   register: async function(server: Hapi.Server) {
//     server.route([
//       {
//         method: 'POST',
//         path: '/users',
//         handler: createUserHandler,
//         // options: {
//         //   validate: {
//         //     payload: userInputValidator,
//         //   },
//         // },
//       },
//       {
//         method: 'GET',
//         path: '/users/{userId}',
//         handler: getUserHandler,
//         //options: {
//           //auth: false,
//         // options: {
//         //   validate: {
//         //     params: Joi.object({
//         //       userId: Joi.number().integer(),
//         //     }),
//         //   },
//         //},
//       },
//     ])
//   }
// }
// export default usersPlugin
//
// interface UserInput {
//   name: string;
//   email: string;
//   password: string;
//   pronoun: string;
// }
//
// const userInputValidator = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().required(),
//   pronoun: Joi.string().required(),
// })
//
// async function createUserHandler(
//   request: Hapi.Request,
//   h: Hapi.ResponseToolkit,
// ) {
//   const { prisma } = request.server.app
//   const payload = request.payload as UserInput
//
//   try {
//     const createdUser = await prisma.user.create({
//       data: {
//         name: payload.name,
//         email: payload.email,
//         password: payload.password,
//         pronoun: payload.pronoun,
//       },
//       select: {
//         id: true,
//         email: true,
//         name: true,
//         pronoun: true,
//       },
//     })
//     return h.response(createdUser).code(201)
//   } catch (err) {
//     request.log('error', err)
//     return Boom.badImplementation('failed to create user')
//   }
// }
//
// async function getUserHandler(request: Hapi.Request, h: Hapi.ResponseToolkit) {
//   const { prisma } = request.server.app
//   const userId = parseInt(request.params.userId, 10)
//
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     })
//     if (!user) {
//       return h.response().code(404)
//     } else {
//       return h.response(user).code(200)
//     }
//   } catch (err) {
//     console.log(err)
//     return Boom.badImplementation()
//   }
// }

import connectDB from "../../../backend/middlewares/connectDB"
import authenticateUser from "../../../backend/services/user/authenticate"


function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}



export default async (req, res) => {
  const {method} = req

  
  if (method === "POST") {
    await runMiddleware(req, res, connectDB)
    // await authenticateUser(req, res)
  } else {
    res.status(405).json({msg: "invalid request"})
  } 
}
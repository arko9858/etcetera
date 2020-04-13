import runMiddleware from "../../../backend/middlewares/runMiddleware"
import connectDB from "../../../backend/middlewares/connectDB"
import authenticateUser from "../../../backend/services/user/authenticate"

export default async (req, res) => {
  const {method} = req

  if (method === "POST") {
    await runMiddleware(req, res, connectDB)
    await authenticateUser(req, res)
  } else {
    res.status(405).json({msg: "invalid request"})
  } 
}
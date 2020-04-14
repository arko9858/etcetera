// import connectDB from "../../../backend/middlewares/connectDB"
// import authenticateUser from "../../../backend/services/user/authenticate"
import mongoose from "mongoose"

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const middleware1 = async (req,res,next)=>{
  try {
    const connection = await mongoose.createConnection(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    req.connection = connection
    req.response11 = {msg: "DB connected"}
    next()
  } catch (err) {
    return res.status(500).json({error: err.message || "Something went wrong"})
  }
}

export default async (req, res) => {
  const {method} = req

  if (method === "POST") {
    await runMiddleware(req, res, middleware1)
    const output = req.response11 ? req.response11 : "Default output"
    res.status(200).send(output)
    // await authenticateUser(req, res)
  } else {
    res.status(405).json({msg: "invalid request"})
  }
}

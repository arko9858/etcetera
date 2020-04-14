// import connectDB from "../../../backend/middlewares/connectDB"
// import authenticateUser from "../../../backend/services/user/authenticate"
import mongoose from "mongoose"

// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

export default async (req, res) => {
  const {method} = req

  if (method === "POST") {
    const mongoURI =
      "mongodb+srv://arko9858:Do3VytqKneGup4Kp@cluster0-b2jmx.mongodb.net/etc-db1?retryWrites=true&w=majority"
    const connection = await mongoose.createConnection(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    req.connection = connection
    const output = {msg: "DB connected"}
    res.status(200).send(output)
    // await authenticateUser(req, res)
  } else {
    res.status(405).json({msg: "invalid request"})
  }
}

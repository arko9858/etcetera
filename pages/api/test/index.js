// import connectDB from "../../../backend/middlewares/connectDB"
// import authenticateUser from "../../../backend/services/user/authenticate"

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

const middleware1 = (req,res,next)=>{
  req.response11 = "This is response11"
  next()
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

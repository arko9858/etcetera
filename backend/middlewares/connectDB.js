import mongoose from "mongoose"

export default async (req, res, next) => {
  try {
    const connection = await mongoose.createConnection(process.env.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    req.connection = connection
    next()
  } catch (err) {
    return res.status(500).json({error: err.message || "Something went wrong"})
  }
}

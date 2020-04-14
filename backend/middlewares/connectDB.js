import mongoose from "mongoose"

export default async (req, res, next) => {
  try {
    const connection = await mongoose.createConnection(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    req.connection = connection
    return res.status(200).json({msg:"DB connected"})

    next()
  } catch (err) {
    return res.status(500).json({error: err.message || "Something went wrong"})
  }
}

import jwt from "jsonwebtoken"

export default async (req, res, next) => {
  try {
    //Get the token from header
    const token = req.headers['x-auth-token']

    //check if no token
    if (!token) {
    //   return res.status(401).send("access denied")
      return res.status(401).send("no token")
    }

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
        return res.status(401).send("access denied")
    }
    req.user = decoded.user
    next()
  } catch (err) {
    return res.status(500).json({error: err.message || "Something went wrong"})
  }
}
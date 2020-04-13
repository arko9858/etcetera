import UserSchema from "../../models/User"
import bcrypt from "bcryptjs"
const jwt = require("jsonwebtoken")

export default async (req, res) => {
  try {
    const {username, password} = req.body

    const User = req.connection.model("user", UserSchema)
    const user1 = await User.findOne({username})
    req.connection.close() //db work is done

    if (!user1) {
      return res.status(400).send("Credentials did not match")
    }
    //user found now check for password
    const passMatched = await bcrypt.compare(password, user1.password)
    if (!passMatched) {
      return res.status(400).send("Credentials did not match")
    }

    //username and password matched now wot
    const payload = {
      user: {
        displayName: user1.displayName,
      },
    }
    const expiresInSec = 3600 // 1 hour
    const expiredAt = Date.now() + expiresInSec * 1000
    const token = jwt.sign(payload, process.env.jwtSecret, {
      expiresIn: expiresInSec,
    })
    res.status(200).json({token, expiredAt,displayName:user1.displayName})
  } catch (err) {
    if (req.connection) {
      req.connection.close()
    }
    res.status(500).send(err.message || "Something went wrong")
  }
}

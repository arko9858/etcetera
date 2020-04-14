export default (req, res) => {
  const {method} = req

  const envVars = process.env ? process.env : "vars not found"
  const secret = process.env.jwtSecret
    ? process.env.jwtSecret
    : "secret not found"

  if (method === "GET") {
    res.status(200).send("It's working")
  } else {
    res.json({allEnvVars: envVars, secret})
  }
}

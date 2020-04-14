import {MongoClient} from "mongodb"
import nextConnect from "next-connect"

const mongoURI =
  "mongodb+srv://arko9858:Do3VytqKneGup4Kp@cluster0-b2jmx.mongodb.net/etc-db1?retryWrites=true&w=majority"

const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect()
  req.dbClient = client
  req.db = client.db("etc-db1")
  return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware

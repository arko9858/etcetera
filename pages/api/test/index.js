import {MongoClient} from "mongodb"

export default async (req, res) => {
  try {
    switch (req.method) {
      case "GET":
        const mongoURI =
          "mongodb+srv://arko9858:Do3VytqKneGup4Kp@cluster0-b2jmx.mongodb.net/etc-db1?retryWrites=true&w=majority"
        const client = new MongoClient(mongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        if (!client.isConnected()) await client.connect()
        const db = client.db("etc-db1")
        let doc = await db.collection("users").findOne()
        return res.status(200).json(doc)

      default:
        return res.status(405).json({msg: "invalid request"})
    }
  } catch (err) {
    console.log(err)
    return res.status(500).send("Server error")
  }
}

// import mongoDb from '../../../backend/middlewares/mongoDB'
// import nextConnect from 'next-connect'

// const handler = nextConnect()

// handler.use(mongoDb)

// handler.get(async (req, res) => {

//   let doc = await req.db.collection('users').findOne()
//   console.log(doc);
//   res.status(200).json(doc);
// });

// handler.post(async (req,res)=>{
//   res.json({msg:"this is a post req"})
// })

// export default handler;

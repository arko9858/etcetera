import mongoDb from '../../../backend/middlewares/mongoDB'
import nextConnect from 'next-connect'

const handler = nextConnect()

handler.use(mongoDb)


handler.get(async (req, res) => {

  let doc = await req.db.collection('users').findOne()
  console.log(doc);
  res.json(doc);
});

handler.post(async (req,res)=>{
  res.json({msg:"this is a post req"})
})

export default handler;
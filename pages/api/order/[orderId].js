import runMiddleware from "../../../backend/middlewares/runMiddleware"
import connectDB from "../../../backend/middlewares/connectDB"
import readOrderById from "../../../backend/services/orders/readOrderById"
import authMiddleware from "../../../backend/middlewares/auth"
import updateOrderStatus from '../../../backend/services/orders/updateOrderStatus'

export default async (req, res) => {
  const {method} = req

  if (method === "GET") {
    //read orderById
    await runMiddleware(req, res, connectDB)
    await runMiddleware(req, res, authMiddleware)
    await readOrderById(req, res)
  } 
  
  else if (method==="PUT"){
    await runMiddleware(req, res, connectDB)
    await runMiddleware(req, res, authMiddleware)
    await updateOrderStatus(req,res)
  }
  else {
    res.status(405).json({msg: "invalid request"})
  }
}

import runMiddleware from "../../../backend/middlewares/runMiddleware"
import connectDB from "../../../backend/middlewares/connectDB"
import createNewOrder from "../../../backend/services/orders/createNewOrder"
import readAllOrderSummary from "../../../backend/services/orders/readAllOrderSummary"
import authMiddleware from "../../../backend/middlewares/auth"

export default async (req, res) => {
  const {method} = req

  if (method === "POST") {
    //create new order
    await runMiddleware(req, res, connectDB)
    await createNewOrder(req, res)
  } else if (method === "GET") {
    await runMiddleware(req, res, connectDB)
    await runMiddleware(req, res, authMiddleware)
    await readAllOrderSummary(req, res)
  } else {
    res.status(405).json({msg: "invalid request"})
  }
}

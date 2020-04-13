import OrderSchema from "../../models/Order"
import mongoose from 'mongoose'
export default async (req, res) => {
  try {
    const {
      query: {orderId},
    } = req
    //order model
    const orderIdValid = mongoose.Types.ObjectId.isValid(orderId)
    if(!orderIdValid){
        req.connection.close() //db work is done
        return res.status(400).send('order id invalid')
    }
    const Order = req.connection.model("order", OrderSchema)
    const orderInfo = await Order.findById(orderId)
    req.connection.close() //db work is done
    
    if (!orderInfo) {
        return res.status(404).send('Not found')
    }

    res.status(200).send(orderInfo)
  } catch (err) {
    if (req.connection) {
      req.connection.close()
    }
    res.status(500).json({error: err.message || "Something went wrong"})
  }
}

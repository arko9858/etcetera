import OrderSchema from "../../models/Order"
import mongoose from 'mongoose'

export default async (req, res) => {
  try {
    const {
      query: {orderId},
      body: {newStatus}
    } = req
    //order model
    const orderIdValid = mongoose.Types.ObjectId.isValid(orderId)
    if(!orderIdValid){
        req.connection.close() //db work is done
        return res.status(400).send('order id invalid')
    }
    const Order = req.connection.model("order", OrderSchema)
    const orderInfo = await Order.findById(orderId)
    if (!orderInfo) {
        req.connection.close() //db work is done
        return res.status(404).send('Not found')
    }
    orderInfo.status = newStatus
    await orderInfo.save()
    req.connection.close() //db work is done
    res.status(200).send(orderInfo)
  } catch (err) {
    if (req.connection) {
      req.connection.close()
    }
    res.status(500).json({error: err.message || "Something went wrong"})
  }
}

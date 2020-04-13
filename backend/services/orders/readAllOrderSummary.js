import OrderSchema from "../../models/Order"

export default async (req, res) => {
  try {

    //order model
    const Order = req.connection.model("order", OrderSchema)
    const allOrderSummary = await Order.find({},'orderDate status totalPrice totalQuantity').sort({orderDate:-1})
    req.connection.close() //db work is done
    res.status(200).send(allOrderSummary)
  } catch (err) {
    if (req.connection) {
      req.connection.close()
    }
    res.status(500).json({error: err.message || "Something went wrong"})
  }
}

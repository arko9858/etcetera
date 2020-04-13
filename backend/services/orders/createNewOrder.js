import OrderSchema from "../../models/Order"

export default async (req, res) => {
  try {
    const {
      productsInfo,
      totalPrice,
      totalQuantity,
      customerName,
      customerMobile,
      customerAlternateMobile,
      customerDeliveryAddress,
    } = req.body

    //validation
    if (
      !customerName ||
      !customerMobile ||
      !customerDeliveryAddress ||
      !totalPrice ||
      !totalQuantity ||
      !productsInfo
    ) {
      //invalid request
      return res.status(400).send("Invalid order request")
    }

    //order model
    const Order = req.connection.model("order", OrderSchema)

    const newOrder = new Order({
      productsInfo,
      totalPrice,
      totalQuantity,
      customerName,
      customerMobile,
      customerAlternateMobile,
      customerDeliveryAddress,
    })
    await newOrder.save()
    req.connection.close() //db work is done
    res.status(200).send("Order placed successfully")
  } catch (err) {
    if (req.connection) {
      req.connection.close()
    }
    res.status(500).json({error: err.message || "Something went wrong"})
  }
}

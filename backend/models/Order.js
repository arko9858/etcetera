import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  productsInfo: [
    {
      key: {
        type: String,
      },
      productId: {
        type: String,
      },
      productName: {
        type: String,
      },
      productSize: {
        type: String,
      },
      quantity: {
        type: Number,
      },
      rate: {
        type: Number,
      },
      price: {
        type: Number,
      },
    },
  ],
  status: {
    type: String,
    default: "New",
  },
  customerName: {
    type: String,
    required: true,
  },
  customerMobile: {
    type: String,
    required: true,
  },
  customerAlternateMobile: {
    type: String,
  },
  customerDeliveryAddress: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  totalQuantity: {
    type: Number,
    default: 0,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = OrderSchema

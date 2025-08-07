import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);

/*
{
  "_id": "64f8932b234e3a0012345678",
  "orderPrice": 150.00,
  "customer": {
    "_id": "64f8901a234e3a0012341234",
    "name": "Alice Johnson",
    "email": "alice@example.com"
  },
  "orderItems": [
    {
      "productId": {
        "_id": "64f88ffc234e3a0012341111",
        "name": "Wireless Headphones",
        "price": 100.00
      },
      "quantity": 1
    },
    {
      "productId": {
        "_id": "64f890ab234e3a0012342222",
        "name": "Bluetooth Mouse",
        "price": 25.00
      },
      "quantity": 2
    }
  ],
  "address": "123 Main Street, Springfield, USA",
  "status": "PENDING",
  "createdAt": "2025-08-07T12:34:56.789Z",
  "updatedAt": "2025-08-07T12:34:56.789Z",
  "__v": 0
}

*/

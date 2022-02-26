const mongoose = require('mongoose');
const { Schema } = mongoose;

const checkoutSchema = new Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Order',
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Product',
    },
    product_quantity: {
      type: Number,
      require: true,
    },
    product_payment: {
      type: Number,
      require: true,
    },
    createdAt: {
      type: Date,
      require: true,
    },
    updateAt: {
      type: Date,
      require: true,
    },
    deleteAt: {
      type: Date,
      require: true,
    },
  },
  { versionKey: false },
);
const Checkout = mongoose.model('Checkout', checkoutSchema);
module.exports = Checkout;

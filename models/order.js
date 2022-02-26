const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
    order_time: {
      type: Date,
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
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

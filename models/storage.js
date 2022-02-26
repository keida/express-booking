const mongoose = require('mongoose');
const { Schema } = mongoose;

const storageSchema = new Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Product',
    },
    storage_quantity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false },
);
const Storage = mongoose.model('Storage', storageSchema);
module.exports = Storage;

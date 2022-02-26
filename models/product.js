const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Category',
    },
    product_name: {
      type: String,
      require: true,
    },
    product_price: {
      type: Number,
      require: true,
    },
    product_description: {
      type: String,
      require: true,
    },
    product_avatar: {
      type: String,
      require: true,
    },
  },
  { versionKey: false },
);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;

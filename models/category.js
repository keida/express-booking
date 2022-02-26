const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    require: true,
    unique: true,
  },
},{ versionKey: false });
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;

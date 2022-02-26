const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    emailAddress: {
      type: String,
      require: true,
    },
    userRole: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Role',
    },
    status: {
      type: String,
      require: true,
      enum: ['close', 'open', 'Pending'],
      default: 'close',
    },
    createdAt: {
      type: Date,
      require: true,
    },
    updatedAt: {
      type: Date,
      require: true,
    },
  },
  { versionKey: false },
);
const User = mongoose.model('User', userSchema);
module.exports = User;

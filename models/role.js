const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    roleName: {
      type: String,
      require: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      require: true,
    },
    expireAt: {
      type: Date,
      require: true,
    },
  },
  { versionKey: false },
);
const Role = mongoose.model('Role', roleSchema);
module.exports = Role;

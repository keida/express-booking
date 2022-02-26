const orderModel = require('../models/order');

exports.getAllOrders = async (req, res) => {
  const orders = await orderModel.find({});
  try {
    console.log('Get All order');
    res.send(orders);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createOrders = async (req, res) => {
  const orders = new orderModel({ ...req.body });
  console.log(req.body);
  try {
    await orders.save();
    res.send(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

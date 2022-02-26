const orderModel = require('../models/order');

exports.getAllOrders = async (req, res) => {
  try {
    console.log('Get All order');
    const orders = await orderModel.find({});
    res.send(orders);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const orders = await orderModel.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: { orders },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getOrder = async (req, res) => {
  console.log(req.body);
  try {
    const orders = await orderModel.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: { orders },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.updateOrder = async (req, res) => {
  try {
    const orders = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Success',
      data: { orders },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    console.log(req.params.id);
    await checkoutModel.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: 'Success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

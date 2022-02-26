const checkoutModel = require('../models/checkout');

exports.getAllCheckouts = async (req, res) => {
  try {
    console.log('Get All checkouts');
    const checkouts = await checkoutModel.find({});
    res.send(checkouts);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createCheckout = async (req, res) => {
  try {
    const checkouts = await checkoutModel.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: { checkouts },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getCheckout = async (req, res) => {
  console.log(req.body);
  try {
    const checkouts = await checkoutModel.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: { checkouts },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.updateCheckout = async (req, res) => {
  try {
    const checkouts = await checkoutModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Success',
      data: { checkouts },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteCheckout = async (req, res) => {
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

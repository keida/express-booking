const checkoutModel = require('../models/checkout');

exports.getAllCheckouts = async (req, res) => {
  const checkouts = await checkoutModel.find({});
  try {
    console.log('Get All checkout');
    res.send(checkouts);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createCheckouts = async (req, res) => {
  const checkouts = new checkoutModel({ ...req.body });
  console.log(req.body);
  try {
    await checkouts.save();
    res.send(checkouts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

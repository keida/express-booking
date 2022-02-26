const productModel = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    console.log('Get All order');
    const products = await productModel.find({});
    res.send(products);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const products = await orderModel.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: { products },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getProduct = async (req, res) => {
  console.log(req.body);
  try {
    const products = await orderModel.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: { products },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const products = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Success',
      data: { products },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteProduct = async (req, res) => {
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

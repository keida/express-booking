const productModel = require('../models/product');

exports.getAllProducts = async (req, res) => {
  const products = await productModel.find({});
  try {
    console.log('Get All products');
    res.send(products);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createProducts = async (req, res) => {
  const products = new productModel({ ...req.body });
  console.log(req.body);
  try {
    await products.save();
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

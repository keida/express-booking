const categoryModel = require('../models/category');

exports.getAllCategories = async (req, res) => {
  try {
    console.log('Get All categories');
    const categories = await categoryModel.find({});
    res.send(categories);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createCategories = async (req, res) => {
  try {
    const categories = await categoryModel.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: { categories },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getCategory = async (req, res) => {
  console.log(req.body);
  try {
    const category = await categoryModel.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: { category },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.updateCategory = async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Success',
      data: { category },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    console.log(req.params.id);
    await categoryModel.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: 'Success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

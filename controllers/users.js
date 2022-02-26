const userModel = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    console.log('Get All Users');
    const users = await userModel.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const users = await userModel.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: { users },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getUser = async (req, res) => {
  console.log(req.body);
  try {
    const users = await userModel.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: { users },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.updateUser = async (req, res) => {
  try {
    const users = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Success',
      data: { users },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    console.log(req.params.id);
    await userModel.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: 'Success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

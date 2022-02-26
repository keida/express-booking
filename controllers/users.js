const userModel = require('../models/user');

exports.getAllUsers = async (req, res) => {
  const users = await userModel.find({});
  try {
    console.log('Get All users');
    res.send(users);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createUsers = async (req, res) => {
  const users = new userModel({ ...req.body });
  console.log(req.body);
  try {
    await users.save();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

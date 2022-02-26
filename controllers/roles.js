const roleModel = require('../models/role');

exports.getAllRoles = async (req, res) => {
  const roles = await roleModel.find({});
  try {
    console.log('Get All roles');
    res.send(roles);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createRoles = async (req, res) => {
  const roles = new roleModel({ ...req.body });
  console.log(req.body);
  try {
    await roles.save();
    res.send(roles);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

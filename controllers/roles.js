const roleModel = require('../models/role');

exports.getAllRoles = async (req, res) => {
  try {
    console.log('Get All order');
    const roles = await roleModel.find({});
    res.send(roles);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createRole = async (req, res) => {
  try {
    const roles = await roleModel.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: { roles },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getRole = async (req, res) => {
  console.log(req.body);
  try {
    const roles = await roleModel.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: { roles },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.updateRole = async (req, res) => {
  try {
    const roles = await roleModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'Success',
      data: { roles },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteRole = async (req, res) => {
  try {
    console.log(req.params.id);
    await roleModel.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: 'Success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

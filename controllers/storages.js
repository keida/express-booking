const storageModel = require('../models/storage');

exports.getAllStorages = async (req, res) => {
  try {
    console.log('Get All Storages');
    const storages = await storageModel.find({});
    res.send(storages);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createStorage = async (req, res) => {
  try {
    const storages = await storageModel.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: { storages },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.getStorage = async (req, res) => {
  console.log(req.body);
  try {
    const storages = await storageModel.findById(req.params.id);
    res.status(200).json({
      status: 'Success',
      data: { storages },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
exports.updateStorage = async (req, res) => {
  try {
    const storages = await storageModel.findByIdAndUpdate(req.params.id, req.body, {
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
    await storageModel.findByIdAndDelete(req.params.id);
    res.status(202).json({
      status: 'Success',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

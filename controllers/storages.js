const storageModel = require('../models/storage');

exports.getAllStorages = async (req, res) => {
  const storages = await storageModel.find({});
  try {
    console.log('Get All storages');
    res.send(storages);
  } catch (err) {
    res.status(500).send(error);
  }
};

exports.createStorages = async (req, res) => {
  const storages = new storageModel({ ...req.body });
  console.log(req.body);
  try {
    await storages.save();
    res.send(storages);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

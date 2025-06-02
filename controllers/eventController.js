const Api = require("../models/api");

exports.create = async (req, res) => {
  const { title, date, time, location, body } = req.body;
  try {
    const newEvent = await Api.create(title, date, time, location, body);
    res.status(201).json({
      sucess: true,
      event: {
        newEvent,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEvent = await Api.delete(id);
    res.status(201).json({ sucess: true, deletedEvent: {id} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

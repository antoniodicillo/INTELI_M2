const Api = require("../models/api");

exports.create = async (req, res) => {
  const { title, date, time, location,  body } = req.body
  await Api.create(title, date, time, location,  body);
  res.redirect("/home");
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await Api.delete(id);
  res.redirect("/home");
};

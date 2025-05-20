const Events = require("../models/events");

exports.create = async (req, res) => {
  const { title, date, body } = req.body
  await Events.create(title, date, body);
  res.redirect("/home");
};

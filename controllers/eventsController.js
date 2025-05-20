const Events = require("../models/events");

exports.create = async (req, res) => {
  const { title, date, time, location,  body } = req.body
  await Events.create(title, date, time, location,  body);
  res.redirect("/home");
};

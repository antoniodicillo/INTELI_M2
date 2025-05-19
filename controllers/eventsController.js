const Events = require("../models/events");

exports.create = async (req, res) => {
  console.log(req.body);
  await Events.create(req.body);
  res.redirect("/home");
};

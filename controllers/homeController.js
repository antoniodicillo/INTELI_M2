const Events = require("../models/events");

// Controlador da rota /
exports.index = async (req, res) => {
  const events = await Events.findAll();

  res.render("pages/home", {
    titulo: "Página Inicial",
    events,
  });
};

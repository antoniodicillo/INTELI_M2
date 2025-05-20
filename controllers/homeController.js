const Events = require("../models/events");

// Controlador da rota /
exports.index = async (req, res) => {
  const events = await Events.findAll();
  events.forEach((event) => {
    event.formattedDate = new Date(event.eventdate).toLocaleDateString(
      "pt-BR"
    );
  });


  res.render("pages/home", {
    titulo: "Página Inicial",
    events,
  });
};

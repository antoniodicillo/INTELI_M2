const Events = require("../models/events");

// Controlador da rota /
exports.index = async (req, res) => {
  const { id } = req.params;

  const theEvent = await Events.findById(id);
  theEvent.formattedDate = new Date(theEvent.eventdate).toLocaleDateString(
    "pt-BR"
  );

  res.render("pages/event", {
    titulo: "Página de um Evento",
    theEvent,
  });
};

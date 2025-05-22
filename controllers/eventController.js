const Api = require("../models/api");

// Controlador da rota /
exports.index = async (req, res) => {
  const { id } = req.params;

  const theEvent = await Api.findById(id);
  theEvent.formattedDate = new Date(theEvent.eventdate).toLocaleDateString(
    "pt-BR"
  );
  if (theEvent.event_time) {
    theEvent.event_time = theEvent.event_time.slice(0, -3);
  } 

  res.render("pages/event", {
    titulo: "Página de um Evento",
    theEvent,
  });
};

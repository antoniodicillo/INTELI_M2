const Api = require("../models/api");

// Controlador da rota /
exports.index = async (req, res) => {
  const events = await Api.findEvents(3);
  events.forEach((event) => {
    event.formattedDate = new Date(event.eventdate).toLocaleDateString(
      "pt-BR"
    );
  });
  
  res.render("pages/account/events", {
    titulo: "Eventos do Usuário",
    aba: "events",
    events,
  });
};

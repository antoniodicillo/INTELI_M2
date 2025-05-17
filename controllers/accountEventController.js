// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/account/events', {
    titulo: 'Eventos do Usuário',
    aba: "events"
  });
};
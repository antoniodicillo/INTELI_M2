// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/event', {
    titulo: 'Página de um Evento',
    mensagem: 'Página do evento'
  });
};
// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/login', {
    titulo: 'Página Inicial'
  });
};
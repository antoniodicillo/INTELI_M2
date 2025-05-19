// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/signup', {
    titulo: 'Página Inicial'
  });
};
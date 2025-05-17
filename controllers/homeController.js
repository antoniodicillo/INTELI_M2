// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/home', {
    titulo: 'Página Inicial'
  });
};
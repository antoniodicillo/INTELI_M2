// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/account/create-event', {
    titulo: 'Conta do Usuário',
    aba: "account"
  });
};
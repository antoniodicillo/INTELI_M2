// Controlador da rota /
exports.index = (req, res) => {
  res.render('pages/account', {
    titulo: 'Conta do Usuário',
    aba: "account"
  });
};
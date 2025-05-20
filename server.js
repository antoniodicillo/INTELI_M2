const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const homeRoutes = require('./routes/home');
const accountRoutes = require('./routes/account');
const eventRoutes = require('./routes/event');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const eventsApiRoutes = require('./routes/events');

// Middleware para processar JSON
app.use(express.json());

// Configura o mecanismo de views para EJS
app.set("view engine", "ejs");

// Define onde ficam as views
app.set("views", path.join(__dirname, "views"));

// Faz com que o Express entenda o conteúdo do formulário
app.use(bodyParser.urlencoded({ extended: true }));
// Define a pasta pública com CSS e outros arquivos estáticos
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "styles")));

app.get("/", (req, res) => {
  res.redirect('/home');
});

// Define as rotas
app.use('/home', homeRoutes);
app.use('/account', accountRoutes);
app.use('/event', eventRoutes);
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/events', eventsApiRoutes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  require('child_process').exec(`start http://localhost:${PORT}`); // Abre o navegador automaticamente
});



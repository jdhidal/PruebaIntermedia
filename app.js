
const express = require('express');
const path = require('path');
const app = express();

// Configurar EJS como el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.render('index');
});

// Rutas endpoint para el get de la 
app.get('/cocteles', (req, res) => {
  res.render('CoctelesApi');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SERVER UP running on port ${PORT}`);
});


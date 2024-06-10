const path = require('path');
const express = require('express');
const engine = require('express-handlebars').engine;

const app = express();

const urlRouter = require('./routes');
const port = process.env.PORT || 3000;

app.engine('.hbs', engine({
  layoutsDir: __dirname + '/views/layouts',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(urlRouter);
app.use(express.static(path.join(__dirname, "/public")));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* Conexión de los html */

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/Productos', (req, res) => {
  res.sendFile(path.join(__dirname, './views/Productos.html'))
})

app.get('/ProductoDetallado', (req, res) => {
  res.sendFile(path.join(__dirname, './views/ProductoDetalle.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './views/Login.html'))
})

app.get('/registro', (req, res) => {
  res.sendFile(path.join(__dirname, './views/registro.html'))
})

app.get('/Carrito', (req, res) => {
  res.sendFile(path.join(__dirname, './views/Carrito.html'))
})
app.get('/pruebas', (req, res) => {
  res.sendFile(path.join(__dirname, './views/Header.html'))
})


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Enrutadores */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let adminProductosRouter = require('./routes/adminProductos');  // Fabio
let productoRouter = require('./routes/producto');   
let usRouter = require('./routes/us');              // Fabio

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

app.get('/Carrito', (req, res) => {
  res.sendFile(path.join(__dirname, './views/Carrito.html'))
})

app.get('/DatosDePago', (req, res) => {
  res.sendFile(path.join(__dirname, './views/DatosDePago.html'))
})

app.get('/cargaProductos', (req, res) => {
  res.sendFile(path.join(__dirname, './views/cargaProductos.html'))
})


/* Rutas */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/adminProductos', adminProductosRouter);  // Fabio
app.use('/productos', productoRouter);   
app.use('/us', usRouter)           // Fabio


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

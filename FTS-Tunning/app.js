var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/* Enrutadores */
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var register = require ('./routes/register');

let adminProductosRouter = require('./routes/adminProductos');  // Fabio
let productoRouter = require('./routes/producto');              // Fabio

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", register)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Conexión de los html */
app.get('/Quienes-Somos', (req, res) => {
  res.sendFile(path.join(__dirname, './views/quienesSomos.html'))
})

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

app.get('/Registro', (req, res) => {
  res.sendFile(path.join(__dirname, './views/Registro.html'))
})

app.get('/Carrito', (req, res) => {
  res.sendFile(path.join(__dirname, './views/Carrito.html'))
})


app.get('/DatosDePago', (req, res) => {
  res.sendFile(path.join(__dirname, './views/DatosDePago.html'))
})


app.get('/historial', (req, res) => {
  res.sendFile(path.join(__dirname, './views/historialCompras.html'))
})
app.get('/usuarios', (req, res) => {
  res.sendFile(path.join(__dirname, './views/listaUsuarios.html'))
  
})

app.get('/Contactanos', (req, res) => {
  res.sendFile(path.join(__dirname, './views/contactanos.html'))
})
app.get('/cargaProductos', (req, res) => {
  res.sendFile(path.join(__dirname, './views/cargaProductos.html'))
})

/* Rutas */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/adminProductos', adminProductosRouter);  // Fabio
app.use('/producto', productoRouter);              // Fabio

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

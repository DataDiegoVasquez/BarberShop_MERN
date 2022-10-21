var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'BarberShop' });
  res.send("Prueba Barber sin vista")
});

module.exports = router;

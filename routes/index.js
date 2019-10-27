var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tecnologías de Internet de Nueva Generación del 2019' });
});

module.exports = router;

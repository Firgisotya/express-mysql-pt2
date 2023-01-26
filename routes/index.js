var express = require('express');
const { getAllProducts, store, update, destroy } = require('../controller/ProductController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//PRODUCT ROUTES
router.get('/product', getAllProducts)
router.post('/product', store)
router.put('/product/:id', update)
router.delete('/product/:id', destroy)

module.exports = router;

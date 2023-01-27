var express = require('express');
const { getAllBrand, storeBrand, updateBrand, destroyBrand,  } = require('../controller/BrandController');
const { getAllProducts, storeProduct, updateProduct, destroyProduct,  } = require('../controller/ProductController');
const { getAllCategory, storeCategory, updateCategory, destroyCategory,  } = require('../controller/CategoryController');
const { getAllTransaksi, storeTransaksi, updateTransaksi, destroyTransaksi,  } = require('../controller/TransaksiController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//PRODUCT ROUTES
router.get('/product', getAllProducts)
router.post('/product', storeProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', destroyProduct)

//BRAND ROUTES
router.get('/brand', getAllBrand)
router.post('/brand',storeBrand)
router.put('/brand/:id', updateBrand)
router.delete('/brand/:id', destroyBrand)

//CATEGORY ROUTES
router.get('/category', getAllCategory)
router.post('/category',storeCategory)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', destroyCategory)

//TRANSAKSI ROUTES
router.get('/transaksi', getAllTransaksi)
router.post('/transaksi',storeTransaksi)
router.put('/transaksi/:id', updateTransaksi)
router.delete('/transaksi/:id', destroyTransaksi)


module.exports = router;

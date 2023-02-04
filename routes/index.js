var express = require('express');
const { getAllBrand, storeBrand, updateBrand, destroyBrand, getBrandById,  } = require('../controller/BrandController');
const { getAllProducts, storeProduct, updateProduct, destroyProduct, countBrand, countCategory, filterBrand, getProductById,  } = require('../controller/ProductController');
const { getAllCategory, storeCategory, updateCategory, destroyCategory, getCategoryById } = require('../controller/CategoryController');
const { getAllTransaksi, storeTransaksi, updateTransaksi, destroyTransaksi, getQty, filterByMonth, getTransaksiById } = require('../controller/TransaksiController');
const { getAllUsers, getUserById, storeUser, updateUser, destroyUser } = require('../controller/UserController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//USER ROUTES
router.get('/user', getAllUsers)
router.get('/user/:id', getUserById)
router.post('/user', storeUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', destroyUser)

//PRODUCT ROUTES
router.get('/product', getAllProducts)
router.get('product/:id', getProductById)
router.post('/product', storeProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', destroyProduct)
router.get('/brand/count', countBrand)
router.get('/category/count', countCategory)
router.post('/product/brandFilter', filterBrand)

//BRAND ROUTES
router.get('/brand', getAllBrand)
router.get('/brand/:id', getBrandById)
router.post('/brand',storeBrand)
router.put('/brand/:id', updateBrand)
router.delete('/brand/:id', destroyBrand)

//CATEGORY ROUTES
router.get('/category', getAllCategory)
router.get('/category/:id', getCategoryById)
router.post('/category',storeCategory)
router.put('/category/:id', updateCategory)
router.delete('/category/:id', destroyCategory)

//TRANSAKSI ROUTES
router.get('/transaksi', getAllTransaksi)
router.get('/transaksi/:id', getTransaksiById)
router.post('/transaksi',storeTransaksi)
router.put('/transaksi/:id', updateTransaksi)
router.delete('/transaksi/:id', destroyTransaksi)
router.get('/transaksi/qty', getQty)
router.post('/transaksi/filterMonth', filterByMonth)


module.exports = router;

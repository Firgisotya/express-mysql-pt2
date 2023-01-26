var express = require('express');
const { getUser } = require('../controller/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', getUser);

module.exports = router;

const path = require('path');

const express = require('express');

const getAdminCotroller = require('../controller/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getAdminCotroller.getAddProduct);

router.get('/product', getAdminCotroller.getProduct)

// /admin/add-product => POST
router.post('/add-product', getAdminCotroller.postAddProduct);

module.exports = router
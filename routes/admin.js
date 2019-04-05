const path = require('path');

const express = require('express');

const getProductController = require('../controller/product');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getProductController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',getProductController.postAddProduct);

module.exports = router
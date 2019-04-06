const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop')

router.get('/', shopController.getIndex);
router.get('/product-list', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);

module.exports = router;

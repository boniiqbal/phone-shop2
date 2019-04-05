const path = require('path');

const express = require('express');

const router = express.Router();

const showProductController = require('../controller/product')

router.get('/', showProductController.getProduct);

module.exports = router;

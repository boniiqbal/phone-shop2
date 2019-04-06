const Product = require('../model/product.js')

 exports.getProduct = (req, res, next) => {
   Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Product',
      path: '/product-list'
    });
   }); 
 };

 exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/index'
    });
   }); 
 };

 exports.getCart = (req, res, next) => {
   res.render('shop/cart', {
     path: '/cart',
     pageTitle: 'Your Cart'
   });
 };

 exports.getCheckout = (rea,res, next) => {
   res.rendeer('shop/checkout', {
     path: '/checkout',
     pageTitle: 'Checkout'
   })
 }
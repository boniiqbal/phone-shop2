const Product = require('../model/product')

exports.getAddProduct = (req, res, next) => {
   res.render('admin/add-product', {
     pageTitle: 'Add Product',
     path: '/admin/add-product',
     formsCSS: true,
     productCSS: true,
     activeAddProduct: true
   })
 }

 exports.postAddProduct =  (req, res, next) => {
   const product = new Product(req.body.title);
   product.save();
   res.redirect('/');
 }

 exports.getProduct = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/product-list', {
      prods: products,
      pageTitle: 'Product',
      path: '/admin/product'
    });
   }); 
 }
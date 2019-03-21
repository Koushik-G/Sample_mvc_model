const Product = require('../models/product');

module.exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'AddProduct',
    path: '/admin/add-product',
    activeAddProduct: true,
    formCSS: true,
    productCSS: true
  });
};

module.exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

module.exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};


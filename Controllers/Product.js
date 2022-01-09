const Product = require('../Model/Product');

const getProducts = (req, res) => {
  res.send("I am the get products rout");
}

const createProduct = (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    media: req.body.media,
    active: req.body.active,
  });

  product.save((err, product) => {
    console.log(product)
    if (err) {
      res.send(err)
    }
    res.json(product)
  })
}

module.exports = {
  getProducts,
  createProduct,
}
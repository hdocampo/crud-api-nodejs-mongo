const Product = require('../Model/Product');

const getProducts = (req, res) => {
  try {
    Product.find((err, products) => {
      if (err) {
        res.send(err);
      }
      res.json(products);
    });
  } catch (err) {
    console.log(err);
  }
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

const updateProduct = (req, res) => {
  Product.findByIdAndUpdate({
    _id: req.params.productId
  }, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      media: req.body.media,
      active: req.body.active,
    },
  },
    { new: true },
    (err, Product) => {
      if (err) {
        res.send(err);
      } else res.json(Product);
    })
}

const deleteProduct = (req, res) => {
  Product.findByIdAndDelete({
    _id: req.params.productId
  })
    .then(response => res.json({ "message": `Product ${response._id} deleted` }))
    .catch(err => res.json(err))
}

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
}
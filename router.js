const router = require("express").Router();
const { getProducts, createProduct } = require("./Controllers/Product")

router.get("/api", (req, res)=> {
  res.send("Let's build some fucking API")
})

router.get("/api/products", getProducts)

router.post("/api/products", createProduct)

module.exports = router;
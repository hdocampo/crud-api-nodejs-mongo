const router = require("express").Router();
const { 
  getProducts, 
  createProduct, 
  updateProduct,
  deleteProduct 
} = require("./Controllers/Product")

router.get("/api", (req, res)=> {
  res.send("Let's build some fucking API")
})

router.get("/api/products", getProducts);

router.post("/api/products", createProduct);

router.put("/api/products/:productId", updateProduct);

router.delete("/api/products/:productId", deleteProduct);

module.exports = router;
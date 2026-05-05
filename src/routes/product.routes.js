const { getAll, getProductById } = require("../constrollers/product.controller");
const express = require("express");
const router = express.Router();
router.get("/products", getAll);
// get products by id
router.get("/products/:id", getProductById);

module.exports = router;

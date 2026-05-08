const { getAll, getProductById, createProduct } = require("../constrollers/product.controller");
const express = require("express");
const router = express.Router();
router.get("/", getAll);
// get products by id
router.get("/:id", getProductById);
router.post("/", createProduct);
module.exports = router;

const { getAll, getProductById } = require("../constrollers/product.controller");
const express = require("express");
const router = express.Router();
router.get("/", getAll);
// get products by id
router.get("/:id", getProductById);

module.exports = router;

const { 
  getUsers,
  getById,
  create,
  update, 
  remove, 
} = require("../constrollers/user.controller");


const express = require("express");

const router = express.Router();

// get /users
// read

router.get("/", getUsers);

//? get by id
// /users/1 
router.get("/john", getById);
router.get("/:id", getById);

//! create
router.post("/", create);

//! update
router.put("/:id", update);

//! delete
router.delete("/:id", remove);

module.exports = router;
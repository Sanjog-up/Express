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
router.get("/users", getUsers);

//? get by id
// /users/1 
router.get("/users/:id", getById);

//! create
router.post("/users", create);

//! update
router.put("/users/:id", update);

//! delete
router.delete("/users/:id", remove);

module.exports = router;
const { 
  getUsers,
  getById,
  create,
  update, 
  remove, 
} = require("../constrollers/user.controller");


const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("user route level");
  next();
})

const mid = (req, res, next) => {
  console.log("get all users");
  next();
};
const mid1 = (req, res, next ) => {
  console.log("get all users second");
  next();
}



// get /users
// read

router.get("/", mid, mid1, getUsers);

//? get by id
// /users/1 
// router.get("/john", getById);
router.get("/:id",(req, res, next)  => {
  console.log("mid");
next();
},getById);

//! create
router.post("/", create);

//! update
router.put("/:id", update);

//! delete
router.delete("/:id", remove);

module.exports = router;
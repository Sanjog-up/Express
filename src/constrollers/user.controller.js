const User = require("../models/user.model");
const users = [];


exports.getUsers = async (req, res) => {
  try {
  // database get all query
  const users = await USER.find({});
  // 
  res.status(200).json({
    message: "All users fetched",
    data: users,
  });
} catch (error) {
  res.status(500).json({
    message: "something went wrong",
    data: null,
  })
}
};




exports.getById = (req, res) => {
  // const id = req.params.id;
  const { id } = req.params;
  const user = users.find((user) => user._id.toString() === id.toString());
  console.log(id);
  console.log(user);
  if(!user) {
  res.status(404).json({
    message: "user not found",
    data: null,
  });
  return;
}
// db query
res.status(200).json({
  message: "user fetched",
  data: user,
});
};

 exports.create = async (req, res) => {
  try{
    const {name, email, password, phone} = req.body;
  // req.body => {name: '', email: ''}
  // db op.
  const user = await USER.create({
    name, 
    email,
    password,
    phone,
  });
  res.status(201).json({
    message: "user created",
    data: user,
  });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "something wrong",
      data: null,
    });
  }
 };


exports.update = (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  // req.body => {name: '', email: ''}
  // db op.
  res.status(200).json({
    message: "user updated",
  });
};

exports.remove = (req, res) => {
  const {id } = req.params;

  const index = users.findIndex(
    (user) => user._id.toString() === id.toString(),

  )
  if (index === -1) {
    res.status(404).json({
      message: "user not found",
      data: null,
    });
    return;
  }
  users.splice(index, 1);
  res.status(200).json({
    message: "user deleted",
  });
};
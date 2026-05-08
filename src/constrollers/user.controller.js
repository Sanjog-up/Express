const User = require("../models/user.model");
const users = [];


exports.getUsers = async (req, res) => {
  try {
  // database get all query
  const users = await User.find({}); // get all query
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




exports.getById = async (req, res) => {
  try{
  // const id = req.params.id;
  const { id } = req.params;
 console.log(id);

  const user = await User.findOne({ _id: id }); // returns single doc.
//  const user = await User.find({ _id: id }); //[]
//  const user = await User.findById(id); // returns single document or null
  // console.log(user);
  if(!user) {
  res.status(404).json({
    message: "user not found",
    data: null,
  });
  return;
}
// db query
res.status(200).json({
  message: "User by id fetched",
  data: user,
});
} catch (error) {
  res.status(500).json({
    message: error.message || "something went wrong",
    data: null,
  });
};
};

exports.create = async (req, res) => {
  try{
  const { name, email, password, phone } = req.body;
  // db op.
  const user = await User.create({
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
  res.status(500).json({
    message: error.message || "something went wrong",
    data: null,
  })
};
};



exports.update = async (req, res) => {
try {
  console.log(req.params);
  const { id }= req.params;
  const { name, email, password, phone } = req.body;

  //! find one by id
  const user = await User.findOne({ _id: id }); 

  if(!user) {
    res.status(404).json({
      message: "User not found",
      data: null,
    })
    return;
  }

  //! update user
  if(name) {
    user.name = name;
  } 
  if(email) {
    user.email = email;
  }
  if(password) {
    user.password = password;
  }
  if(phone) {
    user.phone = phone;
  }
  // if (phone) {
  //  user.phone = phone;
  // }
//! save user 
await user.save();

res.status(200).json({
  message: "user updated",
  data: user,
}); 
} catch (error) {
  res.status(500).json({
    message: error.message || "something went wrong",
    data: null,
  });
}
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

//  User.findByIdAndDelete(id); // find by id and delete
//  const user = await User.findOneAndDelete
//  await user.dekleteOne(); // delete document
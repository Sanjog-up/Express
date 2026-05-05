const users = [];

exports.getUsers = (req, res) => {
  res.status(200).json({
    message: "All users fetched",
    data: users,
  });
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

 exports.create = (req, res) => {
  // req.body => {name: '', email: ''}
  // db op.
  res.status(201).json({
    message: "user created",
  });
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
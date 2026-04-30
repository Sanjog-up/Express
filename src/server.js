const http = require("http");
const express = require("express");

//  creating server

const PORT = 8000;

//? rest api => GET, POST PUT/PATCH, DELETE

const handler = (req, res) => {
  console.log(req.url, req.method);
  //   res.end("Hello world");
  const url = req.url;
  switch (url) {
    case "/": {
      res.end("<h1>Home Page</h1>");
      break;
    }
    case "/users": {
      res.end("<h1>Users List</h1>");
    }
  }
};

//  creating express app instance
const app = express();

//? creating server
const server = http.createServer(app);

// get-> / ==> home page
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get("/users", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "John Doe",
      email: "johngmail.com",
      password: "123456",
    },
    {
      _id: 2,
      name: "david smith",
      email: "davis@gmail.com",
      password: "432132",
    },
  ]);
});

//! create
app.post("/users", (req, res) => {
  res.json({
    message: "user created",
  });
});

//! update
app.put("/users", (req, res) => {
  res.json({
    messgae: "user updated",
  });
});

//! delete
app.delete("/users", (req, res) => {
  res.json({
    message: "user deleted",
  });
});
//  get -> /products
app.get("/products", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Ipad",
      model: "ipad 3",
    },
    {
      _id: 2,
      name: "pant",
      size: "30",
    },
  ]);
});
//  get -> /categories
app.get("/categories", (req, res) => {
  res.json([
    {
      _id: 1,
      name: "dog",
      height: "3",
    },
    {
      _id: 2,
      name: "sabbu",
      age: "0",
    },
  ]);
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("press ctrl + c to close server");
});

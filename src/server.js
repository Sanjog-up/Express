const http = require("http");
const express = require("express");
const { connectDB } = require("./config/db.config");
//* importing routes 
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");

//  creating server

const PORT = 8080;
// const DB_URI = "mongodb://localhost:27017/expressdb";
const DB_URI = "mongodb://localhost:27017";

//? rest api => GET, POST PUT/PATCH, DELETE

// const handler = (req, res) => {
//   console.log(req.url, req.method);
//   //   res.end("Hello world");
//   const url = req.url;
//   switch (url) {
//     case "/": {
//       res.end("<h1>Home Page</h1>");
//       break;
//     }
//     case "/users": {
//       res.end("<h1>Users List</h1>");
//     }
//     default: {
//       res.end("<h1>404 not found</h1>");
//     }
//   }
// };

//  creating express app instance
const app = express();


//? creating server
const server = http.createServer(app);

//! connect database
connectDB(DB_URI);

//! pase req json data to as req.body
app.use(express.json()); // req.body = {}


// get-> / ==> home page
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});


//! using routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);


//  get -> /categories
// app.get("/categories", (req, res) => {
//   res.status(200).json([
//     {
//       _id: 1,
//       name: "dog",
//       height: "3",
//     },
//     {
//       _id: 2,
//       name: "sabbu",
//       age: "0",
//     },
//   ]);
// });

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("press ctrl + c to close server");
});

//! REST API 
//? REST -> REPRESENTATIONAL STATE TRANSFER
//? API -> Application Programming Interface  

//* client-server

//* stateless
//  R1 -> U1 -> RE1
//  R2 -> U1 ->

//* res cacheable

// * layered system

// c -> proxy server -> load balancer -> server

// ! resource => //{}
//! endpoint =>   /users/orders/1
//! route => app.get("/products", () => {})
//! representation => json

//!  uses standard http req methods 
//* GET -> get req/ query
//* POST -> create new data
//* PATH -> update  
//* PUT -> update data 
//* DELETE -> remove resource

//! uses standard http response status code
//* 100 -599
//? 100-199 -> informational res
//? 200-299 -> successful res
//? 300-399 -> redirectional res
//? 400-499 -> client side error
//? 500-599 -> server side  error

// * uniform interface
//get-user

// endpoint 
//? resource collections
// /users
// /products 

// single resource
// /users/1

//! parameters
// heep://localhost:8080/products?name=shirt&size=10&page=1&limit=5
//* search/query params => req.quqery => {name:'',email:'',page:'',limit:''}

//* route params =>
//  /users/1 => /users/:id =>  req.params => {id:1}
//* /users/100 => req.params => {xyz:100}
//? /users/1/orders/1  => /users/:id/orders/:orderid  => req.params  => {id:1,orderId:1}

//! req.headers => {} 
//! req.query {}
//!  req.params => {}
//! req.body => {}

//! res.json() => send json response
//! res.status(status_code)  
//! ress.cookie(key,value,options) 
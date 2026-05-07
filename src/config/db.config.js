const mongoose = require("mongoose");

exports.connectDB = (DB_URI) => {
    mongoose.connect(DB_URI, {
      dbName: "team_12",
      autoCreate: true,
    }
    ).then(()=> {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log("---databse connection error---");
      console.log(error);
    });
};


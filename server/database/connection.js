const mongoose = require("mongoose");
require('dotenv').config()
const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB is Connected!");
  })
  .catch((err) => {
    console.log("Error While calling when Database Connected", err);
  });

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let bookModel = mongoose.Schema(
  {
    name: String,
    contact: Number,
    email: String
  },

  {
    collection: "contact",
  }
);

//booksmodel to create new book more powerful than just class
module.exports = mongoose.model("Book", bookModel);

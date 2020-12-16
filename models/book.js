const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  author: {
    type: String,
    default: ""
  },
  // url for recipe web page - unique index
  description: {
    type: String,
    default: ""
  },

  // Not all ingredients, just the recommended ingredients from scraped web pages
  // from which seed data was sourced
  rating: [String]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

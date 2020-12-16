const app = require("express").Router();
const db = require("../models/book");

app.post("/api/saveBook", function (req, res) {
	console.log(req.body,"POST")
  db.create(req.body).then((response) => {
	console.log(response);
	res.json(response)
  });
});
module.exports = app;

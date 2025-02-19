//Create web server
//Create a server that listens on port 3000 and has a single route (endpoint) that accepts POST requests to /comments. It should send back the value of the comment key in the request body.
//The server should return a 400 status code if the request body does not have a comment key.

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/comments", (req, res) => {
  if (req.body.comment) {
    res.status(200).send(req.body.comment);
  } else {
    res.status(400).send();
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

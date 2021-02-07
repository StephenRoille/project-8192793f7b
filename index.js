const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.send("Now commiting to a testing branch, later merged to master... hope an update occurs");
})

app.listen(port);
console.log("Server started at port " + port);

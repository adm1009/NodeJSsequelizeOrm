const express = require("express");
const app = express();
const port = 8080;
require("./models");
app.get("/", (req, resp) => {
  resp.send("Homepage");
});
var userCtrl = require("./controllers/userController");
app.get("/add", userCtrl.addUser);
app.get("/crud", userCtrl.crudOperation);
app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});

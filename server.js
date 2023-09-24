const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));

mongoose
  .connect("mongodb://127.0.0.1:27017/accounts")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Slusam na portu ${PORT}`);
});

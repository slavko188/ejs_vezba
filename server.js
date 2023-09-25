require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
//Q2ovm5fJXerbacjZ

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
app.use(require("./routes"));

app.listen(process.env.PORT, () => {
  console.log(`Slusam na portu 3000`);
});

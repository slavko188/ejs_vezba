const mongoose = require("mongoose");

const AccountShema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  card: { type: String },
  deposit: { type: Number },
});

const AccountModel = mongoose.model("users", AccountShema); //colection
module.exports = AccountModel;

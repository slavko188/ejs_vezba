const AccountModel = require("../models/account");

const getAllAccountsMidllwere = (req, res, next) => {
  AccountModel.find({})
    .then((accounts) => {
      req.locals = accounts;
      next();
    })
    .catch((error) => {
      console.log(error);
      res.render("/error");
    });
};

module.exports = getAllAccountsMidllwere;

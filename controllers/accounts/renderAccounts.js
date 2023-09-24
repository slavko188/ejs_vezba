const AccountModel = require("../../models/account");

const renderAccounts = (req, res) => {
  AccountModel.find({})
    .then((accounts) => {
      res.render("index", { accounts });
    })
    .catch((error) => {
      res.render("error", { error: error.message });
    });
};

module.exports = renderAccounts;

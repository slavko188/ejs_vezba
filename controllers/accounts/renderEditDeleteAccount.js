const AccountModel = require("../../models/account");
const renderEditDeleteAccount = (req, res) => {
  AccountModel.find({})
    .then((accounts) => {
      res.render("editDeletePage", { accounts });
    })
    .catch((error) => {
      res.render("error", { error: error.message });
    });
};

module.exports = renderEditDeleteAccount;

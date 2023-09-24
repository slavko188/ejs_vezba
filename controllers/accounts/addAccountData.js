const AccountModel = require("../../models/account");

const addAccountData = (req, res) => {
  const data = req.body;
  let newAccount = new AccountModel(data);
  newAccount
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/error");
    });
};

module.exports = addAccountData;

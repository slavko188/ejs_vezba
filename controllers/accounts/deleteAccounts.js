// let accounts = require("../../accounts.json");
// const fs = require("fs");
// const deleteAccounts = (req, res) => {
//   let foundIndex = null;
//   accounts.find((acc, index) => {
//     if (acc.id === req.params.id) {
//       foundIndex = index;
//     }
//     return acc.id === req.params.id;
//   });
//   accounts.splice(foundIndex, 1);

//   fs.writeFile("accounts.json", JSON.stringify(accounts), (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.redirect("/editDelete");
//     }
//   });
// };
// module.exports = deleteAccounts;

const AccountModel = require("../../models/account");

const deleteAccounts = (req, res) => {
  AccountModel.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      res.redirect("/editDelete");
    })
    .catch((error) => {
      res.render({ error: error.message });
    });
};

module.exports = deleteAccounts;

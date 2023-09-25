// const accounts = require("../../accounts.json");
// const fs = require("fs");

// const updateAccount = (req, res) => {
//   console.log(req.body);
//   const { id, ...account } = req.body;

//   let foundIndex = null;
//   accounts.find((acc, index) => {
//     foundIndex = index;
//     return acc.id === id;
//   });
//   accounts[foundIndex] = req.body;
//   fs.writeFile("accounts.json", JSON.stringify(accounts), (err) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.redirect("/edit");
//     }
//   });
// };

// module.exports = updateAccount;
const AccountModel = require("../../models/account");

const updateAccount = (req, res) => {
  let { id, ...account } = req.body;
  AccountModel.updateOne({ _id: id }, { $set: account })
    .then((result) => {
      console.log(result);
      res.redirect("/editDelete");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = updateAccount;

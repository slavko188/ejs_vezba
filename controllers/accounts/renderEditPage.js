const AccountModel = require("../../models/account");
const renderEditPage = (req, res) => {
  let { id } = req.params;
  AccountModel.findOne({ _id: id })
    .then((foundAccount) => {
      res.render("editPage", { foundAccount });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = renderEditPage;

const { Router } = require("express");
const getAllAccountsMidllwere = require("../midlleware/getAllAccountsMidllwere");
const router = Router();

//GET
router.get(
  "/",
  getAllAccountsMidllwere,
  require("../controllers/accounts/renderAccounts.js")
);
router.get("/add", require("../controllers/accounts/renderAddAccount.js"));
router.get(
  "/editDelete",
  require("../controllers/accounts/renderEditDeleteAccount.js")
);
router.get("/edit/:id", require("../controllers/accounts/renderEditPage.js"));
router.get("/delete/:id", require("../controllers/accounts/deleteAccounts.js"));
//POST-uzimanje podataka iz forme
router.post("/add", require("../controllers/accounts/addAccountData.js"));
router.post("/update", require("../controllers/accounts/updateAccount.js"));

module.exports = router;

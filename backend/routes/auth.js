const router = require("express").Router();
const authController = require("../controllers/authController");
//register
router.post("/register", authController.register);
//login
router.post("/login", authController.login);
//refresh
router.post("/refresh", authController.refresh);
//logout
router.post("/logout", authController.logout);

module.exports = router;

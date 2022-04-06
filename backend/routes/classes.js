const router = require("express").Router();
const Class = require("../models/Class");
const verify = require("./verifyToken");
const classController = require("../controllers/classController");

router.get("/", verify, classController.getAllClasses);
router.post("/create", verify, classController.createClass);
module.exports = router;

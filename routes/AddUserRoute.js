const express = require('express');
const Mydata = require("../models/mydataschema");
const router= express.Router();
const Usercontroller = require("../controllers/userController");
router.get("/add.html", Usercontroller.addUser);

  router.post("/add.html", Usercontroller.postUser);

  module.exports = router;
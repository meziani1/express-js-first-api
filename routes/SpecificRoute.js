const express = require('express');
const Mydata = require("../models/mydataschema");
const router= express.Router();
const Usercontroller = require("../controllers/userController");
// GET 
router.get("/index.html", Usercontroller.getIndex);
  
  router.get("/home.html", Usercontroller.getLandingPage);
  
 router.get("/", Usercontroller.getHome);
  

  
 router.get("/edit.html/:id", Usercontroller.editUser);
  
 router.get("/view.html/:id",Usercontroller.viewUser);

  //post
  

  
 router.post("/search", Usercontroller.searchUser);
  
  // DELETE
 router.delete("/edit/:id", Usercontroller.deleteUser);
  
  // PUT
 router.put("/edit/:id", Usercontroller.saveUpdate);

  module.exports = router;
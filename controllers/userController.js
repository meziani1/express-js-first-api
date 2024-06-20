const Mydata = require("../models/mydataschema");

const getHome = (req, res) => {
  res.render("home.ejs", {});
};

const getIndex = (req, res) => {
  Mydata.find()
    .then((result) => {
      res.render("index.ejs", { arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const getLandingPage = (req, res) => {
  res.render("home.ejs", {});
};

const editUser = (req, res) => {
  Mydata.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.render("user/edit.ejs", { arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewUser = (req, res) => {
  Mydata.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.render("user/view.ejs", { arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const searchUser= (req, res) => {
    // console.log(req.body);
    const searchWord=req.body.searchText.trim();
    Mydata.find({usernameee:searchWord})
    .then((result) => {
      console.log(result);
      res.render('user/search.ejs',{arr:result})
    })
    .catch((err) => {
      console.log(err);
    });
  }

 const  deleteUser=(req, res) => {
    console.log("doone");
    Mydata.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect("/index.html");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const saveUpdate= (req, res) => {
    Mydata.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.redirect("/index.html");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(req.body);
  }

  const addUser= (req, res) => {
    res.render("user/add.ejs", {});
  }

  const postUser= (req, res) => {
    console.log(req.body);
    // Mydata.create(req.params).then(() => {
    // res.redirect("/index.html")
  
    const mydata = new Mydata(req.body);
    mydata
      .save()
      .then(() => {
        res.redirect("/index.html");
      })
      .catch((err) => {
        console.log(err);
      });
  }

module.exports = { getHome, getIndex, getLandingPage, editUser, viewUser,searchUser,deleteUser,saveUpdate,addUser,postUser };

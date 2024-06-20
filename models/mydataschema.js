const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    usernameee : String ,
    age: String }
);

//create a model for my schema
const Mydata = mongoose.model("Mydataa",articleSchema);

// export my model
module.exports=Mydata;
var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Abhirami:anjujaya4@cluster0.idqsrck.mongodb.net/Empdb?retryWrites=true&w=majority&appName=Cluster0")
//Write missing code 

  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

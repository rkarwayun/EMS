var mongoose = require("mongoose");

var cateringSchema = new mongoose.Schema({
   name: {type: String, required: true},
   image: String,
   description: String,
   location: String,
   price: String,
   beverages: String,
   contactno: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "user"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "comment"
      }
   ]
});

module.exports = mongoose.model("catering", cateringSchema);
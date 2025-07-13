// monodb
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://pujan:Paneru%40321@nihareeka.knwy0rq.mongodb.net/iic2"
    );
    console.log("database connected");
  } catch (err) {
    if (err) {
      console.log("something went wrong on db connection", err);
      throw new Error(err);
    }
  }
};
module.exports = connectDb;

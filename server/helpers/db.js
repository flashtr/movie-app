const mongoose = require("mongoose");

//console.log(process.env.MONGODB_CONNECTION_STRING);
module.exports = () => {
  mongoose.connect(
    "mongodb://admin:1234abcd@ds121834.mlab.com:21834/heroku_xsg5w0xb",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  mongoose.connection.once("open", () => {
    console.log("Mongodb connected");
  });

  mongoose.connection.on(
    "error",
    console.error.bind(console, "connection error:")
  );
};

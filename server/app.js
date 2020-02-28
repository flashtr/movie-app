const express = require("express");
const expressGraphQL = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");
const app = express();
require("dotenv").config();
app.use(cors());
const db = require("./helpers/db.js")();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
app.listen(5000, () => {
  //console.log("server is running...");
});

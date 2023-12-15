require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoConnect = require("./config/db");
const Schema = require("./Schema/Schema");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

mongoConnect();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Express Started on ${port}`);
});

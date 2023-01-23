const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(express.json());
app.use(cors());
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

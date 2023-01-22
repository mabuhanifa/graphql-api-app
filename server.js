const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(express.json());
app.use(cors());
const data = require("./mock.json");
const graphql = require("graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;
const { graphqlHTTP } = require("express-graphql");

const RootQuery = "query";
const Mutation = "mutation";

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

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

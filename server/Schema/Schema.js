const { GraphQLSchema } = require("graphql");
const { RootQuerry } = require("./RootQuerry/RootQuerry");
const { Mutation } = require("./Mutations/Mutation");

module.exports = new GraphQLSchema({
  query: RootQuerry,
  mutation: Mutation,
});

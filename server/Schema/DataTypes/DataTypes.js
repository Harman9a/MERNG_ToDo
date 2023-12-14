const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const ToDoType = new GraphQLObjectType({
  name: "todo",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

module.exports = { ToDoType };

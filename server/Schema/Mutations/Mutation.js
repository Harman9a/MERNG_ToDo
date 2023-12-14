const { GraphQLID, GraphQLString, GraphQLObjectType } = require("graphql");
const { ToDoType } = require("../DataTypes/DataTypes");
const { ToDoMongo } = require("../../Models/ToDoSchema");

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTodo: {
      type: ToDoType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        let result = new ToDoMongo({
          name: args.name,
        });
        return result.save();
      },
    },
  },
});

module.exports = { Mutation };

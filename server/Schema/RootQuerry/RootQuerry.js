const { ToDoMongo } = require("../../Models/ToDoSchema");
const { ToDoType } = require("../DataTypes/DataTypes");

const { GraphQLObjectType, GraphQLList } = require("graphql");

const RootQuerry = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    AllToDo: {
      type: new GraphQLList(ToDoType),
      resolve: (parent, args) => {
        return ToDoMongo.find();
      },
    },
  },
});

module.exports = { RootQuerry };

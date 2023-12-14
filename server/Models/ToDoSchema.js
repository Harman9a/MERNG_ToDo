const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const ToDoMongo = mongoose.model("ToDo", ToDoSchema);

module.exports = { ToDoMongo };

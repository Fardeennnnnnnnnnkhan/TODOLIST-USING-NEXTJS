import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default : Date.now, // Stores the due date or task date
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", TodoSchema);
export default TodoModel;

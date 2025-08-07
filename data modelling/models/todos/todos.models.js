import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      // important do note that here you give the name which you given to your model, 
      // mongoose.model("User", userSchema) 
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Array of Sub-Todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

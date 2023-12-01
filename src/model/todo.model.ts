import mongoose, { Types } from "mongoose";
interface ITodo {
  title: string;
  description: string;
  status: boolean;
  date: Date;
  user: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  done: boolean;
  priority: string;
}

const TodoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    done: { type: Boolean, default: false },
    priority: { type: String, default: "low" },
  },
  { timestamps: true }
);

const Todo = mongoose.model<ITodo & mongoose.Document>("Todo", TodoSchema);

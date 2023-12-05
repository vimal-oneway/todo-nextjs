import mongoose, { Document, Schema, Types, model } from "mongoose";
export interface ITodo {
  title: string;
  description: string;
  status: boolean;
  date: Date;
  user: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  done: boolean;
  priority: string;
  color?: string;
  library: Types.ObjectId;
}

export interface ITodoDocument extends ITodo, Document {}

export const TodoSchema = new Schema<ITodoDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    done: { type: Boolean, default: false },
    priority: { type: String, default: "low" },
    color: { type: String },
    library: { type: mongoose.Schema.Types.ObjectId, ref: "Library" },
  },
  { timestamps: true }
);

export const TodoModel =
  mongoose.models.Todo || model<ITodoDocument>("Todo", TodoSchema);

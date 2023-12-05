import mongoose, { Document, Schema, Types } from "mongoose";

import "./library.model";
import "./todo.model";

interface IUser {
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  profilePicture: string;
  library: [Types.ObjectId];
  todos: [Types.ObjectId];
}

export interface IUserDocument extends IUser, Document {}

export const UserSchema = new Schema<IUserDocument>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    profilePicture: { type: String, required: true },
    library: [{ type: Types.ObjectId, ref: "Library" }],
    todos: [{ type: Types.ObjectId, ref: "Todo" }],
  },
  { timestamps: true }
);

export const UserModel =
  mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);

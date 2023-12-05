import mongoose, { Document, Schema, Types } from "mongoose";

export interface ILibrary {
  createdAt?: Date;
  updatedAt?: Date;
  title: string;
  todos: [Types.ObjectId];
  user: Types.ObjectId;
}

export interface ILibraryDocument extends ILibrary, Document {}

export const LibrarySchema = new Schema<ILibraryDocument>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  todos: [{ type: Types.ObjectId, ref: "Todo" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const LibraryModel =
  mongoose.models.Library ||
  mongoose.model<ILibraryDocument>("Library", LibrarySchema);

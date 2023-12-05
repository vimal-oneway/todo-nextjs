import mongoose from "mongoose";

export const connectDb = () => {
  return mongoose.connect(process.env.DB_URL! as string);
};

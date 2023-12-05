import mongoose from "mongoose";

export const connectDb = async () => {
  return mongoose.connect(process.env.DB_URL! as string).then(() => {
    console.log("database connected successfully\n");
  });
};

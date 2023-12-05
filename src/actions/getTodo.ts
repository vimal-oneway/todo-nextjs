"use server";

import { connectDb } from "@/model";
import { UserModel } from "@/model/user.model";
import { ITodoWithId } from "@/types/todo";
import { getServerSession } from "next-auth";

export const getTodo = async () => {
  const session = await getServerSession();
  if (!session?.user) return null;

  const email = session.user.email;

  await connectDb();
  const user = await UserModel.findOne({ email }).populate("todos");

  if (!user) return null;

  return user.todos as ITodoWithId[];
};

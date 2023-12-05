"use server";
import { connectDb } from "@/model";
import { TodoModel } from "@/model/todo.model";
import { revalidatePath } from "next/cache";

export const todoDone = async (id: string, done: boolean) => {
  await connectDb();

  const todo = await TodoModel.findByIdAndUpdate(id, {
    done,
  });
  revalidatePath("/");

  return todo;
};

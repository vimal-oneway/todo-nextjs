"use server";
import { connectDb } from "@/model";
import { TodoModel } from "@/model/todo.model";
import { revalidatePath } from "next/cache";

export const todoDone = async (id: string) => {
  await connectDb();

  const todo = await TodoModel.findByIdAndUpdate(id, {
    done: true,
  });
  revalidatePath("/");

  return todo;
};

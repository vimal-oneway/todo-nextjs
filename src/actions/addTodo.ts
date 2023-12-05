"use server";
import { connectDb } from "@/model";
import { ITodo, TodoModel } from "@/model/todo.model";
import { IUserDocument, UserModel } from "@/model/user.model";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const addTodo = async (formData: FormData) => {
  await connectDb();
  const title = formData.get("title");

  if (!title) return null;

  const session = await getServerSession();

  let user: IUserDocument | null = await UserModel.findOne({
    email: session?.user?.email,
  });

  if (!user) throw new Error("User not found");

  const todo = await TodoModel.create<ITodo>({
    title,
    done: false,
    user: user?._id,
    library: user?.library[0],
  });

  user.todos.push(todo._id);
  await user.save();

  revalidatePath("/");
  return { success: true, todo };
};

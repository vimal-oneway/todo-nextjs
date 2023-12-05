"use server";

import { connectDb } from "@/model";
import { TodoModel } from "@/model/todo.model";
import { UserModel } from "@/model/user.model";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: string) => {
  const session = await getServerSession();
  if (!session?.user?.email) return null;
  console.log("session", session, "id", id);

  await connectDb();
  await Promise.all([
    TodoModel.findByIdAndDelete(id),
    UserModel.findOneAndUpdate(
      { email: session.user.email },
      {
        $pull: {
          todos: id,
        },
      }
    ),
  ]);
  revalidatePath("/");

  return { message: "Todo deleted" };
};

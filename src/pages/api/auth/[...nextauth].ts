import { connectDb } from "@/model";
import { LibraryModel } from "@/model/library.model";
import { TodoModel } from "@/model/todo.model";
import { User } from "@/model/user.model";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOption: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const sessionUser = { ...session.user, ...user };

      return Promise.resolve({
        ...session,
        user: sessionUser,
      });
    },
  },
  events: {
    signIn: async ({ profile }) => {
      await connectDb();
      console.log("database connected\n");

      const user = await User.findOne({ email: profile?.email as string });
      if (user) return;

      let newUser = await User.create({
        email: profile?.email as string,
        profilePicture: profile?.image as string,
        name: profile?.name as string,
      });

      let newTodo = await TodoModel.create({
        title: "My First Todo",
        description: "This is my first todo",
        user: newUser?._id,
      });

      const newCollection = await LibraryModel.create({
        title: "My First Collection",
        user: newUser._id,
        todos: [newTodo._id],
      });

      newTodo.library = newCollection._id;

      newUser.todos = [newTodo._id];

      newUser.library = [newCollection._id];

      await newTodo.save();
      await newUser.save();
    },
  },
};
export default NextAuth(authOption);

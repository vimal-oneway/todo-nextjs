"use client";
import Image from "next/image";
import { Dropdown } from "./Dropdown";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const { data } = useSession();

  return (
    <div className="w-full sticky top-0 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 z-50 h-16">
      <div className="max-w-3xl mx-auto px-5 pt-3 pb-2">
        <section className="flex justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <Image
              src={"/logo.png"}
              alt="Todo-logo"
              width={"28"}
              height={"28"}
            />
            <h1 className="text-2xl md:text-4xl font-bold">Todo</h1>
          </div>
          <Dropdown />
          {/* <div className="w-8 avatar  rounded-full ring-2 ring-blue-500 ">
            <Image
              src={data?.user?.image || "/user.png"}
              alt="user-avatar"
              width={"12"}
              height={"12"}
              className="rounded-full"
            />
          </div> */}
        </section>
      </div>
    </div>
  );
};

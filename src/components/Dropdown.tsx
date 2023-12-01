"use client";
import { Menu } from "@headlessui/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export function Dropdown() {
  const { data } = useSession();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`avatar  rounded-full ring-2 ${open && " ring-blue-500"} `}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="w-8 rounded-full ">
          <Image
            src={data?.user?.image || "/user.png"}
            alt="user-avatar"
            width={"12"}
            height={"12"}
          />
        </div>
      </div>
      {open && (
        <div className="absolute px-3 py-2 ring-2 top-14 right-0 ring-blue-500 rounded-lg">
          <button className="border border-blue-300 my-2 w-full rounded-md px-3 py-1 text-blue-200 font-semibold hover:bg-blue-400 hover:text-black transition-all">
            Collections
          </button>
          <button className="border border-blue-300 my-2 w-full rounded-md px-3 py-1 text-blue-200 font-semibold hover:bg-blue-400 hover:text-black transition-all">
            Todo
          </button>
        </div>
      )}
    </div>
  );
}

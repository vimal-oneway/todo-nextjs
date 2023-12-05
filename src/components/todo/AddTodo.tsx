"use client";
import { addTodo } from "@/actions/addTodo";
import React, { ClassAttributes } from "react";

export const AddTodo = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const ref = React.useRef(null);

  return (
    <div className="fixed w-full bottom-5 left-0 z-50">
      <form
        action={(e) => {
          setIsLoading(true);
          addTodo(e).then(() => {
            setIsLoading(false);
            const input: HTMLInputElement | null =
              document.querySelector("#title");
            if (!input) return;
            input.value = "";
          });
        }}
      >
        <div className="w-full max-w-2xl flex mx-auto gap-2 flex-col md:flex-row rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-5 py-2 bg-gray-400">
          <input
            ref={ref}
            type="text"
            name="title"
            id="title"
            placeholder="Add Todo"
            className="px-2 py-2 placeholder:text-white rounded-lg  focus:outline-none w-full md:w-3/4 text-white bg-gray-700"
          />
          <button className="bg-blue-500 text-white px-2 py-2 rounded-lg w-full md:w-1/2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

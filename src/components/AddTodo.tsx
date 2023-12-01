import React from "react";

export const AddTodo = () => {
  return (
    <div className="fixed w-full bottom-5 left-0 z-50">
      <div className="w-full max-w-2xl flex mx-auto gap-2 flex-col md:flex-row rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 px-5 py-2 bg-gray-400">
        <input
          type="text"
          className="px-2 py-2 rounded-lg focus:border-0 focus:outline-none w-full md:w-3/4 text-black bg-gray-400"
        />
        <button className="bg-blue-500 text-white px-2 py-2 rounded-lg w-full md:w-1/2">
          Add
        </button>
      </div>
    </div>
  );
};

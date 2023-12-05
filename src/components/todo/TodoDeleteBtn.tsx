"use client";
import { deleteTodo } from "@/actions/deleteTodo";
import { Trash } from "lucide-react";
import React, { useState } from "react";

type Props = {
  id: string;
};

export const TodoDeleteBtn = ({ id }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      disabled={isLoading}
      onClick={() => {
        deleteTodo(id)
          .then(() => {
            setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      }}
      className="text-red-500 md:hover:bg-red-400/60 transition-colors duration-100 md:hover:text-white p-2 rounded-lg"
    >
      <Trash />
    </button>
  );
};

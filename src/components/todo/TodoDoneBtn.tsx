"use client";

import { todoDone } from "@/actions/todoDone";
import { useState } from "react";

type TodoDoneBtnProps = {
  done: boolean;
  id: string;
};

export const TodoDoneBtn = ({ done, id }: TodoDoneBtnProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <input
      type="checkbox"
      defaultChecked={done}
      onClick={() => {
        setIsLoading(true);
        if (isLoading) return;
        todoDone(id)
          .then(() => {
            setIsLoading(false);
          })
          .catch(() => {
            setIsLoading(false);
          });
      }}
      className="checkbox border-gray-300"
    />
  );
};

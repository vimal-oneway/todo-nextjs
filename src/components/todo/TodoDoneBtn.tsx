"use client";

import { todoDone } from "@/actions/todoDone";
import { useState } from "react";

type TodoDoneBtnProps = {
  done: boolean;
  id: string;
};

export const TodoDoneBtn = ({ done, id }: TodoDoneBtnProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(done);

  return (
    <input
      type="checkbox"
      defaultChecked={checked}
      onClick={() => {
        setChecked(!checked);
        setIsLoading(true);
        if (isLoading) return;

        todoDone(id, !checked)
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

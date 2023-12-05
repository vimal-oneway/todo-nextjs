import { TodoDeleteBtn } from "./TodoDeleteBtn";
import { TodoDoneBtn } from "./TodoDoneBtn";
import { ITodoWithId } from "@/types/todo";

type TodoCardProps = {
  todo: ITodoWithId;
};

export const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <div>
      <div className="w-full mt-5 bg-gray-700 p-3 rounded-lg flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <TodoDoneBtn done={todo.done} id={todo._id.toString()} />
          <h3 className="text-xl">{todo.title}</h3>
        </div>
        <TodoDeleteBtn id={todo._id.toString()} />
      </div>
    </div>
  );
};

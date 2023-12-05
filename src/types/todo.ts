import { ITodo } from "@/model/todo.model";

export interface ITodoWithId extends ITodo {
  _id: string;
}

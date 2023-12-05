import { getTodo } from "@/actions/getTodo";
import { AddTodo } from "@/components/todo/AddTodo";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import { TodoCard } from "@/components/todo/TodoCard";
import { TodoContainer } from "@/components/todo/TodoContainer";
import { Login } from "@/components/Login";

export default async function Home() {
  const todos = await getTodo();

  if (!todos) {
    return <Login />;
  }

  return (
    <>
      <Navbar />
      <Container>
        <TodoContainer>
          {todos.map((todo) => {
            return <TodoCard todo={todo} key={todo._id} />;
          })}
        </TodoContainer>
        <AddTodo />
      </Container>
    </>
  );
}

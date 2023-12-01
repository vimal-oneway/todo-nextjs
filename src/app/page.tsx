"use client";
import { AddTodo } from "@/components/AddTodo";
import { Container } from "@/components/Container";
import { Dropdown } from "@/components/Dropdown";
import { Navbar } from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data } = useSession();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Navbar />
      <Container>
        dssfdf
        <AddTodo />
      </Container>
    </>
  );
}

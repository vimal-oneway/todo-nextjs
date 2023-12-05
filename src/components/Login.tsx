"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Login = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/api/auth/signin");
  }, []);

  return <div>Login</div>;
};

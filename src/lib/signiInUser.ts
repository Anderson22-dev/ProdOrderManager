"use server";
import { api } from "@/shared/services/api";
import { cookies } from "next/headers";
export async function SignInUser(data: FormData) {
  const userData = await api.post("/auth/login", {
    login: data.get("login"),
    password: data.get("password"),
  });
  cookies().set("token", userData.data.token, {
    httpOnly: true,
    secure: true,
  });
}

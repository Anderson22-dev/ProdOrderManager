"use server";
import { api } from "@/shared/services/api";
export async function SignInUser(data: FormData) {
  const userData = await api.post("/auth/login", {
    login: data.get("login"),
    password: data.get("password"),
  });
  localStorage.setItem("token", userData.data.token);
}

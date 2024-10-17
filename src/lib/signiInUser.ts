"use server";
import { api } from "@/shared/services/api";
import { cookies } from "next/headers";
const cookiesStore = cookies();
export async function SignInUser(data: FormData) {
  const userData = await api.post("/auth/login", {
    login: data.get("login"),
    password: data.get("password"),
  });
  cookiesStore.set("token", userData.data.token, {
    httpOnly: true,
    secure: true,
  });
}

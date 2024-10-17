"use server";
import { api } from "@/shared/services/api";
import { redirect } from "next/navigation";
export async function signUpUser(data: FormData) {
  await api.post("/auth", {
    login: data.get("login"),
    password: data.get("password"),
  });
  redirect("/signin");
}

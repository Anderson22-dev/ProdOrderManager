"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/shared/services/api";
import { redirect } from "next/navigation";
import { useState } from "react";
import { TailSpin } from "react-loading-icons";

const CreateUserFormSchema = z.object({
  login: z.string().min(1, "Campo Obrigatório"),
  password: z.string().min(1, "Campo Obrigatório"),
});

type CreateUserFormData = z.infer<typeof CreateUserFormSchema>;

export default function SignUpform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  });
  const [loading, setLoading] = useState<boolean>();

  async function signUpUser(data: CreateUserFormData) {
    try {
      setLoading(true);
      await api.post("/auth", {
        login: data.login,
        password: data.password,
      });
      redirect("/signin");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col gap-4 bg-white w-[30rem] p-7 rounded-md border-[#E2E8F0] border-2"
      onSubmit={handleSubmit(signUpUser)}
    >
      <h1 className="font-bold text-2xl text-center">Cadastrar</h1>
      <div>
        <Label className="text-sm">Login</Label>
        <Input
          type="text"
          {...register("login")}
          placeholder="email@exemple.com.br"
          className="focus:outline-[#1d4ed8]"
        />
        {errors.login && <span>{errors.login.message}</span>}
      </div>
      <div>
        <Label className="text-sm">Senha</Label>
        <Input
          type="password"
          {...register("password")}
          className="focus:outline-[#1d4ed8]"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <Button type="submit" className="bg-[#1d4ed8]">
        {loading ? <TailSpin /> : <p>Cadastrar</p>}
      </Button>
    </form>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/shared/services/api";
import { cookies } from "next/headers";

const CreateUserFormSchema = z.object({
  login: z.string().min(1, "Campo Obrigatório"),
  password: z.string().min(1, "Campo Obrigatório"),
});

type CreateUserFormData = z.infer<typeof CreateUserFormSchema>;

export default async function SignInform() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(CreateUserFormSchema),
  });

  const cookiesStore = cookies();

  async function SignInUser(data: FormData) {
    const userData = await api.post("/auth/login", {
      login: data.get("login"),
      password: data.get("password"),
    });
    cookiesStore.set("token", userData.data.token, {
      httpOnly: true,
      secure: true,
    });
  }

  return (
    <form
      className="flex flex-col gap-4 bg-white"
      onSubmit={handleSubmit(() => SignInUser)}
    >
      <h1 className="font-bold text-xl">Login</h1>
      <div>
        <Label>Login</Label>
        <Input type="text" {...register("login")} />
        {errors.login && <span>{errors.login.message}</span>}
      </div>
      <div>
        <Label>Senha</Label>
        <Input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <Button type="submit">Salvar</Button>
    </form>
  );
}

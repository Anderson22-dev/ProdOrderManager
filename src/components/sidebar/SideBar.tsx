"use client";
import { FilePlusIcon, HomeIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col justify-between p-4 w-48">
      {/* Nome da empresa */}
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Empresa XYZ</h1>
        <div className="flex flex-col gap-4">
          <Link href={"/dashboard"}>
            <Button
              className="w-full flex justify-start gap-2 "
              variant="ghost"
            >
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link href={"/create_order"}>
            <Button
              className="w-full flex justify-start gap-2 "
              variant="ghost"
            >
              <PlusCircledIcon className="h-5 w-5" />
              Criar Pedido
            </Button>
          </Link>

          <Button className="w-full flex justify-start gap-2 " variant="ghost">
            <FilePlusIcon className="h-5 w-5" />
            Criar Produto
          </Button>
        </div>
      </div>

      {/* Seção de botões de navegação */}

      {/* Seção do usuário */}
      <div className="flex flex-col items-center gap-4">
        <Avatar />
        <div>
          <p className="font-semibold">Anderson Silva</p>
          <p className="text-sm text-gray-400">anderson@email.com</p>
        </div>
        <div className="">
          <Button className="w-full flex items-center gap-2" variant="ghost">
            {/* <LogoutIcon className="h-5 w-5" /> */}
            Sair
          </Button>
        </div>
      </div>

      {/* Botão de logout */}
    </div>
  );
}

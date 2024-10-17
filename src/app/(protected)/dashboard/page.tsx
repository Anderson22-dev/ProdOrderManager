"use client"; // Adicione esta linha no topo do arquivo

import OrdersTable from "@/components/pages/dashboard/OrdersTable";
import { api } from "@/shared/services/api";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

// Tipagem para os pedidos
interface Order {
  ordem: number;
  codigo: string;
  client: string;
  product: string;
  qtd: number;
  dataab: string;
  datare: string;
  datae: string;
  status: string;
}

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);

  async function getOrders() {
    try {
      const { data: ordersFromApi } = await api.get("/prodOrder", {
        headers: {
          Authorization: `Bearer ${cookies().get("token")}`,
        },
      });
      setOrders(ordersFromApi);
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="px-6 py-10 flex flex-col gap-[6.25rem]">
      <h1 className="font-medium text-5xl">Visualizar Pedidos</h1>
      <OrdersTable orders={orders} />
    </div>
  );
}

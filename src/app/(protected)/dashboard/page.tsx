"use client";
import OrdersTable from "@/components/pages/dashboard/OrdersTable";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      return redirect("/signin");
    }
  }, []);

  return (
    <div className="px-6 py-10 flex flex-col gap-[6.25rem]">
      <h1 className="font-medium text-5xl">Visualizar Pedidos</h1>
      <OrdersTable />
    </div>
  );
}

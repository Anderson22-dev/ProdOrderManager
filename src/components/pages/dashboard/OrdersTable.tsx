"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/shared/services/api";
import { useState, useEffect } from "react";

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

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);

  async function getOrders() {
    try {
      const { data: ordersFromApi } = await api.get("/prodOrder", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    <Table>
      <TableHeader>
        <TableRow>
          {[
            "Ordem",
            "Código",
            "Cliente",
            "Produto",
            "Qtd",
            "Data AB",
            "Data RE",
            "Data E",
            "Status",
          ].map((header) => (
            <TableHead key={header} className="border bg-slate-900 text-white">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.ordem} className="border">
            <TableCell className="font-medium text-xs border">
              {order.ordem}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.codigo}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.client}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.product}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.qtd}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.dataab}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.datare}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.datae}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

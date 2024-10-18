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

type baseMaterialType = {
  name: string;
  unitType: string;
};

type MaterialType = {
  id: string;
  baseMaterial: baseMaterialType;
  quantity: string;
  totalAmount: null;
  paidAmount: null;
  remainingAmount: number;
};

type ProductType = {
  id: string;
  name: string;
  productType: "INDUTOR" | "TRANSFORMADOR" | "FONTE";
  productMaterials: MaterialType;
};

type Order = {
  ordem: number;
  id: string;
  customer: string;
  product: ProductType;
  quantity: number;
  openingDate: string;
  lastReviewDate: string;
  deliveryDate: string;
  status: string;
};

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);

  async function getOrders() {
    try {
      const { data: ordersFromApi } = await api.get("/prodOrder/openOrders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrders(ordersFromApi);
    } catch (error) {
      console.error("Erro ao buscar os pedidos:", error);
    }
    try {
      const { data: ordersFromApi } = await api.get(
        "/prodOrder/completeOrders",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOrders([...orders, ordersFromApi]);
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
            "cliente",
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
              {order.id}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.customer}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.product.name}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.quantity}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.openingDate}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.lastReviewDate}
            </TableCell>
            <TableCell className="font-medium text-xs border">
              {order.deliveryDate}
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

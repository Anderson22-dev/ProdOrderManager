import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Tipagem reutilizada para os pedidos
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

interface OrdersTableProps {
  orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  const cellClasses = "font-medium text-xs border";

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
            <TableCell className={cellClasses}>{order.ordem}</TableCell>
            <TableCell className={cellClasses}>{order.codigo}</TableCell>
            <TableCell className={cellClasses}>{order.client}</TableCell>
            <TableCell className={cellClasses}>{order.product}</TableCell>
            <TableCell className={cellClasses}>{order.qtd}</TableCell>
            <TableCell className={cellClasses}>{order.dataab}</TableCell>
            <TableCell className={cellClasses}>{order.datare}</TableCell>
            <TableCell className={cellClasses}>{order.datae}</TableCell>
            <TableCell className={cellClasses}>{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

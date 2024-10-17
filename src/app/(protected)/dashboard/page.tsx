import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <div className="px-6 py-10 flex flex-col gap-[6.25rem]">
      <h1 className="font-medium text-5xl">Visualizar Pedidos</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="border bg-slate-900 text-white">
              Ordem
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Código
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Cliente
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Produto
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Qtd
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Data AB
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Data RE
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Data E
            </TableHead>
            <TableHead className="border bg-slate-900 text-white">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border">
            <TableCell className="font-medium text-xs border">1</TableCell>
            <TableCell className="font-medium text-xs border">
              0001-24
            </TableCell>
            <TableCell className="font-medium text-xs border">
              Empresa ltda ultra high top
            </TableCell>
            <TableCell className="font-medium text-xs border">
              Transformador 700W 150hp aluminium
            </TableCell>
            <TableCell className="font-medium text-xs border">1</TableCell>
            <TableCell className="font-medium text-xs border">
              17/10/24
            </TableCell>
            <TableCell className="font-medium text-xs border">
              17/10/24
            </TableCell>
            <TableCell className="font-medium text-xs border">
              17/12/24
            </TableCell>
            <TableCell className="font-medium text-xs border">
              Em Produção
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

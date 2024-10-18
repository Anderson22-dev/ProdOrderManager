import OrdersTable from "@/components/pages/dashboard/OrdersTable";

export default function Dashboard() {
  return (
    <div className="px-6 py-10 flex flex-col gap-[6.25rem]">
      <h1 className="font-medium text-5xl">Visualizar Pedidos</h1>
      <OrdersTable />
    </div>
  );
}

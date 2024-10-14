import Sidebar from "@/components/sidebar/SideBar";
import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-min h-full">
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

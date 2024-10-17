import Sidebar from "@/components/sidebar/SideBar";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (cookies().has("token") != true) {
    return redirect("/signin");
  }
  return (
    <div className="flex">
      <div className="w-min h-full">
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

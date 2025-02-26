import Sidebar from "@/components/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-20 flex flex-col gap-5">
      <div className="text-3xl font-semibold px-10">Admin Panel</div>
      <div className="flex w-full">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <main className="w-5/6">{children}</main>
      </div>
    </div>
  );
};

export default layout;

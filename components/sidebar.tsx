"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  DollarSign,
  BarChart,
  Settings,
  LogOut,
  MailWarning,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Home },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Bets", href: "/admin/bets", icon: DollarSign },
  { name: "Transactions", href: "/admin/transactions", icon: BarChart },
  { name: "Reports", href: "/admin/reports", icon: MailWarning },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full w-full  flex flex-col justify-between text-card-foreground p-6 border-r border-border">
      <nav className="space-y-4">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
              pathname === href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
      <div className=" bottom-6 left-6 right-6">
        <button className="flex items-center gap-4 w-full p-3 rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

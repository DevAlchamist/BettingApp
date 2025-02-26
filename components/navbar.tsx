"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircleDollarSign,
  Gamepad2,
  Wallet,
  User,
  Gift,
  HelpCircle,
  Shield,
  MailWarning,
} from "lucide-react";

const navigation = [
  { name: "Games", href: "/games", icon: Gamepad2 },
  { name: "Wallet", href: "/wallet", icon: Wallet },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Referral", href: "/referral", icon: Gift },
  { name: "Support", href: "/support", icon: HelpCircle },
  { name: "Fair Play", href: "/fair-play", icon: Shield },
  { name: "Reports", href: "/reports", icon: MailWarning },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center border-b  shadow-md">
      <nav className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-primary">
          <CircleDollarSign className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">BetMaster</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-2 text-sm font-medium transition-all duration-200 hover:text-blue-500 ${
                pathname === item.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="outline" className="text-blue-600 border-blue-600">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

import { CircleDollarSign } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "News", href: "#" },
  ],
  Support: [
    { name: "Help Center", href: "/support" },
    { name: "Safety Center", href: "#" },
    { name: "Community Guidelines", href: "#" },
  ],
  Legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  Games: [
    { name: "Aviator", href: "/game/aviator" },
    { name: "Color Game", href: "/game/color" },
    { name: "All Games", href: "/games" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t  w-full flex justify-center border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <CircleDollarSign className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">BetMaster</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Experience the thrill of next-generation betting with instant
              payouts and provably fair games.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BetMaster. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Responsible Gaming
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Fair Play Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

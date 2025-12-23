"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  TrendingUp,
  FileText,
  ClipboardList,
  Users,
  Settings,
  LogOut
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: TrendingUp, label: "Dashboard" },
    { href: "/dashboard/invoices", icon: FileText, label: "Invoices" },
    { href: "/dashboard/estimates", icon: ClipboardList, label: "Estimates" },
    { href: "/dashboard/customers", icon: Users, label: "Customers" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-slate-700 p-4 flex flex-col z-50">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3 mb-8 px-2">
          <div className="h-10 w-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Calazans Lumina</h1>
            <p className="text-xs text-slate-400">Invoice System</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                isActive(item.href)
                  ? "bg-amber-500/10 text-amber-400 font-medium"
                  : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User */}
        <div className="border-t border-slate-700 pt-4 mt-4">
          <div className="flex items-center gap-3 px-2">
            <div className="h-10 w-10 bg-slate-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">JD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-slate-400">john@example.com</p>
            </div>
            <button className="text-slate-400 hover:text-white">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}

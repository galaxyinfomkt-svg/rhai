"use client";

import Link from "next/link";
import {
  FileText,
  Users,
  DollarSign,
  Clock,
  Plus,
  Sparkles,
  ClipboardList,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Paintbrush,
  Hammer,
  Home,
  LogOut,
  Settings,
  ChevronRight
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-800 border-r border-slate-700 p-4 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="h-10 w-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Calazans Lumina</h1>
            <p className="text-xs text-slate-400">Invoice System</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-amber-500/10 text-amber-400 font-medium"
          >
            <TrendingUp className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/invoices"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-700/50 hover:text-white transition"
          >
            <FileText className="h-5 w-5" />
            Invoices
          </Link>
          <Link
            href="/dashboard/estimates"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-700/50 hover:text-white transition"
          >
            <ClipboardList className="h-5 w-5" />
            Estimates
          </Link>
          <Link
            href="/dashboard/customers"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-700/50 hover:text-white transition"
          >
            <Users className="h-5 w-5" />
            Customers
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-700/50 hover:text-white transition"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
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
      <main className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-slate-400">Welcome back! Here&apos;s what&apos;s happening.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/dashboard/estimates/new"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
            >
              <Plus className="h-5 w-5" />
              New Estimate
            </Link>
            <Link
              href="/dashboard/invoices/new"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-medium"
            >
              <Plus className="h-5 w-5" />
              New Invoice
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-amber-400" />
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <ArrowUpRight className="h-4 w-4" />
                12%
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white">$12,450</h3>
            <p className="text-slate-400">Revenue This Month</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <ArrowUpRight className="h-4 w-4" />
                8%
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white">24</h3>
            <p className="text-slate-400">Invoices This Month</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <ClipboardList className="h-6 w-6 text-green-400" />
              </div>
              <div className="flex items-center text-red-400 text-sm">
                <ArrowDownRight className="h-4 w-4" />
                3%
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white">8</h3>
            <p className="text-slate-400">Pending Estimates</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <div className="flex items-center text-green-400 text-sm">
                <ArrowUpRight className="h-4 w-4" />
                5%
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white">156</h3>
            <p className="text-slate-400">Total Customers</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/10 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition group cursor-pointer">
            <div className="h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Paintbrush className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Painting Services</h3>
            <p className="text-slate-400 text-sm mb-4">Interior, exterior, residential & commercial</p>
            <Link
              href="/dashboard/invoices/new?type=PAINTING"
              className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300"
            >
              Create Invoice <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/10 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition group cursor-pointer">
            <div className="h-12 w-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Construction</h3>
            <p className="text-slate-400 text-sm mb-4">Renovations, remodeling & repairs</p>
            <Link
              href="/dashboard/invoices/new?type=CONSTRUCTION"
              className="flex items-center text-orange-400 text-sm font-medium hover:text-orange-300"
            >
              Create Invoice <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-700/10 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition group cursor-pointer">
            <div className="h-12 w-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Home className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">House Cleaning</h3>
            <p className="text-slate-400 text-sm mb-4">Regular, deep clean & move-in/out</p>
            <Link
              href="/dashboard/invoices/new?type=HOUSE_CLEANING"
              className="flex items-center text-green-400 text-sm font-medium hover:text-green-300"
            >
              Create Invoice <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Invoices */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Recent Invoices</h2>
              <Link href="/dashboard/invoices" className="text-amber-400 text-sm hover:text-amber-300">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Paintbrush className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">INV-001</p>
                    <p className="text-slate-400 text-sm">John Smith</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$2,450.00</p>
                  <span className="inline-block px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Paid
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Hammer className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">INV-002</p>
                    <p className="text-slate-400 text-sm">Sarah Johnson</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$5,800.00</p>
                  <span className="inline-block px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                    Pending
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Home className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">INV-003</p>
                    <p className="text-slate-400 text-sm">Mike Wilson</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$350.00</p>
                  <span className="inline-block px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                    Paid
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Estimates */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Pending Estimates</h2>
              <Link href="/dashboard/estimates" className="text-amber-400 text-sm hover:text-amber-300">
                View all
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Paintbrush className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">EST-015</p>
                    <p className="text-slate-400 text-sm">Kitchen repaint</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$1,200.00</p>
                  <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                    Sent
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Hammer className="h-5 w-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">EST-016</p>
                    <p className="text-slate-400 text-sm">Bathroom renovation</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$8,500.00</p>
                  <span className="inline-block px-2 py-0.5 bg-slate-500/20 text-slate-400 text-xs rounded-full">
                    Draft
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Home className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">EST-017</p>
                    <p className="text-slate-400 text-sm">Deep cleaning service</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">$450.00</p>
                  <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                    Sent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

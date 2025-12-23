"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  FileText,
  Download,
  Eye,
  Edit,
  Trash2,
  Paintbrush,
  Hammer,
  Home,
  Send
} from "lucide-react";

// Sample data
const sampleInvoices = [
  {
    id: "1",
    number: "INV-001",
    customer: "John Smith",
    serviceType: "PAINTING",
    projectName: "Living Room Repaint",
    issueDate: "2024-12-15",
    dueDate: "2024-12-30",
    status: "paid",
    total: 2450.00,
  },
  {
    id: "2",
    number: "INV-002",
    customer: "Sarah Johnson",
    serviceType: "CONSTRUCTION",
    projectName: "Kitchen Renovation",
    issueDate: "2024-12-10",
    dueDate: "2024-12-25",
    status: "pending",
    total: 5800.00,
  },
  {
    id: "3",
    number: "INV-003",
    customer: "Mike Wilson",
    serviceType: "HOUSE_CLEANING",
    projectName: "Deep Clean Service",
    issueDate: "2024-12-18",
    dueDate: "2024-12-20",
    status: "paid",
    total: 350.00,
  },
  {
    id: "4",
    number: "INV-004",
    customer: "Emily Brown",
    serviceType: "PAINTING",
    projectName: "Exterior House Paint",
    issueDate: "2024-12-20",
    dueDate: "2025-01-05",
    status: "draft",
    total: 4200.00,
  },
  {
    id: "5",
    number: "INV-005",
    customer: "David Lee",
    serviceType: "CONSTRUCTION",
    projectName: "Bathroom Remodel",
    issueDate: "2024-12-01",
    dueDate: "2024-12-15",
    status: "overdue",
    total: 8500.00,
  },
];

const serviceIcons = {
  PAINTING: Paintbrush,
  CONSTRUCTION: Hammer,
  HOUSE_CLEANING: Home,
};

const serviceColors = {
  PAINTING: "blue",
  CONSTRUCTION: "orange",
  HOUSE_CLEANING: "green",
};

const statusStyles: Record<string, string> = {
  draft: "bg-slate-500/20 text-slate-400",
  sent: "bg-blue-500/20 text-blue-400",
  pending: "bg-yellow-500/20 text-yellow-400",
  paid: "bg-green-500/20 text-green-400",
  overdue: "bg-red-500/20 text-red-400",
  cancelled: "bg-slate-500/20 text-slate-400",
};

export default function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [invoices] = useState(sampleInvoices);

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.projectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Invoices</h1>
          <p className="text-slate-400">Create and manage your invoices</p>
        </div>
        <Link
          href="/dashboard/invoices/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-medium"
        >
          <Plus className="h-5 w-5" />
          New Invoice
        </Link>
      </div>

      {/* Search & Filters */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search invoices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
            >
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="sent">Sent</option>
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Invoice</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Customer</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Service</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Date</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Status</th>
              <th className="text-right py-4 px-6 text-slate-400 font-medium">Amount</th>
              <th className="text-right py-4 px-6 text-slate-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice) => {
              const Icon = serviceIcons[invoice.serviceType as keyof typeof serviceIcons];
              const color = serviceColors[invoice.serviceType as keyof typeof serviceColors];
              return (
                <tr key={invoice.id} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 bg-${color}-500/20 rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 text-${color}-400`} />
                      </div>
                      <div>
                        <p className="text-white font-medium">{invoice.number}</p>
                        <p className="text-slate-400 text-sm">{invoice.projectName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-white">{invoice.customer}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-slate-400 capitalize">
                      {invoice.serviceType.replace("_", " ").toLowerCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-white text-sm">{new Date(invoice.issueDate).toLocaleDateString()}</p>
                      <p className="text-slate-400 text-xs">Due: {new Date(invoice.dueDate).toLocaleDateString()}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusStyles[invoice.status]}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-white font-medium">
                      ${invoice.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition" title="View">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition" title="Download PDF">
                        <Download className="h-4 w-4" />
                      </button>
                      {invoice.status === "draft" && (
                        <button className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-700 rounded-lg transition" title="Send">
                          <Send className="h-4 w-4" />
                        </button>
                      )}
                      <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg transition" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredInvoices.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">No invoices found</h3>
            <p className="text-slate-400 text-sm mb-4">
              {searchQuery || statusFilter !== "all"
                ? "Try adjusting your filters"
                : "Create your first invoice to get started"}
            </p>
            <Link
              href="/dashboard/invoices/new"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              <Plus className="h-4 w-4" />
              Create Invoice
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

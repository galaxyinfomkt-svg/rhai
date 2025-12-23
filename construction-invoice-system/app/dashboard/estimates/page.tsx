"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Paintbrush,
  Hammer,
  Home,
  Send,
  FileText,
  ArrowRight,
  Download
} from "lucide-react";

// Sample data
const sampleEstimates = [
  {
    id: "1",
    number: "EST-015",
    customer: "Robert Davis",
    serviceType: "PAINTING",
    projectName: "Kitchen Repaint",
    issueDate: "2024-12-18",
    validUntil: "2024-12-28",
    status: "sent",
    total: 1200.00,
  },
  {
    id: "2",
    number: "EST-016",
    customer: "Lisa Anderson",
    serviceType: "CONSTRUCTION",
    projectName: "Bathroom Renovation",
    issueDate: "2024-12-15",
    validUntil: "2024-12-30",
    status: "draft",
    total: 8500.00,
  },
  {
    id: "3",
    number: "EST-017",
    customer: "James Martinez",
    serviceType: "HOUSE_CLEANING",
    projectName: "Deep Cleaning Service",
    issueDate: "2024-12-19",
    validUntil: "2024-12-26",
    status: "sent",
    total: 450.00,
  },
  {
    id: "4",
    number: "EST-018",
    customer: "Patricia Thompson",
    serviceType: "PAINTING",
    projectName: "Full House Exterior",
    issueDate: "2024-12-10",
    validUntil: "2024-12-20",
    status: "approved",
    total: 6800.00,
  },
  {
    id: "5",
    number: "EST-019",
    customer: "Michael Garcia",
    serviceType: "CONSTRUCTION",
    projectName: "Deck Installation",
    issueDate: "2024-12-05",
    validUntil: "2024-12-15",
    status: "expired",
    total: 4200.00,
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
  approved: "bg-green-500/20 text-green-400",
  declined: "bg-red-500/20 text-red-400",
  expired: "bg-yellow-500/20 text-yellow-400",
  converted: "bg-purple-500/20 text-purple-400",
};

export default function EstimatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [estimates] = useState(sampleEstimates);

  const filteredEstimates = estimates.filter((estimate) => {
    const matchesSearch =
      estimate.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      estimate.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      estimate.projectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || estimate.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Estimates</h1>
          <p className="text-slate-400">Create and manage your estimates</p>
        </div>
        <Link
          href="/dashboard/estimates/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-medium"
        >
          <Plus className="h-5 w-5" />
          New Estimate
        </Link>
      </div>

      {/* Search & Filters */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search estimates..."
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
              <option value="approved">Approved</option>
              <option value="declined">Declined</option>
              <option value="expired">Expired</option>
              <option value="converted">Converted</option>
            </select>
          </div>
        </div>
      </div>

      {/* Estimates Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Estimate</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Customer</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Service</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Valid Until</th>
              <th className="text-left py-4 px-6 text-slate-400 font-medium">Status</th>
              <th className="text-right py-4 px-6 text-slate-400 font-medium">Amount</th>
              <th className="text-right py-4 px-6 text-slate-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEstimates.map((estimate) => {
              const Icon = serviceIcons[estimate.serviceType as keyof typeof serviceIcons];
              const color = serviceColors[estimate.serviceType as keyof typeof serviceColors];
              return (
                <tr key={estimate.id} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 bg-${color}-500/20 rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 text-${color}-400`} />
                      </div>
                      <div>
                        <p className="text-white font-medium">{estimate.number}</p>
                        <p className="text-slate-400 text-sm">{estimate.projectName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-white">{estimate.customer}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-slate-400 capitalize">
                      {estimate.serviceType.replace("_", " ").toLowerCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-white text-sm">{new Date(estimate.validUntil).toLocaleDateString()}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusStyles[estimate.status]}`}>
                      {estimate.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-white font-medium">
                      ${estimate.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
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
                      {estimate.status === "draft" && (
                        <button className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-700 rounded-lg transition" title="Send">
                          <Send className="h-4 w-4" />
                        </button>
                      )}
                      {estimate.status === "approved" && (
                        <button className="p-2 text-slate-400 hover:text-green-400 hover:bg-slate-700 rounded-lg transition" title="Convert to Invoice">
                          <ArrowRight className="h-4 w-4" />
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

        {filteredEstimates.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">No estimates found</h3>
            <p className="text-slate-400 text-sm mb-4">
              {searchQuery || statusFilter !== "all"
                ? "Try adjusting your filters"
                : "Create your first estimate to get started"}
            </p>
            <Link
              href="/dashboard/estimates/new"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              <Plus className="h-4 w-4" />
              Create Estimate
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

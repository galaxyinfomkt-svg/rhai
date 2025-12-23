"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  Search,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  FileText
} from "lucide-react";

// Sample data - in real app would come from API
const sampleCustomers = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Los Angeles, CA 90001",
    invoicesCount: 5,
    totalSpent: 12450.00,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "(555) 234-5678",
    address: "456 Oak Ave, San Diego, CA 92101",
    invoicesCount: 3,
    totalSpent: 8750.00,
  },
  {
    id: "3",
    name: "Mike Wilson",
    email: "mike.wilson@email.com",
    phone: "(555) 345-6789",
    address: "789 Pine Rd, San Francisco, CA 94102",
    invoicesCount: 8,
    totalSpent: 24300.00,
  },
  {
    id: "4",
    name: "Emily Brown",
    email: "emily.b@email.com",
    phone: "(555) 456-7890",
    address: "321 Elm St, Sacramento, CA 95814",
    invoicesCount: 2,
    totalSpent: 3200.00,
  },
];

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers] = useState(sampleCustomers);

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Customers</h1>
          <p className="text-slate-400">Manage your customer database</p>
        </div>
        <Link
          href="/dashboard/customers/new"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-medium"
        >
          <Plus className="h-5 w-5" />
          Add Customer
        </Link>
      </div>

      {/* Search & Filters */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search customers by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCustomers.map((customer) => (
          <div
            key={customer.id}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {customer.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{customer.name}</h3>
                  <p className="text-slate-400 text-sm">{customer.invoicesCount} invoices</p>
                </div>
              </div>
              <div className="relative group">
                <button className="text-slate-400 hover:text-white p-1">
                  <MoreVertical className="h-5 w-5" />
                </button>
                <div className="absolute right-0 top-8 bg-slate-700 border border-slate-600 rounded-lg py-1 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-10">
                  <Link
                    href={`/dashboard/customers/${customer.id}/edit`}
                    className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-600 transition"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Link>
                  <Link
                    href={`/dashboard/invoices/new?customer=${customer.id}`}
                    className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:bg-slate-600 transition"
                  >
                    <FileText className="h-4 w-4" />
                    New Invoice
                  </Link>
                  <button className="flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-slate-600 transition w-full">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" />
                {customer.email}
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4" />
                {customer.phone}
              </div>
              <div className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                {customer.address}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-sm">Total Spent</span>
                <span className="text-white font-semibold">
                  ${customer.totalSpent.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <div className="text-center py-12">
          <div className="h-16 w-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-slate-600" />
          </div>
          <h3 className="text-white font-medium mb-2">No customers found</h3>
          <p className="text-slate-400 text-sm">
            {searchQuery
              ? "Try adjusting your search terms"
              : "Add your first customer to get started"}
          </p>
        </div>
      )}
    </main>
  );
}

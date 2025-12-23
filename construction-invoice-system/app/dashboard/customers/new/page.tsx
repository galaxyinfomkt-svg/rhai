"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  FileText,
  Loader2
} from "lucide-react";

export default function NewCustomerPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/dashboard/customers");
      }
    } catch (error) {
      console.error("Error creating customer:", error);
    } finally {
      setLoading(false);
    }
  };

  const usStates = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  return (
    <main className="p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/customers"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Customers
        </Link>
        <h1 className="text-2xl font-bold text-white">Add New Customer</h1>
        <p className="text-slate-400">Create a new customer profile</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-amber-400" />
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-10 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-400" />
            Address
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Street Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                placeholder="123 Main Street"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                  placeholder="Los Angeles"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                >
                  <option value="">Select state</option>
                  {usStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                  placeholder="90001"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-amber-400" />
            Notes
          </h2>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 resize-none"
            placeholder="Add any notes about this customer..."
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/dashboard/customers"
            className="px-6 py-2.5 text-slate-400 hover:text-white transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading || !formData.name}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Customer"
            )}
          </button>
        </div>
      </form>
    </main>
  );
}

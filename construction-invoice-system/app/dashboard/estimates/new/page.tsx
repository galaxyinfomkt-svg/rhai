"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Trash2,
  Loader2,
  Paintbrush,
  Hammer,
  Home,
  Calculator,
  DollarSign,
  Calendar
} from "lucide-react";

interface EstimateItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  unitPrice: number;
}

const serviceTypes = [
  { value: "PAINTING", label: "Painting Services", icon: Paintbrush, color: "blue" },
  { value: "CONSTRUCTION", label: "Construction", icon: Hammer, color: "orange" },
  { value: "HOUSE_CLEANING", label: "House Cleaning", icon: Home, color: "green" },
];

const units = [
  { value: "unit", label: "Unit" },
  { value: "hour", label: "Hour" },
  { value: "day", label: "Day" },
  { value: "sqft", label: "Sq. Ft." },
  { value: "room", label: "Room" },
  { value: "job", label: "Job" },
];

// Sample customers
const sampleCustomers = [
  { id: "1", name: "John Smith" },
  { id: "2", name: "Sarah Johnson" },
  { id: "3", name: "Mike Wilson" },
  { id: "4", name: "Emily Brown" },
];

export default function NewEstimatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "PAINTING";

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerId: "",
    serviceType: initialType,
    projectName: "",
    projectAddress: "",
    validUntil: "",
    notes: "",
    terms: "This estimate is valid for 10 days from the date of issue. Prices may vary based on actual conditions found during the work.",
    taxRate: 0,
    discount: 0,
  });

  const [items, setItems] = useState<EstimateItem[]>([
    { id: "1", description: "", quantity: 1, unit: "unit", unitPrice: 0 },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemChange = (id: string, field: keyof EstimateItem, value: string | number) => {
    setItems(items.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), description: "", quantity: 1, unit: "unit", unitPrice: 0 },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const taxAmount = subtotal * (formData.taxRate / 100);
  const total = subtotal + taxAmount - formData.discount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/estimates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          items: items.map((item) => ({
            ...item,
            total: item.quantity * item.unitPrice,
          })),
          subtotal,
          taxAmount,
          total,
        }),
      });

      if (res.ok) {
        router.push("/dashboard/estimates");
      }
    } catch (error) {
      console.error("Error creating estimate:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard/estimates"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Estimates
        </Link>
        <h1 className="text-2xl font-bold text-white">Create New Estimate</h1>
        <p className="text-slate-400">Provide a quote for your potential customer</p>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Service Type */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Service Type</h2>
            <div className="grid grid-cols-3 gap-4">
              {serviceTypes.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, serviceType: type.value })}
                  className={`p-4 rounded-xl border transition ${
                    formData.serviceType === type.value
                      ? `border-${type.color}-500 bg-${type.color}-500/10`
                      : "border-slate-600 hover:border-slate-500"
                  }`}
                >
                  <type.icon className={`h-8 w-8 mx-auto mb-2 text-${type.color}-400`} />
                  <p className="text-white text-sm font-medium">{type.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Customer & Project */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Customer & Project Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Customer *
                </label>
                <select
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                >
                  <option value="">Select a customer</option>
                  {sampleCustomers.map((customer) => (
                    <option key={customer.id} value={customer.id}>{customer.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Valid Until *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="date"
                    name="validUntil"
                    value={formData.validUntil}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                  placeholder="e.g., Kitchen Renovation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Address
                </label>
                <input
                  type="text"
                  name="projectAddress"
                  value={formData.projectAddress}
                  onChange={handleChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                  placeholder="123 Main St, City, State"
                />
              </div>
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Line Items</h2>
              <button
                type="button"
                onClick={addItem}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium"
              >
                <Plus className="h-4 w-4" />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-5">
                    {index === 0 && (
                      <label className="block text-sm font-medium text-slate-400 mb-2">Description</label>
                    )}
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
                      placeholder="Service description"
                    />
                  </div>
                  <div className="col-span-2">
                    {index === 0 && (
                      <label className="block text-sm font-medium text-slate-400 mb-2">Qty</label>
                    )}
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(item.id, "quantity", parseFloat(e.target.value) || 0)}
                      min="0"
                      step="0.5"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div className="col-span-2">
                    {index === 0 && (
                      <label className="block text-sm font-medium text-slate-400 mb-2">Unit</label>
                    )}
                    <select
                      value={item.unit}
                      onChange={(e) => handleItemChange(item.id, "unit", e.target.value)}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    >
                      {units.map((unit) => (
                        <option key={unit.value} value={unit.value}>{unit.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    {index === 0 && (
                      <label className="block text-sm font-medium text-slate-400 mb-2">Price</label>
                    )}
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                      <input
                        type="number"
                        value={item.unitPrice}
                        onChange={(e) => handleItemChange(item.id, "unitPrice", parseFloat(e.target.value) || 0)}
                        min="0"
                        step="0.01"
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 pl-8 pr-4 text-white focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                  <div className="col-span-1 flex items-end">
                    {index === 0 && <div className="h-[22px] mb-2" />}
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      disabled={items.length === 1}
                      className="p-2.5 text-slate-400 hover:text-red-400 hover:bg-slate-700 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes & Terms */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Notes & Terms</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 resize-none"
                  placeholder="Additional notes for the customer..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Terms & Conditions
                </label>
                <textarea
                  name="terms"
                  value={formData.terms}
                  onChange={handleChange}
                  rows={2}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Summary */}
        <div className="space-y-6">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 sticky top-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Calculator className="h-5 w-5 text-amber-400" />
              Estimate Summary
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tax Rate (%)
                </label>
                <input
                  type="number"
                  name="taxRate"
                  value={formData.taxRate}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  step="0.1"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Discount ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    min="0"
                    step="0.01"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-500/50"
                  />
                </div>
              </div>

              <div className="border-t border-slate-700 pt-4 space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Tax ({formData.taxRate}%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                {formData.discount > 0 && (
                  <div className="flex justify-between text-green-400">
                    <span>Discount</span>
                    <span>-${formData.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-white text-xl font-bold pt-2 border-t border-slate-700">
                  <span>Total</span>
                  <span className="text-amber-400">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                type="submit"
                disabled={loading || !formData.customerId || !formData.validUntil}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Estimate"
                )}
              </button>
              <button
                type="button"
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
              >
                Save as Draft
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

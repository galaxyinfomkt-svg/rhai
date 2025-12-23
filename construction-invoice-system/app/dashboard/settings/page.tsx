"use client";

import { useState } from "react";
import {
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Save,
  Loader2,
  CreditCard,
  Bell,
  Lock,
  Palette
} from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    companyName: "Calazans Lumina Services LLC",
    address: "123 Main Street",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
  });

  const [invoiceSettings, setInvoiceSettings] = useState({
    defaultTaxRate: 8.25,
    defaultPaymentTerms: 30,
    invoicePrefix: "INV",
    estimatePrefix: "EST",
    defaultNotes: "Thank you for your business!",
    defaultTerms: "Payment is due within 30 days of invoice date.",
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleInvoiceSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "number" ? parseFloat(e.target.value) : e.target.value;
    setInvoiceSettings({ ...invoiceSettings, [e.target.name]: value });
  };

  const handleSave = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "invoice", label: "Invoice Settings", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "appearance", label: "Appearance", icon: Palette },
  ];

  const usStates = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  return (
    <main className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-slate-400">Manage your account and preferences</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition ${
                    activeTab === tab.id
                      ? "bg-amber-500/10 text-amber-400"
                      : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-amber-400" />
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
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
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-amber-400" />
                  Business Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={profile.companyName}
                      onChange={handleProfileChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Address
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
                      <input
                        type="text"
                        name="address"
                        value={profile.address}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={profile.city}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        State
                      </label>
                      <select
                        name="state"
                        value={profile.state}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                      >
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
                        value={profile.zipCode}
                        onChange={handleProfileChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "invoice" && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-amber-400" />
                Invoice & Estimate Settings
              </h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Default Tax Rate (%)
                    </label>
                    <input
                      type="number"
                      name="defaultTaxRate"
                      value={invoiceSettings.defaultTaxRate}
                      onChange={handleInvoiceSettingsChange}
                      min="0"
                      max="100"
                      step="0.01"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Default Payment Terms (days)
                    </label>
                    <input
                      type="number"
                      name="defaultPaymentTerms"
                      value={invoiceSettings.defaultPaymentTerms}
                      onChange={handleInvoiceSettingsChange}
                      min="1"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Invoice Number Prefix
                    </label>
                    <input
                      type="text"
                      name="invoicePrefix"
                      value={invoiceSettings.invoicePrefix}
                      onChange={handleInvoiceSettingsChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Estimate Number Prefix
                    </label>
                    <input
                      type="text"
                      name="estimatePrefix"
                      value={invoiceSettings.estimatePrefix}
                      onChange={handleInvoiceSettingsChange}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Default Notes
                  </label>
                  <textarea
                    name="defaultNotes"
                    value={invoiceSettings.defaultNotes}
                    onChange={handleInvoiceSettingsChange}
                    rows={2}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Default Terms & Conditions
                  </label>
                  <textarea
                    name="defaultTerms"
                    value={invoiceSettings.defaultTerms}
                    onChange={handleInvoiceSettingsChange}
                    rows={3}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50 resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5 text-amber-400" />
                Notification Preferences
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Email notifications for new payments", checked: true },
                  { label: "Email notifications for overdue invoices", checked: true },
                  { label: "Weekly revenue summary", checked: false },
                  { label: "New estimate approvals", checked: true },
                ].map((item, index) => (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      className="h-5 w-5 rounded border-slate-600 bg-slate-700 text-amber-500 focus:ring-amber-500/50"
                    />
                    <span className="text-white">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-amber-400" />
                Security Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    placeholder="••••••••"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-amber-500/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Palette className="h-5 w-5 text-amber-400" />
                Appearance Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Theme
                  </label>
                  <div className="flex gap-4">
                    {["Dark", "Light", "System"].map((theme) => (
                      <button
                        key={theme}
                        className={`px-4 py-2 rounded-lg border transition ${
                          theme === "Dark"
                            ? "border-amber-500 bg-amber-500/10 text-amber-400"
                            : "border-slate-600 text-slate-400 hover:border-slate-500"
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Accent Color
                  </label>
                  <div className="flex gap-3">
                    {["amber", "blue", "green", "purple", "red"].map((color) => (
                      <button
                        key={color}
                        className={`h-10 w-10 rounded-full bg-${color}-500 ${
                          color === "amber" ? "ring-2 ring-white ring-offset-2 ring-offset-slate-800" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-medium disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

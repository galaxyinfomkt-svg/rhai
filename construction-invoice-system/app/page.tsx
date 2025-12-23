"use client";

import Link from "next/link";
import {
  FileText,
  Users,
  DollarSign,
  TrendingUp,
  Paintbrush,
  Home,
  Hammer,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">Calazans Lumina</h1>
              <p className="text-xs text-amber-400/80">Invoice & Estimate System</p>
            </div>
          </div>
          <nav className="flex gap-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-white/80 hover:text-white transition font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition font-semibold shadow-lg shadow-amber-500/25"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-amber-400 text-sm font-medium">Professional Invoicing for Service Businesses</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Create Beautiful
            <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Invoices & Estimates
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            The complete solution for painting contractors, construction companies, and house cleaning professionals in the USA.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition font-semibold text-lg shadow-xl shadow-amber-500/25 flex items-center gap-2"
            >
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition font-semibold text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Service Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition group">
            <div className="h-14 w-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Paintbrush className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Painting Services</h3>
            <p className="text-slate-400">
              Interior & exterior painting, commercial & residential projects. Track by square footage or room.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition group">
            <div className="h-14 w-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Hammer className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Construction</h3>
            <p className="text-slate-400">
              Renovations, remodeling, repairs, and new construction. Detailed itemized billing for every project.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition group">
            <div className="h-14 w-14 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Home className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">House Cleaning</h3>
            <p className="text-slate-400">
              Regular cleaning, deep cleaning, move-in/move-out services. Flexible pricing options.
            </p>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Everything You Need</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Powerful features designed specifically for service businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition">
              <div className="h-12 w-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Professional Invoices
              </h4>
              <p className="text-slate-400 text-sm">
                Create stunning invoices that impress clients and get you paid faster
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition">
              <div className="h-12 w-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Quick Estimates
              </h4>
              <p className="text-slate-400 text-sm">
                Send estimates in minutes and convert them to invoices with one click
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition">
              <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Client Management
              </h4>
              <p className="text-slate-400 text-sm">
                Keep all your customer information organized in one place
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition">
              <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                Business Insights
              </h4>
              <p className="text-slate-400 text-sm">
                Track payments, revenue, and growth with detailed reports
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl p-12 border border-amber-500/20 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose Calazans Lumina?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Easy to Use</span>
                    <p className="text-slate-400 text-sm">No accounting knowledge required. Start invoicing in minutes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">PDF Generation</span>
                    <p className="text-slate-400 text-sm">Download and share professional PDF invoices instantly.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Track Payments</span>
                    <p className="text-slate-400 text-sm">Know exactly who owes you money and when it&apos;s due.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">Mobile Friendly</span>
                    <p className="text-slate-400 text-sm">Create invoices from anywhere on any device.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-400">Invoice #INV-001</span>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Paid</span>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Interior Painting - Living Room</span>
                  <span className="text-white">$850.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Paint & Materials</span>
                  <span className="text-white">$320.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Labor (16 hours)</span>
                  <span className="text-white">$480.00</span>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between">
                <span className="text-white font-semibold">Total</span>
                <span className="text-2xl font-bold text-amber-400">$1,650.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Join thousands of contractors who trust Calazans Lumina for their invoicing needs.
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition font-semibold text-lg shadow-xl shadow-amber-500/25"
          >
            Create Your Free Account <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-white font-semibold">Calazans Lumina</span>
            </div>
            <p className="text-slate-500 text-sm">
              &copy; 2024 Calazans Lumina. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition">Privacy</Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition">Terms</Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
